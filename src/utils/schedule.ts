// Derives a schedule page's display date AND its "week-session" label
// (e.g. "7-2") purely from its POSITION among all real schedule sessions
// (`day: true` entries, sorted by filename), instead of either being
// hand-typed. Position is zipped against `src/data/schedule.tsv`'s equally
// ordered list of real class meeting dates for the date, and against a
// running week/session counter for the label. This is what makes canceling
// a class day a single-line tsv edit (or a deleted/added .mdx file)
// instead of an edit to every downstream page: nothing needs to change for
// its date or label to shift.
import scheduleTsv from "@/data/schedule.tsv?raw";
import { getCollection } from "astro:content";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

// How many sessions make up one displayed "week" in the auto-numbered
// label (e.g. "7-1", "7-2", "7-3"). A week with a different real count
// (e.g. a holiday) should mark the missing session with its own `day: true`
// placeholder page rather than skip a number here — otherwise every later
// label drifts by the shortfall.
const SESSIONS_PER_WEEK = 3;

// "schedule/week-7-1" -> 7, "schedule/week-10-3" -> 10; entries without a
// number sort to the end, alphabetically.
function weekNumber(id: string): number {
  const match = id.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : Infinity;
}

// The single canonical ordering for schedule entries, shared by the
// date/label computation below and by ScheduleTable.astro's rendering, so
// the two can never disagree about what order sessions fall in.
export function sortScheduleEntries<T extends { id: string }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => {
    const diff = weekNumber(a.id) - weekNumber(b.id);
    return diff !== 0 ? diff : a.id.localeCompare(b.id);
  });
}

// Deliberately avoids the Date constructor: parsing "M/D/YYYY" strings is
// timezone-dependent (build machine vs. CI vs. browser), and this project
// has already hit more than one subtle date bug from that class of issue.
function parseDate(raw: string): { month: string; day: number } {
  const [month, day] = raw.split("/");
  return { month: MONTHS[Number(month) - 1] ?? month ?? raw, day: Number(day) };
}

// A tsv line can be a "start..end" range (e.g. a week off) and is rendered
// as one line ("Nov 23–27") instead of a single date.
function formatDate(raw: string): string {
  if (!raw.includes("..")) {
    const { month, day } = parseDate(raw);
    return `${month} ${day}`;
  }
  const [startRaw, endRaw] = raw.split("..") as [string, string];
  const start = parseDate(startRaw);
  const end = parseDate(endRaw);
  return start.month === end.month
    ? `${start.month} ${start.day}–${end.day}`
    : `${start.month} ${start.day} – ${end.month} ${end.day}`;
}

// A sortable/comparable integer (YYYYMMDD) for a date, used to find "today
// or the most recent past session" — plain integer comparison avoids any
// Date-object timezone parsing, same reasoning as formatDate() above. For a
// range, uses the *start* date, so the range stays "current" for its whole
// span until the next real session.
function toComparable(raw: string): number {
  const startRaw = raw.includes("..") ? (raw.split("..")[0] as string) : raw;
  const [month, day, year] = startRaw.split("/").map(Number);
  return (year ?? 0) * 10000 + (month ?? 0) * 100 + (day ?? 0);
}

// One real class-meeting date (or "start..end" range) per non-empty,
// non-comment line, already in chronological order.
function getOrderedDates(): string[] {
  return scheduleTsv
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

interface ScheduleIndex {
  dateByEntryId: Map<string, string>;
  labelByEntryId: Map<string, string>;
}

let scheduleIndex: Promise<ScheduleIndex> | undefined;

async function getScheduleIndex(): Promise<ScheduleIndex> {
  if (!scheduleIndex) {
    scheduleIndex = (async () => {
      const entries = sortScheduleEntries(
        await getCollection(
          "docs",
          (entry) => entry.id.startsWith("schedule/") && entry.data.day === true,
        ),
      );

      const dates = getOrderedDates();
      const dateByEntryId = new Map<string, string>();
      const labelByEntryId = new Map<string, string>();

      // Counts only non-`break` entries, so a break never shifts the
      // week/session numbering of the sessions around it.
      let sessionIndex = 0;
      entries.forEach((entry, i) => {
        const raw = dates[i];
        if (raw) dateByEntryId.set(entry.id, raw);

        if (!entry.data.break) {
          const week = Math.floor(sessionIndex / SESSIONS_PER_WEEK) + 1;
          const session = (sessionIndex % SESSIONS_PER_WEEK) + 1;
          labelByEntryId.set(entry.id, `${week}-${session}`);
          sessionIndex++;
        }
      });

      return { dateByEntryId, labelByEntryId };
    })();
  }
  return scheduleIndex;
}

export async function getDateForEntry(entryId: string): Promise<string | undefined> {
  const raw = (await getScheduleIndex()).dateByEntryId.get(entryId);
  return raw ? formatDate(raw) : undefined;
}

export async function getComparableDateForEntry(
  entryId: string,
): Promise<number | undefined> {
  const raw = (await getScheduleIndex()).dateByEntryId.get(entryId);
  return raw ? toComparable(raw) : undefined;
}

export async function getLabelForEntry(entryId: string): Promise<string | undefined> {
  return (await getScheduleIndex()).labelByEntryId.get(entryId);
}

// !!! Course dates for Astro can be found in Google Drive sheet


// Derives a schedule page's display date from `src/data/schedule.tsv` by
// matching its `day` frontmatter value (e.g. "3-2") against the tsv's
// m/w/f day-id columns, rather than hand-typing a `date` in every page's
// frontmatter — the tsv is the one place to update each semester.
import scheduleTsv from "@/data/schedule.tsv?raw";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

// Deliberately avoids the Date constructor: parsing "M/D/YYYY" strings is
// timezone-dependent (build machine vs. CI vs. browser), and this project
// has already hit more than one subtle date bug from that class of issue.
function parseDate(raw: string): { month: string; day: number } {
  const [month, day] = raw.split("/");
  return { month: MONTHS[Number(month) - 1] ?? month ?? raw, day: Number(day) };
}

// A day-id that repeats across m/w/f within a single tsv row (e.g. a
// whole week off, like Thanksgiving) is stored as a "start..end" range and
// rendered as one line ("Nov 23–27") instead of three separate class days.
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

let dateByDay: Map<string, string> | undefined;

function getDateMap(): Map<string, string> {
  if (dateByDay) return dateByDay;

  dateByDay = new Map();
  const rows = scheduleTsv.trim().split("\n").slice(1); // skip header row
  for (const row of rows) {
    const cols = row.split("\t");
    // columns: week, m-day, m-date, w-day, w-date, f-day, f-date
    const datesInRow = new Map<string, string[]>();
    for (const [dayCol, dateCol] of [
      [1, 2],
      [3, 4],
      [5, 6],
    ] as const) {
      const day = cols[dayCol]?.trim();
      const rawDate = cols[dateCol]?.trim();
      if (!day || !rawDate) continue;
      const dates = datesInRow.get(day) ?? [];
      dates.push(rawDate);
      datesInRow.set(day, dates);
    }
    for (const [day, dates] of datesInRow) {
      const value = dates.length > 1 ? `${dates[0]}..${dates.at(-1)}` : dates[0];
      if (value) dateByDay.set(day, value);
    }
  }
  return dateByDay;
}

export function getDateForDay(day: string): string | undefined {
  const rawDate = getDateMap().get(day);
  return rawDate ? formatDate(rawDate) : undefined;
}

// A sortable/comparable integer (YYYYMMDD) for a day's date, used to find
// "today or the most recent past session" — plain integer comparison avoids
// any Date-object timezone parsing, same reasoning as formatDate() above.
// For a multi-day range (e.g. a week off), uses the *start* date, so the
// range stays "current" for its whole span until the next real session.
function toComparable(raw: string): number {
  const [month, day, year] = raw.split("/").map(Number);
  return (year ?? 0) * 10000 + (month ?? 0) * 100 + (day ?? 0);
}

export function getComparableDateForDay(day: string): number | undefined {
  const rawDate = getDateMap().get(day);
  if (!rawDate) return undefined;
  const startRaw = rawDate.includes("..")
    ? (rawDate.split("..")[0] as string)
    : rawDate;
  return toComparable(startRaw);
}

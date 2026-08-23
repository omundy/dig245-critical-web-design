// Auto-derives schedule sidebar labels as `${day} ${title}` instead of just
// `title`, so pages don't need to duplicate that concatenation into a
// separate frontmatter field (e.g. sidebar.label) kept in sync by hand.
import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import { getCollection } from "astro:content";

interface SidebarLinkLike {
  type: "link" | "group";
  label: string;
  href?: string;
  entries?: SidebarLinkLike[];
}

export const onRequest = defineRouteMiddleware(async (context) => {
  const { starlightRoute } = context.locals;

  const scheduleEntries = await getCollection("docs", (entry) =>
    entry.id.startsWith("schedule/"),
  );
  const dayTitleById = new Map(
    scheduleEntries
      .filter((entry) => entry.data.day)
      .map((entry) => [entry.id, `${entry.data.day} ${entry.data.title}`]),
  );
  if (dayTitleById.size === 0) return;

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  function relabel(entries: SidebarLinkLike[]) {
    for (const entry of entries) {
      if (entry.type === "group" && entry.entries) {
        relabel(entry.entries);
      } else if (entry.type === "link" && entry.href) {
        const id = entry.href
          .replace(base, "")
          .replace(/^\/+|\/+$/g, "");
        const label = dayTitleById.get(id);
        if (label) entry.label = label;
      }
    }
  }

  relabel(starlightRoute.sidebar as SidebarLinkLike[]);
});

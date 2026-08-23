// Auto-derives schedule sidebar (and prev/next pagination) labels as
// `${day} ${title}` instead of just `title`, so pages don't need to
// duplicate that concatenation into a separate frontmatter field (e.g.
// sidebar.label) kept in sync by hand.
import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import { getCollection } from "astro:content";

interface SidebarLinkLike {
  type: "link" | "group";
  label: string;
  href?: string;
  entries?: SidebarLinkLike[];
}

interface PaginationLinkLike {
  label: string;
  href?: string;
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

  function idFromHref(href: string): string {
    return href.replace(base, "").replace(/^\/+|\/+$/g, "");
  }

  function relabel(link: { label: string; href?: string }) {
    if (!link.href) return;
    const label = dayTitleById.get(idFromHref(link.href));
    if (label) link.label = label;
  }

  function relabelSidebar(entries: SidebarLinkLike[]) {
    for (const entry of entries) {
      if (entry.type === "group" && entry.entries) {
        relabelSidebar(entry.entries);
      } else if (entry.type === "link") {
        relabel(entry);
      }
    }
  }

  relabelSidebar(starlightRoute.sidebar as SidebarLinkLike[]);

  const pagination = starlightRoute.pagination as {
    prev?: PaginationLinkLike;
    next?: PaginationLinkLike;
  };
  if (pagination.prev) relabel(pagination.prev);
  if (pagination.next) relabel(pagination.next);
});

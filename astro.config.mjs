// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Github Pages configuration
  site: "https://omundy.github.io",
  base: "/dig245-critical-web-design",
  integrations: [
    starlight({
      title: "DIG 245 Critical Web Design",
      description:
        "Tutorials, demos, and resources for DIG 245 Critical Web Design",
      logo: {
        src: "@/assets/img/network-logo.png",
      },
      customCss: [
        "./src/styles/starlight-overrides.css",
        "./src/styles/tailwind-overrides.css",
        "./src/styles/custom.css",
      ],
      components: {
        // override default Starlight components
        PageTitle: "./src/components/PageTitle.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
        MarkdownContent: "./src/components/MarkdownContent.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/omundy/dig245-critical-web-design",
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/omundy/dig245-critical-web-design/edit/main/",
      },
      routeMiddleware: "./src/routeMiddleware.ts",
      sidebar: [
        { label: "Syllabus", link: "./" },
        { label: "Assignments", link: "./assignments" },

        // autogenerate sidebar links using folder/file names
        {
          label: "Schedule",
          items: [{ autogenerate: { directory: "schedule" } }],
        },
        {
          label: "Tutorials",
          items: [{ autogenerate: { directory: "tutorials" } }],
        },
      ],
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});

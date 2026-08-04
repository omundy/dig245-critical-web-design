# DIG 245 - Critical Web Design

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Tutorials, demos, and resources for DIG 245 Critical Web Design, built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Project Structure

```
.
├── public/
│   └── images/           # course images referenced from docs pages
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/         # one folder per course section, .md pages become routes
│   └── content.config.ts
├── astro.config.mjs       # site title, sidebar, social links
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in `src/content/docs/`. Each file is exposed as a route based on its file path, and the sidebar order/labels are configured in `astro.config.mjs`.

`_OLD/` contains the previous (pre-Astro) version of this site and is not tracked in git; it's kept locally for reference during the migration.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Learn more

Check out [Starlight's docs](https://starlight.astro.build/) or [the Astro documentation](https://docs.astro.build).

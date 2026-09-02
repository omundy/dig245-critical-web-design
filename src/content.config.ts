import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // used by schedule/*.mdx pages and ScheduleTable.astro
        // (date is no longer frontmatter — derived from `day` via
        // src/utils/schedule.ts + src/data/schedule.tsv)
        day: z.string().nullish(),
        // same shape as prep: text supports optional *emphasis* markup,
        // handled by parseDeadline() in src/utils/schedule.ts
        deadlines: z
          .array(z.object({ url: z.string().optional(), text: z.string() }))
          .nullish(),
        // rendered under the H1 by the PageTitle component override, any page
        subtitle: z.string().nullish(),
        prep: z
          .array(z.object({ url: z.string().optional(), text: z.string() }))
          .nullish(),
      }),
    }),
  }),
};

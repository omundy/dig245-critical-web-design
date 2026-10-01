import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  // Defined (even though this site is single-language) purely to silence
  // Starlight's "collection i18n does not exist" build warning — it looks
  // for this collection unconditionally regardless of whether any
  // translations are actually needed.
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // used by schedule/*.mdx pages and ScheduleTable.astro. `day: true`
        // marks a page as a real, dated class session — its date AND its
        // "week-session" display label (e.g. "7-2") are both derived from
        // its position among other `day: true` entries, via
        // src/utils/schedule.ts + src/data/schedule.tsv, not hand-typed.
        day: z.boolean().nullish(),
        // marks a session as standalone (e.g. a holiday/break): it still
        // consumes one dated slot, but is excluded from the week-session
        // numbering of surrounding entries and shows no numeric label.
        break: z.boolean().nullish(),
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

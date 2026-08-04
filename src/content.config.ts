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
				dates: z.string().nullish(),
				deadlines: z.array(z.string()).optional(),
				// rendered under the H1 by the PageTitle component override, any page
				subtitle: z.string().nullish(),
			}),
		}),
	}),
};

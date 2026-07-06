import { glob } from 'astro/loaders';
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
    loader: glob({base: './src/content/blog', pattern: '**/*.md'}),
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z
                .string()
                .max(50, "The title can't be more than 50 chars long!"),
            description: z.string(),
            // Transform string to Date object
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date(),
            heroImage: image(),
        }),
});

export const collections = { blog };

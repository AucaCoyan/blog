import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
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

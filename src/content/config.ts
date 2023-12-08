import { defineCollection, z } from 'astro:content';
import { format } from 'date-fns';

const reviewsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        genre: z.array(z.string()),
        date: z.string().transform((str) => format(new Date(str), 'MMMM dd, yyyy')),
        featured: z.boolean().default(false),
        image: z.string(),
    }),
});

export const collections = {
    reviews: reviewsCollection,
};

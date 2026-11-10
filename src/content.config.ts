import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const dishes = defineCollection({
  loader: glob({ base: "./src/content/dishes", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    order: z.number(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    status: z.enum(["draft", "published"]),
  }),
});

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    description: z.string(),
    details: z.string(),
    order: z.number(),
    action: z.enum(["reservation", "quote", "order"]),
    actionLabel: z.string(),
    whatsappMessage: z.string(),
    status: z.enum(["draft", "published"]),
  }),
});

const gallery = defineCollection({
  loader: glob({ base: "./src/content/gallery", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    order: z.number(),
    status: z.enum(["draft", "published"]),
  }),
});

const testimonials = defineCollection({
  loader: glob({ base: "./src/content/testimonials", pattern: "**/*.md" }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    context: z.string().optional(),
    order: z.number(),
    status: z.enum(["draft", "published"]),
  }),
});

export const collections = { dishes, services, gallery, testimonials };

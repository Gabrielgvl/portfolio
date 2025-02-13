// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
  }),
});

const skillsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    languages: z.array(z.string()),
    frontend: z.array(z.string()),
    backend: z.array(z.string()),
    cloud: z.array(z.string()),
  }),
});

const experiencesCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      title: z.string(),
      company: z.string(),
      period: z.string(),
      description: z.string(),
      achievements: z.array(z.string()),
    })
  ),
});

const educationCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      degree: z.string(),
      institution: z.string(),
      year: z.string(),
    })
  ),
});

const certificationsCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      name: z.string(),
      issuer: z.string(),
      year: z.string(),
    })
  ),
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      technologies: z.array(z.string()),
      link: z.string(),
    })
  ),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  skills: skillsCollection,
  experiences: experiencesCollection,
  education: educationCollection,
  certifications: certificationsCollection,
  projects: projectsCollection,
};

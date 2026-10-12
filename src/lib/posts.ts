import { getCollection, type CollectionEntry } from 'astro:content';
import { externalPosts } from '../data/external-posts';

/** Published posts, newest first. Drafts show up only in `npm run dev`. */
export async function getPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** One row in a post list: either a post on this site or one published elsewhere. */
export type ListItem = {
  title: string;
  date: Date;
  tag: 'technical' | 'not-so-technical';
  href: string;
  source?: string; // set for posts that live on another site
};

/** Posts here plus posts elsewhere (Unstructured blog, Medium), newest first. */
export async function getListItems(): Promise<ListItem[]> {
  const local: ListItem[] = (await getPosts()).map((p) => ({
    title: p.data.title,
    date: p.data.date,
    tag: p.data.tag,
    href: `/blog/${p.id}`,
  }));
  const external: ListItem[] = externalPosts.map((p) => ({
    title: p.title,
    date: new Date(p.date),
    tag: p.tag,
    href: p.url,
    source: p.source,
  }));
  return [...local, ...external].sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

/** Rough reading time from the raw post body (~220 wpm). */
export function readingMinutes(body = ''): number {
  const words = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

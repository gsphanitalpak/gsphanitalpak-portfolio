import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// getBlogPosts

import matter from 'gray-matter';

export async function getBlogPosts() {
  const files = import.meta.glob('../content/blog/*.md', { as: 'raw', eager: true });

  return Object.entries(files).map(([path, content]) => {
    const { data, content: markdownContent } = matter(content as string);
    const slug = path.split('/').pop()?.replace('.md', '');

    return {
      ...data,
      slug,
      content: markdownContent,
    };
  });
}

export const fetchPosts = async () => {
  try {
    const response = await fetch('/api/posts'); // Or replace with your actual API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.posts; // Assuming the posts are inside the `posts` field of the response
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    throw new Error('Failed to fetch blog posts');
  }
};

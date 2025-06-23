import { sanityClient, postsQuery, pagePathsQuery } from '@/lib/sanity'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://heavymetaltested.com'

  // Get all blog posts
  const posts = await sanityClient.fetch(postsQuery)
  const postUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Get all pages
  const pages = await sanityClient.fetch(pagePathsQuery)
  const pageUrls = pages.map((page: any) => ({
    url: `${baseUrl}/${page.params.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  return [...staticPages, ...pageUrls, ...postUrls]
} 
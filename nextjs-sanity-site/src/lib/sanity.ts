import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: 'production',
  projectId: 'tx8g7o6u',
  useCdn: false, // Force direct API calls during development
  apiVersion: '2023-05-03',
}

export const sanityClient = createClient(config)

const builder = imageUrlBuilder(sanityClient)

export const urlForImage = (source: any) => {
  return builder.image(source)
}

// GROQ queries
export const testQuery = `*[_type == "post"]`

export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title,
  "featuredImage": featuredImage.asset->url
}`

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content,
  excerpt,
  publishedAt,
  seoTitle,
  metaDescription,
  "author": author->name,
  "categories": categories[]->title,
  "featuredImage": featuredImage.asset->url
}`

export const postPathsQuery = `*[_type == "post" && defined(slug.current)] {
  "params": { "slug": slug.current }
}` 
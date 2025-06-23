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

// GROQ queries for blog posts
export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "author": coalesce(author->name, null),
  "categories": coalesce(categories[]->title, []),
  "featuredImage": coalesce(featuredImage.asset->url, null),
  "featuredImageAlt": featuredImage.alt,
  seoSection,
  structuredData
}`

export const postQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content,
  excerpt,
  publishedAt,
  "author": coalesce(author->name, null),
  "categories": coalesce(categories[]->title, []),
  "featuredImage": coalesce(featuredImage.asset->url, null),
  "featuredImageAlt": featuredImage.alt,
  "featuredImageCaption": featuredImage.caption,
  seoSection,
  structuredData
}`

export const postPathsQuery = `*[_type == "post" && defined(slug.current)] {
  "params": { "slug": slug.current }
}`

// GROQ queries for pages
export const pageQuery = `*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  seoSection,
  structuredData,
  content[] {
    _type,
    _type == "heroSection" => {
      badgeText,
      headline,
      highlightText,
      description,
      primaryButton,
      secondaryButton
    },
    _type == "featuresSection" => {
      title,
      description,
      features[] {
        title,
        description,
        icon
      }
    },
    _type == "faqSection" => {
      title,
      description,
      faqs[] {
        question,
        answer
      },
      contactText,
      contactButtonText
    },
    _type == "contentSection" => {
      title,
      content,
      backgroundColor
    }
  }
}`

export const pagePathsQuery = `*[_type == "page" && defined(slug.current)] {
  "params": { "slug": slug.current }
}`

export const homepageQuery = `*[_type == "page" && slug.current == "home" && !(_id in path('drafts.**'))][0] {
  _id,
  title,
  slug,
  seoSection,
  structuredData,
  content[] {
    _type,
    _type == "heroSection" => {
      badgeText,
      headline,
      highlightText,
      description,
      primaryButton,
      secondaryButton
    },
    _type == "featuresSection" => {
      title,
      description,
      features[] {
        title,
        description,
        icon
      }
    },
    _type == "faqSection" => {
      title,
      description,
      faqs[] {
        question,
        answer
      },
      contactText,
      contactButtonText
    },
    _type == "contentSection" => {
      title,
      content,
      backgroundColor
    }
  }
}` 
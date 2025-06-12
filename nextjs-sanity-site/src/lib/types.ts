export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  content: any // This will be portable text from Sanity
  excerpt?: string
  publishedAt: string
  seoTitle?: string
  metaDescription?: string
  author?: string
  categories?: string[]
  featuredImage?: string
}

export interface PostListItem {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt: string
  author?: string
  categories?: string[]
  featuredImage?: string
}

export interface Author {
  _id: string
  name: string
  bio?: string
  image?: string
}

export interface Category {
  _id: string
  title: string
  description?: string
} 
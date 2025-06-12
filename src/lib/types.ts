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

// Page types
export interface Page {
  _id: string
  title: string
  slug: {
    current: string
  }
  seoTitle?: string
  metaDescription?: string
  openGraphImage?: string
  content: PageContent[]
}

export type PageContent = HeroSection | FeaturesSection | FaqSection | ContentSection

export interface HeroSection {
  _type: 'heroSection'
  badgeText?: string
  headline: string
  highlightText?: string
  description?: string
  primaryButton?: {
    text: string
    link: string
  }
  secondaryButton?: {
    text: string
    link: string
  }
}

export interface FeaturesSection {
  _type: 'featuresSection'
  title: string
  description?: string
  features: Feature[]
}

export interface Feature {
  title: string
  description?: string
  icon?: string
}

export interface FaqSection {
  _type: 'faqSection'
  title: string
  description?: string
  faqs: FAQ[]
  contactText?: string
  contactButtonText?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ContentSection {
  _type: 'contentSection'
  title?: string
  content: any // Portable text content
  backgroundColor?: string
} 
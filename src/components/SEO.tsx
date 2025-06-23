import Script from 'next/script'
import { Post, Page } from '@/lib/types'

interface SEOProps {
  post?: Post
  page?: Page
  type: 'post' | 'page'
}

export default function SEO({ post, page, type }: SEOProps) {
  const data = type === 'post' ? post : page
  if (!data) return null

  const seoSection = data.seoSection
  const structuredData = data.structuredData

  // Generate structured data for blog posts
  const generatePostStructuredData = () => {
    if (type !== 'post' || !post) return null

    const postStructuredData = structuredData as { articleType?: string; readingTime?: number } | undefined

    const structuredDataObj = {
      '@context': 'https://schema.org',
      '@type': postStructuredData?.articleType || 'BlogPosting',
      headline: seoSection?.seoTitle || post.title,
      description: seoSection?.metaDescription || post.excerpt,
      image: post.featuredImage,
      author: {
        '@type': 'Person',
        name: post.author || 'Heavy Metal Tested',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Heavy Metal Tested',
        logo: {
          '@type': 'ImageObject',
          url: 'https://heavymetaltested.com/logo.png',
        },
      },
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://heavymetaltested.com/blog/${post.slug.current}`,
      },
      ...(postStructuredData?.readingTime && {
        timeRequired: `PT${postStructuredData.readingTime}M`,
      }),
    }

    return structuredDataObj
  }

  // Generate structured data for pages
  const generatePageStructuredData = () => {
    if (type !== 'page' || !page) return null

    const pageStructuredData = structuredData as { pageType?: string; breadcrumbTitle?: string } | undefined

    const structuredDataObj = {
      '@context': 'https://schema.org',
      '@type': pageStructuredData?.pageType || 'WebPage',
      headline: seoSection?.seoTitle || page.title,
      description: seoSection?.metaDescription,
      url: `https://heavymetaltested.com/${page.slug.current}`,
      ...(seoSection?.openGraphImage?.asset?.url && {
        image: seoSection.openGraphImage.asset.url,
      }),
    }

    return structuredDataObj
  }

  const structuredDataObj = type === 'post' ? generatePostStructuredData() : generatePageStructuredData()

  return (
    <>
      {/* Structured Data */}
      {structuredDataObj && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataObj),
          }}
        />
      )}

      {/* Breadcrumb Structured Data for pages */}
      {type === 'page' && page && (
        <Script
          id="breadcrumb-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://heavymetaltested.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: (structuredData as { breadcrumbTitle?: string })?.breadcrumbTitle || page.title,
                  item: `https://heavymetaltested.com/${page.slug.current}`,
                },
              ],
            }),
          }}
        />
      )}

      {/* Organization Structured Data */}
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Heavy Metal Tested',
            url: 'https://heavymetaltested.com',
            logo: 'https://heavymetaltested.com/logo.png',
            description: 'Professional heavy metal testing and certification services',
            sameAs: [
              'https://twitter.com/heavymetaltested',
              'https://linkedin.com/company/heavymetaltested',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-555-123-4567',
              contactType: 'customer service',
              areaServed: 'US',
              availableLanguage: 'English',
            },
          }),
        }}
      />
    </>
  )
} 
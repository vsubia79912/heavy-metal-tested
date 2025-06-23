import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { sanityClient, postQuery, postPathsQuery } from '@/lib/sanity'
import { Post } from '@/lib/types'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

interface Props {
  params: { slug: string }
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    return await sanityClient.fetch(postQuery, { slug })
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const paths = await sanityClient.fetch(postPathsQuery)
    return paths || []
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Heavy Metal Tested',
    }
  }

  const title = post.seoSection?.seoTitle || post.title
  const description = post.seoSection?.metaDescription || post.excerpt || 'Heavy metal testing insights and safety information.'
  const keywords = post.seoSection?.keywords?.join(', ')
  const ogImage = post.seoSection?.openGraphImage?.asset?.url || post.featuredImage

  return {
    title: `${title} | Heavy Metal Tested`,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      images: ogImage ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.seoSection?.openGraphImage?.alt || post.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: {
      index: !post.seoSection?.noIndex,
      follow: !post.seoSection?.noFollow,
    },
    ...(post.seoSection?.canonicalUrl && {
      alternates: {
        canonical: post.seoSection.canonicalUrl,
      },
    }),
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <img
          src={value.asset?.url}
          alt={value.alt || ''}
          className="w-full rounded-lg"
        />
        {value.caption && (
          <p className="text-sm text-gray-600 text-center mt-2">{value.caption}</p>
        )}
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        className="text-blue-900 underline hover:text-teal-600 transition-colors"
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <SEO post={post} type="post" />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20">
        <article className="section">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link href="/blog" className="text-blue-900 hover:text-teal-600 transition-colors">
                ← Back to Blog
              </Link>
            </nav>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                <img
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || post.title}
                  className="w-full h-full object-cover"
                />
                {post.featuredImageCaption && (
                  <p className="text-sm text-gray-600 text-center mt-2">{post.featuredImageCaption}</p>
                )}
              </div>
            )}

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                {post.author && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </>
                )}
                {post.structuredData?.readingTime && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{post.structuredData.readingTime} min read</span>
                  </>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
              
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <PortableText
                value={post.content}
                components={portableTextComponents}
              />
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link 
                  href="/blog"
                  className="btn btn-outline"
                >
                  ← Back to Blog
                </Link>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Want to learn more about heavy metal testing?</p>
                  <Link href="/#contact" className="btn btn-primary">
                    Contact Our Experts
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </div>
      <Footer />
    </>
  )
} 
import type { Metadata } from 'next'
import Link from 'next/link'
import { sanityClient, postsQuery } from '@/lib/sanity'
import { PostListItem } from '@/lib/types'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog | Heavy Metal Tested',
  description: 'Expert insights, testing updates, and safety information about heavy metal contamination in consumer products.',
  openGraph: {
    title: 'Blog | Heavy Metal Tested',
    description: 'Expert insights, testing updates, and safety information about heavy metal contamination in consumer products.',
    url: '/blog',
    type: 'website',
  },
}

async function getPosts(): Promise<PostListItem[]> {
  try {
    const posts = await sanityClient.fetch(postsQuery)
    return posts || []
  } catch (error) {
    console.error('❌ Error fetching posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20">
        <div className="section">
          <div className="text-center mb-16">
            <h1 className="gradient-text inline-block">Heavy Metal Safety Blog</h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Expert insights, testing updates, and the latest information about heavy metal safety in consumer products.
            </p>
          </div>
          
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post._id} className="card overflow-hidden">
                  {post.featuredImage && (
                    <div className="w-full h-48 bg-gray-200">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
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
                    </div>
                    <h2 className="text-xl font-bold text-blue-900 mb-3">
                      <Link 
                        href={`/blog/${post.slug.current}`}
                        className="hover:text-teal-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.categories.map((category, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="text-blue-900 font-medium hover:text-teal-600 transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="card p-8 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-blue-900 mb-4">No blog posts yet</h3>
                <p className="text-gray-600 mb-6">
                  We're working on bringing you expert insights and safety information. Check back soon!
                </p>
                <Link href="/#contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
} 
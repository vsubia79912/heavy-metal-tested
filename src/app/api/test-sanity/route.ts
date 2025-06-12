import { NextResponse } from 'next/server'
import { sanityClient, postsQuery } from '@/lib/sanity'

export async function GET() {
  try {
    console.log('API: Testing Sanity connection...')
    console.log('API: Sanity config:', sanityClient.config())
    
    const posts = await sanityClient.fetch(postsQuery)
    console.log('API: Fetched posts:', posts)
    
    return NextResponse.json({
      success: true,
      config: sanityClient.config(),
      postsCount: posts.length,
      posts: posts
    })
  } catch (error) {
    console.error('API: Error testing Sanity:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 
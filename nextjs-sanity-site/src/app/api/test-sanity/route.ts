import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity'

export async function GET() {
  try {
    console.log('🔍 API Route: Testing Sanity connection...')
    
    // Test basic connection
    const allPosts = await sanityClient.fetch(`*[_type == "post"]`)
    console.log('📋 API Route: All posts:', allPosts)
    console.log('📊 API Route: Total posts found:', allPosts?.length || 0)
    
    return NextResponse.json({
      success: true,
      postsCount: allPosts?.length || 0,
      posts: allPosts,
      message: 'Sanity connection successful'
    })
  } catch (error) {
    console.error('❌ API Route Error:', error)
    return NextResponse.json({
      success: false,
      error: error.message,
      message: 'Sanity connection failed'
    }, { status: 500 })
  }
} 
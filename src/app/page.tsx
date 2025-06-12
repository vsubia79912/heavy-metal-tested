import type { Metadata } from 'next'
import { sanityClient, homepageQuery } from '@/lib/sanity'
import { Page, HeroSection, FeaturesSection, FaqSection } from '@/lib/types'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CertificationProcess from '@/components/CertificationProcess'
import ProductCategories from '@/components/ProductCategories'
import CertifiedProducts from '@/components/CertifiedProducts'
import FAQ from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

async function getHomepageData(): Promise<Page | null> {
  try {
    console.log('🏠 Fetching homepage data from Sanity...')
    
    // Check if any home pages exist at all
    const allHomePages = await sanityClient.fetch(`*[_type == "page" && slug.current == "home"]`)
    console.log('📄 Total home pages (any state):', allHomePages?.length || 0)
    
    // Check published home pages
    const publishedHomePages = await sanityClient.fetch(`*[_type == "page" && slug.current == "home" && !(_id in path('drafts.**'))]`)
    console.log('📄 Published home pages:', publishedHomePages?.length || 0)
    
    if (allHomePages?.length === 0) {
      console.log('✅ No homepage found in Sanity - using static content')
      return null
    }
    
    if (publishedHomePages?.length === 0 && allHomePages?.length > 0) {
      console.log('📝 Homepage exists but is unpublished - using static content')
      return null
    }
    
    // Try the homepage query
    const homepage = await sanityClient.fetch(homepageQuery)
    console.log('🏠 Homepage query result:', homepage ? 'Found' : 'Not found')
    
    if (homepage) {
      console.log('🎉 Using Sanity homepage content')
      return homepage
    } else {
      console.log('🔄 Falling back to static content')
      return null
    }
    
  } catch (error) {
    console.error('❌ Error fetching homepage data:', error)
    console.log('🔄 Using static content due to error')
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await getHomepageData()

  return {
    title: homepage?.seoTitle || 'Heavy Metal Testing & Certification | Heavy Metal Tested',
    description: homepage?.metaDescription || 'Professional heavy metal testing and certification for consumer products. Ensure your products are safe from lead, mercury, cadmium, and arsenic contamination.',
    openGraph: {
      title: homepage?.seoTitle || 'Heavy Metal Testing & Certification | Heavy Metal Tested',
      description: homepage?.metaDescription || 'Professional heavy metal testing and certification for consumer products. Ensure your products are safe from lead, mercury, cadmium, and arsenic contamination.',
      images: homepage?.openGraphImage ? [homepage.openGraphImage] : [],
      url: '/',
      type: 'website',
    },
  }
}

export default async function Home() {
  const homepage = await getHomepageData()
  
  // Extract content sections
  let heroData: HeroSection | undefined
  let featuresData: FeaturesSection | undefined
  let faqData: FaqSection | undefined
  
  if (homepage?.content) {
    homepage.content.forEach((section) => {
      switch (section._type) {
        case 'heroSection':
          heroData = section as HeroSection
          break
        case 'featuresSection':
          featuresData = section as FeaturesSection
          break
        case 'faqSection':
          faqData = section as FaqSection
          break
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <Hero data={heroData} />
      <Features data={featuresData} />
      <CertificationProcess />
      <ProductCategories />
      <CertifiedProducts />
      <FAQ data={faqData} />
      <ContactSection />
      <Footer />
    </div>
  )
} 
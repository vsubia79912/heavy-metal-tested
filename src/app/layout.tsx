import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Heavy Metal Tested Certification Website',
  description: 'Professional heavy metal testing and certification services',
  keywords: ['heavy metal testing', 'certification', 'safety', 'compliance'],
  authors: [{ name: 'Heavy Metal Tested' }],
  openGraph: {
    title: 'Heavy Metal Tested Certification Website',
    description: 'Professional heavy metal testing and certification services',
    url: 'https://your-domain.com',
    siteName: 'Heavy Metal Tested',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heavy Metal Tested Certification',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heavy Metal Tested Certification Website',
    description: 'Professional heavy metal testing and certification services',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 
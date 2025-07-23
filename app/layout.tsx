import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'LYNNE DUNCAN DESIGN',
  description: 'giving you the home of your dreams',
  generator: 'LYNNE DUNCAN DESIGN',
  keywords: [
    'Interior Design',
    'Home Decor',
    'Luxury Interiors',
    'Bespoke Design',
    'Residential Design',
    'Commercial Interiors',
    'Lynne Duncan',
    'LYNNE DUNCAN DESIGN',
    'Elegant Spaces',
    'Modern Interiors',
    'Timeless Style',
    'Custom Furniture',
    'Design Consultation',
    'Home Renovation',
    'giving you the home of your dreams'
  ],
  openGraph: {
    title: 'LYNNE DUNCAN DESIGN',
    description: 'giving you the home of your dreams',
    url: 'https://lynneduncandesign.online',
    siteName: 'LYNNE DUNCAN DESIGN',
    images: [
      {
        url: '/images/Logo.png',
        width: 800,
        height: 600,
        alt: 'LYNNE DUNCAN DESIGN Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LYNNE DUNCAN DESIGN',
    description: 'giving you the home of your dreams',
    site: '@lynneduncandesign',
    creator: '@lynneduncandesign',
    images: ['/images/Logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (replace G-XXXXXXXXXX with your GA4 Measurement ID) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LYNNE DUNCAN DESIGN",
          "url": "https://lynneduncandesign.online",
          "logo": "https://lynneduncandesign.online/images/Logo.png",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "email": "laduncan617@gmail.com",
              "contactType": "customer service"
            },
            {
              "@type": "ContactPoint",
              "email": "info@lynneduncandesign.online",
              "contactType": "customer service"
            }
          ],
          "sameAs": [
            "https://www.instagram.com/lynneduncandesign"
          ]
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://lynneduncandesign.online",
          "name": "LYNNE DUNCAN DESIGN",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://lynneduncandesign.online/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}

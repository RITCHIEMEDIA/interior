 
import ScrollToTop from "../components/scroll-to-top";
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import SiteFooter from "@/components/site-footer";
import { use } from "react";

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Lynne Duncan" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Interior Design, Home Decor, Luxury Interiors, Bespoke Design, Residential Design, Commercial Interiors, Lynne Duncan, LYNNE DUNCAN DESIGN, Elegant Spaces, Modern Interiors, Timeless Style, Custom Furniture, Design Consultation, Home Renovation, giving you the home of your dreams, Ohio, Bowling Green, Professional Designer, Award Winning, Modern Living, Renovation, Remodel, Space Planning, Color Consultation, Lighting, Fabric Selection, Custom Upholstery, Window Treatments, Project Management, Material Resourcing" />
        <meta name="description" content="LYNNE DUNCAN DESIGN - giving you the home of your dreams. Award-winning interior design for residential and commercial spaces. Based in Bowling Green, Ohio." />
        <link rel="canonical" href="https://lynneduncandesign.online/" />
        <meta property="og:title" content="LYNNE DUNCAN DESIGN" />
        <meta property="og:description" content="Award-winning interior design for residential and commercial spaces. Based in Bowling Green, Ohio. giving you the home of your dreams." />
        <meta property="og:image" content="https://lynneduncandesign.online/images/Logo.png" />
        <meta property="og:url" content="https://lynneduncandesign.online/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LYNNE DUNCAN DESIGN" />
        <meta property="og:locale" content="en_US" />
        <meta property="business:contact_data:street_address" content="Bowling Green, OH" />
        <meta property="business:contact_data:email" content="info@lynneduncandesign.online" />
        <meta property="business:contact_data:phone_number" content="419 262 1840" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LYNNE DUNCAN DESIGN" />
        <meta name="twitter:description" content="Award-winning interior design for residential and commercial spaces. Based in Bowling Green, Ohio. giving you the home of your dreams." />
        <meta name="twitter:image" content="https://lynneduncandesign.online/images/Logo.png" />
        <meta name="twitter:site" content="@lynneduncandesign" />
        <meta name="twitter:creator" content="@lynneduncandesign" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LYNNE DUNCAN DESIGN",
              "url": "https://lynneduncandesign.online",
              "logo": "https://lynneduncandesign.online/images/Logo.png",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-419-262-1840",
                  "contactType": "customer service",
                  "email": "info@lynneduncandesign.online"
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
        <SiteFooter />
        <ScrollToTop />
      </body>
      </html>
    );
  }

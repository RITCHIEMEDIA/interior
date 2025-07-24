import SiteHeader from "@/components/site-header"
import HeroCarousel from "@/components/hero-carousel"
import WhatWeDoSection from "@/components/what-we-do-section"
import TestimonialSection from "@/components/testimonial-section"
import ContactSection from "@/components/contact-section"
import SiteFooter from "@/components/site-footer"
import Link from "next/link"
import Image from "next/image"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

// Import a few images for the highlight gallery
const homeGallery = [
  { src: "/images/gallery1.png", alt: "Modern Living Room" },
  { src: "/images/gallery2.png", alt: "Large House Exterior" },
  { src: "/images/gallery3.png", alt: "Blue House Exterior" },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <SiteHeader />

      <main className="flex-1 pt-20">
        <HeroCarousel />
        <WhatWeDoSection />
        <TestimonialSection />

        {/* Sleek Home Gallery Highlight Section */}
        <section className="py-14 md:py-24 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] rounded-2xl shadow-xl mx-2 md:mx-auto max-w-5xl my-12 border border-gray-200">
          <div className="px-4 text-center">
            <h2
              className="mb-8 text-3xl md:text-4xl font-serif font-bold tracking-tight text-gray-800 flex items-center justify-center gap-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="inline-block w-10 h-1 rounded bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 mr-3" />
              Moments of Inspiration
              <span className="inline-block w-10 h-1 rounded bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 ml-3" />
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {homeGallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-64 h-44 relative"
                  style={{ minWidth: 220, minHeight: 176 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white font-semibold shadow-lg hover:from-primary hover:to-gray-800 hover:scale-105 transition-all duration-300 border border-gray-800"
              style={{ fontFamily: "'GeistSans', 'Lora', serif" }}
            >
              View Our Gallery
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
      {/* <SiteFooter /> */}
    </div>
  )
}

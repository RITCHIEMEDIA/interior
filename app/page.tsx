import SiteHeader from "@/components/site-header"
import HeroCarousel from "@/components/hero-carousel"
import WhatWeDoSection from "@/components/what-we-do-section"
import AboutSection from "@/components/about-section"
import TestimonialSection from "@/components/testimonial-section" // Now a carousel
import AwardsSection from "@/components/awards-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section" // The "Reach Out To Us" section
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <SiteHeader />

      <main className="flex-1 pt-20">
        <div className="fade-in-up" style={{ animationDelay: '0.1s' }}><HeroCarousel /></div>
        <div className="fade-in-up" style={{ animationDelay: '0.3s' }}><WhatWeDoSection /></div>
        <div className="fade-in-up" style={{ animationDelay: '0.5s' }}><AboutSection /></div>
        <div className="fade-in-up" style={{ animationDelay: '0.7s' }}><TestimonialSection /></div>
        <div className="fade-in-up" style={{ animationDelay: '0.9s' }}><AwardsSection /></div>
        <div className="fade-in-up" style={{ animationDelay: '1.1s' }}><GallerySection /></div>
        <div className="fade-in-up" style={{ animationDelay: '1.3s' }}><ContactSection /></div>
      </main>

      <SiteFooter />
    </div>
  )
}

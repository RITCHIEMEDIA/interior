import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import HeroImageSection from "@/components/hero-image-section"
import TestimonialsList from "@/components/testimonials-list"
import CallToActionSection from "@/components/call-to-action-section"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <SiteHeader />
      <main className="flex-1 pt-20">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <HeroImageSection
          src="/images/hero-1.jpg"
          alt="Luxury pool table room"
          title="TESTIMONIALS"
          heightClass="h-[60vh] md:h-[60vh]"
          brightness="brightness(0.7)"
        />
        <TestimonialsList />
        <CallToActionSection />
      </main>
      <SiteFooter />
    </div>
  )
}

import AboutSection from "@/components/about-section"
// import AwardsSection from "@/components/awards-section"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import TestimonialSection from "@/components/testimonial-section" // Single testimonial for this page

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <SiteHeader />
      <main className="flex-1 pt-20">
        {" "}
        {/* Add padding-top to account for fixed header */}
        {/* <section className="py-16 md:py-24 bg-white text-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center text-center mb-12">

              <div className="w-24 h-px bg-gray-300" />
            </div>
          </div>
        </section> */}
        {/* AboutSection from home page placed here instead of What We Do */}
        <AboutSection />
        <TestimonialSection />
        {/* AwardsSection removed as requested */}
      </main>
      <SiteFooter />
    </div>
  )
}

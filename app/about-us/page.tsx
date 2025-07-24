import AboutSection from "@/components/about-section"
import AwardsSection from "@/components/awards-section"
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
        <AboutSection />
        {/* What We Do section added below AboutSection, no logo image */}
        <section id="what-we-do" className="py-16 md:py-24 bg-white text-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col gap-8 md:gap-12 items-center">
              <h2 className="text-4xl font-playfair font-bold tracking-widest uppercase mb-8 text-center">WHAT WE DO</h2>
              <div className="w-24 h-px bg-gray-300 mx-auto mb-6" />
              <div className="flex-1 text-xl leading-relaxed text-center md:text-left font-lora text-gray-800">
                <p>
                  Lynne Duncan is a full-service interior design service, specializing in creating bespoke designs for residential spaces that are tailored to our clients’ lifestyles. Our services include, but are certainly not limited to, space planning, color-consultation, lighting, fabric and material selections, reupholstery, custom upholstery, custom window treatments, and more. We also offer project management and material resourcing for remodel, renovation and new build construction projects. We are here to guide you throughout the entire process. Start to finish. Whether making over a single room, an entire home, or selecting the perfect finishes and furnishings for a new project, we enjoy the challenge of working within a spending plan to curate a balanced composition that reflects our client’s individuality. Client satisfaction and quality of craft are of utmost importance to us.
                </p>
              </div>
            </div>
          </div>
        </section>
        <TestimonialSection />
        <AwardsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

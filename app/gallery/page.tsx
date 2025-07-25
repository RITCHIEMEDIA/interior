import GallerySection from "@/components/gallery-section"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <SiteHeader />
      <main className="flex-1 pt-20">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <section className="py-16 md:py-24 bg-white text-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-4xl font-serif tracking-widest uppercase mb-4">GALLERY</h1>
              <h2 className="text-xl font-light text-gray-600 mb-4">Our Portfolio</h2>
              <div className="w-24 h-px bg-gray-300" />
            </div>
          </div>
        </section>
        <GallerySection />
      </main>
      {/* <SiteFooter /> */}
    </div>
  )
}

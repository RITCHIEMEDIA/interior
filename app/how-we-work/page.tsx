import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import HowWeWorkProcess from "@/components/how-we-work-process"

export default function HowWeWorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <SiteHeader />
      <main className="flex-1 pt-20">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <HowWeWorkProcess />
      </main>
      <SiteFooter />
    </div>
  )
}

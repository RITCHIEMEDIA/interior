import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function CallToActionSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gray-100 text-white overflow-hidden">
      <Image
        src="/images/kitchen-1.jpg"
        alt="Call to action background"
        fill
        style={{
          objectFit: "cover",
          filter: "brightness(0.7)",
        }}
        className="z-0"
      />
      <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl font-serif tracking-widest uppercase mb-8">BECOME OUR NEXT SATISFIED CLIENT.</h2>
        <Link href="/contact">
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-200 border-2 border-white px-8 py-6 text-lg uppercase tracking-widest"
          >
            CONTACT
          </Button>
        </Link>
      </div>
    </section>
  )
}

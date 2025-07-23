import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="reach-out-to-us" className="relative py-16 md:py-24 bg-gray-100 text-white overflow-hidden">
      {/* background */}
      <Image
        src="/images/hero-1.jpg"
        fill
        alt="Fireplace background"
        style={{ objectFit: "cover", filter: "brightness(0.7)" }}
      />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-serif tracking-widest uppercase mb-4">REACH OUT TO US</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Contact us to schedule a free consultation! We&#39;ll get back to you in 1-2 business days.
            </p>
          </div>

          <Link href="/contact">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg uppercase tracking-widest border-2 border-white">
              CONTACT
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

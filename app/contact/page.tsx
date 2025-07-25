"use client"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import HeroImageSection from "@/components/hero-image-section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { useRef, useState } from "react"

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setShowModal(true)
    if (formRef.current) {
      formRef.current.reset()
    }
    setTimeout(() => setShowModal(false), 3000)
  }
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <SiteHeader />
      <main className="flex-1 pt-20">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <HeroImageSection
          src="/images/hero-1.jpg"
          alt="Luxury pool table room"
          title="LET'S GET IN TOUCH"
          subtitle="Want to say hello? Send us a message or give us a call."
          heightClass="h-[60vh] md:h-[70vh]"
          brightness="brightness(0.7)"
        />
        <section className="py-16 md:py-24 bg-white text-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">CONTACT FORM</h3>
                <p className="text-gray-700 mb-6 text-center md:text-left">
                  Want to learn more? Contact us about your next project!
                </p>
                <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name (required)
                    </label>
                    <Input id="name" type="text" placeholder="John Doe" className="w-full" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email (required)
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" className="w-full" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone (required)
                    </label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" className="w-full" required />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
                      Zip
                    </label>
                    <Input id="zip" type="text" placeholder="90210" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message (required)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please type your message"
                      rows={5}
                      className="w-full"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    We care about your privacy. We will not share your information with anyone. Information is used for
                    internal purposes only.
                  </p>
                  <p className="text-xs text-gray-500">
                    By submitting this form, you agree to our{" "}
                    <Link href="#" className="underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="underline">
                      Terms of Service
                    </Link>
                    .
                  </p>
                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg">
                    Submit
                  </Button>
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm transition-all">
                      <div className="bg-gradient-to-br from-white via-gray-50 to-gray-200 rounded-2xl shadow-2xl px-10 py-12 max-w-xs w-full border border-gray-300 animate-fade-in-up">
                        <div className="flex flex-col items-center">
                          <svg className="mb-4 h-12 w-12 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12l2 2l4-4" />
                          </svg>
                          <h4 className="text-2xl font-bold mb-2 text-green-700">Submitted!</h4>
                          <p className="text-gray-700 mb-2">Your message has been sent successfully.</p>
                          <span className="text-xs text-gray-400">Thank you for reaching out!</span>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-6">INFO</h3>
                <div className="space-y-4 text-lg text-gray-700">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-gray-600" />
                    <span>Bowling Green, OH</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-gray-600" />
                    <Link href="tel:+14192621840" className="hover:underline">
                      419 262 1840
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-gray-600" />
                    <Link href="mailto:laduncan617@gmail.com" className="hover:underline">
                      laduncan617@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-gray-600" />
                    <Link href="mailto:info@lynneduncandesign.online" className="hover:underline">
                      info@lynneduncandesign.online
                    </Link>
                  </div>
                </div>
                {/* FOLLOW US and Houzz link removed as requested */}
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <SiteFooter /> */}
    </div>
  )
}

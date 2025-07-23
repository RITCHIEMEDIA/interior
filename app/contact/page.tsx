import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import HeroImageSection from "@/components/hero-image-section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, MapPin, Phone, Instagram } from "lucide-react"

export default function ContactPage() {
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
                <form className="space-y-6">
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
                <h3 className="text-2xl font-semibold mt-10 mb-6">FOLLOW US</h3>
                <div className="flex gap-6">
                  <Link
                    href="https://www.houzz.com/pro/lynneduncandesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                  >
                    <span className="sr-only">Houzz</span>
                    <span className="font-bold text-3xl">h</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/lynneduncandesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                  >
                    <Instagram className="h-8 w-8" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

import Link from "next/link"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* location */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">LOCATION</h3>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-5 w-5" />
              Bowling Green, OH
            </div>
          </div>

          {/* contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <Link href="tel:+14192621840" className="flex items-center gap-2 text-gray-300 hover:underline mb-2">
              <Phone className="h-5 w-5" />
              419 262 1840
            </Link>
            <Link
              href="mailto:laduncan617@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:underline"
            >
              <Mail className="h-5 w-5" />
              laduncan617@gmail.com
            </Link>
          </div>

          {/* social */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.houzz.com/pro/lynneduncandesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <span className="sr-only">Houzz</span>
                {/* simple H icon */}
                <span className="font-bold text-3xl">h</span>
              </Link>
              <Link
                href="https://www.instagram.com/lynneduncandesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LYNNE DUNCAN DESIGN. All Rights Reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"
// Enables React hooks in this component
import Image from "next/image"
import { useState } from "react"

const gallery = [
  { src: "/images/gallery1.png", alt: "Modern Living Room" },
  { src: "/images/gallery2.png", alt: "Large House Exterior" },
  { src: "/images/gallery3.png", alt: "Blue House Exterior" },
  { src: "/images/gallery4.png", alt: "Bright Home Office" },
  { src: "/images/gallery5.png", alt: "Luxury Mansion Exterior" },
  { src: "/images/gallery6.png", alt: "Cozy Living Room" },
  { src: "/images/exterior-1.jpg", alt: "Classic Home Exterior" },
  { src: "/images/hero-1.jpg", alt: "Elegant Living Room" },
  { src: "/images/hero-2.jpg", alt: "Luxury Pool Table Room" },
  { src: "/images/hero-3.jpg", alt: "Elegant Dining Area" },
  { src: "/images/kitchen-1.jpg", alt: "Modern Kitchen" },
  { src: "/images/office-1.jpg", alt: "Stylish Office" },
  { src: "/images/hww1.png", alt: "Design Process 1" },
  { src: "/images/hww2.png", alt: "Design Process 2" },
  { src: "/images/hww3.png", alt: "Design Process 3" },
]

export default function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12">
          {/* MY WORK heading removed as requested */}
          <div className="w-24 h-px bg-gray-300" />
        </div>

        {/* Masonry layout for a fuller look */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {gallery.map(({ src, alt }, idx) => (
            <div
              key={alt + idx}
              className="relative mb-4 rounded-lg overflow-hidden shadow group cursor-pointer break-inside-avoid"
              onClick={() => setSelected(idx)}
              tabIndex={0}
              aria-label={`View ${alt}`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold font-lora drop-shadow-lg">{alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox modal */}
        {selected !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <Image
                src={gallery[selected].src}
                alt={gallery[selected].alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg object-contain bg-black"
                priority
              />
              <div className="text-center text-white font-lora text-lg mt-4">
                {gallery[selected].alt}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

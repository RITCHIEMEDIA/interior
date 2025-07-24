"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const images = [
  {
    src: "images/hero-1.jpg",
    alt: "Modern living room with fireplace and built-ins",
    heading: "LYNNE DUNCAN DESIGN",
    subtext: "giving you the home of your dreams",
  },
  {
    src: "images/hero-2.jpg",
    alt: "Luxury pool table room",
    heading: "Bespoke Interiors, Timeless Style",
    subtext: "Curated spaces for inspired living",
  },
  {
    src: "images/hero-3.jpg",
    alt: "Elegant dining area",
    heading: "Your Vision, Our Expertise",
    subtext: "Transforming houses into homes with passion and precision",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    const interval = setInterval(goToNext, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [goToNext])

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          fill
          priority={index === 0}
          style={{
            objectFit: "cover",
            transition: "opacity 1s ease-in-out",
            opacity: currentIndex === index ? 1 : 0,
            filter: "brightness(0.6)",
          }}
          className="absolute inset-0"
        />
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <h1 className="text-white text-3xl md:text-5xl font-playfair font-bold drop-shadow-lg text-center mb-2 tracking-wide">
          {images[currentIndex].heading}
        </h1>
        <p className="text-white text-base md:text-lg font-lora drop-shadow-md text-center max-w-2xl">
          {images[currentIndex].subtext}
        </p>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-black hover:bg-black/20"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-black hover:bg-black/20"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full bg-white transition-all duration-300",
              currentIndex === index ? "w-6" : "opacity-50",
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

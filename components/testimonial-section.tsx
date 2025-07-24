"use client"

import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useCallback } from "react"

interface TestimonialSectionProps {
  maxCount?: number;
}

export default function TestimonialSection({ maxCount }: TestimonialSectionProps) {
  let testimonials = [
    {
      quote:
        "Lynne is one of the finest designers I’ve worked with. Her skills in matching design concepts with your existing tastes make her a delight to work with. Her will inspire you to look beyond common trends and listen and care about how you feel. I admire Lynne's dedication to her clients and their projects as well as her integrity throughout the entire process. I highly recommend Lynne Duncan.",
      author: "",
      rating: 5,
    },
    {
      quote:
        "Lynne has been a peer of mine for more than eight years. Over this time, I have witnessed her growth and adaptability in our ever-changing industry. Her ability to listen to her client's needs to facilitate a beautiful, yet functional space for them is remarkable. With this she brings her clients visions into reality and each project is unique to them. The relationships she carries through the process with other trade professionals makes the project seamless for the clients and removes the otherwise undo stress that larger projects can bring. Lynne is a fantastic designer and I highly recommend her for your next project!",
      author: "Amy Westerberg/ Interior Designer",
      rating: 5,
    },
    {
      quote:
        "We are beyond thrilled with the transformation that LYNNE DUNCAN DESIGN helped create with the exterior of our home. We sought their help to bring a color palette and a cohesive design to our home that has been great to work with. From the initial consultation to the final reveal, LYNNE DUNCAN DESIGN was a dream to work with. After a successful first project, we're now working with LYNNE DUNCAN DESIGN on the interior of our house. We highly recommend LYNNE DUNCAN DESIGN!",
      author: "Amanda",
      rating: 5,
    },
    {
      quote:
        "LYNNE DUNCAN DESIGN is a true professional. Very talented and has a great eye for design. Also very easy to work with and always put their clients first. I highly recommend them!",
      author: "Johnson",
      rating: 5,
    },
  ]
  if (typeof maxCount === 'number') {
    testimonials = testimonials.slice(0, maxCount)
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [testimonials.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    const interval = setInterval(goToNext, 6000) // Change testimonial every 6 seconds
    return () => clearInterval(interval)
  }, [goToNext])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      id="testimonials-carousel"
      className="relative w-full min-h-[80vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero-2.jpg"
        alt="Testimonial Background"
        fill
        style={{
          objectFit: "cover",
          filter: "brightness(0.8)",
        }}
        className="z-0"
        priority
      />
      <div className="relative z-10 w-full flex justify-center items-center px-2 md:px-4">
        <div
          className="bg-black/80 rounded-lg shadow-xl max-w-2xl w-full mx-auto py-10 px-6 md:px-12 flex flex-col items-center text-center backdrop-blur-md"
        >
          <div className="flex justify-center mb-4">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg md:text-2xl font-lora text-white italic mb-8 leading-relaxed transition-opacity duration-500 ease-in-out">
            &quot;{currentTestimonial.quote}&quot;
          </p>
          <p className="text-md md:text-lg font-semibold font-playfair text-white transition-opacity duration-500 ease-in-out">
            - {currentTestimonial.author}
          </p>
          {/* Horizontal line */}
          <div className="w-full max-w-xs mx-auto h-px bg-white/40 mt-8" />

          <div className="flex justify-between absolute left-0 right-0 -bottom-10 md:bottom-1/2 md:translate-y-1/2 px-4 md:px-0">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={goToPrevious}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={goToNext}
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

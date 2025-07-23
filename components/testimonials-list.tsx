"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function TestimonialsList() {
  const testimonials = [
    {
      quote:
        "Duncan has helped our family with numerous rooms in our house with projects both large and small. My husband and I trust she completely—not only for her impeccable taste, but also her honesty and ability to listen to her clients needs. she is a total gem and so fun to work with. I would never work with another designer after working with her. If you want a beautifully executed project from an incredibly talented, kind, honest, fun human being who delivers what they promised, Lynne is your guy!",
      author: "Joann.",
      rating: 5,
    },
    {
      quote:
        "It has been such a pleasure getting to know Lynne as she took over the challenging task of redesigning our home. From start to finish, Lynne listened to our wants and needs and delivered over and beyond our expectations; her professionalism, attention to detail and level of expertise are unmatched. We are looking forward to working with her on our upcoming design projects.",
      author: "Suzy Petrossian .",
      rating: 5,
    },
    {
      quote:
        "We have worked with Lynne over several home projects over the years. She is absolutely amazing and has totally transformed our home. She goes above and beyond and her attention to detail is unmatched. Our last project was part of a remodel and addition that we did and she managed all aspects, from wallpaper, flooring to furniture and decor. She is attentive to the needs of the family and to the things that are important to them but is not afraid to push the decorative boundaries to finish the look. Superb professional that you can entrust with your most precious asset!!!",
      author: "Allison Gage",
      rating: 5,
    },
    {
      quote:
        "Lynne Duncan Design is a very talented designer, effective project manager, and thoughtful human being. We have worked with her over several years on substantive interior design projects and renovations in two homes (MN and FL). She has exceptional taste and ideas, is a good listener who thoughtfully considers a clients' natural preferences yet presents a range of creative options to meet those interests AND stretch the pre-imagined into something even more special. she is organized, conscious to budget goals, and responsive to questions along the way. We are very happy with the work she has done for and with us. Lynne has also brought other expert resources for project work including painters, electricians, tile and countertop craftsman, etc and we have appreciated the quality of their work as well. she has high standards and seems to partner well with those of similar values. We trust her and as a result would return to her for future work and also strongly recommend her to others.",
      author: "C Scott",
      rating: 5,
    },
    {
      quote:
        "LYNNE DUNCAN DESIGN is one of the finest designers I've worked with. Their skills in matching design concepts with your existing tastes make them a delight to work with. Also very easy to work with and always put their clients first. I highly recommend them!",
      author: "Jay Pastor",
      rating: 5,
    },
    {
      quote:
        "LYNNE DUNCAN DESIGN is a very talented designer, effective project manager, and thoughtful team. We have worked with them over several years on substantial interior design projects and renovations in two homes (MN and FL). They have exceptional taste and talent, are good listeners who thoughtfully translate our desires and needs into beautiful and functional spaces. Organized, conscious to budget goals, and responsive to questions along the way. We are very happy with the work they have done for us and would recommend them to anyone looking for a talented and reliable interior designer.",
      author: "Scott",
      rating: 5,
    },
  ]

  const [expandedStates, setExpandedStates] = useState<boolean[]>(Array(testimonials.length).fill(false))

  const toggleExpanded = (index: number) => {
    setExpandedStates((prev) => {
      const newStates = [...prev]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  return (
    <section id="testimonials-list" className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="flex justify-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p
            className={cn(
              "text-lg italic mb-4 leading-relaxed font-lora text-gray-800",
              !expandedStates[index] && "line-clamp-6",
            )}
          >
            &quot;{testimonial.quote}&quot;
          </p>
          <p className="text-md font-semibold font-playfair">- {testimonial.author}</p>
              <Button
                variant="link"
                className="mt-4 text-black hover:text-gray-700"
                onClick={() => toggleExpanded(index)}
              >
                {expandedStates[index] ? "Read Less" : "Read More"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

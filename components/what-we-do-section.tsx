import Image from "next/image"

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          
          {/* Logo Image on the left */}
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 flex flex-col items-center text-center">
            <h2 className="text-5xl font-playfair font-bold tracking-widest uppercase mb-8 text-center">WHAT WE DO</h2>
            <Image
              src="/images/logo.png"
              alt="Lynne Duncan Design Logo"
              width={180}
              height={180}
              className="mb-6 md:mb-8"
              priority
            />
            <div className="w-24 h-px bg-gray-300 mx-auto" />
          </div>
          {/* Write up on the right */}
          <div className="flex-1 text-xl leading-relaxed text-center md:text-left font-lora text-gray-800">
            <p>
              Lynne Duncan is a full-service interior design service, specializing in creating bespoke designs for residential spaces that are tailored to our clients’ lifestyles. Our services include, but are certainly not limited to, space planning, color-consultation, lighting, fabric and material selections, reupholstery, custom upholstery, custom window treatments, and more. We also offer project management and material resourcing for remodel, renovation and new build construction projects. We are here to guide you throughout the entire process. Start to finish. Whether making over a single room, an entire home, or selecting the perfect finishes and furnishings for a new project, we enjoy the challenge of working within a spending plan to curate a balanced composition that reflects our client’s individuality. Client satisfaction and quality of craft are of utmost importance to us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

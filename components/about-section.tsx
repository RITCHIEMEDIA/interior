import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-serif tracking-widest uppercase mb-4">ABOUT ME</h2>
          <div className="w-24 h-px bg-gray-300" />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* portrait */}
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
            <Image
              src="/images/timothy.png"
              width={300}
              height={400}
              alt="Lynne Duncan"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* copy */}
          <div className="flex-1 text-lg leading-relaxed text-center md:text-left">
            <h3 className="text-3xl font-playfair font-bold mb-4">ABOUT US</h3>
            <p className="mb-4">Hi! I&#39;m Lynne!</p>
            <p className="mb-4">
              I am the founder and principal designer at Lynne Duncan Design. I have years in design experience.
            </p>
            <p className="mb-4">
              Before starting up my own service, I consulted and worked with other design firms all around the United States for years.
            </p>
            <p>
              I am well versed in not only creating beautiful designs myself but also in design management and construction relations. Connecting with my clients and creating long standing relationships with them is my favorite job perk!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

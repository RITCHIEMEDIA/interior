import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-serif tracking-widest uppercase mb-4">ABOUT US</h2>
          <div className="w-24 h-px bg-gray-300" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Optionally, you can add a logo or image here if desired */}
          {/* { <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
            <Image
              src="/images/Logo.png"
              width={300}
              height={400}
              alt="Lynne Duncan"
              className="w-full h-auto object-cover"
            />
          </div> } */}
          <div className="flex-1 text-lg leading-relaxed text-center md:text-left">
            <p className="mb-4">
              Lynne Duncan Design is a full-service interior design studio based in Bowling Green, Ohio. With years of experience in the industry, we specialize in creating elegant, timeless, and functional spaces tailored to each client’s unique vision.
            </p>
            <p className="mb-4">
              Our approach is rooted in collaboration, creativity, and attention to detail. From concept to completion, we manage every aspect of the design process, ensuring a seamless and enjoyable experience for our clients.
            </p>
            <p className="mb-4">
              Whether you are looking to refresh a single room or transform your entire home or business, our team is dedicated to delivering exceptional results that reflect your personality and lifestyle.
            </p>
            <p>
              We believe that great design is about more than aesthetics—it’s about creating spaces that inspire, comfort, and bring joy every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

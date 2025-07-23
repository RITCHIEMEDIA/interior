import Image from "next/image"

export default function AwardsSection() {
  return (
    <section id="awards" className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-serif tracking-widest uppercase mb-4">AWARDS &amp; AFFILIATIONS</h2>
          <div className="w-24 h-px bg-gray-300" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {/* Using the provided blob URL for the combined awards image */}
          <Image
            src="/images/award.png"
            alt="Houzz Awards and Affiliations"
            width={1100}
            height={800}
            className="h-auto max-w-full"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  )
}

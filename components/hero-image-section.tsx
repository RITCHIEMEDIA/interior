import Image from "next/image"

interface HeroImageSectionProps {
  src?: string // Made optional as it now has a default
  alt: string
  title?: string
  subtitle?: string
  heightClass?: string
  brightness?: string
}

export default function HeroImageSection({
  src = "/images/hero-1.jpg", // Default to public/images/hero-1.jpg
  alt,
  title,
  subtitle,
  heightClass = "h-[60vh] md:h-[80vh]",
  brightness = "brightness(0.4)",
}: HeroImageSectionProps) {
  return (
    <section className={`relative w-full ${heightClass} overflow-hidden flex items-center justify-center text-white`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        style={{
          objectFit: "cover",
          filter: brightness,
        }}
        className="z-0"
      />
      {(title || subtitle) && (
        <div className="relative z-10 text-center px-4">
          {title && <h1 className="text-4xl md:text-6xl font-serif tracking-widest uppercase mb-2">{title}</h1>}
          {subtitle && <p className="text-lg md:text-xl font-light">{subtitle}</p>}
        </div>
      )}
    </section>
  )
}

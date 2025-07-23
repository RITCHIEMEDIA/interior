"use client"


import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"


export default function SiteHeader() {
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/how-we-work", label: "HOW WE WORK" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/testimonials", label: "TESTIMONIALS" },
    { href: "/contact", label: "CONTACT" },
  ]

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={
        scrolled
          ? "fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow transition-all duration-300"
          : "fixed top-0 left-0 w-full z-50 bg-black text-white transition-all duration-300"
      }
    >
      <div className={
        scrolled
          ? "flex flex-row items-center justify-between h-16 mx-auto px-4 md:px-6 max-w-6xl"
          : "flex flex-col items-center justify-center h-auto py-4 mx-auto px-4 md:px-6 max-w-6xl"
      }>
        {/* Logo / Site title */}
        <Link href="/" className={scrolled ? "flex items-center text-center" : "flex flex-col items-center text-center mb-4"}>
          <span className={
            scrolled
              ? "text-xl md:text-2xl font-playfair font-bold tracking-[0.3em] uppercase leading-none text-black"
              : "text-2xl font-sans tracking-[0.4em] md:text-3xl md:tracking-[0.5em] uppercase leading-none"
          }>
            LYNNE DUNCAN DESIGN
          </span>
          {!scrolled && (
            <span className="text-xs tracking-[0.25em] md:text-sm md:tracking-[0.3em] uppercase mt-2">
              giving you the home of your dreams
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        {!scrolled && (
          <nav className="hidden lg:flex items-center justify-center w-full">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-8">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className="text-sm font-medium tracking-[0.15em] hover:text-gray-300 transition-colors duration-200 uppercase"
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        )}

        {/* Mobile sheet */}
        {!scrolled && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden absolute top-4 right-4 text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-black text-white">
              <div className="grid gap-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex w-full items-center py-2 text-lg font-semibold hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  )
}

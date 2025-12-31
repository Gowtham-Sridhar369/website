"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Mail, } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 71 55"
    className="w-6 h-6"
    fill="currentColor"
  >
    <path d="M60.104 4.552A58.612 58.612 0 0046.797.12a41.303 41.303 0 00-1.978 4.03 55.4 55.4 0 00-13.637 0 41.17 41.17 0 00-1.978-4.03 58.608 58.608 0 00-13.307 4.432C4.215 19.119 1.243 33.02 2.454 46.824a58.503 58.503 0 0017.947 5.74 43.504 43.504 0 003.85-6.263 38.565 38.565 0 01-6.108-2.947c.514-.37.997-.77 1.449-1.197 11.32 5.322 23.72 5.322 34.98 0 .452.426.935.826 1.448 1.197a38.337 38.337 0 01-6.108 2.947 43.47 43.47 0 003.85 6.263 58.515 58.515 0 0017.947-5.74c1.232-13.804-1.74-27.705-11.137-42.272zM23.725 37.34c-3.258 0-5.946-2.97-5.946-6.623 0-3.653 2.64-6.622 5.946-6.622 3.307 0 5.995 2.97 5.946 6.622 0 3.653-2.64 6.623-5.946 6.623zm23.55 0c-3.258 0-5.946-2.97-5.946-6.623 0-3.653 2.64-6.622 5.946-6.622 3.307 0 5.995 2.97 5.946 6.622 0 3.653-2.64 6.623-5.946 6.623z"/>
  </svg>
)


  const socialLinks = [
    { icon: Github, href: "https://github.com/Gowtham-Sridhar369", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gowthamsridharan/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:gowthamcr786@gmail.com", label: "Email" },
    { icon: DiscordIcon, href: "https://discord.com/gowtham_0369#XXXX", label: "Discord" },
    // { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ]

  

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 -z-10">
        <img
          src="/portfolio1.gif"
          alt="Animated background"
          className="w-full h-full object-cover opacity-90 pointer-events-none"
        />
      </div> */}
      <div className="absolute inset-0 z-0 " />
      <div className="absolute inset-0 z-0 " />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-5xl- md:text-5xl font-bold mb-6 text-balance">Gowtham S</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
           Crafting scalable and reliable web applications with MERN Stack.

          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={() => scrollToSection("#portfolio")} className="group">
              View Portfolio
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("#contact")}>
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



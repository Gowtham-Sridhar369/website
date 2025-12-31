"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Layout, Database, Zap } from "lucide-react"

const servicesData = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description:
      "End-to-end web application development using modern technologies like MERN stack and .NET, delivering scalable and performant solutions.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Creating beautiful, responsive user interfaces with React, Angular, and modern CSS frameworks for exceptional user experiences.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Database,
    title: "Backend APIs & Databases",
    description:
      "Building robust RESTful APIs and managing databases with MongoDB, SQL Server, and PostgreSQL for reliable data management.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Zap,
    title: "Automation & Integrations",
    description:
      "Streamlining workflows with automated solutions and third-party integrations to improve efficiency and productivity.",
    color: "from-orange-500/20 to-yellow-500/20",
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground text-lg">What I can do for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {servicesData.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-border group cursor-pointer"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{service.description}</p>

                <Button variant="ghost" size="sm" onClick={scrollToContact} className="group/btn">
                  Hire Me
                  <svg
                    className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

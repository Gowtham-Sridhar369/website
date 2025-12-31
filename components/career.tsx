"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Code } from "lucide-react"

const careerData = [
  {
    icon: GraduationCap,
    title: "B.Tech in Information Technology",
    role: "Student",
    period: "2021 - 2025",
    description:
      "Completed Bachelor of Technology in Information Technology with a strong foundation in computer science fundamentals, data structures, and software engineering principles.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Code,
    title: "MERN Stack Development",
    role: "Learning & Projects",
    period: "2023 - Present",
    description:
      "Built multiple full-stack applications using MongoDB, Express.js, React, and Node.js. Developed RESTful APIs and modern, responsive user interfaces.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Briefcase,
    title: ".NET Development",
    role: "Self-Learning",
    period: "2024 - Present",
    description:
      "Expanded expertise to include C# and .NET framework, building enterprise-level applications and working with SQL databases for robust backend solutions.",
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export default function Career() {
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

  return (
    <section id="career" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Career Journey</h2>
            <p className="text-muted-foreground text-lg">My path in software development</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {careerData.map((item, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 border-border"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-semibold mb-1 md:mb-0">{item.title}</h3>
                      <span className="text-sm text-muted-foreground font-medium">{item.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-3">{item.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

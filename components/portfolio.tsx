"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projectsData = [
  {
    title: "Feedback Management System",
    description:
      "A comprehensive MERN stack application for collecting and managing user feedback with real-time updates and analytics dashboard.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "#",
    sourceUrl: "#",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Portfolio Animation Website",
    description:
      "Modern portfolio website with stunning animations using GSAP and smooth scrolling effects built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "GSAP", "Framer Motion"],
    liveUrl: "#",
    sourceUrl: "#",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured online shopping platform with payment integration, order management, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    sourceUrl: "#",
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "REST API with Java",
    description:
      "Robust RESTful API built with Java Spring Boot, featuring JWT authentication and comprehensive documentation.",
    tech: ["Java", "Spring Boot", "MySQL", "JWT"],
    liveUrl: "#",
    sourceUrl: "#",
    color: "from-orange-500/10 to-yellow-500/10",
  },
  {
    title: ".NET CRUD Application",
    description: "Enterprise-level CRUD application using ASP.NET Core with Entity Framework and SQL Server database.",
    tech: ["C#", ".NET Core", "SQL Server", "EF Core"],
    liveUrl: "#",
    sourceUrl: "#",
    color: "from-red-500/10 to-rose-500/10",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
    liveUrl: "#",
    sourceUrl: "#",
    color: "from-indigo-500/10 to-blue-500/10",
  },
]

export default function Portfolio() {
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
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <p className="text-muted-foreground text-lg">Recent projects I've worked on</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projectsData.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border group"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <span className="text-6xl relative z-10">💻</span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </a>
                    </Button>
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

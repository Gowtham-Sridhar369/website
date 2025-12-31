"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export default function About() {
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

  const skills = [
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "C#",
    ".NET",
    "Git",
    "REST APIs",
    "TypeScript",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">Take a closer look at my journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl  items-center justify-center">
                  <img
                    src="/1.png"
                    alt="Gowtham S"
                    loading="lazy"
                    className="w-76 h-56 md:w-72 md:h-72 rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
            <span className="text-foreground font-medium"></span>I’m Gowtham, a Full Stack Developer and IT graduate specializing in building scalable, performance-driven web applications. I combine clean design with reliable code to transform ideas into meaningful digital experiences.
              </p>

              {/* <p className="text-lg leading-relaxed text-muted-foreground">
                <span className="text-foreground font-medium"></span>I’ve worked on projects using the MERN stack, Next.js, and .NET, with databases like MongoDB and MySQL. I’m continuously improving my skills in Java, DSA, and cloud technologies to build modern, reliable applications. I value simplicity, consistency, and learning, and I’m always open to challenges that help me grow.

              </p> */}

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" asChild>
                  <a href="/gowtham_f.pdf" download="Gowtham_Resume.pdf">
                    <svg
                      className="mr-2 w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

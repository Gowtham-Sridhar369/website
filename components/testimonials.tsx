"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonialsData = [
  {
    name: "Rajesh Kumar",
    role: "Tech Lead at TechCorp",
    avatar: "👨‍💼",
    rating: 5,
    text: "Gowtham delivered an exceptional full-stack solution for our project. His attention to detail and problem-solving skills are outstanding. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager at StartupXYZ",
    avatar: "👩‍💼",
    rating: 5,
    text: "Working with Gowtham was a pleasure. He understood our requirements perfectly and delivered a scalable MERN application that exceeded our expectations.",
  },
  {
    name: "Arun Patel",
    role: "CEO at Digital Solutions",
    avatar: "👨‍💻",
    rating: 5,
    text: "Gowtham's expertise in both frontend and backend development helped us launch our product on time. His code quality and documentation are top-notch.",
  },
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h2>
            <p className="text-muted-foreground text-lg">What clients say about my work</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="p-8 md:p-12 border-border">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-4xl mb-6">
                    {testimonialsData[currentIndex].avatar}
                  </div>

                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonialsData[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl leading-relaxed mb-8 text-muted-foreground max-w-2xl">
                    "{testimonialsData[currentIndex].text}"
                  </p>

                  <div>
                    <p className="font-semibold text-lg mb-1">{testimonialsData[currentIndex].name}</p>
                    <p className="text-muted-foreground text-sm">{testimonialsData[currentIndex].role}</p>
                  </div>
                </div>
              </Card>

              <div className="flex justify-center gap-4 mt-8">
                <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex items-center gap-2">
                  {testimonialsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

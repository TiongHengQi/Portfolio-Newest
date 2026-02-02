"use client"
import { Navigation } from "@/components/navigation"
import { ButtonRipple } from "@/components/button-ripple"
import { Hero } from "@/components/hero"
import { ProjectCard } from "@/components/project-card"
import { Footer } from "@/components/footer"
import { projectsByCategory } from "@/lib/utils"
import Link from "next/link"

export default function Home() {
  const allProjects = [...projectsByCategory.Design, ...projectsByCategory.Development]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Projects Preview Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">PROJECTS</h2>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Link href="/projects">
                <ButtonRipple className="px-12 py-6 text-xl font-bold">VIEW ALL PROJECTS</ButtonRipple>
              </Link>
            </div>

            <div className="overflow-hidden rounded-lg">
              <div className="flex gap-8 scroll-animate-continuous">
                {allProjects.map((project) => (
                  <div
                    key={`first-${project.id}`}
                    className="relative flex-shrink-0 w-96 h-48 rounded-lg overflow-hidden opacity-75"
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
                {/* Duplicate projects for seamless infinite loop */}
                {allProjects.map((project) => (
                  <div
                    key={`second-${project.id}`}
                    className="relative flex-shrink-0 w-96 h-48 rounded-lg overflow-hidden opacity-75"
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Footer />
    </div>
  )
}

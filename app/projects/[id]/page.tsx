"use client"

import { Navigation } from "@/components/navigation"
import { ButtonRipple } from "@/components/button-ripple"
import { ImageCarousel } from "@/components/image-carousel"
import Link from "next/link"
import { useParams } from "next/navigation"
import { projectsData } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id

  const project = projectsData[String(projectId)] || projectsData["1"]

  const [activeSection, setActiveSection] = useState("image")

  const sections = project.demoVideo
    ? ["image", "details", "demo"]
    : ["image", "details"]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const offset = 100
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const startPosition = window.scrollY
    const distance = elementPosition - offset - startPosition
    const duration = 800
    let start: number | null = null

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)

      window.scrollTo(
        0,
        startPosition + distance * easeInOutCubic(progress)
      )

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Side Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <ul className="space-y-4 text-right">
          {[
            { id: "image", label: "Image" },
            { id: "details", label: "Details" },
            ...(project.demoVideo ? [{ id: "demo", label: "Demo" }] : []),
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white scale-110"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <h1 className="text-5xl font-bold">{project.name}</h1>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonRipple className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold">
                  View Project <ExternalLink size={22} />
                </ButtonRipple>
              </a>
            )}
          </div>

          {/* Image Carousel */}
          <div id="image" className="mb-12">
            <ImageCarousel
              images={project.images || [project.mainImage]}
              alt={project.name}
              autoPlayInterval={4000}
              isPortrait={project.isPortrait}
            />
          </div>

          {/* Tags */}
          <div className="mb-12 rounded-lg bg-gray-900 p-4 overflow-hidden">
            <div className="flex gap-6 tag-scroll">
              {[...project.tags, ...project.tags, ...project.tags].map(
                (tag, idx) => (
                  <span
                    key={idx}
                    className="flex-shrink-0 px-4 py-2 rounded-full bg-[#247DA6] text-white text-sm font-semibold whitespace-nowrap"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <style jsx>{`
              .tag-scroll {
                animation: scroll-horizontal 30s linear infinite;
              }
              .tag-scroll:hover {
                animation-play-state: paused;
              }
              @keyframes scroll-horizontal {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-33.333% - 1.5rem));
                }
              }
            `}</style>
          </div>

          {/* Details */}
          <div id="details" className="space-y-12 mb-12">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-2">MY ROLE</h3>
                <p className="text-lg font-semibold">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-2">YEAR</h3>
                <p className="text-lg font-semibold">{project.year}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">WHAT</h2>
              <p className="text-base leading-relaxed text-gray-300 mb-6">
                {project.what}
              </p>
              {project.focus && (
                <ul className="space-y-2 text-gray-300">
                  {project.focus.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-[#247DA6]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">FEATURES</h2>
              <ul className="space-y-3 text-gray-300">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[#247DA6]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Demo Video */}
          {project.demoVideo && (
            <div
              id="demo"
              className="bg-gray-900 rounded-lg p-16 text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-8">DEMO</h2>

              <div className="bg-gray-800 rounded-lg w-full aspect-video overflow-hidden">
                <video
                  src={project.demoVideo.src}
                  controls
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="flex justify-center">
            <Link href="/projects">
              <ButtonRipple>Back to Projects</ButtonRipple>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

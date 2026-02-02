"use client"

import type React from "react"
import { ButtonRipple } from "@/components/button-ripple"
import { Linkedin, Github } from "lucide-react"

export function Hero() {
  const handleContactScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactElement = document.getElementById("contact")
    if (contactElement) {
      const targetPosition = contactElement.getBoundingClientRect().top + window.scrollY
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 1500
      let start: number | null = null

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      }

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const elapsed = currentTime - start
        const progress = Math.min(elapsed / duration, 1)
        const ease = easeInOutQuad(progress)
        window.scrollTo(0, startPosition + distance * ease)

        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  return (
    <section className="relative w-full h-[calc(100vh-80px)] flex items-center px-6 overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Bakground-0M3D8ihGqcmEskGHPYcXTAevAOLdSD.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col">
          <h1 className="text-7xl font-bold mb-12 leading-tight">
            UI/UX AND
            <br />
            WEBAPP
            <br />
            DEVELOPER
          </h1>
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold">SAY HELLO</span>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/hengqi-tiong-164153339"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#247DA6] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/TiongHengQi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#247DA6] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xl leading-8 mb-4 max-w-md">
            I design digital experiences that don't shout — they work.
          </p>
          <p className="text-xl leading-8 mb-8 max-w-md">
            I'm an aspiring UI/UX and Web App Developer studying Digital Design & Development at Republic Polytechnic, driven by minimalism, functionality, and thoughtful design.
          </p>
          <div>
            <a href="#contact" onClick={handleContactScroll}>
              <ButtonRipple className="inline-block">Contact Me</ButtonRipple>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

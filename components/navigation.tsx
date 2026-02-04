"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()

  const smoothScrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (!contactSection) return

    const startPosition = window.scrollY
    const targetPosition = contactSection.offsetTop
    const distance = targetPosition - startPosition
    const duration = 1500 // 1.5 seconds for smooth animation
    let start: number

    const animation = (currentTime: number) => {
      if (start === undefined) start = currentTime
      const elapsed = currentTime - start
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth acceleration/deceleration
      const easeInOutQuad = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress

      window.scrollTo(0, startPosition + distance * easeInOutQuad)

      if (elapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (pathname === "/") {
      // Already on home page, just scroll
      smoothScrollToContact()
    } else {
      // Navigate to home then scroll
      router.push("/")
      setTimeout(() => {
        smoothScrollToContact()
      }, 300)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image src="/images/Logo.png" alt="Logo" width={40} height={40} className="rounded" />
          <span style={{ fontFamily: "Georgia, serif" }}>HENGQI</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <Link href="/about" className="hover:text-[#247DA6] transition-colors">
            ABOUT
          </Link>
          <button
            onClick={handleContactClick}
            className="hover:text-[#247DA6] transition-colors cursor-pointer bg-none border-none p-0 text-white text-sm font-medium"
          >
            CONTACT ME
          </button>
          <Link href="/projects" className="hover:text-[#247DA6] transition-colors">
            PROJECTS
          </Link>
        </div>
      </div>
    </nav>
  )
}

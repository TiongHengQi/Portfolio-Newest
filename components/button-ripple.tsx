"use client"

import type React from "react"

import type { ReactNode } from "react"

interface ButtonRippleProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

export function ButtonRipple({ children, className = "", onClick, href, target, rel }: ButtonRippleProps) {
  const baseStyle =
    "px-6 py-3 rounded-lg bg-[#E0F1FA] text-black font-semibold relative overflow-hidden transition-colors duration-500 hover:shadow-lg hover:bg-[#247DA6] hover:text-white"

  const handleMouseEnter = (e: React.MouseEvent) => {
    const button = e.currentTarget as HTMLElement
    const rect = button.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const ripple = document.createElement("span")
    ripple.style.width = "0"
    ripple.style.height = "0"
    ripple.style.left = centerX + "px"
    ripple.style.top = centerY + "px"
    ripple.style.position = "absolute"
    ripple.style.borderRadius = "50%"
    ripple.style.backgroundColor = "#247DA6"
    ripple.style.pointerEvents = "none"
    ripple.style.transform = "translate(-50%, -50%)"
    ripple.style.animation = "ripple-spread 0.8s ease-out forwards"
    ripple.style.zIndex = "0"

    button.appendChild(ripple)

    setTimeout(() => ripple.remove(), 800)
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyle} ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={onClick}
      >
        <span className="relative z-10">{children}</span>
      </a>
    )
  }

  return (
    <button className={`${baseStyle} ${className}`} onClick={onClick} onMouseEnter={handleMouseEnter}>
      <span className="relative z-10">{children}</span>
    </button>
  )
}

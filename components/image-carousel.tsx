"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCarouselProps {
  images: string[]
  alt: string
  autoPlayInterval?: number
  isPortrait?: boolean
}

export function ImageCarousel({ images, alt, autoPlayInterval = 4000, isPortrait = false }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1 || isHovered) return

    const interval = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [images.length, isHovered, autoPlayInterval, goToNext])

  if (images.length === 0) {
    return (
      <div className="relative rounded-lg overflow-hidden bg-gray-800 aspect-video flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    )
  }

  return (
    <div
      className="relative rounded-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      {isPortrait ? (
        <div className="relative flex justify-center items-center gap-3 md:gap-6 bg-gray-900 py-6 px-4 md:px-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-[400px] md:h-[520px] aspect-[9/19] rounded-xl overflow-hidden shadow-2xl border border-gray-700"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${alt} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative aspect-video">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                index === currentIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${alt} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      )}

      {/* Navigation Arrows - Only show if more than 1 image and not portrait */}
      {images.length > 1 && !isPortrait && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* Dot Indicators - Only show if more than 1 image and not portrait */}
      {images.length > 1 && !isPortrait && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter - Only show if more than 1 image and not portrait */}
      {images.length > 1 && !isPortrait && (
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

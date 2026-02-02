"use client"

import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: number
  name: string
  image: string
}

export function ProjectCard({ id, name, image }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="project-card relative h-56 rounded-lg overflow-hidden cursor-pointer group bg-gray-900">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="project-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <h3 className="text-xl font-bold text-white text-center mb-2">{name}</h3>
          <p className="text-sm text-gray-300">Click to view details</p>
        </div>
      </div>
    </Link>
  )
}

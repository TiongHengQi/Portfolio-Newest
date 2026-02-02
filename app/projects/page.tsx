"use client"

import { Navigation } from "@/components/navigation"
import { ProjectCard } from "@/components/project-card"
import { projectsByCategory } from "@/lib/utils"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-16">MY PROJECTS</h1>

          <div className="grid grid-cols-2 gap-16">
            {Object.entries(projectsByCategory).map(([category, projects], index) => (
              <div key={category} className={index === 1 ? "-mt-20" : ""}>
                <h2 className="text-2xl font-bold text-[#247DA6] mb-10">{category}</h2>
                <div className="gap-y-16 flex flex-col">
                  {projects.length > 0 ? (
                    projects.map((project) => (
                      <div key={project.id}>
                        <ProjectCard {...project} />
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">Coming soon...</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

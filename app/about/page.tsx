"use client"

import { Navigation } from "@/components/navigation"
import { ButtonRipple } from "@/components/button-ripple"

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "Python",
    "JavaScript",
    "Bootstrap",
    "MySQL",
    "Unity",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16">
          {/* Left side - Profile Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-7xl font-bold mb-4">
                Hi, I'm <span className="text-[#247DA6]">Tiong</span>
              </h1>
              <h2 className="text-7xl font-bold mb-12 text-[#247DA6]">Heng Qi</h2>

              <div className="space-y-6 text-base">
                <div className="flex items-center gap-3">
                  <span className="text-[#247DA6] text-lg">📍</span>
                  <span>Currently located in Singapore, SG</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#247DA6] text-lg">🎂</span>
                  <span>19 Years Old</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#247DA6] text-lg">🎓</span>
                  <span>Studying in Republic Polytechnic</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#247DA6] text-lg">💻</span>
                  <span>UI/UX and WebApp Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - About description and buttons */}
          <div className="flex flex-col justify-between">
            <p className="text-xl leading-8">
              I am a final-year student at Republic Polytechnic, studying Diploma in Digital Design & Development.
              Throughout my studies, I have been strengthening my skills in both design and development, and I am
              continuing to gain practical experience through various school projects, assignments, and real-world
              applications. I am also looking forward to learning even more and expanding my knowledge as I progress
              further in this field.
            </p>

            <div className="flex gap-4">
              <a
                href="https://drive.google.com/file/d/1dxcH2D1zn2MPXOYUjGTk_HFaiJ-tHh1T/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonRipple>Resume</ButtonRipple>
              </a>
              <ButtonRipple href="/certs.pdf" target="_blank">
                Certs
              </ButtonRipple>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Key Skills</h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-5 py-3 bg-[#247DA6] rounded-full text-base font-medium text-white">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

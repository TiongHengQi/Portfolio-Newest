"use client"

import { Navigation } from "@/components/navigation"
import { Award, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  image?: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "Feb 2026",
    credentialUrl: "https://drive.google.com/file/d/18JFzVMjf2i1bAge9_Xe7xgjJ3xk9VLUs/view?usp=sharing",
    image: "/images/certs/react-basic-hackerrank.png",
  },
]

export default function Certificates() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <Link
              href="/about"
              className="text-sm text-gray-400 hover:text-[#247DA6] transition-colors mb-6 inline-block"
            >
              &larr; Back to About
            </Link>
            <h1 className="text-5xl font-bold">Certificates</h1>
            <p className="text-gray-400 mt-4 text-lg max-w-xl">
              A collection of professional certifications and credentials I have earned.
            </p>
          </div>

          {/* Certificates Grid */}
          {certificates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="group rounded-lg border border-gray-800 bg-gray-950 overflow-hidden transition-all duration-300 hover:border-[#247DA6]/50 hover:shadow-lg hover:shadow-[#247DA6]/5"
                >
                  {/* Certificate Image */}
                  {cert.image && (
                    <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Certificate Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-[#247DA6] transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                      </div>
                      <Award className="w-5 h-5 text-[#247DA6] shrink-0 mt-1" />
                    </div>

                    <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm text-[#247DA6] hover:text-[#E0F1FA] transition-colors"
                      >
                        View Credential
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#247DA6]" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Certificates coming soon</h2>
              <p className="text-gray-400 max-w-md">
                This page is being updated with certifications and credentials. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

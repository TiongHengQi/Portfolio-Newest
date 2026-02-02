import { Mail, MapPin } from "lucide-react"
import { FileText } from "lucide-react"

export function Footer() {
  return (
    <section id="contact" className="py-20 px-6 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">CONTACT</h2>

        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-lg bg-[#247DA6] text-white text-center">
            <FileText className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Resume</h3>
            <a
              href="https://drive.google.com/file/d/1_QBV-tVXCFC08BUhLpQ3KNMZmoEvPMld/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline transition-all duration-300 inline-block"
            >
              Download Resume
            </a>
          </div>

          <div className="p-8 rounded-lg bg-[#247DA6] text-white text-center">
            <Mail className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-sm">tionghengqi@gmail.com</p>
          </div>

          <div className="p-8 rounded-lg bg-[#247DA6] text-white text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-sm">Singapore, SG</p>
          </div>
        </div>
      </div>
    </section>
  )
}

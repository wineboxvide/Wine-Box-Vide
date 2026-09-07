"use client"

import { useEffect, useState } from "react"


import { MessageCircle } from "lucide-react"
import config from "@/config"

export default function WhatsAppButton() {
const [contactVisible, setContactVisible] = useState(false)
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(
    config.contact.whatsappMessage
  )}`
useEffect(() => {
  const contacto = document.getElementById("contacto")
  if (!contacto) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      setContactVisible(entry.isIntersecting)
    },
    {
      threshold: 0.2,
    }
  )

  observer.observe(contacto)

  return () => observer.disconnect()
}, [])

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a Wine Box Vide por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#1FB958] hover:shadow-xl ${
  contactVisible
    ? "pointer-events-none translate-y-4 opacity-0"
    : "translate-y-0 opacity-100"
}`}
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">
        WhatsApp
      </span>
    </a>
  )
}
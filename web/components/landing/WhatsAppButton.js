"use client"

import { useEffect, useState } from "react"


import { MessageCircle } from "lucide-react"
import config from "@/config"

export default function WhatsAppButton() {
const [contactVisible, setContactVisible] = useState(false)
const [viewportRight, setViewportRight] = useState(16)
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(
    config.contact.whatsappMessage
  )}`
useEffect(() => {
  const updateViewportRight = () => {
    const visualWidth = window.visualViewport?.width ?? window.innerWidth
    const offsetLeft = window.visualViewport?.offsetLeft ?? 0
    const offset = window.innerWidth - visualWidth - offsetLeft

    setViewportRight(Math.max(16, offset + 16))
  }

  updateViewportRight()

  window.addEventListener("resize", updateViewportRight)
  window.visualViewport?.addEventListener("resize", updateViewportRight)
  window.visualViewport?.addEventListener("scroll", updateViewportRight)

  return () => {
    window.removeEventListener("resize", updateViewportRight)
    window.visualViewport?.removeEventListener("resize", updateViewportRight)
    window.visualViewport?.removeEventListener("scroll", updateViewportRight)
  }
}, [])
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
      style={{ right: `${viewportRight}px` }}
      className={`fixed bottom-7 right-4 z-50 flex size-12 items-center justify-center rounded-full bg-[#25D366] p-0 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#1FB958] hover:shadow-xl sm:right-5 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3 ${
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
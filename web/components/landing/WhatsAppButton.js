import { MessageCircle } from "lucide-react"
import config from "@/config"

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(
    config.contact.whatsappMessage
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a Wine Box Vide por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-[#1FB958] hover:shadow-xl"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">
        WhatsApp
      </span>
    </a>
  )
}
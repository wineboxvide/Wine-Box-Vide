"use client"

import { useEffect, useRef, useState } from "react"
import {
  MessageCircle,
  Mail,
  Instagram,
  Send,
} from "lucide-react"
import config from "@/config"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const PRODUCT_TYPES = [
  "Vino",
  "Mezcal/Sotol",
  "Otras bebidas",
  "Regalos corporativos",
  "Otro",
]

export default function Contact() {
const sectionRef = useRef(null)
  const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(
    config.contact.whatsappMessage
  )}`

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    producto: "",
    cantidad: "",
    necesidad: "",
  })

  const [status, setStatus] = useState("idle")

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(e) {
  e.preventDefault()
  setStatus("loading")

  try {
    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const body = await res.json().catch(() => ({}))

    if (!res.ok) {
      throw new Error(body.error || "No pudimos enviar tu solicitud.")
    }

    setStatus("success")

    setFormData({
      nombre: "",
      empresa: "",
      correo: "",
      telefono: "",
      producto: "",
      cantidad: "",
      necesidad: "",
    })
  } catch (err) {
    console.error(err)
    setStatus("error")
  }
}
  
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const section = sectionRef.current
  if (!section) return

  const channels = section.querySelector(".contact-channels")
  const form = section.querySelector(".contact-form")

  const ctx = gsap.context(() => {
    if (channels) {
      gsap.fromTo(
        channels,
        { x: -70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            end: "top 48%",
            scrub: 1.5,
          },
        }
      )
    }

    if (form) {
      gsap.fromTo(
        form,
        { x: 70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            end: "top 48%",
            scrub: 1.5,
          },
        }
      )
    }
  }, section)

  return () => ctx.revert()
}, [])

  return (
    <section
     ref={sectionRef}
      id="contacto"
      className="border-t border-base-200 bg-base-100 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Contacto
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Cuéntanos qué necesita tu negocio
          </h2>

          <p className="mt-4 text-base leading-7 text-base-content/70">
            Te ayudaremos a identificar la solución más adecuada para tu operación.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="contact-channels relative overflow-hidden rounded-3xl bg-[#5A0A22] p-8 text-white shadow-[0_20px_50px_rgba(90,10,34,0.18)]">
            <div
  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-[#F2C75C]/20"
  aria-hidden="true"
/>
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F2C75C]">
              Canales directos
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Estamos para ayudarte
            </h3>

            <p className="mt-4 leading-7 text-white/80">
              ¿Prefieres atención directa? Escríbenos por WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-6 border-none bg-[#25D366] text-white hover:bg-[#1FB958]"
            >
              <MessageCircle className="size-4" />
              Escribirnos por WhatsApp
            </a>

            <div className="relative z-10 mt-8 space-y-3">
             <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
           <Mail className="mt-0.5 size-5 text-[#F2C75C]" />
          <div>
          <p className="font-semibold">Correo electrónico</p>
         <a
         href="mailto:wineboxvide@gmail.com"
         className="text-sm text-white/70 hover:text-white"
         >
         wineboxvide@gmail.com
        </a>
       </div>
      </div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
  <Instagram className="mt-0.5 size-5 text-[#F2C75C]" />
  <div>
    <p className="font-semibold">Instagram</p>
    <a
      href="https://www.instagram.com/wineboxvide1/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-white/70 hover:text-white"
    >
      @wineboxvide1
    </a>
  </div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
  <Send className="mt-0.5 size-5 text-[#F2C75C]" />
  <div>
    <p className="font-semibold">TikTok</p>
    <a
      href="https://www.tiktok.com/@wine.box.vide.cuu"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-white/70 hover:text-white"
    >
      @wine.box.vide.cuu
    </a>
  </div>
</div>
            </div>
          </div>

          <div className="contact-form rounded-3xl border border-base-200 bg-base-100 p-7 shadow-sm md:p-8">
            <h3 className="text-2xl font-bold">
              Solicitar información
            </h3>

            <p className="mt-2 text-sm leading-6 text-base-content/70">
              Comparte algunos datos sobre tu proyecto y podremos orientarte de
              acuerdo con las necesidades de tu negocio.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="nombre">
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="empresa">
                    Empresa / negocio *
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="correo">
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    value={formData.correo}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="telefono">
                    WhatsApp / teléfono *
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="producto">
                    Tipo de producto
                  </label>
                  <select
                    id="producto"
                    name="producto"
                    value={formData.producto}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                  >
                    <option value="">Selecciona una opción</option>
                    {PRODUCT_TYPES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="cantidad">
                    Cantidad aproximada de botellas a proteger
                  </label>
                  <input
                    id="cantidad"
                    name="cantidad"
                    type="text"
                    value={formData.cantidad}
                    onChange={handleChange}
                    placeholder="Ej. 50, 100, 500..."
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium" htmlFor="necesidad">
                  Cuéntanos sobre tu necesidad
                </label>
                <textarea
                  id="necesidad"
                  name="necesidad"
                  rows={5}
                  value={formData.necesidad}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  placeholder="Cuéntanos qué producto manejas, cómo realizas tus entregas o cualquier característica importante de tu proyecto."
                />
              </div>

              <button
  type="submit"
  className="btn btn-primary w-full md:w-auto"
  disabled={status === "loading"}
>
  {status === "loading" ? "Enviando..." : "Solicitar información"}
</button>

            {status === "success" && (
  <p className="text-sm font-medium text-success">
    ¡Gracias! Recibimos tu información y nos pondremos en contacto contigo.
  </p>
)}

{status === "error" && (
  <p className="text-sm font-medium text-error">
    No pudimos enviar tu solicitud. Inténtalo nuevamente o escríbenos por WhatsApp.
  </p>
)}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { useEffect, useRef, useState } from "react"
import * as LucideIcons from "lucide-react"
import Link from "next/link"
import config from "@/config"
function Icon({ name, className }) {
  const Cmp = LucideIcons[name] || LucideIcons.Square
  return <Cmp className={className} />
}

// Paleta de chips que cicla por item (clases literales para el JIT de Tailwind).
const CHIP_COLORS = [
  "bg-[#F7E7EC] text-[#8B1E3F] group-hover:bg-[#8B1E3F] group-hover:text-[#F2C75C]",
  "bg-[#F3EAF8] text-[#7A3E9D] group-hover:bg-[#8B1E3F] group-hover:text-[#F2C75C]",
  "bg-[#EAF4F8] text-[#2F6F89] group-hover:bg-[#8B1E3F] group-hover:text-[#F2C75C]",
  "bg-[#EDF5EC] text-[#4F7A52] group-hover:bg-[#8B1E3F] group-hover:text-[#F2C75C]",
]

export default function Features() {
  const { eyebrow, title, subtitle, items } = config.landing.features
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
  ref={sectionRef}
  id="soluciones"
  className="..."
>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl overflow-hidden text-center">
  <p
    className={`text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-all duration-700 ${
      visible
        ? "translate-y-0 opacity-100"
        : "translate-y-4 opacity-0"
    }`}
  >
    {eyebrow}
  </p>

  <h2
    className={`mt-3 text-3xl font-bold tracking-tight transition-all duration-700 md:text-4xl ${
      visible
        ? "translate-x-0 opacity-100"
        : "-translate-x-10 opacity-0"
    }`}
    style={{ transitionDelay: "120ms" }}
  >
    {title}
  </h2>

  {subtitle && (
    <p
      className={`mx-auto mt-4 max-w-xl text-base leading-7 text-base-content/70 transition-all duration-700 ${
        visible
          ? "translate-x-0 opacity-100"
          : "translate-x-10 opacity-0"
      }`}
      style={{ transitionDelay: "240ms" }}
    >
      {subtitle}
    </p>
  )}
</div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {items.map((item, i) => (
    <li
      key={item.title}
      style={{ transitionDelay: `${320 + i * 120}ms` }}
      className={`group rounded-2xl border border-[#EADDE2] bg-white p-6 shadow-sm transition-all duration-700 hover:-translate-y-2 hover:border-[#8B1E3F]/30 hover:shadow-xl ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      <div
        className={
          "mb-5 inline-flex size-16 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-3 " +
          CHIP_COLORS[i % CHIP_COLORS.length]
        }
      >
        <Icon
          name={item.icon}
          className="size-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
        />
      </div>

      <h3 className="text-lg font-semibold">
        {item.title}
      </h3>

      <p className="mt-2 text-base leading-7 text-base-content/70">
        {item.body}
      </p>
    </li>
  ))}
</ul>

        <div
  className={`mt-16 grid items-center gap-8 overflow-hidden rounded-3xl bg-[#5A0A22] p-6 text-white transition-all duration-700 md:grid-cols-2 md:p-10 ${
    visible ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"
  }`}
  style={{ transitionDelay: "750ms" }}
>
        <div
  className={`transition-all duration-700 ${
    visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
  }`}
  style={{ transitionDelay: "900ms" }}
>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F2C75C]">
              Prueba real
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight">
              No solo lo decimos. Lo ponemos a prueba.
            </h3>

            <p className="mt-4 leading-7 text-white/80">
              Nuestro sistema ha sido sometido a pruebas reales de resistencia e impacto
              para observar el comportamiento del inserto durante la manipulación y el transporte.
            </p>

            <p
  className={`mt-5 overflow-hidden whitespace-nowrap font-semibold text-[#F2C75C] transition-all duration-700 ${
    visible ? "max-w-[320px] opacity-100" : "max-w-0 opacity-0"
  }`}
  style={{ transitionDelay: "900ms" }}
>
  Pruebas reales. Protección real.
</p>
<div
  className={`mt-4 inline-flex items-center rounded-full border border-[#F2C75C]/40 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-700 ${
    visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
  }`}
  style={{ transitionDelay: "1050ms" }}
>Primera prueba realizada desde una altura de 1.50 m.
</div>
<div className="mt-6 flex flex-wrap gap-3">
  
  <Link
  href="#como-funciona"
  className="proof-cta btn border border-[#F2C75C]/60 bg-white/5 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#F2C75C] hover:bg-[#F2C75C] hover:text-[#5A0A22] hover:shadow-xl"
>
  Ver pruebas y funcionamiento
</Link>
</div>
          </div>

         <div
  className={`overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition-all duration-700 ${
    visible
      ? "translate-x-0 scale-100 opacity-100"
      : "translate-x-10 scale-[0.96] opacity-0"
  }`}
  style={{ transitionDelay: "1050ms" }}
>
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full"
            >
              <source
  src="/videos/prueba-resistencia-30s.mp4"
                type="video/mp4"
              />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        </div>

      </div>
    </section>
  )
}

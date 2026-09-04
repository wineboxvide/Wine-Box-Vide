"use client"

import { useEffect, useRef, useState } from "react"

import Link from "next/link"
import {
  Wine,
  GlassWater,
  Store,
  Gift,
  Truck,
  PackageCheck,
} from "lucide-react"

const BUSINESS_TYPES = [
  {
    icon: Wine,
    title: "Vinícolas y bodegas",
    description: "Entregas y envíos protegidos.",
  },
  {
    icon: GlassWater,
    title: "Wine clubs",
    description: "Botellas seguras en cada selección.",
  },
  {
    icon: PackageCheck,
    title: "Mezcal, sotol y otras bebidas",
    description: "Protección para distintos formatos.",
  },
  {
    icon: Store,
    title: "Tiendas y licorerías",
    description: "Entregas seguras a tus clientes.",
  },
  {
    icon: Gift,
    title: "Regalos corporativos",
    description: "Presentación y protección en un solo empaque.",
  },
  {
    icon: Truck,
    title: "E-commerce",
    description: "Prepara tus botellas para paquetería.",
  },
]
export default function ForBusiness() {
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
  id="para-empresas"
      className="border-t border-base-200 bg-[#5A0A22] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4">
      <div className="mx-auto max-w-3xl overflow-hidden text-center">
  
<p
  className={`text-sm font-semibold uppercase tracking-[0.18em] text-[#F2C75C] transition-all duration-700 ${
    visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
  }`}
>
  ¿Cómo usarías Wine Box Vide?
</p>

<h2
  className={`mt-3 text-3xl font-bold tracking-tight transition-all duration-700 md:text-4xl ${
    visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`}
  style={{ transitionDelay: "120ms" }}
>
  Una solución para cada forma de vender y enviar botellas
</h2>

<p
  className={`mt-4 text-white/80 transition-all duration-700 ${
    visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`}
  style={{ transitionDelay: "240ms" }}
>
  Soluciones pensadas para distintos modelos de negocio, canales de venta y formas de entrega.
</p>

         
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_TYPES.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
className={`group rounded-2xl border border-white/10 bg-white/95 p-6 text-base-content shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
  visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
}`}
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-[#5A0A22] text-[#F2C75C]">
               <Icon
  className={`size-5 transition-transform duration-500 ${
    i === 0
      ? "group-hover:-rotate-12 group-hover:scale-110"
      : i === 1
        ? "group-hover:-translate-y-1 group-hover:rotate-6"
        : i === 2
          ? "group-hover:scale-125"
          : i === 3
            ? "group-hover:-translate-y-1"
            : i === 4
              ? "group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110"
              : "group-hover:translate-x-2"
  }`}
/>
              </div>

              <h3 className="text-lg font-semibold">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-base-content/70">
                {description}
              </p>
            </div>
          ))}
        </div>

       <div
  className={`mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-[#F2C75C]/30 bg-black/10 px-6 py-10 text-center transition-all duration-700 md:px-10 ${
    visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`}
  style={{ transitionDelay: "1100ms" }}
>
  <p
    className={`text-lg font-medium text-white/80 transition-all duration-700 md:text-xl ${
      visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
    }`}
    style={{ transitionDelay: "1250ms" }}
  >
    Cada botella representa algo importante.
  </p>

  <h3
    className={`mt-2 text-2xl font-bold text-[#F2C75C] transition-all duration-700 md:text-3xl ${
      visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`}
    style={{ transitionDelay: "1500ms" }}
  >
    Nuestro trabajo es ayudar a que llegue protegida.
  </h3>

  <div
    className={`mx-auto mt-5 h-1 rounded-full bg-[#F2C75C] transition-all duration-700 ${
      visible ? "w-32 opacity-100" : "w-0 opacity-0"
    }`}
    style={{ transitionDelay: "1750ms" }}
    aria-hidden="true"
  />
</div>
      </div>
    </section>
  )
}
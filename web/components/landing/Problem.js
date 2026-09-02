"use client"

import { useEffect, useRef, useState } from "react"
import * as LucideIcons from "lucide-react"
import config from "@/config"

function Icon({ name, className }) {
  const Cmp = LucideIcons[name] || LucideIcons.Square

  return (
    <Cmp
      className={className}
      aria-hidden="true"
    />
  )
}

export default function Problem() {
  const { eyebrow, title, subtitle, items } = config.landing.problem

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
      {
        threshold: 0.2,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
   <section
  ref={sectionRef}
  className="border-t border-[#E8D9DF] bg-[#F8F3F5] py-20 md:py-28"
>
      <div className="mx-auto max-w-6xl px-5">

        {/* Encabezado */}
      <div className="mx-auto max-w-2xl text-center">
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
        ? "translate-y-0 opacity-100"
        : "translate-y-8 opacity-0"
    }`}
    style={{ transitionDelay: "120ms" }}
  >
    {title}
  </h2>

  {subtitle && (
    <p
      className={`mx-auto mt-4 max-w-xl text-base leading-7 text-base-content/70 transition-all duration-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: "240ms" }}
    >
      {subtitle}
    </p>
  )}
</div>

        {/* Consecuencias */}
        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <li
              key={item.title}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
             className={`group rounded-2xl border border-[#EADDE2] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#8B1E3F] hover:bg-[#8B1E3F] hover:text-white hover:shadow-xl ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl bg-[#F7E7EC] text-[#8B1E3F] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-white/15 group-hover:text-[#F2C75C] group-hover:shadow-md">
  <Icon
    name={item.icon}
    className="size-8 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-3"
  />
</div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

             <p className="mt-2 text-base leading-7 text-base-content/70 transition-colors duration-500 group-hover:text-white/80">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Cierre */}
        
          <div
  className={`mx-auto mt-10 max-w-2xl text-center transition-all duration-700 ${
    visible
      ? "translate-y-0 opacity-100"
      : "translate-y-8 opacity-0"
  }`}
  style={{ transitionDelay: "650ms" }}
>
 <p className="text-xl font-bold leading-tight text-base-content md:text-2xl">
  Por eso, proteger una botella es también{" "}
  <span className="whitespace-nowrap text-[#8B1E3F]">
    proteger tu negocio.
  </span>
</p>

  <div
    className={`mx-auto mt-4 h-1 rounded-full bg-[#8B1E3F] transition-all duration-700 ${
      visible ? "w-20 opacity-100" : "w-0 opacity-0"
    }`}
    style={{ transitionDelay: "900ms" }}
    aria-hidden="true"
  />
</div>
      </div>
    </section>
  )
}
"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import config from "@/config"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const KIT_IMAGES = {
  "kit-1": "/images/kit-premium.png",
  "kit-2": "/images/kit-duo.png",
  "kit-6": "/images/kit-6-botellas.png",
  "kit-12": "/images/kit-master.png",
}

export default function Pricing() {
  const { eyebrow, title, subtitle, plans } = config.pricing
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
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const photo = sectionRef.current?.querySelector(".kit-photo")

  if (!photo) return

  const animation = gsap.fromTo(
    photo,
    {
      scale: 0.82,
      borderRadius: "24px",
    },
    {
      scale: 1,
      borderRadius: "12px",
      ease: "none",
      scrollTrigger: {
        trigger: photo,
        start: "top 90%",
        end: "top 55%",
        scrub: 1,
      },
    }
  )

  return () => {
    animation.scrollTrigger?.kill()
    animation.kill()
  }
}, [])
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const button = sectionRef.current?.querySelector(".kit-cta-featured")

  if (!button) return

  const animation = gsap.fromTo(
    button,
    {
      scale: 0.82,
      y: 20,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    {
      scale: 1.08,
      y: 0,
      boxShadow: "0 14px 30px rgba(139, 30, 63, 0.28)",
      ease: "none",
      scrollTrigger: {
        trigger: button,
        start: "top 92%",
        end: "top 65%",
        scrub: 1,
      },
    }
  )

  return () => {
    animation.scrollTrigger?.kill()
    animation.kill()
  }
}, [])
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const buttons = sectionRef.current?.querySelectorAll(".kit-cta-featured")

  if (!buttons?.length) return

  const animations = []

  buttons.forEach((button) => {
    const animation = gsap.fromTo(
      button,
      {
        scale: 0.82,
        y: 20,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      },
      {
        scale: 1.08,
        y: 0,
        boxShadow: "0 14px 30px rgba(139, 30, 63, 0.28)",
        ease: "none",
        scrollTrigger: {
          trigger: button,
          start: "top 92%",
          end: "top 65%",
          scrub: 1,
        },
      }
    )

    animations.push(animation)
  })

  return () => {
    animations.forEach((animation) => {
      animation.scrollTrigger?.kill()
      animation.kill()
    })
  }
}, [])
  return (
   <section
  ref={sectionRef}
  id="kits"
  className="border-t border-[#EDE5DF] bg-[#FBF8F4] py-20 md:py-28"
>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-4 text-base-content/70">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {plans.map((plan, i) => (
    <div
      key={plan.id}
      style={{ transitionDelay: `${200 + i * 140}ms` }}
      className={`group flex flex-col rounded-2xl border border-base-200 bg-base-100 p-6 transition-all duration-700 hover:-translate-y-2 hover:border-[#8B1E3F]/30 hover:shadow-xl ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
     <div
  className={`kit-photo group/image relative mb-5 aspect-square overflow-hidden rounded-xl bg-base-200 ${
    i === 0 ? "kit-photo-featured" : ""
  }`}
>
  <Image
    src={KIT_IMAGES[plan.id]}
    alt={`${plan.name} - ${plan.capacity}`}
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-[1.10]"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  />

  

      </div>

      <div className="mb-4">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {plan.capacity}
        </span>
      </div>

      <h3 className="text-xl font-semibold">
        {plan.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-base-content/70">
        {plan.description}
      </p>

      <button
        type="button"
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent("wivi:cotizacion", {
              detail: {
                kit: `${plan.name} - ${plan.capacity}`,
              },
            })
          )
        }}
       className={`kit-cta btn mt-6 w-full border-none bg-[#F0008B] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#D5007B] hover:text-white hover:shadow-xl ${
  "kit-cta-featured"
}`}
      >
        {plan.cta}
      </button>
    </div>
  ))}
</div>

        <div
  className={`mt-12 rounded-3xl bg-[#5A0A22] px-6 py-9 text-center text-white transition-all duration-700 md:px-10 ${
    visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`}
  style={{ transitionDelay: "850ms" }}
>
  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E8D6C0]">
  Requerimiento especial
</p>

  <h3 className="mt-3 text-2xl font-bold md:text-3xl">
    ¿Necesitas algo diferente?
  </h3>

  <p className="mx-auto mt-3 max-w-xl leading-7 text-white/80">
    Cuéntanos qué necesitas proteger y revisamos contigo la solución adecuada.
  </p>

  <button
    type="button"
    onClick={() => {
      window.dispatchEvent(new CustomEvent("wivi:cotizacion"))
    }}
    className="btn mt-6 border-none bg-[#F0008B] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#D5007B] hover:text-white hover:shadow-lg"
  >
  <span
    className={`inline-block overflow-hidden whitespace-nowrap transition-all duration-1000 ${
      visible ? "max-w-[220px] opacity-100" : "max-w-0 opacity-0"
    }`}
    style={{ transitionDelay: "200ms" }}
  >
    Cuéntanos qué necesitas
  </span>
<span
  className={`ml-2 inline-block transition-all duration-500 ${
    visible ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
  }`}
  style={{ transitionDelay: "350ms" }}
  aria-hidden="true"
>
  →
</span>
</button>
</div>
      </div>
    </section>
  )
}
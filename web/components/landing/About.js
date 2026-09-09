"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  ShieldCheck,
  PackageOpen,
  MousePointerClick,
  Building2,
} from "lucide-react"

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Protege la botella",
    description:
      "Reduce el movimiento y ayuda a protegerla durante el transporte.",
  },
  {
    icon: PackageOpen,
    title: "Se adapta a tu envío",
    description:
      "Presentaciones para 1, 2, 6 y 12 botellas.",
  },
  {
    icon: MousePointerClick,
    title: "Fácil de usar",
    description:
      "Se arma, se coloca la botella y se integra a la caja.",
  },
  {
    icon: Building2,
    title: "Pensado para empresas",
    description:
      "Para negocios que venden, transportan o envían botellas.",
  },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    const inserto = section.querySelector(".about-inserto")
    if (!inserto) return

    const animation = gsap.fromTo(
  inserto,
  {
    x: -260,
    y: 90,
    scale: 0.35,
    rotation: -28,
    opacity: 0,
  },
  {
    x: 20,
    y: -8,
    scale: 1,
    rotation: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top 95%",
      end: "top 48%",
      scrub: 2.5,
    },
  }
)
const title = section.querySelector(".about-title")

if (title) {
  gsap.fromTo(
    title,
    {
      y: 38,
opacity: 0,
scale: 0.94,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
       start: "top 62%",
end: "top 38%",
scrub: 2,
      },
    }
  )
}
const intro = section.querySelector(".about-intro")

if (intro) {
  gsap.fromTo(
    intro,
    {
      y: 24,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 52%",
        end: "top 32%",
        scrub: 2,
      },
    }
  )
}
const diffEyebrow = section.querySelector(".about-diff-eyebrow")
const diffTitle = section.querySelector(".about-diff-title")
const cards = section.querySelectorAll(".about-card")

if (diffEyebrow && diffTitle) {
  gsap.fromTo(
    [diffEyebrow, diffTitle],
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: diffEyebrow,
        start: "top 88%",
        end: "top 68%",
        scrub: 1.5,
      },
    }
  )
}

if (cards.length) {
  gsap.fromTo(
    cards,
    {
      y: 45,
      opacity: 0,
      scale: 0.96,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cards[0],
        start: "top 90%",
        end: "top 62%",
        scrub: 1.8,
      },
    }
  )
}
const purpose = section.querySelector(".about-purpose")
const purposeText = section.querySelector(".about-purpose-text")

if (purpose && purposeText) {
  gsap.fromTo(
    purpose,
    {
      y: 35,
      opacity: 0,
      scale: 0.97,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: purpose,
        start: "top 90%",
        end: "top 70%",
        scrub: 1.5,
      },
    }
  )

  gsap.fromTo(
    purposeText,
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: purpose,
        start: "top 82%",
        end: "top 65%",
        scrub: 1.5,
      },
    }
  )
}
const clientTitle = section.querySelector(".client-title")
const clientSubtitle = section.querySelector(".client-subtitle")
const clientValidation = section.querySelector(".client-validation")

if (clientTitle && clientSubtitle && clientValidation) {
  gsap.fromTo(
    [clientTitle, clientSubtitle, clientValidation],
    {
      y: 35,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: {
        trigger: clientTitle,
        start: "top 92%",
        end: "top 58%",
        scrub: 1.8,
      },
    }
  )
}
const clientWindow = section.querySelector(".client-window")
const clientTrack = section.querySelector(".client-track")
const clientCards = section.querySelectorAll(".client-logo-card")

if (clientWindow && clientTrack && clientCards.length) {
 gsap.fromTo(
  clientTrack,
  {
   xPercent: -22,
  },
  {
    xPercent: 22,
    ease: "none",
    scrollTrigger: {
      trigger: clientWindow,
      start: "top 95%",
      end: "bottom 25%",
      scrub: 2.5,
    },
  }
)

  gsap.fromTo(
    clientCards,
    {
      opacity: 0,
      scale: 0.9,
    },
    {
      opacity: 1,
      scale: 1,
      stagger: 0.18,
      ease: "power2.out",
      scrollTrigger: {
        trigger: clientWindow,
        start: "top 90%",
        end: "top 68%",
        scrub: 1.5,
      },
    }
  )
}
    return () => {
      animation.scrollTrigger?.kill()
      animation.kill()
    }
  }, [])

  return (
   <section
  ref={sectionRef}
  id="nosotros"
      className="border-t border-[#E8DDE1] bg-[#F8F3F5] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
    Nosotros
  </p>

  <div className="relative mt-4 inline-flex items-center justify-center gap-3">
  <Image
  src="/images/inserto-recorrido.png"
  alt=""
  width={80}
  height={120}
  className="about-inserto h-auto w-16 object-contain md:w-20"
  aria-hidden="true"
/>

  <h2 className="about-title text-4xl font-bold tracking-tight md:text-5xl">
    ¿Por qué Wine Box Vide?
  </h2>
</div>

  <p className="about-intro mx-auto mt-5 max-w-3xl text-base leading-8 text-base-content/70 md:text-lg">
    Diseñamos empaques inteligentes para proteger botellas de vidrio durante su
    manipulación, transporte y envío.
  </p>
</div>
        <div className="mt-10 md:mt-12">
          <div className="text-center">
            <p className="about-diff-eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Lo que nos diferencia
            </p>

            <h3 className="about-diff-title mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Una solución pensada para necesidades reales
            </h3>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="about-card group min-h-[210px] rounded-2xl border border-[#8B1E3F]/20 bg-white p-7 shadow-[0_10px_30px_rgba(85,20,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#8B1E3F]/45 hover:shadow-[0_18px_40px_rgba(85,20,42,0.16)]"
              >
               <div className="about-card-icon mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-[#8B1E3F] text-[#E8D6C0] shadow-sm transition-all duration-300 group-hover:scale-110">
  <Icon className="about-card-icon-symbol size-5" />
</div>

                <h4 className="text-xl font-semibold leading-7">
                  {title}
                </h4>

                <p className="mt-3 text-base leading-7 text-base-content/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
<div className="relative left-1/2 mt-20 w-screen -translate-x-1/2 bg-[#6A0D2B] py-20 md:py-24">
  <div className="mx-auto max-w-7xl px-4">
<div className="client-proof mx-auto max-w-6xl text-center">

    <p className="client-title text-3xl font-bold uppercase tracking-[0.12em] text-[#F7EDE7] md:text-4xl">
  Ya confían en Wine Box Vide
</p>
<h3 className="client-subtitle mx-auto mt-5 max-w-3xl text-xl font-medium leading-8 text-white/90 md:text-2xl">
  Una solución que ya está siendo utilizada por negocios reales
</h3>
      <p className="client-validation mt-8 text-sm font-semibold uppercase tracking-[0.20em] text-[#E8D6C0]">
        Clientes reales · Validación real
      </p>

      <div className="client-window mt-8 overflow-hidden py-8">
        <div className="client-track flex items-center gap-16 md:gap-24">

          <div className="client-logo-card flex min-h-[180px] w-[360px] shrink-0 items-center justify-center px-6 py-6">
            <Image
             src="/logos/logo-la-castellana-blanco.png"
              alt="La Castellana"
              width={320}
              height={140}
              className="h-auto max-h-28 w-auto max-w-full object-contain"
            />
          </div>

          <div className="client-logo-card flex min-h-[180px] w-[360px] shrink-0 items-center justify-center px-6 py-6">
            <Image
              src="/logos/logo-empacalo.png"
              alt="Empacalo"
              width={320}
              height={140}
              className="h-auto max-h-28 w-auto max-w-full object-contain"
            />
          </div>

        </div>
      </div>
    </div>
<div className="about-purpose mx-auto mt-10 max-w-5xl border-t border-[#F0008B]/60 px-8 pt-12 text-center">
  <p className="about-purpose-text mx-auto max-w-4xl text-xl font-semibold leading-9 md:text-2xl">
    <span className="text-[#E8D6C0]">No es solamente un proyecto:</span>{" "}
    <span className="text-white">
      ya hay negocios que han comprado y utilizado nuestra solución.
    </span>
  </p>
</div>

  </div>
</div>
        </div>
          </section>
  )
}
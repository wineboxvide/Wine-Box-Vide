"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

import {
  PackageOpen,
  Wine,
  Box,
  PlayCircle,
} from "lucide-react"

const STEPS = [
  {
    icon: PackageOpen,
    number: "01",
    title: "Arma el inserto",
    description:
      "Se entrega plano y se arma fácilmente sin herramientas.",
  },
  {
    icon: Wine,
    number: "02",
    title: "Coloca y asegura la botella",
    description:
      "La botella queda contenida dentro de la estructura protectora.",
  },
  {
    icon: Box,
    number: "03",
    title: "Integra al empaque",
    description:
      "Coloca el inserto dentro de la caja y prepara el envío.",
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

    const section = sectionRef.current
    if (!section) return

    const inserto = section.querySelector(".inserto-viajero")
    const path = section.querySelector(".recorrido-path")
    const paso01 = section.querySelector(".proceso-paso-01")
    const paso02 = section.querySelector(".proceso-paso-02")
    const paso03 = section.querySelector(".proceso-paso-03")

    if (!inserto || !path || !paso01 || !paso02 || !paso03) return

    const pasos = [paso01, paso02, paso03]
    let pasoActivo = -1

    const activarPaso = (indice) => {
      if (pasoActivo === indice) return

      pasoActivo = indice

      pasos.forEach((paso, i) => {
        gsap.to(paso, {
          scale: i === indice ? 1.04 : 1,
          borderColor:
            i === indice
              ? "rgba(139, 30, 63, 0.45)"
              : "rgba(139, 30, 63, 0.12)",
          boxShadow:
            i === indice
              ? "0 16px 35px rgba(139, 30, 63, 0.16)"
              : "0 0 0 rgba(139, 30, 63, 0)",
          duration: 0.35,
          overwrite: true,
        })
      })
    }

    activarPaso(0)

    const animation = gsap.to(inserto, {
      motionPath: {
        path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
        start: 0,
        end: 1,
      },
      ease: "none",
         scrollTrigger: {
      trigger: section,
      start: "top 75%",
      end: "+=600",
      scrub: 4,

      onUpdate: (self) => {
        const progreso = self.animation.progress()

        if (progreso < 0.33) {
          activarPaso(0)
        } else if (progreso < 0.66) {
          activarPaso(1)
        } else {
          activarPaso(2)
        }
      },
    },
  })

  return () => {
    animation.scrollTrigger?.kill()
    animation.kill()
  }
}, [])
   

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="border-t border-base-200 bg-base-100 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Cómo funciona
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Mira cómo funciona nuestra protección
          </h2>

          <p className="mt-4 text-base-content/70">
            Del armado a la protección: así preparamos cada botella para el transporte.
          </p>
        </div>

        <div className="relative mx-auto mt-10 h-32 w-full max-w-4xl">
          <svg
            viewBox="0 0 900 120"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              className="recorrido-path"
              d="M70 70 C220 10, 310 110, 450 60 S690 20, 830 65"
              fill="none"
              stroke="#D8B7C2"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 10"
            />
          </svg>

          <Image
            src="/images/inserto-recorrido.png"
            alt="Inserto protector Wine Box Vide"
            width={110}
            height={180}
            className="inserto-viajero absolute left-0 top-1/2 -translate-y-1/2 object-contain"
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, number, title, description }) => (
            <div
              key={number}
              className={`proceso-paso proceso-paso-${number} rounded-2xl border border-base-200 bg-base-100 p-6`}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>

                <span className="text-sm font-bold text-primary/50">
                  {number}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/70">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-3xl bg-[#5A0A22] p-6 text-white md:grid-cols-2 md:p-10">
          <div className="md:pt-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E8D6C0]">
              Videos reales
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight">
              Conoce el sistema en acción
            </h3>

            <p className="mt-4 leading-7 text-white/80">
              Mira el armado, funcionamiento y pruebas reales del sistema.
            </p>

            <div className="mt-6 flex items-center gap-2 text-[#F0008B]">
              <PlayCircle className="size-5" />

              <span className="font-semibold">
                Tutoriales y pruebas de funcionamiento
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full"
            >
              <source
                src="/videos/armado-kit-6-wine-box-vide.mp4"
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
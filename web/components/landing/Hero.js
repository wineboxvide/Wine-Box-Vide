"use client"

import Image from "next/image"
import { Award, ShieldCheck } from "lucide-react"

export default function Hero() {
  function openWiviQuote() {
    window.dispatchEvent(new CustomEvent("wivi:cotizacion"))
  }

  return (
    <section className="overflow-hidden bg-[#5A0A22] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-14 md:py-20">

        {/* Contenido */}
        <div>
  <p className="hero-reveal mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8D6C0]">
  Protección para botellas de vidrio
</p>    <h1 className="hero-reveal hero-reveal-delay-1 text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Protegemos lo que hay{" "}
            <span className="text-[#F0008B]">
              detrás de cada botella.
            </span>
          </h1>

         <p className="hero-reveal hero-reveal-delay-2 mt-5 max-w-lg text-base leading-7 text-white/85 md:text-lg">
  Empaques diseñados para que tus botellas lleguen seguras a su destino.
</p>
          {/* CTA principal */}
          <div className="hero-reveal hero-reveal-delay-3 mt-8">
            <button
              type="button"
              onClick={openWiviQuote}
              className="min-h-12 w-full rounded-xl bg-[#F0008B] px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#D5007B] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Quiero cotizar
            </button>
          </div>

          <p className="hero-reveal hero-reveal-delay-3 mt-4 max-w-lg text-sm leading-6 text-white/70 md:text-base">
            Te ayudamos a encontrar la presentación adecuada para tu envío.
          </p>

          {/* Respaldos */}
          <div className="hero-reveal hero-reveal-delay-4 mt-7 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-white/85">
              <ShieldCheck
                className="size-5 shrink-0 text-[#E8D6C0]"
                aria-hidden="true"
              />
              <span>Diseño Industrial Registrado IMPI · 72493</span>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-white/85">
              <Award
               className="size-5 shrink-0 text-[#E8D6C0]"
                aria-hidden="true"
              />
              <span>Proyecto Ganador · Vende tu Proyecto 2026</span>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="hero-image-reveal mx-auto w-full max-w-[520px]">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/hero-wine-box-vide.png"
              alt="Inserto protector Wine Box Vide para botella de vino"
              width={1200}
              height={1200}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
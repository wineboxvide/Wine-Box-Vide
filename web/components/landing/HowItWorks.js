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
      "El diseño se entrega plano y se arma sin necesidad de herramientas.",
  },
  {
    icon: Wine,
    number: "02",
    title: "Coloca y asegura la botella",
    description:
      "La botella queda contenida dentro de la estructura protectora, reduciendo su movimiento.",
  },
  {
    icon: Box,
    number: "03",
    title: "Integra al empaque",
    description:
      "El inserto se coloca dentro de la caja para ayudar a proteger la botella durante su manipulación y transporte.",
  },
]

export default function HowItWorks() {
  return (
    <section
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
            Desde el armado hasta la prueba de impacto: conoce cómo nuestro sistema
            protege la botella durante su manipulación y transporte.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, number, title, description }) => (
            <div
              key={number}
              className="rounded-2xl border border-base-200 bg-base-100 p-6"
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
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F2C75C]">
              Videos reales
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-tight">
              Conoce el sistema en acción
            </h3>

            <p className="mt-4 leading-7 text-white/80">
              Armado, funcionamiento y pruebas reales para que puedas conocer
              cómo se prepara y utiliza nuestra solución.
            </p>

            <div className="mt-6 flex items-center gap-2 text-[#F2C75C]">
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
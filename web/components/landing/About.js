import {
  BadgeCheck,
  Trophy,
  Wine,
  ShieldCheck,
  Layers,
  Handshake,
  Target,
  Eye,
} from "lucide-react"

const DIFFERENTIATORS = [
  {
    icon: Wine,
    title: "Diseño especializado para botellas",
    description:
      "Una solución desarrollada para brindar protección durante la manipulación y el transporte.",
  },
  {
    icon: ShieldCheck,
    title: "Protección probada",
    description:
      "Validamos el funcionamiento de nuestra solución mediante pruebas reales de armado, resistencia e impacto.",
  },
  {
    icon: Layers,
    title: "Soluciones para diferentes necesidades",
    description:
      "Contamos con presentaciones para distintas cantidades de botellas y aplicaciones empresariales.",
  },
  {
    icon: Handshake,
    title: "Atención B2B personalizada",
    description:
      "Escuchamos las necesidades de cada negocio para recomendar la solución más adecuada para su operación.",
  },
]

export default function About() {
  return (
    <section
      id="nosotros"
      className="border-t border-base-200 bg-base-100 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Nosotros
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            ¿Por qué Wine Box Vide?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-base-content/70 md:text-lg">
            Nacimos con un propósito claro: desarrollar una forma más segura y
            funcional de proteger botellas de vidrio durante su manipulación y
            transporte.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-base-content/70 md:text-lg">
            En Wine Box Vide combinamos diseño, funcionalidad y protección para
            ofrecer soluciones pensadas para las necesidades reales de los
            negocios que comercializan y envían productos en botellas de vidrio.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-base-200 bg-base-100 p-8 shadow-sm">
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BadgeCheck className="size-6" />
            </div>

           <h3 className="text-2xl font-semibold">
           Título de Registro de Diseño Industrial · IMPI
           </h3>

          <p className="mt-4 text-base leading-7 text-base-content/70">
           Nuestro inserto protector cuenta con el Título de Registro de Diseño
           Industrial No. 72493, respaldando el desarrollo de una solución
           propia.
          </p>
          </div>

          <div className="rounded-3xl border border-base-200 bg-base-100 p-8 shadow-sm">
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Trophy className="size-6" />
            </div>

            <h3 className="text-2xl font-semibold">
              Proyecto Ganador · Vende tu Proyecto 2026
            </h3>

            <p className="mt-4 text-base leading-7 text-base-content/70">
              Wine Box Vide fue uno de los proyectos ganadores, reconocimiento
              que impulsa el desarrollo y crecimiento de nuestra solución.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Lo que nos diferencia
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Una solución pensada para necesidades reales
            </h3>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="min-h-[240px] rounded-2xl border border-base-200 bg-base-100 p-7"
              >
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
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

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[#5A0A22] p-9 text-white md:p-10">
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-[#F2C75C]">
              <Target className="size-6" />
            </div>

            <h3 className="text-3xl font-bold">
              Misión
            </h3>

            <p className="mt-5 text-base leading-8 text-white/85">
              Desarrollar soluciones inteligentes de empaque que protegen,
              presentan y agregan valor a los productos de nuestros clientes,
              con alternativas funcionales, sostenibles e innovadoras que
              mejoran la seguridad durante el almacenamiento, transporte y envío.
            </p>
          </div>

          <div className="rounded-3xl bg-[#5A0A22] p-9 text-white md:p-10">
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-[#F2C75C]">
              <Eye className="size-6" />
            </div>

            <h3 className="text-3xl font-bold">
              Visión
            </h3>

            <p className="mt-5 text-base leading-8 text-white/85">
              Ser referentes en soluciones inteligentes de empaque para
              productos en botellas de vidrio, reconocidos por innovación,
              calidad y compromiso, para que las marcas entreguen sus productos
              de forma segura y con una presentación de alto valor.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-3xl border border-primary/20 bg-primary/5 px-8 py-10 text-center">
          <p className="text-xl font-semibold leading-9 text-base-content">
            Cada botella lleva detrás el trabajo de una empresa, el valor de un
            producto y la confianza de un cliente. Protegerla es nuestra razón de ser.
          </p>
        </div>
      </div>
    </section>
  )
}
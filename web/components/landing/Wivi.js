"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
  MessageCircle,
  X,
  Package,
  Wine,
  Truck,
  ClipboardList,
  HelpCircle,
  UserRound,
} from "lucide-react"

const INITIAL_OPTIONS = [
  {
    id: "kits",
    label: "Conocer nuestros kits",
    icon: Package,
  },
  {
    id: "botellas",
    label: "¿Qué botellas puedo proteger?",
    icon: Wine,
  },
  {
    id: "envios",
    label: "Envíos y entregas",
    icon: Truck,
  },
  {
    id: "cotizacion",
    label: "Quiero una cotización",
    icon: ClipboardList,
  },
  {
    id: "otra",
    label: "Tengo otra pregunta",
    icon: HelpCircle,
  },
]



const INFO_RESPONSES = {
  kits: {
    title: "Nuestros kits",
    text:
      "Contamos con soluciones para proteger 1, 2, 6 y 12 botellas. Cada presentación está pensada para diferentes necesidades de transporte, entrega y distribución. Si no estás seguro de cuál necesitas, puedo orientarte.",
  },

  botellas: {
    title: "Compatibilidad de botellas",
    text:
      "Nuestros insertos están diseñados para proteger botellas de vidrio utilizadas en vinos, mezcales, sotoles y otras bebidas. Si tu botella tiene una forma, tamaño o presentación diferente, necesitaremos conocer sus características antes de confirmar compatibilidad.",
  },

  envios: {
    title: "Envíos y entregas",
    text:
      "Realizamos envíos a toda la República Mexicana mediante servicios de paquetería confiables. Los tiempos de entrega dependen de las características y el volumen de cada pedido. Para pedidos por volumen, el tiempo estimado es de 7 a 12 días hábiles, dependiendo de la cantidad solicitada y del destino.",
  },
}

export default function Wivi() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
const [quoteStep, setQuoteStep] = useState(1)
const [sendingQuote, setSendingQuote] = useState(false)
const [quoteError, setQuoteError] = useState("")
useEffect(() => {
  function openQuote(event) {
  const kit = event?.detail?.kit || ""

  setOpen(true)
  setSelected("cotizacion")
  setQuoteStep(1)
  setQuoteError("")

  if (kit) {
    setQuoteData((prev) => ({
      ...prev,
      presentacion: kit,
    }))
  }
}

  window.addEventListener("wivi:cotizacion", openQuote)

  return () => {
    window.removeEventListener("wivi:cotizacion", openQuote)
  }
}, [])

const [quoteData, setQuoteData] = useState({
  nombre: "",
  empresa: "",
  producto: "",
  presentacion: "",
  cantidad: "",
  entrega: "",
  adicional: "",
  contactoPreferido: "",
  telefono: "",
  correo: "",
})

 function handleOption(optionId) {
  if (optionId === "cotizacion") {
    setSelected("cotizacion")
    setQuoteStep(1)
    return
  }

  setSelected(optionId)
}
async function submitQuote() {
  setSendingQuote(true)
  setQuoteError("")

  try {
    const res = await fetch("/api/wivi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quoteData),
    })

    const body = await res.json().catch(() => ({}))

    if (!res.ok) {
      throw new Error(
        body.error || "No pudimos enviar tu solicitud."
      )
    }

    setQuoteStep(11)
  } catch (err) {
    setQuoteError(
      err?.message || "No pudimos enviar tu solicitud."
    )
  } finally {
    setSendingQuote(false)
  }
}

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Habla con Wivi"
        className="group fixed bottom-20 right-5 z-50 flex h-14 w-16 items-center gap-0 overflow-hidden rounded-full bg-[#6A0D2B] p-2 font-semibold text-white shadow-lg transition-all duration-500 hover:w-48 hover:bg-[#7A1234] hover:shadow-xl focus-visible:w-48 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2C75C]"
      >
      <div className="relative size-10 shrink-0 overflow-hidden rounded-full border-2 border-white/30 bg-white">
  <Image
    src="/images/wivi-avatar-web.png"
    alt=""
    fill
    className="object-cover"
    sizes="40px"
  />
</div>
<span className="ml-2 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
  Habla con Wivi
</span>
      </button>

    {open && (
  <div className="fixed bottom-24 right-5 z-[60] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-2xl">
    <div className="bg-[#6A0D2B] px-5 py-4 text-white">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative size-12 overflow-hidden rounded-full border-2 border-white/20 bg-white">
            <Image
              src="/images/wivi-avatar-web.png"
              alt="Wivi, asistente virtual de Wine Box Vide"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>

                <div>
                  <p className="text-lg font-bold">
                    Wivi
                  </p>
                  <p className="text-xs text-white/75">
                    Asistente virtual de Wine Box Vide
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar Wivi"
                className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-5">
            <div className="rounded-2xl bg-base-200/60 p-4">
              <p className="font-semibold">
                ¡Hola! 👋
              </p>

              <p className="mt-2 text-sm leading-6 text-base-content/80">
                Soy Wivi, asistente virtual de Wine Box Vide. Estoy aquí para
                ayudarte a conocer nuestras soluciones de protección para
                botellas y orientarte de acuerdo con las necesidades de tu
                negocio.
              </p>

              <p className="mt-3 text-sm font-semibold">
                ¿En qué puedo ayudarte?
              </p>
            </div>

            {!selected && (
  <>
    <div className="mt-5 space-y-3">
      {INITIAL_OPTIONS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => handleOption(id)}
          className="flex w-full items-center justify-between rounded-2xl border border-base-200 bg-base-100 px-4 py-3 text-left transition hover:border-primary/30 hover:bg-primary/5"
        >
          <span className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-4" />
            </span>

            <span className="text-sm font-medium">
              {label}
            </span>
          </span>

          <span className="text-primary">
            ›
          </span>
        </button>
      ))}
    </div>

    <div className="mt-5 border-t border-base-200 pt-5">
      <button
        type="button"
        onClick={() => setSelected("persona")}
        className="flex w-full items-center justify-between rounded-2xl border border-base-200 bg-base-100 px-4 py-3 text-left transition hover:border-primary/30 hover:bg-primary/5"
      >
        <span className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <UserRound className="size-4" />
          </span>

          <span className="text-sm font-semibold">
            Hablar con una persona
          </span>
        </span>

        <span className="text-primary">
          ›
        </span>
      </button>
    </div>
  </>
)}
{selected === "cotizacion" && (
  <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-4">
    <p className="font-semibold text-primary">
      Solicitud de cotización
    </p>

    {quoteStep === 1 && (
      <div className="mt-4">
{quoteData.presentacion && (
  <div className="mb-4 rounded-2xl border border-[#8B1E3F]/20 bg-[#F8F3F5] p-4">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8B1E3F]">
      Presentación seleccionada
    </p>

    <p className="mt-1 font-semibold text-base-content">
      {quoteData.presentacion}
    </p>
  </div>
)}
        <label
          htmlFor="wivi-nombre"
          className="block text-sm font-medium text-base-content/80"
        >
          ¿Cuál es tu nombre?
        </label>

        <input
          id="wivi-nombre"
          type="text"
          value={quoteData.nombre}
          onChange={(e) =>
            setQuoteData((prev) => ({
              ...prev,
              nombre: e.target.value,
            }))
          }
          className="input input-bordered mt-3 w-full"
          placeholder="Nombre del contacto"
        />

        <button
          type="button"
          onClick={() => {
            if (quoteData.nombre.trim()) {
              setQuoteStep(2)
            }
          }}
          className="btn btn-primary mt-4 w-full"
        >
          Continuar
        </button>
      </div>
    )}
{quoteStep === 2 && (
  <div className="mt-4">
    <label
      htmlFor="wivi-empresa"
      className="block text-sm font-medium text-base-content/80"
    >
      ¿Cuál es el nombre de tu empresa o negocio?
    </label>

    <input
      id="wivi-empresa"
      type="text"
      value={quoteData.empresa}
      onChange={(e) =>
        setQuoteData((prev) => ({
          ...prev,
          empresa: e.target.value,
        }))
      }
      className="input input-bordered mt-3 w-full"
      placeholder="Empresa o negocio"
    />

    <button
      type="button"
      onClick={() => {
        if (quoteData.empresa.trim()) {
          setQuoteStep(3)
        }
      }}
      className="btn btn-primary mt-4 w-full"
    >
      Continuar
    </button>

    <button
      type="button"
      onClick={() => setQuoteStep(1)}
      className="mt-3 w-full text-sm font-semibold text-primary hover:underline"
    >
      Volver
    </button>
  </div>
)}
{quoteStep === 3 && (
  <div className="mt-4">
    <p className="text-sm font-medium text-base-content/80">
      ¿Qué producto manejas?
    </p>

    <div className="mt-3 space-y-2">
      {[
        "Vino",
        "Mezcal / Sotol",
        "Otra bebida",
        "Regalos corporativos",
        "Otro",
      ].map((producto) => (
        <button
          key={producto}
          type="button"
          onClick={() => {
            setQuoteData((prev) => ({
              ...prev,
              producto,
            }))
            setQuoteStep(4)
          }}
          className="w-full rounded-xl border border-base-200 bg-base-100 px-4 py-3 text-left text-sm font-medium transition hover:border-primary/30 hover:bg-primary/5"
        >
          {producto}
        </button>
      ))}
    </div>

    <button
      type="button"
      onClick={() => setQuoteStep(2)}
      className="mt-4 w-full text-sm font-semibold text-primary hover:underline"
    >
      Volver
    </button>
  </div>
)}
{quoteStep === 4 && (
  <div className="mt-4">
    <p className="text-sm font-medium text-base-content/80">
      ¿Qué presentación necesitas proteger?
    </p>

    <div className="mt-3 space-y-2">
      {[
        "1 botella",
        "2 botellas",
        "6 botellas",
        "12 botellas",
        "No estoy seguro",
        "Otra necesidad",
      ].map((presentacion) => (
        <button
          key={presentacion}
          type="button"
          onClick={() => {
            setQuoteData((prev) => ({
              ...prev,
              presentacion,
            }))
            setQuoteStep(5)
          }}
          className="w-full rounded-xl border border-base-200 bg-base-100 px-4 py-3 text-left text-sm font-medium transition hover:border-primary/30 hover:bg-primary/5"
        >
          {presentacion}
        </button>
      ))}
    </div>

    <button
      type="button"
      onClick={() => setQuoteStep(3)}
      className="mt-4 w-full text-sm font-semibold text-primary hover:underline"
    >
      Volver
    </button>
  </div>
)}

   
{quoteStep === 5 && (
  <div className="mt-4">
    <label
      htmlFor="wivi-cantidad"
      className="block text-sm font-medium text-base-content/80"
    >
      ¿Qué cantidad aproximada necesitas?
    </label>

    <input
      id="wivi-cantidad"
      type="number"
      min="1"
      value={quoteData.cantidad}
      onChange={(e) =>
        setQuoteData((prev) => ({
          ...prev,
          cantidad: e.target.value,
        }))
      }
      className="input input-bordered mt-3 w-full"
      placeholder="Ej. 50"
    />

    <button
      type="button"
      onClick={() => {
        if (quoteData.cantidad && Number(quoteData.cantidad) > 0) {
          setQuoteStep(6)
        }
      }}
      className="btn btn-primary mt-4 w-full"
    >
      Continuar
    </button>

    <button
      type="button"
      onClick={() => setQuoteStep(4)}
      className="mt-3 w-full text-sm font-semibold text-primary hover:underline"
    >
      Volver
    </button>
  </div>
)}
   {quoteStep === 6 && (
  <div className="mt-4">
    <p className="text-sm font-medium text-base-content/80">
      ¿Cuál es tu forma principal de entrega?
    </p>

    <div className="mt-3 space-y-2">
      {[
        "Paquetería",
        "Entrega local",
        "Distribución",
        "Wine club",
        "Otro",
      ].map((entrega) => (
        <button
          key={entrega}
          type="button"
          onClick={() => {
            setQuoteData((prev) => ({
              ...prev,
              entrega,
            }))
            setQuoteStep(7)
          }}
          className="w-full rounded-xl border border-base-200 bg-base-100 px-4 py-3 text-left text-sm font-medium transition hover:border-primary/30 hover:bg-primary/5"
        >
          {entrega}
        </button>
      ))}
    </div>

    <button
      type="button"
      onClick={() => setQuoteStep(5)}
      className="mt-4 w-full text-sm font-semibold text-primary hover:underline"
    >
      Volver
    </button>
  </div>
)}
 {quoteStep === 7 && (
  <div className="mt-4">
    <label
      htmlFor="wivi-adicional"
      className="block text-sm font-medium text-base-content/80"
    >
      ¿Hay algo más que debamos saber sobre tu proyecto o tus necesidades de empaque?
    </label>

    <textarea
      id="wivi-adicional"
      value={quoteData.adicional}
      onChange={(e) =>
        setQuoteData((prev) => ({
          ...prev,
          adicional: e.target.value,
        }))
      }
      className="textarea textarea-bordered mt-3 w-full"
      placeholder="Puedes contarnos aquí cualquier detalle adicional"
      rows={4}
    />

    <button
      type="button"
      onClick={() => setQuoteStep(8)}
      className="btn btn-primary mt-4 w-full"
    >
      Continuar
    </button>

    <button
      type="button"
      onClick={() => setQuoteStep(6)}
      className="mt-3 w-full text-sm font-semibold text-primary hover:underline"
    >
      Volver
    </button>
  </div>
)}
{quoteStep === 8 && (
  <div className="mt-4">
    <p className="text-sm font-medium text-base-content/80">
      ¿Cómo prefieres que te contactemos?
    </p>

    <div className="mt-3 space-y-2">
      {["WhatsApp", "Correo electrónico"].map((contacto) => (
        <button
          key={contacto}
          type="button"
          onClick={() => {
            setQuoteData((prev) => ({
              ...prev,
              contactoPreferido: contacto,
            }))
            setQuoteStep(9)
          }}
          className="w-full rounded-xl border border-base-200 bg-base-100 px-4 py-3 text-left text-sm font-medium transition hover:border-primary/30 hover:bg-primary/5"
        >
          {contacto}
        </button>
      ))}
    </div>

    <button
      type="button"
      onClick={() => setQuoteStep(7)}
      className="mt-4 w-full text-sm font-semibold text-primary hover:underline"
    >
      Volver
    </button>
  </div>
)}
{quoteStep === 9 && (
  <div className="mt-4">
    {quoteData.contactoPreferido === "WhatsApp" ? (
      <>
        <label
          htmlFor="wivi-telefono"
          className="block text-sm font-medium text-base-content/80"
        >
          ¿Cuál es tu WhatsApp o teléfono?
        </label>

        <input
          id="wivi-telefono"
          type="tel"
          value={quoteData.telefono}
          onChange={(e) =>
            setQuoteData((prev) => ({
              ...prev,
              telefono: e.target.value,
            }))
          }
          className="input input-bordered mt-3 w-full"
          placeholder="Ej. 614 000 0000"
        />

        <label
          htmlFor="wivi-correo-opcional"
          className="mt-4 block text-sm font-medium text-base-content/80"
        >
          Correo electrónico (opcional)
        </label>

        <input
          id="wivi-correo-opcional"
          type="email"
          value={quoteData.correo}
          onChange={(e) =>
            setQuoteData((prev) => ({
              ...prev,
              correo: e.target.value,
            }))
          }
          className="input input-bordered mt-3 w-full"
          placeholder="correo@empresa.com"
        />

        <button
          type="button"
          onClick={() => {
            if (quoteData.telefono.trim()) {
              setQuoteStep(10)
            }
          }}
          className="btn btn-primary mt-4 w-full"
        >
          Continuar
        </button>
      </>
    ) : (
      <>
        <label
          htmlFor="wivi-correo"
          className="block text-sm font-medium text-base-content/80"
        >
          ¿Cuál es tu correo electrónico?
        </label>

        <input
          id="wivi-correo"
          type="email"
          value={quoteData.correo}
          onChange={(e) =>
            setQuoteData((prev) => ({
              ...prev,
              correo: e.target.value,
            }))
          }
          className="input input-bordered mt-3 w-full"
          placeholder="correo@empresa.com"
        />

        <button
          type="button"
          onClick={() => {
            if (quoteData.correo.trim()) {
              setQuoteStep(10)
            }
          }}
          className="btn btn-primary mt-4 w-full"
        >
          Continuar
        </button>
      </>
    )}

    <button
      type="button"
      onClick={() => setQuoteStep(8)}
      className="mt-3 w-full text-sm font-semibold text-primary hover:underline"
    >
      Volver
    </button>
  </div>
)}
{quoteStep === 10 && (
  <div className="mt-4">
    <p className="text-sm font-medium text-base-content/80">
      Revisa tu información antes de enviar la solicitud.
    </p>

    <div className="mt-4 space-y-2 rounded-xl bg-base-100 p-4 text-sm">
      <p><strong>Nombre:</strong> {quoteData.nombre}</p>
      <p><strong>Empresa:</strong> {quoteData.empresa}</p>
      <p><strong>Producto:</strong> {quoteData.producto}</p>
      <p><strong>Presentación:</strong> {quoteData.presentacion}</p>
      <p><strong>Cantidad:</strong> {quoteData.cantidad}</p>
      <p><strong>Entrega:</strong> {quoteData.entrega}</p>

      {quoteData.adicional && (
        <p>
          <strong>Información adicional:</strong> {quoteData.adicional}
        </p>
      )}

      <p>
        <strong>Contacto preferido:</strong> {quoteData.contactoPreferido}
      </p>

      {quoteData.telefono && (
        <p><strong>WhatsApp / teléfono:</strong> {quoteData.telefono}</p>
      )}

      {quoteData.correo && (
        <p><strong>Correo:</strong> {quoteData.correo}</p>
      )}
    </div>

    <button
  type="button"
  onClick={submitQuote}
  disabled={sendingQuote}
  className="btn btn-primary mt-4 w-full"
>
  {sendingQuote ? "Enviando..." : "Confirmar solicitud"}
</button>

{quoteError && (
  <p className="mt-3 text-sm text-error">
    {quoteError}
  </p>
)}

    <button
      type="button"
      onClick={() => setQuoteStep(9)}
      className="mt-3 w-full text-sm font-semibold text-primary hover:underline"
    >
      Volver
    </button>
  </div>
)}
{quoteStep === 11 && (
  <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-4">
    <p className="font-semibold text-primary">
      ¡Solicitud recibida!
    </p>

    <p className="mt-2 text-sm leading-6 text-base-content/75">
      Gracias, {quoteData.nombre}. Hemos recibido tu solicitud de cotización.
      Revisaremos la información y nos pondremos en contacto contigo por el
      medio que seleccionaste.
    </p>

    <button
      type="button"
     onClick={() => {
  setSelected(null)
  setQuoteStep(1)
  setQuoteError("")
  setQuoteData({
    nombre: "",
    empresa: "",
    producto: "",
    presentacion: "",
    cantidad: "",
    entrega: "",
    adicional: "",
    contactoPreferido: "",
    telefono: "",
    correo: "",
  })
}}
      className="btn btn-primary mt-4 w-full"
    >
      Finalizar
    </button>
  </div>
)}
<button
  type="button"
  onClick={() => {
    setSelected(null)
    setQuoteStep(1)
  }}
  className="mt-4 text-sm font-semibold text-primary hover:underline"
>
  Volver a las opciones
</button>
</div>
)}
            {selected && INFO_RESPONSES[selected] && (
  <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-4">
    <p className="font-semibold text-primary">
      {INFO_RESPONSES[selected].title}
    </p>

    <p className="mt-2 text-sm leading-6 text-base-content/75">
      {INFO_RESPONSES[selected].text}
    </p>

    <button
      type="button"
      onClick={() => setSelected(null)}
      className="mt-4 text-sm font-semibold text-primary hover:underline"
    >
      Volver a las opciones
    </button>
  </div>
)}

          </div>
        </div>
       )}
    </>
  )
}
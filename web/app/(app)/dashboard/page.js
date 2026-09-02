import { Trash2 } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import {
  createProspecto,
  updateProspecto,
  deleteProspecto,
} from "./actions"

export const metadata = { title: "Prospectos" }

const ESTATUS = [
  { value: "nuevo", label: "Nuevo" },
  { value: "contactado", label: "Contactado" },
  { value: "cotizacion", label: "Cotización" },
  { value: "cliente", label: "Cliente" },
  { value: "no_interesado", label: "No interesado" },
]

function EstatusLabel({ value }) {
  return ESTATUS.find((item) => item.value === value)?.label || value
}

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: prospectos, error } = await supabase
    .from("prospectos")
    .select("*")
    .order("created_at", { ascending: false })

  const totalProspectos = prospectos?.length || 0

  const inicioSemana = new Date()
  const diaSemana = inicioSemana.getDay()
  const diasDesdeLunes = diaSemana === 0 ? 6 : diaSemana - 1

  inicioSemana.setDate(
    inicioSemana.getDate() - diasDesdeLunes
  )
  inicioSemana.setHours(0, 0, 0, 0)

  const nuevosEstaSemana =
    prospectos?.filter(
      (prospecto) =>
        new Date(prospecto.created_at) >= inicioSemana
    ).length || 0

  const clientes =
    prospectos?.filter(
      (prospecto) => prospecto.estatus === "cliente"
    ).length || 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Mis prospectos
        </h1>

        <p className="mt-1 text-sm text-base-content/70">
          Lleva el seguimiento de tus clientes potenciales de Wine Box Vide.
        </p>
      </div>

      {/* Resumen */}
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-box border border-base-200 bg-base-100 p-4">
          <div className="text-sm text-base-content/60">
            Total de prospectos
          </div>

          <div className="mt-1 text-2xl font-bold">
            {totalProspectos}
          </div>
        </div>

        <div className="rounded-box border border-base-200 bg-base-100 p-4">
          <div className="text-sm text-base-content/60">
            Nuevos esta semana
          </div>

          <div className="mt-1 text-2xl font-bold">
            {nuevosEstaSemana}
          </div>
        </div>

        <div className="rounded-box border border-base-200 bg-base-100 p-4">
          <div className="text-sm text-base-content/60">
            Clientes
          </div>

          <div className="mt-1 text-2xl font-bold">
            {clientes}
          </div>
        </div>
      </div>

      {/* Crear prospecto */}
      <form
        action={createProspecto}
        className="rounded-box border border-base-200 bg-base-100 p-4"
      >
        <h2 className="mb-4 font-semibold">
          Nuevo prospecto
        </h2>

        <div className="grid gap-3 md:grid-cols-2">
          <input
            name="nombre_negocio"
            required
            maxLength={120}
            placeholder="Nombre del negocio"
            aria-label="Nombre del negocio"
            className="input input-bordered w-full"
          />

          <input
            name="contacto"
            maxLength={120}
            placeholder="Persona de contacto"
            aria-label="Persona de contacto"
            className="input input-bordered w-full"
          />

          <input
            name="telefono"
            maxLength={30}
            placeholder="WhatsApp / teléfono"
            aria-label="WhatsApp o teléfono"
            className="input input-bordered w-full"
          />

          <select
            name="estatus"
            defaultValue="nuevo"
            aria-label="Estatus"
            className="select select-bordered w-full"
          >
            {ESTATUS.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>

          <textarea
            name="notas"
            maxLength={500}
            placeholder="Notas de seguimiento"
            aria-label="Notas de seguimiento"
            className="textarea textarea-bordered w-full md:col-span-2"
            rows={3}
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Agregar prospecto
            </button>
          </div>
        </div>
      </form>

      {error && (
        <div className="rounded-lg border border-error/40 bg-error/10 px-4 py-3 text-sm text-error">
          No pudimos cargar tus prospectos: {error.message}
        </div>
      )}

      {/* Lista */}
      {!prospectos?.length ? (
        <div className="rounded-box border border-dashed border-base-300 bg-base-100 px-4 py-12 text-center text-base-content/60">
          Aún no tienes prospectos. Agrega el primero arriba.
        </div>
      ) : (
        <div className="space-y-4">
          {prospectos.map((prospecto) => (
            <div
              key={prospecto.id}
              className="rounded-box border border-base-200 bg-base-100 p-4"
            >
              {/* Formulario de edición */}
              <form action={updateProspecto}>
                <input
                  type="hidden"
                  name="id"
                  value={prospecto.id}
                />

                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    name="nombre_negocio"
                    required
                    maxLength={120}
                    defaultValue={prospecto.nombre_negocio}
                    className="input input-bordered w-full"
                    aria-label="Nombre del negocio"
                  />

                  <input
                    name="contacto"
                    maxLength={120}
                    defaultValue={prospecto.contacto || ""}
                    placeholder="Persona de contacto"
                    className="input input-bordered w-full"
                    aria-label="Persona de contacto"
                  />

                  <input
                    name="telefono"
                    maxLength={30}
                    defaultValue={prospecto.telefono || ""}
                    placeholder="WhatsApp / teléfono"
                    className="input input-bordered w-full"
                    aria-label="WhatsApp o teléfono"
                  />

                  <select
                    name="estatus"
                    defaultValue={prospecto.estatus}
                    className="select select-bordered w-full"
                    aria-label="Estatus"
                  >
                    {ESTATUS.map((item) => (
                      <option
                        key={item.value}
                        value={item.value}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>

                  <textarea
                    name="notas"
                    maxLength={500}
                    defaultValue={prospecto.notas || ""}
                    placeholder="Notas de seguimiento"
                    className="textarea textarea-bordered w-full md:col-span-2"
                    rows={3}
                    aria-label="Notas de seguimiento"
                  />

                  <div className="flex flex-wrap gap-2 md:col-span-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm"
                    >
                      Guardar cambios
                    </button>
                  </div>
                </div>
              </form>

              {/* Eliminar */}
              <div className="mt-3 flex items-center justify-between border-t border-base-200 pt-3">
                <span className="badge badge-ghost">
                  {EstatusLabel(prospecto.estatus)}
                </span>

                <form action={deleteProspecto}>
                  <input
                    type="hidden"
                    name="id"
                    value={prospecto.id}
                  />

                  <button
                    type="submit"
                    className="btn btn-ghost btn-sm text-error"
                    title="Borrar prospecto"
                    aria-label={`Borrar ${prospecto.nombre_negocio}`}
                  >
                    <Trash2 className="size-4" />
                    Borrar
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
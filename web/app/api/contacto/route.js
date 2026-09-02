import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

export async function POST(request) {
  try {
    const body = await request.json()

    const nombre = body.nombre?.toString().trim()
    const empresa = body.empresa?.toString().trim()
    const correo = body.correo?.toString().trim().toLowerCase() || ""
    const telefono = body.telefono?.toString().trim()
    const producto = body.producto?.toString().trim() || ""
    const cantidad = body.cantidad?.toString().trim() || ""
    const necesidad = body.necesidad?.toString().trim() || ""

    if (!nombre || !empresa || !telefono) {
      return NextResponse.json(
        { error: "Completa los campos obligatorios." },
        { status: 400 }
      )
    }

    if (
      correo &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
    ) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido." },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    // Tomamos el user_id de un prospecto ya existente en el CRM.
    // Así asociamos las solicitudes web al mismo Dashboard
    // sin necesidad de consultar Supabase Auth.
    const {
      data: ownerRecord,
      error: ownerError,
    } = await supabase
      .from("prospectos")
      .select("user_id")
      .not("user_id", "is", null)
      .limit(1)
      .maybeSingle()

    if (ownerError) {
      console.error(
        "[contacto] error obteniendo propietario del CRM:",
        ownerError.message
      )

      return NextResponse.json(
        { error: "No pudimos procesar la solicitud." },
        { status: 500 }
      )
    }

    if (!ownerRecord?.user_id) {
      console.error(
        "[contacto] No se encontró un user_id asociado al CRM."
      )

      return NextResponse.json(
        { error: "No pudimos procesar la solicitud." },
        { status: 500 }
      )
    }

    const notas = [
      "Origen: Formulario web",
      correo ? `Correo: ${correo}` : null,
      producto ? `Producto: ${producto}` : null,
      cantidad ? `Cantidad aproximada: ${cantidad}` : null,
      necesidad ? `Necesidad: ${necesidad}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    const { error } = await supabase
      .from("prospectos")
      .insert({
        user_id: ownerRecord.user_id,
        nombre_negocio: empresa,
        contacto: nombre,
        telefono,
        estatus: "nuevo",
        notas,
      })

    if (error) {
      console.error(
        "[contacto] error insertando prospecto:",
        error.message
      )

      return NextResponse.json(
        { error: "No pudimos guardar tu solicitud." },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[contacto] error:", err)

    return NextResponse.json(
      { error: "Error procesando la solicitud." },
      { status: 500 }
    )
  }
}
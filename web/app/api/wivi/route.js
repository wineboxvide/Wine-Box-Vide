import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

export async function POST(request) {
  try {
    const body = await request.json()

    const nombre = body.nombre?.toString().trim()
    const empresa = body.empresa?.toString().trim()
    const producto = body.producto?.toString().trim() || ""
    const presentacion = body.presentacion?.toString().trim() || ""
    const cantidad = body.cantidad?.toString().trim() || ""
    const entrega = body.entrega?.toString().trim() || ""
    const adicional = body.adicional?.toString().trim() || ""
    const contactoPreferido =
      body.contactoPreferido?.toString().trim() || ""
    const telefono = body.telefono?.toString().trim() || ""
    const correo =
      body.correo?.toString().trim().toLowerCase() || ""

    if (!nombre || !empresa || !producto || !presentacion || !cantidad) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios de la cotización." },
        { status: 400 }
      )
    }

    if (
      contactoPreferido === "WhatsApp" &&
      !telefono
    ) {
      return NextResponse.json(
        { error: "Ingresa un WhatsApp o teléfono." },
        { status: 400 }
      )
    }

    if (
      contactoPreferido === "Correo electrónico" &&
      !correo
    ) {
      return NextResponse.json(
        { error: "Ingresa un correo electrónico." },
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
        "[wivi] error obteniendo propietario del CRM:",
        ownerError.message
      )

      return NextResponse.json(
        { error: "No pudimos procesar la solicitud." },
        { status: 500 }
      )
    }

    if (!ownerRecord?.user_id) {
      console.error(
        "[wivi] No se encontró un user_id asociado al CRM."
      )

      return NextResponse.json(
        { error: "No pudimos procesar la solicitud." },
        { status: 500 }
      )
    }

    const notas = [
      "Origen: Chatbot",
      correo ? `Correo: ${correo}` : null,
      producto ? `Producto: ${producto}` : null,
      presentacion ? `Presentación: ${presentacion}` : null,
      cantidad ? `Cantidad aproximada: ${cantidad}` : null,
      entrega ? `Forma de entrega: ${entrega}` : null,
      adicional ? `Información adicional: ${adicional}` : null,
      contactoPreferido
        ? `Contacto preferido: ${contactoPreferido}`
        : null,
    ]
      .filter(Boolean)
      .join("\n")

    const { error } = await supabase
      .from("prospectos")
      .insert({
        user_id: ownerRecord.user_id,
        nombre_negocio: empresa,
        contacto: nombre,
        telefono: telefono || null,
        estatus: "nuevo",
        notas,
      })

    if (error) {
      console.error(
        "[wivi] error insertando prospecto:",
        error.message
      )

      return NextResponse.json(
        { error: "No pudimos guardar tu solicitud." },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[wivi] error:", err)

    return NextResponse.json(
      { error: "Error procesando la solicitud." },
      { status: 500 }
    )
  }
}
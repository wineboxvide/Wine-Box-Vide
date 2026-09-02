"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

async function requireUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error("No autenticado")

  return { supabase, user }
}

export async function createProspecto(formData) {
  const nombreNegocio = formData.get("nombre_negocio")?.toString().trim()
  const contacto = formData.get("contacto")?.toString().trim() || null
  const telefono = formData.get("telefono")?.toString().trim() || null
  const estatus = formData.get("estatus")?.toString().trim() || "nuevo"
  const notas = formData.get("notas")?.toString().trim() || null

  if (!nombreNegocio) return

  const { supabase, user } = await requireUser()

  const { error } = await supabase.from("prospectos").insert({
    user_id: user.id,
    nombre_negocio: nombreNegocio,
    contacto,
    telefono,
    estatus,
    notas,
  })

  if (error) {
    console.error("Error creando prospecto:", error)
    throw new Error(error.message)
  }

  revalidatePath("/dashboard")
}

export async function updateProspecto(formData) {
  console.log("=== UPDATE PROSPECTO SE EJECUTÓ ===") 
  const id = formData.get("id")?.toString()
  const nombreNegocio = formData.get("nombre_negocio")?.toString().trim()
  const contacto = formData.get("contacto")?.toString().trim() || null
  const telefono = formData.get("telefono")?.toString().trim() || null
  const estatus = formData.get("estatus")?.toString().trim() || "nuevo"
  const notas = formData.get("notas")?.toString().trim() || null

  if (!id || !nombreNegocio) {
    throw new Error("Faltan datos para actualizar el prospecto")
  }

  const { supabase, user } = await requireUser()

  const { data, error } = await supabase
    .from("prospectos")
    .update({
      nombre_negocio: nombreNegocio,
      contacto,
      telefono,
      estatus,
      notas,
    })
    .eq("id", id)
    .eq("user_id", user.id)
    .select()
    .single()

  console.log("RESULTADO UPDATE:", {
    data,
    error,
    id,
    userId: user.id,
  })

  if (error) {
    console.error("Error actualizando prospecto:", error)
    throw new Error(error.message)
  }

  revalidatePath("/dashboard")
}

export async function deleteProspecto(formData) {
  const id = formData.get("id")?.toString()

  if (!id) return

  const { supabase, user } = await requireUser()

  const { error } = await supabase
    .from("prospectos")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id)

  if (error) {
    console.error("Error eliminando prospecto:", error)
    throw new Error(error.message)
  }

  revalidatePath("/dashboard")
}
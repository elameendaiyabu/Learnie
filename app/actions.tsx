"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export type State = {
  error: string
}

export async function signup(prevState: State, formData: FormData) {
  const supabase = createClient()

  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const first_name = formData.get("firstName") as string
  const last_name = formData.get("lastName") as string

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        first_name: first_name,
        last_name: last_name,
      },
    },
  })

  if (error) {
    revalidatePath("/auth/signup")
    return {
      error: "Error Signing Up. Try Again",
    }
  }

  redirect("/")
}

export async function login(prevState: State, formData: FormData) {
  const supabase = createClient()

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  if (error) {
    revalidatePath("/auth/signup")
    return {
      error: "Error Signing Up. Try Again",
    }
  }

  redirect("/")
}

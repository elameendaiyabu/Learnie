import { LoginForm } from "@/components/LoginForm"
import React from "react"

type Props = {}

export default function Login({}: Props) {
  return (
    <div className=" w-full flex min-h-screen items-center justify-center">
      <LoginForm />
    </div>
  )
}

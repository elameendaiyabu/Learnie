"use client"

import Hero from "@/components/Hero"
import Recommendations from "@/components/Recommendations"
import UserDataForm from "@/components/UserDataForm"
import { useState } from "react"

export default function Home() {
  // const [data, setData] = useState({})

  return (
    <div>
      <Hero />
      <UserDataForm />
      {/* <Recommendations data={data} /> */}
    </div>
  )
}

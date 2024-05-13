import Hero from "@/components/Hero"
import UserDataForm from "@/components/UserDataForm"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div>
      <Hero />
      <UserDataForm />
      <Toaster />
    </div>
  )
}

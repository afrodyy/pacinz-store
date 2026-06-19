import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import TrustStrip from "@/components/sections/TrustStrip"
import ServiceCards from "@/components/sections/ServiceCards"
import Guarantee from "@/components/sections/Guarantee"
import Testimonials from "@/components/sections/Testimonials"

export const metadata: Metadata = {
  title: "Bang Pacinz — Topup Diamond MLBB, Jasa Joki & Mabar VIP",
  description:
    "Platform gaming terpercaya untuk topup diamond Mobile Legends, jasa joki akun, dan mabar VIP bersama coach profesional.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServiceCards />
      <Guarantee />
      <Testimonials />
    </>
  )
}

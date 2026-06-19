import type { Metadata } from "next"
import { Sora, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
})

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: {
    default: "Bang Pacinz — Topup Diamond MLBB, Jasa Joki & Mabar VIP",
    template: "%s | Bang Pacinz",
  },
  description:
    "Platform gaming terpercaya untuk topup diamond Mobile Legends, jasa joki akun, dan mabar VIP bersama coach profesional.",
  keywords: ["topup diamond", "jasa joki MLBB", "mabar VIP", "Mobile Legends", "bang pacinz"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${sora.variable} ${jakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}

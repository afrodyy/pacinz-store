import type { Metadata } from "next"
import JokiForm from "@/components/forms/JokiForm"

export const metadata: Metadata = {
  title: "Jasa Joki Akun MLBB",
  description: "Naikkan rank Mobile Legends kamu bersama coach profesional. Aman, cepat, dan terpercaya.",
}

export default function JasaJokiPage() {
  return (
    <div className="min-h-screen px-[22px] py-16">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-[6px] rounded-[100px] mb-4"
              style={{ background: "rgba(155,92,255,.1)", border: "1px solid rgba(155,92,255,.25)" }}
            >
              <span className="text-[12px] font-bold tracking-[1px] uppercase" style={{ color: "#b78bff" }}>
                Jasa Joki
              </span>
            </div>
            <h1
              className="text-[clamp(28px,4.4vw,40px)] font-bold tracking-tight mb-3"
              style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
            >
              Jasa Joki Akun MLBB
            </h1>
            <p className="text-[15px]" style={{ color: "#9aa3b2" }}>
              Dari Warrior hingga Mythical Glory. Dikerjakan manual oleh coach profesional.
            </p>
          </div>
          <JokiForm />
        </div>
      </div>
    </div>
  )
}

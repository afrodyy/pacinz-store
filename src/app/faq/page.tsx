import type { Metadata } from "next"
import FaqClient from "./FaqClient"

export const metadata: Metadata = {
  title: "FAQ — Pertanyaan yang Sering Ditanyakan",
  description: "Temukan jawaban atas pertanyaan umum seputar layanan Bang Pacinz.",
}

export default function FaqPage() {
  return (
    <div className="min-h-screen px-[22px] py-16">
      <div className="max-w-[720px] mx-auto">
        <div className="mb-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-[6px] rounded-[100px] mb-4"
            style={{ background: "rgba(255,122,26,.1)", border: "1px solid rgba(255,122,26,.25)" }}
          >
            <span className="text-[12px] font-bold tracking-[1px] uppercase" style={{ color: "#ff9445" }}>FAQ</span>
          </div>
          <h1
            className="text-[clamp(28px,4.4vw,46px)] font-bold tracking-tight mb-3"
            style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
          >
            Pertanyaan yang Sering Ditanyakan
          </h1>
          <p className="text-[15px]" style={{ color: "#9aa3b2" }}>
            Tidak menemukan jawaban yang kamu cari? Hubungi kami via WhatsApp.
          </p>
        </div>
        <FaqClient />
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import { Star } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"

export const metadata: Metadata = {
  title: "Testimoni Pelanggan",
  description: "Baca testimoni nyata dari pelanggan setia Bang Pacinz.",
}

const serviceLabels: Record<string, string> = { topup: "Topup Diamond", joki: "Jasa Joki", mabar: "Mabar VIP" }
const serviceColors: Record<string, string> = { topup: "#ff7a1a", joki: "#9b5cff", mabar: "#ff4d8d" }

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return r ? `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}` : "255,255,255"
}

export default function TestimoniPage() {
  return (
    <div className="min-h-screen px-[22px] py-16">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-[6px] rounded-[100px] mb-4"
            style={{ background: "rgba(155,92,255,.1)", border: "1px solid rgba(155,92,255,.25)" }}
          >
            <span className="text-[12px] font-bold tracking-[1px] uppercase" style={{ color: "#b78bff" }}>Testimoni</span>
          </div>
          <h1
            className="text-[clamp(28px,4.4vw,46px)] font-bold tracking-tight mb-3"
            style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
          >
            Apa Kata Pelanggan Kami
          </h1>
          <p className="text-[15px] max-w-[500px] mx-auto" style={{ color: "#9aa3b2" }}>
            Ribuan pelanggan puas telah menggunakan layanan Bang Pacinz. Ini cerita mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => {
            const color = serviceColors[t.service]
            return (
              <div
                key={t.id}
                className="p-[22px] rounded-[18px] flex flex-col gap-3"
                style={{ background: "#12151d", border: "1px solid rgba(255,255,255,.07)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5" style={{ color: "#ff7a1a" }} fill="#ff7a1a" />
                    ))}
                  </div>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-[100px]"
                    style={{
                      background: `rgba(${hexToRgb(color)}, .1)`,
                      color,
                      border: `1px solid rgba(${hexToRgb(color)}, .2)`,
                    }}
                  >
                    {serviceLabels[t.service]}
                  </span>
                </div>
                <p className="text-[14px] leading-relaxed flex-1" style={{ color: "#9aa3b2" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-2.5 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold" style={{ background: "rgba(155,92,255,.2)", color: "#b78bff" }}>
                    {t.name[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold" style={{ color: "#eef1f6" }}>{t.name}</p>
                    <p className="text-[11px]" style={{ color: "#5b6377" }}>
                      {new Date(t.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

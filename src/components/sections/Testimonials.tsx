"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"

const serviceLabels = { topup: "Topup Diamond", joki: "Jasa Joki", mabar: "Mabar VIP" }
const serviceColors = { topup: "#ff7a1a", joki: "#9b5cff", mabar: "#ff4d8d" }

export default function Testimonials() {
  return (
    <section className="px-[22px] py-16">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-[12px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "#5b6377" }}>
            Testimoni
          </p>
          <h2
            className="text-[clamp(26px,3.6vw,36px)] font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Apa Kata{" "}
            <span style={{ color: "#9b5cff" }}>Pelanggan Kami</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 6).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
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
                    background: `rgba(${colorToRgb(serviceColors[t.service])}, .1)`,
                    color: serviceColors[t.service],
                    border: `1px solid rgba(${colorToRgb(serviceColors[t.service])}, .2)`,
                  }}
                >
                  {serviceLabels[t.service]}
                </span>
              </div>
              <p className="text-[14px] leading-relaxed flex-1" style={{ color: "#9aa3b2" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 pt-1" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold"
                  style={{ background: "rgba(155,92,255,.2)", color: "#b78bff" }}
                >
                  {t.name[0].toUpperCase()}
                </div>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: "#eef1f6" }}>{t.name}</p>
                  <p className="text-[11px]" style={{ color: "#5b6377" }}>
                    {new Date(t.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function colorToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : "255,255,255"
}

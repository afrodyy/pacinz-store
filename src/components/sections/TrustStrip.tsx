"use client"

import { motion } from "framer-motion"
import { Zap, ShieldCheck, Clock, Star } from "lucide-react"

const benefits = [
  {
    icon: <Zap className="w-5 h-5" />,
    color: "#ff7a1a",
    title: "Proses Instan",
    desc: "Diamond masuk dalam hitungan detik setelah pembayaran dikonfirmasi.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#9b5cff",
    title: "100% Aman",
    desc: "Transaksi terenkripsi, akun kamu dijaga kerahasiaannya.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    color: "#ff4d8d",
    title: "Support 24/7",
    desc: "Tim kami siap membantu kamu kapan saja melalui WhatsApp.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    color: "#41e07d",
    title: "Garansi Puas",
    desc: "Tidak puas? Kami jamin pengembalian dana atau pengulangan layanan.",
  },
]

export default function TrustStrip() {
  return (
    <section className="px-[22px] py-16">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="p-[22px] rounded-[16px]"
              style={{
                background: "#12151d",
                border: "1px solid rgba(255,255,255,.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4"
                style={{ background: `rgba(${hexToRgb(item.color)}, .12)`, color: item.color }}
              >
                {item.icon}
              </div>
              <h3
                className="text-[15px] font-bold mb-1.5"
                style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
              >
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "#6b7385" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : "255,255,255"
}

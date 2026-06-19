"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Diamond, Sword, Users } from "lucide-react"

const services = [
  {
    icon: <Diamond className="w-6 h-6" />,
    color: "#ff7a1a",
    bgGradient: "linear-gradient(180deg, rgba(255,122,26,.08), rgba(22,27,37,.6))",
    borderColor: "rgba(255,122,26,.22)",
    title: "Topup Diamond",
    desc: "Isi ulang diamond Mobile Legends dengan harga termurah. Proses otomatis, instan masuk ke akun kamu.",
    href: "/topup-diamond",
    cta: "Topup Sekarang",
    highlight: "Mulai dari Rp 3.000",
  },
  {
    icon: <Sword className="w-6 h-6" />,
    color: "#9b5cff",
    bgGradient: "linear-gradient(180deg, rgba(155,92,255,.08), rgba(22,27,37,.6))",
    borderColor: "rgba(155,92,255,.22)",
    title: "Jasa Joki Akun",
    desc: "Naikkan rank kamu bersama coach profesional. Dari Warrior sampai Mythical Glory, aman dan cepat.",
    href: "/jasa-joki",
    cta: "Mulai Joki",
    highlight: "Mulai dari Rp 15.000/rank",
  },
  {
    icon: <Users className="w-6 h-6" />,
    color: "#ff4d8d",
    bgGradient: "linear-gradient(180deg, rgba(255,77,141,.08), rgba(22,27,37,.6))",
    borderColor: "rgba(255,77,141,.22)",
    title: "Mabar VIP",
    desc: "Main bareng coach top global. Tingkatkan skill dan strategi bermain dengan sesi coaching intensif.",
    href: "/mabar-vip",
    cta: "Book Sesi",
    highlight: "Mulai dari Rp 35.000/sesi",
  },
]

export default function ServiceCards() {
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
            Layanan Kami
          </p>
          <h2
            className="text-[clamp(28px,4.4vw,46px)] font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Semua Kebutuhan MLBB
            <br />
            <span style={{ color: "#ff7a1a" }}>di Satu Tempat</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-[22px] flex flex-col"
              style={{ background: svc.bgGradient, border: `1px solid ${svc.borderColor}` }}
            >
              <div
                className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-5"
                style={{ background: `rgba(${colorToRgb(svc.color)}, .15)`, color: svc.color }}
              >
                {svc.icon}
              </div>
              <h3
                className="text-[20px] font-bold mb-2"
                style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
              >
                {svc.title}
              </h3>
              <p className="text-[14px] leading-relaxed mb-4 flex-1" style={{ color: "#9aa3b2" }}>
                {svc.desc}
              </p>
              <div
                className="text-[12px] font-semibold mb-5 px-3 py-1.5 rounded-[100px] self-start"
                style={{
                  background: `rgba(${colorToRgb(svc.color)}, .1)`,
                  color: svc.color,
                  border: `1px solid rgba(${colorToRgb(svc.color)}, .2)`,
                }}
              >
                {svc.highlight}
              </div>
              <Link
                href={svc.href}
                className="flex items-center gap-2 text-[14px] font-bold transition-opacity hover:opacity-80"
                style={{ color: svc.color }}
              >
                {svc.cta} <ArrowRight className="w-4 h-4" />
              </Link>
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

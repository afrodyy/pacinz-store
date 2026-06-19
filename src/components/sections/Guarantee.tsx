"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ShieldCheck, MessageCircle } from "lucide-react"

const guarantees = [
  { title: "Keamanan Akun", desc: "Data akun kamu tidak pernah dibagikan ke pihak ketiga." },
  { title: "Proses Transparan", desc: "Update status real-time via WhatsApp selama pengerjaan." },
  { title: "Garansi Refund", desc: "Jika pesanan gagal diproses, uang kamu dikembalikan penuh." },
  { title: "Tanpa Cheat/Bot", desc: "Semua layanan dikerjakan manual oleh coach berpengalaman." },
]

export default function Guarantee() {
  return (
    <section className="px-[22px] py-16">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[22px] p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(65,224,125,.06), rgba(22,27,37,.8))",
            border: "1px solid rgba(65,224,125,.15)",
          }}
        >
          <div className="flex items-start gap-4 mb-8">
            <div
              className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0"
              style={{ background: "rgba(65,224,125,.15)" }}
            >
              <ShieldCheck className="w-6 h-6" style={{ color: "#41e07d" }} />
            </div>
            <div>
              <h2
                className="text-[24px] font-bold mb-1"
                style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
              >
                Jaminan Kepuasan 100%
              </h2>
              <p className="text-[15px]" style={{ color: "#9aa3b2" }}>
                Kami berkomitmen memberikan layanan terbaik dengan jaminan nyata.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-3"
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 shrink-0"
                  style={{ background: "#41e07d" }}
                />
                <div>
                  <p className="text-[14px] font-semibold mb-0.5" style={{ color: "#eef1f6" }}>{g.title}</p>
                  <p className="text-[13px]" style={{ color: "#6b7385" }}>{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[13px] text-[14px] font-bold"
            style={{ background: "#25d366", color: "#fff" }}
          >
            <MessageCircle className="w-4 h-4" />
            Hubungi Kami
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Diamond, ShieldCheck, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 px-[22px]" style={{ minHeight: "90vh" }}>
      {/* Background glow orbs */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-[620px] h-[620px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,122,26,.20), transparent 65%)",
          filter: "blur(20px)",
          animation: "bpGlow 7s ease-in-out infinite",
          transform: "translate(-220px, -260px)",
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none fixed bottom-0 right-0 w-[520px] h-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(155,92,255,.18), transparent 65%)",
          filter: "blur(20px)",
          animation: "bpGlow 9s ease-in-out infinite 2s",
          transform: "translate(180px, 180px)",
          zIndex: 0,
        }}
      />

      {/* Floating diamond icon */}
      <div
        className="absolute top-16 right-[10%] w-16 h-16 rounded-[14px] hidden md:flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(255,138,43,.3), rgba(255,106,0,.2))",
          border: "1px solid rgba(255,122,26,.3)",
          animation: "bpFloat 5s ease-in-out infinite",
          zIndex: 1,
        }}
      >
        <Diamond className="w-7 h-7" style={{ color: "#ff9445" }} />
      </div>

      <div className="relative max-w-[1180px] mx-auto" style={{ zIndex: 2 }}>
        {/* Promo badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-[7px] rounded-[100px] mb-6"
          style={{
            background: "rgba(255,122,26,.1)",
            border: "1px solid rgba(255,122,26,.25)",
          }}
        >
          <Zap className="w-3.5 h-3.5" style={{ color: "#ff7a1a" }} fill="#ff7a1a" />
          <span className="text-[13px] font-semibold" style={{ color: "#ff9445" }}>
            Proses instan · Harga terbaik · Aman & terpercaya
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-bold leading-[1.06] tracking-[-1px] mb-6"
          style={{
            fontFamily: "var(--font-sora)",
            fontSize: "clamp(38px, 6.4vw, 62px)",
            maxWidth: "820px",
          }}
        >
          Platform Gaming{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #ff8a2b, #ff4d8d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Terpercaya
          </span>{" "}
          untuk{" "}
          <span style={{ color: "#9b5cff" }}>MLBB</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[17px] leading-relaxed mb-10 max-w-[600px]"
          style={{ color: "#9aa3b2" }}
        >
          Topup diamond cepat & murah, jasa joki akun oleh coach profesional, dan sesi mabar VIP untuk tingkatkan skill kamu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/topup-diamond"
            className="inline-flex items-center gap-2 px-7 py-[15px] rounded-[13px] text-[15px] font-bold text-[#1a0d00] transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #ff8a2b, #ff6a00)",
              boxShadow: "0 10px 30px rgba(255,122,26,.32)",
            }}
          >
            Topup Diamond <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/jasa-joki"
            className="inline-flex items-center gap-2 px-7 py-[15px] rounded-[13px] text-[15px] font-bold text-[#b78bff] transition-colors hover:bg-[rgba(155,92,255,.12)]"
            style={{ border: "1px solid rgba(155,92,255,.3)", background: "rgba(155,92,255,.08)" }}
          >
            Jasa Joki Akun
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-6 mt-12"
        >
          {[
            { icon: <ShieldCheck className="w-4 h-4" />, label: "10.000+ Transaksi" },
            { icon: <Zap className="w-4 h-4" />, label: "Proses &lt; 2 Menit" },
            { icon: <Diamond className="w-4 h-4" />, label: "Harga Terjangkau" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span style={{ color: "#ff7a1a" }}>{item.icon}</span>
              <span
                className="text-[14px] font-medium"
                style={{ color: "#9aa3b2" }}
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

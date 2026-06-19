"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Copy } from "lucide-react"
import { mabarPackages } from "@/lib/data/mabarPackages"
import { coaches } from "@/lib/data/coaches"
import { formatPrice, generateOrderId } from "@/lib/utils/pricing"
import Button from "@/components/ui/Button"
import type { MabarFormData } from "@/lib/types"

interface Props {
  data: MabarFormData
  onBack: () => void
  onReset: () => void
}

export default function MabarStep4({ data, onBack, onReset }: Props) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [orderId] = useState(() => generateOrderId("BP-MABAR"))

  const pkg = mabarPackages.find((p) => p.id === data.packageId)!
  const coach = coaches.find((c) => c.id === data.coachId)!

  const handleConfirm = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center gap-5 py-8"
      >
        <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "rgba(255,77,141,.15)" }}>
          <CheckCircle2 className="w-10 h-10" style={{ color: "#ff4d8d" }} />
        </div>
        <div>
          <h3 className="text-[22px] font-bold mb-1" style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}>
            Sesi Mabar Terdaftar!
          </h3>
          <p className="text-[14px]" style={{ color: "#9aa3b2" }}>
            Coach <strong style={{ color: "#ff79a9" }}>{coach.name}</strong> akan menghubungi kamu sebelum sesi dimulai.
          </p>
        </div>
        <div className="w-full p-4 rounded-[14px] flex items-center justify-between" style={{ background: "#12151d", border: "1px solid rgba(255,255,255,.08)" }}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[1px] mb-1" style={{ color: "#5b6377" }}>Order ID</p>
            <p className="text-[14px] font-bold" style={{ fontFamily: "var(--font-jetbrains)", color: "#eef1f6" }}>{orderId}</p>
          </div>
          <button type="button" onClick={() => navigator.clipboard.writeText(orderId)} className="p-2 rounded-[8px] hover:bg-white/5" style={{ color: "#6b7385" }}>
            <Copy className="w-4 h-4" />
          </button>
        </div>
        <Button type="button" variant="outline" size="md" onClick={onReset} className="w-full">
          Book Sesi Lagi
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[18px] font-bold" style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}>Ringkasan Mabar VIP</h3>
      <div className="p-5 rounded-[16px] flex flex-col gap-3" style={{ background: "#12151d", border: "1px solid rgba(255,255,255,.08)" }}>
        {[
          { label: "Paket", value: `${pkg.name} (${pkg.sessions} sesi)` },
          { label: "Coach", value: coach.name },
          { label: "Rank Coach", value: coach.rank },
          { label: "Tanggal", value: new Date(data.scheduleDate).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) },
          { label: "Waktu", value: data.scheduleTime + " WIB" },
          { label: "In-Game ID", value: data.inGameId },
          ...(data.notes ? [{ label: "Catatan", value: data.notes }] : []),
        ].map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-4">
            <span className="text-[13px] shrink-0" style={{ color: "#6b7385" }}>{row.label}</span>
            <span className="text-[14px] font-semibold text-right" style={{ color: "#eef1f6" }}>{row.value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-3 mt-1" style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
          <span className="text-[14px] font-bold" style={{ color: "#eef1f6" }}>Total</span>
          <span className="text-[18px] font-bold" style={{ fontFamily: "var(--font-jetbrains)", color: "#ff4d8d" }}>
            {formatPrice(pkg.price)}
          </span>
        </div>
      </div>
      <div className="flex gap-3">
        <Button type="button" variant="outline" size="lg" onClick={onBack} className="flex-1">Kembali</Button>
        <Button type="button" size="lg" className="flex-1"
          style={{ background: "linear-gradient(135deg, #ff5e9c, #e0357a)", color: "#fff" }}
          loading={loading} onClick={handleConfirm}
        >
          {loading ? "Memproses..." : "Konfirmasi Booking"}
        </Button>
      </div>
    </div>
  )
}

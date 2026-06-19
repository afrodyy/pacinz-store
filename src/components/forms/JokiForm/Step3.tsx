"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Copy } from "lucide-react"
import { ranks } from "@/lib/data/ranks"
import { calculateJokiPrice, formatPrice, generateOrderId } from "@/lib/utils/pricing"
import Button from "@/components/ui/Button"
import type { JokiFormData } from "@/lib/types"

interface Props {
  data: JokiFormData
  onBack: () => void
  onReset: () => void
}

export default function JokiStep3({ data, onBack, onReset }: Props) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [orderId] = useState(() => generateOrderId("BP-JOKI"))

  const fromRank = ranks.find((r) => r.id === data.fromRankId)!
  const toRank = ranks.find((r) => r.id === data.toRankId)!
  const price = calculateJokiPrice(data.fromRankId, data.toRankId)
  const fromIdx = ranks.indexOf(fromRank)
  const toIdx = ranks.indexOf(toRank)
  const estDays = Math.ceil((toIdx - fromIdx) / 3)

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
        <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "rgba(155,92,255,.15)" }}>
          <CheckCircle2 className="w-10 h-10" style={{ color: "#9b5cff" }} />
        </div>
        <div>
          <h3 className="text-[22px] font-bold mb-1" style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}>
            Pesanan Joki Dibuat!
          </h3>
          <p className="text-[14px]" style={{ color: "#9aa3b2" }}>
            Coach kami akan segera menghubungi kamu via WhatsApp.
          </p>
        </div>
        <div
          className="w-full p-4 rounded-[14px] flex items-center justify-between"
          style={{ background: "#12151d", border: "1px solid rgba(255,255,255,.08)" }}
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[1px] mb-1" style={{ color: "#5b6377" }}>Order ID</p>
            <p className="text-[14px] font-bold" style={{ fontFamily: "var(--font-jetbrains)", color: "#eef1f6" }}>{orderId}</p>
          </div>
          <button type="button" onClick={() => navigator.clipboard.writeText(orderId)} className="p-2 rounded-[8px] hover:bg-white/5" style={{ color: "#6b7385" }}>
            <Copy className="w-4 h-4" />
          </button>
        </div>
        <Button type="button" variant="outline" size="md" onClick={onReset} className="w-full">
          Pesan Lagi
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[18px] font-bold" style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}>
        Ringkasan Joki
      </h3>

      <div className="p-5 rounded-[16px] flex flex-col gap-3" style={{ background: "#12151d", border: "1px solid rgba(255,255,255,.08)" }}>
        {[
          { label: "Rank Awal", value: fromRank.name },
          { label: "Rank Tujuan", value: toRank.name },
          { label: "Estimasi", value: `${estDays} hari` },
          { label: "Username", value: data.username },
          ...(data.notes ? [{ label: "Catatan", value: data.notes }] : []),
        ].map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-4">
            <span className="text-[13px] shrink-0" style={{ color: "#6b7385" }}>{row.label}</span>
            <span className="text-[14px] font-semibold text-right" style={{ color: "#eef1f6" }}>{row.value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-3 mt-1" style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
          <span className="text-[14px] font-bold" style={{ color: "#eef1f6" }}>Total</span>
          <span className="text-[18px] font-bold" style={{ fontFamily: "var(--font-jetbrains)", color: "#9b5cff" }}>
            {formatPrice(price)}
          </span>
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="button" variant="outline" size="lg" onClick={onBack} className="flex-1">
          Kembali
        </Button>
        <Button type="button" variant="secondary" size="lg" className="flex-1" loading={loading} onClick={handleConfirm}>
          {loading ? "Memproses..." : "Pesan Joki"}
        </Button>
      </div>
    </div>
  )
}

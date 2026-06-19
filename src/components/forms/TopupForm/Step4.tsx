"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Copy } from "lucide-react"
import { diamonds, paymentMethods } from "@/lib/data/diamonds"
import { formatPrice, generateOrderId } from "@/lib/utils/pricing"
import Button from "@/components/ui/Button"
import type { TopupFormData } from "@/lib/types"

interface Props {
  data: TopupFormData
  onReset: () => void
}

export default function TopupStep4({ data, onReset }: Props) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [orderId] = useState(() => generateOrderId("BP-TOPUP"))

  const pkg = diamonds.find((d) => d.id === data.diamondPackageId)!
  const method = paymentMethods.find((m) => m.id === data.paymentMethodId)!
  const total = pkg.price + (method.fee ?? 0)

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
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "rgba(65,224,125,.15)" }}
        >
          <CheckCircle2 className="w-10 h-10" style={{ color: "#41e07d" }} />
        </div>
        <div>
          <h3 className="text-[22px] font-bold mb-1" style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}>
            Pesanan Dibuat!
          </h3>
          <p className="text-[14px]" style={{ color: "#9aa3b2" }}>
            Tim kami akan memproses pesanan kamu segera.
          </p>
        </div>

        <div
          className="w-full p-4 rounded-[14px] flex items-center justify-between"
          style={{ background: "#12151d", border: "1px solid rgba(255,255,255,.08)" }}
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[1px] mb-1" style={{ color: "#5b6377" }}>
              Order ID
            </p>
            <p className="text-[14px] font-bold" style={{ fontFamily: "var(--font-jetbrains)", color: "#eef1f6" }}>
              {orderId}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(orderId)}
            className="p-2 rounded-[8px] transition-colors hover:bg-white/5"
            style={{ color: "#6b7385" }}
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[13px]" style={{ color: "#6b7385" }}>
          Simpan Order ID untuk cek status pesanan
        </p>

        <Button type="button" variant="outline" size="md" onClick={onReset} className="w-full">
          Topup Lagi
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[18px] font-bold" style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}>
        Ringkasan Pesanan
      </h3>

      <div
        className="p-5 rounded-[16px] flex flex-col gap-3"
        style={{ background: "#12151d", border: "1px solid rgba(255,255,255,.08)" }}
      >
        {[
          { label: "User ID", value: data.userId },
          { label: "Server", value: data.server },
          { label: "Diamond", value: `${pkg.amount}${pkg.bonus ? `+${pkg.bonus}` : ""} 💎` },
          { label: "Pembayaran", value: method.name },
          { label: "Harga", value: formatPrice(pkg.price) },
          ...(method.fee ? [{ label: "Biaya Admin", value: formatPrice(method.fee) }] : []),
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between">
            <span className="text-[13px]" style={{ color: "#6b7385" }}>{row.label}</span>
            <span className="text-[14px] font-semibold" style={{ color: "#eef1f6" }}>{row.value}</span>
          </div>
        ))}
        <div
          className="flex items-center justify-between pt-3 mt-1"
          style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
        >
          <span className="text-[14px] font-bold" style={{ color: "#eef1f6" }}>Total</span>
          <span
            className="text-[18px] font-bold"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#ff7a1a" }}
          >
            {formatPrice(total)}
          </span>
        </div>
      </div>

      <Button type="button" variant="primary" size="lg" className="w-full" loading={loading} onClick={handleConfirm}>
        {loading ? "Memproses..." : "Konfirmasi Pesanan"}
      </Button>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { findOrder } from "@/lib/data/orders"
import { formatPrice } from "@/lib/utils/pricing"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import Stepper from "@/components/ui/Stepper"
import type { Order } from "@/lib/types"

const STATUS_STEPS = ["Diproses", "Dikerjakan", "Selesai"]
const statusToStep: Record<string, number> = {
  processing: 0,
  in_progress: 1,
  completed: 2,
}
const serviceLabels: Record<string, string> = { topup: "Topup Diamond", joki: "Jasa Joki", mabar: "Mabar VIP" }
const serviceColors: Record<string, string> = { topup: "#ff7a1a", joki: "#9b5cff", mabar: "#ff4d8d" }

export default function CekStatusClient() {
  const [orderId, setOrderId] = useState("")
  const [order, setOrder] = useState<Order | null | undefined>(undefined)
  const [searched, setSearched] = useState(false)

  const handleSearch = () => {
    if (!orderId.trim()) return
    const result = findOrder(orderId)
    setOrder(result ?? null)
    setSearched(true)
  }

  const stepIndex = order ? statusToStep[order.status] : 0

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3">
        <Input
          label="Order ID"
          placeholder="Contoh: BP-TOPUP-001"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1"
          accentColor="#41e07d"
        />
        <div className="flex items-end">
          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={handleSearch}
            style={{ background: "#41e07d", color: "#0b1e13" }}
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {searched && (
        order ? (
          <div className="flex flex-col gap-5">
            <div
              className="p-5 rounded-[18px] flex flex-col gap-4"
              style={{ background: "#12151d", border: "1px solid rgba(255,255,255,.08)" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[1px] mb-1" style={{ color: "#5b6377" }}>Order ID</p>
                  <p className="text-[15px] font-bold" style={{ fontFamily: "var(--font-jetbrains)", color: "#eef1f6" }}>
                    {order.id}
                  </p>
                </div>
                <span
                  className="text-[12px] font-bold px-3 py-1.5 rounded-[100px]"
                  style={{
                    background: `rgba(${hexToRgb(serviceColors[order.service])}, .1)`,
                    color: serviceColors[order.service],
                    border: `1px solid rgba(${hexToRgb(serviceColors[order.service])}, .25)`,
                  }}
                >
                  {serviceLabels[order.service]}
                </span>
              </div>

              <div className="py-4" style={{ borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                <Stepper
                  steps={STATUS_STEPS}
                  currentStep={stepIndex}
                  accentColor="#41e07d"
                />
              </div>

              <div className="flex flex-col gap-2">
                {Object.entries(order.details).map(([key, value]) => (
                  <div key={key} className="flex items-start justify-between gap-4">
                    <span className="text-[13px] capitalize" style={{ color: "#6b7385" }}>
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className="text-[13px] font-medium text-right" style={{ color: "#9aa3b2" }}>
                      {typeof value === "number" && key === "total" ? formatPrice(value as number) : String(value)}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between">
                  <span className="text-[13px]" style={{ color: "#6b7385" }}>Tanggal</span>
                  <span className="text-[13px] font-medium" style={{ color: "#9aa3b2" }}>
                    {new Date(order.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="p-6 rounded-[16px] text-center"
            style={{ background: "rgba(255,77,141,.06)", border: "1px solid rgba(255,77,141,.15)" }}
          >
            <p className="text-[15px] font-semibold mb-1" style={{ color: "#ff79a9" }}>Pesanan Tidak Ditemukan</p>
            <p className="text-[13px]" style={{ color: "#6b7385" }}>
              Periksa kembali Order ID kamu. Contoh: BP-TOPUP-001
            </p>
          </div>
        )
      )}

      <div
        className="p-4 rounded-[14px]"
        style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}
      >
        <p className="text-[12px] font-bold mb-2" style={{ color: "#6b7385" }}>Order ID Contoh untuk Testing:</p>
        <div className="flex flex-wrap gap-2">
          {["BP-TOPUP-001", "BP-JOKI-001", "BP-MABAR-001"].map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setOrderId(id)}
              className="text-[12px] px-3 py-1.5 rounded-[8px] font-mono transition-colors hover:bg-white/5"
              style={{ background: "rgba(255,255,255,.05)", color: "#9aa3b2", border: "1px solid rgba(255,255,255,.1)" }}
            >
              {id}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : "255,255,255"
}

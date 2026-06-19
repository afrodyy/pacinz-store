"use client"

import { useState } from "react"
import { paymentMethods } from "@/lib/data/diamonds"
import { cn } from "@/lib/utils/cn"
import Button from "@/components/ui/Button"
import type { TopupFormData } from "@/lib/types"

interface Props {
  defaultValues: Partial<TopupFormData>
  onNext: (values: { paymentMethodId: string }) => void
  onBack: () => void
}

const methodTypeLabel: Record<string, string> = { ewallet: "E-Wallet", bank: "Transfer Bank", pulsa: "Pulsa" }

export default function TopupStep3({ defaultValues, onNext, onBack }: Props) {
  const [selected, setSelected] = useState<string>(defaultValues.paymentMethodId ?? "")
  const [error, setError] = useState("")

  const grouped = paymentMethods.reduce(
    (acc, m) => ({ ...acc, [m.type]: [...(acc[m.type] ?? []), m] }),
    {} as Record<string, typeof paymentMethods>
  )

  const handleSubmit = () => {
    if (!selected) { setError("Pilih metode pembayaran terlebih dahulu"); return }
    onNext({ paymentMethodId: selected })
  }

  return (
    <div className="flex flex-col gap-5">
      {Object.entries(grouped).map(([type, methods]) => (
        <div key={type}>
          <p className="text-[12px] font-bold tracking-[1px] uppercase mb-2" style={{ color: "#5b6377" }}>
            {methodTypeLabel[type]}
          </p>
          <div className="flex flex-col gap-2">
            {methods.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => { setSelected(m.id); setError("") }}
                className={cn("flex items-center gap-3 p-4 rounded-[12px] text-left transition-all cursor-pointer")}
                style={{
                  background: selected === m.id ? "rgba(255,122,26,.08)" : "#0d1017",
                  border: selected === m.id ? "1px solid #ff7a1a" : "1px solid rgba(255,255,255,.1)",
                  outline: "none",
                }}
              >
                <span className="text-2xl">{m.icon}</span>
                <div className="flex-1">
                  <p className="text-[14px] font-semibold" style={{ color: "#eef1f6" }}>{m.name}</p>
                  {m.fee && (
                    <p className="text-[12px]" style={{ color: "#9aa3b2" }}>Biaya admin: Rp {m.fee.toLocaleString("id-ID")}</p>
                  )}
                </div>
                <div
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: selected === m.id ? "#ff7a1a" : "rgba(255,255,255,.2)",
                  }}
                >
                  {selected === m.id && (
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff7a1a" }} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {error && <p className="text-[12px]" style={{ color: "#ff4d8d" }}>{error}</p>}

      <div className="flex gap-3 mt-2">
        <Button type="button" variant="outline" size="lg" onClick={onBack} className="flex-1">
          Kembali
        </Button>
        <Button type="button" variant="primary" size="lg" onClick={handleSubmit} className="flex-1">
          Lanjut
        </Button>
      </div>
    </div>
  )
}

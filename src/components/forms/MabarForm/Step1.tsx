"use client"

import { useState } from "react"
import { cn } from "@/lib/utils/cn"
import { mabarPackages } from "@/lib/data/mabarPackages"
import { formatPrice } from "@/lib/utils/pricing"
import Button from "@/components/ui/Button"
import { Check } from "lucide-react"
import type { MabarFormData } from "@/lib/types"

interface Props {
  defaultValues: Partial<MabarFormData>
  onNext: (values: { packageId: string }) => void
}

export default function MabarStep1({ defaultValues, onNext }: Props) {
  const [selected, setSelected] = useState<string>(defaultValues.packageId ?? "")
  const [error, setError] = useState("")

  const handleSubmit = () => {
    if (!selected) { setError("Pilih paket terlebih dahulu"); return }
    onNext({ packageId: selected })
  }

  return (
    <div className="flex flex-col gap-4">
      {mabarPackages.map((pkg) => (
        <button
          key={pkg.id}
          type="button"
          onClick={() => { setSelected(pkg.id); setError("") }}
          className={cn("relative p-5 rounded-[18px] text-left transition-all cursor-pointer w-full")}
          style={{
            background: selected === pkg.id ? "rgba(255,77,141,.08)" : "#12151d",
            border: selected === pkg.id ? "2px solid #ff4d8d" : "1px solid rgba(255,255,255,.08)",
            outline: "none",
          }}
        >
          {pkg.popular && (
            <span
              className="absolute -top-3 left-5 text-[11px] font-bold px-3 py-1 rounded-full"
              style={{ background: "#ff4d8d", color: "#fff" }}
            >
              Paling Populer
            </span>
          )}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <p className="text-[18px] font-bold" style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}>
                  {pkg.name}
                </p>
                <span className="text-[12px] font-medium px-2.5 py-1 rounded-full" style={{ background: "rgba(255,77,141,.1)", color: "#ff79a9" }}>
                  {pkg.sessions} sesi · {pkg.hours} jam
                </span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[13px]" style={{ color: "#9aa3b2" }}>
                    <Check className="w-3.5 h-3.5 shrink-0" style={{ color: "#41e07d" }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[22px] font-bold" style={{ fontFamily: "var(--font-jetbrains)", color: "#ff4d8d" }}>
                {formatPrice(pkg.price)}
              </p>
              <p className="text-[12px]" style={{ color: "#6b7385" }}>
                {formatPrice(Math.round(pkg.price / pkg.hours))}/jam
              </p>
            </div>
          </div>
        </button>
      ))}

      {error && <p className="text-[12px]" style={{ color: "#ff4d8d" }}>{error}</p>}

      <Button type="button" variant="primary" size="lg" className="w-full mt-2"
        style={{ background: "linear-gradient(135deg, #ff5e9c, #e0357a)", boxShadow: "0 8px 24px rgba(255,77,141,.3)" }}
        onClick={handleSubmit}
      >
        Lanjut — Pilih Coach
      </Button>
    </div>
  )
}

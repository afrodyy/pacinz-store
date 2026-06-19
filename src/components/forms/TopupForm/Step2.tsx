"use client"

import { useState } from "react"
import { diamonds } from "@/lib/data/diamonds"
import { formatPrice } from "@/lib/utils/pricing"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils/cn"
import type { TopupFormData } from "@/lib/types"

interface Props {
  defaultValues: Partial<TopupFormData>
  onNext: (values: { diamondPackageId: string }) => void
  onBack: () => void
}

export default function TopupStep2({ defaultValues, onNext, onBack }: Props) {
  const [selected, setSelected] = useState<string>(defaultValues.diamondPackageId ?? "")
  const [error, setError] = useState("")

  const handleSubmit = () => {
    if (!selected) { setError("Pilih nominal diamond terlebih dahulu"); return }
    onNext({ diamondPackageId: selected })
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-[13px] font-semibold mb-3" style={{ color: "#9aa3b2" }}>
          Pilih Nominal Diamond
        </p>
        <div className="grid grid-cols-3 gap-2">
          {diamonds.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => { setSelected(d.id); setError("") }}
              className={cn(
                "relative p-3 rounded-[12px] text-left transition-all cursor-pointer",
                selected === d.id ? "ring-2" : "hover:border-white/20"
              )}
              style={{
                background: selected === d.id ? "rgba(255,122,26,.12)" : "#0d1017",
                border: selected === d.id ? "1px solid #ff7a1a" : "1px solid rgba(255,255,255,.1)",
                outline: "none",
                ...(selected === d.id ? { boxShadow: "0 0 0 2px rgba(255,122,26,.25)" } : {}),
              }}
            >
              {d.popular && (
                <span
                  className="absolute -top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: "#ff7a1a", color: "#1a0d00" }}
                >
                  Populer
                </span>
              )}
              {d.label && (
                <span
                  className="absolute -top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: "#9b5cff", color: "#fff" }}
                >
                  {d.label}
                </span>
              )}
              <p
                className="text-[15px] font-bold"
                style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
              >
                {d.amount}
                {d.bonus && (
                  <span className="text-[11px] font-medium ml-1" style={{ color: "#41e07d" }}>
                    +{d.bonus}
                  </span>
                )}
              </p>
              <p className="text-[11px]" style={{ color: "#9aa3b2" }}>💎 diamond</p>
              <p
                className="text-[12px] font-bold mt-1"
                style={{ fontFamily: "var(--font-jetbrains)", color: "#ff7a1a" }}
              >
                {formatPrice(d.price)}
              </p>
            </button>
          ))}
        </div>
        {error && <p className="text-[12px] mt-2" style={{ color: "#ff4d8d" }}>{error}</p>}
      </div>

      {selected && (() => {
        const pkg = diamonds.find((d) => d.id === selected)!
        return (
          <div
            className="p-4 rounded-[14px] flex items-center justify-between"
            style={{ background: "rgba(255,122,26,.08)", border: "1px solid rgba(255,122,26,.2)" }}
          >
            <span className="text-[14px]" style={{ color: "#9aa3b2" }}>
              {pkg.amount}{pkg.bonus ? `+${pkg.bonus}` : ""} 💎
            </span>
            <span
              className="text-[16px] font-bold"
              style={{ fontFamily: "var(--font-jetbrains)", color: "#ff7a1a" }}
            >
              {formatPrice(pkg.price)}
            </span>
          </div>
        )
      })()}

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

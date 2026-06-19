"use client"

import { useState } from "react"
import { cn } from "@/lib/utils/cn"
import { coaches } from "@/lib/data/coaches"
import Button from "@/components/ui/Button"
import { Star } from "lucide-react"
import type { MabarFormData } from "@/lib/types"

interface Props {
  defaultValues: Partial<MabarFormData>
  onNext: (values: { coachId: string }) => void
  onBack: () => void
}

export default function MabarStep2({ defaultValues, onNext, onBack }: Props) {
  const [selected, setSelected] = useState<string>(defaultValues.coachId ?? "")
  const [error, setError] = useState("")

  const handleSubmit = () => {
    if (!selected) { setError("Pilih coach terlebih dahulu"); return }
    onNext({ coachId: selected })
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[13px] font-semibold" style={{ color: "#9aa3b2" }}>Pilih Coach</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {coaches.map((coach) => (
          <button
            key={coach.id}
            type="button"
            disabled={!coach.available}
            onClick={() => { if (coach.available) { setSelected(coach.id); setError("") } }}
            className={cn(
              "relative p-4 rounded-[16px] text-left transition-all",
              coach.available ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
            )}
            style={{
              background: selected === coach.id ? "rgba(255,77,141,.08)" : "#12151d",
              border: selected === coach.id ? "2px solid #ff4d8d" : "1px solid rgba(255,255,255,.08)",
              outline: "none",
            }}
          >
            {!coach.available && (
              <span
                className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(255,255,255,.08)", color: "#6b7385" }}
              >
                Tidak Tersedia
              </span>
            )}
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[16px] font-bold shrink-0"
                style={{ background: "rgba(255,77,141,.15)", color: "#ff79a9" }}
              >
                {coach.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-bold truncate" style={{ color: "#eef1f6" }}>{coach.name}</p>
                <p className="text-[12px]" style={{ color: "#9b5cff" }}>{coach.rank}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {coach.roles.map((role) => (
                <span
                  key={role}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,.06)", color: "#9aa3b2" }}
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-[12px]">
              <span className="flex items-center gap-1" style={{ color: "#ff7a1a" }}>
                <Star className="w-3 h-3" fill="#ff7a1a" />
                {coach.rating}
              </span>
              <span style={{ color: "#6b7385" }}>{coach.totalGames.toLocaleString("id-ID")} games</span>
              <span style={{ color: "#41e07d" }}>WR {coach.winRate}%</span>
            </div>

            {coach.bio && (
              <p className="text-[12px] leading-relaxed mt-2" style={{ color: "#5b6377" }}>{coach.bio}</p>
            )}
          </button>
        ))}
      </div>

      {error && <p className="text-[12px]" style={{ color: "#ff4d8d" }}>{error}</p>}

      <div className="flex gap-3 mt-2">
        <Button type="button" variant="outline" size="lg" onClick={onBack} className="flex-1">Kembali</Button>
        <Button type="button" size="lg" className="flex-1"
          style={{ background: "linear-gradient(135deg, #ff5e9c, #e0357a)", color: "#fff" }}
          onClick={handleSubmit}
        >
          Lanjut
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { jokiStep1Schema, type JokiStep1Values } from "@/lib/validations/joki"
import { ranks } from "@/lib/data/ranks"
import { calculateJokiPrice, formatPrice } from "@/lib/utils/pricing"
import Select from "@/components/ui/Select"
import Button from "@/components/ui/Button"
import type { JokiFormData } from "@/lib/types"

interface Props {
  defaultValues: Partial<JokiFormData>
  onNext: (values: JokiStep1Values) => void
}

const rankOptions = ranks.map((r) => ({ value: r.id, label: r.name }))

export default function JokiStep1({ defaultValues, onNext }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<JokiStep1Values>({
    resolver: zodResolver(jokiStep1Schema),
    defaultValues: {
      fromRankId: defaultValues.fromRankId ?? "",
      toRankId: defaultValues.toRankId ?? "",
    },
  })

  const fromId = watch("fromRankId")
  const toId = watch("toRankId")
  const price = fromId && toId ? calculateJokiPrice(fromId, toId) : 0

  const fromIdx = ranks.findIndex((r) => r.id === fromId)
  const toOptions = rankOptions.map((opt, i) => ({ ...opt, disabled: i <= fromIdx }))

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-5">
      <Select
        label="Rank Saat Ini"
        placeholder="Pilih rank awal..."
        options={rankOptions}
        error={errors.fromRankId?.message}
        accentColor="#9b5cff"
        {...register("fromRankId")}
      />

      <Select
        label="Rank Tujuan"
        placeholder="Pilih rank tujuan..."
        options={toOptions}
        error={errors.toRankId?.message}
        accentColor="#9b5cff"
        {...register("toRankId")}
      />

      {price > 0 && (
        <div
          className="p-4 rounded-[14px] flex items-center justify-between"
          style={{ background: "rgba(155,92,255,.08)", border: "1px solid rgba(155,92,255,.2)" }}
        >
          <div>
            <p className="text-[12px] font-semibold" style={{ color: "#9aa3b2" }}>Estimasi Harga</p>
            <p
              className="text-[22px] font-bold"
              style={{ fontFamily: "var(--font-jetbrains)", color: "#9b5cff" }}
            >
              {formatPrice(price)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[12px]" style={{ color: "#6b7385" }}>Estimasi selesai</p>
            <p className="text-[14px] font-semibold" style={{ color: "#eef1f6" }}>
              {Math.ceil((ranks.findIndex((r) => r.id === toId) - fromIdx) / 3)} hari
            </p>
          </div>
        </div>
      )}

      <Button type="submit" variant="secondary" size="lg" className="w-full mt-2">
        Lanjut — Isi Data Akun
      </Button>
    </form>
  )
}

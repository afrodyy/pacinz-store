"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { mabarStep3Schema, type MabarStep3Values } from "@/lib/validations/mabar"
import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils/cn"
import { availableTimes } from "@/lib/data/mabarPackages"
import type { MabarFormData } from "@/lib/types"

interface Props {
  defaultValues: Partial<MabarFormData>
  onNext: (values: MabarStep3Values) => void
  onBack: () => void
}

export default function MabarStep3({ defaultValues, onNext, onBack }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<MabarStep3Values>({
    resolver: zodResolver(mabarStep3Schema),
    defaultValues: {
      scheduleDate: defaultValues.scheduleDate ?? "",
      scheduleTime: defaultValues.scheduleTime ?? "",
      inGameId: defaultValues.inGameId ?? "",
      notes: defaultValues.notes ?? "",
    },
  })

  const selectedTime = watch("scheduleTime")
  const today = new Date().toISOString().split("T")[0]

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-5">
      <Input
        label="Tanggal Sesi"
        type="date"
        min={today}
        error={errors.scheduleDate?.message}
        accentColor="#ff4d8d"
        {...register("scheduleDate")}
      />

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold" style={{ color: "#9aa3b2" }}>
          Waktu Sesi
        </label>
        <div className="grid grid-cols-4 gap-2">
          {availableTimes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setValue("scheduleTime", t, { shouldValidate: true })}
              className={cn("py-2 px-3 rounded-[10px] text-[13px] font-semibold transition-all cursor-pointer")}
              style={{
                background: selectedTime === t ? "rgba(255,77,141,.12)" : "#0d1017",
                border: selectedTime === t ? "1px solid #ff4d8d" : "1px solid rgba(255,255,255,.1)",
                color: selectedTime === t ? "#ff79a9" : "#9aa3b2",
                outline: "none",
              }}
            >
              {t}
            </button>
          ))}
        </div>
        {errors.scheduleTime && (
          <p className="text-[12px]" style={{ color: "#ff4d8d" }}>{errors.scheduleTime.message}</p>
        )}
      </div>

      <Input
        label="In-Game ID"
        placeholder="ID akun MLBB kamu"
        inputMode="numeric"
        error={errors.inGameId?.message}
        accentColor="#ff4d8d"
        {...register("inGameId")}
      />

      <Textarea
        label="Catatan (Opsional)"
        placeholder="Hero yang ingin dipelajari, kendala saat ini, dll..."
        accentColor="#ff4d8d"
        error={errors.notes?.message}
        {...register("notes")}
      />

      <div className="flex gap-3 mt-2">
        <Button type="button" variant="outline" size="lg" onClick={onBack} className="flex-1">Kembali</Button>
        <Button type="submit" size="lg" className="flex-1"
          style={{ background: "linear-gradient(135deg, #ff5e9c, #e0357a)", color: "#fff" }}
        >
          Lanjut
        </Button>
      </div>
    </form>
  )
}

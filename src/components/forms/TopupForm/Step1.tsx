"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { topupStep1Schema, type TopupStep1Values } from "@/lib/validations/topup"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import type { TopupFormData } from "@/lib/types"

interface Props {
  defaultValues: Partial<TopupFormData>
  onNext: (values: TopupStep1Values) => void
}

export default function TopupStep1({ defaultValues, onNext }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TopupStep1Values>({
    resolver: zodResolver(topupStep1Schema),
    defaultValues: {
      userId: defaultValues.userId ?? "",
      server: defaultValues.server ?? "",
    },
  })

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-5">
      <div
        className="p-5 rounded-[16px] mb-2"
        style={{ background: "rgba(255,122,26,.06)", border: "1px solid rgba(255,122,26,.15)" }}
      >
        <p className="text-[13px]" style={{ color: "#9aa3b2" }}>
          <span className="font-semibold" style={{ color: "#ff9445" }}>Cara cek User ID & Server:</span>{" "}
          Buka MLBB → tap avatar profil → User ID dan Server tertera di bawah nama karakter.
        </p>
      </div>

      <Input
        label="User ID"
        placeholder="Contoh: 123456789"
        inputMode="numeric"
        error={errors.userId?.message}
        {...register("userId")}
      />

      <Input
        label="Server ID"
        placeholder="Contoh: 8870"
        inputMode="numeric"
        error={errors.server?.message}
        {...register("server")}
      />

      <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
        Lanjut — Pilih Diamond
      </Button>
    </form>
  )
}

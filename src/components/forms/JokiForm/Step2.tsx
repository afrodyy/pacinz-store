"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { jokiStep2Schema, type JokiStep2Values } from "@/lib/validations/joki"
import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"
import Button from "@/components/ui/Button"
import type { JokiFormData } from "@/lib/types"
import { ShieldCheck } from "lucide-react"

interface Props {
  defaultValues: Partial<JokiFormData>
  onNext: (values: JokiStep2Values) => void
  onBack: () => void
}

export default function JokiStep2({ defaultValues, onNext, onBack }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JokiStep2Values>({
    resolver: zodResolver(jokiStep2Schema),
    defaultValues: {
      username: defaultValues.username ?? "",
      password: defaultValues.password ?? "",
      notes: defaultValues.notes ?? "",
    },
  })

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-5">
      <div
        className="flex gap-3 p-4 rounded-[14px]"
        style={{ background: "rgba(65,224,125,.06)", border: "1px solid rgba(65,224,125,.15)" }}
      >
        <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#41e07d" }} />
        <p className="text-[13px] leading-relaxed" style={{ color: "#9aa3b2" }}>
          Data akun kamu terenkripsi dan hanya digunakan untuk keperluan pengerjaan joki. Kami tidak menyimpan atau membagikan data ini.
        </p>
      </div>

      <Input
        label="Username / Email Akun"
        placeholder="Username atau email MLBB"
        error={errors.username?.message}
        accentColor="#9b5cff"
        autoComplete="off"
        {...register("username")}
      />

      <Input
        label="Password Akun"
        type="password"
        placeholder="Password akun MLBB"
        error={errors.password?.message}
        accentColor="#9b5cff"
        autoComplete="new-password"
        {...register("password")}
      />

      <Textarea
        label="Catatan Tambahan (Opsional)"
        placeholder="Hero favorit, role yang diinginkan, dll..."
        accentColor="#9b5cff"
        error={errors.notes?.message}
        {...register("notes")}
      />

      <div className="flex gap-3 mt-2">
        <Button type="button" variant="outline" size="lg" onClick={onBack} className="flex-1">
          Kembali
        </Button>
        <Button type="submit" variant="secondary" size="lg" className="flex-1">
          Lanjut
        </Button>
      </div>
    </form>
  )
}

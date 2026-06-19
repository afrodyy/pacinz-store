import { z } from "zod"

export const mabarStep1Schema = z.object({
  packageId: z.string().min(1, "Pilih paket mabar"),
})

export const mabarStep2Schema = z.object({
  coachId: z.string().min(1, "Pilih coach"),
})

export const mabarStep3Schema = z.object({
  scheduleDate: z.string().min(1, "Pilih tanggal sesi"),
  scheduleTime: z.string().min(1, "Pilih waktu sesi"),
  inGameId: z
    .string()
    .min(1, "In-Game ID wajib diisi")
    .regex(/^\d+$/, "In-Game ID harus berupa angka"),
  notes: z.string().max(300, "Catatan maksimal 300 karakter").optional(),
})

export type MabarStep1Values = z.infer<typeof mabarStep1Schema>
export type MabarStep2Values = z.infer<typeof mabarStep2Schema>
export type MabarStep3Values = z.infer<typeof mabarStep3Schema>

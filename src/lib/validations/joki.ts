import { z } from "zod"

export const jokiStep1Schema = z.object({
  fromRankId: z.string().min(1, "Pilih rank awal"),
  toRankId: z.string().min(1, "Pilih rank tujuan"),
}).refine(
  (data) => data.fromRankId !== data.toRankId,
  { message: "Rank tujuan harus berbeda dari rank awal", path: ["toRankId"] }
)

export const jokiStep2Schema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  notes: z.string().max(500, "Catatan maksimal 500 karakter").optional(),
})

export type JokiStep1Values = z.infer<typeof jokiStep1Schema>
export type JokiStep2Values = z.infer<typeof jokiStep2Schema>

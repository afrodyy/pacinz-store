import { z } from "zod"

export const topupStep1Schema = z.object({
  userId: z
    .string()
    .min(1, "User ID wajib diisi")
    .regex(/^\d+$/, "User ID harus berupa angka"),
  server: z
    .string()
    .min(1, "Server ID wajib diisi")
    .regex(/^\d+$/, "Server ID harus berupa angka"),
})

export const topupStep2Schema = z.object({
  diamondPackageId: z.string().min(1, "Pilih nominal diamond"),
})

export const topupStep3Schema = z.object({
  paymentMethodId: z.string().min(1, "Pilih metode pembayaran"),
})

export type TopupStep1Values = z.infer<typeof topupStep1Schema>
export type TopupStep2Values = z.infer<typeof topupStep2Schema>
export type TopupStep3Values = z.infer<typeof topupStep3Schema>

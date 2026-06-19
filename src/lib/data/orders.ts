import { Order } from "@/lib/types"

export const mockOrders: Order[] = [
  {
    id: "BP-TOPUP-001",
    service: "topup",
    status: "completed",
    createdAt: "2026-06-18T10:30:00Z",
    details: { userId: "12345678", server: "8870", diamond: 170, paymentMethod: "GoPay", total: 42000 },
  },
  {
    id: "BP-JOKI-001",
    service: "joki",
    status: "in_progress",
    createdAt: "2026-06-17T14:00:00Z",
    details: { fromRank: "Epic I", toRank: "Legend III", estimatedDays: 3 },
  },
  {
    id: "BP-MABAR-001",
    service: "mabar",
    status: "processing",
    createdAt: "2026-06-19T08:00:00Z",
    details: { coach: "AlphaStrike", package: "Pro", schedule: "2026-06-20 19:00" },
  },
  {
    id: "BP-TOPUP-002",
    service: "topup",
    status: "completed",
    createdAt: "2026-06-15T16:45:00Z",
    details: { userId: "98765432", server: "1234", diamond: 565, paymentMethod: "DANA", total: 140000 },
  },
  {
    id: "BP-JOKI-002",
    service: "joki",
    status: "completed",
    createdAt: "2026-06-10T09:00:00Z",
    details: { fromRank: "Master I", toRank: "Epic III", estimatedDays: 2 },
  },
]

export function findOrder(id: string): Order | undefined {
  return mockOrders.find((o) => o.id.toUpperCase() === id.toUpperCase().trim())
}

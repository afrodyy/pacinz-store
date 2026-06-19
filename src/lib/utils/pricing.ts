import { ranks } from "@/lib/data/ranks"

export function calculateJokiPrice(fromRankId: string, toRankId: string): number {
  const fromRank = ranks.find((r) => r.id === fromRankId)
  const toRank = ranks.find((r) => r.id === toRankId)

  if (!fromRank || !toRank) return 0

  const fromIndex = ranks.indexOf(fromRank)
  const toIndex = ranks.indexOf(toRank)

  if (toIndex <= fromIndex) return 0

  let total = 0
  for (let i = fromIndex; i < toIndex; i++) {
    total += ranks[i].basePrice
  }
  return total
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function generateOrderId(prefix: string = "BP"): string {
  const ts = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${prefix}-${ts}-${rand}`
}

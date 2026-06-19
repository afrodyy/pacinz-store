import { DiamondPackage, PaymentMethod } from "@/lib/types"

export const diamonds: DiamondPackage[] = [
  { id: "d1", amount: 11, price: 3000 },
  { id: "d2", amount: 22, price: 6000 },
  { id: "d3", amount: 56, price: 15000 },
  { id: "d4", amount: 86, price: 22000 },
  { id: "d5", amount: 112, price: 28000 },
  { id: "d6", amount: 170, price: 42000, popular: true },
  { id: "d7", amount: 240, price: 60000 },
  { id: "d8", amount: 296, price: 74000 },
  { id: "d9", amount: 366, price: 90000 },
  { id: "d10", amount: 565, price: 140000, popular: true },
  { id: "d11", amount: 706, price: 175000 },
  { id: "d12", amount: 878, price: 218000 },
  { id: "d13", amount: 963, price: 238000 },
  { id: "d14", amount: 1412, price: 350000 },
  { id: "d15", amount: 2195, price: 540000 },
  { id: "d16", amount: 3688, price: 900000, label: "Hemat 10%" },
  { id: "d17", amount: 5532, price: 1350000, label: "Best Value" },
]

export const paymentMethods: PaymentMethod[] = [
  { id: "gopay", name: "GoPay", type: "ewallet", icon: "💚" },
  { id: "ovo", name: "OVO", type: "ewallet", icon: "💜" },
  { id: "dana", name: "DANA", type: "ewallet", icon: "💙" },
  { id: "shopee", name: "ShopeePay", type: "ewallet", icon: "🧡" },
  { id: "bca", name: "BCA Transfer", type: "bank", icon: "🏦" },
  { id: "bni", name: "BNI Transfer", type: "bank", icon: "🏦" },
  { id: "bri", name: "BRI Transfer", type: "bank", icon: "🏦" },
  { id: "mandiri", name: "Mandiri Transfer", type: "bank", icon: "🏦" },
  { id: "xl", name: "Pulsa XL", type: "pulsa", icon: "📱", fee: 3000 },
  { id: "telkomsel", name: "Pulsa Telkomsel", type: "pulsa", icon: "📱", fee: 3000 },
]

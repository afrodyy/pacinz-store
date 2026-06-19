import { MabarPackage } from "@/lib/types"

export const mabarPackages: MabarPackage[] = [
  {
    id: "mabar_1",
    name: "Starter",
    sessions: 1,
    hours: 1,
    price: 35000,
    features: ["1 sesi mabar", "1 jam bersama coach", "Tips & strategi dasar"],
  },
  {
    id: "mabar_2",
    name: "Pro",
    sessions: 3,
    hours: 3,
    price: 90000,
    popular: true,
    features: [
      "3 sesi mabar",
      "3 jam bersama coach",
      "Review gameplay",
      "Tips hero spesifik",
      "Gratis 1 rank up coaching",
    ],
  },
  {
    id: "mabar_3",
    name: "Elite",
    sessions: 5,
    hours: 5,
    price: 140000,
    features: [
      "5 sesi mabar",
      "5 jam bersama coach",
      "Full gameplay analysis",
      "Custom training plan",
      "Priority matchmaking",
      "WhatsApp support 24 jam",
    ],
  },
  {
    id: "mabar_4",
    name: "VIP Unlimited",
    sessions: 10,
    hours: 10,
    price: 250000,
    features: [
      "10 sesi mabar",
      "10 jam bersama coach",
      "Dedicated coach pilihan",
      "Full analysis + laporan",
      "Garansi rank up",
      "Support prioritas",
    ],
  },
]

export const availableTimes = [
  "08:00", "09:00", "10:00", "11:00",
  "13:00", "14:00", "15:00", "16:00",
  "19:00", "20:00", "21:00", "22:00",
]

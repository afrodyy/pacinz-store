"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Berapa lama proses topup diamond?",
    a: "Proses topup diamond biasanya selesai dalam hitungan detik hingga maksimal 2 menit setelah pembayaran dikonfirmasi.",
  },
  {
    q: "Apakah data akun saya aman?",
    a: "Ya, semua data akun dienkripsi dan hanya digunakan untuk keperluan pengerjaan. Kami tidak menyimpan atau membagikan data ke pihak ketiga.",
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "Kami menerima berbagai metode pembayaran termasuk GoPay, OVO, DANA, ShopeePay, transfer bank (BCA, BNI, BRI, Mandiri), dan pulsa.",
  },
  {
    q: "Berapa lama jasa joki akun selesai?",
    a: "Estimasi waktu tergantung jarak rank. Rata-rata 1-2 hari untuk perbedaan 3 rank, dan maksimal 7-10 hari untuk jarak jauh (misal Warrior ke Mythic).",
  },
  {
    q: "Apakah ada garansi untuk jasa joki?",
    a: "Ya! Kami menjamin akun kamu akan mencapai rank yang ditentukan. Jika tidak berhasil, kami akan mengulang proses tanpa biaya tambahan.",
  },
  {
    q: "Bagaimana cara booking sesi Mabar VIP?",
    a: "Pilih paket yang sesuai, pilih coach, tentukan jadwal dan waktu sesi, lalu konfirmasi. Coach akan menghubungi kamu via WhatsApp sebelum sesi dimulai.",
  },
  {
    q: "Apakah saya bisa memilih hero tertentu saat mabar?",
    a: "Ya! Kamu bisa menyebutkan hero yang ingin dipelajari di kolom catatan saat booking. Coach kami akan menyesuaikan sesi berdasarkan preferensi kamu.",
  },
  {
    q: "Apa yang harus dilakukan jika terjadi masalah?",
    a: "Hubungi kami langsung via WhatsApp dengan menyertakan Order ID kamu. Tim kami siap membantu 24/7.",
  },
  {
    q: "Apakah Bang Pacinz afiliasi resmi Moonton?",
    a: "Tidak. Bang Pacinz adalah layanan pihak ketiga yang tidak berafiliasi dengan Moonton atau Mobile Legends secara resmi.",
  },
]

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((item, i) => (
        <div
          key={i}
          className="rounded-[16px] overflow-hidden"
          style={{
            background: openIndex === i ? "rgba(255,122,26,.06)" : "#12151d",
            border: openIndex === i ? "1px solid rgba(255,122,26,.2)" : "1px solid rgba(255,255,255,.07)",
            transition: "background 0.2s, border 0.2s",
          }}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
          >
            <span className="text-[15px] font-semibold" style={{ color: "#eef1f6" }}>{item.q}</span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0"
            >
              <ChevronDown className="w-5 h-5" style={{ color: openIndex === i ? "#ff7a1a" : "#6b7385" }} />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                style={{ overflow: "hidden" }}
              >
                <p className="px-5 pb-4 text-[14px] leading-relaxed" style={{ color: "#9aa3b2" }}>
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

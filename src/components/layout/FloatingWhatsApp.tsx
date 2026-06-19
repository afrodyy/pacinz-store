"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890"

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=Halo+Bang+Pacinz%2C+saya+butuh+bantuan`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-[100px] shadow-2xl"
      style={{ background: "#25d366", color: "#fff" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative flex items-center justify-center w-6 h-6">
        <span
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(255,255,255,0.4)", animation: "bpPulse 2s ease-out infinite" }}
        />
        <MessageCircle className="w-5 h-5 relative z-10" fill="white" />
      </span>
      <span className="text-[14px] font-bold pr-1 hidden sm:block">Chat Sekarang</span>
    </motion.a>
  )
}

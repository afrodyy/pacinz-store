import type { Metadata } from "next"
import Link from "next/link"
import { MessageCircle, Mail, Clock, AtSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontak & Bantuan",
  description: "Hubungi tim Bang Pacinz untuk bantuan seputar layanan kami.",
}

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890"

const contactItems = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    color: "#25d366",
    title: "WhatsApp",
    desc: "Cara tercepat untuk menghubungi kami. Respon rata-rata &lt; 5 menit.",
    action: { href: `https://wa.me/${WA_NUMBER}`, label: "Chat WhatsApp", external: true },
  },
  {
    icon: <Mail className="w-6 h-6" />,
    color: "#9b5cff",
    title: "Email",
    desc: "Untuk pertanyaan detail atau laporan masalah.",
    action: { href: "mailto:admin@bangpacinz.id", label: "admin@bangpacinz.id", external: false },
  },
  {
    icon: <AtSign className="w-6 h-6" />,
    color: "#ff4d8d",
    title: "Instagram",
    desc: "Ikuti kami untuk info promo dan update terbaru.",
    action: { href: "https://instagram.com/bangpacinz", label: "@bangpacinz", external: true },
  },
]

const hours = [
  { day: "Senin – Jumat", time: "09:00 – 23:00 WIB" },
  { day: "Sabtu – Minggu", time: "08:00 – 24:00 WIB" },
  { day: "Hari Libur Nasional", time: "10:00 – 22:00 WIB" },
]

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return r ? `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}` : "255,255,255"
}

export default function KontakPage() {
  return (
    <div className="min-h-screen px-[22px] py-16">
      <div className="max-w-[720px] mx-auto">
        <div className="mb-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-[6px] rounded-[100px] mb-4"
            style={{ background: "rgba(37,211,102,.1)", border: "1px solid rgba(37,211,102,.25)" }}
          >
            <span className="text-[12px] font-bold tracking-[1px] uppercase" style={{ color: "#25d366" }}>Kontak</span>
          </div>
          <h1
            className="text-[clamp(28px,4.4vw,46px)] font-bold tracking-tight mb-3"
            style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
          >
            Hubungi Kami
          </h1>
          <p className="text-[15px]" style={{ color: "#9aa3b2" }}>
            Ada pertanyaan atau butuh bantuan? Tim kami siap membantu kamu.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          {contactItems.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-[18px] flex items-center gap-5"
              style={{ background: "#12151d", border: "1px solid rgba(255,255,255,.07)" }}
            >
              <div
                className="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0"
                style={{ background: `rgba(${hexToRgb(item.color)}, .12)`, color: item.color }}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-[16px] font-bold mb-0.5" style={{ color: "#eef1f6" }}>{item.title}</p>
                <p
                  className="text-[13px]"
                  style={{ color: "#6b7385" }}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
              {item.action.external ? (
                <a
                  href={item.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-[11px] text-[13px] font-bold transition-opacity hover:opacity-80 shrink-0"
                  style={{
                    background: `rgba(${hexToRgb(item.color)}, .12)`,
                    color: item.color,
                    border: `1px solid rgba(${hexToRgb(item.color)}, .25)`,
                  }}
                >
                  {item.action.label}
                </a>
              ) : (
                <Link
                  href={item.action.href}
                  className="px-4 py-2 rounded-[11px] text-[13px] font-bold transition-opacity hover:opacity-80 shrink-0"
                  style={{
                    background: `rgba(${hexToRgb(item.color)}, .12)`,
                    color: item.color,
                    border: `1px solid rgba(${hexToRgb(item.color)}, .25)`,
                  }}
                >
                  {item.action.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div
          className="p-6 rounded-[18px]"
          style={{ background: "#12151d", border: "1px solid rgba(255,255,255,.07)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-[10px] flex items-center justify-center" style={{ background: "rgba(255,122,26,.12)", color: "#ff7a1a" }}>
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-[16px] font-bold" style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}>
              Jam Operasional
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between">
                <span className="text-[14px]" style={{ color: "#9aa3b2" }}>{h.day}</span>
                <span
                  className="text-[13px] font-semibold"
                  style={{ fontFamily: "var(--font-jetbrains)", color: "#ff7a1a" }}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

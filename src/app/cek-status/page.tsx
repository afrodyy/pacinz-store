import type { Metadata } from "next"
import CekStatusClient from "./CekStatusClient"

export const metadata: Metadata = {
  title: "Cek Status Pesanan",
  description: "Cek status pesanan topup diamond, jasa joki, dan mabar VIP kamu.",
}

export default function CekStatusPage() {
  return (
    <div className="min-h-screen px-[22px] py-16">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-[6px] rounded-[100px] mb-4"
              style={{ background: "rgba(65,224,125,.1)", border: "1px solid rgba(65,224,125,.2)" }}
            >
              <span className="text-[12px] font-bold tracking-[1px] uppercase" style={{ color: "#41e07d" }}>
                Cek Status
              </span>
            </div>
            <h1
              className="text-[clamp(28px,4.4vw,40px)] font-bold tracking-tight mb-3"
              style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
            >
              Cek Status Pesanan
            </h1>
            <p className="text-[15px]" style={{ color: "#9aa3b2" }}>
              Masukkan Order ID yang kamu terima untuk melihat status pesanan.
            </p>
          </div>
          <CekStatusClient />
        </div>
      </div>
    </div>
  )
}

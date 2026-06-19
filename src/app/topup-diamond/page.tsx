import type { Metadata } from "next"
import TopupForm from "@/components/forms/TopupForm"

export const metadata: Metadata = {
  title: "Topup Diamond MLBB",
  description: "Topup diamond Mobile Legends dengan harga termurah dan proses instan.",
}

export default function TopupDiamondPage() {
  return (
    <div className="min-h-screen px-[22px] py-16">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[560px] mx-auto">
          <div className="mb-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-[6px] rounded-[100px] mb-4"
              style={{ background: "rgba(255,122,26,.1)", border: "1px solid rgba(255,122,26,.25)" }}
            >
              <span className="text-[12px] font-bold tracking-[1px] uppercase" style={{ color: "#ff9445" }}>
                Topup Diamond
              </span>
            </div>
            <h1
              className="text-[clamp(28px,4.4vw,40px)] font-bold tracking-tight mb-3"
              style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
            >
              Topup Diamond MLBB
            </h1>
            <p className="text-[15px]" style={{ color: "#9aa3b2" }}>
              Harga terbaik, proses instan, aman 100%.
            </p>
          </div>
          <TopupForm />
        </div>
      </div>
    </div>
  )
}

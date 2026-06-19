import type { Metadata } from "next"
import MabarForm from "@/components/forms/MabarForm"

export const metadata: Metadata = {
  title: "Mabar VIP MLBB",
  description: "Tingkatkan skill Mobile Legends kamu dengan sesi mabar VIP bersama coach top global.",
}

export default function MabarVipPage() {
  return (
    <div className="min-h-screen px-[22px] py-16">
      <div className="max-w-[1180px] mx-auto">
        <div className="max-w-[620px] mx-auto">
          <div className="mb-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-[6px] rounded-[100px] mb-4"
              style={{ background: "rgba(255,77,141,.1)", border: "1px solid rgba(255,77,141,.25)" }}
            >
              <span className="text-[12px] font-bold tracking-[1px] uppercase" style={{ color: "#ff79a9" }}>
                Mabar VIP
              </span>
            </div>
            <h1
              className="text-[clamp(28px,4.4vw,40px)] font-bold tracking-tight mb-3"
              style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
            >
              Mabar VIP Bersama Coach
            </h1>
            <p className="text-[15px]" style={{ color: "#9aa3b2" }}>
              Main bareng coach top global. Tingkatkan skill, strategi, dan rank kamu.
            </p>
          </div>
          <MabarForm />
        </div>
      </div>
    </div>
  )
}

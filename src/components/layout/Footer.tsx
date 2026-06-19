import Link from "next/link"
import { Zap } from "lucide-react"

const links = {
  Layanan: [
    { href: "/topup-diamond", label: "Topup Diamond" },
    { href: "/jasa-joki", label: "Jasa Joki Akun" },
    { href: "/mabar-vip", label: "Mabar VIP" },
  ],
  Informasi: [
    { href: "/cek-status", label: "Cek Status Pesanan" },
    { href: "/testimoni", label: "Testimoni" },
    { href: "/faq", label: "FAQ" },
  ],
  Lainnya: [
    { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
    { href: "/kontak", label: "Kontak & Bantuan" },
  ],
}

export default function Footer() {
  return (
    <footer
      className="mt-16 pt-12 pb-8"
      style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}
    >
      <div className="max-w-[1180px] mx-auto px-[22px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-[9px] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #ff8a2b, #ff6a00)" }}
              >
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span
                className="text-[17px] font-bold"
                style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
              >
                Bang<span style={{ color: "#ff7a1a" }}>Pacinz</span>
              </span>
            </Link>
            <p className="text-[13px] leading-relaxed" style={{ color: "#6b7385" }}>
              Platform gaming terpercaya untuk topup diamond MLBB, jasa joki, dan mabar VIP bersama coach profesional.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3
                className="text-[12px] font-bold tracking-[1px] uppercase mb-3"
                style={{ color: "#5b6377" }}
              >
                {category}
              </h3>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[14px] transition-colors hover:text-[#ff7a1a]"
                      style={{ color: "#9aa3b2" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <p className="text-[13px]" style={{ color: "#5b6377" }}>
            © 2026 BangPacinz. All rights reserved.
          </p>
          <p className="text-[12px]" style={{ color: "#5b6377" }}>
            Bukan afiliasi resmi Moonton/Mobile Legends.
          </p>
        </div>
      </div>
    </footer>
  )
}

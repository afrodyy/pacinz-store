"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Zap } from "lucide-react"
import { cn } from "@/lib/utils/cn"

const navLinks = [
  { href: "/topup-diamond", label: "Topup Diamond" },
  { href: "/jasa-joki", label: "Jasa Joki" },
  { href: "/mabar-vip", label: "Mabar VIP" },
  { href: "/cek-status", label: "Cek Status" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/faq", label: "FAQ" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full"
        style={{
          background: "rgba(11,13,18,.82)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <div className="max-w-[1180px] mx-auto px-[22px] h-16 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div
              className="w-8 h-8 rounded-[9px] flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #ff8a2b, #ff6a00)" }}
            >
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span
              className="text-[17px] font-bold tracking-tight"
              style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
            >
              Bang<span style={{ color: "#ff7a1a" }}>Pacinz</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-[13px] py-2 rounded-[9px] text-[14px] font-semibold transition-colors",
                  pathname === link.href
                    ? "text-[#ff7a1a] bg-[rgba(255,122,26,0.08)]"
                    : "text-[#9aa3b2] hover:text-[#eef1f6] hover:bg-[rgba(255,255,255,0.05)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/kontak"
              className="px-[13px] py-2 rounded-[11px] text-[14px] font-semibold text-[#eef1f6] transition-colors"
              style={{ border: "1px solid rgba(255,255,255,.16)", background: "rgba(255,255,255,.04)" }}
            >
              Bantuan
            </Link>
            <Link
              href="/topup-diamond"
              className="px-4 py-2 rounded-[13px] text-[14px] font-bold text-[#1a0d00] transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #ff8a2b, #ff6a00)" }}
            >
              Topup Sekarang
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-[42px] h-[42px] rounded-[11px] flex items-center justify-center transition-colors"
            style={{ border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-[#eef1f6]" />
            ) : (
              <Menu className="w-5 h-5 text-[#eef1f6]" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-30 md:hidden"
            style={{
              background: "rgba(11,13,18,.96)",
              backdropFilter: "blur(14px)",
              borderBottom: "1px solid rgba(255,255,255,.06)",
            }}
          >
            <nav className="max-w-[1180px] mx-auto px-[22px] py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-[11px] text-[15px] font-semibold transition-colors",
                    pathname === link.href
                      ? "text-[#ff7a1a] bg-[rgba(255,122,26,0.08)]"
                      : "text-[#9aa3b2] hover:text-[#eef1f6] hover:bg-[rgba(255,255,255,0.05)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
                <Link
                  href="/kontak"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-[11px] text-[15px] font-semibold text-[#eef1f6] text-center"
                  style={{ border: "1px solid rgba(255,255,255,.16)" }}
                >
                  Bantuan
                </Link>
                <Link
                  href="/topup-diamond"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-[13px] text-[15px] font-bold text-[#1a0d00] text-center"
                  style={{ background: "linear-gradient(135deg, #ff8a2b, #ff6a00)" }}
                >
                  Topup Sekarang
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Baca syarat dan ketentuan penggunaan layanan Bang Pacinz.",
}

const sections = [
  {
    title: "1. Penerimaan Syarat",
    content:
      "Dengan menggunakan layanan Bang Pacinz, kamu menyetujui syarat dan ketentuan ini. Jika tidak setuju, harap hentikan penggunaan layanan kami.",
  },
  {
    title: "2. Layanan yang Tersedia",
    content:
      "Bang Pacinz menyediakan layanan topup diamond Mobile Legends, jasa joki akun, dan mabar VIP. Semua layanan dikerjakan secara manual oleh tim profesional kami.",
  },
  {
    title: "3. Keamanan Akun",
    content:
      "Untuk layanan jasa joki, kamu memberikan akses sementara ke akun kamu. Kami bertanggung jawab menjaga keamanan data selama pengerjaan. Kami sangat menyarankan kamu mengganti password setelah layanan selesai.",
  },
  {
    title: "4. Pembayaran",
    content:
      "Semua pembayaran harus dilakukan terlebih dahulu sebelum layanan dimulai. Kami tidak bertanggung jawab atas kegagalan pembayaran yang disebabkan oleh pihak ketiga (bank, e-wallet).",
  },
  {
    title: "5. Garansi dan Refund",
    content:
      "Kami menjamin penyelesaian layanan sesuai yang dijanjikan. Jika terjadi kegagalan dari pihak kami, refund penuh atau pengulangan layanan akan diberikan. Refund tidak berlaku untuk kesalahan yang disebabkan oleh pengguna.",
  },
  {
    title: "6. Larangan",
    content:
      "Pengguna dilarang: menggunakan layanan untuk aktivitas ilegal, mencoba menipu atau memanipulasi sistem kami, berbagi data akun di luar keperluan layanan, dan mengklaim layanan kami sebagai afiliasi resmi Moonton.",
  },
  {
    title: "7. Hak Kekayaan Intelektual",
    content:
      "Bang Pacinz bukan afiliasi resmi Moonton atau Mobile Legends. Semua merek dagang terkait MLBB adalah milik Moonton. Kami tidak menggunakan aset berhak cipta dalam layanan kami.",
  },
  {
    title: "8. Perubahan Syarat",
    content:
      "Bang Pacinz berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diumumkan melalui media sosial kami. Penggunaan layanan setelah perubahan berarti kamu menyetujui syarat yang baru.",
  },
  {
    title: "9. Hubungi Kami",
    content:
      "Jika ada pertanyaan tentang syarat ini, hubungi kami via WhatsApp atau email di admin@bangpacinz.id.",
  },
]

export default function SyaratKetentuanPage() {
  return (
    <div className="min-h-screen px-[22px] py-16">
      <div className="max-w-[720px] mx-auto">
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-[6px] rounded-[100px] mb-4"
            style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)" }}
          >
            <span className="text-[12px] font-bold tracking-[1px] uppercase" style={{ color: "#9aa3b2" }}>Syarat & Ketentuan</span>
          </div>
          <h1
            className="text-[clamp(28px,4.4vw,46px)] font-bold tracking-tight mb-3"
            style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
          >
            Syarat & Ketentuan
          </h1>
          <p className="text-[14px]" style={{ color: "#5b6377" }}>
            Terakhir diperbarui: 19 Juni 2026
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2
                className="text-[18px] font-bold mb-2"
                style={{ fontFamily: "var(--font-sora)", color: "#eef1f6" }}
              >
                {sec.title}
              </h2>
              <p className="text-[15px] leading-relaxed" style={{ color: "#9aa3b2" }}>
                {sec.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

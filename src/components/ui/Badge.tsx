import { cn } from "@/lib/utils/cn"

type BadgeColor = "orange" | "purple" | "pink" | "green" | "default"

interface BadgeProps {
  color?: BadgeColor
  children: React.ReactNode
  className?: string
}

const colorStyles: Record<BadgeColor, React.CSSProperties> = {
  orange: { background: "rgba(255,122,26,.1)", color: "#ff9445", border: "1px solid rgba(255,122,26,.25)" },
  purple: { background: "rgba(155,92,255,.1)", color: "#b78bff", border: "1px solid rgba(155,92,255,.25)" },
  pink: { background: "rgba(255,77,141,.1)", color: "#ff79a9", border: "1px solid rgba(255,77,141,.25)" },
  green: { background: "rgba(65,224,125,.1)", color: "#41e07d", border: "1px solid rgba(65,224,125,.25)" },
  default: { background: "rgba(255,255,255,.06)", color: "#9aa3b2", border: "1px solid rgba(255,255,255,.1)" },
}

export default function Badge({ color = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 px-[13px] py-[6px] rounded-[100px] text-[12px] font-semibold", className)}
      style={colorStyles[color]}
    >
      {children}
    </span>
  )
}

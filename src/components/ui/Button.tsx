import { cn } from "@/lib/utils/cn"
import { forwardRef } from "react"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "linear-gradient(135deg, #ff8a2b, #ff6a00)",
    color: "#1a0d00",
    boxShadow: "0 8px 24px rgba(255,122,26,.32)",
  },
  secondary: {
    background: "rgba(155,92,255,.12)",
    color: "#b78bff",
    border: "1px solid rgba(155,92,255,.25)",
  },
  outline: {
    background: "rgba(255,255,255,.04)",
    color: "#eef1f6",
    border: "1px solid rgba(255,255,255,.16)",
  },
  ghost: {
    background: "transparent",
    color: "#9aa3b2",
  },
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-[13px] py-2 text-[13px]",
  md: "px-[22px] py-[13px] text-[15px]",
  lg: "px-7 py-[15px] text-[16px]",
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, disabled, className, children, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-bold rounded-[13px] transition-opacity cursor-pointer",
          "hover:opacity-90 active:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed",
          sizeClasses[size],
          className
        )}
        style={{ ...variantStyles[variant], ...style }}
        {...props}
      >
        {loading && (
          <span
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            style={{ animation: "bpSpin 0.6s linear infinite" }}
          />
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export default Button

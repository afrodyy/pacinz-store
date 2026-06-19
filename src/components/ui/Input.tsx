import { forwardRef } from "react"
import { cn } from "@/lib/utils/cn"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  accentColor?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, accentColor = "#ff7a1a", className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-")
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[13px] font-semibold"
            style={{ color: "#9aa3b2" }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-[14px] rounded-[12px] text-[15px] outline-none transition-colors",
            className
          )}
          style={{
            background: "#0d1017",
            border: error ? "1px solid #ff4d8d" : "1px solid rgba(255,255,255,.12)",
            color: "#eef1f6",
          }}
          onFocus={(e) => {
            e.currentTarget.style.border = `1px solid ${accentColor}`
          }}
          onBlur={(e) => {
            e.currentTarget.style.border = error ? "1px solid #ff4d8d" : "1px solid rgba(255,255,255,.12)"
          }}
          {...props}
        />
        {error && <p className="text-[12px]" style={{ color: "#ff4d8d" }}>{error}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"

export default Input

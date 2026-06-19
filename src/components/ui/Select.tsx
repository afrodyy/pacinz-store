import { forwardRef } from "react"
import { cn } from "@/lib/utils/cn"
import { ChevronDown } from "lucide-react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  accentColor?: string
  options: { value: string; label: string; disabled?: boolean }[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, accentColor = "#ff7a1a", options, placeholder, className, id, ...props }, ref) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-")
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={selectId} className="text-[13px] font-semibold" style={{ color: "#9aa3b2" }}>
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn("w-full px-4 py-[14px] pr-10 rounded-[12px] text-[15px] outline-none transition-colors cursor-pointer", className)}
            style={{
              background: "#0d1017",
              border: error ? "1px solid #ff4d8d" : "1px solid rgba(255,255,255,.12)",
              color: "#eef1f6",
              appearance: "none",
              WebkitAppearance: "none",
            }}
            onFocus={(e) => { e.currentTarget.style.border = `1px solid ${accentColor}` }}
            onBlur={(e) => { e.currentTarget.style.border = error ? "1px solid #ff4d8d" : "1px solid rgba(255,255,255,.12)" }}
            {...props}
          >
            {placeholder && (
              <option value="" disabled style={{ background: "#0d1017" }}>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled} style={{ background: "#0d1017" }}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
            style={{ color: "#6b7385" }}
          />
        </div>
        {error && <p className="text-[12px]" style={{ color: "#ff4d8d" }}>{error}</p>}
      </div>
    )
  }
)
Select.displayName = "Select"

export default Select

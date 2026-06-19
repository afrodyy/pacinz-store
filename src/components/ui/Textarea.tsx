import { forwardRef } from "react"
import { cn } from "@/lib/utils/cn"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  accentColor?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, accentColor = "#ff7a1a", className, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-")
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-[13px] font-semibold" style={{ color: "#9aa3b2" }}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn("w-full px-4 py-[14px] rounded-[12px] text-[15px] outline-none transition-colors resize-y min-h-[100px]", className)}
          style={{
            background: "#0d1017",
            border: error ? "1px solid #ff4d8d" : "1px solid rgba(255,255,255,.12)",
            color: "#eef1f6",
          }}
          onFocus={(e) => { e.currentTarget.style.border = `1px solid ${accentColor}` }}
          onBlur={(e) => { e.currentTarget.style.border = error ? "1px solid #ff4d8d" : "1px solid rgba(255,255,255,.12)" }}
          {...props}
        />
        {error && <p className="text-[12px]" style={{ color: "#ff4d8d" }}>{error}</p>}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export default Textarea

import { Check } from "lucide-react"
import { cn } from "@/lib/utils/cn"

interface StepperProps {
  steps: string[]
  currentStep: number
  accentColor?: string
}

export default function Stepper({ steps, currentStep, accentColor = "#ff7a1a" }: StepperProps) {
  return (
    <div className="flex items-center gap-0">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isActive = index === currentStep
        const stepNum = index + 1

        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "w-[30px] h-[30px] rounded-full flex items-center justify-center text-[13px] font-bold transition-all"
                )}
                style={
                  isCompleted
                    ? { background: accentColor, color: "#fff" }
                    : isActive
                    ? { background: `rgba(255,122,26,.15)`, border: `2px solid ${accentColor}`, color: accentColor }
                    : { background: "rgba(255,255,255,.06)", border: "2px solid rgba(255,255,255,.12)", color: "#5b6377" }
                }
              >
                {isCompleted ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : stepNum}
              </div>
              <span
                className="text-[11px] font-medium hidden sm:block text-center max-w-[80px] leading-tight"
                style={{ color: isActive ? "#eef1f6" : isCompleted ? "#9aa3b2" : "#5b6377" }}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className="flex-1 h-[2px] mx-2 mb-4 sm:mb-5 rounded-full transition-all"
                style={{
                  background: index < currentStep
                    ? accentColor
                    : "rgba(255,255,255,.08)",
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

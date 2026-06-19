"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Stepper from "@/components/ui/Stepper"
import TopupStep1 from "./Step1"
import TopupStep2 from "./Step2"
import TopupStep3 from "./Step3"
import TopupStep4 from "./Step4"
import type { TopupFormData } from "@/lib/types"

const STEPS = ["User ID", "Pilih Diamond", "Pembayaran", "Konfirmasi"]

export default function TopupForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<Partial<TopupFormData>>({})

  const nextStep = (partial: Partial<TopupFormData>) => {
    setData((prev) => ({ ...prev, ...partial }))
    setStep((s) => s + 1)
  }

  const prevStep = () => setStep((s) => s - 1)
  const reset = () => { setStep(0); setData({}) }

  return (
    <div className="w-full max-w-[560px] mx-auto">
      <div className="mb-8">
        <Stepper steps={STEPS} currentStep={step} accentColor="#ff7a1a" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.22 }}
        >
          {step === 0 && (
            <TopupStep1 defaultValues={data} onNext={(v) => nextStep(v)} />
          )}
          {step === 1 && (
            <TopupStep2 defaultValues={data} onNext={(v) => nextStep(v)} onBack={prevStep} />
          )}
          {step === 2 && (
            <TopupStep3 defaultValues={data} onNext={(v) => nextStep(v)} onBack={prevStep} />
          )}
          {step === 3 && (
            <TopupStep4 data={data as TopupFormData} onReset={reset} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

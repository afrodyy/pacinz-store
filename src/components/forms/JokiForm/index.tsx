"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Stepper from "@/components/ui/Stepper"
import JokiStep1 from "./Step1"
import JokiStep2 from "./Step2"
import JokiStep3 from "./Step3"
import type { JokiFormData } from "@/lib/types"

const STEPS = ["Pilih Rank", "Data Akun", "Konfirmasi"]

export default function JokiForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<Partial<JokiFormData>>({})

  const nextStep = (partial: Partial<JokiFormData>) => {
    setData((prev) => ({ ...prev, ...partial }))
    setStep((s) => s + 1)
  }
  const prevStep = () => setStep((s) => s - 1)
  const reset = () => { setStep(0); setData({}) }

  return (
    <div className="w-full max-w-[560px] mx-auto">
      <div className="mb-8">
        <Stepper steps={STEPS} currentStep={step} accentColor="#9b5cff" />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.22 }}
        >
          {step === 0 && <JokiStep1 defaultValues={data} onNext={(v) => nextStep(v)} />}
          {step === 1 && <JokiStep2 defaultValues={data} onNext={(v) => nextStep(v)} onBack={prevStep} />}
          {step === 2 && <JokiStep3 data={data as JokiFormData} onReset={reset} onBack={prevStep} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

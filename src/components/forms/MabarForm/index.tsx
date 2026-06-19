"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Stepper from "@/components/ui/Stepper"
import MabarStep1 from "./Step1"
import MabarStep2 from "./Step2"
import MabarStep3 from "./Step3"
import MabarStep4 from "./Step4"
import type { MabarFormData } from "@/lib/types"

const STEPS = ["Pilih Paket", "Pilih Coach", "Jadwal & ID", "Konfirmasi"]

export default function MabarForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<Partial<MabarFormData>>({})

  const nextStep = (partial: Partial<MabarFormData>) => {
    setData((prev) => ({ ...prev, ...partial }))
    setStep((s) => s + 1)
  }
  const prevStep = () => setStep((s) => s - 1)
  const reset = () => { setStep(0); setData({}) }

  return (
    <div className="w-full max-w-[620px] mx-auto">
      <div className="mb-8">
        <Stepper steps={STEPS} currentStep={step} accentColor="#ff4d8d" />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.22 }}
        >
          {step === 0 && <MabarStep1 defaultValues={data} onNext={(v) => nextStep(v)} />}
          {step === 1 && <MabarStep2 defaultValues={data} onNext={(v) => nextStep(v)} onBack={prevStep} />}
          {step === 2 && <MabarStep3 defaultValues={data} onNext={(v) => nextStep(v)} onBack={prevStep} />}
          {step === 3 && <MabarStep4 data={data as MabarFormData} onReset={reset} onBack={prevStep} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

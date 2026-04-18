"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { Footer } from "@/components/shared/footer"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      <main className="border-b border-[#1b4332]/10 bg-[linear-gradient(165deg,#faf8f4_0%,#eef4f0_48%,#f6f3ec_100%)] px-4 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-md rounded-[1.75rem] border border-[#1b4332]/10 bg-white/95 p-8 shadow-[0_24px_60px_rgba(27,67,50,0.08)] sm:p-10"
        >
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5a6f66] transition-colors hover:text-[#1b4332]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>

          {!isSubmitted ? (
            <>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8d7f5e]">Security</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#0f1f18]">Reset your password</h1>
              <p className="mt-3 text-sm leading-relaxed text-[#3d5349]">
                Enter the email on your account. We will send a reset link—check spam if nothing arrives in a few minutes.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0f1f18]">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5a6f66]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 border-[#1b4332]/15 pl-10"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="h-11 w-full rounded-full bg-[#1b4332] hover:bg-[#143728]" disabled={isLoading}>
                  {isLoading ? "Sending…" : "Send reset link"}
                </Button>
              </form>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#1b4332]/15 bg-[#eef4f1]">
                <CheckCircle className="h-8 w-8 text-[#1b4332]" />
              </div>
              <h1 className="text-2xl font-semibold tracking-[-0.03em] text-[#0f1f18]">Check your inbox</h1>
              <p className="mt-3 text-sm leading-relaxed text-[#3d5349]">
                We sent a reset link to <strong className="text-[#0f1f18]">{email}</strong>
              </p>
              <Button asChild variant="outline" className="mt-8 w-full rounded-full border-[#1b4332]/25">
                <Link href="/login">Back to login</Link>
              </Button>
              <p className="mt-6 text-sm text-[#5a6f66]">
                Didn&apos;t get it?{" "}
                <button type="button" onClick={() => setIsSubmitted(false)} className="font-semibold text-[#1b4332] hover:underline">
                  Try again
                </button>
              </p>
            </motion.div>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

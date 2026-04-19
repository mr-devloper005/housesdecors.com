'use client'

import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export function PageShell({
  title,
  description,
  eyebrow,
  actions,
  children,
}: {
  title: string
  description?: string
  /** Small caps label above the title (warm gold tone on cream) */
  eyebrow?: string
  actions?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      <main>
        <section className="border-b border-[#1b4332]/10 bg-[linear-gradient(165deg,#faf8f4_0%,#eef4f0_48%,#f6f3ec_100%)]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                {eyebrow ? (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8d7f5e]">{eyebrow}</p>
                ) : null}
                <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#0f1f18] sm:text-4xl">{title}</h1>
                {description ? (
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3d5349]">{description}</p>
                ) : null}
              </div>
              {actions ? <div className="flex flex-shrink-0 flex-wrap gap-3">{actions}</div> : null}
            </div>
          </div>
        </section>
        <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#1b4332]/15 to-transparent" aria-hidden />
          {children}
        </section>
      </main>
      <Footer />
    </div>
  )
}

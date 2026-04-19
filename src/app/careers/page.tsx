import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/site-config'

const roles = [
  {
    title: 'Senior visual editor',
    location: 'Remote (US / EU)',
    type: 'Full-time',
    level: 'Senior',
    blurb: 'Lead seasonal features, set photo standards, and mentor contributors on composition and narrative.',
  },
  {
    title: 'Product designer',
    location: 'Hybrid — NYC',
    type: 'Full-time',
    level: 'Mid',
    blurb: 'Shape gallery layouts, filters, and mobile flows with obsessive attention to rhythm and negative space.',
  },
  {
    title: 'Front-end engineer',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid / Senior',
    blurb: 'Ship performant image grids, accessibility, and tasteful motion—TypeScript, Next.js, Tailwind.',
  },
]

const benefits = [
  'Remote-friendly with two annual studio weeks for shoots',
  'Hardware stipend for color-accurate displays',
  'Health, dental, and vision where applicable',
  'Open PTO that respects launch crunches and rest',
]

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="Join us"
      title="Careers"
      description={`Help shape ${SITE_CONFIG.name} into the most trusted visual reference for interior lovers and pros alike.`}
      actions={
        <Button asChild className="rounded-full bg-[#1b4332] hover:bg-[#143728]">
          <Link href="/contact">Introduce yourself</Link>
        </Button>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          {roles.map((role) => (
            <Card
              key={role.title}
              className="rounded-[1.5rem] border-[#1b4332]/10 bg-white/95 shadow-[0_16px_48px_rgba(27,67,50,0.06)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <CardContent className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full border-0 bg-[#eef4f1] text-[11px] font-semibold uppercase tracking-wide text-[#1b4332]">{role.level}</Badge>
                  <Badge variant="outline" className="rounded-full border-[#1b4332]/20 text-[#3d5349]">
                    {role.type}
                  </Badge>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-[#0f1f18]">{role.title}</h2>
                <p className="mt-1 text-sm font-medium text-[#8d7f5e]">{role.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#3d5349]">{role.blurb}</p>
                <Button variant="outline" className="mt-5 rounded-full border-[#1b4332]/25" asChild>
                  <Link href="/contact">Discuss this role</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="h-fit rounded-[1.75rem] border-[#1b4332]/10 bg-[linear-gradient(180deg,#1b4332_0%,#143528_100%)] text-emerald-50 shadow-[0_24px_60px_rgba(27,67,50,0.25)]">
          <CardContent className="p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9b896]">Why join</p>
            <h3 className="mt-2 text-xl font-semibold text-white">We obsess over how rooms feel on glass.</h3>
            <p className="mt-3 text-sm leading-relaxed text-emerald-100/90">
              Small team, high craft bar, and a mandate to keep the product humane. If you love interiors and crisp product work, you will fit right in.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-emerald-50/95">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9b896]" aria-hidden />
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}

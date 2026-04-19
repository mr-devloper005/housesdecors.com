import Link from 'next/link'
import { Frame, Leaf, Sparkles } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { mockTeamMembers } from '@/data/mock-data'
import { SITE_CONFIG } from '@/lib/site-config'

const highlights = [
  { label: 'Images in the library', value: '18k+' },
  { label: 'Weekly mood boards', value: '120+' },
  { label: 'Countries represented', value: '42' },
]

const pillars = [
  {
    title: 'Imagery first',
    description: 'Layouts favor large photography, quiet type, and breathing room so palettes and textures read instantly.',
    icon: Frame,
  },
  {
    title: 'Grounded palette',
    description: 'Forest green on warm cream keeps the UI calm and editorial—never loud “template” chrome.',
    icon: Leaf,
  },
  {
    title: 'Made to save & share',
    description: 'Search, tags, and cards are tuned for collecting references you will actually reopen later.',
    icon: Sparkles,
  },
]

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Our story"
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is a gallery-led destination for interior inspiration: curated rooms, honest materials, and a browsing rhythm that respects your eye.`}
      actions={
        <>
          <Button variant="outline" asChild className="rounded-full border-[#1b4332]/20 bg-white/80">
            <Link href="/team">Meet the team</Link>
          </Button>
          <Button asChild className="rounded-full bg-[#1b4332] hover:bg-[#143728]">
            <Link href="/contact">Contact</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-hidden rounded-[1.75rem] border-[#1b4332]/10 bg-white/95 shadow-[0_22px_60px_rgba(27,67,50,0.07)]">
          <CardContent className="space-y-6 p-8">
            <Badge className="rounded-full border border-[#1b4332]/15 bg-[#eef4f1] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1b4332]">
              Why we exist
            </Badge>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#0f1f18] sm:text-3xl">
              A calmer corner of the internet for people who decorate for real life.
            </h2>
            <p className="text-sm leading-relaxed text-[#3d5349] sm:text-base">
              We built this site for homeowners, renters, and pros who collect visual references the way others collect playlists—snapshots of light, joinery, textiles, and paint
              that quietly stack into a vision for a space.
            </p>
            <p className="text-sm leading-relaxed text-[#3d5349] sm:text-base">
              Instead of noisy feeds or endless tabs, you get a focused gallery, thoughtful typography, and navigation that stays out of the photograph’s way.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#1b4332]/10 bg-gradient-to-b from-[#f6faf7] to-white p-4 text-center"
                >
                  <div className="text-2xl font-semibold text-[#1b4332]">{item.value}</div>
                  <div className="mt-1 text-xs font-medium text-[#5a6f66]">{item.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          {pillars.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="rounded-[1.5rem] border-[#1b4332]/10 bg-white/95 shadow-[0_14px_40px_rgba(27,67,50,0.05)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1b4332]/12 bg-[#eef4f1] text-[#1b4332]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0f1f18]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3d5349]">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8d7f5e]">People behind the pixels</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#0f1f18] sm:text-3xl">Small team, obsessive about craft</h2>
        <p className="mt-3 max-w-2xl text-sm text-[#3d5349]">Editors, photographers, and engineers who care how a room feels on screen—not just how many clicks it gets.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {mockTeamMembers.map((member) => (
            <Card
              key={member.id}
              className="rounded-[1.5rem] border-[#1b4332]/10 bg-white/95 shadow-[0_14px_40px_rgba(27,67,50,0.05)] transition-transform duration-200 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border border-[#1b4332]/10">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-[#0f1f18]">{member.name}</p>
                    <p className="text-xs text-[#5a6f66]">{member.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#3d5349]">{member.bio}</p>
                <p className="mt-3 text-xs font-medium text-[#8d7f5e]">{member.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}

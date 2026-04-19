import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  {
    title: 'Essential',
    body: 'Authentication, security, and load balancing. These keep you signed in and protect the gallery from abuse.',
  },
  {
    title: 'Preferences',
    body: 'Remember UI choices such as dismissed banners or filter defaults on your device.',
  },
  {
    title: 'Analytics (optional where offered)',
    body: 'Aggregated insight into which rooms or tags are trending—never sold, and used only to improve discovery.',
  },
]

export default function CookiesPage() {
  return (
    <PageShell
      eyebrow="Transparency"
      title="Cookie policy"
      description="A short breakdown of the cookies and local storage we use to keep the imagery experience smooth."
    >
      <Card className="rounded-[1.75rem] border-[#1b4332]/10 bg-white/95 shadow-[0_22px_55px_rgba(27,67,50,0.07)]">
        <CardContent className="space-y-6 p-8">
          <p className="text-xs font-medium text-[#5a6f66]">Last updated: April 18, 2026</p>
          <div className="grid gap-4 md:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-[#1b4332]/10 bg-gradient-to-b from-white to-[#f3faf6] p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8d7f5e]">{section.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3d5349]">{section.body}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  )
}

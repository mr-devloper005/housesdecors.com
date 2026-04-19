import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  {
    title: 'What we collect',
    body: 'Account details you provide (name, email), content you upload, basic usage signals that help us improve search and layout performance, and device/browser data typical for secure operation.',
  },
  {
    title: 'How we use it',
    body: 'To run the gallery, personalize what you see after sign-in, prevent abuse, fix bugs, and understand which areas of the site deserve more editorial care. We do not sell personal data.',
  },
  {
    title: 'Storage & control',
    body: 'Signed-in sessions may be stored locally in your browser for convenience. You can clear site data anytime, request export where applicable, or ask us to remove your account from operational systems.',
  },
  {
    title: 'Cookies',
    body: 'Essential cookies keep you logged in; optional analytics help us see aggregate traffic. You can manage preferences through your browser and our cookie policy page.',
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy policy"
      description="How we handle information on an imagery-focused site—and how you stay in control."
    >
      <Card className="rounded-[1.75rem] border-[#1b4332]/10 bg-white/95 shadow-[0_22px_55px_rgba(27,67,50,0.07)]">
        <CardContent className="space-y-6 p-8">
          <p className="text-xs font-medium text-[#5a6f66]">Last updated: April 18, 2026</p>
          <div className="grid gap-4 md:grid-cols-2">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-[#1b4332]/10 bg-gradient-to-b from-[#f9fcfa] to-white p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1b4332]">{section.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3d5349]">{section.body}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  )
}

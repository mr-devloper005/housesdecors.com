import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'Acceptable use',
    body: 'Treat the community with respect. No harassment, hate, or illegal content. Upload imagery you have rights to share; respect photographers’ and homeowners’ privacy.',
  },
  {
    title: 'Your content',
    body: 'You keep ownership of photos and text you publish. You grant us a limited license to host, display, compress, and promote that content on the platform and in related marketing.',
  },
  {
    title: 'Accounts & security',
    body: 'You are responsible for safeguarding credentials. Notify us if you suspect unauthorized access. We may suspend accounts that risk the integrity of the service.',
  },
  {
    title: 'Disclaimers',
    body: 'Inspiration posts are not professional advice (structural, electrical, or otherwise). Always verify with qualified pros before construction or purchasing decisions.',
  },
]

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of service"
      description={`The rules for using ${SITE_CONFIG.name}—built for a visual, community-led gallery.`}
    >
      <Card className="rounded-[1.75rem] border-[#1b4332]/10 bg-white/95 shadow-[0_22px_55px_rgba(27,67,50,0.07)]">
        <CardContent className="space-y-6 p-8">
          <p className="text-xs font-medium text-[#5a6f66]">Last updated: April 18, 2026</p>
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-[#1b4332]/10 bg-[#fafcf9] p-5">
                <h3 className="text-base font-semibold text-[#0f1f18]">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3d5349]">{section.body}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  )
}

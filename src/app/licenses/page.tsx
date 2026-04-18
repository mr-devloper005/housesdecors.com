import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const licenses = [
  { name: 'Next.js', description: 'MIT License — React framework & tooling.' },
  { name: 'React', description: 'MIT License — UI library.' },
  { name: 'Tailwind CSS', description: 'MIT License — utility-first styling.' },
  { name: 'Lucide', description: 'ISC License — icon set used across navigation and pages.' },
]

export default function LicensesPage() {
  return (
    <PageShell
      eyebrow="Open source"
      title="Licenses"
      description="We stand on excellent community projects. Here are the core libraries powering this build."
    >
      <Card className="rounded-[1.75rem] border-[#1b4332]/10 bg-white/95 shadow-[0_22px_55px_rgba(27,67,50,0.07)]">
        <CardContent className="grid gap-3 p-8 sm:grid-cols-2">
          {licenses.map((license) => (
            <div key={license.name} className="rounded-2xl border border-[#1b4332]/10 bg-[#fafcf9] p-5">
              <h3 className="text-sm font-semibold text-[#0f1f18]">{license.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3d5349]">{license.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  )
}

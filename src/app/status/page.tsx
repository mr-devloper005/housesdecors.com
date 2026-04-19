import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const services = [
  { name: 'Gallery & web app', detail: 'Browsing, uploads, accounts', status: 'Operational' },
  { name: 'Search & indexing', detail: 'Query + filter pipeline', status: 'Operational' },
  { name: 'Media delivery', detail: 'Image optimization CDN', status: 'Operational' },
]

const incidents = [
  { date: 'Apr 2, 2026', title: 'Elevated latency on image tiles (EU)', status: 'Resolved' },
  { date: 'Mar 18, 2026', title: 'Brief search indexing delay', status: 'Resolved' },
]

export default function StatusPage() {
  return (
    <PageShell
      eyebrow="Uptime"
      title="System status"
      description="Live view of the services that keep the decor gallery fast, searchable, and available."
    >
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.name}
              className="rounded-[1.5rem] border-[#1b4332]/10 bg-white/95 shadow-[0_14px_40px_rgba(27,67,50,0.05)]"
            >
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-[#0f1f18]">{service.name}</h2>
                <p className="mt-1 text-xs text-[#5a6f66]">{service.detail}</p>
                <Badge className="mt-4 rounded-full border-0 bg-[#d8e8e0] px-3 py-1 text-xs font-semibold text-[#0f241c]">{service.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="rounded-[1.75rem] border-[#1b4332]/10 bg-[linear-gradient(180deg,#1b4332_0%,#143528_100%)] text-emerald-50 shadow-[0_22px_55px_rgba(27,67,50,0.2)]">
          <CardContent className="p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9b896]">Incident log</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Recent events</h3>
            <div className="mt-6 space-y-3">
              {incidents.map((incident) => (
                <div key={incident.title} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs text-emerald-100/75">{incident.date}</div>
                  <div className="mt-1 text-sm font-medium text-white">{incident.title}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#c9b896]">{incident.status}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}

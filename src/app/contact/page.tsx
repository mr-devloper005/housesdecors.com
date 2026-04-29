import { Bookmark, Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

function getTone(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#f8fbff] text-slate-950',
      panel: 'border border-slate-200 bg-white',
      soft: 'border border-slate-200 bg-slate-50',
      muted: 'text-slate-600',
      action: 'bg-slate-950 text-white hover:bg-slate-800',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[#fbf6ee] text-[#241711]',
      panel: 'border border-[#dcc8b7] bg-[#fffdfa]',
      soft: 'border border-[#e6d6c8] bg-[#fff4e8]',
      muted: 'text-[#6e5547]',
      action: 'bg-[#241711] text-[#fff1e2] hover:bg-[#3a241b]',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[#f4f1ea] text-[#122821]',
      panel: 'border border-[#1b4332]/12 bg-white shadow-sm',
      soft: 'border border-[#1b4332]/10 bg-white/85',
      muted: 'text-[#3d5349]',
      action: 'bg-[#1b4332] text-white hover:bg-[#143728]',
    }
  }
  return {
    shell: 'bg-[#f7f1ea] text-[#261811]',
    panel: 'border border-[#ddcdbd] bg-[#fffaf4]',
    soft: 'border border-[#e8dbce] bg-[#f3e8db]',
    muted: 'text-[#71574a]',
    action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
  }
}

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
    process.env.CONTACT_EMAIL?.trim() ||
    'hello@housesdecors.com'
  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const tone = getTone(productKind)
  const lanes =
    productKind === 'directory'
      ? [
          { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify operational details, and bring your business surface live quickly.' },
          { icon: Phone, title: 'Partnership support', body: 'Talk through bulk publishing, local growth, and operational setup questions.' },
          { icon: MapPin, title: 'Coverage requests', body: 'Need a new geography or category lane? We can shape the directory around it.' },
        ]
      : productKind === 'editorial'
        ? [
            { icon: FileText, title: 'Editorial submissions', body: 'Pitch essays, columns, and long-form ideas that fit the publication.' },
            { icon: Mail, title: 'Newsletter partnerships', body: 'Coordinate sponsorships, collaborations, and issue-level campaigns.' },
            { icon: Sparkles, title: 'Contributor support', body: 'Get help with voice, formatting, and publication workflow questions.' },
          ]
        : productKind === 'visual'
          ? [
              { icon: ImageIcon, title: 'Gallery & editorial', body: 'Pitch a home tour, room reveal, or seasonal lookbook and we will reply with clear next steps.' },
              { icon: Sparkles, title: 'Licensing & partnerships', body: 'Commercial use, brand collaborations, and high-res asset requests for press or retail.' },
              { icon: Mail, title: 'Product & support', body: 'Accounts, uploads, search, or anything blocking your workflow on the site.' },
            ]
          : [
              { icon: Bookmark, title: 'Collection submissions', body: 'Suggest resources, boards, and links that deserve a place in the library.' },
              { icon: Mail, title: 'Resource partnerships', body: 'Coordinate curation projects, reference pages, and link programs.' },
              { icon: Sparkles, title: 'Curator support', body: 'Need help organizing shelves, collections, or profile-connected boards?' },
            ]

  return (
    <div className={`min-h-screen ${tone.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8d7f5e]">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#0f1f18] sm:text-5xl">Let's talk about imagery, spaces, and partnerships.</h1>
            <p className={`mt-5 max-w-2xl text-sm leading-8 sm:text-base ${tone.muted}`}>
              Share a short note about your project, stylist inquiry, press request, or technical help and we will get back with the right person on our side.
            </p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className={`rounded-[1.6rem] p-5 ${tone.soft}`}>
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                  <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-7 sm:p-8 ${tone.panel}`}>
            <h2 className="text-xl font-semibold text-[#0f1f18] sm:text-2xl">Send a message</h2>
            <p className={`mt-2 text-sm ${tone.muted}`}>We read every note with a real person on the other end.</p>
            <p className={`mt-3 text-sm ${tone.muted}`}>
              Prefer email? This address is managed from the environment file so it can be updated without changing the page code.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#1b4332] px-6 text-sm font-semibold text-[#1b4332] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1b4332]/5"
            >
              <Mail className="h-4 w-4" />
              {contactEmail}
            </a>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-[#1b4332]/15 bg-white px-4 text-sm text-[#0f1f18] placeholder:text-[#5a6f66]" placeholder="Your name" />
              <input className="h-12 rounded-xl border border-[#1b4332]/15 bg-white px-4 text-sm text-[#0f1f18] placeholder:text-[#5a6f66]" placeholder="Email address" type="email" />
              <input className="h-12 rounded-xl border border-[#1b4332]/15 bg-white px-4 text-sm text-[#0f1f18] placeholder:text-[#5a6f66]" placeholder="Topic (e.g. press, partnership, support)" />
              <textarea
                className="min-h-[180px] rounded-2xl border border-[#1b4332]/15 bg-white px-4 py-3 text-sm text-[#0f1f18] placeholder:text-[#5a6f66]"
                placeholder="Tell us about timelines, links to your work, or what you'd like to see on the gallery."
              />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${tone.action}`}>
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

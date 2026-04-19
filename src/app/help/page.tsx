import Link from 'next/link'
import { Camera, Image as ImageIcon, Search, UserCircle } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { mockFaqs } from '@/data/mock-data'

const guides = [
  {
    title: 'Start with the gallery',
    description: 'Learn how tiles, tags, and search work together so you can scan hundreds of rooms without fatigue.',
    icon: ImageIcon,
  },
  {
    title: 'Accounts & saves',
    description: 'Sign in once—your profile stays in this browser until you sign out. Perfect for mood boards on the go.',
    icon: UserCircle,
  },
  {
    title: 'Uploading imagery',
    description: 'Best dimensions, file types, and how we keep the feed fast without crushing detail in your photos.',
    icon: Camera,
  },
  {
    title: 'Search like a stylist',
    description: 'Combine keywords, rooms, and moods to narrow in on the references you need for your next project.',
    icon: Search,
  },
]

export default function HelpPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="Help center"
      description="Guides for browsing, saving, and publishing on our image-first interior platform."
      actions={
        <Button asChild className="rounded-full bg-[#1b4332] hover:bg-[#143728]">
          <Link href="/contact">Contact support</Link>
        </Button>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="rounded-[1.5rem] border-[#1b4332]/10 bg-white/95 shadow-[0_14px_40px_rgba(27,67,50,0.05)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1b4332]/12 bg-[#eef4f1] text-[#1b4332]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-[#0f1f18]">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#3d5349]">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="rounded-[1.75rem] border-[#1b4332]/10 bg-white/95 shadow-[0_22px_55px_rgba(27,67,50,0.07)]">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[#0f1f18]">Frequently asked</h3>
            <p className="mt-1 text-sm text-[#5a6f66]">Straight answers—no jargon wall.</p>
            <Accordion type="single" collapsible className="mt-6">
              {mockFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-[#1b4332]/10">
                  <AccordionTrigger className="text-left text-[#0f1f18] hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#3d5349]">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}

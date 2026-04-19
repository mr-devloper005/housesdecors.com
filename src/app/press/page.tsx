'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell
      eyebrow="Media"
      title="Press"
      description="Logos, product captures, and story angles for journalists and partners covering our interior gallery."
    >
      <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
        <Card className="rounded-[1.75rem] border-[#1b4332]/10 bg-white/95 shadow-[0_22px_55px_rgba(27,67,50,0.07)]">
          <CardContent className="space-y-5 p-8">
            <div>
              <h2 className="text-xl font-semibold text-[#0f1f18]">Press kit</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#3d5349]">
                Download lockups and UI captures in formats ready for print and digital. Need something bespoke? Email press@ from the contact page.
              </p>
            </div>
            <div className="grid gap-3">
              {mockPressAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="rounded-2xl border border-[#1b4332]/10 bg-gradient-to-r from-[#fafcf9] to-white px-4 py-4 sm:px-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#0f1f18]">{asset.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#5a6f66]">{asset.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="rounded-full border-0 bg-[#eef4f1] text-[11px] font-semibold text-[#1b4332]">{asset.fileType}</Badge>
                      <Button size="sm" variant="outline" className="rounded-full border-[#1b4332]/25" onClick={() => setActiveAssetId(asset.id)}>
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        className="rounded-full bg-[#1b4332] hover:bg-[#143728]"
                        onClick={() =>
                          toast({
                            title: 'Download started',
                            description: `${asset.title} is downloading.`,
                          })
                        }
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8d7f5e]">Coverage</p>
          {mockPressCoverage.map((item) => (
            <Card
              key={item.id}
              className="rounded-[1.5rem] border-[#1b4332]/10 bg-white/95 shadow-[0_14px_40px_rgba(27,67,50,0.05)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8d7f5e]">{item.outlet}</div>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#0f1f18]">{item.headline}</p>
                <p className="mt-2 text-xs text-[#5a6f66]">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl border-[#1b4332]/12">
          <DialogHeader>
            <DialogTitle className="text-[#0f1f18]">{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[#1b4332]/10 bg-muted">
              <Image src={activeAsset.previewUrl} alt={activeAsset.title} fill className="object-cover" />
            </div>
          )}
          <p className="text-sm leading-relaxed text-[#3d5349]">{activeAsset?.description}</p>
          <DialogFooter>
            <Button variant="outline" className="rounded-full border-[#1b4332]/25" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="rounded-full bg-[#1b4332] hover:bg-[#143728]"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}

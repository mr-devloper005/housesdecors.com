'use client'

import { motion } from 'framer-motion'
import { Image as ImageIcon, Heart, Layers, Users } from 'lucide-react'

const stats = [
  {
    icon: ImageIcon,
    value: '18K+',
    label: 'Gallery images',
    description: 'Rooms, details, and decor references'
  },
  {
    icon: Layers,
    value: '420+',
    label: 'Curated sets',
    description: 'Mood boards and style collections'
  },
  {
    icon: Heart,
    value: '32K+',
    label: 'Saves & likes',
    description: 'Ideas bookmarked by the community'
  },
  {
    icon: Users,
    value: '9K+',
    label: 'Contributors',
    description: 'Photographers and home stylists'
  }
]

export function StatsSection() {
  return (
    <section className="border-b border-border bg-secondary/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            The gallery in numbers
          </h2>
          <p className="mt-2 text-muted-foreground">
            A focused image community for interior inspiration
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <stat.icon className="h-7 w-7 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 font-medium text-foreground">{stat.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

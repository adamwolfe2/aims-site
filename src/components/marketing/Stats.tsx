"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const STATS = [
  {
    value: "10%",
    label: "SG&A Reduction",
    description: "National vending conglomerate",
  },
  {
    value: "41%",
    label: "Increase in AI Adoption",
    description: "$30M+ medical waste company",
  },
  {
    value: "21%",
    label: "Revenue Increase",
    description: "$10M Sales Center",
  },
]

export function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-secondary border-y border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-border">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center px-4 sm:px-8"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

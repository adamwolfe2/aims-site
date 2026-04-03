"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const PHASES = [
  {
    number: "1",
    name: "Operator Diagnostic\u2122",
    description:
      "Our Wild Duck audit team maps your workflows, interviews department leads, and delivers a prioritized AI roadmap with projected ROI for every opportunity identified. Fixed scope. Defined timeline.",
  },
  {
    number: "2",
    name: "Operator Enablement\u2122",
    description:
      "We deploy Operator Proven Agents into your highest-impact areas first \u2013 and ensure your team actually adopts them. Implementation plus enablement across your first department in a 90-day sprint.",
  },
  {
    number: "3",
    name: "Operator Transformation\u2122",
    description:
      "Full multi-department rollout with embedded operator presence. We install AI across your entire organization with the change management methodology that drove a 41% increase in AI adoption company-wide.",
  },
]

export function Engagement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <p className="eyebrow mb-3">The Engagement</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-snug max-w-xl">
            A phased system, not an open-ended consulting engagement
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="border border-border rounded-lg p-6 sm:p-7 bg-card card-hover"
            >
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-4">
                {phase.number}
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                {phase.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const STATS = [
  {
    target: 10,
    suffix: "%",
    label: "SG&A Reduction",
    description: "National vending conglomerate",
  },
  {
    target: 41,
    suffix: "%",
    label: "Increase in AI Adoption",
    description: "$30M+ medical waste company",
  },
  {
    target: 21,
    suffix: "%",
    label: "Revenue Increase",
    description: "$10M Sales Center",
  },
]

function CountUp({ target, suffix, running }: { target: number; suffix: string; running: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!running) return

    const duration = 1600
    const steps = 60
    const increment = target / steps
    const stepTime = duration / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      // Ease-out curve: fast start, slow finish
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      current = Math.round(eased * target)
      setCount(current)

      if (step >= steps) {
        setCount(target)
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [running, target])

  return <>{count}{suffix}</>
}

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
              <p className="text-4xl sm:text-5xl font-extrabold text-primary mb-2 tabular-nums">
                <CountUp target={stat.target} suffix={stat.suffix} running={inView} />
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

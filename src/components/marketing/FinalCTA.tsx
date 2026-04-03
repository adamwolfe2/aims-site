"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-dark-deep dot-grid-dark text-white"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3 text-crimson-light">Get Started</p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight"
        >
          Start with an Operator Diagnostic&trade;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-base sm:text-lg text-white/50 mb-10 max-w-xl mx-auto"
        >
          A fixed-scope AI audit delivered by the operators who built these systems
          for their own companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <Link
            href="/book"
            className="inline-flex items-center bg-primary text-primary-foreground text-sm font-bold px-10 py-4 uppercase tracking-wider rounded-sm hover:bg-crimson-dark transition-colors btn-lift"
          >
            Book a Strategy Call
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-sm text-white/25"
        >
          aimanagingservices.com
        </motion.p>
      </div>
    </section>
  )
}

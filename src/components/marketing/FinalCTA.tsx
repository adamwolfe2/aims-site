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
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-foreground text-background"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
        >
          Start with an Operator Diagnostic&trade;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-background/60 mb-10 max-w-xl mx-auto"
        >
          A fixed-scope AI audit delivered by the operators who built these systems
          for their own companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center bg-primary text-primary-foreground text-sm font-bold px-10 py-4 uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors btn-lift"
          >
            Book a Strategy Call
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm text-background/40"
        >
          aimanagingservices.com
        </motion.p>
      </div>
    </section>
  )
}

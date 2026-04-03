"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-6">
            AIMS AI Operator System&trade;
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground mb-6 sm:mb-8"
        >
          AI transformation built by operators who&rsquo;ve{" "}
          <span className="text-primary">done it in their own companies</span>
          {" "}&mdash; not consultants who theorize about it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 sm:mb-10 leading-relaxed"
        >
          AIMS installs a proven AI operating system inside your company, led by a team
          of business operators who deploy the same systems they use to run their own
          portfolio of companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center bg-primary text-primary-foreground text-sm font-bold px-8 py-3.5 uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors btn-lift"
          >
            Book a Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

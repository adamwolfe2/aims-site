"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative bg-dark pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(153,27,27,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-6 text-crimson-light">
            AIMS AI Operator System&trade;
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] text-white mb-8 sm:mb-10 max-w-4xl"
        >
          AI transformation built by operators who&rsquo;ve{" "}
          <span className="text-crimson-light">done it in their own companies</span>
          {" "}&mdash; not consultants who theorize about it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-white/55 max-w-2xl mb-10 sm:mb-12 leading-relaxed"
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
            className="inline-flex items-center bg-primary text-primary-foreground text-sm font-bold px-8 py-3.5 uppercase tracking-wider rounded-sm hover:bg-crimson-dark transition-colors btn-lift"
          >
            Book a Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

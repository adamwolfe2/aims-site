"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MEMBERS = [
  {
    number: "01",
    title: "Founder & CEO",
    description: "$30M EBITDA Company. Exit of multiple companies $50M+",
    ypo: true,
  },
  {
    number: "02",
    title: "Founder & Investor",
    description: "Gaming & Entertainment \u00B7 Multi-state Lottery Operations",
    ypo: true,
  },
  {
    number: "03",
    title: "Founder & Entrepreneur",
    description: "$80M+ exit \u00B7 Beverage & Transportation",
    ypo: true,
  },
  {
    number: "04",
    title: "Founder & Investor",
    description: "Urgent Care \u00B7 Hospital Systems \u00B7 Healthcare",
    ypo: false,
  },
  {
    number: "05",
    title: "President & Chairman",
    description: "Nonprofit Leadership \u00B7 Banking & Finance",
    ypo: false,
  },
  {
    number: "06",
    title: "Founder & Serial Entrepreneur",
    description: "Vending \u00B7 AI Services \u00B7 Coaching & Community",
    ypo: true,
  },
]

export function Consortium() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="eyebrow mb-3">The Operator Consortium</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Who&rsquo;s Behind AIMS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {MEMBERS.map((member, i) => (
            <motion.div
              key={member.number}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="border border-border rounded-lg p-5 text-center micro-card bg-card"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-4">
                {member.number}
              </div>
              <p className="eyebrow text-[0.55rem] sm:text-[0.6rem] mb-2 leading-tight min-h-[2rem] flex items-center justify-center">
                {member.title}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {member.description}
              </p>
              {member.ypo ? (
                <span className="inline-block bg-primary text-primary-foreground text-[0.55rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                  YPO Member
                </span>
              ) : (
                <div className="h-5" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

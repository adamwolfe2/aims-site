"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const MEMBERS = [
  {
    number: "01",
    name: "George Shanine",
    title: "Founder & CEO",
    description: "$30M EBITDA Company. Exit of multiple companies $50M+",
    headshot: "/headshots/george-shanine.jpg",
    ypo: true,
  },
  {
    number: "02",
    name: "Dan Fischer",
    title: "Founder & Investor",
    description: "Gaming & Entertainment \u00B7 Multi-state Lottery Operations",
    headshot: "/headshots/dan-fischer.jpg",
    ypo: true,
  },
  {
    number: "03",
    name: "Chuck Hare",
    title: "Founder & Entrepreneur",
    description: "$80M+ exit \u00B7 Beverage & Transportation",
    headshot: null,
    ypo: true,
  },
  {
    number: "04",
    name: "Dick Abraham",
    title: "Founder & Investor",
    description: "Urgent Care \u00B7 Hospital Systems \u00B7 Healthcare",
    headshot: "/headshots/dick-abraham.jpg",
    ypo: false,
  },
  {
    number: "05",
    name: "Paul Weinhold",
    title: "President & Chairman",
    description: "Nonprofit Leadership \u00B7 Banking & Finance",
    headshot: "/headshots/paul-weinhold.jpg",
    ypo: false,
  },
  {
    number: "06",
    name: "Mike Hoffmann",
    title: "Founder & Serial Entrepreneur",
    description: "Vending \u00B7 AI Services \u00B7 Coaching & Community",
    headshot: "/headshots/mike-hoffmann.jpg",
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
              {member.headshot ? (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-border">
                  <Image
                    src={member.headshot}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {member.number}
                </div>
              )}
              <p className="text-sm font-bold text-foreground mb-0.5">
                {member.name}
              </p>
              <p className="eyebrow text-[0.55rem] sm:text-[0.6rem] mb-2 leading-tight">
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

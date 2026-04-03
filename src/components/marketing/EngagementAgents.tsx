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
      "We deploy Operator Proven Agents into your highest-impact areas first \u2014 and ensure your team actually adopts them. Implementation plus enablement across your first department in a 90-day sprint.",
  },
  {
    number: "3",
    name: "Operator Transformation\u2122",
    description:
      "Full multi-department rollout with embedded operator presence. We install AI across your entire organization with the change management methodology that drove a 41% increase in AI adoption company-wide.",
  },
]

const AGENTS = [
  {
    category: "Executive Intelligence",
    name: "CEO 2.0",
    description:
      "Live reporting CEO dashboard plus an AI agent trained on executive knowledge \u2014 giving employees instant access to CEO-level insight without taking up the CEO\u2019s time.",
    result: null,
  },
  {
    category: "Sales Enablement",
    name: "Steel Trap",
    description:
      "Improves close rates, optimizes sales process, and accelerates revenue across your sales organization.",
    result: "21% revenue increase for a $10M Sales Center",
  },
  {
    category: "Operations",
    name: "EOS Agent",
    description:
      "Real-time SG&A tracking and accelerated execution for EOS-based companies. Rocks in days, not months.",
    result: "10% SG&A reduction for a national conglomerate",
  },
  {
    category: "Content Production",
    name: "Marketing Content Creator",
    description:
      "Deploys unified content flywheels across brands, aligning content strategy with product launches at scale.",
    result: "Deployed across 8 brands for multiple portfolio companies",
  },
  {
    category: "Customer Experience",
    name: "Voice Agent",
    description:
      "Autonomous inbound and outbound voice AI for customer-facing communication and service automation.",
    result: null,
  },
]

export function EngagementAgents() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x lg:divide-border">

          {/* Left: The Engagement */}
          <div className="lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow mb-3">The Engagement</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 leading-snug">
                A phased system &mdash; not an open-ended consulting engagement
              </h2>
            </motion.div>

            <div className="space-y-8">
              {PHASES.map((phase, i) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex gap-4 pb-8 border-b border-border last:border-b-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {phase.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Operator Proven Agents */}
          <div className="lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="eyebrow mb-3">Operator Proven Agents&trade;</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 leading-snug">
                Field-tested AI agents deployed in real companies
              </h2>
            </motion.div>

            <div className="space-y-6">
              {AGENTS.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="pb-6 border-b border-border last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-foreground/90 flex items-center justify-center mt-0.5">
                      <div className="w-3.5 h-3.5 rounded-sm bg-primary/80" />
                    </div>
                    <div>
                      <p className="eyebrow text-[0.6rem] mb-1">{agent.category}</p>
                      <h3 className="text-base font-bold text-foreground">
                        {agent.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed ml-11">
                    {agent.description}
                  </p>
                  {agent.result && (
                    <p className="text-sm text-foreground font-medium mt-2 ml-11">
                      <span className="text-primary">&bull;</span> {agent.result}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, TrendingUp, Settings, PenTool, Phone } from "lucide-react"

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
    icon: Brain,
    description:
      "Live reporting CEO dashboard plus an AI agent trained on executive knowledge \u2014 giving employees instant access to CEO-level insight without taking up the CEO\u2019s time.",
    result: null,
  },
  {
    category: "Sales Enablement",
    name: "Steel Trap",
    icon: TrendingUp,
    description:
      "Improves close rates, optimizes sales process, and accelerates revenue across your sales organization.",
    result: "21% revenue increase for a $10M Sales Center",
  },
  {
    category: "Operations",
    name: "EOS Agent",
    icon: Settings,
    description:
      "Real-time SG&A tracking and accelerated execution for EOS-based companies. Rocks in days, not months.",
    result: "10% SG&A reduction for a national conglomerate",
  },
  {
    category: "Content Production",
    name: "Marketing Content Creator",
    icon: PenTool,
    description:
      "Deploys unified content flywheels across brands, aligning content strategy with product launches at scale.",
    result: "Deployed across 8 brands for multiple portfolio companies",
  },
  {
    category: "Customer Experience",
    name: "Voice Agent",
    icon: Phone,
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-10 leading-snug">
                A phased system &mdash; not an open-ended consulting engagement
              </h2>
            </motion.div>

            <div className="space-y-0">
              {PHASES.map((phase, i) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex gap-4 py-6 border-b border-border last:border-b-0"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {phase.number}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-base font-bold text-foreground mb-1.5">
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-10 leading-snug">
                Field-tested AI agents deployed in real companies
              </h2>
            </motion.div>

            <div className="space-y-0">
              {AGENTS.map((agent, i) => {
                const Icon = agent.icon
                return (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="py-5 border-b border-border last:border-b-0"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#333] flex items-center justify-center mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="eyebrow text-[0.6rem] mb-0.5">{agent.category}</p>
                        <h3 className="text-base font-bold text-foreground">
                          {agent.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed ml-12">
                      {agent.description}
                    </p>
                    {agent.result && (
                      <p className="text-sm text-foreground font-medium mt-1.5 ml-12">
                        <span className="text-primary mr-1">&bull;</span>
                        {agent.result}
                      </p>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

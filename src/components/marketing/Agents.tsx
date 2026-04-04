"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, TrendingUp, Settings, PenTool, Phone } from "lucide-react"

// Top row: the 3 agents with results
const TOP_ROW = [
  {
    category: "Content Production",
    name: "Marketing Content Creator",
    icon: PenTool,
    description:
      "Deploys unified content flywheels across brands, aligning content strategy with product launches at scale.",
    result: "Deployed across 8 brands for multiple portfolio companies",
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
]

// Bottom row: 2 agents without results, centered
const BOTTOM_ROW = [
  {
    category: "Executive Intelligence",
    name: "CEO 2.0",
    icon: Brain,
    description:
      "Live reporting CEO dashboard plus an AI agent trained on executive knowledge \u2013 giving employees instant access to CEO-level insight without taking up the CEO\u2019s time.",
    result: null,
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

function AgentCard({ agent, index, inView }: { agent: typeof TOP_ROW[0] & { result: string | null }; index: number; inView: boolean }) {
  const Icon = agent.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
      className="bg-card border border-border rounded-lg p-6 card-hover"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center shadow-sm">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="eyebrow text-[0.6rem] mb-0.5">{agent.category}</p>
          <h3 className="text-base font-bold text-foreground leading-tight">
            {agent.name}
          </h3>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {agent.description}
      </p>
      {agent.result && (
        <p className="text-sm text-foreground font-medium mt-3 pt-3 border-t border-border">
          <span className="text-primary mr-1">&bull;</span>
          {agent.result}
        </p>
      )}
    </motion.div>
  )
}

export function Agents() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary border-y border-border">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <p className="eyebrow mb-3">Operator Proven Agents&trade;</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-snug max-w-lg">
            Field-tested AI agents deployed in real companies
          </h2>
        </motion.div>

        {/* Top row: 3 agents with results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">
          {TOP_ROW.map((agent, i) => (
            <AgentCard key={agent.name} agent={agent} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom row: 2 agents centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {BOTTOM_ROW.map((agent, i) => (
            <AgentCard key={agent.name} agent={agent} index={i + 3} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

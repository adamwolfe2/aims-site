"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any

    function initCal() {
      w.Cal("init", "aims", { origin: "https://app.cal.com" })

      w.Cal.ns.aims("inline", {
        elementOrSelector: "#my-cal-inline-aims",
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
          theme: "light",
        },
        calLink: "adamwolfe/aims",
      })

      w.Cal.ns.aims("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#981B1B" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      })
    }

    if (w.Cal) {
      initCal()
      return
    }

    // Bootstrap Cal.com embed loader
    w.Cal = function () {
      const cal = w.Cal
      if (!cal.q) cal.q = []
      cal.q.push(arguments)
    }
    w.Cal.q = []
    w.Cal.ns = {}
    w.Cal.loaded = false

    const script = document.createElement("script")
    script.src = "https://app.cal.com/embed/embed.js"
    script.async = true
    script.onload = () => initCal()
    document.head.appendChild(script)
    w.Cal.loaded = true
  }, [])

  return (
    <section
      ref={ref}
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="eyebrow mb-3">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 leading-tight">
            Start with an Operator Diagnostic&trade;
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            A fixed-scope AI audit delivered by the operators who built these systems
            for their own companies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border border-border rounded-lg overflow-hidden bg-card shadow-sm"
        >
          <div
            id="my-cal-inline-aims"
            style={{ width: "100%", height: "100%", minHeight: 500, overflow: "auto" }}
          />
        </motion.div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          aimanagingservices.com
        </p>
      </div>
    </section>
  )
}

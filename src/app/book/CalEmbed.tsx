"use client"

import { useEffect, useState } from "react"

export function CalEmbed() {
  const [loaded, setLoaded] = useState(false)

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

      setTimeout(() => setLoaded(true), 1500)
    }

    if (w.Cal && w.Cal.loaded) {
      initCal()
      return
    }

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
    script.onload = () => {
      w.Cal.loaded = true
      initCal()
    }
    document.head.appendChild(script)
  }, [])

  return (
    <>
      {!loaded && (
        <div className="p-6 sm:p-10 space-y-6 animate-pulse">
          <div className="flex items-center justify-between">
            <div className="h-5 w-32 bg-muted rounded" />
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-muted rounded" />
              <div className="h-8 w-8 bg-muted rounded" />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={`h-${i}`} className="h-4 w-full bg-muted rounded" />
            ))}
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={`d-${i}`} className="h-10 w-full bg-muted/60 rounded" />
            ))}
          </div>
        </div>
      )}
      <div
        id="my-cal-inline-aims"
        style={{ width: "100%", height: "100%", minHeight: loaded ? 550 : 0, overflow: "auto" }}
      />
    </>
  )
}

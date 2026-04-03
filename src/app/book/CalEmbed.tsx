"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export function CalEmbed() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params */
    const w = window as any
    if (w.__calBootstrapped) return
    w.__calBootstrapped = true

    // Exact Cal.com bootstrap from their official snippet
    ;(function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar) }
      C.Cal = C.Cal || function () {
        const cal = C.Cal
        const ar = arguments
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments) }
          const namespace = ar[1]
          api.q = api.q || []
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], ar)
            p(cal, ["initNamespace", namespace])
          } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
    })(w, "https://app.cal.com/embed/embed.js", "init")

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
      cssVarsPerTheme: { light: { "cal-brand": "#981B1B" } },
      hideEventTypeDetails: true,
      layout: "month_view",
    })
    /* eslint-enable */
  }, [])

  return (
    <>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={() => setTimeout(() => setLoaded(true), 1200)}
      />
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
        className={loaded ? "" : "h-0 overflow-hidden"}
        style={{ width: "100%" }}
      />
    </>
  )
}

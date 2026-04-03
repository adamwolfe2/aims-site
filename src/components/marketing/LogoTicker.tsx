"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const BRANDS = Array.from({ length: 14 }, (_, i) => ({
  src: `/brands/brand-${i + 1}.${i + 1 === 14 ? "png" : "avif"}`,
  alt: `Partner ${i + 1}`,
}))

export function LogoTicker() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 border-b border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60 mb-8 sm:mb-10">
          Trusted by operators across industries
        </p>

        {/* Ticker container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling track - triple content for seamless loop */}
          <div className="flex animate-ticker-seamless hover:[animation-play-state:paused]">
            {[0, 1, 2].map((set) => (
              <div key={set} className="flex shrink-0 items-center gap-12 sm:gap-16 px-6 sm:px-8">
                {BRANDS.map((brand, i) => (
                  <div
                    key={`${set}-${i}`}
                    className="flex-shrink-0 w-24 sm:w-32 h-10 sm:h-12 relative grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-out cursor-default"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      fill
                      className="object-contain"
                      sizes="128px"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

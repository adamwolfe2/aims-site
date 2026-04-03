"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 sm:h-18 items-center justify-between gap-4">

          {/* Logo + Tagline */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="AIMS"
              width={40}
              height={40}
              className="object-contain h-9 w-9 sm:h-10 sm:w-10"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-none">
                AIMS
              </span>
              <span className="eyebrow text-[0.55rem] sm:text-[0.6rem] leading-none mt-0.5">
                For Operators &middot; By Operators
              </span>
            </div>
          </Link>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center bg-primary text-primary-foreground text-xs font-bold px-5 py-2.5 uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors btn-lift"
          >
            Book a Strategy Call
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="sm:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="sm:hidden overflow-hidden bg-white border-b border-border"
          >
            <div className="px-4 py-4">
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-primary text-primary-foreground text-xs font-bold px-4 py-3 uppercase tracking-wider rounded-sm"
              >
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

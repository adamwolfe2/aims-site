import type { Metadata } from "next"
import { Navbar } from "@/components/marketing/Navbar"
import { Hero } from "@/components/marketing/Hero"
import { Stats } from "@/components/marketing/Stats"
import { EngagementAgents } from "@/components/marketing/EngagementAgents"
import { Consortium } from "@/components/marketing/Consortium"
import { FinalCTA } from "@/components/marketing/FinalCTA"
import { Footer } from "@/components/marketing/Footer"

export const metadata: Metadata = {
  title: "AIMS - AI Operator System | For Operators, By Operators",
  description:
    "AI transformation built by operators who've done it in their own companies — not consultants who theorize about it.",
  alternates: { canonical: "https://aimanagingservices.com" },
}

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AIMS",
  url: "https://aimanagingservices.com",
  logo: "https://aimanagingservices.com/logo.png",
  description:
    "AI transformation built by operators who deploy the same systems they use to run their own portfolio of companies.",
  sameAs: [
    "https://linkedin.com/company/aimanagingservices",
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <EngagementAgents />
        <Consortium />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

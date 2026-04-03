import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/marketing/Navbar"
import { Hero } from "@/components/marketing/Hero"
import { Footer } from "@/components/marketing/Footer"

const Stats = dynamic(
  () => import("@/components/marketing/Stats").then(m => ({ default: m.Stats })),
  { loading: () => <div className="py-20" /> }
)
const EngagementAgents = dynamic(
  () => import("@/components/marketing/EngagementAgents").then(m => ({ default: m.EngagementAgents })),
  { loading: () => <div className="py-20" /> }
)
const Consortium = dynamic(
  () => import("@/components/marketing/Consortium").then(m => ({ default: m.Consortium })),
  { loading: () => <div className="py-20" /> }
)
const FinalCTA = dynamic(
  () => import("@/components/marketing/FinalCTA").then(m => ({ default: m.FinalCTA })),
  { loading: () => <div className="py-20" /> }
)

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

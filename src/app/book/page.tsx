import type { Metadata } from "next"
import Link from "next/link"
import { CalEmbed } from "./CalEmbed"

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Schedule your Operator Diagnostic with AIMS. A fixed-scope AI audit delivered by operators who built these systems for their own companies.",
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors"
        >
          &larr; Back to Home
        </Link>

        <div className="text-center mb-10 sm:mb-14">
          <p className="eyebrow mb-3">Book a Strategy Call</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 leading-tight">
            Start with an Operator Diagnostic&trade;
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            A fixed-scope AI audit delivered by the operators who built these systems
            for their own companies.
          </p>
        </div>

        <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
          <CalEmbed />
        </div>
      </div>
    </div>
  )
}

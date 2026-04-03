import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-28">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: April 3, 2026
        </p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">1. Introduction</h2>
            <p>
              Modern Amenities LLC (&ldquo;AIMS,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              operates the website at aimanagingservices.com. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-foreground">Contact Information:</strong> Name, email address,
                phone number, and company name when you book a strategy call or contact us.
              </li>
              <li>
                <strong className="text-foreground">Usage Data:</strong> Information about how you
                interact with our website, including pages visited, time spent, and referring URLs.
              </li>
              <li>
                <strong className="text-foreground">Device Information:</strong> Browser type,
                operating system, and device identifiers collected automatically.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To schedule and facilitate strategy calls and consultations</li>
              <li>To communicate with you about our services</li>
              <li>To improve our website and service offerings</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">4. Third-Party Services</h2>
            <p>
              We use third-party services including Cal.com for scheduling and Vercel for website hosting.
              These services may collect information as described in their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information.
              However, no method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">6. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information
              by contacting us. We will respond to your request within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">8. Contact</h2>
            <p>
              For questions about this Privacy Policy, please contact us through the scheduling
              link on our website or visit aimanagingservices.com.
            </p>
          </section>
        </div>

        <p className="mt-12 pt-8 border-t border-border text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Modern Amenities LLC. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service",
}

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: April 3, 2026
        </p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website at aimanagingservices.com operated by Modern Amenities LLC
              (&ldquo;AIMS,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree
              to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">2. Services</h2>
            <p>
              AIMS provides AI consulting and implementation services for businesses. Our service
              engagements, including the Operator Diagnostic&trade;, Operator Enablement&trade;,
              and Operator Transformation&trade;, are subject to separate engagement agreements
              with specific terms, scope, and pricing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the
              property of Modern Amenities LLC and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works without our
              prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">4. Trademarks</h2>
            <p>
              AIMS, AIMS AI Operator System, Operator Diagnostic, Operator Enablement,
              Operator Transformation, and Operator Proven Agents are trademarks of
              Modern Amenities LLC. Use of these marks without authorization is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">5. Limitation of Liability</h2>
            <p>
              AIMS and its operators, founders, and affiliates shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from
              your use of the website or services. Our total liability shall not exceed the
              amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">6. Confidentiality</h2>
            <p>
              Information shared during engagements, including business operations, financial
              data, and strategic plans, is treated as confidential. Specific confidentiality
              terms are outlined in individual engagement agreements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws
              of the State of Florida, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of the
              website after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">9. Contact</h2>
            <p>
              For questions about these Terms, please contact us through the scheduling
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

import type { Metadata } from "next"
import { Inter, DM_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://aimanagingservices.com"),
  title: {
    default: "AIMS - AI Operator System | For Operators, By Operators",
    template: "%s | AIMS",
  },
  description:
    "AI transformation built by operators who've done it in their own companies — not consultants who theorize about it. AIMS installs a proven AI operating system inside your company.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aimanagingservices.com",
    siteName: "AIMS",
    title: "AIMS - AI Operator System | For Operators, By Operators",
    description:
      "AI transformation built by operators who've done it in their own companies. AIMS installs a proven AI operating system inside your company.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIMS - AI Operator System",
    description:
      "AI transformation built by operators who've done it in their own companies.",
  },
  icons: {
    icon: "/logo.png",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { Inter, Playfair_Display, DM_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "AIMS - AI Operator System | For Operators, By Operators",
  description:
    "AI transformation built by operators who've done it in their own companies — not consultants who theorize about it. AIMS installs a proven AI operating system inside your company.",
  metadataBase: new URL("https://aimanagingservices.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aimanagingservices.com",
    siteName: "AIMS",
    title: "AIMS - AI Operator System | For Operators, By Operators",
    description:
      "AI transformation built by operators who've done it in their own companies. AIMS installs a proven AI operating system inside your company.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIMS - AI Operator System",
    description:
      "AI transformation built by operators who've done it in their own companies.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dmMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

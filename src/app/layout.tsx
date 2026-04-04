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
    default: "AIMS - AI Operating Systems For Operators, By Operators",
    template: "%s | AIMS",
  },
  description:
    "AI transformation built by operators who've done it in their own companies not consultants who theorize about it. AIMS installs a proven AI operating system inside your company.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aimanagingservices.com",
    siteName: "AIMS",
    title: "AIMS - AI Operating Systems For Operators, By Operators",
    description:
      "AI transformation built by operators who've done it in their own companies. AIMS installs a proven AI operating system inside your company.",
    images: [{ url: "/og-image.png", width: 1400, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIMS - AI Operator System",
    description:
      "AI transformation built by operators who've done it in their own companies.",
    images: ["/og-image.png"],
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
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased grain">
        {children}
      </body>
    </html>
  )
}

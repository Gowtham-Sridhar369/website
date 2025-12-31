import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gowtham S | Full Stack Developer",
  description:
    "Portfolio of Gowtham S - Full Stack Developer specializing in MERN Stack and .NET. Building modern web applications.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning added to avoid hydration mismatch warnings caused by browser extensions
          (e.g. attributes injected by extensions such as cz-shortcut-listen). Prefer disabling the
          extension or reproducing in Incognito to find the root cause. */}
      <body suppressHydrationWarning className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

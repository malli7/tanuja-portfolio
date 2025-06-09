import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Venkata Tanuja Madireddy - Frontend Developer Portfolio",
  description:
    "Innovative Frontend Developer specializing in React.js, Next.js, and TypeScript. Building scalable web applications with modern technologies.",
  keywords: "Frontend Developer, React.js, Next.js, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Venkata Tanuja Madireddy" }],
  openGraph: {
    title: "Venkata Tanuja Madireddy - Frontend Developer",
    description: "Innovative Frontend Developer specializing in React.js, Next.js, and TypeScript",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

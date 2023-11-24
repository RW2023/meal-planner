import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: 'Meal Plannerizer',
  description: 'Ai Powered Meal Planner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

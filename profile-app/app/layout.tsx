import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashfaq Nabi | AI-Native Full Stack Builder',
  description: 'Premium gen-z coder portfolio. AI, SaaS, automation, and developer experiences.',
  keywords: 'developer, AI, SaaS, full-stack, portfolio, Next.js, React, Node.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-darker via-dark to-darker text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

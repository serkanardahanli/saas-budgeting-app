import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlowQi - Smart Budget Management',
  description: 'Manage your business finances efficiently with FlowQi',
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

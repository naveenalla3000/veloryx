import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import FloatingCall from '@/components/FloatingCall'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-plus-jakarta',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Veloryx Technologies - Architecting the Future of Enterprise IT',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${inter.variable} font-body-md text-body-md antialiased overflow-x-hidden min-h-screen relative flex flex-col`}
      >
        <div className="tech-grid fixed" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        {children}
        <FloatingCall />
      </body>
    </html>
  )
}

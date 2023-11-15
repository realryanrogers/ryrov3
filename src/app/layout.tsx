import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SiteHeader from './_header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RYRO.IO',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div id="main-container" className="main-container">
        <SiteHeader/>
        <div id="content" className="site-content">
            {children}   
        </div>
    </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BlogNavbar from './_components/blog-navbar'
import BlogFooter from './_components/blog-footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Accessibility blog | Homepage',
  description: 'This is an accessibility blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}, bg-white`}>
        <BlogNavbar />
        {children}
        <BlogFooter />
      </body>
    </html>
  )
}

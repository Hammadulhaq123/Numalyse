import Sidebar from '../components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Numalyse',
  description: 'Use Nuamlyse to solve complex numerical analysis problems!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}

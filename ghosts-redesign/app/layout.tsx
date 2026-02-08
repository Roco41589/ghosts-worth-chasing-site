import './globals.css'
import type { Metadata } from 'next'
import Footer from './components/Footer'
import Navigation from './components/Navigation'  

export const metadata: Metadata = {
  title: 'Ghosts Worth Chasing',
  description: 'An independent foundation supporting individuals in transition, mission-aligned organizations, and long-term institutional continuity.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
           <Navigation />
        
        <main>{children}</main>

<Footer />
   
      </body>
    </html>
  )
}

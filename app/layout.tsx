import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://durveshbhadgaonkar.vercel.app'),
  title: {
    default: 'Durvesh Bhadgaonkar | Full Stack Developer & Mobile App Developer',
    template: '%s | Durvesh Bhadgaonkar'
  },
  description: 'Portfolio of Durvesh Bhadgaonkar - Software Developer specializing in Full Stack Development, IoT, Mobile Development, and Cybersecurity. B.Tech IT student at VIT Mumbai with 9.67 SGPI. Cybersecurity intern at Secure Cyber Future Ltd. Smart India Hackathon 2023 Finalist. CCNA Certified. Exploring blockchain fundamentals.',
  keywords: [
    'Durvesh Bhadgaonkar',
    'Full Stack Developer',
    'Mobile App Developer',
    'IoT Developer',
    'Cybersecurity',
    'React Native Developer',
    'Node.js Developer',
    'Python Developer',
    'Java Developer',
    'Blockchain Learner',
    'VIT Mumbai',
    'Vidyalankar Institute of Technology',
    'Smart India Hackathon',
    'CCNA Certified',
    'Secure Cyber Future',
    'Solar Panel Optimization',
    'Blockchain Payment System',
    'Crop Disease Detection',
    'Burp Suite',
    'SQLMap',
    'TensorFlow',
    'ESP32',
    'React Native',
    'Mumbai Developer',
  ],
  authors: [{ name: 'Durvesh Bhadgaonkar', url: 'https://github.com/durvesh000' }],
  creator: 'Durvesh Bhadgaonkar',
  publisher: 'Durvesh Bhadgaonkar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://durveshbhadgaonkar.vercel.app',
    title: 'Durvesh Bhadgaonkar | Full Stack Developer & MERN Stack Expert',
    description: 'Software Developer specializing in Full Stack, Blockchain, IoT & Cybersecurity. VIT Mumbai student (SGPI 10.0). Smart India Hackathon Finalist. CCNA Certified. Building innovative solutions!',
    siteName: 'Durvesh Bhadgaonkar Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Durvesh Bhadgaonkar - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Durvesh Bhadgaonkar | Full Stack Developer',
    description: 'Full Stack | Blockchain | IoT | Cybersecurity | VIT Mumbai | SGPI 10.0 | Smart India Hackathon Finalist',
    creator: '@durvesh000',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here', // Add after Google Search Console verification
  },
  alternates: {
    canonical: 'https://durveshbhadgaonkar.vercel.app',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Durvesh Bhadgaonkar',
              url: 'https://durveshbhadgaonkar.vercel.app',
              image: 'https://durveshbhadgaonkar.vercel.app/profile.jpg',
              jobTitle: 'Software Developer',
              description: 'Full Stack Developer specializing in Blockchain, IoT, and Cybersecurity. VIT Mumbai B.Tech IT student with perfect SGPI 10.0',
              email: 'durveshbhadgaonkar19@gmail.com',
              telephone: '+91-80074-99567',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mumbai',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN',
              },
              alumniOf: [
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'Vidyalankar Institute of Technology',
                  location: 'Mumbai, Maharashtra',
                },
                {
                  '@type': 'EducationalOrganization',
                  name: 'Vidyalankar Polytechnic',
                  location: 'Mumbai, Maharashtra',
                },
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Secure Cyber Future Ltd',
                jobTitle: 'Cyber Security Research Intern (Former)',
              },
              knowsAbout: ['React Native', 'Node.js', 'Python', 'Java', 'Blockchain', 'Solidity', 'IoT', 'ESP32', 'TensorFlow', 'Cybersecurity', 'Burp Suite', 'SQLMap', 'Full Stack Development'],
              award: [
                'Smart India Hackathon 2023 Finalist',
                'Tantravihar State-Level Competition 2025 Winner',
                'Cisco Certified Network Associate (CCNA)',
                'HackBuild Google Hackathon Participant',
              ],
              sameAs: [
                'https://github.com/Durvesh-dev',
                'https://www.linkedin.com/in/durvesh-bhadgaonkar',
                'https://twitter.com/durvesh000',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

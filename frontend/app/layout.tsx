import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://rentalmotorsurabaya.com'),
    title: {
        default: 'Rental Motor Surabaya RMR 2 | Sewa Motor Luxury & Terpercaya',
        template: '%s | Rental Motor Surabaya RMR 2'
    },
    description: 'Sewa motor Surabaya premium 24 jam. Unit terawat, pelayanan VIP, antar jemput tepat waktu. Rating 4.8/5 Google Maps.',
    keywords: [
        'sewa motor surabaya',
        'rental motor surabaya',
        'sewa motor premium surabaya',
        'rental motor harian surabaya',
        'sewa motor mewah surabaya',
    ],
    authors: [{ name: 'Rental Motor Surabaya RMR 2' }],
    creator: 'Rental Motor Surabaya RMR 2',
    publisher: 'Rental Motor Surabaya RMR 2',
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'https://rentalmotorsurabaya.com',
        siteName: 'Rental Motor Surabaya RMR 2',
        title: 'Rental Motor Surabaya RMR 2 | Sewa Motor Luxury & Terpercaya',
        description: 'Sewa motor Surabaya premium 24 jam. Unit terawat, pelayanan VIP. Hubungi kami sekarang.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Rental Motor Surabaya RMR 2 Premium',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rental Motor Surabaya RMR 2 | Sewa Motor Luxury',
        description: 'Sewa motor Surabaya premium 24 jam. Unit terawat mulus like new.',
        images: ['/og-image.jpg'],
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
        google: 'your-google-verification-code',
    },
}

// Schema.org Local Business structured data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rentalmotorsurabaya.com',
    name: 'Rental Motor Surabaya RMR 2',
    description: 'Penyedia jasa sewa motor premium terpercaya di Surabaya',
    url: 'https://rentalmotorsurabaya.com',
    telephone: ['+6289518104096', '+6283830933338'],
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Kedung Tarukan Wetan No.2B',
        addressLocality: 'Surabaya',
        addressRegion: 'Jawa Timur',
        postalCode: '60132',
        addressCountry: 'ID',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: -7.2647,
        longitude: 112.7547,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150',
    },
    priceRange: '$$',
    image: '/og-image.jpg',
    sameAs: [
        'https://instagram.com/rentalmotorsurabaya_19',
        'https://tiktok.com/@rentalmotorsurabaya_19',
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#050505" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} ${playfair.variable} font-sans bg-dark-bg text-text-primary antialiased selection:bg-luxury-gold/30 selection:text-luxury-gold`}>
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    )
}

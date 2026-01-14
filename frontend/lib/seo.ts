import { Metadata } from 'next'

// Base URL for the website
export const BASE_URL = 'https://rentalmotorsurabaya.com'

// Common metadata defaults
export const defaultMetadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    authors: [{ name: 'Rental Motor Surabaya RMR 2' }],
    creator: 'Rental Motor Surabaya RMR 2',
    publisher: 'Rental Motor Surabaya RMR 2',
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
}

// Page-specific metadata generators
export function createPageMetadata(options: {
    title: string
    description: string
    keywords?: string[]
    path?: string
    ogImage?: string
}): Metadata {
    const { title, description, keywords, path = '', ogImage = '/og-image.jpg' } = options
    const url = `${BASE_URL}${path}`

    return {
        ...defaultMetadata,
        title,
        description,
        keywords: keywords || [],
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'website',
            locale: 'id_ID',
            url,
            siteName: 'Rental Motor Surabaya RMR 2',
            title,
            description,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

// Motor data for Product schema
export const motorsData = [
    {
        name: 'Honda Beat',
        category: 'Matic Standard',
        price: 80000,
        image: '/motors/beat.png',
    },
    {
        name: 'Honda Vario 125',
        category: 'Matic Standard',
        price: 90000,
        image: '/motors/vario.png',
    },
    {
        name: 'Yamaha NMAX',
        category: 'Matic Premium',
        price: 140000,
        image: '/motors/nmax.png',
    },
    {
        name: 'Honda PCX 160',
        category: 'Matic Premium',
        price: 150000,
        image: '/motors/pcx.png',
    },
    {
        name: 'Yamaha Lexi',
        category: 'Matic Premium',
        price: 100000,
        image: '/motors/lexi.png',
    },
    {
        name: 'Honda Scoopy',
        category: 'Stylish',
        price: 85000,
        image: '/motors/scoopy.png',
    },
    {
        name: 'Yamaha Gear',
        category: 'Stylish',
        price: 85000,
        image: '/motors/gear.png',
    },
    {
        name: 'Honda CRF 150',
        category: 'Sport/Trail',
        price: 200000,
        image: '/motors/crf150.png',
    },
]

// Structured Data Generators
export function generateProductListSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Daftar Motor Sewa di Surabaya',
        description: 'Koleksi motor sewa premium di Rental Motor Surabaya RMR 2',
        numberOfItems: motorsData.length,
        itemListElement: motorsData.map((motor, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Product',
                name: motor.name,
                description: `Sewa ${motor.name} - ${motor.category} di Surabaya`,
                image: `${BASE_URL}${motor.image}`,
                offers: {
                    '@type': 'Offer',
                    price: motor.price,
                    priceCurrency: 'IDR',
                    availability: 'https://schema.org/InStock',
                    priceValidUntil: '2026-12-31',
                },
                brand: {
                    '@type': 'Brand',
                    name: motor.name.split(' ')[0],
                },
            },
        })),
    }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }
}

export function generateHowToSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cara Sewa Motor di Surabaya',
        description: 'Panduan lengkap cara menyewa motor di Rental Motor Surabaya RMR 2',
        totalTime: 'PT15M',
        estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'IDR',
            value: '80000',
        },
        step: [
            {
                '@type': 'HowToStep',
                position: 1,
                name: 'Pilih Motor',
                text: 'Lihat daftar motor yang tersedia di website. Pilih motor yang sesuai dengan kebutuhan perjalanan Anda.',
            },
            {
                '@type': 'HowToStep',
                position: 2,
                name: 'Chat WhatsApp',
                text: 'Hubungi kami via WhatsApp untuk konfirmasi ketersediaan dan harga. Tim kami fast response!',
            },
            {
                '@type': 'HowToStep',
                position: 3,
                name: 'Kirim KTP',
                text: 'Kirim foto KTP sebagai jaminan identitas. Proses verifikasi cepat dan aman.',
            },
            {
                '@type': 'HowToStep',
                position: 4,
                name: 'Motor Diantar',
                text: 'Motor akan diantar ke lokasi Anda. Gratis untuk sewa minimal 3 hari di area Surabaya.',
            },
            {
                '@type': 'HowToStep',
                position: 5,
                name: 'Siap Jalan',
                text: 'Terima motor beserta helm dan jas hujan gratis. Nikmati perjalanan Anda di Surabaya!',
            },
        ],
    }
}

export function generateAggregateRatingSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': BASE_URL,
        name: 'Rental Motor Surabaya RMR 2',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            bestRating: '5',
            worstRating: '1',
            reviewCount: '150',
            ratingCount: '150',
        },
    }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}

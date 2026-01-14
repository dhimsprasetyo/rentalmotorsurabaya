import type { Metadata } from 'next'
import { createPageMetadata, generateAggregateRatingSchema, generateBreadcrumbSchema, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
    title: 'Testimoni Pelanggan | Rating 4.8/5 Google Maps | RMR 2 Surabaya',
    description: 'Baca ulasan 150+ pelanggan puas Rental Motor Surabaya RMR 2. Rating 4.8/5 di Google Maps. Testimoni asli dari wisatawan, mahasiswa, dan pekerja.',
    keywords: [
        'testimoni rental motor surabaya',
        'review sewa motor surabaya',
        'ulasan rmr 2 surabaya',
        'pengalaman sewa motor surabaya',
        'rating rental motor surabaya',
    ],
    path: '/testimoni',
})

// Review schema
const reviewSchema = {
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
    review: [
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Andi Pratama' },
            datePublished: '2026-01-01',
            reviewBody: 'Motor bersih dan terawat banget, helm lengkap 2 buah. Pelayanan ramah dan fast response.',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        },
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Sari Dewi' },
            datePublished: '2026-01-05',
            reviewBody: 'Sewa motor buat keliling Surabaya selama 3 hari. Prosesnya gampang banget.',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        },
        {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Budi Santoso' },
            datePublished: '2026-01-10',
            reviewBody: 'Harga terjangkau, motor bagus. Sudah langganan dari tahun lalu.',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        },
    ],
}

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: BASE_URL },
    { name: 'Testimoni', url: `${BASE_URL}/testimoni` },
])

export default function TestimoniLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    )
}

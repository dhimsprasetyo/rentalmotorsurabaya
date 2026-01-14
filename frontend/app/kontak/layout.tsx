import type { Metadata } from 'next'
import { createPageMetadata, generateFAQSchema, generateBreadcrumbSchema, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
    title: 'Hubungi Kami | WhatsApp 24 Jam | Rental Motor Surabaya RMR 2',
    description: 'Hubungi Rental Motor Surabaya RMR 2 via WhatsApp 089518104096. Lokasi di Gubeng, dekat Stasiun Surabaya. Layanan 24 jam, fast response!',
    keywords: [
        'kontak rental motor surabaya',
        'whatsapp sewa motor surabaya',
        'lokasi rental motor gubeng',
        'alamat rmr 2 surabaya',
        'telepon rental motor surabaya',
    ],
    path: '/kontak',
})

// FAQ Schema
const faqSchema = generateFAQSchema([
    {
        question: 'Bagaimana cara booking motor?',
        answer: 'Langsung chat WhatsApp kami, sebutkan tanggal dan motor yang diinginkan. Kami akan cek ketersediaan dan proses booking.',
    },
    {
        question: 'Apakah ada antar jemput?',
        answer: 'Ya! Gratis antar jemput untuk sewa minimal 3 hari di area Surabaya. Untuk sewa kurang dari 3 hari, ada biaya antar tambahan.',
    },
    {
        question: 'Apa saja yang perlu disiapkan?',
        answer: 'Cukup KTP dan SIM C aktif. Kami akan verifikasi via foto untuk keamanan bersama.',
    },
    {
        question: 'Apakah helm dan jas hujan gratis?',
        answer: 'Ya, semua sewa sudah termasuk 2 helm SNI dan jas hujan gratis.',
    },
])

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: BASE_URL },
    { name: 'Kontak', url: `${BASE_URL}/kontak` },
])

export default function KontakLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    )
}

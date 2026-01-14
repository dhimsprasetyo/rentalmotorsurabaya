import type { Metadata } from 'next'
import { createPageMetadata, generateHowToSchema, generateBreadcrumbSchema, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
    title: 'Cara Sewa Motor Surabaya | 5 Langkah Mudah | RMR 2',
    description: 'Panduan lengkap cara sewa motor di Surabaya. 5 langkah mudah: pilih motor, chat WhatsApp, kirim KTP, motor diantar, siap jalan! Proses cepat & aman.',
    keywords: [
        'cara sewa motor surabaya',
        'panduan rental motor surabaya',
        'syarat sewa motor surabaya',
        'prosedur rental motor',
        'langkah sewa motor surabaya',
    ],
    path: '/cara-sewa',
})

// HowTo Schema
const howToSchema = generateHowToSchema()

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: BASE_URL },
    { name: 'Cara Sewa', url: `${BASE_URL}/cara-sewa` },
])

export default function CaraSewaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    )
}

import type { Metadata } from 'next'
import { createPageMetadata, generateProductListSchema, generateBreadcrumbSchema, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
    title: 'Daftar Motor Sewa Surabaya | Honda PCX, NMAX, Vario | RMR 2',
    description: 'Pilih motor sewa di Surabaya: Honda Beat, Vario, PCX, Yamaha NMAX, Scoopy, dan lainnya. Unit terawat, harga mulai Rp 80.000/hari. Antar jemput gratis!',
    keywords: [
        'daftar motor sewa surabaya',
        'sewa honda pcx surabaya',
        'sewa nmax surabaya',
        'rental motor harian surabaya',
        'sewa vario surabaya',
        'sewa beat surabaya',
        'harga sewa motor surabaya',
    ],
    path: '/motor',
})

// Structured data for product listing
const productListSchema = generateProductListSchema()
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: BASE_URL },
    { name: 'Daftar Motor', url: `${BASE_URL}/motor` },
])

export default function MotorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    )
}

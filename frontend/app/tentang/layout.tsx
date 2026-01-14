import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
    title: 'Tentang Rental Motor Surabaya RMR 2 | Berdiri Sejak 2017',
    description: 'Kenali Rental Motor Surabaya RMR 2, penyedia jasa sewa motor terpercaya sejak 2017. Rating 4.8/5 Google Maps, 500+ pelanggan puas, 20+ unit motor premium.',
    keywords: [
        'tentang rental motor surabaya',
        'rental motor terpercaya surabaya',
        'rmr 2 surabaya',
        'sewa motor gubeng surabaya',
        'rental motor berpengalaman surabaya',
    ],
    path: '/tentang',
})

// Organization schema
const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Rental Motor Surabaya RMR 2',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    foundingDate: '2017',
    description: 'Penyedia jasa sewa motor premium terpercaya di Surabaya sejak 2017',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Kedung Tarukan Wetan No.2B',
        addressLocality: 'Surabaya',
        addressRegion: 'Jawa Timur',
        postalCode: '60132',
        addressCountry: 'ID',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+6289518104096',
        contactType: 'customer service',
        availableLanguage: ['Indonesian', 'English'],
    },
    sameAs: [
        'https://instagram.com/rentalmotorsurabaya_19',
        'https://tiktok.com/@rentalmotorsurabaya_19',
    ],
}

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Beranda', url: BASE_URL },
    { name: 'Tentang Kami', url: `${BASE_URL}/tentang` },
])

export default function TentangLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    )
}

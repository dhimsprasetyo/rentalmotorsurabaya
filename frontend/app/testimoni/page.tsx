'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import TestimonialCard from '@/components/TestimonialCard'

const testimonials = [
    {
        name: 'Andi Pratama',
        review: 'Motor bersih dan terawat banget, helm lengkap 2 buah. Pelayanan ramah dan fast response. Saya sewa 5 hari untuk keliling Surabaya, tidak ada masalah sama sekali. Recommended banget!',
        rating: 5,
        date: '2 minggu lalu',
    },
    {
        name: 'Sari Dewi',
        review: 'Sewa motor buat keliling Surabaya selama 3 hari. Prosesnya gampang banget, cuma foto KTP terus motor langsung diantar ke hotel. Tepat waktu dan motornya wangi.',
        rating: 5,
        date: '1 bulan lalu',
    },
    {
        name: 'Budi Santoso',
        review: 'Harga terjangkau, motor bagus. Sudah langganan dari tahun lalu setiap kali ke Surabaya. Pasti balik lagi! NMAX-nya sangat nyaman untuk touring.',
        rating: 5,
        date: '3 minggu lalu',
    },
    {
        name: 'Ratna Wijaya',
        review: 'Pertama kali sewa motor di Surabaya dan langsung dapat yang bagus. Gratis helm, jas hujan, dan masker. Sangat membantu untuk mobilitas selama bisnis trip.',
        rating: 5,
        date: '1 bulan lalu',
    },
    {
        name: 'Doni Setiawan',
        review: 'Sewa PCX untuk 1 minggu. Kondisi motor prima, BBM irit. Antar jemput gratis ke Gubeng. Komunikasi dengan admin sangat mudah via WhatsApp.',
        rating: 5,
        date: '2 bulan lalu',
    },
    {
        name: 'Maya Putri',
        review: 'Scoopy yang saya sewa bagus banget, warnanya cantik. Cocok untuk cewek yang mau explore Surabaya. Harga weekend juga masih worth it.',
        rating: 5,
        date: '3 minggu lalu',
    },
    {
        name: 'Rudi Hermawan',
        review: 'Service 24 jam beneran! Saya ada masalah jam 10 malam dan langsung dibantu. Thankful banget sama pelayanannya. Definitely will recommend to friends.',
        rating: 5,
        date: '1 bulan lalu',
    },
    {
        name: 'Fitri Handayani',
        review: 'Sewa motor untuk anak yang kuliah di Surabaya. Per bulan harganya sangat reasonable. Motor terawat dan anak saya senang pakainya.',
        rating: 4,
        date: '2 bulan lalu',
    },
    {
        name: 'Agus Prasetyo',
        review: 'Udah beberapa kali sewa di sini. Konsisten kualitasnya. Motor selalu bersih, full bensin, dan siap pakai. Mantap!',
        rating: 5,
        date: '1 minggu lalu',
    },
]

export default function TestimoniPage() {
    const totalReviews = testimonials.length
    const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / totalReviews).toFixed(1)

    return (
        <div className="min-h-screen pt-24 pb-16 bg-dark-bg">
            {/* Header */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 animated-gradient opacity-50" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Apa Kata <span className="gradient-text">Pelanggan</span>?
                        </h1>
                        <p className="text-lg text-text-secondary">
                            Ulasan dari pelanggan yang sudah menggunakan layanan kami.
                            Kepuasan Anda adalah prioritas kami.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Rating Summary */}
            <section className="py-8">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-xl mx-auto"
                    >
                        <div className="bg-dark-card border border-dark-border rounded-2xl p-8 text-center">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="w-10 h-10 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-5xl font-bold text-white mb-2">{averageRating}</p>
                            <p className="text-text-secondary">
                                dari <span className="text-white font-semibold">150+</span> ulasan di Google Maps
                            </p>
                            <div className="mt-6 flex items-center justify-center gap-8">
                                <div>
                                    <p className="text-2xl font-bold text-accent-green">98%</p>
                                    <p className="text-sm text-text-secondary">Pelanggan Puas</p>
                                </div>
                                <div className="w-px h-12 bg-dark-border" />
                                <div>
                                    <p className="text-2xl font-bold text-accent-orange">7+</p>
                                    <p className="text-sm text-text-secondary">Tahun Beroperasi</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Google Maps Link */}
            <section className="py-16 bg-dark-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Lihat Ulasan Lengkap
                        </h2>
                        <p className="text-text-secondary mb-8">
                            Cek sendiri ulasan lengkap pelanggan kami di Google Maps.
                            Kami transparan dan terbuka untuk feedback.
                        </p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            Buka di Google Maps
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

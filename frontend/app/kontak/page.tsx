'use client'

import { motion } from 'framer-motion'
import {
    MapPin,
    Phone,
    Clock,
    MessageCircle,
    Instagram,
    Mail,
    Navigation
} from 'lucide-react'

const contactInfo = [
    {
        icon: MapPin,
        title: 'Alamat',
        content: 'Jl. Kedung Tarukan Wetan No.2B, Mojo, Kec. Gubeng, Surabaya, Jawa Timur 60132',
        action: {
            label: 'Buka di Google Maps',
            href: 'https://maps.google.com/?q=Jl.+Kedung+Tarukan+Wetan+No.2B,+Mojo,+Gubeng,+Surabaya',
        },
    },
    {
        icon: Phone,
        title: 'WhatsApp',
        content: '+62 895-1810-4096 / 0838-3093-9338',
        action: {
            label: 'Chat WhatsApp',
            href: 'https://wa.me/6289518104096',
        },
    },
    {
        icon: Clock,
        title: 'Jam Operasional',
        content: '24 Jam (Fast Response 07.00–21.00 WIB)',
        action: null,
    },
    {
        icon: Instagram,
        title: 'Social Media',
        content: '@rentalmotorsurabaya_19',
        action: {
            label: 'Follow Instagram',
            href: 'https://instagram.com/rentalmotorsurabaya_19',
        },
    },
]

export default function KontakPage() {
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
                            Hubungi <span className="gradient-text">Kami</span>
                        </h1>
                        <p className="text-lg text-text-secondary">
                            Punya pertanyaan atau ingin booking motor? Hubungi kami melalui
                            WhatsApp atau kunjungi lokasi kami di Gubeng, Surabaya.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-12">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-card border border-dark-border rounded-2xl p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-6 h-6 text-accent-orange" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                                        <p className="text-text-secondary text-sm mb-4">{info.content}</p>
                                        {info.action && (
                                            <a
                                                href={info.action.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-accent-orange hover:text-accent-orange-hover font-medium text-sm transition-colors"
                                            >
                                                {info.action.label}
                                                <Navigation className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-12">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                            Lokasi <span className="gradient-text">Kami</span>
                        </h2>

                        <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden">
                            {/* Google Maps Embed */}
                            <div className="aspect-video w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5775!2d112.7547!3d-7.2647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTUnNTMuMCJTIDExMsKwNDUnMTYuOSJF!5e0!3m2!1sid!2sid!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Location Info */}
                            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-accent-orange" />
                                    <span className="text-text-secondary text-sm">
                                        Area Gubeng, dekat Stasiun Surabaya Gubeng
                                    </span>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Jl.+Kedung+Tarukan+Wetan+No.2B,+Mojo,+Gubeng,+Surabaya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary inline-flex items-center gap-2 text-sm"
                                >
                                    <Navigation className="w-4 h-4" />
                                    Petunjuk Arah
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Contact CTA */}
            <section className="py-16 bg-dark-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <MessageCircle className="w-16 h-16 mx-auto mb-6 text-accent-green" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Chat WhatsApp Langsung
                        </h2>
                        <p className="text-text-secondary mb-8">
                            Cara tercepat untuk menghubungi kami. Tanyakan ketersediaan motor,
                            harga, atau langsung booking sekarang!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/6289518104096?text=Halo,%20saya%20ingin%20sewa%20motor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
                            >
                                <MessageCircle className="w-5 h-5" />
                                +62 895-1810-4096
                            </a>
                            <a
                                href="https://wa.me/628383093338?text=Halo,%20saya%20ingin%20sewa%20motor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
                            >
                                <MessageCircle className="w-5 h-5" />
                                0838-3093-9338
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Pertanyaan <span className="gradient-text">Umum</span>
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    q: 'Bagaimana cara booking motor?',
                                    a: 'Langsung chat WhatsApp kami, sebutkan tanggal dan motor yang diinginkan. Kami akan cek ketersediaan dan proses booking.',
                                },
                                {
                                    q: 'Apakah ada antar jemput?',
                                    a: 'Ya! Gratis antar jemput untuk sewa minimal 3 hari di area Surabaya. Untuk sewa kurang dari 3 hari, ada biaya antar tambahan.',
                                },
                                {
                                    q: 'Apa saja yang perlu disiapkan?',
                                    a: 'Cukup KTP dan SIM C aktif. Kami akan verifikasi via foto untuk keamanan bersama.',
                                },
                                {
                                    q: 'Apakah helm dan jas hujan gratis?',
                                    a: 'Ya, semua sewa sudah termasuk 2 helm SNI dan jas hujan gratis.',
                                },
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-dark-card border border-dark-border rounded-xl p-6"
                                >
                                    <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                                    <p className="text-text-secondary text-sm">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

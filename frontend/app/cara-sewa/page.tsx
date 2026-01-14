'use client'

import { motion } from 'framer-motion'
import {
    MousePointer,
    MessageCircle,
    CreditCard,
    Truck,
    CheckCircle,
    ArrowRight
} from 'lucide-react'

const steps = [
    {
        number: '01',
        icon: MousePointer,
        title: 'Pilih Motor',
        description: 'Lihat daftar motor yang tersedia di website kami. Pilih motor yang sesuai dengan kebutuhan perjalanan Anda.',
        tips: 'Untuk perjalanan dalam kota, motor matic standard sudah cukup. Untuk touring, pilih motor premium seperti NMAX atau PCX.',
    },
    {
        number: '02',
        icon: MessageCircle,
        title: 'Chat WhatsApp',
        description: 'Hubungi kami via WhatsApp untuk konfirmasi ketersediaan dan harga. Tim kami fast response!',
        tips: 'Sebutkan tanggal mulai sewa, durasi, dan motor yang diinginkan agar kami bisa segera cek ketersediaan.',
    },
    {
        number: '03',
        icon: CreditCard,
        title: 'Kirim KTP',
        description: 'Kirim foto KTP sebagai jaminan identitas. Proses verifikasi cepat dan aman.',
        tips: 'Pastikan foto KTP jelas dan tidak blur. Data Anda aman dan hanya digunakan untuk keperluan sewa.',
    },
    {
        number: '04',
        icon: Truck,
        title: 'Motor Diantar',
        description: 'Motor akan diantar ke lokasi Anda (gratis untuk sewa minimal 3 hari di area Surabaya).',
        tips: 'Jika sewa kurang dari 3 hari, Anda bisa ambil motor di lokasi kami atau dengan biaya antar tambahan.',
    },
    {
        number: '05',
        icon: CheckCircle,
        title: 'Siap Jalan!',
        description: 'Terima motor beserta helm dan jas hujan gratis. Nikmati perjalanan Anda di Surabaya!',
        tips: 'Periksa kondisi motor bersama tim kami saat serah terima. Dokumentasikan jika ada kendala.',
    },
]

export default function CaraSewaPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-dark-bg">
            {/* Header */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 animated-gradient opacity-50" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Cara <span className="gradient-text">Sewa Motor</span>
                        </h1>
                        <p className="text-lg text-text-secondary">
                            Proses sewa motor yang mudah dan cepat. Hanya 5 langkah simpel,
                            motor siap menemani perjalanan Anda.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-[39px] top-[100px] w-0.5 h-[calc(100%-60px)] bg-gradient-to-b from-accent-orange to-dark-border hidden md:block" />
                                )}

                                <div className="flex gap-6 md:gap-8">
                                    {/* Step Number */}
                                    <div className="flex-shrink-0">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-20 h-20 bg-dark-card border-2 border-accent-orange rounded-2xl flex items-center justify-center relative"
                                        >
                                            <span className="text-2xl font-bold gradient-text">{step.number}</span>
                                            <div className="absolute -right-2 -bottom-2 w-10 h-10 bg-accent-orange/20 rounded-xl flex items-center justify-center">
                                                <step.icon className="w-5 h-5 text-accent-orange" />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-1 bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-text-secondary mb-4">
                                            {step.description}
                                        </p>
                                        <div className="p-4 bg-accent-orange/10 border border-accent-orange/20 rounded-xl">
                                            <p className="text-sm text-accent-orange">
                                                <span className="font-semibold">💡 Tips:</span> {step.tips}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-16 bg-dark-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Syarat <span className="gradient-text">Sewa Motor</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-dark-bg border border-dark-border rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-accent-orange/20 rounded-lg flex items-center justify-center">
                                        <span className="text-accent-orange text-sm">📋</span>
                                    </span>
                                    Dokumen Wajib
                                </h3>
                                <ul className="space-y-3">
                                    {['KTP asli (difoto untuk verifikasi)', 'SIM C aktif', 'Nomor HP aktif (WhatsApp)'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-text-secondary">
                                            <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-dark-bg border border-dark-border rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-accent-green/20 rounded-lg flex items-center justify-center">
                                        <span className="text-accent-green text-sm">🎁</span>
                                    </span>
                                    Fasilitas Gratis
                                </h3>
                                <ul className="space-y-3">
                                    {['Helm SNI (2 buah)', 'Jas hujan', 'Masker', 'Antar jemput (min. 3 hari)'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-text-secondary">
                                            <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Sudah Siap Sewa Motor?
                        </h2>
                        <p className="text-text-secondary mb-8">
                            Langsung chat WhatsApp kami sekarang. Tim kami siap membantu 24 jam!
                        </p>
                        <a
                            href="https://wa.me/6289518104096?text=Halo,%20saya%20ingin%20sewa%20motor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2 text-lg"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chat WhatsApp Sekarang
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

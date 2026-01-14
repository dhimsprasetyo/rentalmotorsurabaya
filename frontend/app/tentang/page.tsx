'use client'

import { motion } from 'framer-motion'
import {
    Calendar,
    Users,
    Award,
    Heart,
    Target,
    Sparkles
} from 'lucide-react'
import Image from 'next/image'

const values = [
    {
        icon: Heart,
        title: 'Kepuasan Pelanggan',
        description: 'Kami selalu mengutamakan kepuasan pelanggan dalam setiap layanan yang diberikan.',
    },
    {
        icon: Award,
        title: 'Kualitas Terjamin',
        description: 'Semua unit motor kami rawat dengan standar tinggi untuk kenyamanan Anda.',
    },
    {
        icon: Target,
        title: 'Profesional',
        description: 'Tim kami berpengalaman dan siap melayani dengan profesional 24 jam.',
    },
    {
        icon: Sparkles,
        title: 'Inovasi',
        description: 'Terus berinovasi untuk memberikan pengalaman sewa motor terbaik.',
    },
]

const milestones = [
    { year: '2017', event: 'Memulai bisnis rental motor dengan 5 unit' },
    { year: '2018', event: 'Berkembang menjadi 10 unit motor' },
    { year: '2019', event: 'Mencapai 100 pelanggan pertama' },
    { year: '2020', event: 'Bertahan dan beradaptasi di masa pandemi' },
    { year: '2021', event: 'Menambah kategori motor premium' },
    { year: '2022', event: 'Rating 4.8 di Google Maps' },
    { year: '2023', event: 'Ekspansi armada hingga 20+ unit' },
    { year: '2024', event: 'Melayani 500+ pelanggan aktif' },
]

export default function TentangPage() {
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
                            Tentang <span className="gradient-text">Kami</span>
                        </h1>
                        <p className="text-lg text-text-secondary">
                            Kenali lebih dekat Rental Motor Surabaya RMR 2,
                            partner perjalanan Anda di Kota Pahlawan.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full">
                                <Calendar className="w-4 h-4 text-accent-orange" />
                                <span className="text-sm text-text-secondary">Berdiri Sejak 2017</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Cerita <span className="gradient-text">RMR 2</span>
                            </h2>

                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    <span className="text-white font-semibold">Rental Motor Surabaya RMR 2</span> didirikan
                                    pada tahun 2017 dengan misi sederhana: menyediakan layanan sewa motor yang terpercaya,
                                    terjangkau, dan mudah diakses untuk semua orang di Surabaya.
                                </p>
                                <p>
                                    Berawal dari 5 unit motor dan garasi kecil di kawasan Gubeng, kami terus berkembang
                                    berkat kepercayaan pelanggan. Hari ini, kami bangga melayani wisatawan, mahasiswa,
                                    pekerja, dan siapa saja yang membutuhkan mobilitas di Surabaya.
                                </p>
                                <p>
                                    Dengan rating <span className="text-yellow-500 font-semibold">4.8/5</span> di Google Maps
                                    dan lebih dari <span className="text-white font-semibold">150+ ulasan positif</span>,
                                    kami berkomitmen untuk terus memberikan pelayanan terbaik.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-6">
                                <div>
                                    <p className="text-3xl font-bold gradient-text">7+</p>
                                    <p className="text-sm text-text-secondary">Tahun Pengalaman</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold gradient-text">20+</p>
                                    <p className="text-sm text-text-secondary">Unit Motor</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold gradient-text">500+</p>
                                    <p className="text-sm text-text-secondary">Pelanggan</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square bg-dark-card rounded-3xl overflow-hidden border border-dark-border relative">
                                {/* Placeholder for actual image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-accent-green/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 mx-auto mb-4 bg-accent-orange rounded-2xl flex items-center justify-center">
                                            <span className="text-4xl font-bold text-white">R</span>
                                        </div>
                                        <p className="text-2xl font-bold text-white">RMR 2</p>
                                        <p className="text-text-secondary">Rental Motor Surabaya</p>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute top-8 left-8 bg-dark-bg/80 backdrop-blur-sm border border-dark-border rounded-xl p-3">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-accent-orange" />
                                        <span className="text-sm text-white font-medium">Tim Profesional</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-8 right-8 bg-dark-bg/80 backdrop-blur-sm border border-dark-border rounded-xl p-3">
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-accent-green" />
                                        <span className="text-sm text-white font-medium">Terpercaya</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-dark-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Nilai-Nilai <span className="gradient-text">Kami</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Prinsip yang kami pegang teguh dalam melayani setiap pelanggan
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-bg border border-dark-border rounded-2xl p-6 text-center card-hover"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-accent-orange/10 rounded-2xl flex items-center justify-center">
                                    <value.icon className="w-8 h-8 text-accent-orange" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-text-secondary text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Perjalanan <span className="gradient-text">Kami</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Milestone penting dalam sejarah RMR 2
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-orange via-accent-green to-transparent md:-translate-x-1/2" />

                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex items-center gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent-orange rounded-full md:-translate-x-1/2 z-10" />

                                    {/* Content */}
                                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <span className="inline-block px-3 py-1 bg-accent-orange/20 text-accent-orange text-sm font-semibold rounded-full mb-2">
                                            {milestone.year}
                                        </span>
                                        <p className="text-text-secondary">{milestone.event}</p>
                                    </div>

                                    {/* Spacer for the other side */}
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

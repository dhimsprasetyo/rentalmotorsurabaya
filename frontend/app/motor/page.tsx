'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MotorCard from '@/components/MotorCard'
import FluidTabs, { motorCategoryTabs } from '@/components/FluidTabs'

// All Motors Data
const motors = [
    // Matic Standard
    {
        name: 'Honda Beat',
        category: 'matic-standard',
        categoryLabel: 'Matic Standard',
        image: '/motors/beat.png',
        features: ['Irit BBM', 'Nyaman dikendarai', 'Bagasi luas', 'Cocok untuk harian'],
    },
    {
        name: 'Honda Vario 125',
        category: 'matic-standard',
        categoryLabel: 'Matic Standard',
        image: '/motors/vario.png',
        features: ['Mesin 125cc', 'Akselerasi responsif', 'Desain sporty', 'ISS (Idling Stop System)'],
    },
    {
        name: 'Yamaha Mio',
        category: 'matic-standard',
        categoryLabel: 'Matic Standard',
        image: '/motors/mio.png',
        features: ['Ringan & lincah', 'Irit BBM', 'Mudah dikendarai', 'Cocok untuk pemula'],
    },
    // Matic Premium
    {
        name: 'Yamaha NMAX',
        category: 'matic-premium',
        categoryLabel: 'Matic Premium',
        image: '/motors/nmax.png',
        features: ['Mesin 155cc VVA', 'ABS', 'LCD Speedometer', 'Suspensi empuk'],
    },
    {
        name: 'Honda PCX',
        category: 'matic-premium',
        categoryLabel: 'Matic Premium',
        image: '/motors/pcx.png',
        features: ['Mesin 160cc', 'Smart Key', 'USB Charger', 'LED Lighting'],
    },
    {
        name: 'Yamaha Lexi',
        category: 'matic-premium',
        categoryLabel: 'Matic Premium',
        image: '/motors/lexi.png',
        features: ['Mesin 125cc VVA', 'Bagasi super luas', 'Desain modern', 'Cocok touring'],
    },
    // Stylish
    {
        name: 'Honda Scoopy',
        category: 'stylish',
        categoryLabel: 'Stylish',
        image: '/motors/scoopy.png',
        features: ['Desain retro modern', 'Nyaman dikendarai', 'Pilihan warna cantik', 'Cocok untuk wanita'],
    },
    {
        name: 'Yamaha Gear',
        category: 'stylish',
        categoryLabel: 'Stylish',
        image: '/motors/gear.png',
        features: ['Desain rugged', 'Ground clearance tinggi', 'Cocok segala medan', 'Tampilan gagah'],
    },
    // Sport/Trail
    {
        name: 'Honda CRF 150',
        category: 'sport-trail',
        categoryLabel: 'Sport/Trail',
        image: '/motors/crf150.png',
        features: ['Mesin 150cc', 'Suspensi trail', 'Off-road ready', 'Torsi besar'],
    },
]

export default function MotorPage() {
    const [activeCategory, setActiveCategory] = useState('all')

    const filteredMotors = activeCategory === 'all'
        ? motors
        : motors.filter(motor => motor.category === activeCategory)

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
                            Daftar <span className="gradient-text">Motor</span>
                        </h1>
                        <p className="text-lg text-text-secondary">
                            Pilih motor sesuai kebutuhan Anda. Semua unit terawat dengan baik,
                            siap menemani perjalanan Anda di Surabaya.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter - Fluid Tabs */}
            <section className="py-8 sticky top-20 z-30 bg-dark-bg/95 backdrop-blur-md border-b border-dark-border">
                <div className="container mx-auto px-4 lg:px-8">
                    <FluidTabs
                        tabs={motorCategoryTabs}
                        activeTab={activeCategory}
                        onTabChange={setActiveCategory}
                    />
                </div>
            </section>

            {/* Motors Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-6"
                    >
                        <p className="text-text-secondary">
                            Menampilkan <span className="text-white font-semibold">{filteredMotors.length}</span> motor
                        </p>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredMotors.map((motor, index) => (
                                <MotorCard
                                    key={motor.name}
                                    name={motor.name}
                                    category={motor.categoryLabel}
                                    image={motor.image}
                                    features={motor.features}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredMotors.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <p className="text-text-secondary">Tidak ada motor dalam kategori ini.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16 bg-dark-card">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Tidak Menemukan Motor yang Dicari?
                        </h2>
                        <p className="text-text-secondary mb-8">
                            Hubungi kami via WhatsApp untuk menanyakan ketersediaan motor lainnya.
                            Kami juga bisa bantu rekomendasikan motor sesuai kebutuhan Anda.
                        </p>
                        <a
                            href="https://wa.me/6289518104096?text=Halo,%20saya%20ingin%20tanya%20ketersediaan%20motor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Tanya Ketersediaan Motor
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

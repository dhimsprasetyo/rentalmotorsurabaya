'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    ArrowRight,
    Shield,
    Clock,
    Star,
    CheckCircle,
    MessageCircle,
    ChevronRight,
    Award,
    MapPin
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import MotorCard from '@/components/MotorCard'
import TestimonialCard from '@/components/TestimonialCard'
import Expandable from '@/components/Expandable'

// Expandable Carousel Images
const expandableItems = [
    { image: '/motors/pcx.png', title: 'Honda PCX 160' },
    { image: '/motors/nmax.png', title: 'Yamaha NMAX' },
    { image: '/motors/vario.png', title: 'Vario 160' },
    { image: '/motors/beat.png', title: 'Honda Beat' },
]

// Featured Motors Data
const featuredMotors = [
    {
        name: 'Honda PCX 160',
        category: 'Premium Scooter',
        image: '/motors/pcx.png',
        features: ['Smart Key', 'ABS System', 'Luxury Comfort'],
        price: 'Rp 150.000',
    },
    {
        name: 'Yamaha NMAX Connected',
        category: 'Maxi Series',
        image: '/motors/nmax.png',
        features: ['Y-Connect', 'Traction Control', 'Dual Channel ABS'],
        price: 'Rp 140.000',
    },
    {
        name: 'Vario 160',
        category: 'Sporty Matic',
        image: '/motors/vario.png',
        features: ['Keyless', 'Flat Deck', 'Powerful Engine'],
        price: 'Rp 100.000',
    },
    {
        name: 'Honda Beat Deluxe',
        category: 'City Cruiser',
        image: '/motors/beat.png',
        features: ['Fuel Efficient', 'Agile', 'Compact'],
        price: 'Rp 80.000',
    },
]

// Testimonials Data
const testimonials = [
    {
        name: 'Michael Wong',
        role: 'Business Traveler',
        review: 'Excellent service. The PCX was in pristine condition, like new. Delivery to my hotel was punctual. Highly recommended for professionals.',
        rating: 5,
        date: '2 Oct 2023',
    },
    {
        name: 'Sarah Jenkins',
        role: 'Tourist',
        review: 'Renting the NMAX made our Surabaya trip so much easier. The helmets were clean and odorless, which is rare. 5-star experience!',
        rating: 5,
        date: '15 Sep 2023',
    },
    {
        name: 'Budi Santoso',
        role: 'Local Resident',
        review: 'Langganan sewa di sini kalau motor lagi servis. Unit selalu bersih, admin fast response. Kualitasnya premium banget.',
        rating: 5,
        date: '1 week ago',
    },
]

// Highlights Data
const highlights = [
    {
        icon: Award,
        title: 'Premium Units',
        description: 'Armada terbaru dengan perawatan standar dealer resmi.',
    },
    {
        icon: Clock,
        title: '24/7 VIP Service',
        description: 'Layanan antar jemput prioritas kapanpun Anda butuhkan.',
    },
    {
        icon: Shield,
        title: 'Full Protection',
        description: 'Helm SNI bersih, jas hujan, dan asuransi perjalanan.',
    },
]

export default function HomePage() {
    const whatsappLink = 'https://wa.me/6289518104096?text=' +
        encodeURIComponent('Halo, saya tertarik untuk menyewa motor premium di RMR 2.')

    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 100])
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    return (
        <div ref={containerRef} className="relative overflow-hidden">
            {/* ========== HERO SECTION ========== */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-bg">
                {/* Cinematic Background */}
                <div className="absolute inset-0 z-0">
                    {/* Gradient Overlay for texture */}
                    <div className="absolute inset-0 bg-gradient-radial from-luxury-gold/5 via-transparent to-transparent opacity-30" />
                    <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-luxury-gold/5 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-luxury-gold-dim/5 rounded-full blur-[120px]" />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">
                    {/* Left - Typography */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-luxury-gold/30 rounded-full bg-luxury-gold/5 backdrop-blur-sm"
                        >
                            <Star className="w-3 h-3 text-luxury-gold fill-luxury-gold" />
                            <span className="text-xs uppercase tracking-widest text-luxury-gold font-medium"> #1 Premium Motorcycle Rental in Surabaya</span>
                        </motion.div>

                        <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] text-white">
                            Explore Surabaya <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold bg-[length:200%_auto] animate-shimmer">
                                In Style
                            </span>
                        </h1>

                        <p className="text-lg text-text-secondary font-light max-w-lg leading-relaxed border-l-2 border-luxury-gold/30 pl-6">
                            Nikmati kebebasan berkendara dengan armada premium kami.
                            Unit terawat, layanan VIP 24 jam, dan pengalaman sewa tanpa repot.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center gap-3 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Booking Via WhatsApp
                            </a>
                            <Link href="/motor" className="btn-secondary flex items-center gap-3 backdrop-blur-md">
                                Lihat Armada
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                            {[
                                { value: '500+', label: 'Happy Clients' },
                                { value: '24/7', label: 'Support' },
                                { value: '4.8', label: 'Google Rating' },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <p className="text-2xl font-serif font-bold text-white">{stat.value}</p>
                                    <p className="text-xs text-text-secondary uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Expandable Carousel */}
                    <motion.div
                        style={{ y: yHero, opacity: opacityHero }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="relative hidden lg:block w-full max-w-3xl"
                    >
                        <Expandable list={expandableItems} autoPlay={true} className="h-[550px]" />
                    </motion.div>
                </div>
            </section>

            {/* ========== HIGHLIGHTS SECTION ========== */}
            <section className="py-24 bg-dark-bg relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 border border-white/5 rounded-2xl hover:bg-white/5 hover:border-luxury-gold/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-luxury-gold group-hover:text-dark-bg transition-all duration-500">
                                    <item.icon className="w-6 h-6 text-luxury-gold group-hover:text-dark-bg transition-colors" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-luxury-gold transition-colors">{item.title}</h3>
                                <p className="text-text-secondary leading-relaxed font-light">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FEATURED FLEET ========== */}
            <section className="py-24 bg-[#080808] relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-luxury-gold uppercase tracking-widest text-sm font-bold">Our Collection</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">
                                Premium Fleet
                            </h2>
                        </div>
                        <Link
                            href="/motor"
                            className="group flex items-center gap-2 text-text-secondary hover:text-luxury-gold transition-colors"
                        >
                            View All Collection
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredMotors.map((motor, index) => (
                            <MotorCard key={index} {...motor} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== TESTIMONIALS ========== */}
            <section className="py-24 bg-dark-bg relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 blur-[100px]" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <Star className="w-8 h-8 text-luxury-gold mx-auto mb-4 fill-luxury-gold" />
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Clients Experience</h2>
                        <p className="text-text-secondary font-light">
                            Kepercayaan pelanggan adalah prioritas utama kami.
                            Simak pengalaman mereka menyewa motor di RMR 2.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={i} {...t} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA SECTION ========== */}
            <section className="py-32 relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-dark-card z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/90 to-transparent z-10" />
                    {/* You would ideally put a real image here */}
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-20">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                            Siap untuk Perjalanan <br />
                            <span className="text-luxury-gold">Istimewa Anda?</span>
                        </h2>
                        <p className="text-lg text-text-secondary font-light mb-10 max-w-xl">
                            Jangan biarkan transportasi menghambat mobilitas Anda.
                            Booking sekarang dan rasakan standar baru sewa motor di Surabaya.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex justify-center items-center gap-3 text-lg px-10 py-4"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Booking Sekarang
                            </a>
                            <Link
                                href="/kontak"
                                className="btn-secondary inline-flex justify-center items-center gap-3 text-lg px-10 py-4"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

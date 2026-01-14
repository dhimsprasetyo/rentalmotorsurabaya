'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Check } from 'lucide-react'
import Image from 'next/image'

interface MotorCardProps {
    name: string
    category: string
    image: string
    features: string[]
    price?: string
    index?: number
}

export default function MotorCard({ name, category, image, features, price, index = 0 }: MotorCardProps) {
    const whatsappMessage = encodeURIComponent(
        `Halo, saya ingin booking ${name} di RMR 2.`
    )
    const whatsappLink = `https://wa.me/6289518104096?text=${whatsappMessage}`

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative bg-[#121212] rounded-3xl overflow-hidden border border-white/5 hover:border-luxury-gold/50 transition-all duration-500"
        >
            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Image Container */}
            <div className="relative h-64 bg-gradient-to-br from-dark-bg to-[#1A1A1A] overflow-hidden p-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
                <Image
                    src={image}
                    alt={name}
                    width={240}
                    height={240}
                    className="object-contain group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700 ease-out drop-shadow-2xl"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 text-text-secondary text-[10px] uppercase tracking-widest rounded-full group-hover:border-luxury-gold/30 group-hover:text-luxury-gold transition-colors duration-500">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                        {name}
                    </h3>
                    {price && (
                        <div className="text-right">
                            <p className="text-xs text-text-secondary uppercase">Starts From</p>
                            <p className="text-luxury-gold font-bold">{price}<span className="text-xs font-normal text-text-secondary">/day</span></p>
                        </div>
                    )}
                </div>

                <div className="w-full h-px bg-white/5 my-4 group-hover:bg-luxury-gold/20 transition-colors duration-500" />

                {/* Features */}
                <ul className="space-y-3 mb-6">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-text-secondary text-sm font-light">
                            <div className="w-4 h-4 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                                <Check className="w-2.5 h-2.5 text-luxury-gold" />
                            </div>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-luxury-gold text-white hover:text-dark-bg border border-white/10 hover:border-luxury-gold rounded-xl transition-all duration-300 font-medium"
                >
                    <MessageCircle className="w-4 h-4" />
                    Book Now
                </a>
            </div>
        </motion.div>
    )
}

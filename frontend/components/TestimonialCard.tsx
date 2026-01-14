'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
    name: string
    role?: string
    review: string
    rating: number
    date: string
    index?: number
}

export default function TestimonialCard({ name, role, review, rating, date, index = 0 }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group bg-[#0A0A0A] p-8 border border-white/5 hover:border-luxury-gold/30 rounded-none relative transition-colors duration-500"
        >
            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-luxury-gold/20 group-hover:border-luxury-gold/80 transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-luxury-gold/20 group-hover:border-luxury-gold/80 transition-colors duration-500" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={`w-3 h-3 ${i < rating ? 'text-luxury-gold fill-luxury-gold' : 'text-zinc-800 fill-zinc-800'}`}
                    />
                ))}
            </div>

            {/* Review */}
            <div className="relative z-10 mb-8">
                <Quote className="w-8 h-8 text-white/5 absolute -top-4 -left-2 -z-10" />
                <p className="text-text-secondary font-serif italic text-lg leading-relaxed">
                    "{review}"
                </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">{name}</h4>
                    {role && <p className="text-luxury-gold text-xs mt-1">{role}</p>}
                </div>
                <span className="text-zinc-600 text-xs font-mono">{date}</span>
            </div>
        </motion.div>
    )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/motor', label: 'Koleksi Motor' }, // Changed text to sound more premium
    { href: '/cara-sewa', label: 'Cara Sewa' },
    { href: '/testimoni', label: 'Testimoni' },
    { href: '/tentang', label: 'Tentang Kami' },
    { href: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/5 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <nav className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand Logo - Minimalist Luxury */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-luxury-gold blur-[20px] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                            <div className="w-12 h-12 border border-luxury-gold/30 rounded-full flex items-center justify-center bg-dark-bg/50 backdrop-blur-sm group-hover:border-luxury-gold transition-colors duration-500">
                                <span className="text-luxury-gold font-serif font-bold text-2xl">R</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-xl text-white tracking-wide">RMR 2</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold">Premium Rental</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-text-secondary hover:text-luxury-gold transition-colors duration-300 uppercase tracking-widest relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full group-hover:left-0" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center">
                        <a
                            href="https://wa.me/6289518104096"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-6 py-2.5 overflow-hidden rounded-full bg-transparent border border-luxury-gold/30 transition-all duration-300 hover:border-luxury-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                        >
                            <div className="absolute inset-0 bg-luxury-gold/0 group-hover:bg-luxury-gold/10 transition-colors duration-300" />
                            <div className="relative flex items-center gap-2 text-luxury-gold text-sm font-medium tracking-wide uppercase">
                                <span>Booking VIP</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white hover:text-luxury-gold transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:hidden overflow-hidden bg-dark-bg/95 backdrop-blur-xl border-t border-white/5 mt-4"
                        >
                            <div className="py-6 space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block py-3 px-4 text-text-secondary hover:text-luxury-gold hover:bg-white/5 mx-2 rounded-lg transition-all font-serif text-lg"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="pt-6 px-4"
                                >
                                    <a
                                        href="https://wa.me/6289518104096"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-luxury-gold text-black font-bold py-4 rounded-lg hover:bg-luxury-gold-light transition-colors"
                                    >
                                        Booking Sekarang
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}

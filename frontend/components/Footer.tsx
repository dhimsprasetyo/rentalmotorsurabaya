import Link from 'next/link'
import { MapPin, Phone, Clock, Instagram } from 'lucide-react'

const footerLinks = {
    menu: [
        { href: '/', label: 'Beranda' },
        { href: '/motor', label: 'Koleksi Motor' },
        { href: '/cara-sewa', label: 'Prosedur Sewa' },
        { href: '/testimoni', label: 'Kisah Pelanggan' },
    ],
    layanan: [
        { label: 'Sewa Harian VIP' },
        { label: 'Sewa Mingguan' },
        { label: 'Sewa Bulanan' },
        { label: 'Premium Delivery' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-dark-card border-t border-dark-border relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 border border-luxury-gold/50 rounded-full flex items-center justify-center">
                                <span className="text-luxury-gold font-serif font-bold text-lg">R</span>
                            </div>
                            <div>
                                <span className="font-serif font-bold text-lg text-white block tracking-wide">RMR 2</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold">Surabaya</span>
                            </div>
                        </div>
                        <p className="text-text-secondary text-sm leading-7 font-light">
                            Menghadirkan pengalaman berkendara kelas atas di Surabaya.
                            Unit terawat dengan standar kebersihan tertinggi dan layanan pelanggan prioritas.
                        </p>
                        <div className="pt-2">
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-luxury-gold transition-colors"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Rating 4.8/5 on Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Navigation - Elegant Typography */}
                    <div>
                        <h3 className="font-serif text-lg text-white mb-8">Eksplorasi</h3>
                        <ul className="space-y-4">
                            {footerLinks.menu.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-text-secondary hover:text-luxury-gold hover:pl-2 transition-all duration-300 text-sm font-light"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-serif text-lg text-white mb-8">Layanan</h3>
                        <ul className="space-y-4">
                            {footerLinks.layanan.map((item, index) => (
                                <li key={index} className="text-text-secondary text-sm font-light">
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - Minimalist Icons */}
                    <div>
                        <h3 className="font-serif text-lg text-white mb-8">Personal Contact</h3>
                        <ul className="space-y-6">
                            <li className="group">
                                <a href="https://maps.google.com" target="_blank" className="flex items-start gap-4">
                                    <div className="p-2 mr-3 rounded-full bg-white/5 group-hover:bg-luxury-gold/10 transition-colors">
                                        <MapPin className="w-4 h-4 text-luxury-gold" />
                                    </div>
                                    <span className="text-text-secondary text-sm font-light leading-6 group-hover:text-white transition-colors">
                                        Jl. Kedung Tarukan Wetan No.2B,<br /> Gubeng, Surabaya 60132
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 mr-3 rounded-full bg-white/5 group-hover:bg-luxury-gold/10 transition-colors">
                                    <Phone className="w-4 h-4 text-luxury-gold" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+6289518104096" className="text-text-secondary text-sm font-light hover:text-luxury-gold transition-colors">
                                        +62 895-1810-4096
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 mr-3 rounded-full bg-white/5 group-hover:bg-luxury-gold/10 transition-colors">
                                    <Instagram className="w-4 h-4 text-luxury-gold" />
                                </div>
                                <a
                                    href="https://instagram.com/rentalmotorsurabaya_19"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary text-sm font-light hover:text-luxury-gold transition-colors"
                                >
                                    @rentalmotorsurabaya_19
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Minimalist */}
            <div className="border-t border-white/5 bg-black/20">
                <div className="container mx-auto px-4 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-secondary/60">
                        <p>© {new Date().getFullYear()} RMR 2 Surabaya. Premium Motorcycle Rental.</p>
                        <div className="flex items-center gap-8">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

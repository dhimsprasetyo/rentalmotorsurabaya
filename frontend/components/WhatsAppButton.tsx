'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
    const whatsappMessage = encodeURIComponent(
        'Halo, saya ingin tanya tentang sewa motor di Rental Motor Surabaya RMR 2'
    )
    const whatsappLink = `https://wa.me/6289518104096?text=${whatsappMessage}`

    return (
        <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Hubungi via WhatsApp"
        >
            {/* Pulse Ring */}
            <span className="absolute inset-0 rounded-full bg-green-500 whatsapp-pulse" />

            {/* Main Button */}
            <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 group-hover:pr-6">
                <MessageCircle className="w-6 h-6" />
                <span className="font-semibold hidden sm:inline">Chat WhatsApp</span>
            </div>

            {/* Tooltip for mobile */}
            <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark-card px-3 py-2 rounded-lg shadow-lg whitespace-nowrap hidden group-hover:block sm:hidden"
            >
                <span className="text-sm text-white">Chat WhatsApp</span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-dark-card" />
            </motion.div>
        </motion.a>
    )
}

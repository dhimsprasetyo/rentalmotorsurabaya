'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import WaveReveal from './WaveReveal'

// Utility function for classnames
function cn(...classes: (string | undefined | null | false | Record<string, boolean>)[]) {
    return classes
        .filter(Boolean)
        .map((c) => {
            if (typeof c === 'object' && c !== null) {
                return Object.entries(c)
                    .filter(([, v]) => v)
                    .map(([k]) => k)
                    .join(' ')
            }
            return c
        })
        .join(' ')
}

interface ImageProps {
    item: { image: string; title: string }
    index: number
    activeItem: number
    className?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

interface ExpandableProps {
    list?: { image: string; title: string }[]
    autoPlay?: boolean
    className?: string
}

const ListItem = ({ item, className, index, activeItem, onMouseEnter, onMouseLeave }: ImageProps) => {
    const isActive = index === activeItem

    return (
        <motion.div
            className={cn(
                'relative flex h-full cursor-pointer overflow-hidden rounded-2xl',
                'border border-white/10 hover:border-luxury-gold/30',
                'bg-gradient-to-b from-dark-card to-dark-bg',
                className
            )}
            layout
            initial={false}
            animate={{
                flex: isActive ? 4 : 1,
                filter: isActive ? 'brightness(1)' : 'brightness(0.5)',
            }}
            transition={{
                flex: {
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                    mass: 1
                },
                filter: { duration: 0.5, ease: "easeOut" }
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Vignette overlay */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                animate={{
                    background: isActive
                        ? 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.3) 40%, transparent 100%)'
                        : 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.2) 100%)'
                }}
                transition={{ duration: 0.5 }}
            />

            {/* Image */}
            <Image
                src={item.image}
                alt={item.title}
                fill
                className={cn(
                    'object-contain transition-all duration-700 ease-out p-4',
                    isActive ? 'scale-100' : 'scale-90 grayscale-[30%]'
                )}
                sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Gold border glow on active */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 border-2 border-luxury-gold/40 rounded-2xl z-20 pointer-events-none"
                        style={{
                            boxShadow: '0 0 25px rgba(212, 175, 55, 0.15), inset 0 0 20px rgba(212, 175, 55, 0.03)'
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Title - only show on active */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="absolute bottom-6 left-6 z-30 md:bottom-8 md:left-8"
                    >
                        <WaveReveal
                            duration="600ms"
                            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg"
                            text={item.title}
                            direction="up"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="text-luxury-gold text-xs mt-2 uppercase tracking-widest"
                        >
                            Premium Rental
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Index indicator for non-active items */}
            <AnimatePresence>
                {!isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center z-20"
                    >
                        <span className="text-white/40 font-serif text-sm font-medium">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

const defaultItems = [
    {
        image: '/motors/pcx.png',
        title: 'Honda PCX 160',
    },
    {
        image: '/motors/nmax.png',
        title: 'Yamaha NMAX',
    },
    {
        image: '/motors/vario.png',
        title: 'Vario 160',
    },
    {
        image: '/motors/beat.png',
        title: 'Honda Beat',
    },
]

export default function Expandable({
    list = defaultItems,
    autoPlay = true,
    className
}: ExpandableProps) {
    const [activeItem, setActiveItem] = useState(0)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        if (!autoPlay) {
            return
        }

        const interval = setInterval(() => {
            if (!isHovering) {
                setActiveItem((prev) => (prev + 1) % list.length)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [autoPlay, list.length, isHovering])

    return (
        <div className={cn('flex h-[500px] w-full gap-2', className)}>
            {list.map((item, index) => (
                <ListItem
                    key={item.title}
                    item={item}
                    index={index}
                    activeItem={activeItem}
                    onMouseEnter={() => {
                        setActiveItem(index)
                        setIsHovering(true)
                    }}
                    onMouseLeave={() => {
                        setIsHovering(false)
                    }}
                />
            ))}
        </div>
    )
}

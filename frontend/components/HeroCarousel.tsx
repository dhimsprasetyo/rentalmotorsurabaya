'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface HeroCarouselProps {
    images: {
        src: string
        alt: string
        title?: string
    }[]
    autoPlayInterval?: number
}

export default function HeroCarousel({ images, autoPlayInterval = 4000 }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            rotateY: direction > 0 ? 15 : -15,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            rotateY: direction < 0 ? 15 : -15,
        }),
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection)
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection
            if (nextIndex < 0) nextIndex = images.length - 1
            if (nextIndex >= images.length) nextIndex = 0
            return nextIndex
        })
    }, [images.length])

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1)
        }, autoPlayInterval)
        return () => clearInterval(timer)
    }, [paginate, autoPlayInterval])

    return (
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
            {/* Main Carousel Container */}
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                {/* Background glow that follows current image */}
                <motion.div
                    className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-[100px] -z-10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.4 },
                            scale: { duration: 0.4 },
                            rotateY: { duration: 0.4 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x)
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1)
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1)
                            }
                        }}
                        className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                    >
                        {/* Vignette Overlay - Creates cinematic spotlight effect */}
                        <div className="absolute inset-0 pointer-events-none z-10"
                            style={{
                                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.4) 70%, rgba(5,5,5,0.8) 100%)'
                            }}
                        />
                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            width={450}
                            height={450}
                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={() => paginate(-1)}
                    className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-dark-card/50 backdrop-blur-sm flex items-center justify-center text-white/50 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all duration-300 group"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-dark-card/50 backdrop-blur-sm flex items-center justify-center text-white/50 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all duration-300 group"
                    aria-label="Next"
                >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1)
                            setCurrentIndex(index)
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'w-8 bg-luxury-gold'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Image Title */}
            <AnimatePresence mode="wait">
                {images[currentIndex].title && (
                    <motion.p
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-sm text-text-secondary font-medium uppercase tracking-widest"
                    >
                        {images[currentIndex].title}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
}

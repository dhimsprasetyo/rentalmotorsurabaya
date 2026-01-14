'use client'

import { motion } from 'framer-motion'

interface WaveRevealProps {
    text: string
    direction?: 'up' | 'down'
    className?: string
    duration?: string
}

export default function WaveReveal({
    text,
    direction = 'up',
    className = '',
    duration = '500ms'
}: WaveRevealProps) {
    const words = text.split(' ')

    return (
        <div className={`flex flex-wrap gap-x-2 ${className}`}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="flex overflow-hidden">
                    {word.split('').map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            initial={{
                                y: direction === 'up' ? 40 : -40,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: parseInt(duration) / 1000,
                                delay: (wordIndex * word.length + charIndex) * 0.03,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </div>
    )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bike, Crown, Sparkles, Zap, LayoutGrid } from 'lucide-react'

interface Tab {
    id: string
    label: string
    icon: React.ReactNode
}

interface FluidTabsProps {
    tabs: Tab[]
    activeTab: string
    onTabChange: (tabId: string) => void
}

export default function FluidTabs({ tabs, activeTab, onTabChange }: FluidTabsProps) {
    const [touchedTab, setTouchedTab] = useState<string | null>(null)
    const [prevActiveTab, setPrevActiveTab] = useState(activeTab)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const handleTabClick = (tabId: string) => {
        setPrevActiveTab(activeTab)
        onTabChange(tabId)
        setTouchedTab(tabId)

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            setTouchedTab(null)
        }, 300)
    }

    const getTabIndex = (tabId: string) => tabs.findIndex((tab) => tab.id === tabId)

    return (
        <div className="flex items-center justify-center py-4">
            <div className="relative flex w-full max-w-3xl overflow-hidden rounded-full bg-dark-card/80 backdrop-blur-md p-1.5 border border-dark-border shadow-xl">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={activeTab}
                        className="absolute inset-y-0 my-1.5 rounded-full bg-gradient-to-r from-accent-orange to-accent-orange-hover"
                        initial={{ x: `${getTabIndex(prevActiveTab) * 100}%` }}
                        animate={{ x: `${getTabIndex(activeTab) * 100}%` }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{
                            width: `${100 / tabs.length}%`,
                            boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4)'
                        }}
                    />
                </AnimatePresence>
                {tabs.map((tab) => (
                    <motion.button
                        key={tab.id}
                        className={`relative z-10 flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                                ? 'text-white'
                                : 'text-text-secondary hover:text-white'
                            } ${touchedTab === tab.id ? 'blur-sm' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="flex-shrink-0">{tab.icon}</span>
                        <span className="hidden sm:inline whitespace-nowrap">{tab.label}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    )
}

// Pre-configured tabs for motor categories
export const motorCategoryTabs: Tab[] = [
    {
        id: 'all',
        label: 'Semua',
        icon: <LayoutGrid size={18} />,
    },
    {
        id: 'matic-standard',
        label: 'Matic Standard',
        icon: <Bike size={18} />,
    },
    {
        id: 'matic-premium',
        label: 'Matic Premium',
        icon: <Crown size={18} />,
    },
    {
        id: 'stylish',
        label: 'Stylish',
        icon: <Sparkles size={18} />,
    },
    {
        id: 'sport-trail',
        label: 'Sport/Trail',
        icon: <Zap size={18} />,
    },
]

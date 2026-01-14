import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Luxury Dark Theme
                dark: {
                    bg: '#050505',      // Deep Black
                    card: '#121212',    // Soft Black
                    border: '#2a2a2a',
                },
                // Luxury Accents
                luxury: {
                    gold: '#D4AF37',       // Classic Gold
                    'gold-light': '#F4DFB0', // Champagne Gold
                    'gold-dim': '#8A7129',   // Darker Gold for borders/shadows
                    silver: '#C0C0C0',     // Silver accent
                },
                // Text Colors
                text: {
                    primary: '#FFFFFF',
                    secondary: '#A1A1A1',
                    muted: '#666666',
                    gold: '#D4AF37',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                serif: ['var(--font-playfair)', 'serif'],
                display: ['var(--font-playfair)', 'serif'],
            },
            animation: {
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 3s ease-in-out infinite alternate',
                'fade-up': 'fadeUp 1s ease-out forwards',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)' },
                    '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'luxury-gradient': 'linear-gradient(135deg, #050505 0%, #121212 100%)',
                'gold-gradient': 'linear-gradient(to right, #D4AF37, #F4DFB0, #D4AF37)',
            },
        },
    },
    plugins: [],
}
export default config

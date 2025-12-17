/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF9',
        surface: '#FFFFFF',
        'text-primary': '#1C1917',
        'text-secondary': '#78716C',
        accent: '#B45309',
        'accent-hover': '#92400E',
        border: '#E7E5E4',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        body: ['18px', { lineHeight: '1.6' }],
        caption: ['16px', { lineHeight: '1.5' }],
        'section-heading': ['14px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'post-title-mobile': ['22px', { lineHeight: '1.3' }],
        'post-title': ['28px', { lineHeight: '1.3' }],
      },
      maxWidth: {
        reading: '65ch',
      },
    },
  },
  plugins: [],
};

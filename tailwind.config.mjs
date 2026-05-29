/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0a0a0a',
        ink: '#f5f1e8',
        muted: '#8a8278',
        gold: '#c9a961',
        gold_dim: '#8c7440',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest_2: '0.25em',
      },
      maxWidth: {
        prose_x: '68ch',
      },
    },
  },
  plugins: [],
};

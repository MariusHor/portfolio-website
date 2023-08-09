import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        accent: 'var(--color-accent-primary)',
        'accent-hover': 'var(--color-accent-hover)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        'primary-pale': 'var(--color-text-pale)',
      },
      borderColor: {
        accent: 'var(--color-accent-primary)',
      },
    },
  },
  plugins: [],
};
export default config;

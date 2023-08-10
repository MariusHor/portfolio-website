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
        primary: 'var(--color-bg)',
        accent: 'var(--color-accent-primary)',
        'accent-hover': 'var(--color-accent-hover)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        'primary-pale': 'var(--color-text-pale)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        accent: 'var(--color-accent-primary)',
      },
    },
  },
  plugins: [],
};
export default config;

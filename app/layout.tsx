import '@/styles/globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import config from '@/lib/config';
import Logo from '@/components/Logo';
import AnimatedCursorWrapper from './_components/AnimatedCursorWrapper';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: config.siteTitle,
  description: config.siteDescription,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="col-center">
          <Logo />
        </header>
        <main className="h-full">{children}</main>
        <footer></footer>
        <AnimatedCursorWrapper />
      </body>
    </html>
  );
}

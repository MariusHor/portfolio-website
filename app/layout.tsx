import '@/styles/globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import config from '@/lib/config';
import AnimatedCursorWrapper from '@/components/AnimatedCursorWrapper';
import DownloadResumeButton from '@/components/DownloadResumeButton';
import Logo from '@/components/Logo';

const montserrat = Montserrat({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: config.siteTitle,
  description: config.siteDescription,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header className="col-center py-8">
          <Logo />
        </header>
        <main className="grow col-center">{children}</main>
        <footer className="col-center py-8">
          <DownloadResumeButton />
        </footer>
        <AnimatedCursorWrapper />
      </body>
    </html>
  );
}

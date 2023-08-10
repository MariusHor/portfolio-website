import Link from 'next/link';
import type { ReactNode } from 'react';

interface SocialTileProps {
  children: ReactNode;
  href: string;
  title: string;
}

export default function SocialTile({ children, href, title }: SocialTileProps) {
  return (
    <div className="col-center gap-6">
      <Link
        href={href}
        className="relative  overflow-hidden border border-gray-700 p-8 col-center group peer"
        target="_blank"
      >
        <div className="blur-sm bg-accent w-full h-full absolute -z-10 opacity-60 group-hover:bg-accent-hover group-hover:blur-lg transition-primary"></div>
        {children}
      </Link>
      {/* <span className="hidden md:block select-none transition-secondary font-semibold opacity-0 peer-hover:opacity-100">
        {title}
      </span> */}
    </div>
  );
}

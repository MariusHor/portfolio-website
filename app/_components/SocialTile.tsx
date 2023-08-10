import Link from 'next/link';
import type { ReactNode } from 'react';

interface SocialTileProps {
  children: ReactNode;
  href: string;
  title: string;
  onHover: (content: string | null) => void;
}

export default function SocialTile({ children, href, title, onHover }: SocialTileProps) {
  return (
    <div className="col-center gap-6 ">
      <Link
        href={href}
        className="relative overflow-hidden border border-primary p-8 col-center group peer bg-primary hover:bg-inherit transition-primary"
        target="_blank"
        onMouseEnter={() => onHover(title)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="blur-sm bg-accent w-full h-full absolute -z-10 opacity-60 group-hover:bg-accent-hover group-hover:blur-lg transition-primary"></div>
        {children}
      </Link>
    </div>
  );
}

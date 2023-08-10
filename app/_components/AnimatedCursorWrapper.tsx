'use client';

import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

export default function AnimatedCursorWrapper() {
  return (
    <AnimatedCursor
      innerSize={40}
      outerSize={80}
      innerScale={1}
      outerScale={1.5}
      outerAlpha={1}
      showSystemCursor={true}
      innerStyle={{
        opacity: '0.1',
        zIndex: '-100',
        filter: 'blur(20px)',
        backgroundColor: 'var(--color-accent-secondary)',
      }}
      outerStyle={{
        zIndex: '-100',
        filter: 'blur(20px)',
        border: '3px solid var(--color-accent-secondary)',
        backgroundColor: 'var(--color-accent-secondary)',
        opacity: '0.1',
      }}
    />
  );
}

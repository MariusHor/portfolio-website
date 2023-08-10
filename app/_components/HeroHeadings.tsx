'use client';

import { motion } from 'framer-motion';

export default function HeroHeadings() {
  return (
    <div className="max-w-xl">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 75,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        className="heading-xl select-none"
      >
        Marius Horghidan
      </motion.h1>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 125,
          delay: 0.2,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        className="heading-md text-primary-pale flex items-end gap-2 select-none"
      >
        The Hub<span className="bg-accent rounded-full block w-4 h-4 blur-sm mb-1"></span>
      </motion.h2>
    </div>
  );
}

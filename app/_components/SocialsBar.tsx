'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import SocialTile from './SocialTile';

const socials = [
  {
    id: 0,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marius-horghidan/',
    icon: <LinkedInIcon sx={{ fontSize: '64px' }} />,
    ariaLabel: 'Visit LinkedIn profile',
  },
  {
    id: 1,
    title: 'Mail',
    href: 'mailto:marius.horghidan@yahoo.com',
    icon: <EmailIcon sx={{ fontSize: '64px' }} />,
    ariaLabel: 'Send an email',
  },
  {
    id: 2,
    title: 'GitHub',
    href: 'https://github.com/MariusHor',
    icon: <GitHubIcon sx={{ fontSize: '64px' }} />,
    ariaLabel: 'Visit GitHub profile',
  },

  {
    id: 3,
    title: 'Twitter',
    href: 'https://twitter.com/marius_hor',
    icon: <TwitterIcon sx={{ fontSize: '64px' }} />,
    ariaLabel: 'Visit Twitter profile',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      type: 'spring',
      stiffness: 125,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 2 },
  show: { opacity: 1, scale: 1 },
};

export default function SocialsBar() {
  const [hoveredItem, setHoveredItem] = useState<null | string>(null);

  console.log(hoveredItem);

  return (
    <div className="col-center gap-2 relative">
      <motion.ul
        className="row-center flex-wrap max-w-sm"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {socials.map(social => (
          <motion.li key={social.id} variants={item}>
            <SocialTile
              ariaLabel={social.ariaLabel}
              href={social.href}
              title={social.title}
              onHover={content => setHoveredItem(content)}
            >
              {social.icon}
            </SocialTile>
          </motion.li>
        ))}
      </motion.ul>
      <AnimatePresence>
        {hoveredItem && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              ease: [0.17, 0.67, 0.83, 0.67],
            }}
            className="absolute -bottom-10 sm:-bottom-20 heading-md--extrabold"
          >
            {hoveredItem}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

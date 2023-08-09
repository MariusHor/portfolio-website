'use client';

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
  },
  {
    id: 1,
    title: 'Mail',
    href: 'mailto:marius.horghidan@yahoo.com',
    icon: <EmailIcon sx={{ fontSize: '64px' }} />,
  },
  {
    id: 2,
    title: 'GitHub',
    href: 'https://github.com/MariusHor',
    icon: <GitHubIcon sx={{ fontSize: '64px' }} />,
  },

  {
    id: 3,
    title: 'Twitter',
    href: 'https://www.linkedin.com/in/marius-horghidan/',
    icon: <TwitterIcon sx={{ fontSize: '64px' }} />,
  },
];

export default function SocialsBar() {
  return (
    <ul className="row-center flex-wrap">
      {socials.map(social => (
        <SocialTile href={social.href} title={social.title} key={social.id}>
          {social.icon}
        </SocialTile>
      ))}
    </ul>
  );
}

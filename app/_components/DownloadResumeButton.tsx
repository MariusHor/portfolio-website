'use client';

import { motion } from 'framer-motion';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function DownloadResumeButton() {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      href="/marius-horghidan-frontend-developer-resume-en.pdf"
      download="marius-horghidan-frontend-developer-resume-en"
      target="_blank"
      rel="noreferrer"
      className="p-4 border border-accent hover:bg-accent-hover rounded-md transition-primary row-center gap-2 shadow-md shadow-gray-700"
    >
      CV
      <CloudDownloadIcon />
    </motion.a>
  );
}

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function DownloadResumeButton() {
  return (
    <a
      href="/marius-horghidan-frontend-developer-resume-en.pdf"
      download="marius-horghidan-frontend-developer-resume-en"
      target="_blank"
      rel="noreferrer"
      className="p-4 bg-accent hover:bg-accent-hover rounded-md transition-primary row-center gap-4"
    >
      Resume
      <CloudDownloadIcon />
    </a>
  );
}

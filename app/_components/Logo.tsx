import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'}>
      <span className="logo">M</span>
    </Link>
  );
}

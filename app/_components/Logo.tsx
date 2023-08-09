import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'} className="my-4">
      <span className="logo">M</span>
    </Link>
  );
}

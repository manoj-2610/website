import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex justify-center gap-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
      </nav>
    </header>
  );
}

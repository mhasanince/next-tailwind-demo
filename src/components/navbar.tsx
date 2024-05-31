import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gray-100">
      <nav className="container py-3">
        <ul className="flex gap-8 items-center justify-center text-xl font-medium">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/movies" className="hover:underline">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

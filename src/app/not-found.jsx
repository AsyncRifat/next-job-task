'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathName = usePathname();
  return (
    <div className="text-center mt-10 space-y-2">
      <h2 className="text-red-400 animate-pulse text-3xl font-bold">
        Not Found : {pathName}
      </h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="bg-cyan-500 text-black px-3 py-1 rounded-md">
        Return Home
      </Link>
    </div>
  );
}

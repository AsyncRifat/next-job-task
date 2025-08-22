// Navbar.js - Navigation bar with links to login and products
import Link from 'next/link'; // Import Link for navigation

export default function Navbar() {
  return (
    <nav className="bg-cyan-600 text-white p-4 shadow-md sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Job Task App
        </Link>
        {/* Navigation links */}
        <div className="space-x-4">
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

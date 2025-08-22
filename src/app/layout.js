'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import { SessionProvider } from 'next-auth/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// export const metadata = {
//   title: 'Job Task App',
//   description:
//     'A simple Next.js app with authentication and product management',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="min-h-screen">
          <SessionProvider>{children}</SessionProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}

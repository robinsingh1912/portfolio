import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/styles/globals.css';
import classNames from '@/utils/classNames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BsLinkedin } from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Robin Singh || Full-stack Developer',
  description:
    "Robin Singh, Passionate Full-Stack Developer specialized in React, Node, TypeScript, and more. Creating clean code and optimized performance. Let's build together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          'bg-black text-white scroll-smooth scroll-p-10'
        )}
      >
        <Header />
        <main className="min-h-screen pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import classNames from '@/utils/classNames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
    <html lang='en' className='scroll-smooth scroll-p-24 sm:scroll-p-20'>
      <body
        className={classNames(inter.className, 'dark:bg-black dark:text-white')}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Header />
          <main className='min-h-screen pb-20'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

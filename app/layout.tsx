import clsx from 'clsx';
import { Inria_Serif, Raleway } from 'next/font/google';

import '@/app/globals.css';

import type { Metadata } from 'next';

const inriaSerif = Inria_Serif({ weight: ['300', '400', '700'], subsets: ['latin'] });
const raleway = Raleway({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Food Sharing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inriaSerif.className, raleway.className)}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import MainNavbar from '@/components/MainNavbar';

export const metadata: Metadata = {
  title: 'BLACK-GOLD',
  description: 'Premium Kerala spices ecommerce PWA',
  manifest: '/manifest.json',
  themeColor: '#D4AF37',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <TopBar />
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}

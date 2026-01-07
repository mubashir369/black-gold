import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import MainNavbar from '@/components/MainNavbar';
import Footer from '@/components/Footer';
import ContactStrip from '@/components/ContactStrip';

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
        <ContactStrip />
        <Footer />
      </body>
    </html>
  );
}

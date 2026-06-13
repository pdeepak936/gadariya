import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GADARIYA - Premium Fashion & Lifestyle',
  description: 'Shop authentic fashion, jewelry, and lifestyle products at GADARIYA',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  keywords: ['ecommerce', 'fashion', 'jewelry', 'gadariya'],
  authors: [{ name: 'GADARIYA' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: 'GADARIYA - Premium Fashion & Lifestyle',
    description: 'Shop authentic fashion, jewelry, and lifestyle products',
    siteName: 'GADARIYA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-secondary">
        {children}
      </body>
    </html>
  );
}

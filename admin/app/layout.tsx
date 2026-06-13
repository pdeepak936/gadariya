import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GADARIYA Admin Dashboard',
  description: 'Admin panel for managing GADARIYA eCommerce platform',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-secondary">
        {children}
      </body>
    </html>
  );
}

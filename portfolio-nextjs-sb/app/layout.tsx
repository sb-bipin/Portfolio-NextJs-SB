import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import BootstrapClient from '@/components/BootstrapClient'; // we'll create this
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Bipin Poudel | Personal Website',
  description: 'Personal website and articles by Bipin Poudel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container my-4">{children}</main>
        <BootstrapClient />
      </body>
    </html>
  );
}
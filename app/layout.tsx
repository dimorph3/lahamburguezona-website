import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'La HamburgueZona | Mexican Style Premium Burger in Gilroy',
  description: 'La HamburgueZona in Gilroy, CA. Mexican style premium burger, loaded fries, wings, Cocorozona, churros, and game day vibes.',
  openGraph: {
    title: 'La HamburgueZona | The Reason You Came',
    description: 'Mexican Style Premium Burger in Gilroy, CA.',
    images: ['/images/combo-treat-yourself.jpeg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

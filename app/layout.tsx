import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading-loaded',
});

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body-loaded',
});

export const metadata = {
  title: 'Kezie Wholesale Furniture | Complete Space Solutions',
  description: "Lagos' premier wholesale distributor of ultra-premium home, restaurant, and corporate office furniture, offering end-to-end interior finishing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans bg-[#2B1D15] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ComingSoonOverlay from "./components/ComingSoonOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chai Cash",
  description: "Accept tips, offer memberships, and sell digital products to your audience with a fast, reliable, and creator-focused platform.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${geistMono.variable} ${dmSerif.variable} antialiased`}
        style={{ fontFamily: 'var(--font-dm-sans)' }}
        suppressHydrationWarning
      >
        <ComingSoonOverlay />
        {children}
      </body>
    </html>
  );
}

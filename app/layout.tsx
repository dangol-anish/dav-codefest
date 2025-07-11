import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";
import { QRFocusProvider } from "@/lib/QRFocusContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D.A.V Codefest 2025",
  description: "D.A.V Codefest 2025 official website",
  icons: {
    icon: "/logo2.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QRFocusProvider>
          <FloatingNav />
          {children}
        </QRFocusProvider>
      </body>
    </html>
  );
}

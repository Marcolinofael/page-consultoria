import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafa Consultoria",
  description: "Consultoria especializada em soluções digitais e Personalizados",
  keywords: ["consultoria", "tecnologia", "soluções digitais", "desenvolvimento web", "inovação"],
  authors: [{ name: "Rafael Marcolino" }],
  metadataBase: new URL('https://rafaconsultoria.site'),
  openGraph: {
    title: "Rafa Consultoria",
    description: "Consultoria especializada em soluções digitais e Personalizados",
    url: 'https://rafaconsultoria.site',
    siteName: "Rafa Consultoria",
    images: {
      url: '/img/Logo.png',
      width: 800,
      height: 600,
      alt: 'Rafa Consultoria Logo',
    },
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rafa Consultoria",
    description: "Consultoria especializada em soluções digitais e Personalizados",
    images: ['/img/Logo.png'],
  },
  icons: {
    icon: '/img/Logo.png',
    shortcut: '/img/Logo.png',
    apple: '/img/Logo.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/img/Logo.png',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

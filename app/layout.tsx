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
  keywords: ["consultoria Sublimação", "tecnologia", "soluções digitais", "desenvolvimento web", "inovação", "personalizados", "Rafa Consultoria", "Rafa", "Marcolino", "Rafael Marcolino"],
  authors: [{ name: "Rafael Marcolino" }],
  metadataBase: new URL('https://rafaconsultoria.site'),
  openGraph: {
    title: "Rafa Consultoria",
    description: "Consultoria especializada em soluções digitais e Personalizados",
    url: 'https://rafaconsultoria.site',
    siteName: "Rafa Consultoria",
    images: {
      url: '/img/Logo3.png',
      width: 1200,
      height: 630,
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
    icon: '/img/Logo3.png',
    shortcut: '/img/Logo3.png',
    apple: '/img/Logo3.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/img/Logo3.png',
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

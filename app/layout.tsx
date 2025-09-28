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
  openGraph: {
    title: "Rafa Consultoria",
    description: "Consultoria especializada em soluções digitais e Personalizados",
    url: "https://rafaconsultoria.site",
    siteName: "Rafa Consultoria",
    images: [
      {
        url: "/img/Logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/img/Logo.png",
    shortcut: "/img/Logo.png",
    apple: "/img/Logo.png",
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

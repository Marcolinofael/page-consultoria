import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

// Ícones, imagem de compartilhamento e manifest ficam na pasta /app e o Next.js
// gera as tags automaticamente:
//   favicon.ico, icon.png, apple-icon.png -> ícones da aba e da tela inicial
//   opengraph-image.jpg, twitter-image.jpg -> imagem ao compartilhar o link (1200x630, JPG < 300 KB para o WhatsApp)
//   manifest.ts -> "Adicionar à tela inicial" no celular

const TITLE = "Rafa Consultoria | Desenvolvimento de Sites e Suporte de TI";
const DESCRIPTION =
  "Desenvolvimento de sites profissionais e suporte técnico em TI para você e sua empresa. Uma única parceira cuidando de toda a sua estrutura digital.";
const SHARE_TITLE = "Rafa Consultoria | Tecnologia completa para o seu negócio";
const SHARE_DESCRIPTION =
  "Do site profissional ao suporte de TI no dia a dia: uma única parceira cuidando de toda a sua estrutura digital.";

export const metadata: Metadata = {
  // Transforma URLs relativas (imagens, canonical) em absolutas.
  metadataBase: new URL(SITE_URL),

  // "O que você faz | Marca". O template vale para páginas futuras (ex.: "Blog | Rafa Consultoria").
  title: {
    default: TITLE,
    template: "%s | Rafa Consultoria",
  },
  description: DESCRIPTION,
  applicationName: "Rafa Consultoria",
  category: "technology",

  // O Google ignora keywords, mas outros buscadores ainda leem.
  keywords: [
    "desenvolvimento de sites",
    "criação de sites",
    "site profissional",
    "suporte técnico em TI",
    "suporte de TI",
    "consultoria em TI",
    "Rafa Consultoria",
    "Rafael Marcolino",
  ],
  authors: [{ name: "Rafael Marcolino", url: SITE_URL }],
  creator: "Rafael Marcolino",
  publisher: "Rafa Consultoria",

  // Aponta a versão "oficial" da página e evita conteúdo duplicado.
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Compartilhamento em redes sociais e WhatsApp (a imagem vem de opengraph-image.jpg).
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Rafa Consultoria",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
  },

  // Verificação do Google Search Console: descomente e cole o código quando cadastrar o site.
  // verification: {
  //   google: "seu-codigo-de-verificacao-google",
  // },
};

// Cor da barra do navegador no celular (o site é sempre escuro).
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

// Dados estruturados: ajudam o Google a entender que o site é de um negócio de serviços.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Rafa Consultoria",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  description: DESCRIPTION,
  telephone: "+55 24 99299-8042",
  founder: { "@type": "Person", name: "Rafael Marcolino" },
  areaServed: { "@type": "Country", name: "Brasil" },
  knowsAbout: ["Desenvolvimento de sites", "Suporte técnico em TI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

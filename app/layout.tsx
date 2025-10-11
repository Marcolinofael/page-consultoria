import type { Metadata } from "next";
import { Libre_Bodoni } from "next/font/google";
import "./globals.css";

const libreBodoni = Libre_Bodoni({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  // --- INFORMAÇÕES GERAIS E SEO ---

  // O 'metadataBase' é uma ótima prática para garantir que todas as URLs relativas (como as de imagens)
  // se tornem absolutas. Mantenha isso.
  metadataBase: new URL('https://rafaconsultoria.site'),

  // TÍTULO: Mais descritivo, incluindo palavras-chave principais.
  // "O que você faz | Nome da Marca" é um formato eficaz.
  title: "Rafa Consultoria | Soluções Digitais e Produtos Personalizados",
  
  // DESCRIÇÃO: Mais elaborada, com uma chamada para ação e usando palavras-chave de forma natural.
  // Idealmente, deve ter entre 150-160 caracteres.
  description: "Transforme sua presença online com a Rafa Consultoria. Oferecemos soluções digitais inovadoras, consultoria em sublimação e desenvolvimento web para impulsionar o seu negócio.",

  // KEYWORDS: Embora o Google dê menos importância a esta tag hoje em dia,
  // ela pode ser útil para outros mecanismos de busca. A lista está mais focada.
  keywords: [
    "consultoria em tecnologia", 
    "soluções digitais", 
    "desenvolvimento de sites", 
    "consultoria para sublimação", 
    "produtos personalizados", 
    "marketing digital",
    "Rafa Consultoria", 
    "Rafael Marcolino"
  ],

  // AUTOR: Mantido como estava, mas adicionei a URL para fortalecer a referência.
  authors: [{ name: "Rafael Marcolino", url: "https://rafaconsultoria.site" }],
  
  // CANONICAL URL: Ajuda a evitar conteúdo duplicado, apontando para a versão "preferida" da página.
  alternates: {
    canonical: '/',
  },
  
  // ROBOTS: Adicionei mais detalhes para o GoogleBot, seguindo as melhores práticas.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // --- REDES SOCIAIS (OPEN GRAPH E TWITTER) ---

  openGraph: {
    // TÍTULO PARA REDES SOCIAIS: Pode ser um pouco mais "chamativo" que o título de SEO.
    title: "Rafa Consultoria: Inovação Digital e Personalizados",
    description: "Especialistas em desenvolvimento web, sublimação e soluções que transformam ideias em realidade.",
    url: 'https://rafaconsultoria.site',
    siteName: "Rafa Consultoria",
    // IMAGENS: Use uma URL absoluta e a resolução recomendada de 1200x630px para melhor exibição.
    // O Next.js com `metadataBase` cuidará de tornar a URL absoluta.
    images: [
      {
        url: '/img/Logo1.png', // SUGESTÃO: Crie uma imagem específica para redes sociais (1200x630).
        width: 1200,
        height: 630,
        alt: 'Rafa Consultoria - Soluções Digitais e Personalizados',
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: 'summary_large_image',
    title: "Rafa Consultoria: Inovação Digital e Personalizados", // Consistente com o Open Graph
    description: "Especialistas em desenvolvimento web, sublimação e soluções que transformam ideias em realidade.",
    // IMAGEM PARA O TWITTER: Deve ser a mesma do Open Graph para consistência.
    images: ['/img/Logo1.png'], // Use a mesma imagem de 1200x630
    // creator: '@seuUsuarioTwitter', // SUGESTÃO: Adicione seu @ do Twitter, se tiver.
  },

  // --- ÍCONES E APARÊNCIA ---
  
  // ÍCONES: Estrutura simplificada e mais completa, usando os nomes de arquivo padrão.
  icons: {
    icon: '/favicon.ico', // Formato padrão
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png', // Ícone para dispositivos Apple
  },
  
  // MANIFEST: Importante para PWA (Progressive Web App).
  // Crie um arquivo `manifest.json` na sua pasta /public.
  manifest: '/manifest.json',
  
  // THEME COLOR: Define a cor da barra de ferramentas do navegador em dispositivos móveis.
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  
  // VERIFICAÇÃO DE SITES: Descomente e adicione os códigos de verificação do Google, Bing, etc.
  // verification: {
  //   google: 'seu-codigo-de-verificacao-google',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${libreBodoni.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal de Segurança Digital | Informação que Protege",
  description:
    "Portal educativo e de utilidade pública para conscientização e prevenção de golpes virtuais, proteção de dados, segurança em redes sociais e canais oficiais de ajuda.",
  keywords: [
    "segurança digital",
    "prevenção de golpes",
    "golpes virtuais",
    "MED Pix",
    "WhatsApp clonado",
    "falso banco",
    "phishing",
    "educação digital",
    "Mogi das Cruzes",
  ],
  authors: [{ name: "Projeto de Extensão Universitária - Informação que Protege" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#040915",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-navy-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white">
        {/* Skip Link for Accessibility */}
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { RevealController } from "./components/reveal-controller";

const SITE = "https://carvalhocaio.github.io/me";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Caio Carvalho — Engenharia de dados e IA",
    template: "%s · Caio Carvalho",
  },
  description:
    "Engenheiro de dados e IA. Pipelines Oracle → BigQuery, Airflow, dbt e agentes em produção sobre LLMs.",
  authors: [{ name: "Caio Carvalho", url: SITE }],
  creator: "Caio Carvalho",
  keywords: [
    "engenharia de dados",
    "data engineering",
    "Python",
    "Google Cloud",
    "BigQuery",
    "Airflow",
    "dbt",
    "LLMs",
    "IA",
    "portfólio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: SITE,
    siteName: "Caio Carvalho",
    title: "Caio Carvalho — Engenharia de dados e IA",
    description:
      "Engenheiro de dados e IA. Pipelines Oracle → BigQuery, Airflow, dbt e agentes em produção sobre LLMs.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Caio Carvalho — Engenharia de dados e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caio Carvalho — Engenharia de dados e IA",
    description:
      "Engenheiro de dados e IA. Pipelines Oracle → BigQuery, Airflow, dbt e agentes em produção sobre LLMs.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Caio Carvalho",
  url: SITE,
  jobTitle: "Engenheiro de Dados & IA",
  knowsAbout: [
    "Engenharia de dados",
    "Python",
    "Google Cloud",
    "LLMs",
    "Airflow",
    "dbt",
  ],
  sameAs: [
    "https://github.com/carvalhocaio",
    "https://www.linkedin.com/in/1caiocarvalho/",
    "https://dev.to/carvalhocaio",
  ],
};

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('cc2-theme');if(t!=='dark'&&t!=='light'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: reads the persisted theme before paint to avoid a flash of the wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <RevealController />
        <Header />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </body>
    </html>
  );
}

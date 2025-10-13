import type { Metadata } from "next";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    authors: [{ name: "Felipe Novaes Rocha" }],
    creator: "Felipe Novaes Rocha",
    metadataBase: new URL("https://www.felipenovaesrocha.xyz"),
    alternates: {
      canonical: `https://www.felipenovaesrocha.xyz${params.lang === 'pt' ? '/pt' : ''}`,
      languages: {
        'en': 'https://www.felipenovaesrocha.xyz',
        'pt-BR': 'https://www.felipenovaesrocha.xyz/pt',
      },
    },
    openGraph: {
      type: "website",
      locale: params.lang === 'pt' ? 'pt_BR' : 'en_US',
      url: `https://www.felipenovaesrocha.xyz${params.lang === 'pt' ? '/pt' : ''}/`,
      siteName: dict.metadata.siteName,
      title: dict.metadata.ogTitle,
      description: dict.metadata.ogDescription,
      images: [
        {
          url: "/por-sol.jpg",
          width: 1200,
          height: 630,
          alt: dict.metadata.imageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@felipenovaesrocha",
      creator: "@felipenovaesrocha",
      title: dict.metadata.twitterTitle,
      description: dict.metadata.twitterDescription,
      images: ["/por-sol.jpg"],
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
    verification: {
      google: "your-google-verification-code",
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar lang={params.lang} />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

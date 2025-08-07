import { HeroSection } from "@/components/layout/sections/hero";
import { AboutSection } from "@/components/layout/sections/about";
import { TimelineSection } from "@/components/layout/sections/timeline";
import { ExpertiseSection } from "@/components/layout/sections/expertise";
import { ServicesSection } from "@/components/layout/sections/services";
import { ProjectsSection } from "@/components/layout/sections/projects";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata = {
  title: "Felipe Novaes Rocha - Desenvolvedor & Pesquisador em Tecnologias Emergentes",
  description: "30 anos de jornada tecnológica: do primeiro contato aos 4 anos até mentor e pesquisador em blockchain, IA e criptografia avançada. Especialista em Web3, Zero-Knowledge Proofs e desenvolvimento inovador.",
  keywords: "Felipe Novaes Rocha, desenvolvedor, blockchain, IA, Web3, criptografia, zero-knowledge proofs, mentor, pesquisador",
  authors: [{ name: "Felipe Novaes Rocha" }],
  creator: "Felipe Novaes Rocha",
  metadataBase: new URL("https://www.felipenovaesrocha.xyz"),
  alternates: {
    canonical: "https://www.felipenovaesrocha.xyz",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.felipenovaesrocha.xyz/",
    siteName: "Felipe Novaes Rocha - Portfólio",
    title: "Felipe Novaes Rocha - Desenvolvedor & Pesquisador em Tecnologias Emergentes",
    description: "30 anos de jornada tecnológica: especialista em blockchain, IA, criptografia avançada e Web3. Mentor e pesquisador em tecnologias emergentes.",
    images: [
      {
        url: "/por-sol.jpg",
        width: 1200,
        height: 630,
        alt: "Felipe Novaes Rocha - Portfólio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@felipenovaesrocha",
    creator: "@felipenovaesrocha",
    title: "Felipe Novaes Rocha - Desenvolvedor & Pesquisador",
    description: "30 anos de jornada tecnológica: especialista em blockchain, IA e tecnologias emergentes",
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

export default function Home() {
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

import { HeroSection } from "@/components/layout/sections/hero";
import { AboutSection } from "@/components/layout/sections/about";
import { TimelineSection } from "@/components/layout/sections/timeline";
import { ExpertiseSection } from "@/components/layout/sections/expertise";
import { ServicesSection } from "@/components/layout/sections/services";
import { ProjectsSection } from "@/components/layout/sections/projects";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import type { Locale } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <HeroSection dict={dict.hero} />
      <TimelineSection dict={dict.timeline} />
      <ExpertiseSection dict={dict.expertise} />
      <ProjectsSection dict={dict.projects} />
      <ServicesSection dict={dict.services} />
      <AboutSection dict={dict.about} />
      <ContactSection dict={dict.contact} />
      <FooterSection dict={dict.footer} />
    </>
  );
}

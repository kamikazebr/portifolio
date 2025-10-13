"use client";
import { Github, Menu, Languages } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToggleTheme } from "./toogle-theme";
import type { Locale } from "@/lib/dictionaries";

interface NavbarProps {
  lang: Locale;
}

interface RouteProps {
  href: string;
  label: string;
}

const getRoutes = (lang: Locale): RouteProps[] => {
  const routes = {
    en: [
      { href: "#timeline", label: "Journey" },
      { href: "#expertise", label: "Expertise" },
      { href: "#projects", label: "Projects" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    pt: [
      { href: "#timeline", label: "Jornada" },
      { href: "#expertise", label: "Expertise" },
      { href: "#projects", label: "Projetos" },
      { href: "#services", label: "Serviços" },
      { href: "#about", label: "Sobre" },
      { href: "#contact", label: "Contato" },
    ],
  };
  return routes[lang];
};

export const Navbar = ({ lang }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const routeList = getRoutes(lang);

  // Determine the alternate language path
  const getAlternatePath = () => {
    if (lang === 'pt') {
      return '/'; // Switch to English (root)
    } else {
      return '/pt'; // Switch to Portuguese
    }
  };

  const LanguageSwitcher = () => (
    <Button asChild size="sm" variant="outline" className="gap-2">
      <Link href={getAlternatePath()}>
        <Languages className="size-4" />
        <span className="text-xs font-semibold">{lang === 'en' ? 'PT' : 'EN'}</span>
      </Link>
    </Button>
  );

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href={lang === 'en' ? '/' : '/pt'} className="font-bold text-lg flex items-center">
        Felipe Novaes Rocha
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center gap-2 lg:hidden">
        <LanguageSwitcher />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href={lang === 'en' ? '/' : '/pt'} className="flex items-center">
                    Felipe Novaes Rocha
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
                <Button asChild variant="outline" className="mt-2">
                  <Link href="https://www.youtube.com/@felipenovaesrocha" target="_blank">YouTube</Link>
                </Button>
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <nav className="hidden lg:flex gap-2 items-center mx-auto">
        {routeList.map(({ href, label }) => (
          <Link key={href} href={href} className="text-base px-3 py-1 rounded hover:bg-muted transition-colors">
            {label}
          </Link>
        ))}
        <Button asChild variant="outline" className="ml-2">
          <Link href="https://www.youtube.com/@felipenovaesrocha" target="_blank">YouTube</Link>
        </Button>
      </nav>

      <div className="hidden lg:flex gap-2 items-center">
        <LanguageSwitcher />
        <ToggleTheme />
        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/kamikazebr"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};

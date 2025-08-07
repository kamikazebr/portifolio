"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, Code, Brain, Shield, Zap, Star, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeroSection = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    const highlights = [
        "30 anos de experiência",
        "Blockchain & Web3",
        "Inteligência Artificial",
        "Criptografia Avançada",
        "Nômade Digital por 3,5 anos"
    ];

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % highlights.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [highlights.length]);

    const FloatingIcon = ({ icon: Icon, className, delay }: { icon: any, className: string, delay: string }) => (
        <div className={`absolute ${className} animate-pulse`} style={{ animationDelay: delay }}>
            <Icon className="w-6 h-6 text-primary/30" />
        </div>
    );

    return (
        <section className="container w-full relative overflow-hidden">
            {/* Floating background icons */}
            <div className="absolute inset-0 pointer-events-none">
                <FloatingIcon icon={Code} className="top-20 left-10" delay="0s" />
                <FloatingIcon icon={Brain} className="top-32 right-20" delay="1s" />
                <FloatingIcon icon={Shield} className="top-40 left-32" delay="2s" />
                <FloatingIcon icon={Zap} className="top-24 right-40" delay="0.5s" />
                <FloatingIcon icon={Star} className="top-48 right-12" delay="1.5s" />
                <FloatingIcon icon={Sparkles} className="top-16 left-1/2" delay="2.5s" />
            </div>

            <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-16 md:py-24 relative z-10">
                <div className="text-center space-y-8">
                    {/* Badge animado */}
                    <div className="animate-in slide-in-from-top duration-1000 ease-out">
                        <Badge variant="outline" className="text-sm py-2 px-4 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300">
                            <Sparkles className="w-4 h-4 mr-2" />
                            <span>Desenvolvedor & Pesquisador em Tecnologias Emergentes</span>
                            <Sparkles className="w-4 h-4 ml-2" />
                        </Badge>
                    </div>

                    {/* Nome com efeito de digitação */}
                    <div className="animate-in slide-in-from-bottom duration-1200 ease-out delay-300">
                        <div className="max-w-screen-md mx-auto text-center">
                            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                                Felipe Novaes Rocha
                            </h1>
                        </div>
                    </div>

                    {/* Texto rotativo com highlights */}
                    <div className="animate-in slide-in-from-bottom duration-1400 ease-out delay-500">
                        <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
                            <span className="text-foreground font-semibold">
                                {mounted && highlights[textIndex]}
                            </span>
                            {" "}em jornada contínua: da criança prodígio aos 4 anos ao mentor tecnológico de hoje.
                        </p>
                    </div>

                    {/* Estatísticas impressionantes */}
                    <div className="animate-in slide-in-from-bottom duration-1600 ease-out delay-700">
                        <div className="flex flex-wrap justify-center gap-6 py-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">30+</div>
                                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">3.5</div>
                                <div className="text-sm text-muted-foreground">Anos Nômade Digital</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">140+</div>
                                <div className="text-sm text-muted-foreground">Dias Consecutivos no YouTube</div>
                            </div>
                        </div>
                    </div>

                    {/* Botões com animações */}
                    <div className="animate-in slide-in-from-bottom duration-1800 ease-out delay-900">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                            <Button className="w-full md:w-auto font-bold group/arrow bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transform hover:scale-105 transition-all duration-300">
                                <Link href="https://www.youtube.com/@felipenovaesrocha" target="_blank" className="flex items-center justify-center gap-2">
                                    <Youtube className="size-5 text-white" />
                                    Inscreva-se no canal do YouTube
                                    <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="secondary"
                                className="w-full md:w-auto font-bold hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary/40"
                            >
                                <Link
                                    href="https://github.com/kamikazebr"
                                    target="_blank"
                                >
                                    Repositório no Github
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Texto de chamada para ação */}
                    <div className="animate-in slide-in-from-bottom duration-2000 ease-out delay-1100">
                        <p className="text-sm text-muted-foreground mt-8">
                            🚀 <span className="text-primary font-semibold">Transformando ideias complexas em soluções inovadoras</span> há décadas
                        </p>
                    </div>
                </div>

                {/* Imagem hero reativada com melhorias */}
                <div className="animate-in slide-in-from-bottom duration-2200 ease-out delay-1300">
                    <div className="relative group mt-14">
                        <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-gradient-to-r from-primary/30 to-primary/50 rounded-full blur-3xl animate-pulse"></div>
                        <Image
                            width={1200}
                            height={1200}
                            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30 hover:scale-[1.02] transition-transform duration-500"
                            src="/por-sol.jpg"
                            alt="Felipe Novaes Rocha - Por do Sol"
                        />

                        <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>

                        {/* Overlay com informações adicionais */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg flex items-end justify-center p-8">
                            <p className="text-white text-center font-semibold">
                                🌅 Contemplando novos horizontes - Onde cada pôr do sol inspira novas possibilidades tecnológicas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

import { Card } from "@/components/ui/card";
import Image from "next/image";

export const AboutSection = () => (
    <section id="about" className="container py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Sobre Felipe</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Imagem do Felipe */}
                <div className="order-2 lg:order-1 flex justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                        <Image
                            src="/felipe.jpg"
                            alt="Felipe Novaes Rocha"
                            width={400}
                            height={400}
                            className="relative rounded-full w-80 h-80 object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                        {/* Badge flutuante */}
                        <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            💻❤️ Code + Emotions
                        </div>
                    </div>
                </div>

                {/* Conteúdo textual */}
                <div className="order-1 lg:order-2 space-y-6">
                    <div className="space-y-4">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Felipe Novaes Rocha é desenvolvedor e pesquisador de tecnologias emergentes com mais de <span className="text-primary font-semibold">30 anos de experiência</span> em inovação digital. Desde os <span className="text-primary font-semibold">4 anos</span>, explora códigos e ideias, desenvolvendo profundo conhecimento em diversas linguagens e frameworks.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Atuou como <span className="text-primary font-semibold">nômade digital por 3,5 anos</span>, desenvolvendo projetos remotamente pelo Brasil em uma KombiHome, combinando trabalho remoto com aventura e autoconhecimento.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Sua abordagem agnóstica em linguagens permite adaptar soluções para cada desafio, sempre priorizando eficiência e inovação. Além da atuação técnica, Felipe é <span className="text-primary font-semibold">Terapeuta e Mediador de Conflitos</span>, agregando uma perspectiva humana única à gestão de projetos e equipes.
                        </p>
                    </div>

                    {/* Cards com highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <Card className="p-4 text-center bg-primary/5 border-primary/20">
                            <div className="text-2xl font-bold text-primary">30+</div>
                            <div className="text-sm text-muted-foreground">Anos Codando</div>
                        </Card>
                        <Card className="p-4 text-center bg-primary/5 border-primary/20">
                            <div className="text-2xl font-bold text-primary">3.5</div>
                            <div className="text-sm text-muted-foreground">Anos Nômade</div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </section>
); 
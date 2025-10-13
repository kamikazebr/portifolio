import { Card } from "@/components/ui/card";
import Image from "next/image";

interface AboutSectionProps {
    dict: {
        title: string;
        badge: string;
        paragraphs: string[];
        highlights: {
            experience: { value: string; label: string };
            nomad: { value: string; label: string };
        };
    };
}

export const AboutSection = ({ dict }: AboutSectionProps) => (
    <section id="about" className="container py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">{dict.title}</h2>

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
                            {dict.badge}
                        </div>
                    </div>
                </div>

                {/* Conteúdo textual */}
                <div className="order-1 lg:order-2 space-y-6">
                    <div className="space-y-4">
                        {dict.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph.replace(/(\d+\s*anos?|30|4\s*anos?)/gi, '<span class="text-primary font-semibold">$1</span>').replace(/(nômade\s+digital|digital\s+nomad)/gi, '<span class="text-primary font-semibold">$1</span>').replace(/(Terapeuta\s+e\s+Mediador\s+de\s+Conflitos|Therapist\s+and\s+Conflict\s+Mediator)/gi, '<span class="text-primary font-semibold">$1</span>') }} />
                        ))}
                    </div>

                    {/* Cards com highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <Card className="p-4 text-center bg-primary/5 border-primary/20">
                            <div className="text-2xl font-bold text-primary">{dict.highlights.experience.value}</div>
                            <div className="text-sm text-muted-foreground">{dict.highlights.experience.label}</div>
                        </Card>
                        <Card className="p-4 text-center bg-primary/5 border-primary/20">
                            <div className="text-2xl font-bold text-primary">{dict.highlights.nomad.value}</div>
                            <div className="text-sm text-muted-foreground">{dict.highlights.nomad.label}</div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Code, Lightbulb, Users, Compass } from "lucide-react";

const timelineEvents = [
    {
        year: "2000",
        title: "Primeiros Passos na Programação",
        description: "Aos 10 anos, começou a explorar códigos e algoritmos, desenvolvendo paixão pela tecnologia.",
        icon: <Code className="text-primary" size={20} />,
        type: "start"
    },
    {
        year: "2005-2010",
        title: "Formação e Especialização",
        description: "Período de intenso aprendizado em múltiplas linguagens de programação e frameworks.",
        icon: <Lightbulb className="text-primary" size={20} />,
        type: "education"
    },
    {
        year: "2015",
        title: "Início da Carreira Profissional",
        description: "Primeiros projetos comerciais e desenvolvimento de soluções inovadoras para empresas.",
        icon: <Users className="text-primary" size={20} />,
        type: "career"
    },
    {
        year: "2018",
        title: "Especialização em Blockchain & IA",
        description: "Aprofundamento em tecnologias emergentes: Blockchain, Web3, Inteligência Artificial e Criptografia.",
        icon: <Lightbulb className="text-primary" size={20} />,
        type: "specialization"
    },
    {
        year: "2020-2023",
        title: "Vida Nômade Digital",
        description: "3,5 anos viajando pelo Brasil em uma KombiHome, desenvolvendo projetos remotamente e explorando novas perspectivas.",
        icon: <Compass className="text-primary" size={20} />,
        type: "nomad"
    },
    {
        year: "2023",
        title: "Terapeuta e Mediador",
        description: "Formação complementar como Terapeuta e Mediador de Conflitos, agregando perspectiva humana aos projetos.",
        icon: <Users className="text-primary" size={20} />,
        type: "therapy"
    },
    {
        year: "2024",
        title: "Presente - Pesquisador e Consultor",
        description: "Atuação como pesquisador em tecnologias emergentes, consultor e mentor técnico especializado.",
        icon: <MapPin className="text-primary" size={20} />,
        type: "present"
    }
];

export const TimelineSection = () => {
    return (
        <section id="timeline" className="container py-24 sm:py-32">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Minha Jornada</h2>
                <p className="text-xl text-muted-foreground">
                    24+ anos de evolução contínua na tecnologia e desenvolvimento humano
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Linha vertical do timeline */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>

                    {timelineEvents.map((event, index) => (
                        <div key={event.year} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}>
                            {/* Ponto no timeline */}
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background"></div>

                            {/* Conteúdo */}
                            <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                                }`}>
                                <Card className="bg-muted/60 dark:bg-card hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            {event.icon}
                                            <div className="flex items-center gap-2">
                                                <Calendar className="text-muted-foreground" size={16} />
                                                <span className="text-sm font-semibold text-primary">{event.year}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                                        <p className="text-muted-foreground">{event.description}</p>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Espaço vazio no lado oposto (apenas em desktop) */}
                            <div className="hidden md:block flex-1"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

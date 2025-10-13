import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Code, Lightbulb, Users, Compass } from "lucide-react";
import Image from "next/image";

interface TimelineSectionProps {
    dict: {
        title: string;
        subtitle: string;
        events: Array<{
            year: string;
            title: string;
            description: string;
        }>;
    };
}

const iconMap: Record<number, JSX.Element> = {
    0: <Code className="text-primary" size={20} />,
    1: <Code className="text-primary" size={20} />,
    2: <Lightbulb className="text-primary" size={20} />,
    3: <Code className="text-primary" size={20} />,
    4: <Compass className="text-primary" size={20} />,
    5: <Users className="text-primary" size={20} />,
    6: <Lightbulb className="text-primary" size={20} />,
    7: <Compass className="text-primary" size={20} />,
    8: <Code className="text-primary" size={20} />,
    9: <Users className="text-primary" size={20} />,
    10: <Users className="text-primary" size={20} />,
    11: <Code className="text-primary" size={20} />,
    12: <Lightbulb className="text-primary" size={20} />,
    13: <Compass className="text-primary" size={20} />,
    14: <Code className="text-primary" size={20} />,
    15: <Users className="text-primary" size={20} />,
    16: <Lightbulb className="text-primary" size={20} />,
    17: <Compass className="text-primary" size={20} />,
    18: <MapPin className="text-primary" size={20} />,
};

export const TimelineSection = ({ dict }: TimelineSectionProps) => {
    return (
        <section id="timeline" className="container py-16 sm:py-20">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{dict.title}</h2>
                <p className="text-xl text-muted-foreground">
                    {dict.subtitle}
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Linha vertical do timeline */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>

                    {dict.events.map((event, index) => (
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
                                            {iconMap[index] || <Code className="text-primary" size={20} />}
                                            <div className="flex items-center gap-2">
                                                <Calendar className="text-muted-foreground" size={16} />
                                                <span className="text-sm font-semibold text-primary">{event.year}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                                        <p className="text-muted-foreground mb-4">{event.description}</p>
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

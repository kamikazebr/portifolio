import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lightbulb, Search, BarChart, Users } from "lucide-react";

interface ServicesSectionProps {
    dict: {
        title: string;
        subtitle: string;
        items: Array<{
            title: string;
            description: string;
        }>;
    };
}

const icons = [Lightbulb, Search, BarChart, Users];

export const ServicesSection = ({ dict }: ServicesSectionProps) => (
    <section id="services" className="container py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{dict.title}</h2>
            <p className="text-xl text-muted-foreground">{dict.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dict.items.map((item, index) => {
                const Icon = icons[index];
                return (
                    <Card key={item.title} className="bg-muted/60 dark:bg-card h-full">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Icon className="text-primary" size={32} />
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">{item.description}</CardContent>
                    </Card>
                );
            })}
        </div>
    </section>
);

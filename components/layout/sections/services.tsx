import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lightbulb, Search, BarChart, Users } from "lucide-react";

const services = [
    {
        icon: <Lightbulb className="text-primary" size={32} />,
        title: "Consultoria em Tecnologias Emergentes",
        description: "Assessoria técnica para empresas que buscam implementar soluções inovadoras."
    },
    {
        icon: <Search className="text-primary" size={32} />,
        title: "Estratégia de Inovação e Pesquisa Aplicada",
        description: "Desenvolvimento de provas de conceito e protótipos funcionais."
    },
    {
        icon: <BarChart className="text-primary" size={32} />,
        title: "Análise Comparativa de Soluções Tecnológicas",
        description: "Avaliação imparcial de ferramentas e plataformas para necessidades específicas."
    },
    {
        icon: <Users className="text-primary" size={32} />,
        title: "Mentoria Técnica Personalizada",
        description: "Orientação para profissionais que desejam aprofundar conhecimentos em tecnologias de ponta."
    }
];

export const ServicesSection = () => (
    <section id="services" className="container py-24 sm:py-32">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Serviços</h2>
            <p className="text-xl text-muted-foreground">Como posso ajudar você ou sua empresa a inovar</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map(({ icon, title, description }) => (
                <Card key={title} className="bg-muted/60 dark:bg-card h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                        {icon}
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">{description}</CardContent>
                </Card>
            ))}
        </div>
    </section>
);

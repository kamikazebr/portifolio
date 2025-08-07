import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck, Brain, Lock, Network } from "lucide-react";

const expertises = [
    {
        icon: <Network className="text-primary" size={32} />,
        title: "Blockchain & Web3",
        description: "Desenvolvimento de soluções descentralizadas, smart contracts e análise de ecossistemas digitais."
    },
    {
        icon: <Brain className="text-primary" size={32} />,
        title: "Inteligência Artificial",
        description: "Implementação de sistemas de IA para otimização de processos e automação inteligente."
    },
    {
        icon: <Lock className="text-primary" size={32} />,
        title: "Criptografia Avançada",
        description: "Pesquisa aplicada em Zero-Knowledge Proofs (ZK) e Fully Homomorphic Encryption (FHE)."
    },
    {
        icon: <ShieldCheck className="text-primary" size={32} />,
        title: "Segurança & Privacidade",
        description: "Implementação de protocolos seguros para sistemas blockchain e aplicações descentralizadas."
    }
];

export const ExpertiseSection = () => (
    <section id="expertise" className="container py-24 sm:py-32">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Expertise</h2>
            <p className="text-xl text-muted-foreground">Áreas técnicas de atuação e pesquisa</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {expertises.map(({ icon, title, description }) => (
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
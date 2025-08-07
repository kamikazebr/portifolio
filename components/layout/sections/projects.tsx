import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Calendar, Users, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
    title: string;
    year: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    image?: string;
    demoUrl?: string;
    githubUrl?: string;
    impact?: string;
    teamSize?: string;
    duration?: string;
    category: "web" | "mobile" | "game" | "system" | "blockchain" | "automation";
    featured?: boolean;
}

const projects: ProjectProps[] = [
    {
        title: "Urna Digital Grêmio Estudantil",
        year: "2005",
        description: "Sistema de votação eletrônica para eleições estudantis com interface gráfica avançada e segurança robusta.",
        longDescription: "Desenvolvida em Visual Basic aos 15 anos, esta urna digital incluía gráficos animados, contagem de votos em tempo real, sistemas de segurança multicamadas e transparência através da impressão do código-fonte. O sistema foi tão bem sucedido que foi utilizado por mais de 10 anos consecutivos nas eleições do grêmio estudantil.",
        technologies: ["Visual Basic", "Access Database", "Windows API", "Criptografia"],
        image: "/demo-img.jpg",
        impact: "Utilizada por 10+ anos consecutivos",
        teamSize: "1 desenvolvedor",
        duration: "3 meses",
        category: "system",
        featured: true
    },
    {
        title: "Sistema de Streaming Pioneiro",
        year: "2006",
        description: "Protótipo de streaming ao vivo criado um ano antes do YouTube chegar ao Brasil.",
        longDescription: "No Jornal Cidade Itapevi, desenvolveu uma solução completa de streaming que incluía transmissão ao vivo da câmara municipal, sistema de vídeos sob demanda e player customizado em Flash. Esta inovação aconteceu em 2006, um ano inteiro antes do YouTube chegar ao Brasil em 2007.",
        technologies: ["PHP", "Flash", "Video Streaming", "JavaScript", "HTML/CSS"],
        impact: "Pioneiro em streaming no Brasil",
        teamSize: "1 desenvolvedor",
        duration: "6 meses",
        category: "web",
        featured: true
    },
    {
        title: "Fun Kids - Jogo Educativo Mobile",
        year: "2018",
        description: "Jogo educativo desenvolvido em Unity como concorrente do Play Kids, após período de recuperação pessoal.",
        longDescription: "Desenvolvido completamente sozinho usando Unity e C#, começando apenas com um MacBook emprestado após superar depressão profunda. O projeto cresceu tanto que eventualmente foi entregue para uma equipe de mais de 5 pessoas para dar continuidade. O jogo incluía múltiplos mini-games educativos, sistema de progresso gamificado e interface intuitiva para crianças. Representou um marco de 'renascimento' profissional após período difícil.",
        technologies: ["Unity", "C#", "Game Design", "UI/UX", "Mobile Development", "MacOS"],
        image: "/demo-img.jpg",
        impact: "Projeto entregue para equipe de 5+ pessoas",
        teamSize: "1 → 5+ desenvolvedores",
        duration: "8 meses",
        category: "game",
        featured: true
    },
    {
        title: "Gardens v2 - Governança Blockchain",
        year: "2021-2023",
        description: "Plataforma de governança descentralizada que ganhou 1º lugar em hackathon internacional.",
        longDescription: "Liderou o desenvolvimento da segunda versão da Gardens, uma plataforma inovadora de governança blockchain. O projeto envolveu smart contracts, interfaces Web3, sistemas de votação descentralizada e integração com múltiplas blockchains. A versão 2.0 foi tão inovadora que ganhou o primeiro lugar em um hackathon da 1Hive.org.",
        technologies: ["Solidity", "React", "Web3", "TypeScript", "GraphQL", "IPFS"],
        demoUrl: "https://gardens.1hive.org",
        githubUrl: "https://github.com/1Hive/gardens-v2",
        impact: "1º lugar em hackathon internacional",
        teamSize: "3-5 desenvolvedores",
        duration: "1 ano",
        category: "blockchain",
        featured: true
    },
    {
        title: "Facilita Social - Gamedeck Platform",
        year: "2020",
        description: "Plataforma que unia conhecimentos tecnológicos e terapêuticos em uma experiência gamificada.",
        longDescription: "Criação de uma plataforma inovadora de gamedeck online que combinava metodologias terapêuticas com tecnologia. O sistema incluía jogos interativos para desenvolvimento pessoal, dashboards de progresso e ferramentas de facilitação em grupo.",
        technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Game Design"],
        impact: "Fusão única de terapia e tecnologia",
        teamSize: "2-3 desenvolvedores",
        duration: "6 meses",
        category: "web"
    },
    {
        title: "Automação de Santinhos Políticos",
        year: "2007",
        description: "Sistema de automação para criação em massa de material publicitário político.",
        longDescription: "Desenvolveu um sistema que automatizava completamente a criação de 'santinhos' políticos usando scripting avançado no Photoshop integrado com dados do Excel. O sistema transformou um processo manual de horas em um processo automático de minutos.",
        technologies: ["Photoshop Scripting", "Excel VBA", "JavaScript", "Automation"],
        impact: "Reduziu tempo de produção de horas para minutos",
        teamSize: "1 desenvolvedor",
        duration: "2 semanas",
        category: "automation"
    },
    {
        title: "Layout para Cheques - Titan Software",
        year: "2009-2010",
        description: "Sistema de layout para cheques em ambiente de equipe de programadores.",
        longDescription: "Primeira experiência trabalhando em um time de programadores na Titan Software. Participou da criação de sistema de layout para cheques e teve crescimento significativo observando colegas experientes como Choi, aprendendo técnicas avançadas de leitura dinâmica de código.",
        technologies: ["PHP", "Team Development", "Code Reading", "Layout Design", "Banking Systems"],
        impact: "Primeira experiência de trabalho em equipe",
        teamSize: "Equipe de programadores",
        duration: "1 ano",
        category: "system"
    },
    {
        title: "Interpretador SQL em J2ME - Gimon",
        year: "2010-2011",
        description: "Criatividade extrema: recriou interpretação de SQL em dispositivo móvel limitado.",
        longDescription: "Trabalhou com J2ME em celular sem banco de dados, criou uma solução inovadora usando expressão regular gigante para recriar interpretação de comandos SQL em arquivo RMS. Adaptou compressão ZIP em baixo nível para funcionar com poucos kilobytes de memória, lidando com severas limitações de hardware e problemas de codificação.",
        technologies: ["J2ME", "Regex", "RMS", "ZIP Compression", "Mobile Optimization"],
        impact: "Solução criativa para limitações extremas de hardware",
        teamSize: "1 desenvolvedor",
        duration: "6 meses",
        category: "mobile"
    }
];

export const ProjectsSection = () => {
    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    const getCategoryColor = (category: string) => {
        const colors = {
            web: "bg-blue-500/10 text-blue-600 border-blue-500/20",
            mobile: "bg-green-500/10 text-green-600 border-green-500/20",
            game: "bg-purple-500/10 text-purple-600 border-purple-500/20",
            system: "bg-orange-500/10 text-orange-600 border-orange-500/20",
            blockchain: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
            automation: "bg-red-500/10 text-red-600 border-red-500/20"
        };
        return colors[category as keyof typeof colors] || colors.web;
    };

    const ProjectCard = ({ project, featured = false }: { project: ProjectProps; featured?: boolean }) => (
        <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar size={14} />
                            <span>{project.year}</span>
                        </div>
                    </div>
                    <Badge variant="outline" className={getCategoryColor(project.category)}>
                        {project.category}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {project.image && (
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={300}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}

                <p className="text-muted-foreground">
                    {featured ? project.longDescription : project.description}
                </p>

                <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    {(project.impact || project.teamSize || project.duration) && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                            {project.impact && (
                                <div className="flex items-center gap-1 text-muted-foreground">
                                    <Award size={14} />
                                    <span className="truncate">{project.impact}</span>
                                </div>
                            )}
                            {project.teamSize && (
                                <div className="flex items-center gap-1 text-muted-foreground">
                                    <Users size={14} />
                                    <span className="truncate">{project.teamSize}</span>
                                </div>
                            )}
                            {project.duration && (
                                <div className="flex items-center gap-1 text-muted-foreground">
                                    <Calendar size={14} />
                                    <span className="truncate">{project.duration}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {(project.demoUrl || project.githubUrl) && (
                    <div className="flex gap-2 pt-2">
                        {project.demoUrl && (
                            <Button asChild size="sm" variant="default">
                                <Link href={project.demoUrl} target="_blank">
                                    <Play size={14} className="mr-1" />
                                    Demo
                                </Link>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button asChild size="sm" variant="outline">
                                <Link href={project.githubUrl} target="_blank">
                                    <Github size={14} className="mr-1" />
                                    Código
                                </Link>
                            </Button>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );

    return (
        <section id="projects" className="container py-16 sm:py-20">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Projetos em Destaque</h2>
                <p className="text-xl text-muted-foreground">
                    Uma seleção dos projetos mais impactantes e inovadores ao longo da jornada
                </p>
            </div>

            {/* Projetos em Destaque */}
            <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-8 text-center">Principais Realizações</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} featured />
                    ))}
                </div>
            </div>

            {/* Outros Projetos */}
            {otherProjects.length > 0 && (
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-center">Outros Projetos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

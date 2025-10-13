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
    category: string;
    featured?: boolean;
}

interface ProjectsSectionProps {
    dict: {
        title: string;
        subtitle: string;
        featuredTitle: string;
        othersTitle: string;
        categories: Record<string, string>;
        buttons: {
            demo: string;
            code: string;
        };
        items: ProjectProps[];
    };
}

export const ProjectsSection = ({ dict }: ProjectsSectionProps) => {
    const featuredProjects = dict.items.filter(project => project.featured);
    const otherProjects = dict.items.filter(project => !project.featured);

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
                        {dict.categories[project.category] || project.category}
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
                                    {dict.buttons.demo}
                                </Link>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button asChild size="sm" variant="outline">
                                <Link href={project.githubUrl} target="_blank">
                                    <Github size={14} className="mr-1" />
                                    {dict.buttons.code}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{dict.title}</h2>
                <p className="text-xl text-muted-foreground">
                    {dict.subtitle}
                </p>
            </div>

            {/* Projetos em Destaque */}
            <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-8 text-center">{dict.featuredTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} featured />
                    ))}
                </div>
            </div>

            {/* Outros Projetos */}
            {otherProjects.length > 0 && (
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-center">{dict.othersTitle}</h3>
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

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Code, Lightbulb, Users, Compass } from "lucide-react";
import Image from "next/image";

const timelineEvents = [
    {
        year: "1994",
        title: "Primeiro Contato com Computadores",
        description: "Aos 4 anos, começou a mexer em computadores e chegou até a quebrar um. Curiosidade inicial que moldaria toda sua trajetória.",
        icon: <Code className="text-primary" size={20} />,
        type: "start"
    },
    {
        year: "1998-1999",
        title: "Primeiras Macros no Excel",
        description: "Antes dos 10 anos, fez macros no Excel para sua mãe usando Visual Basic, embora não considerasse isso programação na época. Primeiro contato real com código.",
        icon: <Code className="text-primary" size={20} />,
        type: "discovery"
    },
    {
        year: "2000",
        title: "Primeiro OCX e DLL",
        description: "Aos 10 anos, aprendeu Visual Basic em uma noite com o livro 'Aprendo Visual Basic em 21 dias' e criou seu primeiro OCX e DLL. Começou a explorar Delphi e criar pequenos jogos.",
        icon: <Lightbulb className="text-primary" size={20} />,
        type: "breakthrough"
    },
    {
        year: "2000-2002",
        title: "Pequenos Jogos e Tetris Matemático",
        description: "Entre 10 e 12 anos, desenvolveu diversos pequenos jogos, incluindo um Tetris de matemática. Explorou Delphi e Delphi X, consolidando lógica de programação aplicada a jogos.",
        icon: <Code className="text-primary" size={20} />,
        type: "games"
    },
    {
        year: "2001",
        title: "Servidor de Ragnarok",
        description: "Aos 14 anos, mergulhou em fóruns para criar servidor de Ragnarok, aprendendo extensivamente sobre redes, banco de dados, portas, firewall e DNS.",
        icon: <Compass className="text-primary" size={20} />,
        type: "networking"
    },
    {
        year: "2002",
        title: "Sistema de Cadastro Escolar",
        description: "Aos 12 anos, criou um sistema completo de cadastro de alunos com fotos e busca rápida em Visual Basic e Access para resolver o problema de papéis desorganizados na escola da mãe.",
        icon: <Users className="text-primary" size={20} />,
        type: "project"
    },
    {
        year: "2005",
        title: "Urna Digital Grêmio Estudantil",
        description: "Aos 15 anos, desenvolveu uma urna digital para eleição do grêmio estudantil com gráficos animados, contagem em tempo real e sistemas de segurança. Utilizada por mais de 10 anos consecutivos.",
        icon: <Lightbulb className="text-primary" size={20} />,
        type: "innovation",
        image: "/demo-img.jpg" // Placeholder - você pode substituir por foto real da urna
    },
    {
        year: "2006",
        title: "Pioneiro em Streaming",
        description: "No Jornal Cidade Itapevi, criou vídeos em stream e protótipo de streaming ao vivo na câmara municipal - um ano antes do YouTube chegar ao Brasil (2007).",
        icon: <Compass className="text-primary" size={20} />,
        type: "pioneer"
    },
    {
        year: "2007",
        title: "Automação Publicitária",
        description: "Aos 17 anos, automatizou a criação de 'santinhos' políticos usando scripting no Photoshop e Excel, transformando processo manual em automático.",
        icon: <Code className="text-primary" size={20} />,
        type: "automation"
    },
    {
        year: "2008",
        title: "Primeiro Emprego Registrado",
        description: "Aos 18 anos, trabalhando com Flex e J2ME, automatizou organização de anos de dados para Receita Federal com macro no Excel, transformando dias de trabalho em horas.",
        icon: <Users className="text-primary" size={20} />,
        type: "career"
    },
    {
        year: "2009-2010",
        title: "Titan Software - Trabalho em Equipe",
        description: "Primeira experiência em time de programadores. Participou da criação de layout para cheques e aprendeu leitura dinâmica de código observando colegas como Choi.",
        icon: <Users className="text-primary" size={20} />,
        type: "team"
    },
    {
        year: "2010-2011",
        title: "Gimon - Criatividade Extrema",
        description: "Trabalhou com J2ME em dispositivos limitados. Recriou interpretador SQL usando expressão regular gigante em arquivo RMS e adaptou compressão ZIP em baixo nível com poucos KB de memória.",
        icon: <Code className="text-primary" size={20} />,
        type: "innovation"
    },
    {
        year: "2012",
        title: "Portaria Virtual no iPad",
        description: "Aos 22 anos na Sigma, ajudou a criar sistema inovador de portaria virtual no iPad para controle de acesso de domínios.",
        icon: <Lightbulb className="text-primary" size={20} />,
        type: "innovation"
    },
    {
        year: "2014-2017",
        title: "Depressão e Renascimento",
        description: "Aos 24 anos, enfrentou depressão profunda de quase 3 anos. Após tocar o fundo do poço, 'renasceu das cinzas', largou vícios e comprou uma Kombi com sonho de se tornar nômade.",
        icon: <Compass className="text-primary" size={20} />,
        type: "transformation"
    },
    {
        year: "2018",
        title: "Jogo 'Fun Kids' em Unity",
        description: "Desenvolveu sozinho o jogo 'Fun Kids' em Unity com C#, concorrente do Play Kids, começando com MacBook emprestado e entregando para equipe de 5+ pessoas.",
        icon: <Code className="text-primary" size={20} />,
        type: "project"
    },
    {
        year: "2019",
        title: "Ano Sabático como Terapeuta",
        description: "Largou a programação, morou em sítio e se tornou terapeuta, descobrindo o valor da inteligência emocional, gestão de conflitos e facilitação em grupo.",
        icon: <Users className="text-primary" size={20} />,
        type: "therapy"
    },
    {
        year: "2020",
        title: "Cegueira e Facilita Social",
        description: "Entre 29-30 anos, ficou cego do olho direito. Seguindo intuição, ingressou na Facilita Social criando plataforma de gamedeck que unia conhecimentos tecnológicos e terapêuticos.",
        icon: <Lightbulb className="text-primary" size={20} />,
        type: "resilience"
    },
    {
        year: "2021-2023",
        title: "Blockchain e Vida Nômade",
        description: "Ingressou na Gardens (governança blockchain), evoluindo de $5/hora para $50/hora. Liderou Gardens v2 que ganhou 1º lugar em hackathon da 1Hive.org, enquanto viajava pelo Brasil trabalhando remotamente.",
        icon: <Compass className="text-primary" size={20} />,
        type: "nomad",
        image: "/demo-img.jpg" // Placeholder - foto da Kombi ou setup nômade
    },
    {
        year: "2024",
        title: "Compartilhando Conhecimento",
        description: "Recebeu 'chamado' para compartilhar conhecimentos. Co-criou 'Flir para Web3', mantém canal no YouTube com lives diárias (78+ dias consecutivos) e oferece mentoria.",
        icon: <MapPin className="text-primary" size={20} />,
        type: "present"
    }
];

export const TimelineSection = () => {
    return (
        <section id="timeline" className="container py-16 sm:py-20">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Minha Jornada</h2>
                <p className="text-xl text-muted-foreground">
                    30 anos de evolução contínua: da criança prodígio aos 4 anos ao mentor tecnológico de hoje
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
                                        <p className="text-muted-foreground mb-4">{event.description}</p>
                                        {event.image && (
                                            <div className="mt-4 overflow-hidden rounded-lg">
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    width={400}
                                                    height={200}
                                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
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

interface ContactSectionProps {
    dict: {
        title: string;
        subtitle: string;
        email: string;
    };
}

export const ContactSection = ({ dict }: ContactSectionProps) => {
    return (
        <section id="contact" className="container py-16 sm:py-20">
            <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{dict.title}</h2>
                <p className="text-xl text-muted-foreground mb-8">
                    {dict.subtitle}
                </p>
                <div className="flex flex-col items-center gap-4">
                    <a href={`mailto:${dict.email}`} className="text-primary hover:underline text-lg">{dict.email}</a>
                    <a href="https://www.linkedin.com/in/felipenovaesrocha/" target="_blank" className="text-primary hover:underline text-lg">LinkedIn</a>
                    <a href="https://www.youtube.com/@felipenovaesrocha" target="_blank" className="text-primary hover:underline text-lg">YouTube</a>
                </div>
            </div>
        </section>
    );
};

import Link from "next/link";

interface FooterSectionProps {
    dict: {
        name: string;
        links: {
            email: string;
            linkedin: string;
            youtube: string;
            github: string;
        };
        copyright: string;
    };
}

export const FooterSection = ({ dict }: FooterSectionProps) => {
    return (
        <footer id="footer" className="container py-16 sm:py-20">
            <div className="p-8 bg-card border border-secondary rounded-2xl flex flex-col items-center gap-6">
                <Link href="/" className="flex font-bold items-center mb-2">
                    <h3 className="text-2xl">{dict.name}</h3>
                </Link>
                <div className="flex flex-wrap justify-center gap-6">
                    <Link href="mailto:felipenovaesrocha@gmail.com" className="text-primary hover:underline text-lg">{dict.links.email}</Link>
                    <Link href="https://www.linkedin.com/in/felipenovaesrocha/" target="_blank" className="text-primary hover:underline text-lg">{dict.links.linkedin}</Link>
                    <Link href="https://www.youtube.com/@felipenovaesrocha" target="_blank" className="text-primary hover:underline text-lg">{dict.links.youtube}</Link>
                    <Link href="https://github.com/kamikazebr" target="_blank" className="text-primary hover:underline text-lg">{dict.links.github}</Link>
                </div>
                <div className="text-center text-muted-foreground text-sm mt-4">
                    {dict.copyright}
                </div>
            </div>
        </footer>
    );
};

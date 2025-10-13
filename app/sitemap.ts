import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.felipenovaesrocha.xyz'

    const sections = ['', '#about', '#timeline', '#expertise', '#projects', '#services', '#contact']

    const enPages = sections.map(section => ({
        url: `${baseUrl}${section}`,
        lastModified: new Date(),
        changeFrequency: section === '#projects' ? 'weekly' : 'monthly' as const,
        priority: section === '' ? 1 : section === '#projects' ? 0.9 : section === '#contact' ? 0.7 : 0.8,
        alternates: {
            languages: {
                pt: `${baseUrl}/pt${section}`,
            },
        },
    }))

    const ptPages = sections.map(section => ({
        url: `${baseUrl}/pt${section}`,
        lastModified: new Date(),
        changeFrequency: section === '#projects' ? 'weekly' : 'monthly' as const,
        priority: section === '' ? 1 : section === '#projects' ? 0.9 : section === '#contact' ? 0.7 : 0.8,
        alternates: {
            languages: {
                en: `${baseUrl}${section}`,
            },
        },
    }))

    return [...enPages, ...ptPages]
}

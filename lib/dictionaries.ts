import 'server-only';

export type Locale = 'en' | 'pt';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  pt: () => import('@/dictionaries/pt.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export const i18n = {
  defaultLocale: 'en' as Locale,
  locales: ['en', 'pt'] as Locale[],
} as const;

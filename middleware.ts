import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './lib/dictionaries';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already starts with a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname has locale or it's a static file, continue
  if (pathnameHasLocale || pathname.includes('.') || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  // For root path, rewrite to default locale (en)
  if (pathname === '/') {
    return NextResponse.rewrite(new URL(`/${i18n.defaultLocale}`, request.url));
  }

  // For other paths without locale, rewrite to default locale
  return NextResponse.rewrite(new URL(`/${i18n.defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};

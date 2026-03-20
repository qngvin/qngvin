import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale, locales, Locale } from './lib/i18n/config';

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  // Read locale from cookie
  let locale = request.cookies.get('NEXT_LOCALE')?.value;

  // Validate locale
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  const response = NextResponse.next();

  // Set the locale in the cookie to ensure it's always available
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24, // 1 year
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  // Match all paths EXCEPT Next.js internals, API routes, and static assets
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

import { defineMiddleware } from 'astro/middleware';

const locales = ['en', 'pt', 'es'] as const;
const defaultLocale = 'en';
const localePrefix = new RegExp(`^/(${locales.join('|')})(/|$)`);
const publicFile = /\.[a-z0-9]+$/i;

const getCookieLocale = (cookieHeader: string | null): string | null => {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(/(?:^|;)\s*locale=([a-z-]+)/i);
  const value = match?.[1]?.toLowerCase() ?? null;
  if (!value) return null;
  const base = value.split('-')[0];
  return locales.includes(base as (typeof locales)[number]) ? base : null;
};

const getHeaderLocale = (header: string | null): string | null => {
  if (!header) return null;
  const preferences = header
    .split(',')
    .map((part) => part.trim())
    .map((part) => {
      const [lang, qValue] = part.split(';q=');
      const q = qValue ? Number.parseFloat(qValue) : 1;
      return { lang: lang.toLowerCase(), q: Number.isNaN(q) ? 0 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const pref of preferences) {
    const base = pref.lang.split('-')[0];
    if (locales.includes(base as (typeof locales)[number])) {
      return base;
    }
  }
  return null;
};

export const onRequest = defineMiddleware(({ request, url }, next) => {
  const { pathname } = url;

  if (pathname.startsWith('/_astro') || publicFile.test(pathname) || localePrefix.test(pathname)) {
    return next();
  }

  const cookieLocale = getCookieLocale(request.headers.get('cookie'));
  const headerLocale = getHeaderLocale(request.headers.get('accept-language'));
  const preferred = cookieLocale || headerLocale || defaultLocale;

  if (preferred !== defaultLocale) {
    const redirectUrl = new URL(url);
    redirectUrl.pathname = `/${preferred}${pathname}`;
    return Response.redirect(redirectUrl, 302);
  }

  return next();
});

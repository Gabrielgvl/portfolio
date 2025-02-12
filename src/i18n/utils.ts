import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLocaleFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(locale: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[locale][key] || ui[defaultLang][key] || key;
  };
}

export function useTranslatedPath(locale: keyof typeof ui) {
  return function translatePath(path: string, l: string = locale) {
    const pathName = path.replaceAll('/', '');
    const hasTranslation =
      defaultLang !== l &&
      routes[l as keyof typeof routes] !== undefined &&
      routes[l as keyof typeof routes][pathName as keyof (typeof routes)[typeof defaultLang]] !==
        undefined;

    const translatedPath = hasTranslation
      ? '/' +
        routes[l as keyof typeof routes][pathName as keyof (typeof routes)[typeof defaultLang]]
      : path;

    return !showDefaultLang && l === defaultLang ? translatedPath : `/${l}${translatedPath}`;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLocale = getLocaleFromUrl(url);

  if (defaultLang === currentLocale) {
    const route = Object.values(routes)[0];
    return route[path as keyof (typeof routes)[typeof defaultLang]] !== undefined
      ? route[path as keyof (typeof routes)[typeof defaultLang]]
      : undefined;
  }

  const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  if (currentLocale in routes) {
    const reversedKey = getKeyByValue(routes[currentLocale as keyof typeof routes], path);

    if (reversedKey !== undefined) {
      return reversedKey;
    }
  }

  return undefined;
}

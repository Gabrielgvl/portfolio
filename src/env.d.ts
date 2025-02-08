/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'date-fns/locale' {
  export const ptBR: Locale;
}

declare module 'canvas-confetti' {
  export default function confetti(options?: object): Promise<void>;
}

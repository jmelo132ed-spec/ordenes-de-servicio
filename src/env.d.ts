/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly USE_MOCK?: string;
  readonly API_URL?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_WHATSAPP_NUMBER?: string;
  readonly PUBLIC_EMAIL?: string;
  readonly PUBLIC_LEGAL_NAME?: string;
  readonly PUBLIC_NIF?: string;
  readonly PUBLIC_ADDRESS?: string;
  readonly PUBLIC_GA_ID?: string;
  readonly PUBLIC_ADS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}

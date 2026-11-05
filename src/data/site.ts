function read(value: string | undefined, fallback = "") {
  const text = (value ?? "").trim();
  return text || fallback;
}

export const site = {
  name: "Proclima Integral Servicios",
  city: "Barcelona",
  region: "Barcelona y área metropolitana",
  url: read(import.meta.env.PUBLIC_SITE_URL, "https://focifred.es").replace(/\/$/, ""),
  whatsapp: read(import.meta.env.PUBLIC_WHATSAPP_NUMBER).replace(/\D/g, ""),
  email: read(import.meta.env.PUBLIC_EMAIL, "hola@focifred.es"),
  legalName: read(import.meta.env.PUBLIC_LEGAL_NAME, "Proclima Integral Servicios"),
  nif: read(import.meta.env.PUBLIC_NIF),
  address: read(import.meta.env.PUBLIC_ADDRESS, "Barcelona"),
  gaId: read(import.meta.env.PUBLIC_GA_ID),
  adsId: read(import.meta.env.PUBLIC_ADS_ID),
};

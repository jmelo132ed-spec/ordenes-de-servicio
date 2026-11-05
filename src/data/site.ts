function read(value: string | undefined, fallback = "") {
  const text = (value ?? "").trim();
  return text || fallback;
}

export const site = {
  name: "Foc i Fred",
  city: "Barcelona",
  region: "Barcelona y área metropolitana",
  url: read(import.meta.env.PUBLIC_SITE_URL, "https://focifred.es").replace(/\/$/, ""),
  whatsapp: read(import.meta.env.PUBLIC_WHATSAPP_NUMBER, "573206352726").replace(/\D/g, ""),
  phone: read(import.meta.env.PUBLIC_PHONE).replace(/[^\d+]/g, ""),
  email: read(import.meta.env.PUBLIC_EMAIL, "hola@focifred.es"),
  legalName: read(import.meta.env.PUBLIC_LEGAL_NAME, "Foc i Fred"),
  nif: read(import.meta.env.PUBLIC_NIF),
  address: read(import.meta.env.PUBLIC_ADDRESS, "Barcelona"),
  gaId: read(import.meta.env.PUBLIC_GA_ID),
  adsId: read(import.meta.env.PUBLIC_ADS_ID),
};

export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  const local = digits.startsWith("34") ? digits.slice(2) : digits;
  if (local.length !== 9) return value;
  return `+34 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
}

export function phoneHref(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  return `tel:+${digits.startsWith("34") ? digits : `34${digits}`}`;
}

import {
  brands,
  faqs,
  families,
  featuredBrands,
  services,
  zones,
  type Brand,
  type Faq,
  type Service,
} from "../data/mockData";

const useMock = import.meta.env.USE_MOCK !== "false";

async function load<T>(path: string, fallback: T): Promise<T> {
  if (useMock) return fallback;

  const base = import.meta.env.API_URL;
  if (!base) return fallback;

  try {
    const response = await fetch(`${base}${path}`);
    if (!response.ok) return fallback;
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

export function getServices() {
  return load<Service[]>("/services", services);
}

export function getService(slug: string) {
  return getServices().then((list) => list.find((item) => item.slug === slug));
}

export function getBrands() {
  return load<Brand[]>("/brands", brands);
}

export function getFaqs() {
  return load<Faq[]>("/faqs", faqs);
}

export function getFamilies() {
  return families;
}

export function getFeaturedBrands() {
  return featuredBrands;
}

export function getZones() {
  return zones;
}

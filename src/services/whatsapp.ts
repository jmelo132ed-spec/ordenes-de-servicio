const ticketEquipment: Record<string, string> = {
  "calderas-de-gas": "CALDERA",
  "calderas-de-gasoil": "CALDERA",
  "termos-electricos": "TERMO",
  "calentadores-de-gas": "CALENTADOR",
  "aire-acondicionado": "AIRE ACONDICIONADO",
  "aire-industrial": "AIRE INDUSTRIAL",
  "aerotermia": "AEROTERMIA",
  cocinas: "COCINA",
  hornos: "HORNO",
  lavadoras: "LAVADORA",
  secadoras: "SECADORA",
  frigorificos: "FRIGORIFICO",
  campanas: "CAMPANA",
  otro: "EQUIPO",
};

const ticketLabel: Record<string, string> = {
  "calderas-de-gas": "Caldera de gas",
  "calderas-de-gasoil": "Caldera de gasoil",
  "termos-electricos": "Termo eléctrico",
  "calentadores-de-gas": "Calentador de gas",
  "aire-acondicionado": "Aire acondicionado",
  "aire-industrial": "Aire industrial",
  "aerotermia": "Aerotermia",
  cocinas: "Cocina",
  hornos: "Horno",
  lavadoras: "Lavadora",
  secadoras: "Secadora",
  frigorificos: "Frigorífico",
  campanas: "Campana",
  otro: "Otro equipo",
};

export const visitHours = ["8 A 10", "10 A 12", "12 A 2", "2 A 4", "3 A 5", "4 A 6", "6 A 8"];

export interface LeadInput {
  servicio: string;
  marca: string;
  fecha: string;
  hora: string;
  direccion: string;
  codigoPostal: string;
  nombre: string;
  telefono: string;
  detalle: string;
  sintomas: string[];
}

export function isSpanishMobile(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

export function displayPhone(value: string) {
  return value.replace(/\D/g, "");
}

export interface LeadReceipt {
  order: string;
  fecha: string;
  hora: string;
  equipo: string;
  marca: string;
  direccion: string;
  codigoPostal: string;
  nombre: string;
}

export function leadError(lead: LeadInput) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(lead.fecha)) return "Elige la fecha.";
  if (!visitHours.includes(lead.hora)) return "Elige la hora.";
  if (lead.direccion.trim().length < 5) return "Escribe la dirección completa.";
  if (!/^\d{5}$/.test(lead.codigoPostal.trim())) return "Escribe el código postal, 5 números.";
  if (lead.nombre.trim().length < 2) return "Escribe el nombre del cliente.";
  if (!isSpanishMobile(lead.telefono)) return "Escribe un teléfono de contacto.";
  if (!ticketLabel[lead.servicio]) return "Elige el equipo.";
  if (lead.marca.trim().length < 2) return "Escribe la marca.";
  const diagnosis = [...lead.sintomas, lead.detalle].some((item) => item.trim());
  if (!diagnosis) return "Escribe el diagnóstico.";
  return "";
}

function ticketDate(iso: string) {
  const [year, month, day] = iso.split("-");
  if (!year || !month || !day) return iso;
  return `${day}-${month}-${year}`;
}

function up(value: string) {
  return value.trim().toLocaleUpperCase("es-ES");
}

export function buildLeadMessage(lead: LeadInput) {
  const equipment = ticketEquipment[lead.servicio] ?? "EQUIPO";
  const diagnosis = [...lead.sintomas, lead.detalle].map((item) => item.trim()).filter(Boolean).join(". ");
  const order = String(Date.now()).slice(-4);
  const fecha = ticketDate(lead.fecha);
  const receipt: LeadReceipt = {
    order,
    fecha,
    hora: lead.hora.trim(),
    equipo: ticketLabel[lead.servicio] ?? "Equipo",
    marca: lead.marca.trim(),
    direccion: lead.direccion.trim(),
    codigoPostal: lead.codigoPostal.trim(),
    nombre: lead.nombre.trim(),
  };

  const text = [
    "🔵🟠 FOC I FRED",
    "TÉCNICO: STEVEN Y YESID",
    "━━━━━━━━━━━━━━━",
    `📋 ORD: ${order}`,
    `📅 FECHA: ${fecha}`,
    `🕓 HORA: ${up(lead.hora)}`,
    `📍 DIRECCIÓN: ${up(lead.direccion)}`,
    `📮 CÓDIGO POSTAL: ${receipt.codigoPostal}`,
    `👤 CLIENTE: ${up(lead.nombre)}`,
    `📞 TELÉFONO: ${displayPhone(lead.telefono)}`,
    `🔧 MARCA DEL EQUIPO: ${up(lead.marca)} ${equipment}`,
    `⚙️ DIAGNÓSTICO: ${up(diagnosis)}`,
    "💶 IMPORTE: A CONFIRMAR",
  ].join("\n");

  return { text, receipt };
}

export function buildWhatsappUrl(number: string, message: string) {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

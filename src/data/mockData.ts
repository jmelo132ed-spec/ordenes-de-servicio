export type FamilyId = "calor" | "clima" | "hogar";
export type BrandLine = "calor" | "clima" | "industrial" | "hogar";

export type ServiceSlug =
  | "calderas-de-gas"
  | "calderas-de-gasoil"
  | "termos-electricos"
  | "calentadores-de-gas"
  | "aire-acondicionado"
  | "aire-industrial"
  | "aerotermia"
  | "cocinas"
  | "hornos"
  | "lavadoras"
  | "secadoras"
  | "frigorificos"
  | "campanas";

export interface Service {
  slug: ServiceSlug;
  name: string;
  short: string;
  family: FamilyId;
  summary: string;
  intro: string;
  includes: string[];
  symptoms: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface Brand {
  name: string;
  lines: BrandLine[];
  services: ServiceSlug[];
}

export interface Faq {
  question: string;
  answer: string;
}

export const families: { id: FamilyId; title: string; text: string }[] = [
  {
    id: "calor",
    title: "Calor y agua caliente",
    text: "Calderas de gas y de gasoil, termos eléctricos y calentadores. Reparamos, instalamos y cambiamos el equipo.",
  },
  {
    id: "clima",
    title: "Frío y climatización",
    text: "Aire doméstico, equipos de local y oficina, y aerotermia. Del split de casa al sistema del negocio.",
  },
  {
    id: "hogar",
    title: "Línea blanca",
    text: "Cocinas, hornos, lavadoras, secadoras, frigoríficos y campanas de las marcas que hay en Barcelona.",
  },
];

export const jobs = [
  { value: "reparacion", label: "Reparar", message: "Reparación" },
  { value: "instalacion", label: "Instalar", message: "Instalación" },
  { value: "mantenimiento", label: "Mantener", message: "Mantenimiento" },
  { value: "venta", label: "Comprar", message: "Venta de equipo" },
] as const;

export const urgencies = [
  { value: "hoy", label: "Hoy", message: "Hoy, si es posible" },
  { value: "pronto", label: "24–48 h", message: "En 24-48 horas" },
  { value: "semana", label: "Semana", message: "Esta semana" },
  { value: "flexible", label: "Sin prisa", message: "Sin fecha cerrada" },
] as const;

export const services: Service[] = [
  {
    slug: "calderas-de-gas",
    name: "Calderas de gas",
    short: "Condensación, mixtas y de solo calefacción.",
    family: "calor",
    summary: "Reparación, mantenimiento, instalación y cambio de caldera de gas.",
    intro:
      "Si la caldera no enciende, pierde presión o se queda sin agua caliente, pide la visita desde aquí. También instalamos y sustituimos equipos de gas de las marcas que se ven en Barcelona, de la gama más habitual a la premium.",
    includes: [
      "Reparación y diagnóstico en casa",
      "Mantenimiento de temporada",
      "Instalación y sustitución",
      "Presupuesto de equipo nuevo si no compensa reparar",
    ],
    symptoms: [
      "No enciende",
      "No hay agua caliente",
      "Pierde presión",
      "Gotea",
      "Hace ruido",
      "Sale un código de error",
      "Quiero cambiarla",
    ],
    metaTitle: "Reparación e instalación de calderas de gas en Barcelona",
    metaDescription:
      "Servicio de calderas de gas en Barcelona: reparación, mantenimiento, instalación y venta. Vaillant, Junkers, Saunier Duval, Baxi, Roca y el resto de marcas.",
  },
  {
    slug: "calderas-de-gasoil",
    name: "Calderas de gasoil",
    short: "Casas y equipos de gasóleo, también en el área metropolitana.",
    family: "calor",
    summary: "Reparación, instalación y cambio de calderas de gasoil o gasóleo.",
    intro:
      "Muchas casas del área de Barcelona siguen con gasoil. Reparamos la caldera y el quemador, hacemos el mantenimiento y, cuando toca, proponemos el equipo nuevo. Si buscas gasóleo, es el mismo servicio.",
    includes: [
      "Calderas de gasoil y gasóleo",
      "Quemadores y puesta a punto",
      "Instalación y sustitución",
      "Visita en Barcelona y municipios del alrededor",
    ],
    symptoms: [
      "No arranca",
      "Huele a gasoil",
      "Echa humo",
      "Se bloquea",
      "No calienta",
      "El quemador falla",
      "Quiero cambiarla",
    ],
    metaTitle: "Reparación de calderas de gasoil en Barcelona",
    metaDescription:
      "Reparación, mantenimiento e instalación de calderas de gasoil y gasóleo en Barcelona. Domusa, Ferroli, Baxi, Lasian, Roca y otras marcas.",
  },
  {
    slug: "termos-electricos",
    name: "Termos eléctricos",
    short: "Sin agua caliente, pérdidas o termo viejo para cambiar.",
    family: "calor",
    summary: "Reparación, instalación y venta de termos eléctricos.",
    intro:
      "El termo que no calienta, salta el automático o pierde agua por abajo. Lo revisamos, lo reparamos o te dejamos uno nuevo instalado, vertical u horizontal, de la capacidad que necesite la vivienda.",
    includes: [
      "Reparación de termos eléctricos",
      "Cambio de equipo",
      "Instalación en piso, ático o local",
      "Presupuesto según litros y marca",
    ],
    symptoms: [
      "No calienta",
      "Salta la luz",
      "Pierde agua",
      "Tarda mucho",
      "Hace ruido",
      "Se ha quedado pequeño",
      "Quiero uno nuevo",
    ],
    metaTitle: "Reparación e instalación de termos eléctricos en Barcelona",
    metaDescription:
      "Termos eléctricos en Barcelona: reparación, instalación y venta. Cointra, Ariston, Fleck, Junkers, Tesy, Thermor y más marcas.",
  },
  {
    slug: "calentadores-de-gas",
    name: "Calentadores de gas",
    short: "Agua caliente instantánea en cocina y baño.",
    family: "calor",
    summary: "Reparación, instalación y cambio de calentadores de gas.",
    intro:
      "El calentador que no enciende, se apaga al abrir el grifo o ya no da caudal. Lo reparamos o lo sustituimos por un equipo actual, con la instalación de gas hecha por personal habilitado.",
    includes: [
      "Reparación de calentadores estancos y atmosféricos",
      "Sustitución por un modelo actual",
      "Instalación de gas con personal habilitado",
      "Presupuesto cerrado antes de cambiar el equipo",
    ],
    symptoms: [
      "No enciende",
      "Se apaga",
      "Poca agua caliente",
      "Huele a gas",
      "La llama es irregular",
      "Gotea",
      "Quiero cambiarlo",
    ],
    metaTitle: "Reparación de calentadores de gas en Barcelona",
    metaDescription:
      "Calentadores de gas en Barcelona: reparación, instalación y venta. Junkers, Cointra, Neckar, Vaillant, Saunier Duval, Ariston y otras marcas.",
  },
  {
    slug: "aire-acondicionado",
    name: "Aire acondicionado",
    short: "Splits, multisplits y equipos por conductos.",
    family: "clima",
    summary: "Instalación, reparación, mantenimiento y venta de aire acondicionado.",
    intro:
      "Para el piso que no enfría en julio o la bomba de calor que no calienta en enero. Instalamos, reparamos y hacemos el mantenimiento de splits, multisplits y aire por conductos en viviendas de Barcelona.",
    includes: [
      "Reparación de split, multisplit y conductos",
      "Instalación de equipo nuevo",
      "Mantenimiento y limpieza de temporada",
      "Carga y revisión del circuito, si el equipo lo necesita",
    ],
    symptoms: [
      "No enfría",
      "No calienta",
      "Gotea dentro de casa",
      "Hace hielo",
      "Huele mal",
      "Hace mucho ruido",
      "Quiero instalar uno",
    ],
    metaTitle: "Aire acondicionado en Barcelona | Instalación y reparación",
    metaDescription:
      "Instalación, reparación y mantenimiento de aire acondicionado en Barcelona. Daikin, Mitsubishi, Fujitsu, LG, Samsung, Panasonic y más.",
  },
  {
    slug: "aire-industrial",
    name: "Aire industrial y comercial",
    short: "Locales, oficinas, comunidades y equipos centralizados.",
    family: "clima",
    summary: "Climatización de negocios, oficinas y sistemas de mayor tamaño.",
    intro:
      "Locales, restaurantes, clínicas, oficinas, comunidades y naves. Trabajamos equipos de cassette, conductos, rooftop, VRF y sistemas centralizados, además de la ventilación ligada a la instalación.",
    includes: [
      "Aire comercial de local y oficina",
      "Sistemas VRF y por conductos",
      "Equipos de cubierta y climatización centralizada",
      "Mantenimiento para que el negocio no pare",
    ],
    symptoms: [
      "El local no enfría",
      "Una zona no climatiza",
      "El equipo se para",
      "Hace ruido en el falso techo",
      "Hay que mantenerlo",
      "Quiero ampliar la instalación",
      "Necesito presupuesto de obra",
    ],
    metaTitle: "Aire acondicionado industrial y comercial en Barcelona",
    metaDescription:
      "Climatización comercial e industrial en Barcelona: VRF, conductos, rooftop y mantenimiento de locales, oficinas y comunidades.",
  },
  {
    slug: "aerotermia",
    name: "Aerotermia",
    short: "Clima y agua caliente con bomba de calor.",
    family: "clima",
    summary: "Instalación, revisión y reparación de aerotermia.",
    intro:
      "La aerotermia sustituye en muchas casas a la caldera y al aire por separado. Instalamos el equipo, revisamos uno que ya está puesto y reparamos cuando deja de dar calor, frío o agua caliente.",
    includes: [
      "Instalación de aerotermia",
      "Revisión de equipos existentes",
      "Reparación de bomba de calor",
      "Presupuesto para sustituir una caldera",
    ],
    symptoms: [
      "No calienta la casa",
      "No hay agua caliente",
      "Gasta más de lo esperado",
      "Sale un error",
      "Hace ruido la unidad exterior",
      "Quiero instalarla",
      "Quiero dejar la caldera",
    ],
    metaTitle: "Aerotermia en Barcelona | Instalación y reparación",
    metaDescription:
      "Instalación y reparación de aerotermia en Barcelona. Daikin, Mitsubishi, Panasonic, Vaillant, Saunier Duval, Bosch, LG y otras marcas.",
  },
  {
    slug: "cocinas",
    name: "Cocinas",
    short: "Placas de gas, vitrocerámicas e inducción.",
    family: "hogar",
    summary: "Reparación, instalación y venta de cocinas y placas.",
    intro:
      "La placa que no enciende un fuego, la inducción que no detecta el recipiente o la cocina de gas que ya no es segura. Reparamos e instalamos placas y cocinas de las marcas que hay en los pisos de Barcelona.",
    includes: [
      "Placas de gas, vitrocerámica e inducción",
      "Reparación en el domicilio",
      "Instalación al cambiar la cocina",
      "Presupuesto de equipo nuevo",
    ],
    symptoms: [
      "Un fuego no enciende",
      "La inducción no detecta",
      "Se apaga sola",
      "Salta el diferencial",
      "El cristal está roto",
      "Huele a gas",
      "Quiero cambiarla",
    ],
    metaTitle: "Reparación de cocinas y placas en Barcelona",
    metaDescription:
      "Reparación e instalación de cocinas y placas en Barcelona. Bosch, Balay, Siemens, Teka, Whirlpool, Fagor, Cata y otras marcas.",
  },
  {
    slug: "hornos",
    name: "Hornos",
    short: "No calienta, no se apaga o falla el programa.",
    family: "hogar",
    summary: "Reparación, instalación y venta de hornos.",
    intro:
      "El horno que no coge temperatura, se queda la luz encendida o no responde el programador. Lo reparamos en casa y, si la reparación no compensa, te proponemos uno nuevo con la instalación hecha.",
    includes: [
      "Hornos independientes y de columna",
      "Reparación de resistencias, mandos y cierre",
      "Instalación del horno nuevo",
      "Presupuesto antes de sustituir",
    ],
    symptoms: [
      "No calienta",
      "No se apaga",
      "La puerta no cierra",
      "El ventilador suena",
      "No hace los programas",
      "Salta la luz",
      "Quiero cambiarlo",
    ],
    metaTitle: "Reparación de hornos en Barcelona",
    metaDescription:
      "Reparación e instalación de hornos en Barcelona. Balay, Bosch, Siemens, Teka, AEG, Electrolux, Fagor, Smeg y más marcas.",
  },
  {
    slug: "lavadoras",
    name: "Lavadoras",
    short: "No centrifuga, no desagua o se queda a medias.",
    family: "hogar",
    summary: "Reparación, instalación y venta de lavadoras.",
    intro:
      "Una lavadora parada deja el piso parado. Revisamos el fallo de centrifugado, desagüe, carga de agua o electrónico, y te decimos si compensa reparar o cambiarla.",
    includes: [
      "Reparación en el domicilio",
      "Lavadoras de carga frontal y superior",
      "Instalación y nivelación del equipo nuevo",
      "Presupuesto de sustitución",
    ],
    symptoms: [
      "No centrifuga",
      "No desagua",
      "No coge agua",
      "Hace ruido al girar",
      "Pierde agua",
      "Se queda bloqueada",
      "Quiero cambiarla",
    ],
    metaTitle: "Reparación de lavadoras en Barcelona",
    metaDescription:
      "Reparación e instalación de lavadoras en Barcelona. Bosch, Balay, Siemens, LG, Samsung, Whirlpool, AEG, Beko, Fagor y más.",
  },
  {
    slug: "secadoras",
    name: "Secadoras",
    short: "No seca, no gira o avisa de filtro y condensación.",
    family: "hogar",
    summary: "Reparación, instalación y venta de secadoras.",
    intro:
      "Secadoras de evacuación, condensación y bomba de calor. Si no seca, no arranca o se para a mitad, la revisamos y te decimos la reparación o el cambio.",
    includes: [
      "Reparación de secadoras domésticas",
      "Condensación y bomba de calor",
      "Instalación del equipo nuevo",
      "Revisión de filtros y desagüe de condensados",
    ],
    symptoms: [
      "No seca",
      "No gira",
      "Se para a medias",
      "No calienta",
      "Avisa de depósito",
      "Hace mucho ruido",
      "Quiero cambiarla",
    ],
    metaTitle: "Reparación de secadoras en Barcelona",
    metaDescription:
      "Reparación e instalación de secadoras en Barcelona. Bosch, Balay, Siemens, AEG, Electrolux, Beko, Whirlpool, LG y más.",
  },
  {
    slug: "frigorificos",
    name: "Frigoríficos",
    short: "No enfría, hace hielo o suena sin parar.",
    family: "hogar",
    summary: "Reparación, instalación y venta de frigoríficos y combi.",
    intro:
      "El frío que se pierde no espera. Reparamos frigoríficos, combi y americanos, y si el equipo ya no merece la reparación te proponemos uno nuevo con la entrega y la puesta en marcha.",
    includes: [
      "Frigoríficos, combi y side by side",
      "Reparación de frío, hielo y ruido",
      "Instalación y nivelación",
      "Presupuesto de equipo nuevo",
    ],
    symptoms: [
      "No enfría",
      "Hace demasiado hielo",
      "El congelador no congela",
      "Suena todo el día",
      "Pierde agua",
      "La luz no se apaga",
      "Quiero cambiarlo",
    ],
    metaTitle: "Reparación de frigoríficos en Barcelona",
    metaDescription:
      "Reparación e instalación de frigoríficos en Barcelona. Balay, Bosch, Siemens, Liebherr, LG, Samsung, Haier, Whirlpool, Fagor y más.",
  },
  {
    slug: "campanas",
    name: "Campanas extractoras",
    short: "No aspira, hace ruido o no enciende la luz.",
    family: "hogar",
    summary: "Reparación, instalación y venta de campanas de cocina.",
    intro:
      "Campanas de pared, isla, integradas y de techo. Reparamos motor, mandos e iluminación, e instalamos la campana nueva cuando reformas la cocina o la actual ya no extrae.",
    includes: [
      "Reparación de motor, mandos y luz",
      "Campanas decorativas, integradas y de isla",
      "Instalación y salida de humos existente",
      "Presupuesto de campana nueva",
    ],
    symptoms: [
      "No aspira",
      "Hace un ruido fuerte",
      "No enciende",
      "La luz no va",
      "Vibra",
      "No responden los botones",
      "Quiero cambiarla",
    ],
    metaTitle: "Reparación de campanas extractoras en Barcelona",
    metaDescription:
      "Reparación e instalación de campanas en Barcelona. Cata, Pando, Mepamsa, Bosch, Balay, Teka, Elica, Frecan y otras marcas.",
  },
];

const gas: ServiceSlug[] = ["calderas-de-gas"];
const oil: ServiceSlug[] = ["calderas-de-gasoil"];
const gasOil: ServiceSlug[] = ["calderas-de-gas", "calderas-de-gasoil"];
const termo: ServiceSlug[] = ["termos-electricos"];
const calent: ServiceSlug[] = ["calentadores-de-gas"];
const agua: ServiceSlug[] = ["termos-electricos", "calentadores-de-gas"];
const ac: ServiceSlug[] = ["aire-acondicionado"];
const acInd: ServiceSlug[] = ["aire-acondicionado", "aire-industrial"];
const acFull: ServiceSlug[] = ["aire-acondicionado", "aire-industrial", "aerotermia"];
const aero: ServiceSlug[] = ["aerotermia"];
const cocina: ServiceSlug[] = ["cocinas", "hornos"];
const lavado: ServiceSlug[] = ["lavadoras", "secadoras"];
const frio: ServiceSlug[] = ["frigorificos"];
const campana: ServiceSlug[] = ["campanas"];
const blanca: ServiceSlug[] = ["cocinas", "hornos", "lavadoras", "secadoras", "frigorificos", "campanas"];
const blancaSinCampana: ServiceSlug[] = ["cocinas", "hornos", "lavadoras", "secadoras", "frigorificos"];

function brand(name: string, lines: BrandLine[], serviceList: ServiceSlug[]): Brand {
  return { name, lines, services: serviceList };
}

export const brands: Brand[] = [
  brand("ACV", ["calor"], [...gas, ...agua]),
  brand("AEG", ["hogar"], blanca),
  brand("Aermec", ["industrial", "clima"], acInd),
  brand("Airlan", ["industrial", "clima"], acInd),
  brand("Airwell", ["clima"], ac),
  brand("Amica", ["hogar"], blancaSinCampana),
  brand("Aparici", ["calor"], agua),
  brand("Ariston", ["calor", "clima"], [...gas, ...agua, ...aero]),
  brand("Asko", ["hogar"], [...cocina, ...lavado]),
  brand("Aspes", ["hogar"], blancaSinCampana),
  brand("Atlantic", ["calor", "clima"], [...gas, ...termo, ...aero]),
  brand("Balay", ["hogar"], blanca),
  brand("Baltur", ["calor"], oil),
  brand("Bauknecht", ["hogar"], blancaSinCampana),
  brand("Baxi", ["calor", "clima"], [...gasOil, ...agua, ...ac, ...aero]),
  brand("Beko", ["hogar", "clima"], [...blanca, ...ac]),
  brand("Benavent", ["hogar"], blancaSinCampana),
  brand("Beretta", ["calor"], [...gas, ...calent]),
  brand("Bertazzoni", ["hogar"], cocina),
  brand("Biasi", ["calor"], gas),
  brand("Blomberg", ["hogar"], blancaSinCampana),
  brand("Bolero", ["hogar"], blancaSinCampana),
  brand("Bosch", ["calor", "clima", "industrial", "hogar"], [...gas, ...agua, ...acFull, ...blanca]),
  brand("Bru", ["hogar"], [...lavado, ...frio]),
  brand("Buderus", ["calor"], gasOil),
  brand("Cabel", ["calor"], termo),
  brand("Candy", ["hogar"], blancaSinCampana),
  brand("Carrier", ["clima", "industrial"], acInd),
  brand("Cata", ["hogar"], [...cocina, ...campana]),
  brand("Cecotec", ["hogar"], blancaSinCampana),
  brand("Chaffoteaux", ["calor"], [...gas, ...agua]),
  brand("CIAT", ["clima", "industrial"], acInd),
  brand("Clint", ["clima", "industrial"], acInd),
  brand("Cointra", ["calor", "clima"], [...gas, ...agua, ...aero]),
  brand("Comfee", ["hogar"], [...lavado, ...frio]),
  brand("Corberó", ["hogar", "clima"], [...blanca, ...ac]),
  brand("Cuenod", ["calor"], oil),
  brand("Daewoo", ["hogar"], [...lavado, ...frio]),
  brand("Daikin", ["clima", "industrial"], acFull),
  brand("De Dietrich", ["calor", "hogar"], [...gasOil, ...cocina, ...campana]),
  brand("De'Longhi", ["clima"], ac),
  brand("Domusa", ["calor", "clima"], [...oil, ...aero]),
  brand("EAS Electric", ["clima"], ac),
  brand("Ecoflam", ["calor"], oil),
  brand("Ecoforest", ["clima"], aero),
  brand("Edesa", ["calor", "hogar"], [...agua, ...blanca]),
  brand("Elco", ["calor"], gasOil),
  brand("Electrolux", ["hogar"], blanca),
  brand("Elica", ["hogar"], campana),
  brand("Elnur", ["calor"], termo),
  brand("E.l.m. Leblanc", ["calor"], gas),
  brand("Faber", ["hogar"], campana),
  brand("Fagor", ["calor", "hogar"], [...gas, ...agua, ...blanca]),
  brand("Falmec", ["hogar"], campana),
  brand("Ferroli", ["calor", "clima"], [...gasOil, ...agua, ...ac, ...aero]),
  brand("FläktGroup", ["industrial"], ["aire-industrial"]),
  brand("Fleck", ["calor"], termo),
  brand("Fondital", ["calor"], gas),
  brand("Forcali", ["calor"], termo),
  brand("Franke", ["hogar"], [...cocina, ...campana]),
  brand("Frecan", ["hogar"], campana),
  brand("Fujitsu", ["clima", "industrial"], acInd),
  brand("Gabarrón", ["calor"], termo),
  brand("Gaggenau", ["hogar"], [...cocina, ...campana]),
  brand("General", ["clima", "industrial"], acInd),
  brand("Giatsu", ["clima"], ac),
  brand("Gorenje", ["hogar"], blancaSinCampana),
  brand("Gree", ["clima", "industrial"], acInd),
  brand("Grundig", ["hogar"], blancaSinCampana),
  brand("Haier", ["clima", "hogar"], [...acFull, ...blancaSinCampana]),
  brand("Hermann", ["calor"], [...gas, ...calent]),
  brand("Hisense", ["clima", "industrial", "hogar"], [...acInd, ...blancaSinCampana]),
  brand("Hitachi", ["clima", "industrial"], [...acInd, ...aero]),
  brand("Hitecsa", ["industrial", "clima"], acInd),
  brand("Hoover", ["hogar"], blancaSinCampana),
  brand("Hotpoint", ["hogar"], blancaSinCampana),
  brand("Hoval", ["calor", "industrial"], [...gasOil, "aire-industrial"]),
  brand("HTW", ["clima"], [...ac, ...aero]),
  brand("Ignis", ["hogar"], blancaSinCampana),
  brand("Immergas", ["calor"], gas),
  brand("Indesit", ["hogar"], blancaSinCampana),
  brand("Infiniton", ["hogar"], blancaSinCampana),
  brand("Intergas", ["calor"], gas),
  brand("Italtherm", ["calor"], gas),
  brand("Joannes", ["calor"], gasOil),
  brand("Jocel", ["calor", "hogar"], [...termo, ...lavado]),
  brand("Johnson", ["clima"], [...ac, ...aero]),
  brand("Johnson Controls", ["industrial", "clima"], acInd),
  brand("Junkers", ["calor", "clima"], [...gas, ...agua, ...ac]),
  brand("Kaisai", ["clima"], ac),
  brand("Kaysun", ["clima"], ac),
  brand("Kiturami", ["calor"], oil),
  brand("Kosner", ["clima"], [...ac, ...aero]),
  brand("Küppersbusch", ["hogar"], cocina),
  brand("La Germania", ["hogar"], cocina),
  brand("Lamborghini Caloreclima", ["calor"], gasOil),
  brand("Lasian", ["calor"], oil),
  brand("Lennox", ["industrial", "clima"], acInd),
  brand("LG", ["clima", "industrial", "hogar"], [...acFull, ...blancaSinCampana]),
  brand("Liebherr", ["hogar"], frio),
  brand("Lynx", ["hogar"], [...lavado, ...frio]),
  brand("Manaut", ["calor"], [...gas, ...calent]),
  brand("Maytag", ["hogar"], lavado),
  brand("Mepamsa", ["hogar"], campana),
  brand("Midea", ["clima", "industrial", "hogar"], [...acFull, ...lavado, ...frio]),
  brand("Miele", ["hogar"], blanca),
  brand("Mitsubishi Electric", ["clima", "industrial"], acFull),
  brand("Mitsubishi Heavy Industries", ["clima", "industrial"], acInd),
  brand("Mundoclima", ["clima"], [...ac, ...aero]),
  brand("Neckar", ["calor"], [...gas, ...agua]),
  brand("Neff", ["hogar"], [...cocina, ...campana]),
  brand("New Pol", ["hogar"], blancaSinCampana),
  brand("Nodor", ["hogar"], campana),
  brand("Olimpia Splendid", ["clima"], ac),
  brand("Orbegozo", ["calor", "clima"], [...termo, ...ac]),
  brand("Otsein", ["hogar"], [...lavado, ...frio]),
  brand("Pando", ["hogar"], campana),
  brand("Panasonic", ["clima", "industrial"], acFull),
  brand("Radiant", ["calor"], gas),
  brand("Remeha", ["calor"], gas),
  brand("Rhoss", ["industrial", "clima"], acInd),
  brand("Riello", ["calor"], gasOil),
  brand("Roca", ["calor"], [...gasOil, ...calent]),
  brand("Rommer", ["hogar"], blancaSinCampana),
  brand("Saivod", ["hogar"], blancaSinCampana),
  brand("Samsung", ["clima", "industrial", "hogar"], [...acFull, ...blancaSinCampana]),
  brand("Sauber", ["hogar"], [...lavado, ...frio]),
  brand("Saunier Duval", ["calor", "clima"], [...gas, ...agua, ...ac, ...aero]),
  brand("Savio", ["calor"], gas),
  brand("Sharp", ["clima", "hogar"], [...ac, ...frio]),
  brand("Siemens", ["hogar"], blanca),
  brand("Sime", ["calor"], gasOil),
  brand("Smeg", ["hogar"], [...cocina, ...frio, ...campana]),
  brand("Soler & Palau", ["industrial"], ["aire-industrial"]),
  brand("Stiebel Eltron", ["calor"], [...termo, ...aero]),
  brand("Superser", ["hogar"], [...cocina, ...lavado, ...frio]),
  brand("Svan", ["hogar"], blancaSinCampana),
  brand("Swegon", ["industrial", "clima"], acInd),
  brand("Sylber", ["calor"], gas),
  brand("Systemair", ["industrial"], ["aire-industrial"]),
  brand("Taurus", ["calor", "clima"], [...termo, ...ac]),
  brand("TCL", ["clima"], ac),
  brand("Teka", ["calor", "hogar"], [...termo, ...blanca]),
  brand("Tesy", ["calor"], termo),
  brand("Thermex", ["calor"], termo),
  brand("Thermor", ["calor", "clima"], [...gas, ...termo, ...aero]),
  brand("Toshiba", ["clima", "industrial"], acFull),
  brand("Trane", ["industrial", "clima"], acInd),
  brand("Trox", ["industrial"], ["aire-industrial"]),
  brand("Unical", ["calor"], gas),
  brand("Universal Blue", ["hogar"], blancaSinCampana),
  brand("Vaillant", ["calor", "clima"], [...gas, ...agua, ...ac, ...aero]),
  brand("Viessmann", ["calor", "clima"], [...gasOil, ...aero]),
  brand("VTS", ["industrial"], ["aire-industrial"]),
  brand("Weishaupt", ["calor"], gasOil),
  brand("Westen", ["calor"], gas),
  brand("Whirlpool", ["hogar", "clima"], [...blanca, ...ac]),
  brand("Wolf", ["calor", "clima", "industrial"], [...gasOil, ...aero, "aire-industrial"]),
  brand("Ygnis", ["calor", "industrial"], [...gasOil, "aire-industrial"]),
  brand("York", ["industrial", "clima"], acInd),
  brand("Zanussi", ["hogar"], blancaSinCampana),
];

export const featuredBrands = [
  "Vaillant",
  "Junkers",
  "Bosch",
  "Saunier Duval",
  "Baxi",
  "Roca",
  "Ferroli",
  "Cointra",
  "Daikin",
  "Mitsubishi Electric",
  "Fujitsu",
  "LG",
  "Samsung",
  "Panasonic",
  "Balay",
  "Siemens",
  "Teka",
  "Cata",
  "Whirlpool",
  "Fagor",
  "Ariston",
  "Domusa",
];

export const zones = {
  city: [
    "Ciutat Vella",
    "Eixample",
    "Sants-Montjuïc",
    "Les Corts",
    "Sarrià-Sant Gervasi",
    "Gràcia",
    "Horta-Guinardó",
    "Nou Barris",
    "Sant Andreu",
    "Sant Martí",
  ],
  metro: [
    "L'Hospitalet de Llobregat",
    "Badalona",
    "Santa Coloma de Gramenet",
    "Sant Adrià de Besòs",
    "Cornellà de Llobregat",
    "Esplugues de Llobregat",
    "Sant Just Desvern",
    "El Prat de Llobregat",
    "Sant Cugat del Vallès",
    "Cerdanyola del Vallès",
    "Castelldefels",
    "Gavà",
    "Viladecans",
    "Montcada i Reixac",
    "Barberà del Vallès",
    "Ripollet",
  ],
};

export const steps = [
  {
    title: "Cuentas el equipo",
    text: "Marca, dirección y qué le pasa.",
  },
  {
    title: "Se abre WhatsApp",
    text: "El aviso sale escrito con la dirección, la hora y el fallo. Solo tienes que enviarlo.",
  },
  {
    title: "Acordamos la visita",
    text: "Te respondemos por el mismo chat y cerramos día y franja.",
  },
  {
    title: "Reparamos o instalamos",
    text: "Si el equipo no compensa, te pasamos precio de uno nuevo puesto.",
  },
];

export const faqs: Faq[] = [
  {
    question: "¿Cómo pido el servicio?",
    answer:
      "Rellenas el formulario con el equipo, la marca, la dirección y el teléfono. Al enviarlo se abre WhatsApp con el aviso escrito. Cuando lo mandas, nos llega.",
  },
  {
    question: "¿Hacéis instalación, reparación y venta?",
    answer:
      "Sí. Reparamos el equipo que ya tienes, hacemos el mantenimiento, instalamos uno nuevo y preparamos el presupuesto del aparato si hay que cambiarlo.",
  },
  {
    question: "¿Trabajáis todas las marcas?",
    answer:
      "Atendemos las marcas que se instalan en Barcelona, en calderas, climatización y línea blanca. Si la tuya no sale en la lista, escríbela igual: el formulario la acepta.",
  },
  {
    question: "¿Sois el servicio técnico oficial?",
    answer:
      "No. Nombramos las marcas para que sepas que conocemos el equipo. No somos el servicio oficial del fabricante ni estamos afiliados a esas empresas.",
  },
  {
    question: "¿Llegáis a todo Barcelona?",
    answer:
      "Sí, a los diez distritos y al área metropolitana: L'Hospitalet, Badalona, Santa Coloma, Cornellà, Sant Cugat, El Prat, Castelldefels y los municipios del alrededor.",
  },
  {
    question: "¿También calderas de gasoil?",
    answer:
      "Sí. Calderas de gasoil o gasóleo, y los quemadores que las acompañan. Es un servicio aparte del de gas natural, con su propia página para pedirlo.",
  },
  {
    question: "¿Hacéis aire de locales y aire industrial?",
    answer:
      "Sí. Además del split de vivienda atendemos locales, oficinas, comunidades y equipos de conductos, VRF, cubierta y climatización centralizada.",
  },
  {
    question: "¿Qué preparo antes de escribir?",
    answer:
      "La marca, el modelo si lo ves en la etiqueta, el barrio o el código postal, y qué hace el equipo. Si hay un código de error en pantalla, apúntalo en el mensaje.",
  },
];

export const brandDisclaimer =
  "Las marcas citadas pertenecen a sus titulares. Las nombramos para identificar equipos que instalamos, reparamos o vendemos. No implica servicio oficial ni relación con el fabricante.";

export function brandsFor(slug: ServiceSlug) {
  return brands
    .filter((item) => item.services.includes(slug))
    .sort((a, b) => a.name.localeCompare(b.name, "es"));
}

export function serviceBySlug(slug: string) {
  return services.find((item) => item.slug === slug);
}

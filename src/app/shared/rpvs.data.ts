export interface NewsArticle {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly body: readonly string[];
  readonly category: string;
  readonly province?: string;
  readonly date: string;
  readonly image: string;
  readonly featured: boolean;
}

export interface Federation {
  readonly id: string;
  readonly province: string;
  readonly name: string;
  readonly description: string;
  readonly address?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly website?: string;
  readonly ceavMember: boolean;
}

export interface SocialGoal {
  readonly title: string;
  readonly description: string;
  readonly icon: SvgIcon;
  readonly accent: string;
}

export interface SvgIcon {
  readonly viewBox: string;
  readonly paths: readonly string[];
}

export interface NavLink {
  readonly label: string;
  readonly path: string;
}

export interface AboutSection {
  readonly title: string;
  readonly body: readonly string[];
}

export interface AboutStat {
  readonly value: string;
  readonly label: string;
}

const asset = (fileName: string): string => `assets/rpvs/${fileName}`;

export const federationFragment = (federation: Federation): string =>
  federation.id;

const goalIcons = {
  institution: {
    viewBox: '0 0 24 24',
    paths: [
      'M4 10.2 12 5l8 5.2v1.3H4v-1.3Z',
      'M6 12.8h2v5.7H6v-5.7Z',
      'M11 12.8h2v5.7h-2v-5.7Z',
      'M16 12.8h2v5.7h-2v-5.7Z',
      'M4.8 19.8h14.4v1.7H4.8v-1.7Z',
    ],
  },
  people: {
    viewBox: '0 0 24 24',
    paths: [
      'M9 11.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z',
      'M15.8 10.8a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z',
      'M3.8 18.8c.4-3.3 2.2-5.3 5.2-5.3s4.8 2 5.2 5.3H3.8Z',
      'M13.8 18.8c-.1-1.5-.6-2.9-1.4-4 1-.8 2.1-1.2 3.4-1.2 2.6 0 4.2 1.9 4.5 5.2h-6.5Z',
    ],
  },
  neighborhood: {
    viewBox: '0 0 24 24',
    paths: [
      'M4 20V8.8l5-3.2 5 3.2V20h-3.2v-5.6H7.2V20H4Z',
      'M15 20V9.8l5 2.8V20h-5Z',
      'M7.2 10.2h3.6v2H7.2v-2Z',
      'M16.8 13.5h1.7v1.7h-1.7v-1.7Z',
      'M16.8 16.5h1.7v1.7h-1.7v-1.7Z',
    ],
  },
  assembly: {
    viewBox: '0 0 24 24',
    paths: [
      'M12 10.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z',
      'M6.4 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z',
      'M17.6 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z',
      'M7.1 19.5c.3-3 2-5 4.9-5s4.6 2 4.9 5H7.1Z',
      'M2.8 18.6c.3-2.7 1.5-4.4 3.7-4.4.9 0 1.6.2 2.2.7-1.1 1-1.8 2.2-2.1 3.7H2.8Z',
      'M17.4 18.6c-.3-1.5-1-2.8-2.1-3.7.6-.5 1.4-.7 2.2-.7 2.2 0 3.4 1.7 3.7 4.4h-3.8Z',
    ],
  },
} satisfies Record<string, SvgIcon>;

export const navLinks: readonly NavLink[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Quienes somos', path: '/quienes-somos' },
  { label: 'Federaciones', path: '/federaciones' },
];

export const aboutIntro: readonly string[] = [
  'La Confederación Provincial Red Vecinal de Sevilla (RPVS) es una confederación provincial de entidades vecinales que coordina federaciones y asociaciones de la provincia de Sevilla.',
  'Nace para reforzar la representación del movimiento vecinal sevillano, defender los intereses comunes de los barrios y promover una participación ciudadana cercana, plural y efectiva.',
];

export const aboutStats: readonly AboutStat[] = [
  { value: '3', label: 'Federaciones de referencia en la provincia' },
  { value: 'Sevilla', label: 'Ámbito provincial de actuación' },
  { value: 'AAVV', label: 'Asociaciones vecinales y entidades ciudadanas' },
];

export const aboutSections: readonly AboutSection[] = [
  {
    title: 'Representación provincial',
    body: [
      'RPVS articula una voz común para las federaciones vecinales de Sevilla, Dos Hermanas y Utrera, respetando la autonomía de cada territorio y reforzando la capacidad de interlocución pública.',
      'La confederación trabaja para que las demandas de los barrios lleguen a las administraciones con claridad, continuidad y respaldo colectivo.',
    ],
  },
  {
    title: 'Trabajo en red',
    body: [
      'La coordinación entre federaciones permite compartir diagnósticos, campañas, recursos y experiencias útiles para mejorar la vida cotidiana en los barrios.',
      'RPVS impulsa espacios de encuentro donde las entidades vecinales puedan cooperar, formarse y construir posiciones comunes.',
    ],
  },
  {
    title: 'Compromiso social',
    body: [
      'La defensa de los servicios públicos, la vivienda, la movilidad, la igualdad, la convivencia y el cuidado del espacio urbano forman parte de sus prioridades.',
      'Su actuación se orienta al interés general, al bien común y a una democracia participativa con protagonismo real de la ciudadanía organizada.',
    ],
  },
];

export const socialGoals: readonly SocialGoal[] = [
  {
    title: 'Participación ciudadana',
    description:
      'Fomentar órganos, procesos y espacios de participación que permitan a las asociaciones vecinales intervenir en las decisiones públicas.',
    icon: goalIcons.assembly,
    accent: '#0099cc',
  },
  {
    title: 'Barrios habitables',
    description:
      'Defender barrios cuidados, accesibles y seguros, con equipamientos de proximidad, zonas verdes y movilidad sostenible.',
    icon: goalIcons.neighborhood,
    accent: '#8db92e',
  },
  {
    title: 'Derechos y servicios públicos',
    description:
      'Reivindicar servicios públicos suficientes en sanidad, educación, dependencia, vivienda, transporte y atención social.',
    icon: goalIcons.institution,
    accent: '#797676',
  },
  {
    title: 'Unidad vecinal',
    description:
      'Coordinar federaciones y entidades para ganar fuerza colectiva, compartir recursos y representar mejor la diversidad vecinal sevillana.',
    icon: goalIcons.people,
    accent: '#0099cc',
  },
];

export const federations: readonly Federation[] = [
  {
    id: 'federacion-nazarena',
    province: 'Dos Hermanas',
    name: 'Federación Nazarena',
    description:
      'Federación vecinal de Dos Hermanas integrada en la Confederación Provincial Red Vecinal de Sevilla.',
    ceavMember: false,
  },
  {
    id: 'federacion-uter',
    province: 'Utrera',
    name: 'Federación UTER',
    description:
      'Federación local de entidades vecinales de Utrera, miembro de la confederación provincial RPVS.',
    ceavMember: false,
  },
  {
    id: 'feves',
    province: 'Sevilla',
    name: 'Federación local de Entidades vecinales de Sevilla - FEVES',
    description:
      'Federación sevillana de entidades vecinales y punto de encuentro para asociaciones de vecinos y vecinas de la ciudad.',
    ceavMember: false,
  },
];

export const newsArticles: readonly NewsArticle[] = [
  {
    slug: 'rpvs-coordinacion-provincial',
    title: 'RPVS refuerza la coordinación vecinal en la provincia de Sevilla',
    excerpt:
      'Las federaciones de Sevilla, Dos Hermanas y Utrera comparten una agenda común para mejorar la interlocución institucional.',
    body: [
      'La Confederación Provincial Red Vecinal de Sevilla trabaja para consolidar una estructura provincial capaz de canalizar propuestas, necesidades y reivindicaciones de las entidades vecinales.',
      'El objetivo es sumar capacidad de incidencia sin perder la cercanía con cada barrio y municipio.',
    ],
    category: 'Institucional',
    province: 'Sevilla',
    date: '22 Junio 2026',
    image: asset('federaciones-sala.png'),
    featured: true,
  },
  {
    slug: 'objetivos-y-fines-rpvs',
    title: 'Objetivos y fines para una provincia más participativa',
    excerpt:
      'La confederación sitúa la participación, los servicios públicos y la mejora de los barrios en el centro de su actividad.',
    body: [
      'RPVS orienta su actividad al interés general y a la defensa de derechos sociales, urbanos y vecinales.',
      'La unidad de accion entre federaciones permite abordar retos compartidos desde una perspectiva provincial.',
    ],
    category: 'Objetivos',
    province: 'Sevilla',
    date: '22 Junio 2026',
    image: asset('hero-sevilla.png'),
    featured: false,
  },
];

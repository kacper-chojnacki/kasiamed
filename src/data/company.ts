/**
 * Single source of truth for all company details shown on the site.
 * A `null` value renders as a visible "[DO UZUPEŁNIENIA]" placeholder and is omitted from structured data.
 */

export const company = {
  name: 'KASIA MED',
  /** As registered in CEIDG (sole proprietorship: owner's name + brand). */
  legalName: 'Krzysztof Przybysz KASIAMED' as string | null,
  tagline: 'Transport sanitarny z sercem i empatią.',
  summary:
    'Transport sanitarny, opieka medyczna i zabezpieczenie medyczne wydarzeń. Całodobowa dyspozytornia.',

  phone: {
    display: '720 941 999',
    e164: '+48720941999',
  },
  /** Email that receives enquiries; also displayed on the site. */
  email: 'kasiamed-bukowiec@wp.pl' as string | null,

  address: {
    street: 'ul. Dworcowa 30B',
    postalCode: '86-122',
    city: 'Bukowiec',
    region: 'kujawsko-pomorskie',
    country: 'PL',
  },

  /** Dispatch is 24/7 (per the company flyer); office hours are separate. */
  dispatchHours: 'Całodobowo, 7 dni w tygodniu',
  officeHours: null as string | null,

  serviceArea: 'Cała Polska i Europa (np. przewozy Holandia – Polska)' as string | null,

  regon: null as string | null,
  registry: null as string | null,

  social: {
    facebook: null as string | null,
  },
} as const;

export const telHref = `tel:${company.phone.e164}`;
export const mailHref = company.email ? `mailto:${company.email}` : null;
export const fullAddress = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.address.street} ${company.address.postalCode} ${company.address.city}`,
)}`;

export type IconName = 'ambulance' | 'stethoscope' | 'first-aid';

export interface Service {
  id: string;
  icon: IconName;
  title: string;
  lead: string;
  items: string[];
}

/** Kept short on purpose: the audience is mostly 40–70+, so every line has to earn its place. */
export const services: Service[] = [
  {
    id: 'transport',
    icon: 'ambulance',
    title: 'Transport sanitarny',
    lead: 'Bezpieczny przewóz pacjenta ambulansem.',
    items: [
      'Na badania i wizyty kontrolne',
      'Ze szpitala do domu',
      'Między szpitalami i placówkami',
      'Do urzędu, z pomocą na miejscu',
    ],
  },
  {
    id: 'opieka',
    icon: 'stethoscope',
    title: 'Opieka medyczna',
    lead: 'Pomoc dla pacjentów i ich bliskich.',
    items: ['Opieka długoterminowa', 'Pomoc po wypisie ze szpitala'],
  },
  {
    id: 'ratownictwo',
    icon: 'first-aid',
    title: 'Zabezpieczenie imprez',
    lead: 'Opieka medyczna na wydarzeniach.',
    items: ['Imprezy sportowe i plenerowe', 'Wydarzenia firmowe i rodzinne', 'Pierwsza pomoc na miejscu'],
  },
];

export type HighlightIcon = 'calm' | 'family' | 'team' | 'fleet';

export interface Highlight {
  icon: HighlightIcon;
  title: string;
  text: string;
}

/** "Co nas wyróżnia" in the About section, taken from the company's two-page flyer. */
export const highlights: Highlight[] = [
  {
    icon: 'calm',
    title: 'Bez pośpiechu',
    text: 'Czas w drodze jest tylko dla pacjenta.',
  },
  {
    icon: 'family',
    title: 'Bliscy mogą jechać z nami',
    text: 'Osoba z rodziny lub opiekun jest zawsze mile widziany.',
  },
  {
    icon: 'team',
    title: 'Doświadczony zespół',
    text: '4 ratowników i 2 ratowniczki.',
  },
  {
    icon: 'fleet',
    title: 'Dwa ambulanse typu B',
    text: 'Na pokładzie defibrylator AED i torby ratownicze R1.',
  },
];

export const steps = [
  { title: 'Zadzwoń', text: 'Odbieramy całą dobę, 7 dni w tygodniu.' },
  { title: 'Ustalamy szczegóły', text: 'Termin, trasę i potrzeby pacjenta. Od razu podajemy cenę.' },
  { title: 'Przyjeżdżamy', text: 'O umówionej porze, pod wskazany adres.' },
];

export interface Faq {
  q: string;
  /** Plain text; `{placeholder:Label}` renders a placeholder chip. */
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Ile kosztuje przewóz?',
    a: 'Cena zależy od trasy, terminu i potrzeb pacjenta. Podajemy ją przez telefon, zanim przyjmiemy zlecenie.',
  },
  {
    q: 'Czy jeździcie za granicę?',
    a: 'Tak. Przewozimy pacjentów w całej Polsce i Europie, np. z Holandii do Polski.',
  },
  {
    q: 'Czy jeździcie w nocy, w weekendy i święta?',
    a: 'Tak. Dyspozytornia odbiera telefony całą dobę, 7 dni w tygodniu.',
  },
  {
    q: 'Czy przewóz może być refundowany przez NFZ?',
    a: 'Nie. Świadczymy wyłącznie prywatne usługi komercyjne. Cenę każdego przewozu ustalamy indywidualnie i podajemy przez telefon.',
  },
  {
    q: 'Czy ktoś z rodziny może jechać z pacjentem?',
    a: 'Tak. Osoba z rodziny lub opiekun jest zawsze mile widziany na pokładzie.',
  },
  {
    q: 'Jak zamówić zabezpieczenie imprezy?',
    a: 'Zadzwoń z wyprzedzeniem i podaj datę, miejsce i przybliżoną liczbę uczestników. Przygotujemy ofertę.',
  },
  {
    q: 'Czy w nagłym wypadku mam dzwonić do Was?',
    a: 'Nie. Przy zagrożeniu życia dzwoń zawsze na numer alarmowy 112 lub 999. Nasze usługi nie zastępują pogotowia ratunkowego.',
  },
];

/**
 * Set to true while photos are AI-generated or otherwise illustrative:
 * each photo then gets a visible "Zdjęcie poglądowe" label (EU AI Act transparency, no misleading advertising).
 * The current photos are the company's own vehicles (number plates blurred), so no label.
 */
export const photosAreIllustrative = false;

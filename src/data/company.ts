/**
 * Single source of truth for all company details shown on the site.
 * A `null` value renders as a visible "[DO UZUPEŁNIENIA]" placeholder and is omitted from structured data.
 */

export const company = {
  name: 'KASIA MED',
  legalName: null as string | null,
  tagline: 'Twoje zdrowie, nasz priorytet.',
  summary:
    'Transport sanitarny, opieka medyczna i zabezpieczenie medyczne wydarzeń. Całodobowa dyspozytornia.',

  phone: {
    display: '720 741 999',
    e164: '+48720741999',
  },
  /** Email that receives enquiries; also displayed on the site. */
  email: null as string | null,

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

  serviceArea: null as string | null,

  nip: null as string | null,
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
    items: ['Z domu do szpitala i z powrotem', 'Między szpitalami i placówkami', 'Na badania, zabiegi i rehabilitację'],
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
    q: 'Czy jeździcie w nocy, w weekendy i święta?',
    a: 'Tak. Dyspozytornia odbiera telefony całą dobę, 7 dni w tygodniu.',
  },
  {
    q: 'Czy przewóz może być refundowany przez NFZ?',
    a: 'W niektórych sytuacjach bezpłatny transport zleca lekarz. {placeholder:Informacja, czy firma realizuje przewozy w ramach NFZ} Przewozy prywatne wyceniamy indywidualnie.',
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
 */
export const photosAreIllustrative = true;

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

export type IconName = 'ambulance' | 'stethoscope' | 'first-aid' | 'phone' | 'clipboard' | 'route';

export interface Service {
  id: string;
  icon: IconName;
  title: string;
  lead: string;
  items: string[];
}

export const services: Service[] = [
  {
    id: 'transport',
    icon: 'ambulance',
    title: 'Profesjonalny transport sanitarny',
    lead: 'Bezpieczny i komfortowy przewóz pacjentów w ambulansie przystosowanym do transportu osób chorych.',
    items: [
      'Przewozy z domu do szpitala i z powrotem',
      'Transport między placówkami medycznymi',
      'Dowóz na badania, zabiegi i rehabilitację',
      'Przewozy na dłuższych trasach',
    ],
  },
  {
    id: 'opieka',
    icon: 'stethoscope',
    title: 'Kompleksowa opieka medyczna',
    lead: 'Wsparcie dla pacjentów i ich bliskich, także w opiece długoterminowej, prowadzone z wyczuciem i szacunkiem.',
    items: [
      'Opieka długoterminowa',
      'Pomoc pacjentom po wypisie ze szpitala',
      'Wsparcie dla rodzin i opiekunów',
    ],
  },
  {
    id: 'ratownictwo',
    icon: 'first-aid',
    title: 'Ekspresowe usługi ratownictwa',
    lead: 'Zabezpieczenie medyczne wydarzeń i szybka pierwsza pomoc tam, gdzie gromadzą się ludzie.',
    items: [
      'Zabezpieczenie medyczne imprez sportowych i plenerowych',
      'Obsługa wydarzeń firmowych i okolicznościowych',
      'Pierwsza pomoc na miejscu zdarzenia',
    ],
  },
];

export const audiences = [
  {
    title: 'Pacjenci i rodziny',
    text: 'Pomagamy zorganizować przejazd do szpitala, na badania czy do domu, gdy zwykły samochód to za mało.',
  },
  {
    title: 'Placówki medyczne',
    text: 'Oferujemy przewozy pacjentów między placówkami oraz na zlecenie szpitali, przychodni i domów opieki.',
  },
  {
    title: 'Organizatorzy wydarzeń',
    text: 'Zapewniamy zabezpieczenie medyczne imprez, zawodów sportowych i wydarzeń firmowych.',
  },
];

export const steps = [
  {
    title: 'Zadzwoń lub napisz',
    text: 'Dyspozytornia odbiera telefony całą dobę. Możesz też zostawić wiadomość w formularzu.',
  },
  {
    title: 'Ustalamy szczegóły',
    text: 'Termin, trasa, stan i potrzeby pacjenta. Na tej podstawie przygotowujemy wycenę.',
  },
  {
    title: 'Realizujemy usługę',
    text: 'Przyjeżdżamy o umówionej porze i dbamy o bezpieczeństwo i komfort pacjenta przez całą drogę.',
  },
];

export const values = [
  { title: 'Bezpieczeństwo', text: 'Zdrowie i komfort pacjenta są dla nas najważniejsze.' },
  { title: 'Dostępność', text: 'Dyspozytornia czynna 24 godziny na dobę, 7 dni w tygodniu.' },
  { title: 'Empatia', text: 'Rozumiemy, że za każdym zgłoszeniem stoi człowiek i jego bliscy.' },
  { title: 'Dyskrecja', text: 'Szanujemy prywatność pacjentów i poufność ich spraw.' },
];

export interface Faq {
  q: string;
  /** Plain text; `{placeholder:Label}` renders a placeholder chip. */
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Jak zamówić transport sanitarny?',
    a: `Najszybciej telefonicznie pod numerem ${company.phone.display}, bo dyspozytornia działa całą dobę. Możesz też wysłać zapytanie przez formularz, a oddzwonimy, aby ustalić szczegóły.`,
  },
  {
    q: 'Ile kosztuje przewóz?',
    a: 'Cena zależy od trasy, terminu i potrzeb pacjenta. Każde zlecenie wyceniamy indywidualnie, a wycenę podajemy przed realizacją usługi.',
  },
  {
    q: 'Czy jeździcie w nocy, w weekendy i święta?',
    a: 'Tak. Dyspozytornia przyjmuje zgłoszenia całodobowo, 7 dni w tygodniu.',
  },
  {
    q: 'Czy transport może być refundowany przez NFZ?',
    a: 'W określonych sytuacjach transport sanitarny przysługuje bezpłatnie na zlecenie lekarza, a szczegóły opisuje serwis pacjent.gov.pl. {placeholder:Informacja, czy firma realizuje przewozy w ramach NFZ} Przewozy prywatne realizujemy według indywidualnej wyceny.',
  },
  {
    q: 'Jak zamówić zabezpieczenie medyczne imprezy?',
    a: 'Skontaktuj się z nami z wyprzedzeniem i podaj datę, miejsce, charakter wydarzenia i przewidywaną liczbę uczestników. Przygotujemy ofertę dopasowaną do wydarzenia.',
  },
  {
    q: 'Czy w nagłym wypadku mam dzwonić do Was?',
    a: 'W stanie bezpośredniego zagrożenia życia zawsze dzwoń na numer alarmowy 112 lub 999. Nasze usługi nie zastępują Państwowego Ratownictwa Medycznego.',
  },
];

/**
 * Set to true while the gallery uses AI-generated or otherwise illustrative images:
 * each photo then gets a visible "Zdjęcie poglądowe" label (EU AI Act transparency, no misleading advertising).
 */
export const photosAreIllustrative = true;

export const contactServices = [
  'Transport sanitarny',
  'Opieka medyczna',
  'Zabezpieczenie medyczne wydarzenia',
  'Inne',
];

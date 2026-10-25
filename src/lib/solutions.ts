import { type Locale, DEFAULT_LOCALE } from './locales';

export const INDUSTRY_SLUGS = [
  'retail',
  'contact-centre',
  'aviation',
  'logistics',
  'restaurants',
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export function isIndustrySlug(value: string | undefined): value is IndustrySlug {
  return !!value && (INDUSTRY_SLUGS as readonly string[]).includes(value);
}

type Localized<T> = Record<Locale, T>;

type SolutionStat = { value: string; label: Localized<string> };
type SolutionChallenge = { title: Localized<string>; points: Localized<string[]> };
type SolutionFeature = { title: Localized<string>; body: Localized<string> };
type SolutionSection = { title: Localized<string>; intro: Localized<string>; points: Localized<string[]> };

export type IndustrySolution = {
  slug: IndustrySlug;
  navLabel: Localized<string>;
  metaTitle: Localized<string>;
  metaDescription: Localized<string>;
  eyebrow: Localized<string>;
  headline: Localized<string>;
  lede: Localized<string>;
  stats: SolutionStat[];
  challenges: SolutionChallenge[];
  features: SolutionFeature[];
  sections: SolutionSection[];
  ctaHeadline: Localized<string>;
  ctaBody: Localized<string>;
};

function loc<T>(en: T, lt: T, se: T = en): Localized<T> {
  return { en, lt, se };
}

const sharedCta = {
  headline: loc(
    'See how Workofo fits your operation',
    'Sužinokite, kaip Workofo tinka jūsų operacijoms',
  ),
  body: loc(
    'Book a tailored demo and explore AI scheduling built for your industry.',
    'Užsisakykite pritaikytą demonstraciją ir išbandykite AI grafikus savo sektoriui.',
  ),
};

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    slug: 'retail',
    navLabel: loc('Retail', 'Mažmena'),
    metaTitle: loc(
      'Retail Scheduling Software | AI Workforce Scheduling | Workofo',
      'Mažmenos darbo jėgos planavimas | Workofo',
    ),
    metaDescription: loc(
      'AI-powered retail scheduling that puts the right people on the floor from morning delivery to evening rush, across every store.',
      'AI mažmenos grafikai, derinantys personalą su srautu, pardavimais ir atitiktimi visose parduotuvėse.',
    ),
    eyebrow: loc('Workforce scheduling for retail', 'Mažmena'),
    headline: loc(
      'Better staffing. Stronger stores.',
      'Mažmenos grafikai, saugantys maržą ir aptarnavimą',
    ),
    lede: loc(
      'From the morning delivery to the evening rush, put the right people on the floor when your stores need them.',
      'Workofo padeda mažmenininkams suderinti darbo jėgą su paklausa parduotuvėse, skyriuose ir užsakymų vykdyme — su įmontuota atitiktimi ir 15 min. tikslumu.',
    ),
    stats: [
      { value: '5–15%', label: loc('typical labour savings', 'tipinis darbo taupymas') },
      { value: '15 min', label: loc('schedule granularity', 'grafiko detalumas') },
      { value: '100%', label: loc('rule compliance', 'taisyklių atitiktis') },
    ],
    challenges: [
      {
        title: loc('Omnichannel & fulfilment', 'Omnikanalas ir užsakymų vykdymas'),
        points: loc(
          [
            'Staff click-and-collect, ship-from-store, and back-of-house together.',
            'Balance sales floor coverage with stockroom and micro-fulfilment tasks.',
          ],
          [
            'Planuokite click-and-collect, siuntimą iš parduotuvės ir sandėlio darbus kartu.',
            'Derinkite pardavimo salės padengimą su sandėlio ir mikrovykdymo užduotimis.',
          ],
        ),
      },
      {
        title: loc('Labour shortages & turnover', 'Darbo jėgos trūkumas ir kaita'),
        points: loc(
          [
            'Forecast-driven schedules reduce burnout and last-minute gaps.',
            'Self-service shift swaps improve retention on the front line.',
          ],
          [
            'Prognozėmis pagrįsti grafikai mažina pervargimą ir paskutinės minutės spragas.',
            'Savarankiškas pamainų keitimas gerina fronto linijos išlaikymą.',
          ],
        ),
      },
      {
        title: loc('Compliance risk', 'Atitikties rizika'),
        points: loc(
          [
            'Encode union rules, rest periods, and local labour law in every schedule.',
            'Real-time alerts before violations become fines.',
          ],
          [
            'Įtraukite profsąjungų taisykles, poilsio laikus ir vietinius įstatymus į kiekvieną grafiką.',
            'Įspėjimai realiu laiku, kol pažeidimai netampa baudomis.',
          ],
        ),
      },
      {
        title: loc('ROI & customer experience', 'ROI ir klientų patirtis'),
        points: loc(
          [
            'Link labour plans to live sales and footfall signals.',
            'Put your best people on the floor during peak trading hours.',
          ],
          [
            'Siekite darbo planų su gyvais pardavimų ir srauto duomenimis.',
            'Geriausius darbuotojus planuokite piko valandomis.',
          ],
        ),
      },
    ],
    features: [
      {
        title: loc('Demand-driven scheduling', 'Paklausa pagrįsti grafikai'),
        body: loc(
          'Align shifts with sales trends, traffic, and promotional calendars.',
          'Derinkite pamainas su pardavimų tendencijomis, srautu ir akcijų kalendoriais.',
        ),
      },
      {
        title: loc('Boost conversion', 'Didinkite konversiją'),
        body: loc(
          'Schedule skilled associates when conversion matters most.',
          'Planuokite kvalifikuotus darbuotojus, kai konversija svarbiausia.',
        ),
      },
      {
        title: loc('Automated compliance', 'Automatinė atitiktis'),
        body: loc(
          'Cut admin with automated rule checks across every location.',
          'Mažinkite administravimą su automatine taisyklių kontrole visose vietose.',
        ),
      },
      {
        title: loc('Multi-site visibility', 'Daugiavietė matomumas'),
        body: loc(
          'Live view of headcount, gaps, and skills across your estate.',
          'Gyvą galvų skaičių, spragas ir įgūdžius visame tinkle.',
        ),
      },
    ],
    sections: [
      {
        title: loc('Engage store teams', 'Įtraukite parduotuvių komandas'),
        intro: loc(
          'Retention starts with predictable, fair schedules your staff can influence.',
          'Išlaikymas prasideda nuo nuspėjamų, sąžiningų grafikų, kuriuos darbuotojai gali įtakoti.',
        ),
        points: loc(
          [
            'Mobile-friendly shift views and swap requests.',
            'Fair rotation across weekends and peak periods.',
            'Fewer last-minute calls and schedule surprises.',
          ],
          [
            'Mobilios pamainų peržiūros ir keitimo užklausos.',
            'Sąžiningas rotavimas savaitgaliais ir piko laikotarpiais.',
            'Mažiau skambučių paskutinę minutę ir grafiko staigmenų.',
          ],
        ),
      },
      {
        title: loc('Compliance without friction', 'Atitiktis be trinties'),
        intro: loc(
          'Stay ahead of changing retail labour rules without slowing managers down.',
          'Laikykitės besikeičiančių mažmenos darbo taisyklių neapsunkindami vadovų.',
        ),
        points: loc(
          [
            'Configurable rules for contracts, minors, and rest breaks.',
            'Audit-ready schedules for labour inspections.',
            'Transparent labour cost tracking by store and department.',
          ],
          [
            'Konfigūruojamos sutarčių, nepilnamečių ir poilsio taisyklės.',
            'Auditui paruošti grafikai darbo inspekcijoms.',
            'Skaidri darbo sąnaudų apskaita pagal parduotuvę ir skyrių.',
          ],
        ),
      },
      {
        title: loc('Forecast demand, control cost', 'Prognozuokite paklausą, kontroliuokite sąnaudas'),
        intro: loc(
          'Get staffing right every week with AI that learns your store patterns.',
          'Teisingai planuokite personalą kiekvieną savaitę su AI, mokosi jūsų parduotuvių modelių.',
        ),
        points: loc(
          [
            'Forecasts from historical sales, tasks, and events.',
            'Reduce overtime while protecting service levels.',
            'Dynamic allocation across formats and fulfilment hubs.',
          ],
          [
            'Prognozės iš istorinių pardavimų, užduočių ir įvykių.',
            'Mažinkite viršvalandžius saugodami aptarnavimo lygį.',
            'Dinaminis paskirstymas formatais ir vykdymo centrais.',
          ],
        ),
      },
    ],
    ctaHeadline: sharedCta.headline,
    ctaBody: sharedCta.body,
  },
  {
    slug: 'contact-centre',
    navLabel: loc('Contact Centre', 'Kontaktų centras'),
    metaTitle: loc(
      'Contact Centre Scheduling Software | Queue Staffing | Workofo',
      'Kontaktų centro grafikai | Workofo',
    ),
    metaDescription: loc(
      'Contact centre scheduling software that forecasts calls, chats and emails per interval and builds schedules that hit your service levels.',
      'Kontaktų centro grafikai pagal skambučių, pokalbių ir el. laiškų prognozes ir paslaugų lygius.',
    ),
    eyebrow: loc('Workforce scheduling for contact centres', 'Kontaktų centrai'),
    headline: loc(
      'Contact centre scheduling that staffs every queue',
      'Kontaktų centro grafikai kiekvienai eilei',
    ),
    lede: loc(
      'Forecast contacts, apply skills and labor rules, and hit service levels with schedules built around real volume.',
      'Prognozuokite kontaktus, taikykite įgūdžius ir darbo taisykles, ir pasiekite paslaugų lygius pagal tikrą apimtį.',
    ),
    stats: [
      { value: '15 min', label: loc('forecast intervals', 'prognozės intervalai') },
      { value: 'Voice + chat', label: loc('planned together', 'planuojama kartu') },
      { value: '200–20,000+', label: loc('agents supported', 'agentai') },
    ],
    challenges: [],
    features: [],
    sections: [],
    ctaHeadline: sharedCta.headline,
    ctaBody: sharedCta.body,
  },
  {
    slug: 'aviation',
    navLabel: loc('Aviation', 'Aviacija', 'Aviation'),
    metaTitle: loc(
      'Aviation Scheduling Software for Airport Teams | Workofo',
      'Aviacijos grafikai | Workofo',
      'Aviation Scheduling Software for Airport Teams | Workofo',
    ),
    metaDescription: loc(
      'Aviation scheduling software that plans ramp, check-in, security and baggage teams around the flight schedule.',
      'Aviacijos grafikai rampai, registracijai, saugumui ir bagažui pagal skrydžių planą.',
      'Aviation scheduling software that plans ramp, check-in, security and baggage teams around the flight schedule.',
    ),
    eyebrow: loc('Workforce scheduling for aviation', 'Aviacija', 'Workforce scheduling for aviation'),
    headline: loc(
      'Aviation scheduling software that staffs every flight wave',
      'Aviacijos grafikai kiekvienai skrydžių bangai',
      'Aviation scheduling software that staffs every flight wave',
    ),
    lede: loc(
      'Workofo plans ramp, check-in, security and baggage teams around the flight schedule, applies your labor rules and re-plans when flights change.',
      'Workofo planuoja rampą, registraciją, saugumą ir bagažą pagal skrydžių planą.',
      'Workofo plans ramp, check-in, security and baggage teams around the flight schedule, applies your labor rules and re-plans when flights change.',
    ),
    stats: [
      { value: 'Up to 80%', label: loc('less time on scheduling', 'mažiau laiko grafikams') },
      { value: '15 min', label: loc('planning intervals', 'planavimo intervalai') },
      { value: '200–20,000+', label: loc('employees supported', 'darbuotojai') },
    ],
    challenges: [],
    features: [],
    sections: [],
    ctaHeadline: sharedCta.headline,
    ctaBody: sharedCta.body,
  },
  {
    slug: 'logistics',
    navLabel: loc('Logistics', 'Logistika', 'Logistics'),
    metaTitle: loc(
      'Logistics Scheduling Software for Warehouses | Workofo',
      'Logistikos grafikai | Workofo',
      'Logistics Scheduling Software for Warehouses | Workofo',
    ),
    metaDescription: loc(
      'Logistics scheduling software that forecasts pallets, orders and shipments and plans every zone and shift.',
      'Logistikos grafikai pagal padėklus, užsakymus ir siuntas kiekvienoje zonoje.',
      'Logistics scheduling software that forecasts pallets, orders and shipments and plans every zone and shift.',
    ),
    eyebrow: loc('Workforce scheduling for logistics', 'Logistika', 'Workforce scheduling for logistics'),
    headline: loc(
      'Logistics scheduling software built around your volumes',
      'Logistikos grafikai pagal jūsų apimtis',
      'Logistics scheduling software built around your volumes',
    ),
    lede: loc(
      'Workofo forecasts pallets, orders and shipments, plans every zone and shift, and shares staff across your warehouses.',
      'Workofo prognozuoja padėklus, užsakymus ir siuntas, planuoja zonas ir pamainas.',
      'Workofo forecasts pallets, orders and shipments, plans every zone and shift, and shares staff across your warehouses.',
    ),
    stats: [
      { value: '50–300', label: loc('employees in one shared pool', 'bendras fondas') },
      { value: '15 min', label: loc('forecast intervals per zone', 'prognozės intervalai') },
      { value: '200–20,000+', label: loc('employees supported', 'darbuotojai') },
    ],
    challenges: [],
    features: [],
    sections: [],
    ctaHeadline: sharedCta.headline,
    ctaBody: sharedCta.body,
  },
  {
    slug: 'restaurants',
    navLabel: loc('Restaurants', 'Restoranai', 'Restaurants'),
    metaTitle: loc(
      'Restaurant Scheduling Software for Venue Teams | Workofo',
      'Restoranų grafikai | Workofo',
      'Restaurant Scheduling Software for Venue Teams | Workofo',
    ),
    metaDescription: loc(
      'Restaurant scheduling software that staffs kitchen, bar and floor teams around every rush.',
      'Restoranų grafikai virtuvei, barui ir salei pagal kiekvieną piką.',
      'Restaurant scheduling software that staffs kitchen, bar and floor teams around every rush.',
    ),
    eyebrow: loc('Workforce scheduling for restaurants', 'Restoranai', 'Workforce scheduling for restaurants'),
    headline: loc(
      'Restaurant scheduling software that staffs every rush',
      'Restoranų grafikai kiekvienam pikui',
      'Restaurant scheduling software that staffs every rush',
    ),
    lede: loc(
      'Workofo forecasts demand per location, plans kitchen, bar and floor teams around every service and keeps labor cost in view.',
      'Workofo prognozuoja paklausą ir planuoja virtuvę, barą ir salę.',
      'Workofo forecasts demand per location, plans kitchen, bar and floor teams around every service and keeps labor cost in view.',
    ),
    stats: [
      { value: '15 min', label: loc('forecast intervals', 'prognozės intervalai') },
      { value: 'Kitchen + floor', label: loc('planned together', 'planuojama kartu') },
      { value: '200–20,000+', label: loc('employees supported', 'darbuotojai') },
    ],
    challenges: [],
    features: [],
    sections: [],
    ctaHeadline: sharedCta.headline,
    ctaBody: sharedCta.body,
  },

];

const solutionBySlug = new Map(INDUSTRY_SOLUTIONS.map((s) => [s.slug, s]));

export function getIndustrySolution(slug: IndustrySlug): IndustrySolution | undefined {
  return solutionBySlug.get(slug);
}

export function listIndustrySolutions(): IndustrySolution[] {
  return INDUSTRY_SOLUTIONS;
}

function pick<T>(localized: Localized<T>, locale: Locale): T {
  return localized[locale] ?? localized[DEFAULT_LOCALE];
}

export type ResolvedIndustrySolution = {
  slug: IndustrySlug;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  lede: string;
  stats: Array<{ value: string; label: string }>;
  challenges: Array<{ title: string; points: string[] }>;
  features: Array<{ title: string; body: string }>;
  sections: Array<{ title: string; intro: string; points: string[] }>;
  ctaHeadline: string;
  ctaBody: string;
};

export function resolveIndustrySolution(slug: IndustrySlug, locale: Locale): ResolvedIndustrySolution {
  const solution = getIndustrySolution(slug);
  if (!solution) throw new Error(`Unknown industry: ${slug}`);

  return {
    slug: solution.slug,
    navLabel: pick(solution.navLabel, locale),
    metaTitle: pick(solution.metaTitle, locale),
    metaDescription: pick(solution.metaDescription, locale),
    eyebrow: pick(solution.eyebrow, locale),
    headline: pick(solution.headline, locale),
    lede: pick(solution.lede, locale),
    stats: solution.stats.map((s) => ({ value: s.value, label: pick(s.label, locale) })),
    challenges: solution.challenges.map((c) => ({
      title: pick(c.title, locale),
      points: pick(c.points, locale),
    })),
    features: solution.features.map((f) => ({
      title: pick(f.title, locale),
      body: pick(f.body, locale),
    })),
    sections: solution.sections.map((s) => ({
      title: pick(s.title, locale),
      intro: pick(s.intro, locale),
      points: pick(s.points, locale),
    })),
    ctaHeadline: pick(solution.ctaHeadline, locale),
    ctaBody: pick(solution.ctaBody, locale),
  };
}

/**
 * Landing-page copy (French).
 *
 * Audience: the offer is reserved exclusively for women aged 23 to 55.
 * State it clearly but warmly, and only where it matters: hero, the "Pour vous"
 * section, programme information and the FAQ. Never imply the trips are open
 * to men or to women outside this age range.
 *
 * Editorial rule: describe the intent and the method, never invent facts.
 * No prices, dates, hotel names, star ratings, distances to the Haram,
 * testimonials or unconfirmed services until they are confirmed.
 */
import type { IconName } from '@/components/ui/Icon.astro';
import { site } from '@/config/site';

/** Single source for the eligibility wording, reused across sections. */
export const eligibility = {
  label: 'Exclusivement pour les femmes · 23–55 ans',
  sentence: 'Une Omra pensée exclusivement pour les femmes de 23 à 55 ans.',
};

export const hero = {
  eyebrow: 'Omra Confort au Féminin',
  /** One italic accent (<em>) in the display title. */
  title: 'Un moment <em>inoubliable</em> au cœur de La Mecque',
  lead: 'Vivez votre Omra dans un cadre serein, avec une expérience pensée pour votre confort, votre spiritualité et le partage entre femmes.',
  primaryCta: { label: 'Découvrir nos séjours', href: '#programmes' },
  secondaryCta: { label: 'Recevoir le programme', href: '#contact' },
  /** Round seal overlapping the photo: the women-only offer. */
  seal: { ring: 'Exclusivement pour les femmes', value: '23–55', unit: 'ans' },
  /** Editorial strip under the hero. */
  strip: [
    { label: 'Destinations', value: 'La Mecque & Médine' },
    { label: 'Exclusivement pour', value: 'Les femmes de 23 à 55 ans' },
  ],
  /**
   * Premium highlights under the lead. Confirmed claims only: private
   * transfers are NOT listed (transport depends on each programme).
   */
  highlights: [
    { icon: 'hotel' as IconName, label: ['Hôtels 5 étoiles', 'La Mecque & Médine'] },
    { icon: 'woman' as IconName, label: ['Groupe', 'exclusivement féminin'] },
    { icon: 'hands' as IconName, label: ['Accompagnement', 'tout au long du voyage'] },
    { icon: 'diamond' as IconName, label: ['Une expérience', 'premium'] },
  ],
  /** Card over the photo, linking to the accommodation section. No hotel named. */
  stayCard: { title: 'Hébergements 5 étoiles', subtitle: 'À La Mecque & Médine', href: '#hebergement' },
};

/**
 * Hero promo "hôtels 5 étoiles": built in HTML/CSS (no text in images).
 * Only the 5-star category is stated: no hotel name, price or distance.
 */
export const heroPromo = {
  eyebrow: 'Omra Confort au Féminin',
  title: 'Des hôtels <em>5 étoiles</em> pour un séjour d’exception',
  intro:
    'Profitez d’un séjour alliant confort, élégance et sérénité grâce à une sélection d’hôtels 5 étoiles à La Mecque et à Médine, pour vivre votre Omra dans les meilleures conditions.',
  benefits: [
    { icon: 'diamond' as IconName, label: 'Confort haut de gamme' },
    { icon: 'bed' as IconName, label: 'Chambres élégantes et spacieuses' },
    { icon: 'lotus' as IconName, label: 'Environnement apaisant' },
    { icon: 'people' as IconName, label: 'Services de qualité' },
  ],
  audience: { kicker: 'Exclusivement pour les femmes', value: '23–55 ans' },
  cta: { label: 'Découvrir nos séjours', href: '#programmes' },
  starsLabel: 'Hôtel 5 étoiles',
  destinations: [
    { icon: 'kaaba' as IconName, prefix: 'À la', city: 'Mecque', scene: 'promoMakkah' as const, room: 'promoMakkahRoom' as const },
    { icon: 'mosque' as IconName, prefix: 'À', city: 'Médine', scene: 'promoMadinah' as const, room: 'promoMadinahRoom' as const },
  ],
  indicators: [
    { icon: 'pin' as IconName, label: 'Emplacement idéal' },
    { icon: 'bed' as IconName, label: 'Chambres spacieuses' },
    { icon: 'bell' as IconName, label: 'Services premium' },
  ],
};

/** "Notre concept" — what the experience brings together. */
export const concept = {
  eyebrow: 'Notre concept',
  title: 'Bien plus qu’un voyage : <em>une expérience spirituelle au féminin.</em>',
  body: `${site.name} propose aux femmes de 23 à 55 ans une expérience qui associe l’accomplissement des rites de l’Omra, des moments de recueillement, des instants de dhikr en groupe et du temps libre pour découvrir les boutiques de La Mecque et de Médine. Le tout dans un cadre organisé, chaleureux et exclusivement féminin.`,
  components: [
    { icon: 'kaaba' as IconName, label: 'L’Omra et l’apprentissage de ses rites' },
    { icon: 'star' as IconName, label: 'Des moments de recueillement au Haram' },
    { icon: 'beads' as IconName, label: 'Des instants de dhikr en groupe, selon les règles des lieux saints' },
    { icon: 'bag' as IconName, label: 'Du temps organisé pour le shopping à La Mecque et à Médine' },
    { icon: 'people' as IconName, label: 'Un groupe uni par un style vestimentaire coordonné' },
  ],
};

/** "Une Omra au féminin" — who the experience is designed for. */
export const forYou = {
  eyebrow: 'Une Omra au féminin',
  title: 'Un voyage spirituel <em>pensé pour vous.</em>',
  intro: eligibility.sentence,
  body: [
    'Nos séjours s’adressent aux femmes qui souhaitent vivre leur Omra au sein d’un groupe exclusivement féminin, avec une organisation claire et un accompagnement adapté.',
    'Un voyage spirituel au féminin, dans un cadre organisé et rassurant : vous vivez votre Omra entourée de femmes qui partagent la même aspiration spirituelle.',
  ],
  /** The five strengths of the experience (numbered grid). */
  values: [
    {
      icon: 'hands' as IconName,
      title: 'L’accompagnement des femmes',
      text: 'Un encadrement présent à vos côtés, selon les prestations précisées dans chaque programme.',
    },
    {
      icon: 'bed' as IconName,
      title: 'Le confort du séjour',
      text: 'Des hôtels 5 étoiles à La Mecque et à Médine, choisis pour leur confort et leur sérénité.',
    },
    {
      icon: 'lotus' as IconName,
      title: 'Sérénité et spiritualité',
      text: 'Une expérience spirituelle vécue dans le calme, le respect et la bienveillance.',
    },
    {
      icon: 'people' as IconName,
      title: 'Une expérience collective',
      text: 'Vous voyagez uniquement avec d’autres femmes, pour partager ce moment en toute confiance.',
    },
    {
      icon: 'diamond' as IconName,
      title: 'Des prestations soignées',
      text: 'Le déroulé du séjour, les étapes et les informations pratiques vous sont transmis avant le départ.',
    },
  ],
  note: 'Les conditions de participation vous sont communiquées avec le programme de chaque séjour.',
  primaryCta: 'Découvrir nos séjours',
  secondaryCta: 'Poser une question',
};

/** "Notre programme" — four visual cards. */
export const programmeCards = {
  eyebrow: 'Notre programme',
  title: 'Une expérience complète au féminin',
  intro: `${site.name} vous propose un séjour qui allie spiritualité, organisation et moments privilégiés pour vivre votre Omra dans les meilleures conditions.`,
  cards: [
    {
      slot: 'journeySai' as const,
      position: '50% 62%',
      icon: 'kaaba' as IconName,
      title: 'Omra et ses rites',
      text: ['Accomplissez votre Omra en toute', 'sérénité et découvrez les différentes', 'étapes des manasik, avec des', 'explications claires et un', 'accompagnement adapté.'],
      tall: true,
    },
    {
      slot: 'journeyTerrace' as const,
      position: '52% 72%',
      icon: 'book' as IconName,
      title: 'Moments de dhikr',
      text: ['Partagez des moments de dhikr,', 'd’invocations et de recueillement', 'avec les participantes qui le souhaitent,', 'dans le respect des règles des lieux', 'saints et des autres fidèles.'],
      tall: false,
    },
    {
      slot: 'journeyShopping' as const,
      position: '45% 55%',
      icon: 'bag' as IconName,
      title: 'Shopping à La Mecque et Médine',
      text: ['Profitez de temps dédiés au shopping', 'pour découvrir les boutiques, rechercher', 'des souvenirs et acheter des articles', 'personnels à La Mecque et à Médine,', 'selon le programme du séjour.'],
      tall: false,
    },
    {
      slot: 'journeyDeparture' as const,
      position: '50% 62%',
      icon: 'people' as IconName,
      title: 'Un groupe, une belle harmonie',
      text: ['Les participantes pourront adopter une', 'tenue coordonnée ou un vêtement standard', 'commun au groupe afin de renforcer', 'le sentiment d’appartenance, de faciliter', 'l’identification des participantes', 'et de créer une identité visuelle élégante', 'pendant les déplacements collectifs.'],
      tall: true,
    },
  ],
};

/** "Une tenue qui nous unit" — concept banner; the outfit is not finalised. */
export const outfitBanner = {
  eyebrow: 'Notre identité',
  title: 'Une tenue qui nous unit',
  text: ['Pour créer une belle harmonie et faciliter l’identification du groupe,', 'les participantes pourront adopter une tenue coordonnée', 'ou un vêtement standard commun.'],
  features: [
    { icon: 'heart' as IconName, label: ['Esprit de groupe', 'et solidarité'] },
    { icon: 'people' as IconName, label: ['Facilite l’identification', 'des participantes'] },
    { icon: 'star5' as IconName, label: ['Une apparence élégante', 'et respectueuse'] },
  ],
  card: {
    title: ['Une identité élégante', 'et pratique'],
    text: ['Le modèle et les modalités de la tenue', 'coordonnée seront communiqués', 'ultérieurement. L’objectif est d’offrir', 'une expérience harmonieuse, confortable', 'et adaptée aux déplacements du groupe.'],
  },
  conceptNote: 'Visuels de concept — tenue non définitive',
};

/**
 * "Le parcours d'une pèlerine" — eight editorial chapters, one per brand image.
 * The images are illustrations: notes make clear that equipment, hotels and
 * shopping are not guaranteed inclusions.
 */
export const journeyStory = {
  eyebrow: 'Le parcours d’une pèlerine',
  title: 'Votre Omra, <em>en images.</em>',
  intro: `Huit moments qui racontent l’esprit d’un séjour ${site.name} : le recueillement, la sérénité et les instants partagés entre pèlerines.`,
  note: 'Images d’illustration : elles évoquent l’esprit du voyage et ne constituent pas une liste de prestations incluses.',
  stages: [
    {
      slot: 'journeyDeparture' as const,
      layout: 'image-left' as const,
      label: 'Le départ vers votre voyage spirituel',
      title: 'Votre voyage commence ici',
      text: 'Du départ à votre arrivée, préparez votre voyage spirituel avec une organisation pensée pour vous accompagner sereinement.',
    },
    {
      slot: 'journeyCoach' as const,
      layout: 'image-right' as const,
      label: 'Le trajet vers La Mecque',
      title: 'En route vers La Mecque',
      text: 'Partagez le voyage avec votre groupe et profitez d’un trajet organisé vers votre destination spirituelle.',
      note: 'Les modalités de transport et les équipements dépendent du programme de chaque séjour.',
    },
    {
      slot: 'journeyHotel' as const,
      layout: 'image-left' as const,
      label: 'Des moments de repos à l’hôtel',
      title: 'Le confort pour mieux vous ressourcer',
      text: 'Retrouvez un espace de repos après vos journées spirituelles et profitez de moments de partage entre pèlerines.',
      note: 'L’hébergement de chaque séjour est précisé dans son programme détaillé.',
    },
    {
      slot: 'journeyArrival' as const,
      layout: 'immersive' as const,
      label: 'Notre arrivée à La Mecque',
      title: 'Un moment inoubliable au cœur de La Mecque',
      text: 'Découvrez l’émotion de votre Omra et vivez des instants précieux dans un cadre spirituel unique.',
      cta: { label: 'Découvrir nos séjours', href: '#programmes' },
    },
    {
      slot: 'journeySai' as const,
      layout: 'image-left' as const,
      label: 'Le Sa’i entre Safa et Marwa',
      title: 'Accompli dans le recueillement',
      text: 'Vivez chaque étape de votre Omra avec sérénité et avancez à votre rythme dans l’accomplissement de vos rites.',
    },
    {
      slot: 'journeyTerrace' as const,
      layout: 'immersive' as const,
      label: 'Une expérience de groupe au Haram',
      title: 'Une expérience spirituelle à partager',
      text: 'Des instants de prière, de recueillement et de fraternité qui rendent ce voyage encore plus précieux.',
    },
    {
      slot: 'journeyMedina' as const,
      layout: 'image-left' as const,
      label: 'Un moment de spiritualité à Médine',
      title: 'La sérénité au cœur de Médine',
      text: 'Prenez le temps de vous recueillir, de prier et de partager des moments de spiritualité avec votre groupe.',
    },
    {
      slot: 'journeyShopping' as const,
      layout: 'image-right' as const,
      label: 'Découvrir les souvenirs de l’Omra',
      title: 'Emportez un souvenir de votre voyage',
      text: 'Découvrez les abayas, les parfums et les souvenirs qui prolongeront la beauté de votre expérience.',
      note: 'Une possibilité de découverte lors des temps libres, selon le programme du séjour ; les achats restent personnels.',
    },
  ],
};

/** Sample programme: an example structure, NOT a confirmed itinerary. */
export const programmeExample = {
  eyebrow: 'Exemple de programme',
  title: 'Les grandes étapes de votre séjour',
  intro: 'Un programme conçu pour allier spiritualité, découverte et moments de partage.',
  steps: [
    { icon: 'plane' as IconName, title: 'Préparation', text: ['Informations sur le voyage', 'et rappel des manasik', 'de l’Omra.'] },
    { icon: 'suitcase' as IconName, title: 'Arrivée et installation', text: ['Accueil, transfert et', 'installation selon', 'le programme.'] },
    { icon: 'kaaba' as IconName, title: 'Accomplissement de l’Omra', text: ['Réalisation des rites avec', 'les explications nécessaires.'] },
    { icon: 'hands' as IconName, title: 'Moments de dhikr', text: ['Temps de recueillement', 'et d’invocations selon', 'les possibilités du séjour.'] },
    { icon: 'mosque' as IconName, title: 'Séjour à Médine', text: ['Visite de la ville et temps', 'spirituels selon le programme.'] },
    { icon: 'bag' as IconName, title: 'Shopping', text: ['Découverte des boutiques', 'à La Mecque et Médine.'] },
    { icon: 'people' as IconName, title: 'Temps libre et retour', text: ['Derniers moments', 'de partage et préparation', 'du retour.'] },
  ],
};

export const accommodation = {
  eyebrow: 'Hébergement',
  title: 'Se reposer, <em>entre deux prières.</em>',
  intro:
    'Après les longues heures de marche et d’adoration, le lieu où l’on se repose compte. Nous choisissons l’hébergement de chaque séjour avec la même exigence, pour que chaque voyageuse s’y sente bien.',
  criteria: [
    { icon: 'comfort' as IconName, title: 'Confort & calme', text: 'Des chambres propres et paisibles, propices au repos et au recueillement.' },
    { icon: 'route' as IconName, title: 'Praticité', text: 'Une organisation pensée pour faciliter vos déplacements vers les lieux saints.' },
    { icon: 'star' as IconName, title: 'Transparence', text: 'Le nom de l’hôtel, sa catégorie et sa situation sont précisés dans chaque programme.' },
  ],
};

/**
 * "Le confort au cœur de votre Omra" — 5-star hotels in Mecca and Medina.
 * Only the 5-star category is stated: no hotel name, price or distance.
 */
export const hotels = {
  eyebrow: 'Nos hébergements',
  title: 'Le confort au cœur de <em>votre Omra</em>',
  intro:
    'Une sélection d’hôtels 5 étoiles à La Mecque et à Médine, choisis pour leur confort et leur sérénité, afin que chaque journée de votre Omra commence et se termine en douceur.',
  badge: 'Hôtel 5 étoiles',
  destinations: [
    {
      slot: 'hotelMakkah' as const,
      room: 'promoMakkahRoom' as const,
      city: 'La Mecque',
      cityAlt: 'مكة المكرمة',
      text: 'Un hôtel 5 étoiles pour vous reposer entre deux temps d’adoration, dans un cadre élégant et apaisant.',
    },
    {
      slot: 'hotelMadinah' as const,
      room: 'promoMadinahRoom' as const,
      city: 'Médine',
      cityAlt: 'المدينة المنورة',
      text: 'Un hôtel 5 étoiles pour prolonger la sérénité de votre séjour dans la ville du Prophète ﷺ.',
    },
  ],
  note: 'Le nom de chaque hôtel est communiqué dans le programme détaillé du séjour.',
};

/** "Ce que nous vous offrons" — the three welcome gifts, around the brand visual. */
export const gifts = {
  eyebrow: 'Nos attentions',
  title: 'Ce que nous vous <em>offrons.</em>',
  intro: 'Des essentiels soigneusement sélectionnés pour vous accompagner tout au long de votre Omra.',
  imageAlt:
    'Les trois cadeaux DuvaniaHaramain : un sac en toile crème orné du logo avec une étole bordeaux, le guide de la pèlerine « دليل المعتمرة » et un tasbih bordeaux à pompon, présentés sur des socles en pierre claire',
  items: [
    {
      icon: 'bag' as IconName,
      title: 'Sac exclusif',
      text: 'Un sac pratique et élégant pour vous accompagner durant votre voyage.',
    },
    {
      icon: 'book' as IconName,
      title: 'دليل المعتمرة',
      titleLang: 'ar',
      subtitle: 'Le guide de la pèlerine',
      text: 'Un guide pratique pour vous accompagner à chaque étape de votre Omra.',
    },
    {
      icon: 'tasbih' as IconName,
      title: 'Tasbih',
      text: 'Un tasbih élégant pour vos moments de dhikr et de recueillement.',
    },
  ],
};

export const programmes = {
  eyebrow: 'Nos séjours',
  title: 'Les prochains départs',
  intro:
    'Nos séjours sont exclusivement réservés aux femmes de 23 à 55 ans. Les dates, l’hébergement, les prestations incluses et les tarifs de chaque programme vous sont communiqués en détail sur simple demande, avant tout engagement.',
  included: [
    'Dates du prochain départ',
    'Hébergement à La Mecque et à Médine',
    'Prestations incluses',
    'Conditions de participation',
    'Tarif et modalités de réservation',
  ],
  cta: 'Recevoir le programme',
  note: 'Envoyé sur simple demande, sans engagement.',
  whatsappMessage:
    'Assalamu alaykum, je souhaite recevoir le programme de votre prochain séjour d’Omra pour les femmes.',
};

export const faq = [
  {
    q: 'Qui peut participer ?',
    a: `Les séjours ${site.name} sont exclusivement destinés aux femmes âgées de 23 à 55 ans.`,
  },
  {
    q: 'Le programme comprend-il les rites de l’Omra ?',
    a: 'Le programme est conçu autour de l’accomplissement de l’Omra et de la découverte de ses rites. Les modalités précises de l’accompagnement seront communiquées dans le programme du séjour.',
  },
  {
    q: 'Y aura-t-il des moments de dhikr en groupe ?',
    a: 'Des moments de dhikr et de recueillement peuvent être proposés au groupe, dans le respect des règles applicables dans les lieux saints. Les modalités seront précisées dans le programme.',
  },
  {
    q: 'Un vêtement commun est-il prévu pour le groupe ?',
    a: 'Une tenue coordonnée est envisagée pour faciliter l’identification des participantes et renforcer l’identité du groupe. Le modèle et les modalités seront communiqués ultérieurement.',
  },
  {
    q: 'Y aura-t-il du temps pour faire du shopping ?',
    a: 'Des créneaux de shopping pourront être intégrés au programme à La Mecque et à Médine, selon l’organisation du séjour.',
  },
  {
    q: 'Comment recevoir le programme détaillé ?',
    a: 'Écrivez-nous sur WhatsApp ou via le formulaire : nous vous envoyons le programme complet du prochain séjour, avec les prestations incluses et les conditions.',
  },
  {
    q: 'Est-ce adapté si c’est ma première Omra ?',
    a: 'Oui. L’accompagnement est pensé pour vous guider dans les rites et l’organisation, que vous partiez pour la première fois ou non.',
  },
  {
    q: 'Quels documents dois-je prévoir ?',
    a: 'Les documents requis dépendent de votre situation et de la réglementation en vigueur. Nous vous transmettons la liste à jour lors de votre inscription.',
  },
  {
    q: 'Comment se déroule la réservation ?',
    a: 'Après un premier échange, nous vous transmettons le programme et les conditions par écrit. La réservation est confirmée une fois ces éléments validés ensemble.',
  },
];

export const contactSection = {
  eyebrow: 'Contact',
  title: 'Parlons de <em>votre Omra.</em>',
  text: 'Envie de recevoir le programme de nos séjours, ou une question sur votre projet de voyage ? Laissez-nous quelques mots : votre message s’ouvre directement dans WhatsApp, rien n’est enregistré sur ce site.',
  directCta: 'Échanger sur WhatsApp',
  submitCta: 'Poser ma question',
  formNote: 'En envoyant, vous ouvrez une conversation WhatsApp avec nous. Aucune donnée n’est conservée sur ce site.',
  periods: ['Je ne sais pas encore', 'Dans les 3 prochains mois', 'Dans 3 à 6 mois', 'Dans plus de 6 mois'],
};

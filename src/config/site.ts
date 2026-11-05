/**
 * Site-wide configuration and brand copy.
 *
 * Everything a non-developer may need to change (contact details, navigation,
 * legal info) lives here. Leave a value empty rather than inventing one:
 * components hide or degrade gracefully when a field is not set.
 */

export const site = {
  name: 'DuvaniaHaramain',
  nameArabic: 'دوفاينا الحرمين',
  tagline: 'Votre Omra, en toute sérénité.',
  signature: 'Omra Confort au Féminin',
  description:
    'DuvaniaHaramain organise des voyages d’Omra exclusivement réservés aux femmes de 23 à 55 ans : un groupe féminin, une organisation soignée et un accompagnement attentif, de La Mecque à Médine.',
  locale: 'fr_FR',
  lang: 'fr',
} as const;

export const contact = {
  /** International format, digits only, e.g. "33612345678". Empty = not yet configured. */
  whatsapp: '',
  whatsappMessage: 'Assalamu alaykum, je souhaite recevoir des informations sur vos séjours d’Omra pour les femmes.',
  email: '',
  instagram: '',
} as const;

export const legal = {
  /** Travel-agency registration (e.g. Atout France IM number). Shown in the footer when set. */
  registration: '',
  mentionsUrl: '/mentions-legales',
  privacyUrl: '/confidentialite',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: 'Concept', href: '#concept' },
  { label: 'Pour vous', href: '#pour-vous' },
  { label: 'L’expérience', href: '#experience' },
  { label: 'Le programme', href: '#voyage' },
  { label: 'Hébergement', href: '#hebergement' },
  { label: 'Nos séjours', href: '#programmes' },
  { label: 'FAQ', href: '#faq' },
];

/** Primary conversion link: WhatsApp when configured, otherwise the contact section. */
export function whatsappHref(message: string = contact.whatsappMessage): string {
  if (!contact.whatsapp) return '#contact';
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const isWhatsappConfigured = contact.whatsapp.length > 0;

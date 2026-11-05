/**
 * Internationalisation: French (default, "/") and Arabic ("/ar/", RTL).
 *
 *  - getLang(Astro.currentLocale) → 'fr' | 'ar'
 *  - getContent(lang)            → the landing-page copy (content/home*.ts)
 *  - ui[lang]                    → interface strings used by components
 *  - mediaAlt(slot, lang)        → image alt text in the right language
 *
 * The Arabic copy is typed against the French one, so a missing key is a
 * build error rather than a blank on the page.
 */
import * as fr from '@/content/home';
import * as ar from '@/content/home.ar';
import { media, type MediaKey, type MediaSlot } from '@/config/media';
import { site } from '@/config/site';

export type Lang = 'fr' | 'ar';
export const languages: Lang[] = ['fr', 'ar'];

export function getLang(locale: string | undefined): Lang {
  return locale === 'ar' ? 'ar' : 'fr';
}

export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** Root path of each language version. */
export const homePath: Record<Lang, string> = { fr: '/', ar: '/ar/' };

const content: Record<Lang, typeof fr> = { fr, ar };
export const getContent = (lang: Lang) => content[lang];

export function mediaAlt(slot: MediaKey, lang: Lang): string {
  const item: MediaSlot = media[slot];
  return (lang === 'ar' && item.altAr) || item.alt;
}

export const ui = {
  fr: {
    locale: 'fr_FR',
    meta: {
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
    },
    tagline: site.tagline,
    signature: site.signature,
    skipLink: 'Aller au contenu',
    nav: [
      { label: 'Concept', href: '#concept' },
      { label: 'Pour vous', href: '#pour-vous' },
      { label: 'L’expérience', href: '#experience' },
      { label: 'Le programme', href: '#voyage' },
      { label: 'Hébergement', href: '#hebergement' },
      { label: 'Nos séjours', href: '#programmes' },
      { label: 'FAQ', href: '#faq' },
    ],
    header: {
      home: 'Duvania Haramain — accueil',
      navMain: 'Navigation principale',
      navMobile: 'Navigation mobile',
      cta: 'Nous écrire',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      menuCta: 'Échanger sur WhatsApp',
    },
    langSwitch: {
      label: 'Choisir la langue',
      names: { fr: 'Français', ar: 'العربية' },
    },
    mobileBarCta: 'Échanger sur WhatsApp',
    whatsappMessage: 'Assalamu alaykum, je souhaite recevoir des informations sur vos séjours d’Omra pour les femmes.',
    questionMessage: 'Assalamu alaykum, j’ai une question sur vos séjours d’Omra pour les femmes.',
    faqHeading: {
      eyebrow: 'FAQ',
      title: 'Questions <em>fréquentes</em>',
      intro: 'Trouvez rapidement les réponses aux questions les plus courantes sur nos séjours Omra.',
    },
    programmesCardTitle: 'Le programme détaillé comprend',
    footer: {
      sitemap: 'Plan du site',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      mentions: 'Mentions légales',
      privacy: 'Confidentialité',
      credits: 'Crédits photographiques',
      creditsIntro: 'Photographies des lieux saints issues de Wikimedia Commons, à titre d’illustration :',
      illustrations:
        'Les visuels représentant des pèlerines (parcours, invocation, boutiques, groupe et tenue) sont des illustrations : ils ne représentent ni un séjour réel, ni une tenue définitive, ni des prestations incluses.',
    },
    form: {
      title: 'Votre demande',
      name: 'Prénom',
      city: 'Ville de départ',
      period: 'Période envisagée',
      travellers: 'Nombre de voyageuses',
      message: 'Votre message',
      placeholder: 'Vos questions, vos besoins particuliers…',
      errorName: 'Merci d’indiquer votre prénom.',
      unavailable: 'Nos coordonnées seront très bientôt disponibles. Merci de votre patience.',
      greeting: 'Assalamu alaykum,',
      intro: 'Je m’appelle',
      mailSubject: 'Demande d’information — Omra',
    },
  },
  ar: {
    locale: 'ar_AR',
    meta: {
      title: `${site.nameArabic} — عمرتكِ في سكينة وطمأنينة`,
      description:
        `${site.nameArabic} تنظّم رحلات عمرة مخصّصة حصريًا للنساء من 23 إلى 55 عامًا: مجموعة نسائية، وتنظيم متقن، ومرافقة عناية من مكة المكرمة إلى المدينة المنورة.`,
    },
    tagline: 'عمرتكِ في سكينة وطمأنينة.',
    signature: 'عمرة الراحة للمرأة',
    skipLink: 'الانتقال إلى المحتوى',
    nav: [
      { label: 'مفهومنا', href: '#concept' },
      { label: 'لكِ', href: '#pour-vous' },
      { label: 'التجربة', href: '#experience' },
      { label: 'البرنامج', href: '#voyage' },
      { label: 'الإقامة', href: '#hebergement' },
      { label: 'رحلاتنا', href: '#programmes' },
      { label: 'الأسئلة الشائعة', href: '#faq' },
    ],
    header: {
      home: `${site.nameArabic} — الصفحة الرئيسية`,
      navMain: 'القائمة الرئيسية',
      navMobile: 'قائمة الجوال',
      cta: 'راسلينا',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
      menuCta: 'تواصلي عبر واتساب',
    },
    langSwitch: {
      label: 'اختيار اللغة',
      names: { fr: 'Français', ar: 'العربية' },
    },
    mobileBarCta: 'تواصلي عبر واتساب',
    whatsappMessage: 'السلام عليكم، أرغب في الحصول على معلومات حول رحلات العمرة المخصّصة للنساء.',
    questionMessage: 'السلام عليكم، لديّ سؤال حول رحلات العمرة المخصّصة للنساء.',
    faqHeading: {
      eyebrow: 'أسئلة وأجوبة',
      title: 'الأسئلة <em>الشائعة</em>',
      intro: 'اعثري بسرعة على إجابات الأسئلة الأكثر شيوعًا حول رحلات العمرة لدينا.',
    },
    programmesCardTitle: 'يتضمّن البرنامج المفصّل',
    footer: {
      sitemap: 'خريطة الموقع',
      contact: 'تواصلي معنا',
      whatsapp: 'واتساب',
      mentions: 'الإشعارات القانونية',
      privacy: 'سياسة الخصوصية',
      credits: 'حقوق الصور',
      creditsIntro: 'صور الأماكن المقدسة مأخوذة من ويكيميديا كومنز، لأغراض توضيحية:',
      illustrations:
        'الصور التي تُظهر المعتمرات (الرحلة، الدعاء، المتاجر، المجموعة والزيّ) صور توضيحية: لا تمثّل رحلة حقيقية ولا زيًّا نهائيًا ولا خدمات مشمولة.',
    },
    form: {
      title: 'طلبكِ',
      name: 'الاسم',
      city: 'مدينة الانطلاق',
      period: 'الفترة المتوقّعة',
      travellers: 'عدد المسافرات',
      message: 'رسالتكِ',
      placeholder: 'أسئلتكِ واحتياجاتكِ الخاصة…',
      errorName: 'يُرجى إدخال اسمكِ.',
      unavailable: 'ستتوفّر بيانات التواصل قريبًا بإذن الله. شكرًا لصبركِ.',
      greeting: 'السلام عليكم،',
      intro: 'اسمي',
      mailSubject: 'طلب معلومات — عمرة',
    },
  },
} satisfies Record<Lang, unknown>;

export type Ui = (typeof ui)['fr'];

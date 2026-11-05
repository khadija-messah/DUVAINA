/**
 * Photography registry.
 *
 * Each slot describes the image the design expects (art direction), its French
 * alt text and, when the photo is not owned by the brand, its licence credit.
 * Slots without a `src` render a soft branded placeholder.
 *
 * To add a photo: drop the file in `src/assets/images/`, import it here and set
 * `src`. Use only photos you hold the rights to (or under a free licence, with
 * the credit filled in). Avoid identifiable faces of pilgrims without consent.
 *
 * The current photos are authentic photographs of Masjid al-Haram from
 * Wikimedia Commons. They illustrate the destination;
 * they are not photos taken during a DuvaniaHaramain trip.
 */
import type { ImageMetadata } from 'astro';
import makkahDusk from '@/assets/images/makkah-dusk.jpg';
import makkahKaaba from '@/assets/images/makkah-kaaba.jpg';
import madinahDatesMarket from '@/assets/images/madinah-dates-market.jpg';
import misbaha from '@/assets/images/misbaha.jpg';
import conceptInvocation from '@/assets/images/concept/invocation.png';
import conceptSouk from '@/assets/images/concept/shopping-souk.png';
import conceptGroup from '@/assets/images/concept/group-harmony.png';
import outfitTote from '@/assets/images/concept/outfit-tote.png';
import outfitShopping from '@/assets/images/concept/outfit-shopping.png';
import outfitDetail from '@/assets/images/concept/outfit-detail.png';
import journeyArrival from '@/assets/images/journey/01-arrivee-kaaba.webp';
import journeyMedina from '@/assets/images/journey/02-medine-recueillement.webp';
import journeySai from '@/assets/images/journey/03-sai-safa-marwa.webp';
import journeyHotel from '@/assets/images/journey/04-hotel-repos.webp';
import journeyDeparture from '@/assets/images/journey/05-depart-aeroport.webp';
import journeyCoach from '@/assets/images/journey/06-trajet-autocar.webp';
import journeyTerrace from '@/assets/images/journey/07-terrasse-haram.webp';
import journeyShopping from '@/assets/images/journey/08-boutique-souvenirs.webp';
import promoMakkah from '@/assets/images/hotels/makkah-haram.webp';
import promoMakkahRoom from '@/assets/images/hotels/makkah-chambre.webp';
import promoMadinah from '@/assets/images/hotels/madinah-masjid-nabawi.webp';
import promoMadinahRoom from '@/assets/images/hotels/madinah-chambre.webp';
import hotelMakkahView from '@/assets/images/hotels/makkah-kaaba-tours.webp';
import hotelMadinahView from '@/assets/images/hotels/madinah-dome-vert.webp';

export interface MediaCredit {
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

export interface MediaSlot {
  alt: string;
  /** Arabic alt text for the /ar/ version (falls back to `alt`). */
  altAr?: string;
  brief: string;
  src?: ImageMetadata;
  /** CSS object-position, to keep the subject inside arch crops. */
  position?: string;
  /** Extra crop (≥ 1) anchored on `position`, e.g. to keep cranes out of frame. */
  zoom?: number;
  credit?: MediaCredit;
  /** Conceptual visual (not a photo of a real trip or of a chosen product). */
  illustrative?: boolean;
}

export const media = {
  hero: {
    alt: 'La Kaaba au cœur de Masjid al-Haram, à La Mecque, à la tombée du jour',
    brief: 'Kaaba au crépuscule, lumière douce, cadrage vertical.',
    src: makkahDusk,
    position: '47% 100%',
    zoom: 1.4,
    credit: {
      title: 'Masjid al-Haram 2022',
      author: 'مريم محمد الغلبان',
      license: 'CC0 1.0',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Masjid_al-Haram_2022.jpg',
    },
  },
  makkah: {
    alt: 'La Kaaba entourée de fidèles dans la cour de Masjid al-Haram',
    brief: 'Masjid al-Haram — la Kaaba en lumière naturelle.',
    src: makkahKaaba,
    position: '50% 50%',
    credit: {
      title: 'The Kaaba during Hajj (edited)',
      author: 'Adli Wahid',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Kaaba_during_Hajj_-_edited.jpg',
    },
  },
  dhikr: {
    alt: 'Un chapelet (misbaha) aux perles ambrées, posé sur un fond sombre',
    brief: 'Dhikr — chapelet, détail serein, sans visage.',
    src: misbaha,
    position: '50% 40%',
    credit: {
      title: 'Misbaha 00 (7)',
      author: 'لا روسا',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Misbaha_00_(7).JPG',
    },
  },
  shopping: {
    alt: 'Étals de dattes au marché de Médine',
    brief: 'Shopping — marché aux dattes de Médine, produits traditionnels.',
    src: madinahDatesMarket,
    // Anchored low and cropped so the stalls fill the frame and faces stay out of it.
    position: '50% 100%',
    zoom: 1.25,
    credit: {
      title: 'Date Bazaar',
      author: 'Tevfik Teker',
      license: 'CC BY 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Date_Bazaar_-_panoramio.jpg',
    },
  },
  // Conceptual visuals from the brand's design reference (illustrations, not trip photos).
  invocation: {
    alt: 'Illustration : une femme en prière, les mains levées en invocation, face à la Kaaba',
    brief: 'Dhikr / invocation — illustration conceptuelle.',
    src: conceptInvocation,
    illustrative: true,
  },
  souk: {
    alt: 'Illustration : boutiques de lanternes et de chapelets près du Haram',
    brief: 'Shopping — illustration conceptuelle.',
    src: conceptSouk,
    illustrative: true,
  },
  group: {
    alt: 'Illustration : un groupe de femmes en tenue coordonnée, vues de dos, devant une mosquée',
    brief: 'Groupe en tenue coordonnée — illustration conceptuelle.',
    src: conceptGroup,
    illustrative: true,
  },
  outfitTote: {
    alt: 'Illustration de concept : tenue pudique bordeaux et sac clair orné d’un emblème en arche',
    altAr: 'صورة توضيحية للفكرة: زيّ محتشم عنابي وحقيبة فاتحة مزيّنة بشعار القوس',
    brief: 'Concept de tenue — non définitif.',
    src: outfitTote,
    illustrative: true,
  },
  outfitShopping: {
    alt: 'Illustration de concept : participante en tenue coordonnée dans une rue commerçante',
    altAr: 'صورة توضيحية للفكرة: مشاركة بزيّ منسّق في شارع تجاري',
    brief: 'Concept de tenue en situation — non définitif.',
    src: outfitShopping,
    illustrative: true,
  },
  outfitDetail: {
    alt: 'Illustration de concept : détail d’un vêtement bordeaux brodé d’un emblème en arche',
    altAr: 'صورة توضيحية للفكرة: تفصيل لباس عنابي مطرّز بشعار القوس',
    brief: 'Détail de tenue — non définitif.',
    src: outfitDetail,
    illustrative: true,
  },
  // Journey story: brand illustrations supplied by DuvaniaHaramain (not photos of a real trip).
  /** Hero promo photos (brand illustrations, cropped as individual pictures, no text). */
  promoMakkah: {
    alt: 'La Kaaba au cœur de Masjid al-Haram, la tour de l’horloge et les tours hôtelières au coucher du soleil',
    altAr: 'الكعبة في قلب المسجد الحرام، مع برج الساعة والأبراج الفندقية عند الغروب',
    brief: 'Promo hero : La Mecque.',
    src: promoMakkah,
    illustrative: true,
  },
  promoMakkahRoom: {
    alt: 'Chambre d’hôtel élégante aux tons crème et bordeaux, avec une vue sur la Kaaba',
    altAr: 'غرفة فندقية أنيقة بألوان كريمية وعنابية، تطل على الكعبة',
    brief: 'Promo hero : chambre à La Mecque.',
    src: promoMakkahRoom,
    illustrative: true,
  },
  promoMadinah: {
    alt: 'La Mosquée du Prophète et son Dôme Vert, avec ses minarets illuminés au crépuscule',
    altAr: 'المسجد النبوي وقبته الخضراء، ومآذنه المضاءة عند الغسق',
    brief: 'Promo hero : Médine.',
    src: promoMadinah,
    illustrative: true,
  },
  promoMadinahRoom: {
    alt: 'Chambre d’hôtel élégante aux tons crème et bordeaux, avec une vue sur la Mosquée du Prophète',
    altAr: 'غرفة فندقية أنيقة بألوان كريمية وعنابية، تطل على المسجد النبوي',
    brief: 'Promo hero : chambre à Médine.',
    src: promoMadinahRoom,
    illustrative: true,
  },
  journeyArrival: {
    alt: 'Un groupe de femmes en abayas bordeaux, vues de dos, face à la Kaaba dans la cour de Masjid al-Haram',
    altAr: 'مجموعة من النساء بعباءات عنابية، من الخلف، أمام الكعبة في صحن المسجد الحرام',
    brief: 'Arrivée à La Mecque.',
    src: journeyArrival,
    position: '55% 55%',
    illustrative: true,
  },
  journeyMedina: {
    alt: 'Des femmes assises en cercle dans l’enceinte de la Mosquée du Prophète, le Dôme Vert en arrière-plan, lisant et invoquant',
    altAr: 'نساء جالسات في حلقة في ساحة المسجد النبوي، والقبة الخضراء في الخلفية، يقرأن ويدعون',
    brief: 'Recueillement à Médine.',
    src: journeyMedina,
    position: '50% 60%',
    illustrative: true,
  },
  journeySai: {
    alt: 'Des femmes en abayas bordeaux marchant dans la galerie entre Safa et Marwa, sous les panneaux indicateurs',
    altAr: 'نساء بعباءات عنابية يمشين في المسعى بين الصفا والمروة تحت اللوحات الإرشادية',
    brief: 'Le Sa’i entre Safa et Marwa.',
    src: journeySai,
    position: '50% 55%',
    illustrative: true,
  },
  journeyHotel: {
    alt: 'Des femmes réunies dans une chambre d’hôtel autour d’une table de dattes et de café, face à une vue sur la Mosquée du Prophète',
    altAr: 'نساء مجتمعات في غرفة فندق حول طاولة من التمر والقهوة، مع إطلالة على المسجد النبوي',
    brief: 'Repos à l’hôtel.',
    src: journeyHotel,
    position: '50% 50%',
    illustrative: true,
  },
  journeyDeparture: {
    alt: 'Un groupe de femmes avec valises et sacs assortis marchant vers les départs d’un aéroport au coucher du soleil',
    altAr: 'مجموعة من النساء بحقائب ومستلزمات متناسقة يتّجهن إلى بوابات المغادرة في مطار عند الغروب',
    brief: 'Départ à l’aéroport.',
    src: journeyDeparture,
    position: '50% 55%',
    illustrative: true,
  },
  journeyCoach: {
    alt: 'Des femmes installées dans un autocar, en route vers La Mecque, la tour de l’horloge visible à travers le pare-brise',
    altAr: 'نساء في حافلة في الطريق إلى مكة المكرمة، وبرج الساعة ظاهر من الزجاج الأمامي',
    brief: 'Trajet en autocar.',
    src: journeyCoach,
    position: '50% 50%',
    illustrative: true,
  },
  journeyTerrace: {
    alt: 'Des femmes assises sur une terrasse supérieure du Haram, en prière et en lecture, face à la Kaaba au coucher du soleil',
    altAr: 'نساء جالسات على سطح الحرم يصلّين ويقرأن، أمام الكعبة عند الغروب',
    brief: 'Terrasse du Haram.',
    src: journeyTerrace,
    position: '55% 45%',
    illustrative: true,
  },
  journeyShopping: {
    alt: 'Des femmes découvrant une boutique d’abayas, de parfums et de souvenirs dans une galerie commerçante de La Mecque',
    altAr: 'نساء يكتشفن متجرًا للعباءات والعطور والتذكارات في مركز تجاري بمكة المكرمة',
    brief: 'Boutique de souvenirs.',
    src: journeyShopping,
    position: '50% 50%',
    illustrative: true,
  },
  // 5-star hotels section: no hotel is named; images illustrate the setting.
  hotelMakkah: {
    alt: 'La Kaaba devant la tour de l’horloge et les tours hôtelières qui entourent le Haram, à La Mecque, au coucher du soleil',
    altAr: 'الكعبة أمام برج الساعة والأبراج الفندقية المحيطة بالحرم في مكة المكرمة عند الغروب',
    brief: 'Hôtels de La Mecque — la Kaaba et les tours hôtelières.',
    src: hotelMakkahView,
    position: '40% 50%',
    illustrative: true,
  },
  hotelMadinah: {
    alt: 'Le Masjid an-Nabawi à Médine, son Dôme Vert et ses minarets illuminés au crépuscule',
    altAr: 'المسجد النبوي في المدينة المنورة، بقبته الخضراء ومآذنه المضاءة عند الغسق',
    brief: 'Hôtels de Médine — le Masjid an-Nabawi et le Dôme Vert.',
    src: hotelMadinahView,
    position: '55% 50%',
    illustrative: true,
  },
  comfort: {
    alt: 'Chambre d’hôtel lumineuse aux tons clairs',
    brief: 'Photo réelle d’un hébergement du programme (à fournir).',
  },
} satisfies Record<string, MediaSlot>;

export type MediaKey = keyof typeof media;

/** True when at least one conceptual illustration is in use (footer notice). */
export const hasIllustrations = Object.values(media as Record<string, MediaSlot>).some((m) => m.illustrative);

/** Credits for every photo in use, for the footer. */
export const mediaCredits: MediaCredit[] = Object.values(media as Record<string, MediaSlot>)
  .map((m) => m.credit)
  .filter((c): c is MediaCredit => Boolean(c));

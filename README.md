# DuvaniaHaramain — landing page

The landing page for **DuvaniaHaramain** (دوفاينا الحرمين): *Votre Omra, en toute sérénité.*

It is built with [Astro](https://astro.build) as a static, fast, almost JS-free page, with self-hosted fonts and scoped component CSS.

```bash
npm install
npm run dev       # http://localhost:4321  (style guide: /styleguide)
npm run build     # type-check + static build to dist/
npm run preview
```

## Structure

```
src/
  config/site.ts        brand, navigation, contact (WhatsApp/email), legal
  config/media.ts       photography slots: alt text, art direction, image source
  content/home.ts       all landing-page copy (French, served at /)
  content/home.ar.ts    Arabic copy (served at /ar/, right-to-left)
  i18n/index.ts         languages, interface strings, Arabic alt texts helper
  styles/tokens.css     design tokens + section themes
  styles/base.css       reset, typography, layout primitives, reveal motion
  layouts/BaseLayout    <head>, SEO/OG, header/footer, scroll reveal
  components/ui/        Button, Card, Section, SectionHeading, ImageFrame, Icon, Logo, Divider,
                        HotelsPromo, HotelDestinationCard, Blossom (hero promo)
  components/layout/    Header (+ mobile menu), Footer, MobileContactBar
  components/sections/  Hero, Concept, ForYou, JourneyStory, ProgrammeCards, OutfitBanner,
                        StepsTimeline, Accommodation, Hotels, Gifts, Programmes, Faq, Contact
docs/DESIGN_SYSTEM.md   design rationale and rules
```

## Before going live

- [ ] Set `contact.whatsapp` (and optionally `email` and `instagram`) in `src/config/site.ts`. Until then, the CTAs point to `#contact`.
- [ ] Replace or complete the photos in `src/config/media.ts`. The current ones are from Wikimedia Commons under free licences and are credited in the footer. Keep the credits for as long as these photos are used.
- [ ] Set the production domain in `astro.config.mjs`.
- [ ] Add the travel-agency registration (`legal.registration`) and create the `/mentions-legales` and `/confidentialite` pages.
- [ ] Add an Open Graph image.

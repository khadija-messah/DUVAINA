# DuvaniaHaramain — Design System

*Votre Omra, en toute sérénité.* — Omra Confort au Féminin

The code is the source of truth: `src/styles/tokens.css` holds the tokens and `/styleguide` (dev only, noindex) renders them live.

The brand name is always written **DuvaniaHaramain**: one word, two capitals, never upper-cased or split. It comes from `site.name` in `src/config/site.ts`.

---

## 1. Visual direction — « nuit bordeaux »

Editorial, feminine and luxurious: a near-black burgundy ground, lit by powder pink, antique rose, champagne and a whisper of gold.

- **Light and burgundy, alternating.** Ivory (`#FBF7F1`, `.theme-ivory`) and cream (`#F4EADD`, `.theme-cream`) sections alternate with burgundy ones (Wine 900, the default or `.theme-dark`) that set off key content: hero, strengths, experience, accommodation, departures and footer. Each theme remaps every semantic token (`--color-*`, `--color-ornament`, `--hairline`, `--gold-line`, `--color-ring`, `--color-panel`), so components never hard-code a background-specific colour. There are no decorative gradients.
- **Typography leads.** Large light Cormorant headings, with one italic accent per heading in antique rose. The hero title is set in capitals in French. Small labels are tracked capitals in Manrope with a gold four-point sparkle (`.eyebrow`).
- **The arch** stays the architectural motif: arched photographs, fine offset gold arch lines, and a round seal in the hero (women-only, 23–55).
- **Fine details only.** Use hairlines (`--hairline`, `--gold-line`), numbered lists (01, 02…), icons in thin circles, a line-art bloom (`Floral.astro`, 16–22% opacity) and soft radial Black Cherry glows.
- **Avoid:** card grids with heavy shadows, saturated colours outside the palette, text baked into images, and decorative excess.

## 2. Colour palette

| Token | Value | Role |
|---|---|---|
| `--wine-900` | `#310711` | Page background |
| `--wine-850` | `#3A0B17` | Alternate bands, surfaces |
| `--wine-950` | `#24050D` | Footer, mobile sheet and bar |
| `--black-cherry` | `#721D35` | Primary buttons, glows, open states |
| `--black-cherry-dark` | `#42121F` | Raised panels |
| `--blush` | `#F2DCD3` | Headings (powder pink) |
| `--champagne` | `#EFE1CE` | Body text (88% / 70% muted) |
| `--rose-ancien` | `#D7A094` | Labels, italic accents, numbers |
| `--rose-gold` | `#B9857C` | Decorative lines and blooms |
| `--gold` | `#C9A46E` | Sparkles, icons, hairlines (sparingly) |

Contrast on Wine 900: Blush 14.6:1, Champagne 14.1:1, muted Champagne about 8:1, antique rose 7.6:1 and gold 7.9:1. All text passes WCAG AA.

**Themes** (`<Section theme>`): all stay in the burgundy family. `white` is Wine 900, `rose` is Wine 850, `cherry` is Black Cherry Dark and `night` is Wine 950.

## 3. Typography

| | Family | Notes |
|---|---|---|
| Display | **Cormorant Garamond** | Light (300) headings. One `<em>` accent per heading, in italic antique rose. |
| Body | **Manrope** | Light body text, line-height 1.7–1.8. Labels are 11px capitals tracked at 0.2–0.24em. |
| Arabic | **Amiri** (display) and **IBM Plex Sans Arabic** (body) | No capitals, tracking or italics. Display sizes come down a step, line-height is 1.5 and labels are at least 13–14px. |

## 4. Components

- **Buttons** (pills):
  - `primary`: Black Cherry with a fine gold edge and blush capitals.
  - `secondary`: an antique-rose hairline.
  - `text`: capitals with the arrow in a thin circle.
- **SectionHeading:** sparkle label, light serif title and short intro, with an optional `aside` slot.
- **Floral:** a line-art bloom with an optional stem, using `currentColor`.
- **Form fields:** underlined with a hairline, gold on focus, on a framed translucent wine panel.
- **FAQ:** native `<details>` (one open at a time) that open smoothly via `::details-content` where supported.

## 5. Spacing and responsive behaviour

- Spacing uses a 4px base, with a fluid `--gutter` (16–40px) and `--section-space` (72–136px).
- Layouts are mobile-first, with breakpoints at 40em, 48em and 64em. Desktop navigation appears from 80em.
- The hero fits the first screen from 64em (sizes follow svh).
- On phones, a sticky WhatsApp bar appears after the hero.
- No horizontal scroll at 320px or wider, and every tap target is at least 44px.

## 6. Page structure

| # | Section | Composition |
|---|---|---|
| 1 | Hero | Capital serif title, two actions, an arched photo with a gold arch line and the 23–55 seal, and an editorial strip |
| 2 | Notre concept (`#concept`) | Framed arched photo, then the five components as a numbered hairline list |
| 3 | Une Omra au féminin (`#pour-vous`) | Split head, then the five strengths in a numbered row with hairline separators |
| 4 | Le parcours d’une pèlerine (`#parcours`) | Eight chapters in a fixed order: large outlined numerals, framed photos alternating sides, and two immersive full-bleed chapters |
| 5 | Notre programme (`#experience`) | Four-photo editorial gallery, staggered |
| 6 | Une tenue qui nous unit (`#tenue`) | Fine-line features, a triptych of concept visuals and a note card |
| 7 | Les grandes étapes (`#voyage`) | Seven-step timeline with sparkle markers |
| 8 | Hébergement (`#hebergement`) | Heading and three criteria on hairlines |
| 9 | Hôtels 5 étoiles (`#hotels`) | Two alternating compositions (Mecca, Medina), each an arched scene with an overlapping room photo, the Arabic name, the city, a discreet 5-star pill and indicators. Then the four services and the note. No hotel name, price or distance. |
| 10 | Nos attentions (`#cadeaux`) | Gifts visual in a gold frame |
| 11 | Nos séjours (`#programmes`) | Arched photo of the Haram at dusk, then the numbered programme contents and a Black Cherry CTA |
| 12 | FAQ (`#faq`) | Sticky heading, then numbered questions on hairlines |
| 13 | Contact (`#contact`) | Large serif invitation and the WhatsApp CTA, with the form on a framed panel and a bloom in an arch |
| 14 | Footer | Logo, sitemap, contact, a round signature seal, legal links and photo credits |

`HotelsPromo.astro`, `HotelDestinationCard.astro`, `Blossom.astro`, `Card.astro` and `Lines.astro` are no longer used on the landing page. `Card` is still shown on `/styleguide`.

## 7. Content and image rules

- **Audience:** the trips are reserved exclusively for women aged 23 to 55. The wording lives in `eligibility` in `src/content/home.ts`. It is stated in the hero (lead and label), the "Pour vous" section, the programme information and the FAQ, and not repeated elsewhere. Never imply the trips are open to men or to women outside this age range.
- **Wording for unconfirmed elements:** dhikr is always "selon les règles des lieux saints" or "selon les possibilités", shopping is "selon le programme", and the group outfit is "envisagée", with model, colour and terms "communiqués ultérieurement". The sample programme is labelled as an example, with no dates. The outfit, invocation, souk and group visuals are conceptual illustrations taken from the design reference (`src/assets/images/concept/`). They are marked `illustrative` in `media.ts`, and the footer says so. Replace them with real, higher-resolution visuals when available.
- **Navigation:** the inline links appear from 1200px (75em). Below that, the menu button opens the full-screen sheet.

- Never publish invented prices, dates, hotel names, ratings, distances to the Haram, inclusions or testimonials.
- The photos are authentic images of the holy sites from Wikimedia Commons, used under free licences and credited in the footer. They must never be presented as photos of a DuvaniaHaramain trip.

## 8. Arabic version (RTL)

- **Routes:** French at `/` and Arabic at `/ar/`, through Astro i18n routing configured in `astro.config.mjs`. Both pages render `src/components/HomePage.astro`, so they always contain the same sections and features.
- **Copy:** French lives in `src/content/home.ts` and Arabic in `src/content/home.ar.ts`. The Arabic file is typed against the French one in `src/i18n/index.ts`, so a missing key fails the build. Interface strings (menu, buttons, form, footer, accessibility labels) live in `ui` in `src/i18n/index.ts`, and Arabic image alt texts in `altAr` in `src/config/media.ts`.
- **Tone:** the Arabic copy addresses the reader in the feminine form (ـكِ), because the trips are for women only.
- **Language switch:** the FR / AR switch in the header (`LangSwitch.astro`) keeps the current section anchor when it switches.
- **Direction:** `<html lang="ar" dir="rtl">`. Layout uses logical CSS properties, so it mirrors on its own. The rules in `base.css` and the components handle the rest:
  - Arabic fonts: Amiri for headings and IBM Plex Sans Arabic for body text, with more generous line heights. Letter spacing and italics are removed, and small labels are at least 14px.
  - The logo keeps its Latin typography.
  - The arrow and plane icons are mirrored.
  - Photos are never mirrored, to protect the Kaaba and its calligraphy. The immersive panels therefore stay on the left (the hero card and promo follow the reading direction), and the gifts keep their order under their objects.

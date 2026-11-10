---
name: jardin-de-bastos-art-direction
description: >-
  Defines and preserves the exclusive visual direction of Le Jardin de Bastos.
  Use when designing, reviewing, or maintaining its pages, components, layouts,
  colors, typography, photography, motion, or responsive and accessible behavior.
---

# Direction artistique — Le Jardin de Bastos

Use this skill only for the Le Jardin de Bastos website. It is the project's visual reference for design and maintenance; it does not authorize implementation beyond the user's approved scope.

## Source of truth

- Follow the approved brief in `Cahier des Charges - Le Jardin de Bastos.pdf`.
- Follow the accepted experience, architecture, constraints, and review gates in `PROJECT_PLAN.md`.
- If a later user-approved decision changes either, update this skill and the project plan together.
- Do not invent restaurant details, endorsements, photographs, social links, or brand assets.

## Brand intent

Create the feeling of entering an elegant, intimate garden restaurant in Bastos as evening falls. The mood is Afro-fusion, warm, natural, composed, and gastronomic: premium without ostentation.

The site should feel like a guided visit, not a row of interchangeable marketing cards. Use photography, editorial typography, asymmetry, negative space, changes in scale, and deliberate pacing to create atmosphere while keeping every action and piece of information easy to find.

## Approved visual foundations

| Token | Value | Use |
|---|---|---|
| Forest green | `#1B4332` | Brand structure, navigation, selected dark fields |
| Warm cream | `#FAF9F6` | Primary reading surfaces and visual breathing room |
| Matte gold | `#D4AF37` | Rare emphasis, key actions, fine separators |
| Anthracite | `#2B2D42` | Body text and readable neutral contrast |

- Use **Playfair Display** or a comparable elegant serif for expressive headings.
- Use **Inter** or a comparable modern sans serif for body text, controls, and dense information.
- Keep gold sparse and legible; never use color alone to communicate a state.
- Preserve the brief's balance of light space, forest structure, restrained accents, and readable text. Photography may contribute its own natural colors.
- Confirm font licensing and production delivery; prefer optimized self-hosted font files when available.

## Page composition

### Home

Open with a real, high-quality evening-terrace photograph, the approved slogan, and a clear WhatsApp reservation action. Follow with the chef and local-produce story, four signature dishes, an intentional six-image gallery, and only client-approved authentic testimonials.

Give signature dishes the treatment of an editorial selection: varied image crops and text placement, clear names, concise descriptions, and generous spacing. Do not turn the page into a generic product grid.

### Services

Tell four distinct use cases: dining in, catering, private events, and takeaway/delivery. Vary composition to make the page feel curated while keeping each service, its confirmed details, and its appropriate booking/quote/order action immediately understandable.

### Contact

Make the confirmed address, opening hours, direct phone, WhatsApp, and email easy to scan and activate. Keep the form calm and legible. The map and social links must use verified destinations only.

## Photography and content integrity

- Use client-supplied, authorized restaurant photography as the source for all real venue and dish imagery.
- Prefer a strong, truthful hero image over decorative overlays or stock photography.
- Optimize crop, focal point, file size, and responsive source for the screen; specify image dimensions and descriptive alt text.
- Use lazy loading for below-the-fold images, but do not lazy-load the hero image.
- Never fabricate testimonials, prices, dish details, chef biography, delivery coverage, contact details, social accounts, map coordinates, or claims.
- If an asset or fact is missing, use a clearly identified temporary placeholder in development or omit the module; do not make a placeholder look like approved production content.

## Interaction, motion, and responsive behavior

- Keep the navigation persistent, visually quiet, and usable with keyboard and touch.
- Keep reservation and WhatsApp actions discoverable without covering text, form controls, safe areas, or other controls on mobile.
- Use motion only to support arrival, reveal, or feedback. Respect `prefers-reduced-motion`; all content and controls must remain usable without animation.
- Design mobile-first for 320 px and wider layouts. Avoid horizontal overflow, tiny tap targets, hover-only information, and fixed elements that obscure content.
- Preserve visible keyboard focus, semantic heading order, meaningful control names, sufficient contrast, and useful image alternatives.
- Prioritize image treatment and composition over client-side effects. Keep the site fast and the visual hierarchy obvious.

## Review checklist

Before approving a visual change, check:

1. Does it feel like Le Jardin de Bastos rather than a generic restaurant template?
2. Does it preserve the approved palette, typography, restraint, and immersive editorial rhythm?
3. Are all claims and images verified or clearly temporary?
4. Is the next useful action clear without overwhelming the experience?
5. Does it work at mobile, tablet, and desktop sizes and with keyboard navigation?
6. Are motion preferences, contrast, focus, image loading, and readable overlays handled?
7. Does the change preserve the three-page structure and performance goals in `PROJECT_PLAN.md`?

If any answer is no, revise the design before expanding it across other pages.

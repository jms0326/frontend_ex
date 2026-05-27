---
name: Kindred Canine
colors:
  surface: "#fbf9f8"
  surface-dim: "#dcd9d9"
  surface-bright: "#fbf9f8"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f6f3f2"
  surface-container: "#f0eded"
  surface-container-high: "#eae8e7"
  surface-container-highest: "#e4e2e1"
  on-surface: "#1b1c1c"
  on-surface-variant: "#414751"
  inverse-surface: "#303030"
  inverse-on-surface: "#f3f0f0"
  outline: "#717783"
  outline-variant: "#c1c7d3"
  surface-tint: "#0060ac"
  primary: "#005da7"
  on-primary: "#ffffff"
  primary-container: "#2976c7"
  on-primary-container: "#fdfcff"
  inverse-primary: "#a4c9ff"
  secondary: "#835500"
  on-secondary: "#ffffff"
  secondary-container: "#feae2c"
  on-secondary-container: "#6b4500"
  tertiary: "#386800"
  on-tertiary: "#ffffff"
  tertiary-container: "#498300"
  on-tertiary-container: "#f9ffeb"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#d4e3ff"
  primary-fixed-dim: "#a4c9ff"
  on-primary-fixed: "#001c39"
  on-primary-fixed-variant: "#004883"
  secondary-fixed: "#ffddb4"
  secondary-fixed-dim: "#ffb955"
  on-secondary-fixed: "#291800"
  on-secondary-fixed-variant: "#633f00"
  tertiary-fixed: "#a1fa49"
  tertiary-fixed-dim: "#87dc2c"
  on-tertiary-fixed: "#0e2000"
  on-tertiary-fixed-variant: "#2a5000"
  background: "#fbf9f8"
  on-background: "#1b1c1c"
  surface-variant: "#e4e2e1"
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: "700"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: "700"
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: auto
  container-max-width: 1200px
---

## Brand & Style

This design system is built on the pillars of **Empathetic Professionalism**. It balances the clinical reliability required for veterinary health guidance with the warmth and emotional connection of pet ownership. The style is a hybrid of **Modern Corporate** and **Friendly Minimalism**, utilizing ample whitespace, soft organic shapes, and a high-clarity typographic hierarchy.

The visual language avoids harsh edges and cold clinical aesthetics, opting instead for a "human-centric" approach that treats the dog as a family member. Every interface element is designed to reduce anxiety for the pet owner, providing a sense of calm authority and accessible expertise.

## Colors

The palette is anchored by **Gentle Blue**, a shade specifically selected to evoke trust, cleanliness, and medical reliability without feeling overly sterile. **Soft Orange** serves as the primary accent, used sparingly for calls-to-action and highlights to inject warmth, energy, and a "sunny" disposition.

- **Primary (Gentle Blue):** Use for headers, primary buttons, and iconography related to health data.
- **Secondary (Soft Orange):** Use for critical interactions, alerts, and playfulness.
- **Surface (Warm White):** A slightly off-white background reduces eye strain and feels more natural than pure digital white.
- **Text (Dark Charcoal):** High-contrast but softer than pure black, ensuring excellent readability for long-form health guides.

## Typography

The design system utilizes **Plus Jakarta Sans** across all levels. This font family provides the perfect balance of geometric precision and "friendly" terminals (the slightly rounded ends of letters), which aligns with the approachable brand personality.

Headlines should use a heavier weight (`600` or `700`) to establish a clear hierarchy and project authority. Body text is set with generous line heights to ensure that medical information is easy to digest. Use `headline-xl` only for landing page hero sections; for standard health articles, start with `headline-lg`.

## Layout & Spacing

This design system follows a **Fixed Grid** model for desktop to ensure optimal reading widths for medical content, while transitioning to a **Fluid** model for mobile devices.

- **Scale:** All spacing is based on an 8px baseline grid (8, 16, 24, 32, 40, 48, 64).
- **Desktop:** A 12-column grid with 24px gutters. Content should be centered within a 1200px container to prevent long line lengths that hinder readability.
- **Mobile:** A 4-column fluid grid with 16px side margins.
- **Vertical Rhythm:** Use larger spacing (64px+) between major content sections to maintain a clean, uncluttered "minimalist" feel.

## Elevation & Depth

Hierarchy is achieved through **Ambient Shadows** and **Tonal Layering**. We avoid heavy, dark shadows in favor of soft, diffused blurs that feel like natural light hitting a physical card.

- **Level 0 (Background):** #F9F9F9. The base canvas.
- **Level 1 (Cards/Containers):** #FFFFFF. Pure white surfaces that "pop" off the background.
- **Shadow Style:** Use a very low-opacity blue tint in shadows (`rgba(74, 144, 226, 0.08)`) rather than pure grey. This keeps the depth feeling clean and integrated with the primary brand color.
- **Depth:** Interactive elements (like cards) should use a subtle hover state elevation, increasing the shadow blur from 8px to 16px to indicate "tappability."

## Shapes

The shape language is characterized by **generous rounding**. In this design system, "Sharp" is non-existent.

- **Standard Radius:** 12px (0.75rem) is the default for buttons, input fields, and small cards.
- **Large Radius:** 24px (1.5rem) is reserved for large content containers and featured imagery.
- **Photography:** All dog photography must have rounded corners to match the UI components. Avoid "floating" images without containers; instead, frame them in Level 1 white cards with the standard 12px radius.

## Components

### Buttons

Primary buttons use the Gentle Blue background with white text and a 12px corner radius. Secondary buttons should use a Gentle Blue outline with a transparent background. The "Soft Orange" is reserved for high-priority conversion points like "Emergency Contact" or "Book Appointment."

### Cards

Cards are the primary vehicle for health check-up guides. They must have a white background, the standard 12px radius, and a subtle ambient shadow. Headlines within cards should be `headline-md`.

### Input Fields

Forms should feel inviting. Use a 12px radius and a 2px border in a light grey-blue. When focused, the border should transition to the Primary Gentle Blue. Labels should always be visible above the field using `label-md`.

### Chips & Tags

Used for dog breeds or health categories. These should be semi-pill-shaped (using `rounded-xl`) with a light tint of the primary or secondary color (10% opacity) and dark text.

### Progress Indicators

For multi-step check-up guides, use a thick, rounded progress bar in Gentle Blue. This provides the user with a sense of accomplishment and clarity.

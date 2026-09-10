# Premium Engineering Company Website

## Overview
Build a complete multi-page product-company website with a luxury industrial editorial aesthetic. The structure will take broad corporate-navigation cues from the supplied reference only; the visual system, layouts, components, and content treatment will be original.

Because no company identity or factual copy was supplied, the first version will use clearly replaceable placeholder branding, product names, industries, projects, and descriptive copy without presenting fabricated metrics, certifications, locations, clients, or claims as facts.

## Pages and navigation
- **Home** — all eight requested editorial sections, with products as the main visual focus.
- **About** — company-story framework, principles, and image-led editorial content using placeholders.
- **Products** — large horizontal product showcases sourced from a dedicated data file.
- **Industries** — cinematic full-width industry panels sourced from a dedicated data file.
- **Capabilities** — numbered engineering, manufacturing, quality, and customization sections.
- **Projects** — varied editorial case-study layouts sourced from a dedicated data file.
- **Contact** — premium inquiry form and placeholder contact details clearly marked for replacement.
- Shared desktop and mobile navigation, active states, and a minimal footer.

## Homepage composition
1. **Hero** — transparent navigation over an asymmetric split composition; oversized “Precision That Moves Industry.” headline, one product CTA, technical index labels, and a full-height manufacturing image extending beyond the content grid.
2. **01 / About** — oversized editorial statement paired with architectural product imagery.
3. **02 / Products** — large horizontal image-led rows, restrained metadata, arrow motion, and image zoom on interaction.
4. **03 / Industries** — full-width cinematic panels with concise overlay titles.
5. **04 / Capabilities** — technical editorial list with oversized 01–04 numbering.
6. **05 / Quality** — deep charcoal statement band with technical imagery and linework.
7. **06 / Projects** — asymmetric case-study composition with intentionally varied image scales.
8. **07 / Global Presence** — restrained abstract world/reach visual without invented locations or counts.
9. **08 / Contact CTA** — large “Let’s build what comes next.” closing statement and conversation link.

## Visual system
- Warm ivory surfaces, deep charcoal typography, and one dark bronze accent.
- Oversized editorial display type paired with a precise neutral sans-serif; font files loaded through the document head.
- Thin technical grid lines, square or subtly softened corners, restrained dividers, strong whitespace, and asymmetric columns.
- No gradients, glass effects, oversized shadows, excessive cards, or generic blue styling.
- Semantic color, typography, spacing, border, and motion tokens centralized in the global design system.
- Generate a cohesive set of original cinematic industrial/product images for the hero, products, industries, quality, and projects; no remote stock placeholders.

## Motion and interaction
- Add Framer Motion for selective text and image reveals, section fade-up, restrained parallax, route transitions, product image scaling, and arrow movement.
- Header changes from transparent to an ivory surface with subtle blur after scrolling.
- Respect reduced-motion settings and avoid animation on every element.
- Mobile navigation opens as a deliberate editorial overlay rather than a compressed desktop menu.

## Reusable structure
- Shared header, footer, page-intro, section label, animated reveal, image reveal, product showcase, industry panel, project feature, and CTA components.
- Separate typed data modules for products, industries, and projects.
- Route-specific titles, descriptions, Open Graph metadata, and a single H1 per page.

## Responsive and quality checks
- Preserve asymmetric editorial rhythm on tablet and mobile through reordered image/text compositions, horizontal scrolling where appropriate, and stable image ratios—not a generic stack of cards.
- Check the complete site at desktop and mobile widths for text fitting, navigation behavior, image framing, interactions, and reduced motion.
- Verify every navigation destination, the contact form’s client-side behavior, route transitions, metadata, and production compilation.

## Technical details
- Keep the project’s existing React 19, TypeScript, Vite, Tailwind CSS v4, and TanStack Start routing foundation.
- Add Framer Motion as requested.
- Use semantic Tailwind tokens and reusable React components; do not hardcode visual colors in page markup.
- Build each major navigation destination as its own route rather than in-page hash links.
- The contact form will be presentation-only unless persistent submissions or email delivery are requested later.

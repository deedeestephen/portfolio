---
name: Synthetic Intelligence Portfolio
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#d1bcff'
  on-secondary: '#3c0090'
  secondary-container: '#7000ff'
  on-secondary-container: '#ddcdff'
  tertiary: '#d6ffeb'
  on-tertiary: '#003828'
  tertiary-container: '#00f6bb'
  on-tertiary-container: '#006c50'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d1bcff'
  on-secondary-fixed: '#23005b'
  on-secondary-fixed-variant: '#5700c9'
  tertiary-fixed: '#36ffc4'
  tertiary-fixed-dim: '#00e1ab'
  on-tertiary-fixed: '#002116'
  on-tertiary-fixed-variant: '#00513c'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  max-width: 1280px
---

## Brand & Style

This design system is engineered for a high-performance developer portfolio, blending the precision of an IDE with the cinematic quality of high-end AI interfaces. The target audience is technical recruiters and engineering managers who value both clean code and sophisticated execution.

The style is a fusion of **Glassmorphism** and **Corporate Modern**, utilizing deep layers and glowing accents to create a sense of infinite depth. The UI should evoke a "command center" feeling—intelligent, responsive, and premium. Every interaction must feel intentional, using subtle blurs and high-contrast typography to guide the user through a narrative of technical mastery.

## Colors

The palette is anchored by a "Void" background (`#0A0A0F`), a deep, slightly cool black that provides the canvas for high-energy accents. 

- **Primary (Electric Cyan):** Used for critical actions, terminal cursors, and active states. It represents the "pulse" of the system.
- **Secondary (Proton Purple):** Used for depth, gradients, and subtle secondary highlights. It adds a premium, sophisticated layer to the futuristic theme.
- **Tertiary (Neural Teal):** Reserved for success states, code syntax highlighting, and "system-ready" indicators.
- **Accents:** Neon Blue is utilized for glowing borders and data visualization to maintain high legibility against the dark background.

## Typography

Typography balances the approachable clarity of **Inter** with the technical rigor of **JetBrains Mono**. 

- **Inter** handles all major UI roles and prose, providing a humanistic touch to a tech-heavy aesthetic. Use tight letter-spacing on display headings to create a dense, "engineered" look.
- **JetBrains Mono** is the functional workhorse. It is used for all "metadata"—labels, skill tags, code snippets, and status indicators. 
- **Scale:** On mobile, display sizes are reduced significantly to ensure readability while maintaining the high-impact, bold character of the brand.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to mimic a professional dashboard, transitioning to a fluid stack on mobile. 

- **Grid:** Use a 12-column grid for desktop with wide margins to create a "contained" feel. 
- **Rhythm:** Spacing is strictly based on a 4px baseline. Use 32px or 48px gaps between major sections to maintain the airy, premium feel of the glass cards.
- **Structure:** Content should be centered within a 1280px max-width container. Projects and skills are organized in asymmetrical layouts to suggest a dynamic, non-linear flow of information.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Backdrop Blurs** rather than traditional drop shadows.

- **Surface Tiers:** Background is level 0. Cards are level 1 (semi-transparent white/navy at 5-10% opacity) with a 20px backdrop blur.
- **Luminescence:** Instead of shadows, use "Inner Glows" (1px subtle border with 30% opacity of the primary color) to define edges. 
- **Interaction:** On hover, cards should increase in opacity and the border intensity should rise, simulating a "powering up" effect.

## Shapes

The design system uses a **Rounded** shape language to soften the futuristic "sci-fi" edges, making the portfolio feel modern and approachable rather than cold.

- **Primary Containers:** 0.5rem (8px) radius for standard cards and input fields.
- **Interactive Elements:** Buttons and badges use larger 1rem (16px) or full pill shapes to distinguish them from structural content.
- **Accents:** Use sharp 90-degree angles only for decorative "code-brackets" or terminal-style UI accents to maintain the technical vibe.

## Components

- **Glassy Navbar:** Fixed at the top with a heavy backdrop blur (`32px`) and a thin bottom border in Proton Purple (`#7000FF`) at 20% opacity.
- **Glowing Skill Badges:** Pill-shaped containers using JetBrains Mono. They feature a faint background tint of the skill category (e.g., Cyan for Frontend, Purple for Backend) and a matching 1px outer glow.
- **Premium Project Cards:** Large glass surfaces with image backgrounds visible through a `0.8` opacity dark overlay. On hover, the overlay clears, and the title shifts upward.
- **Input Fields:** Dark, recessed backgrounds with primary-colored cursors and glowing focus states.
- **Buttons:** Primary buttons use a linear gradient (Cyan to Blue) with a subtle "drop-shadow" that is actually a blurred version of the button itself (the "neon glow").
- **Terminal Widget:** A specific component for the "About" section that mimics a CLI, using JetBrains Mono and a blinking primary-colored cursor.
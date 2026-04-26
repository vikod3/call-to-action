# Community CTA — Single-Page Subscription Hero Section

Build a single-page call-to-action community subscription section with a fullscreen background image, glassmorphic card container, and staggered entrance animations. Use React + Vite + Tailwind CSS + TypeScript with Framer Motion.

---

## Background Image

- Full-bleed `div` with `bg-cover bg-center bg-no-repeat`, positioned `absolute inset-0 z-0`
- Source URL: `https://i.postimg.cc/tTKGQN3z/Gemini-Generated-Image-locml5locml5locm-(1).png`
- White overlay layer: `absolute inset-0 bg-white/10` stacked on top for subtle texture

## Fonts

- Import from Google Fonts: Inter weights 400/500/600/700/800
- CSS: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`
- Tailwind `@theme` variable: `--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif`
- Entire component uses `font-sans` (Inter everywhere — no display font pairing)

## Color Theme (light, inline hex values)

| Element            | Value                                  |
| ------------------ | -------------------------------------- |
| Title text         | `#1a1f3d` (deep navy)                  |
| Body text          | `#4b5563` (muted gray, opacity 0.8)   |
| Input placeholder  | `neutral-400` (Tailwind)               |
| Button bg          | `#ffffff` (white)                      |
| Button text        | `#1a1f3d`                              |
| Button hover       | `neutral-50` (Tailwind)               |
| Card outer bg      | transparent (inherits background image)|
| Focus ring         | `[ #1a1f3d ]/5` (faint navy glow)     |

## Layout Container

- `relative w-full max-w-7xl mx-auto rounded-[2rem] min-h-[600px]`
- `flex items-center justify-start py-20 px-8 sm:px-16 overflow-hidden font-sans shadow-2xl`
- Inner content wrapper: `relative z-10 max-w-[700px] w-full`
- Background image div: `absolute inset-0 z-0` with overlay

## Title Section

- Tag: `<h2>` with `id="cta-title"`
- Text: "Subscribe to Our Community"
- Classes: `text-[42px] sm:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.1] mb-6 text-[#1a1f3d]`
- Wrapped in Framer Motion `motion.div` for entrance animation

## Description

- Tag: `<p>` with `id="cta-description"`
- Text: "Get exclusive access to cutting-edge tech insights, industry trends, and expert advice delivered straight to your inbox. Join our growing community today!"
- Classes: `text-[17px] sm:text-[19px] text-[#4b5563] font-medium leading-[1.6] mb-9 max-w-2xl opacity-80`

## Email Input + CTA Button

- Container: `flex flex-col sm:flex-row gap-3 mb-10`
- **Input**:
  - Tag: `<input>` with `id="cta-email-input"`, `type="email"`
  - Placeholder: "Enter your email here"
  - Classes: `w-full bg-white border-0 rounded-full px-8 py-4 text-[#1a1f3d] placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-[#1a1f3d]/5 transition-all text-[16px] shadow-sm shadow-black/5`
- **Button**:
  - Tag: `<button>` with `id="cta-join-button"`
  - Text: "Join Now"
  - Classes: `bg-white text-[#1a1f3d] hover:bg-neutral-50 active:scale-95 transition-all rounded-full px-10 py-4 font-bold text-[16px] whitespace-nowrap shadow-sm shadow-black/5`

## Social Proof Section

- Container: `flex items-center gap-4`
- **Avatars**:
  - Container: `flex -space-x-3`, `id="cta-avatars"`
  - 5 avatar images from Unsplash (100×100 crop, auto format, quality 80):
    1. `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80`
    2. `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80`
    3. `https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80`
    4. `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80`
    5. `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80`
  - Each: `w-10 h-10 rounded-full object-cover shadow-sm`, `referrerPolicy="no-referrer"`, alt text "Member N"
- **Member count**: `<span>` with `id="cta-social-proof"`, text "5,000+ happy members"
  - Classes: `text-[#1a1f3d] font-bold text-[15px] tracking-tight`

## Animations (Framer Motion)

All elements use `motion.div` wrappers with shared easing: `[0.16, 1, 0.3, 1]`

| Element          | From               | To                 | Duration | Delay | Direction |
| ---------------- | ------------------ | ------------------ | -------- | ----- | --------- |
| Title            | `opacity: 0, y: 15` | `opacity: 1, y: 0` | 0.7s     | 0s    | fade-rise |
| Description      | `opacity: 0, y: 15` | `opacity: 1, y: 0` | 0.7s     | 0.1s  | fade-rise |
| Input + Button   | `opacity: 0, y: 15` | `opacity: 1, y: 0` | 0.7s     | 0.2s  | fade-rise |
| Social proof     | `opacity: 0, x: -10`| `opacity: 1, x: 0` | 0.7s     | 0.3s  | slide-right |

## App Wrapper

- Outer `<main>`: `min-h-screen bg-white flex items-center justify-center p-4 sm:p-8 md:p-12`
- Renders `<CommunityCTA />` centered on screen

## Tech Stack

- React 19.0.0, Vite 6.2.0, TypeScript 5.8.2
- Tailwind CSS 4.1.14 with `@tailwindcss/vite` plugin (no `tailwind.config.js` — uses `@theme` directive in CSS)
- Framer Motion 12.23.24 (`motion/react` import)
- Lucide React 0.546.0 (available for icons if needed)

## Constraints

- No `shadcn/ui` — this project uses hand-rolled Tailwind components
- No dark mode — light theme only
- No decorative blobs or radial gradients — the background image provides all visual depth
- All animations handled by Framer Motion, not CSS keyframes
- Responsive: mobile-first with `sm:` breakpoint at 640px
- Accessible: semantic HTML with proper `id` attributes for form label association

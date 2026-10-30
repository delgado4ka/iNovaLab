# iNovaLab: project notes

See @AGENTS.md for Astro dev-server and docs pointers, and README.md for structure.

## Conventions
- Static single-page landing. SEO matters: sections are `.astro` (zero JS) by default.
- Use React only for components needing browser interactivity; put them in `src/components/interactive/` and hydrate with `client:visible` (or `client:load` for above-the-fold, e.g. mobile nav).
- All user-facing text and data lives in `src/data/*.ts` with exported types; components must not hardcode content.
- shadcn components in `src/components/ui/` are CLI-generated; prefer theming via CSS variables in `src/styles/global.css` over editing them.
- Import alias: `@/` → `src/`.

## Design system
- Brand colours (logo kit): navy `#0B1F33`, gold `#F5A623`, pearl `#F4F6F9`. Tokens live in `src/styles/global.css`; light + dark themes.
- `primary` = gold with navy text. Never use gold as text on light backgrounds (contrast ~2:1); use it for fills, dots, rules.
- "Band" colours (`bg-band`, `text-band-foreground`, `text-band-muted`, `border-band-border`) = the navy blocks (header, hero, contacts, footer), navy in both themes.
- Fonts: Geologica for everything; Literata (`font-serif`) only for the founder's personal voice (her name, quotes, interview answers).
- Signature element: the dotted trajectory rising to a gold dot (from the logo's i). Use it sparingly.
- Layout helpers: `page-container`, `section-y` (custom utilities in global.css). Buttons: extra `xl` size (48px touch target) and `band` variant in `ui/button.tsx`.

## Astro + shadcn gotchas
- React components used in `.astro` files take `className`, not `class`.
- `asChild` does NOT work when the child is written in an `.astro` file (Astro passes children as pre-rendered HTML). For button-styled links in `.astro`, use `<a class={cn(buttonVariants({ size: "xl" }))}>`. Always wrap in `cn()`; `buttonVariants` alone doesn't resolve class conflicts.
- `asChild` works fine inside React islands (`components/interactive/*.tsx`).

## Verify before finishing
`npm run check` and `npm run build` must both pass.

## Open decisions
- Hosting: not chosen yet (repo is private, so GitHub Pages needs a paid plan).
- Site language and real content: placeholders in `src/data/site.ts`.

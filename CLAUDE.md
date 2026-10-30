# iNovaLab: project notes

See @AGENTS.md for Astro dev-server and docs pointers, and README.md for structure.

## Conventions
- Static single-page landing. SEO matters: sections are `.astro` (zero JS) by default.
- Use React only for components needing browser interactivity; put them in `src/components/interactive/` and hydrate with `client:visible` (or `client:load` for above-the-fold, e.g. mobile nav).
- All user-facing text and data lives in `src/data/*.ts` with exported types; components must not hardcode content.
- shadcn components in `src/components/ui/` are CLI-generated; prefer theming via CSS variables in `src/styles/global.css` over editing them.
- Import alias: `@/` → `src/`.

## Verify before finishing
`npm run check` and `npm run build` must both pass.

## Open decisions
- Hosting: not chosen yet (repo is private, so GitHub Pages needs a paid plan).
- Site language and real content: placeholders in `src/data/site.ts`.

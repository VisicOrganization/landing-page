# Visic Landing Page

Marketing site for Visic, implemented from the [Visic UI/UX Figma file](https://www.figma.com/design/44HO0xyRVJuPxGsGLQkdZE/Visic-UI-UX).

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Figma MCP for design-to-code reference

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build locally
npm run lint
npm test
```

## Project structure

- `app/` — layout, page composition, global styles
- `components/sections/` — one component per Figma section
- `components/layout/` — header, shared layout primitives
- `content/` — copy and structured data
- `lib/constants/` — colors, images, layout constants

## Assets

Raster and vector exports live in [`public/images/`](public/images/). Paths are defined in [`lib/constants/images.ts`](lib/constants/images.ts).

## Deployment

Deployment is not configured. Run `npm run build` and `npm run start` to verify production output locally.

# Jude Alkhudiri — Portfolio

A dark, editorial Next.js portfolio for Jude Alkhudiri: designer and illustrator.

## Run locally

```bash
pnpm install
pnpm dev
```

Build the production version with `pnpm build`.

## Publish on GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
3. The included workflow publishes the site at `https://<your-github-user>.github.io/<repository-name>/` after each push to `main`.

## Soris artwork

The current Soris visuals are crafted CSS placeholders, included so the site is complete without external image dependencies. To use the original project images, place them in `public/soris/` and replace the `SorisArt` components in `components/home.tsx` and `app/projects/soris/page.tsx` with `next/image` components pointing to those files.

## Stack

Next.js · TypeScript · Tailwind CSS · Framer Motion · GSAP · Lenis

# Omukorima website

Documentation website for Omukorima (/ˌoʊmʊkəˈriːmə/), built with Astro and Starlight.

## Development

Node.js 24 or later and pnpm are required. CI uses the latest Node.js 24 LTS release; newer releases such as Node.js 26 are also supported.

```sh
pnpm install
pnpm dev
```

The development server is available at `http://localhost:4321/`. Production builds use the `/website/` base path required by GitHub Pages.

Run the production checks and build with:

```sh
pnpm build
```

## Content

Documentation lives in `src/content/docs`. Japanese is served at the site root and English under `/en/`.

Omukorima code fences use the `omukorima` language identifier. The initial TextMate grammar is in `src/grammars/omukorima.tmLanguage.json` and can be expanded as the language syntax is defined.

Inline and display math use standard dollar-delimited syntax through KaTeX.

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by `.github/workflows/deploy.yml`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

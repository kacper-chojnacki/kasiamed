# KASIA MED — website

Business website for **KASIA MED** (Bukowiec, Poland): medical transport, medical care and event medical cover.
Site content is in Polish; code and docs are in English.

- **Stack:** [Astro](https://astro.build) 7 (static output, no client framework), Tailwind CSS 4, TypeScript
- **Hosting:** GitHub Pages, deployed by GitHub Actions on every push to `main`
- **Contact form:** [Web3Forms](https://web3forms.com) delivers submissions straight to an email inbox, no backend needed
- **Lighthouse:** Performance 98–100, Accessibility, Best Practices and SEO all 100

## Security and privacy by design

- Fully static: no server, database, admin panel or CMS to attack.
- Strict Content Security Policy (hash-based `script-src`/`style-src`, `default-src 'self'`). Only the
  Web3Forms API is allowed as an external endpoint.
- No cookies, analytics, trackers, third-party fonts or embeds, so **no cookie banner** is required.
- No secrets in the repository. The Web3Forms access key is public by design: it can only deliver mail to its owner.
- Dependabot keeps dependencies and GitHub Actions up to date.

## Local development

Requires Node.js 22.12+.

```bash
npm install
npm run dev       # http://localhost:4321/kasiamed/
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build (CSP is only active here)
```

## Where to change things

| What | File |
|---|---|
| Company details: phone, email, address, NIP, REGON, hours, service area | `src/data/company.ts` |
| Services, audiences, steps, values, FAQ | `src/data/company.ts` |
| Domain, base path, search indexing, Web3Forms key | `site.config.mjs` |
| Page layout and sections | `src/pages/index.astro` |
| Privacy policy | `src/pages/polityka-prywatnosci.astro` |
| Colours and typography | `src/styles/global.css` |

Any company field set to `null` renders as a visible `[DO UZUPEŁNIENIA: …]` placeholder and is left out of the
structured data. Fill it in and the placeholder disappears.

### Photos

Drop images into `src/assets/photos/` using these file names (`.jpg`, `.png` or `.webp`). They are optimised
to responsive WebP automatically at build time:

| File name | Shows |
|---|---|
| `ambulans.*` | Ambulance exterior (large tile, landscape ~16:10) |
| `wnetrze.*` | Ambulance interior |
| `zespol.*` | Team or event coverage |

Without photos, the preview build shows dashed placeholders. With `indexable: true`, an empty gallery is hidden.
Blur number plates and anyone who has not agreed to be shown. Label AI-generated images as illustrative.

## Contact form setup

1. Go to <https://web3forms.com>, enter the inbox that should receive enquiries and copy the access key.
2. Paste it into `web3formsAccessKey` in `site.config.mjs`, then commit and push.

Until a key is set, the form runs in preview mode: it validates input and shows an informational message
instead of sending. Replies from the inbox go straight to the customer, because their email is set as Reply-To.

## Deployment (GitHub Pages)

One-time setup:

1. **Settings → General → Danger Zone → Change visibility → Public.** Free GitHub Pages requires a public repo.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Push to `main` (or run the workflow manually). The site is published at
   `https://kacper-chojnacki.github.io/kasiamed/`.

While on the github.io address the site is marked `noindex`, so search engines do not index the temporary URL.

## Moving to the custom domain (kasiamed.pl)

1. Register the domain and add these DNS records at the registrar:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` record for `www`: `kacper-chojnacki.github.io`
2. In `site.config.mjs` set `site: 'https://kasiamed.pl'`, `base: '/'` and `indexable: true`.
3. Create `public/CNAME` containing `kasiamed.pl`.
4. In **Settings → Pages**, enter `kasiamed.pl` as the custom domain and enable **Enforce HTTPS**.
5. Optionally verify the domain under GitHub account settings → Pages, to prevent domain takeover.
6. Submit `https://kasiamed.pl/sitemap-index.xml` in Google Search Console and link the site from the
   Google Business Profile.

## Content still to be provided

- Full legal company name, NIP, REGON
- Email address shown on the site (and used for the Web3Forms key)
- Office hours
- Service area
- Company history, experience, team qualifications, fleet
- Whether transport is provided under an NFZ contract (FAQ)
- Photos (see above)
- Confirmation of the service lists in `src/data/company.ts`

The privacy policy is a template. Have it reviewed once the company details are final.

## Project structure

```
├── .github/              GitHub Actions deploy workflow, Dependabot
├── public/               Static files: favicons, logo.svg, Open Graph image
├── src/
│   ├── assets/photos/    Optional photos, optimised at build time
│   ├── components/       Header, footer, logo, emblem, contact form, …
│   ├── data/company.ts   All company details and copy
│   ├── layouts/          Base layout: SEO meta, JSON-LD, header/footer
│   ├── lib/              Small helpers (base URL, logo geometry)
│   ├── pages/            Home, privacy policy, thank-you page, 404, robots.txt
│   └── styles/           Tailwind theme and global styles
├── astro.config.mjs      Astro config, including the Content Security Policy
└── site.config.mjs       Deployment settings (domain, base path, indexing, form key)
```

© KASIA MED. All rights reserved. Logo and brand assets may not be reused without permission.

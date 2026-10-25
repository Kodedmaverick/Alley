# The Alley Medical Clinic — website design

React + Vite + Tailwind CSS v4 build of the Alley Medical Clinic design concept, with Radix UI
(dialogs, accordion), Lucide icons and locally bundled Inter Variable.

## Run it

```bash
npm install
npm run dev      # development server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

Requires Node 18+.

## Structure

```
src/
  App.jsx                   page composition
  main.jsx                  entry (font + styles)
  styles/index.css          design styles (Tailwind import + tokens + page CSS)
  data/                     copy, services, FAQs, photo URLs
  lib/                      cn() helper, asset URL helper
  components/
    Header, Footer, BookingDialog, ContactDialog
    ui/Button.jsx           shadcn/ui-style button (CVA)
    sections/               Hero, CareBand, Services, About, Visit, Faq, Closing
public/logo.png             supplied logo
```

## Notes

- **Typography:** the stack is `"Airbnb Cereal VF", Circular, "Inter Variable", Inter, system-ui, sans-serif`.
  Airbnb Cereal and Circular are commercial fonts and are **not included**; Inter Variable is bundled via
  `@fontsource-variable/inter` and is what renders.
- **Photos:** loaded from Unsplash URLs (needs internet). See `PHOTO-CREDITS.md`.
- **Booking:** every booking button opens a preview dialog; no booking service is connected and no
  personal information is collected. Address, hours and contact details are placeholders to be confirmed.
- Reduced-motion preferences are respected; dialogs and accordion are keyboard accessible.

## Deploy on Dokploy (Nixpacks)

`nixpacks.toml` and `Caddyfile` are included, so no extra configuration is needed.

1. In Dokploy create an **Application** and connect the Git repo (or upload this project).
2. Set **Build Type** to **Nixpacks** (leave the publish directory empty).
3. Under **Domains**, add your domain, set **Container Port** to `80`, and enable HTTPS.
4. Deploy.

The build runs `npm ci` and `npm run build`; Caddy then serves `dist/` on `$PORT` (default `80`) with
gzip/zstd, long-lived caching for hashed assets, and fallback to `index.html`.
No environment variables are required.

To test the same setup locally (requires Nixpacks + Docker): `nixpacks build . --name alley-clinic`.

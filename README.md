# Happy Birthday ❤️

An elegant, mobile-first digital scrapbook built with React, Vite, TailwindCSS, and Framer Motion. Fully static — no backend, no database, no APIs.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Deploy

Works out of the box on **Vercel**, **Netlify**, or **Cloudflare Pages**. Just point them at this repo — build command `npm run build`, output directory `dist`.

## Customize

All content lives in `src/data/*.json`:

- `chapters.json` — story chapters
- `gallery.json` — scrapbook images
- `playlist.json` — songs (supports Spotify embeds)
- `letters.json` — hidden letters
- `memories.json` — random memory pool

Edit those files — the UI updates automatically.

## File structure

```
src/
  App.tsx
  main.tsx
  styles.css
  components/
    Chapter.tsx
    FinalSurprise.tsx
    FloatingMenu.tsx
    Gallery.tsx
    Letters.tsx
    Playlist.tsx
    RandomMemory.tsx
  data/
    chapters.json
    gallery.json
    letters.json
    memories.json
    playlist.json
```

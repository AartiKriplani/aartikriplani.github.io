# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static HTML website for **Dub&Dal** — a soundsystem/festival event series founded by Aarti Kriplani. Hosted on GitHub Pages at `aartikriplani.github.io` with a custom domain `dubndal.org`. No build system, no frameworks, no package manager — pure HTML/CSS.

## Deployment

Changes merged to `main` deploy automatically via GitHub Pages. The `festival` branch is for the current festival edition (Berlin, 28–30 May 2026).

To preview locally, open any `.html` file directly in a browser or use a simple HTTP server:
```
python3 -m http.server 8000
```

## Pages

- `index.html` — Main festival landing page (lineup, artists, workshops, venue, tickets)
- `about.html` — About Dub&Dal and the team (Aarti + Tobias)
- `archive.html` — Grid of past gatherings with venue/date/poster images
- `currycuriosity.html` — Redirect to a Google Form

## Design system

All CSS is written inline within each `.html` file. Every page declares the same CSS custom properties (tokens) in `:root`:

| Token | Value | Purpose |
|---|---|---|
| `--bg` | `#0c0a07` | Page background |
| `--s1` / `--s2` | `#111009` / `#181510` | Surface layers |
| `--gold` / `--gold2` | `#d4920e` / `#f0b030` | Primary accent / hover |
| `--cream` | `#f0e6cc` | Body text |
| `--dim` | `#7c6e56` | Muted text |
| `--bord` / `--bord2` | gold at 16% / 30% opacity | Borders |
| `--nav` | `52px` | Navbar height |

Font: **Alegreya Sans** (Google Fonts) — weights 300, 400, 500, 700, 900; used in italic for headings and the logo.

The visual style uses bold italic typography, dark backgrounds, gold accents, and subtle hover transitions. Keep new additions consistent with this aesthetic.

## Assets

Images live in `images/` (team photos, logo) and `images/posters/` (per-event poster images used in the archive grid).

## Key external links

- Ticket shop: `https://dubndal.weticket.io/dub-dal-festival/shop`
- Mailing list signup: Google Forms link in `about.html` and `index.html`
- Refuge Worldwide interview: `https://refugeworldwide.com/news/dub-and-dal`

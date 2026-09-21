# Myles Call Pickleball — notes for Claude

Coaching website for Myles, a pickleball coach. People learn about him, see sessions and prices, and (later) book + pay. Most visitors arrive from a text message on a phone, so design **mobile-first**.

## Stack
- Next.js (App Router) + Tailwind CSS v4 + TypeScript. No database, no backend.
- **All editable content lives in `content.ts`** (text, sessions, prices, testimonials). Keep it that way so Myles can edit one file.
- Page: `app/page.tsx`. Layout/metadata: `app/layout.tsx`. Styles: `app/globals.css`.

## Run locally
```
npm install
npm run dev      # http://localhost:3000
npm run build    # run before every push — if it fails, Vercel's deploy fails too
```

## Deploys
- Hosted on Vercel (project `myles-pickleball`, in Ryan's account). **Every push to `main` deploys to production** automatically; other branches get preview URLs.
- `vercel.json` pins the framework to Next.js — keep it.
- Domain: **mylescall.com** (DNS in Cloudflare, managed by Ryan).
- Myles does not have Vercel or Cloudflare access and doesn't need it.

## Where settings live
- Content: `content.ts`
- Env vars: none yet. Real values go in Vercel → Project → Settings → Environment Variables; only placeholder names go in `.env.example`.

## Planned next
- Booking + payment: embed Cal.com (free) with its Stripe app. Myles owns the Cal.com account; the Stripe account belongs to Ryan (Myles's dad) and Ryan connects it. Until then the Book section says "coming soon".
- Replace every `PLACEHOLDER` in `content.ts` with real info.

## Rules (from Ryan — always follow)
1. Spend nothing. Free tiers only; if something costs money, stop and tell Myles to ask his dad.
2. **This repo is PUBLIC.** Never commit secrets/API keys, and never commit private info (home address, personal phone).
3. Payments stay in TEST MODE. Never ask Myles for Stripe keys or bank info; Ryan handles Stripe and going live.
4. Don't change repo settings (incl. visibility), DNS, or the domain — Ryan does those.
5. No database unless truly needed, and ask first.
6. Nothing from Ryan's real estate business (RealtyZoom). This project is separate.

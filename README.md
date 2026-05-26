<div align="center">

```text
   ██████╗ ██╗  ██╗  ██████╗  ██████╗ ████████╗██████╗ ██╗███████╗ ████████╗      █████╗  ██████╗
  ██╔════╝ ██║  ██║ ██╔══██╗ ██╔════╝ ╚══██╔══╝██╔══██╗██║██╔════╝ ╚══██╔══╝     ██╔══██╗ ╚═██╔═╝
██║  ███╗███████║ ██║  ██║ ╚█████╗     ██║   ██║  ██║██║█████╗      ██║        ███████║   ██║
██║   ██║██╔══██║ ██║  ██║  ╚═══██╗    ██║   ██║  ██║██║██╔═══╝     ██║        ██╔══██║   ██║
  ╚██████╔╝██║  ██║ ██████╔╝ ██████╔╝    ██║   ██║  ╚████║███████╗    ██║        ██║  ██║ ██████╗
  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝   ╚═════╝    ╚═╝   ╚═╝   ╚═══╝╚══════╝    ╚═╝        ╚═╝  ╚═╝ ╚═════╝
```

Autonomous phishing and impersonation detection for security, legal, and brand<br>
protection teams.

GhostNet AI turns live web intelligence into takedown-ready evidence in under
two minutes. Given a brand name, official domain, and social handles, the
system discovers suspicious domains, phishing pages, and spoofed profiles,
captures timestamped evidence, and drafts a polished report a team can act on
immediately.

</div>

## What GhostNet AI Does

GhostNet AI is built to catch brand impersonation before it becomes a customer
incident. It combines Bright Data's live web infrastructure with Claude-based
analysis to automate the full threat triage loop:

- Searches Google and Bing for high-signal brand abuse queries such as login,
  support, and official site variants.
- Unlocks suspicious pages and social surfaces to expose typosquats,
  homoglyph lookalikes, and cloned profiles.
- Captures full-page screenshots and page snapshots as evidence.
- Scores each threat by type, confidence, and urgency.
- Generates cease-and-desist ready reports with abuse contacts and supporting
  artifacts.

The result is a live threat dashboard that compresses what used to take days of
manual searching into a fast, repeatable workflow.

## Why It Matters

Modern impersonation campaigns move quickly and hide in plain sight. GhostNet AI
is designed for teams that need an evidence-first response, not a loose list of
URLs.

- Security teams get faster detection of phishing and fraud attempts.
- Brand protection teams get structured evidence instead of raw search noise.
- Legal teams get report drafts that are already aligned to takedown workflows.
- Compliance teams get a traceable chain of custody for screenshots, HTML, and
  timestamps.

## Detection Workflow

GhostNet AI follows a deliberate, premium-grade triage pipeline:

1. Input a brand identity: brand name, official domain, and known social
   handles.
2. Run targeted SERP searches to surface suspicious results and domain
   anomalies.
3. Use Web Unlocker to inspect pages and profile surfaces that resist normal
   retrieval.
4. Capture evidence through the Scraping Browser with timestamped screenshots.
5. Send the normalized evidence package to Claude for threat scoring and
   report drafting.
6. Persist the findings in the dashboard so the next action is obvious.

## Core Capabilities

- Real-time discovery across search engines and public web surfaces.
- Typosquat detection using character swaps, added words, and homoglyphs.
- Phishing and spoofed-profile analysis with structured scoring.
- Screenshot-backed evidence bundles for legal review.
- Auto-drafted takedown notices and abuse-contact hints.
- A dashboard built for live monitoring, not static reporting.

## Tech Stack

- Next.js 16 with React 19 and TypeScript.
- Bright Data SERP API, Web Unlocker, and Scraping Browser for web access.
- Claude for threat classification, urgency scoring, and report generation.
- Supabase for persistence, storage, and operational metadata.

## Project Structure

- `src/app` - application shell, global styling, and the landing/dashboard UI.
- `docs/architecture.md` - system design and data-flow overview.
- `docs/implementation.md` - pipeline logic, environment variables, and
  operational rules.
- `scripts/env-check.js` - build-time environment validation.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

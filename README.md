# India's Complete Fintech Stack — Builder's Guide

A premium, single-scroll reference guide for founders and operators navigating India's payment ecosystem — built with vanilla HTML/CSS/JS, no frameworks, no build step.

**Live site:** [karthi's GitHub Pages URL here]

---

## What's inside

| Section | Description |
|---------|-------------|
| ⚖️ PG vs PA | The RBI-mandated distinction — tech layer vs licensed fund holder |
| 📦 Reseller Models | 4 proven paths to operate without a PA licence (with step-by-step checklists + links) |
| 🔺 The Pyramid | India's full payment hierarchy — RBI → PA → Gateway → Distributor |
| ⚠️ Grey Zone | Activities that trip regulatory wires + enforcement patterns |
| 👁️ Shadow Zone | Unlicensed PA clone anatomy, legal escrow guide, PSS Act penalties |
| 🏢 Company | Entity type cards (Pvt Ltd vs Public Ltd) + 8-step incorporation timeline |
| 💰 Costs | PG (₹25K–₹2L) vs PA (₹15Cr+) full cost breakdown |
| 📋 RBI Licence | PA licence eligibility + 5-step A–E application process |
| 💸 Payout Account | Nodal · Payout · Virtual accounts + P1–P5 bank setup steps |
| 🔗 Wallet Architecture | How wallets link to payout accounts (flow diagram) |
| ⚡ Bank APIs | IMPS · NEFT · RTGS · UPI Payout API comparison grid |

---

## Features

- **Bilingual** — English / Tamil toggle (all content wrapped in `.en` / `.ta` spans)
- **Left sidebar navigation** — Swiggy/Blinkit style, grouped by chapter, active section highlight
- **Mobile-responsive** — sidebar becomes bottom tab bar on ≤768px
- **Scroll-linked animations** — IntersectionObserver reveals, stagger grids, slide-left timeline
- **External links** — MCA, NPCI, Razorpay, Cashfree, PayU, GST portal, IP India, PhonePe
- **No frameworks** — works via `file://` AND GitHub Pages without any build step

---

## Tech stack

```
index.html       — shell, hero, nav placeholder, footer
css/main.css     — all styles (~600 lines)
js/data.js       — window.SECTIONS + window.CHAPTERS (all content)
js/app.js        — nav build, reveals, canvas particles, scroll UI
```

## Deploy to GitHub Pages

1. Push to a GitHub repository (main branch)
2. Settings → Pages → Deploy from branch → `main` → `/ (root)`
3. Site live at `https://USERNAME.github.io/REPO/`

No Jekyll config needed. The `.nojekyll` file disables Jekyll processing.

---

*Regulatory information based on RBI PSS Act 2007 and PA/PG guidelines 2020. Always consult a licensed CA and legal counsel before proceeding.*

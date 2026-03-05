# 🗺️ Nopik Project Roadmap (120 Days)

**Project:** Nopik — AI Report Assistant, B2B SaaS  
**Current Phase:** Phase 1: "Working Product"  
**Updated:** March 5, 2026  

---

## 📊 Project Overview

| Aspect | Details |
|--------|---------|
| **Project Name** | Nopik (report-automation-mvp) |
| **Type** | B2B SaaS |
| **Current Version** | 0.1.0-alpha |
| **Status** | MVP Development |
| **Tech Stack** | Node.js/TypeScript, PostgreSQL, Redis/BullMQ, Docker |
| **Current Deployment** | GitHub Pages (landing page) |
| **Revenue Target (Day 120)** | $50/day (~$1,500/month) |

---

## 🎯 Strategic Vision

Nopik is an **AI-powered report automation platform** that helps businesses:
- Extract data from multiple sources (Excel, Google Sheets, APIs)
- Transform and aggregate data with AI insights
- Generate beautiful PDF/HTML reports automatically
- Schedule and deliver reports on demand

**Target Customers:** SMBs and mid-market companies using 1C, Bitrix24, Google Workspace  
**Success Metric:** Time-to-first-report < 3 minutes, CAC < $30, LTV/CAC > 3

---

## 📅 Phase Breakdown (120 Days)

### ✅ Phase 1: "Working Product" (Day 1–30)
**Goal:** Deploy functional MVP on staging with core connectors  
**Success Criteria:** All T1–T10 completed, MVP on staging

#### Week 1 (Days 1–7)
- **T1:** Repository skeleton & CI/CD pipeline
  - Create monorepo structure (backend, frontend)
  - GitHub Actions: lint, test, build
  - Docker Compose for local development
  - Acceptance: CI passing, 3 smoke tests green

- **T3:** XLSX connector
  - Extract data from Excel files
  - Detect columns and data types
  - Streaming support for large files
  - Acceptance: Parse 1MB Excel file < 2s, detect all columns

#### Week 2 (Days 8–14)
- **T2:** Google Sheets connector
  - OAuth 2.0 integration with Google API
  - Real-time data sync
  - Support for multiple sheets
  - Acceptance: Connect > 10k rows sheet, refresh < 5s

- **T4:** Transformation engine
  - Aggregate data from multiple sources
  - Pivot, filter, group operations
  - Custom formula support (basic)
  - Acceptance: 90% function coverage, transform 1M rows < 10s

#### Week 3 (Days 15–21)
- **T5:** PDF renderer
  - Convert transformed data to PDF
  - Templating system (header, footer, charts)
  - Support for charts (bar, line, pie)
  - Acceptance: Render 20-page PDF < 5s, file < 5MB

- **T7:** Delivery system
  - Email delivery (SMTP + Resend integration)
  - Webhook delivery
  - Delivery logs and retry logic
  - Acceptance: 99% delivery success rate, < 5s latency

#### Week 4 (Days 22–30)
- **T6:** Scheduling engine
  - Cron-like scheduling (daily, weekly, monthly)
  - BullMQ integration for job queue
  - Timezone awareness
  - Acceptance: Schedule 1k jobs without conflicts, 99% execution rate

- **T8:** CI hardening
  - Increase code coverage to ≥ 80%
  - Add E2E tests (report generation flow)
  - Performance benchmarking
  - Acceptance: 80% coverage, 50+ E2E tests, 70% CI success rate

- **T9:** Staging deployment
  - Deploy to Cloud Run (or Railway)
  - Database: Supabase/Neon (free tier PostgreSQL)
  - Secrets management
  - Monitoring: basic error logging
  - Acceptance: MVP live on staging, handle 100 requests/min

---

### 🎨 Phase 2: "Monetization & Self-Service" (Day 31–60)
**Goal:** Enable payments & self-service onboarding  
**Success Criteria:** First paying customer, runnable onboarding flow

#### T11: Payment integration
- Stripe OR LemonSqueezy setup
- Subscription management
- Webhook handling (payment status)
- Acceptance: Process 10 test payments, handle refunds, manage subscriptions

#### T12: User authentication
- Auth.js or Clerk integration
- Email/password & OAuth (Google, GitHub)
- Session management
- Acceptance: Register & login < 30s, SSO working

#### T13: Multi-tenant architecture
- Organize users into workspaces
- Usage metering (reports generated, storage)
- Data isolation
- Acceptance: Support 100 tenants, isolate data perfectly

#### T14: Onboarding wizard
- 3-step flow: Connect source → Choose template → Generate first report
- Auto-detect source type
- Pre-built report templates
- Acceptance: Complete onboarding in < 3 min, first report PDF generated

#### T15: Customer dashboard
- Report history & status
- Usage metrics (reports/month remaining)
- Account settings
- Acceptance: Load < 2s, show 500+ reports, filter & search

#### Pricing Tiers (Go-Live)
See [docs/PRICING.md](docs/PRICING.md) for full details:
- **Free:** 5 reports/month, XLSX only
- **Starter:** $29/month — 50 reports/month, +Google Sheets, +PDF, daily schedule
- **Pro:** $49/month — Unlimited reports, all formats, any cron, webhooks, priority support

---

### 📈 Phase 3: "Traffic & First Sales" (Day 61–90)
**Goal:** Acquire 10 paying customers, $300–500 MRR  
**Success Criteria:** Measurable traffic, demo videos, testimonials

#### T16: Blog engine
- Static site generation (MDX or Hugo)
- Publishing workflow
- SEO-optimized structure
- Topics: "Automate your reporting," "AI Report Examples," "vs. competitors"

#### T17: Product Hunt launch
- Prep landing page for launch
- Create demo video (3 min)
- Prepare hunter notes
- Target: Front page, 200+ upvotes

#### T18: Free XLSX→PDF converter
- Standalone landing page
- No login required (lead magnet)
- Collect email for nurture sequence
- Acceptance: 500+ users, 100+ email signups/month

#### T19: Analytics integration
- PostHog or Plausible
- Track: signups, feature usage, churn
- Custom events: report generation, payment attempt
- Acceptance: Dashboard with key metrics, 90-day retention visible

#### T20: Social proof
- Collect testimonials (video or text)
- Add to landing page
- Create case studies (2–3)
- Target: 5+ named testimonials with logos

#### Marketing Channels
- **SEO:** 8–10 blog posts targeting "report automation," "Excel to PDF," etc.
- **Product Hunt:** Launch with full campaign
- **Communities:** Reddit (r/SaaS, r/EntrepreneurRidge), HN, Indie Hackers
- **Cold Outreach:** 20 personalized emails to relevant companies

---

### 🚀 Phase 4: "Scale to $50/Day" (Day 91–120)
**Goal:** 30–40 paying customers, $1,500 MRR ($50/day)  
**Success Criteria:** Sustainable growth, retention > 92%, NPS > 0

#### T21: API connector
- REST API for generic data sources
- Template connectors: 1C, Bitrix24
- OAuth flow for 3rd-party APIs
- Acceptance: Connect to 3 external APIs, 99.9% uptime

#### T22: Report template marketplace
- Community submissions
- Author revenue share (80/20)
- Template categories & reviews
- Acceptance: 20+ templates, 1k+ downloads/month

#### T23: NPS & feedback widget
- In-app NPS survey (quarterly)
- Feature request voting
- Bug reporting form
- Acceptance: 200+ respondents, actionable insights

#### T24: Email drip campaigns
- Onboarding sequence (7 emails, day 1–21)
- Win-back campaign (lapsed users)
- Product updates newsletter
- Acceptance: 40%+ open rate, 10%+ click rate

#### T25: Referral program
- $20 per successful referral
- Referral link generation
- Tracking & payouts
- Acceptance: 10% of new customers from referrals

---

## 📊 Key Metrics & Targets

### Product Metrics
| Metric | Target | Phase |
|--------|--------|-------|
| **Time-to-first-report** | < 3 minutes | 2 |
| **Code coverage** | ≥ 80% | 1 |
| **CI success rate** | ≥ 70% | 1 |
| **PDF generation time** | < 5 seconds | 1 |
| **API response time** | < 500ms (p95) | 2 |
| **System uptime** | 99.9% | 3 |

### Business Metrics
| Metric | Month 1 | Month 2 | Month 3 | Month 4 |
|--------|---------|---------|---------|---------|
| **MRR** | $0 | $0–100 | $300–500 | $1,200–1,500 |
| **Paying Customers** | 0 | 1–3 | 10–12 | 30–40 |
| **CAC** | – | $100–150 | < $50 | < $30 |
| **Churn Rate** | – | – | < 10% | < 8% |
| **NPS** | – | – | > –10 | > 0 |
| **LTV/CAC** | – | – | > 2 | > 3 |

---

## 🏗️ Technical Architecture

```
Nopik
├── Backend (Node.js/TypeScript)
│   ├── API (Express / NestJS)
│   ├── Connectors (XLSX, Google Sheets, APIs)
│   ├── Transformation Engine
│   ├── PDF Renderer
│   ├── Job Queue (BullMQ)
│   └── Database (PostgreSQL)
├── Frontend (React/Next.js)
│   ├── Landing page
│   ├── Dashboard
│   └── Onboarding wizard
├── Infrastructure
│   ├── Cloud Run / Railway (compute)
│   ├── Supabase / Neon (PostgreSQL)
│   ├── Redis (BullMQ)
│   ├── Cloudflare R2 (storage)
│   └── GitHub Actions (CI/CD)
└── Services
    ├── Stripe / LemonSqueezy (payments)
    ├── Auth.js / Clerk (auth)
    ├── Resend (email)
    └── PostHog / Plausible (analytics)
```

---

## 🚨 Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Insufficient traffic | No customers | SEO (blog), PH launch, cold outreach (20 targets), free lead magnet |
| High churn (> 10%/month) | Revenue loss | Onboarding drip (T24), NPS survey (T23), rapid feedback loop |
| Tech debt accumulation | Velocity drop | Enforce 80% coverage (T8), no premature K8s, Copilot agents for boilerplate |
| Solo developer bottleneck | Missed deadlines | Copilot coding agents, reusable templates, clear issue specs |
| API rate limits (Google Sheets) | Service outage | Implement caching, queue backlog, graceful degradation |
| Payment compliance | Legal risk | Use Stripe (PCI-compliant), add Terms & Privacy, GDPR ready |

---

## 📋 Task List Summary

### Phase 1 (Day 1–30)
- [ ] T1: Repository skeleton & CI
- [ ] T2: Google Sheets connector
- [ ] T3: XLSX connector
- [ ] T4: Transformation engine
- [ ] T5: PDF renderer
- [ ] T6: Scheduling engine
- [ ] T7: Delivery system
- [ ] T8: CI hardening
- [ ] T9: Staging deployment

### Phase 2 (Day 31–60)
- [ ] T11: Payment integration
- [ ] T12: User authentication
- [ ] T13: Multi-tenant architecture
- [ ] T14: Onboarding wizard
- [ ] T15: Customer dashboard

### Phase 3 (Day 61–90)
- [ ] T16: Blog engine
- [ ] T17: Product Hunt launch
- [ ] T18: Free XLSX→PDF converter
- [ ] T19: Analytics integration
- [ ] T20: Social proof & testimonials

### Phase 4 (Day 91–120)
- [ ] T21: API connector
- [ ] T22: Report template marketplace
- [ ] T23: NPS & feedback widget
- [ ] T24: Email drip campaigns
- [ ] T25: Referral program

---

## 🔄 Timeline Visualization

```
Day 1                Day 30               Day 60               Day 90               Day 120
|==================== Phase 1 ====================|===== Phase 2 ====|===== Phase 3 ====|=== Phase 4 ===|
MVP on Staging       1st Customer         10 Customers         30–40 Customers      $50/day Target
```

---

## 📚 Related Documents

- 💰 [Pricing Strategy](docs/PRICING.md)
- 🎯 [Milestones & Acceptance Criteria](docs/MILESTONES.md)

---

## 🤝 How to Use This Roadmap

1. **For Developers:** Reference task IDs (T1–T25) in GitHub issues and PRs
2. **For Product:** Use phases to plan marketing & customer success initiatives
3. **For Management:** Review metrics monthly and adjust tactics if: CAC > $50, Churn > 10%, or behind on customer acquisition
4. **For Copilot Agents:** Machine-readable structure allows automatic task breakdown and subtask generation

---

**Last Updated:** March 5, 2026  
**Owner:** Nick Scherbakov  
**Status:** Active Development

# 🎯 Nopik Project Milestones

**Updated:** March 5, 2026  
**Project:** Nopik — AI Report Assistant  
**Timeline:** 120 days

---

## Overview

Four major milestones track progress from MVP to $50/day revenue. Each milestone has clear **acceptance criteria** (must-have) and **nice-to-have** stretch goals.

---

## 🏁 M1: Working MVP on Staging (Day 30)

**Objective:** Fully functional MVP deployed on staging with core connectors and CI/CD pipeline  
**Deadline:** April 4, 2026  
**Owner:** Nick Scherbakov + Copilot agents  
**Success Rate Target:** 70% CI passing, MVP operational

### Acceptance Criteria (Must Have ✅)

- [ ] **Repository & CI/CD** (T1)
  - Monorepo structure: `backend/`, `frontend/`, `docs/`
  - GitHub Actions workflows: lint, test, build
  - Docker Compose for local dev (3 services: backend, db, redis)
  - All tests passing in CI (currently no tests required, but scaffold framework)
  - **Verification:** `docker-compose up` brings full stack in < 2 min

- [ ] **XLSX Connector** (T3)
  - Parse Excel files, extract columns & types
  - Support .xlsx format, streaming for large files
  - Error handling for corrupted files
  - **Verification:** Upload 1MB Excel, detect all columns in < 2s

- [ ] **Google Sheets Connector** (T2)
  - OAuth 2.0 integration with Google API
  - Real-time data fetch from public/authorized sheets
  - Column detection & auto-refresh
  - **Verification:** Connect sheet with 10k rows, sync in < 5s

- [ ] **Transformation Engine** (T4)
  - Aggregate data from multiple sources
  - Pivot, filter, group, sort operations
  - **Verification:** Transform 10k rows × 10 columns in < 3s

- [ ] **PDF Renderer** (T5)
  - Generate PDF from transformed data
  - Include tables, basic charts (bar, line, pie)
  - **Verification:** Render 20-page report in < 5s, file < 5MB

- [ ] **Scheduling Engine** (T6)
  - Cron-like scheduling (daily, weekly, monthly)
  - BullMQ job queue integration
  - Execution logs & error handling
  - **Verification:** Schedule 100 jobs without collision, 99% execution

- [ ] **Delivery System** (T7)
  - Email delivery via Resend (SMTP fallback)
  - Delivery logs, retry logic (3 attempts)
  - **Verification:** Send 100 test emails, 99% success rate

- [ ] **Staging Deployment** (T9)
  - Deploy backend to Cloud Run (or Railway)
  - PostgreSQL database (Supabase free tier)
  - Redis instance (Upstash or Railway)
  - Secrets management (GitHub Secrets)
  - Error logging (basic)
  - **Verification:** Staging URL live, handle 100 req/min, uptime 99%

- [ ] **Code Coverage & Quality** (T8)
  - Minimum 80% code coverage (backend critical paths)
  - 50+ unit tests (connectors, transformation engine)
  - 10+ E2E tests (report generation flow: input → output)
  - Linting: ESLint + Prettier passing
  - **Verification:** CI reports 80%+ coverage, all lint checks green

- [ ] **Documentation**
  - README updated with project description
  - Architecture diagram (mermaid) in docs/
  - Setup guide for local development
  - API docs for internal connectors
  - **Verification:** New developers can `git clone` → `docker-compose up` → tests pass

### Stretch Goals (Nice to Have 🎁)

- [ ] Web UI for report builder (basic drag-drop)
- [ ] Support for .csv and .json file uploads
- [ ] Performance benchmarks (latency p50/p95/p99)
- [ ] Basic monitoring dashboard (request volume, error rate)
- [ ] Example report templates (3–5 templates)

### Exit Criteria

- [ ] Staging deployment: `nopik-staging.cloud/api/health` returns 200
- [ ] Dashboard accessible: `nopik-staging.cloud/` serves landing page
- [ ] All T1–T9 marked complete in GitHub
- [ ] Lead: Writes post-mortem or celebration message

---

## 🛒 M2: Payments Live & Self-Service Onboarding (Day 60)

**Objective:** Monetization enabled, users can sign up, pay, and generate first report in < 3 min  
**Deadline:** May 4, 2026  
**Owner:** Nick Scherbakov + Copilot agents  
**Success Rate Target:** First paying customer acquired

### Acceptance Criteria (Must Have ✅)

- [ ] **Payment Integration** (T11)
  - Stripe account connected (live mode eventually, test mode OK for M2)
  - Subscribe to Starter ($29) or Pro ($49)
  - Manage subscription (upgrade, downgrade, cancel)
  - Webhook handling: payment_intent.succeeded, customer.subscription.deleted
  - Invoice generation & email
  - **Verification:** Process 5 test payments, handle lifecycle (charge → refund → reactivate)

- [ ] **User Authentication** (T12)
  - Email/password registration & login
  - Google OAuth (optional, nice-to-have for M2)
  - Session management (JWT or server sessions)
  - Password reset flow
  - **Verification:** Register → Login → Access dashboard, no unauthorized access

- [ ] **Multi-Tenant Architecture** (T13)
  - Users assigned to workspaces
  - Workspace ownership & member roles (admin, editor, viewer)
  - Data isolation: User A cannot see User B's reports
  - Usage metering: Track reports/month per workspace
  - **Verification:** Create 2 workspaces, verify data isolation, usage accurate

- [ ] **Onboarding Wizard** (T14)
  - Step 1: Connect data source (XLSX upload, Google Sheets OAuth)
  - Step 2: Choose template (5 pre-built options)
  - Step 3: Generate & download first report
  - All 3 steps in < 3 minutes
  - **Verification:** New user completes flow, gets PDF in < 180s

- [ ] **Customer Dashboard** (T15)
  - View past reports (list, search, download)
  - Usage metrics: "5 / 50 reports used this month" (Starter tier)
  - Account settings: Email, workspace name, avatar
  - Upgrade prompt: "Upgrade to Pro to generate more"
  - **Verification:** Load dashboard in < 2s, display 100+ reports without pagination lag

- [ ] **Pricing Go-Live** (see [docs/PRICING.md](PRICING.md))
  - Free tier: 5 reports/month, XLSX only
  - Starter: $29/month, 50 reports, Google Sheets
  - Pro: $49/month, unlimited reports, webhooks, API
  - **Verification:** Users see correct tier, limits enforced

### Stretch Goals (Nice to Have 🎁)

- [ ] Google OAuth (makes signup frictionless)
- [ ] Workspace invite link (share with teammates)
- [ ] Advanced templates (10+ options)
- [ ] Dashboard UI refinement (Figma → production)
- [ ] Mobile-responsive landing page

### Exit Criteria

- [ ] ≥ 1 paying customer (Starter or Pro)
- [ ] Production payment processing live (Stripe live keys)
- [ ] All T11–T15 marked complete
- [ ] Internal dogfooding: Nick uses Nopik to generate his own reports
- [ ] Post-launch monitoring: Error rate < 1%, uptime 99.5%

---

## 📊 M3: 10 Paying Customers, Sustained Marketing (Day 90)

**Objective:** Proven product-market fit, marketing channels working, 10 paying customers, $300–500 MRR  
**Deadline:** June 3, 2026  
**Owner:** Nick Scherbakov (product) + Copilot agents (content)  
**Success Rate Target:** 10 P2P customers, monthly NPS > –10

### Acceptance Criteria (Must Have ✅)

- [ ] **Customer Acquisition Channels Live** (T16–T20)
  - **SEO Blog:** 8–10 published articles (~2k words each), targeting "report automation," "Excel to PDF," etc.
    - Articles rank in top 100 for ≥ 5 keywords
    - **Verification:** Google Search Console shows 1k+ impressions/month
  
  - **Product Hunt Launch:** Shipped with 200+ upvotes (target top 10 for the day)
    - Pre-launch: demo video (3 min), hunter notes, Twitter thread
    - Day-of: live chat engagement
    - **Verification:** PHunt URL in linktree, 200+ upvotes captured

  - **Free XLSX→PDF Converter:** Live on nopik.io/tools/excel-to-pdf
    - No login required, email collection
    - 500+ unique visitors/month
    - 100+ email signups/month
    - **Verification:** Tool generates PDFs, email list exported

  - **Community Presence:** 20+ cold emails sent, 2+ Reddit/HN discussions started
    - Target: r/SaaS, r/EntrepreneurRidge, HN, Indie Hackers
    - **Verification:** Screenshots of discussions, response rate logged

- [ ] **Social Proof Collected** (T20)
  - 5+ named testimonials (with logo, headshot, quote)
  - 2 written case studies (1 detailed, 1 brief)
  - Video testimonial from 1 customer
  - **Verification:** Testimonials live on landing page, attributed

- [ ] **Analytics Integrated** (T19)
  - PostHog or Plausible tracking live
  - Custom events: signup, first report, payment, upgrade
  - Dashboard: 30-day cohort retention, conversion funnel
  - **Verification:** Dashboard shows 90-day data, churn calc visible

- [ ] **Email Drip Campaign Ready** (T24 partial)
  - Onboarding sequence: 3–5 emails over 14 days (setup tips, template ideas)
  - Open rate target: 40%+, Click rate: 10%+
  - **Verification:** Campaign sent to 50+ testers, metrics captured

- [ ] **Customer Metrics**
  - 10 paying customers (Starter + Pro combined)
  - Mix: 5–6 Starter ($29), 4–5 Pro ($49)
  - MRR: $300–500
  - Monthly churn: < 10%
  - NPS: > –10 (calculated from 5+ respondents)
  - CAC: < $50 (total marketing spend / new customers)
  - **Verification:** Dashboard extraction or manual count

### Stretch Goals (Nice to Have 🎁)

- [ ] Secondary keyword rankings (top 20)
- [ ] 1 podcast/YouTube feature
- [ ] Twitter/LinkedIn following: 500+ (for organic reach)
- [ ] Enterprise prospect pipeline: 3+ conversations
- [ ] Affiliate program live (5+ partners)

### Exit Criteria

- [ ] 10 paid subscriptions active (manually verified or Stripe export)
- [ ] All T16–T20 marked complete
- [ ] CAC < $50, LTV > $1,200 (at 24-month retention)
- [ ] Analytics dashboard accessible, key metrics visible
- [ ] Team celebration post published (optional)

---

## 🚀 M4: $50/Day Revenue Target (Day 120)

**Objective:** 30–40 paying customers, $1,200–1,500 MRR ($40–50/day), sustainable growth engine  
**Deadline:** July 2, 2026  
**Owner:** Nick Scherbakov (overall) + Copilot agents (implementation)  
**Success Rate Target:** Hit revenue target, churn < 8%, NPS > 0

### Acceptance Criteria (Must Have ✅)

- [ ] **Revenue Target** (All phases)
  - 30–40 paying customers total
  - Mix: Starter (12–15), Pro (18–25), Enterprise (0–1)
  - Monthly Recurring Revenue (MRR): $1,200–1,500 (= $40–50/day)
  - Annual Run Rate (ARR): $14,400–18,000
  - **Verification:** Stripe dashboard, accounting export, bank confirmation

- [ ] **Advanced Features Live** (T21–T25)
  - **API Connector (T21):** REST API data source support, 3 template connectors (1C, Bitrix24, Salesforce)
    - **Verification:** Generate report from REST API endpoint in < 5s
  
  - **Report Template Marketplace (T22):** 20+ templates, 1k+ total downloads
    - Enable creators to submit, earn 80% revenue share
    - **Verification:** Marketplace page live, transaction logs
  
  - **NPS & Feedback (T23):** In-app NPS survey, feature voting board
    - 200+ NPS responses collected
    - Top 3 feature requests identified
    - **Verification:** Dashboard showing NPS score (> 0), voting board active
  
  - **Email Drip Campaigns (T24):** Full onboarding + win-back sequences
    - "Re-engage lapsed customers" campaign showing results
    - **Verification:** Drip campaign metrics: delivery 95%+, open > 30%
  
  - **Referral Program (T25):** $20 per successful referral, tracking live
    - 10%+ of new customers come from referral
    - **Verification:** Referral table in dashboard, payouts to 5+ referrers

- [ ] **Retention & NPS** (All phases)
  - Monthly churn: < 8% (i.e., retain 92%+ of customers month-to-month)
  - Net Promoter Score (NPS): > 0 (from 50+ respondents)
  - Customer satisfaction: CSAT > 4/5 (from surveys)
  - **Verification:** Retention curve shows > 92% MoM, NPS computed

- [ ] **Operations & Infrastructure** (All phases)
  - System uptime: 99.9% SLA (< 43 min downtime/month)
  - API latency: < 500ms (p95)
  - Support response time: < 24h for Starter, < 4h for Pro
  - Zero security incidents (passthru review before launch)
  - **Verification:** Uptime monitoring (Statuspage or similar), SLA report

- [ ] **Product Quality** (All phases)
  - Code coverage: ≥ 80% (backend critical paths)
  - Bug fix SLA: P1 (critical) < 4h, P2 < 48h, P3 < 1 week
  - Feature release frequency: ≥ 1 per week
  - Customer feedback loop active (weekly): forum, support tickets, NPS
  - **Verification:** CI coverage report, Jira/GitHub Analytics, release notes

- [ ] **Marketing & Growth** (All phases)
  - Website traffic: 5k+ unique visitors/month (from all channels)
  - Email list: 1k+ subscribers (organic growth)
  - Paid CAC: < $30 (if spending on ads; currently organic only)
  - Organic referrals: 20%+ of new customers
  - Brand awareness: 50+ people aware of Nopik (Twitter, LinkedIn, communities)
  - **Verification:** Google Analytics, email platform stats, customer surveys

### Stretch Goals (Nice to Have 🎁)

- [ ] 50 paying customers (vs. target 40)
- [ ] $2,000 MRR ($65/day)
- [ ] 1 enterprise deal (> $1k MRR)
- [ ] International expansion: 3+ non-English customers
- [ ] Automated onboarding (zero human touch, < 3 min to first report)
- [ ] AI-powered report recommendations (suggest missing insights)

### Exit Criteria

- [ ] Revenue verified: $1,200+ MRR (Stripe, bank statement)
- [ ] 30–40 paying customers (logged in last 30 days)
- [ ] All T21–T25 marked complete
- [ ] NPS > 0, churn < 8%
- [ ] Team celebration + milestone announcement (blog post, social media)
- [ ] **Post-game:** Plan for Year 2 (scaling to $200+/day)

---

## 📊 Milestone Summary Table

| Milestone | Date | Customers | MRR | Key Wins |
|-----------|------|-----------|-----|----------|
| **M1** (MVP) | Apr 4 | 0 | $0 | Working product, CI/CD, staging live |
| **M2** (Monetization) | May 4 | 1+ | $29–49 | First paying customer, payments live |
| **M3** (Traction) | Jun 3 | 10 | $300–500 | Proven growth channels, 10 customers |
| **M4** (Scale) | Jul 2 | 30–40 | $1,200–1,500 | Hit $50/day target, sustainable growth |

---

## 🔄 Milestone Tracking

### Weekly Checks (Every Monday)
- MRR vs. target (e.g., "We need $100 by day 60")
- Customer count progression
- Key task completion % (T1–T10, T11–T15, etc.)
- Churn analysis (why did customers leave?)

### Monthly Reviews (End of phase)
- Celebrate wins (email team, social media announcement)
- Post-mortem if behind (what went wrong, corrective action)
- Adjust future 4-week targets based on velocity

---

## 📚 Related Documents

- 🗺️ [Roadmap](../ROADMAP.md) — Full task breakdown (T1–T25)
- 💰 [Pricing](PRICING.md) — Tier details & financial model
- 📋 [Issue Template](../.github/ISSUE_TEMPLATE/feature.yml) — How to create tasks

---

**Last Updated:** March 5, 2026  
**Tracking:** GitHub Issues (milestones), Stripe (revenue), PostHog (analytics)  
**Owner:** Nick Scherbakov

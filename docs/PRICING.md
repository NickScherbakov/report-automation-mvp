# 💰 Nopik Pricing Strategy

**Updated:** March 5, 2026  
**Effective Date (Target):** Day 60 (May 4, 2026)

---

## 📊 Pricing Tiers Overview

| Feature | **Free** | **Starter** | **Pro** | **Enterprise** |
|---------|----------|------------|--------|----------------|
| **Price** | Free | $29/month | $49/month | Custom |
| **Reports/month** | 5 | 50 | Unlimited | Unlimited |
| **Data sources** | XLSX | XLSX, Google Sheets | XLSX, Google Sheets, APIs | Unlimited + Custom |
| **Output formats** | PDF, HTML | PDF, HTML | PDF, HTML, Email, Webhook | All formats + Custom |
| **Schedule frequency** | Manual only | Daily | Any cron | Any cron + Webhooks |
| **Email delivery** | 5/month | Unlimited | Unlimited | Unlimited |
| **Webhook delivery** | ❌ | ❌ | ✅ | ✅ + Custom |
| **Storage (GB)** | 1 | 5 | 50 | Unlimited |
| **Team members** | 1 | 1 | 5 | Unlimited |
| **Support** | Community | Email (24h) | Priority Email (4h) | Dedicated |
| **API access** | ❌ | ❌ | ✅ (limited) | ✅ (full) |
| **Template marketplace** | View only | Use | Use + Create | Use + Create + Monetize |
| **Uptime SLA** | 99% | 99.5% | 99.9% | 99.99% |

---

## 🎯 Pricing Rationale

### Free Tier
- **Purpose:** Acquisition & lead generation (lead magnet)
- **Target:** Students, freelancers, small projects
- **Conversion Strategy:** Hit 5-report limit, offer upgrade to Starter
- **Economics:** CAC can be 0 (organic), LTV = $0 (no revenue), but can lead to referrals

### Starter ($29/month)
- **Position:** Entry point for SMBs
- **Value Adds:**
  - Google Sheets support (frequently requested)
  - 50 reports/month (handle 1–2 per business day)
  - Daily scheduling (1 report/day use case)
  - Email delivery
- **Target:** Departments, consultants, agencies
- **Land-and-expand:** Upsell to Pro when they hit 50 reports/month or need webhooks

### Pro ($49/month)
- **Position:** Core revenue driver (Goldilocks tier)
- **Value Adds:**
  - Unlimited reports (removes friction for growth)
  - Flexible scheduling (any cron)
  - Webhook delivery (integrations with Zapier, Make, native tools)
  - API access (programmatic report generation)
  - 5 team members (enable collaboration)
  - 50GB storage (handles monthly reports for years)
  - Priority support (4h response time)
- **Target:** Mid-market companies, scaling operations
- **Economics:** $49×30 = $1,470 MRR needed from 30 customers to hit Day 120 goal

### Enterprise (Custom)
- **Position:** Strategic partnerships, localization
- **Value Adds:**
  - Dedicated account manager
  - Custom integrations (1C, Bitrix24, legacy systems)
  - SLA 99.99%
  - On-premise option (future)
  - Custom branding (white-label)
  - Volume discounts
- **Sales:** Manual outreach for > 100 reports/month users
- **Target:** Enterprise, government, large consultancies

---

## 📈 Usage-Based Limits & Upgrade Triggers

### Free → Starter Trigger
```
When user:
- Hits 5 reports created (banner: "Upgrade to create more")
- Has 3+ failed report generations due to rate limits
- Attempts >1 Google Sheets connection

Show: Modal with comparison table, Starter benefits, $29/month CTA
Timing: After action, not intrusive
```

### Starter → Pro Trigger
```
When user:
- Attempts webhook delivery (Pro-only feature)
- Tries to create >1 cron schedule (Starter: daily only)
- Adds 6th team member
- Reaches 90% of 50 reports/month within a day

Show: Toast notification "Upgrade to Pro to unlock this"
Timing: Real-time friction point
```

### Pro → Enterprise
```
When customer:
- Generates >500 reports/month
- Requests custom API features
- Needs localization (Russian, Arabic, Kazakh, Portuguese, Chinese, Spanish)
- Requires SLA commitment or on-premise deployment

Method: Proactive outreach email from sales
```

---

## 💳 Payment & Billing

### Billing Cycle
- **Frequency:** Monthly subscription (recurring), annual option (10% discount)
- **Billing Date:** Same day each month, 30-day free trial for first month
- **Payment Methods:** Credit card (Stripe), PayPal (via Stripe), regional: YooMoney (Russia)
- **Invoicing:** Auto-generated PDF invoice, available in dashboard

### Pricing Adjustments
- **Seat pricing (Pro):** $39/month for 5 seats, +$10 per additional seat
- **Annual commitment:** Pay $490 upfront for $409 value (16% savings)
- **Regional pricing:** 
  - Russia: ₽2,490 / ₽3,990 (pay in local currency, Stripe handling)
  - Other post-Soviet: -20% discount for partnerships

### Churn Prevention
- **Unsuccessful payment:** 3 automated retry attempts (day 1, 3, 5)
- **Inactive account (30 days):** Promotional email "Come back, 50% off first month"
- **Churn survey:** "What did we miss?" on cancellation

---

## 🎁 Promotions & Discounts

### Launch Phase (Phase 2, Days 31–60)
- **Early Bird:** First 100 Starter/Pro customers → 50% off year 1, "Founding Member" badge
- **Referral:** Refer a friend → $10 credit (both get credit)
- **Bundle:** Annual + 5 seats → 20% discount

### Retention Phase (Phase 3–4)
- **Annual Commitment:** Pay for 12 months, get month 13 free
- **Team Expansion:** Add 10+ seats → enterprise discount begins
- **Seasonal:** Holiday discount (November–December): 25% off new annual signups

---

## 📊 Financial Projections

### Revenue Forecast (Based on acquisition + pricing)

**Phase 2 (Day 31–60):** Monetization live
```
Starter customers: 1–3
Pro customers: 0
MRR: $29–87
Focus: Enable first paid users, validate payment flow
```

**Phase 3 (Day 61–90):** Marketing traction
```
Starter customers: 6–8
Pro customers: 3–5
MRR: $274–550
Focus: Upsell Starter → Pro, grow Pro base
```

**Phase 4 (Day 91–120):** Scale
```
Starter customers: 12–15
Pro customers: 18–25
Enterprise: 0–1
MRR: $900–1,500
Focus: Land enterprise deal, 30–40 total paying customers
```

### Cost of Goods Sold (COGS) per customer

| Item | Cost | Notes |
|------|------|-------|
| **Cloud compute (Cloud Run)** | $0.08/hour | ~$50/month (per active tenant) |
| **Database (Neon free tier → $10/mo at scale)** | $5/month | Shared across all customers |
| **Email (Resend)** | $0.0001–0.001/3rd email | ~$1/customer/month at scale |
| **Storage (R2)** | $0.015/GB | ~$1/customer/month (50GB average) |
| **Payment processing (Stripe)** | 2.9% + $0.30 | Deducted per transaction |
| **Support & infrastructure** | $200/month | Scaled across customer base |
| **Total COGS (average)** | ~$7–12 per customer | Pro: $49, gross margin ~75% |

### Unit Economics (Pro tier, Year 1)
```
LTV (24-month retention, no upsell): $49×24×0.75 (churn) = $882
CAC target: < $30
LTV/CAC: > 29x (very healthy)

Payback period: < 1 month (CAC recovered in 30 days)
```

---

## 🔄 Pricing Evolution

### Year 1 (Current)
- Focus: Freemium acquisition, Starter/Pro growth
- No seats pricing (team = account)

### Year 2 (Future)
- Introduce: Seats pricing ($10/user/month)
- Add: "Teams" tier ($99/month for 20 people)
- Add: "Large Scale" tier for >1k reports/month (volume discounts)

### Year 3+ (Vision)
- **Per-report pricing option:** $0.50/report (for usage-heavy customers)
- **Data-driven pricing:** Price based on data sources + output complexity
- **Marketplace fee:** 30% on template sales (generate new revenue stream)

---

## 🌍 Regional Localization

### Supported Currencies (at launch)
- USD (default)
- EUR
- GBP
- RUB (Russia)
- KZT (Kazakhstan)
- BRL (Brazil)
- CNY (China)
- AED (Middle East)

### Regional Pricing Strategy
- **Western markets (US/EU):** Standard pricing
- **Post-Soviet (RU/KZ):** -20% discount + local payment method
- **Emerging (BR/CN):** -15% discount + local partnership
- **Middle East (AE):** Standard + Arabic UI support

---

## 📋 Pricing FAQ

**Q: Can I downgrade mid-cycle?**  
A: Yes, unused credits roll to next month.

**Q: What about annual billing?**  
A: $290 for Starter (16% off), $490 for Pro (16% off). Prorated refunds for cancellations.

**Q: Do you offer non-profit discounts?**  
A: Yes, 50% off Pro tier with valid non-profit documentation (target: Education + NGOs).

**Q: Can I get custom pricing?**  
A: Enterprise tier available for >500 reports/month. Contact sales@nopik.io.

**Q: How do team members work?**  
A: Pro tier includes 5 team members. Each additional member is +$10/month.

**Q: Do you offer API pricing differently?**  
A: No, API access is included in Pro tier (rate limit: 1k calls/day). Enterprise has unlimited.

---

## 📞 Related Docs

- 🗺️ [Roadmap](../ROADMAP.md#pricing-tiers-go-live) — Pricing launch timeline
- 🎯 [Milestones](MILESTONES.md#m2-day-60-payments-live) — M2 acceptance criteria

---

**Last Updated:** March 5, 2026  
**Next Review:** May 1, 2026 (post-launch adjustments)

# Report Automation MVP

> B2B SaaS platform for automated report generation, transformation, and delivery

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=flat&logo=github)](https://nickscherbakov.github.io/report-automation-mvp/)

## 🌐 Live Demo

Check out our landing page: **[AI Report Tools →](https://nickscherbakov.github.io/report-automation-mvp/)**

The landing page is automatically deployed to GitHub Pages from the `/docs` directory.

## Overview

Report Automation MVP is a B2B SaaS solution that enables automated report generation from multiple sources (Google Sheets, XLSX) with transformation capabilities and flexible export options (PDF, CSV, HTML).

### Key Features

- **Multi-Source Connectors**: Google Sheets, XLSX file upload
- **Transformation Engine**: Data processing, filtering, aggregation
- **Multiple Export Formats**: PDF, CSV, HTML
- **Scheduling**: Automated report generation on schedules
- **Delivery**: Email and webhook delivery options

## Project Status

**Phase**: MVP Development  
**Timeline**: 6-week sprint  
**Current Sprint**: Setup and Infrastructure

## Architecture

```
┌─────────────────┐
│  Data Sources   │
│ (Sheets, XLSX)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Connectors    │
│   & Ingestion   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Transformation  │
│     Engine      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Renderer     │
│ (PDF/CSV/HTML)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Scheduling    │
│   & Delivery    │
└─────────────────┘
```

## Tech Stack

- **Backend**: Node.js / TypeScript
- **API**: REST / GraphQL
- **Database**: PostgreSQL
- **Queue**: Redis / BullMQ
- **Storage**: S3-compatible object storage
- **CI/CD**: GitHub Actions
- **Deploy**: Docker + Kubernetes / Cloud Run

## Getting Started

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/OWNER/report-automation-mvp.git
cd report-automation-mvp

# Install dependencies
npm install

# Set up environment
cp .env.example .env

# Start development services
docker-compose up -d

# Run database migrations
npm run migrate

# Start development server
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test suite
npm test -- src/connectors
```

## Project Structure

```
report-automation-mvp/
├── src/
│   ├── connectors/       # Data source connectors
│   ├── transformation/   # Transformation engine
│   ├── renderer/         # Export renderers
│   ├── scheduler/        # Scheduling logic
│   ├── delivery/         # Delivery mechanisms
│   ├── api/              # API routes
│   └── shared/           # Shared utilities
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   ├── api/              # API documentation
│   ├── architecture/     # Architecture decisions
│   └── agents.md         # Agent orchestration docs
├── site/                 # Landing page (GitHub Pages)
│   ├── index.html        # Main landing page
│   ├── styles.css        # Responsive styles
│   ├── script.js         # Interactive features
│   └── assets/           # Demo data and assets
├── .github/
│   ├── workflows/
│   │   ├── ci.yml        # Main CI/CD pipeline
│   │   └── pages.yml     # GitHub Pages deployment
│   └── ISSUE_TEMPLATE/
└── infrastructure/       # IaC and deploy scripts
```

## Development Process

### Branching Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - Feature branches
- `hotfix/*` - Emergency fixes

### Agent-Driven Development

This project uses a multi-agent architecture for development:

- **Product Architect**: Epic and story design
- **Feature Dev**: Feature implementation
- **Integration Dev**: CI/CD and infrastructure
- **QA Agent**: Testing and quality assurance
- **Security Auditor**: Security scanning and remediation
- **Release Manager**: Release preparation and deployment

See [docs/agents.md](docs/agents.md) for detailed agent documentation.

## Quality Metrics

- Code Coverage: ≥ 80%
- Lead Time per Ticket: ≤ 7 days
- CI Success Rate: ≥ 70%
- MTTR: ≤ 1 hour

## Security

- All secrets stored in secure secret manager
- Dependency scanning on every commit
- CVSS ≥ 9 vulnerabilities block releases
- Regular security audits

## Contributing

1. Create a feature branch from `develop`
2. Implement changes with tests
3. Ensure CI passes
4. Submit PR for review
5. Merge after approval

## License

See [LICENSE.md](LICENSE.md)

## Support

For issues and questions, please use GitHub Issues or contact the development team.

---

**Status**: 🚧 Active Development | **Version**: 0.1.0-alpha

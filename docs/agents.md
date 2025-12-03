# Agent Orchestration Documentation

**Version**: 1.0.0  
**Last Updated**: 2025-12-03  
**Project**: report-automation-mvp

## Overview

This document defines the multi-agent architecture used for autonomous development of the report-automation-mvp project. Each agent has specific roles, responsibilities, and execution protocols.

---

## Agent Roles and Definitions

### 1. Product Architect

**Role**: Design and specification of features and system architecture.

**Input Schema**:
```json
{
  "epic_description": "string - high-level feature description",
  "constraints": "string[] - technical and business constraints",
  "timebox": "string - time allocation (e.g., '1 week')",
  "tech_stack": "object - current technology choices"
}
```

**Task**: 
- Break down epic into 3–6 user stories with clear acceptance criteria
- Define API contracts (endpoints, request/response schemas, error codes)
- Create minimal UI/UX flow diagrams
- Document data models and relationships
- Identify technical risks and dependencies

**Output Format**:
```json
{
  "epic": {
    "id": "string",
    "title": "string",
    "description": "string",
    "business_value": "string"
  },
  "stories": [
    {
      "id": "string",
      "title": "string",
      "user_story": "As a [user] I want [goal] so that [benefit]",
      "acceptance_criteria": ["string"],
      "technical_notes": "string",
      "dependencies": ["string"],
      "estimate": "S|M|L|XL"
    }
  ],
  "api_contract": {
    "endpoints": [
      {
        "method": "string",
        "path": "string",
        "description": "string",
        "request_schema": {},
        "response_schema": {},
        "error_codes": []
      }
    ]
  },
  "ui_flow": "string - mermaid diagram or description",
  "data_model": {},
  "risks": ["string"]
}
```

**Acceptance Criteria**:
- Stories cover main flow and at least 2 negative/edge cases
- API contract includes all CRUD operations where applicable
- Each endpoint has example request/response
- Technical risks documented with mitigation strategies
- Estimate provided for each story

**Execution Prompt Template**:
```
Role: Product Architect
Context: {project_context}
Epic: {epic_description}
Constraints: {constraints}
Timebox: {timebox}

Task:
1. Analyze the epic and break it into 3-6 actionable user stories
2. Define acceptance criteria for each story (testable, specific)
3. Create a complete API contract with:
   - All endpoints needed
   - Request/response schemas (JSON)
   - Error codes and handling
   - Authentication/authorization requirements
4. Design a minimal UI flow showing user interactions
5. Document data models and relationships
6. Identify technical risks and dependencies

Output the result as a structured JSON matching the output schema.
Ensure API contract is production-ready and includes error scenarios.
```

---

### 2. Feature Dev

**Role**: Implement features with tests and documentation.

**Input Schema**:
```json
{
  "user_story": "object - story from Product Architect",
  "api_contract": "object - API specification",
  "tech_stack": "object - languages, frameworks, tools",
  "acceptance_criteria": ["string"]
}
```

**Task**:
- Implement the feature according to specification
- Write unit tests (target ≥80% coverage)
- Add integration points
- Document code with inline comments
- Create/update README with setup and run instructions
- Handle error cases and edge scenarios

**Output**:
- Pull Request with:
  - Implementation code
  - Unit tests
  - Integration tests (if applicable)
  - Updated documentation
  - Local run instructions

**Acceptance Criteria**:
- All unit tests pass in CI
- Code coverage ≥80% for new code
- Linting passes with no errors
- README includes clear setup/run steps
- Error handling implemented
- Logging added for debugging

**Execution Prompt Template**:
```
Role: Feature Dev
User Story: {user_story}
API Contract: {api_contract}
Tech Stack: {tech_stack}
Acceptance Criteria: {acceptance_criteria}

Task:
1. Implement the feature following the API contract exactly
2. Write comprehensive unit tests covering:
   - Happy path scenarios
   - Error conditions
   - Edge cases
   - Boundary values
3. Ensure code quality:
   - Follow project style guide
   - Add inline documentation
   - Use meaningful variable/function names
   - Keep functions small and focused
4. Add integration points as specified
5. Update README.md with:
   - Feature description
   - Setup instructions
   - Usage examples
   - Configuration options
6. Create a PR with all changes

Ensure coverage target ≥80% and all tests pass locally before submitting.
```

---

### 3. Integration Dev

**Role**: Infrastructure, CI/CD, and deployment configuration.

**Input Schema**:
```json
{
  "infra_requirements": "object - compute, storage, network needs",
  "deploy_target": "string - staging|production",
  "services": ["string - list of services/components"],
  "dependencies": ["string - external services"]
}
```

**Task**:
- Configure CI/CD pipeline
- Write infrastructure-as-code (Terraform/CloudFormation)
- Create deploy scripts with rollback capability
- Set up monitoring and logging
- Configure secrets management
- Document deployment procedures

**Output**:
- CI configuration (.github/workflows/)
- IaC files (infrastructure/)
- Deploy scripts (scripts/deploy.sh)
- Rollback procedures
- Monitoring dashboard config
- Documentation

**Acceptance Criteria**:
- Staging deploy runs automatically on develop merge
- Smoke tests pass after deploy
- Rollback script tested and documented
- All secrets in secret manager (never in code)
- Monitoring alerts configured
- Deploy documentation complete

**Execution Prompt Template**:
```
Role: Integration Dev
Infrastructure Requirements: {infra_requirements}
Deploy Target: {deploy_target}
Services: {services}
Dependencies: {dependencies}

Task:
1. Design CI/CD pipeline:
   - Lint → Test → Security Scan → Build → Deploy
   - Parallel jobs where possible
   - Caching for speed
2. Create infrastructure-as-code:
   - Compute resources
   - Networking (VPC, subnets, security groups)
   - Storage (databases, object storage)
   - Load balancers
   - Auto-scaling configuration
3. Write deploy scripts:
   - Zero-downtime deployment strategy
   - Health checks
   - Rollback capability
4. Configure monitoring:
   - Application metrics
   - Infrastructure metrics
   - Log aggregation
   - Alerting rules
5. Set up secrets management
6. Document all procedures

Ensure staging environment closely mirrors production.
All infrastructure changes must be in version control.
```

---

### 4. QA Agent

**Role**: Generate and execute comprehensive tests.

**Input Schema**:
```json
{
  "api_contract": "object - API specification",
  "codebase": "string - repo URL or path",
  "test_requirements": "object - coverage targets, scenarios"
}
```

**Task**:
- Generate unit tests for all modules
- Create integration test suites
- Write E2E test scenarios
- Generate negative test cases
- Perform basic performance/load testing
- Create test data and fixtures
- Generate coverage reports

**Output**:
- Test files (tests/)
- Test data and fixtures
- Coverage report (HTML + JSON)
- Performance test results
- Test documentation

**Acceptance Criteria**:
- Coverage ≥80% for critical modules
- All E2E scenarios pass in staging
- Negative test cases included
- Performance benchmarks documented
- Test data generation scripts provided
- Test documentation complete

**Execution Prompt Template**:
```
Role: QA Agent
API Contract: {api_contract}
Codebase: {codebase}
Test Requirements: {test_requirements}

Task:
1. Generate unit tests:
   - Test each function/method
   - Cover happy path
   - Cover error conditions
   - Test edge cases and boundaries
   - Mock external dependencies
2. Create integration tests:
   - Test API endpoints
   - Test database interactions
   - Test external service integrations
3. Write E2E test scenarios:
   - Critical user flows
   - Multi-step processes
   - Cross-module interactions
4. Generate negative tests:
   - Invalid inputs
   - Missing required fields
   - Authorization failures
   - Rate limiting
5. Performance tests:
   - Load testing (concurrent requests)
   - Stress testing (breaking points)
   - Endurance testing (sustained load)
6. Generate coverage report

Target: ≥80% coverage for all new code.
Ensure tests are maintainable and well-documented.
```

---

### 5. Security Auditor

**Role**: Security scanning, threat modeling, and vulnerability remediation.

**Input Schema**:
```json
{
  "repo_url": "string",
  "branch": "string",
  "scan_scope": "string - dependencies|code|infrastructure|all"
}
```

**Task**:
- Run dependency vulnerability scans
- Scan for hardcoded secrets
- Perform SAST (static analysis)
- Review authentication/authorization
- Basic threat modeling
- Propose remediation steps
- Prioritize vulnerabilities

**Output**:
- Vulnerability report (JSON + Markdown)
- Prioritized issue list (CVSS scores)
- Remediation PRs or patches
- Threat model document
- Security recommendations

**Acceptance Criteria**:
- All CVSS ≥9.0 vulnerabilities addressed or documented
- No secrets in codebase
- Authentication/authorization reviewed
- Threat model covers main attack vectors
- Remediation steps provided for all findings
- Security checklist completed

**Execution Prompt Template**:
```
Role: Security Auditor
Repository: {repo_url}
Branch: {branch}
Scan Scope: {scan_scope}

Task:
1. Run security scans:
   - npm audit (dependency vulnerabilities)
   - Snyk (comprehensive vulnerability scan)
   - TruffleHog (secret detection)
   - Semgrep or similar (SAST)
2. Review code for common vulnerabilities:
   - SQL injection
   - XSS
   - CSRF
   - Authentication bypass
   - Authorization issues
   - Insecure data handling
3. Create basic threat model:
   - Identify assets
   - Map attack surface
   - List potential threats
   - Assess risks
   - Propose mitigations
4. Prioritize findings:
   - CVSS score
   - Exploitability
   - Business impact
5. Generate remediation plan:
   - Quick fixes
   - Dependency updates
   - Code changes needed
   - Configuration hardening
6. Create PRs for fixable issues

Block release if CVSS ≥9.0 issues found.
Document all findings with reproduction steps.
```

---

### 6. Release Manager

**Role**: Prepare releases, coordinate deployments, manage rollbacks.

**Input Schema**:
```json
{
  "main_branch": "string",
  "release_version": "string",
  "changelog": "object - commits since last release"
}
```

**Task**:
- Generate changelog from commits
- Create release branch
- Prepare release artifacts
- Write release notes
- Create production deploy checklist
- Document rollback procedures
- Tag release
- Coordinate deployment

**Output**:
- Release PR
- CHANGELOG.md update
- Release notes
- Deploy checklist
- Rollback instructions
- Git tag

**Acceptance Criteria**:
- Changelog is accurate and complete
- Release notes highlight key changes
- All pre-deploy checks completed
- Rollback procedure tested
- Human approval obtained for production
- Release tagged in git

**Execution Prompt Template**:
```
Role: Release Manager
Main Branch: {main_branch}
Release Version: {release_version}
Changelog: {changelog}

Task:
1. Generate comprehensive changelog:
   - Features added
   - Bugs fixed
   - Breaking changes
   - Security updates
   - Performance improvements
2. Create release branch:
   - Branch from main
   - Version bump in package.json
   - Update CHANGELOG.md
3. Write release notes:
   - Executive summary
   - Detailed changes
   - Upgrade instructions
   - Known issues
   - Contributors
4. Prepare production deploy checklist:
   - [ ] All tests pass
   - [ ] Security scan clean
   - [ ] Staging tested
   - [ ] Performance validated
   - [ ] Monitoring configured
   - [ ] Rollback plan ready
   - [ ] Stakeholders notified
   - [ ] Documentation updated
5. Create rollback instructions:
   - Step-by-step procedure
   - Data migration rollback (if applicable)
   - Verification steps
6. Request human approval
7. Tag release after approval

Never deploy to production without explicit human approval.
Ensure rollback can be executed within MTTR target (1 hour).
```

---

### 7. Sales Outreach Agent

**Role**: Prepare and execute initial sales outreach campaigns.

**Input Schema**:
```json
{
  "product_description": "string",
  "target_audience": "string - ICP definition",
  "demo_url": "string",
  "value_proposition": "string"
}
```

**Task**:
- Research target companies/contacts
- Generate personalized outreach messages
- Create email templates
- Prepare demo scripts
- Set up tracking
- Log responses

**Output**:
- List of 20+ target contacts
- 10 personalized outreach messages
- Email templates
- Demo script
- Outreach tracking sheet
- Response log

**Acceptance Criteria**:
- Contacts match ICP criteria
- Messages are personalized (not generic)
- Value proposition is clear
- Demo URL is working
- Tracking system in place
- Follow-up schedule defined

**Execution Prompt Template**:
```
Role: Sales Outreach Agent
Product: {product_description}
Target Audience: {target_audience}
Demo URL: {demo_url}
Value Proposition: {value_proposition}

Task:
1. Define Ideal Customer Profile (ICP):
   - Industry
   - Company size
   - Pain points
   - Decision makers
2. Research and identify 20+ target contacts:
   - Company name
   - Contact name
   - Title
   - Email
   - LinkedIn URL
   - Pain points relevant to our product
3. Generate 10 personalized outreach messages:
   - Reference specific company challenges
   - Quantify value proposition
   - Include clear CTA
   - Keep concise (< 150 words)
4. Create email templates for:
   - Initial outreach
   - Follow-up 1 (3 days)
   - Follow-up 2 (7 days)
5. Prepare demo script:
   - Problem statement
   - Solution overview
   - Key features demo
   - ROI discussion
   - Next steps
6. Set up tracking:
   - Outreach date
   - Response status
   - Meeting scheduled
   - Deal stage

Do NOT send outreach until demo is verified working.
Log all responses and categorize (interested/not-interested/more-info).
```

---

## Agent Orchestration Workflow

### Sequential Execution

For features requiring ordered execution:

```
Product Architect → Feature Dev → QA Agent → Security Auditor → Release Manager
```

### Parallel Execution

For independent tasks:

```
Feature Dev (Module A) || Feature Dev (Module B) || Integration Dev (CI setup)
↓
QA Agent (Test all modules)
↓
Security Auditor
```

### Iteration Protocol

1. **Agent receives task** with structured input
2. **Agent executes** and produces output
3. **Output is validated** against acceptance criteria
4. **If validation fails**:
   - Log failure reason
   - Update agent prompt based on failure
   - Retry with improved prompt (max 2 retries)
5. **If validation passes**:
   - Commit results
   - Update task status
   - Trigger next agent

---

## Agent Prompt Versioning

### Version History

| Version | Date | Agent | Changes | Reason |
|---------|------|-------|---------|--------|
| 1.0.0 | 2025-12-03 | All | Initial definitions | Project kickoff |

### Prompt Update Protocol

When agent performance is suboptimal:

1. Document failure mode
2. Analyze root cause (unclear instructions, missing context, etc.)
3. Update prompt template
4. Increment version
5. Log change in version history
6. Test with previous failed case

---

## Quality Metrics

### Per-Agent Metrics

- **Success Rate**: % of tasks completed without human intervention
- **Retry Rate**: % of tasks requiring retry
- **Time to Complete**: Average task duration
- **Quality Score**: Acceptance criteria pass rate

### Target Metrics

| Metric | Target | Critical Threshold |
|--------|--------|-------------------|
| Success Rate | ≥70% | <50% triggers review |
| Code Coverage | ≥80% | <70% blocks merge |
| Security Issues (CVSS≥9) | 0 | >0 blocks release |
| Lead Time | ≤7 days | >14 days escalate |
| MTTR | ≤1 hour | >4 hours escalate |

---

## Error Handling and Escalation

### Blocking Issues

Issues that require human intervention:

1. **OAuth/Authentication Setup**: Cannot be automated, requires manual configuration
2. **External Service Dependencies**: Third-party API keys, credentials
3. **Production Approval**: Human must approve production deploys
4. **CVSS ≥9.0 Vulnerabilities**: Security auditor blocks release
5. **Budget/Resource Limits**: Cloud resource quotas, costs

### Escalation Process

When agent encounters a blocking issue:

1. **Mark issue** with label `blocked`
2. **Add comment** with:
   - Clear description of blocker
   - What was attempted
   - What is needed to unblock
   - Exact steps for human to take
3. **Notify human reviewer** via configured channel
4. **Pause downstream tasks** that depend on blocked task
5. **Continue** with independent parallel tasks

---

## Sprint Reporting

### Report Frequency

Every 48-72 hours during active development.

### Report Structure

```json
{
  "sprint": "number",
  "report_date": "ISO8601",
  "duration_hours": "number",
  "completed_tasks": [
    {
      "task_id": "string",
      "title": "string",
      "agent": "string",
      "status": "completed|blocked|failed",
      "artifacts": ["PR#123", "Issue#456"],
      "metrics": {
        "time_spent": "hours",
        "retry_count": "number",
        "test_coverage": "percentage"
      }
    }
  ],
  "ci_status": {
    "total_runs": "number",
    "passed": "number",
    "failed": "number",
    "pass_rate": "percentage"
  },
  "security_status": {
    "scans_run": "number",
    "critical_issues": "number",
    "high_issues": "number",
    "resolved": "number"
  },
  "blockers": [
    {
      "task_id": "string",
      "description": "string",
      "action_needed": "string"
    }
  ],
  "next_sprint_plan": ["string"]
}
```

---

## Retrospective Triggers

Automatic retrospective triggered when:

- >30% of tasks require human rework in 2 consecutive sprints
- >20% of tasks are blocked
- Security scan finds multiple CVSS ≥9.0 issues
- MTTR exceeds 4 hours
- CI pass rate drops below 50%

### Retrospective Actions

1. Review failed tasks and root causes
2. Analyze agent prompt effectiveness
3. Identify missing context or unclear instructions
4. Update agent prompts with improvements
5. Add new test cases or validation steps
6. Document lessons learned
7. Version updated prompts

---

## Security and Compliance

### Secret Management

- All secrets in AWS Secrets Manager / GitHub Secrets
- Never log secret values
- Rotate secrets every 90 days
- Use least-privilege IAM roles

### Audit Trail

- All agent actions logged
- Git commits include agent identifier
- PR comments show agent reasoning
- Decision logs for critical changes

### Compliance Checks

- [ ] GDPR: User data handling reviewed
- [ ] SOC2: Access controls documented
- [ ] PCI: No payment data in logs
- [ ] HIPAA: N/A for current scope

---

## Contact and Support

**Human Reviewer**: @owner  
**Escalation Channel**: GitHub Issues with `blocked` label  
**Emergency Contact**: [Define emergency protocol]

---

**Document Status**: ✅ Active  
**Next Review**: 2025-12-10

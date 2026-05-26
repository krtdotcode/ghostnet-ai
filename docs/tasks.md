# GhostNet AI 4-Day Sprint Task Plan

This sprint is organized as a parallel assembly line. Each day has a primary goal, explicit branch ownership, and a hard handoff protocol so no member waits for another member's entire feature to finish before starting.

## Day 1 - Foundation and Contract Lock

| Task Name                                    | Assigned Member & Branch                                       | Dependencies                           | Target Deliverable                                                               |
| -------------------------------------------- | -------------------------------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------------- |
| Project bootstrap and protected branch setup | Member 1 - Tech Lead / `main`, `develop`, `feature/infra-core` | None                                   | Repo structure, branch protection, baseline Next.js app, shared coding standards |
| Bright Data discovery prototype              | Member 2 - Scraping Specialist / `feature/brightdata-pipeline` | Brand definition from product scope    | SERP query prototype returning top suspicious results                            |
| Claude schema and scoring contract           | Member 3 - AI Engineer / `feature/claude-orchestration`        | Evidence shape from scraping prototype | Strict JSON schema for threat analysis and report output                         |
| Dashboard shell and navigation skeleton      | Member 4 - Frontend UI/UX / `feature/dashboard-ui`             | API contract draft                     | Visual shell with brand panel, live threat list, and evidence drawer             |
| QA matrix and sprint acceptance rules        | Member 5 - QA & Strategy / `feature/qa-validation`             | Product scope and target architecture  | Test checklist, release criteria, and pass/fail thresholds                       |

### Phase Communication Protocol - Day 1

- Member 2 must hand Member 3 a sample evidence packet containing raw search result fields, page title, target URL, and one screenshot metadata object by end of day.
- Member 1 must hand Member 4 the initial route contract for `/api/brands/monitor`, `/api/threats/live`, and `/api/takedown/generate` so the dashboard can code against stable shapes.
- Member 3 must hand Member 5 the initial Claude response schema, including score ranges, enum values, and validation failure modes, so QA can write assertions before the model is integrated.
- Member 4 must hand Member 1 a mocked UI event model describing how live threat rows update, so backend event payloads match frontend expectations.

## Day 2 - Pipeline Integration

| Task Name                                   | Assigned Member & Branch                                       | Dependencies                   | Target Deliverable                                            |
| ------------------------------------------- | -------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------- |
| Supabase schema and evidence storage wiring | Member 1 - Tech Lead / `feature/infra-core`                    | Day 1 contract lock            | Brands and Threats tables plus evidence buckets and RLS rules |
| Scraping Browser capture flow               | Member 2 - Scraping Specialist / `feature/brightdata-pipeline` | SERP prototype                 | Full-page screenshot capture with safe DOM summaries          |
| Claude threat analysis implementation       | Member 3 - AI Engineer / `feature/claude-orchestration`        | Evidence packet from Member 2  | Scoring pipeline that returns validated JSON analysis         |
| Live threat feed UI integration             | Member 4 - Frontend UI/UX / `feature/dashboard-ui`             | API contract and mock payloads | Dashboard list bound to live threat data and evidence links   |
| Test scaffolding and E2E checkpoints        | Member 5 - QA & Strategy / `feature/qa-validation`             | Day 1 interfaces               | Automated smoke tests for one brand, one threat, one report   |

### Phase Communication Protocol - Day 2

- Member 2 must hand Member 3 a normalized evidence bundle with `screenshotUrl`, `htmlSnapshotPath`, `visibleText`, and `finalUrl` so the analysis prompt can remain structured.
- Member 3 must hand Member 1 the exact validation schema and threat state transitions needed for database writes and status updates.
- Member 1 must hand Member 4 a live JSON fixture from Supabase containing at least two threats with different urgency levels.
- Member 4 must hand Member 5 the UI state contract that maps loading, capturing, analyzing, validated, and report-ready states to visible indicators.

## Day 3 - Hardening and Legal Workflow

| Task Name                                       | Assigned Member & Branch                                       | Dependencies                 | Target Deliverable                                                       |
| ----------------------------------------------- | -------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------ |
| Deadline enforcement and retry policy           | Member 1 - Tech Lead / `feature/infra-core`                    | Integration paths from Day 2 | Hard timeout controls and bounded retry rules                            |
| Anti-bot failure handling and fallback capture  | Member 2 - Scraping Specialist / `feature/brightdata-pipeline` | Browser capture flow         | Clean failure states for blocked or partially rendered targets           |
| Cease-and-desist report generator               | Member 3 - AI Engineer / `feature/claude-orchestration`        | Validated threat records     | Structured legal draft with evidence citations and abuse contact hints   |
| Evidence viewer and report action panel         | Member 4 - Frontend UI/UX / `feature/dashboard-ui`             | Threat and report fixtures   | UI for screenshot review, report preview, and manual approval            |
| Validation suite expansion and release criteria | Member 5 - QA & Strategy / `feature/qa-validation`             | End-to-end flows from Day 2  | Regression tests covering timeout, evidence integrity, and report gating |

### Phase Communication Protocol - Day 3

- Member 2 must hand Member 1 a failure taxonomy for blocked sites, timeouts, and incomplete evidence so backend status codes remain consistent.
- Member 3 must hand Member 4 the report payload structure, including `abuseEmail`, `ceaseAndDesistNotice`, and `reportStatus`, so the review panel can render all fields.
- Member 4 must hand Member 5 the final visible labels and button actions for the report workflow so QA can test the exact reviewer journey.
- Member 5 must hand Member 1 a prioritized defect list with reproduction steps and severity tags so integration fixes are focused before launch.

## Day 4 - Stabilization and Launch Readiness

| Task Name                                     | Assigned Member & Branch                                       | Dependencies                     | Target Deliverable                                                  |
| --------------------------------------------- | -------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------- |
| Final integration polish and release gate     | Member 1 - Tech Lead / `main`, `develop`, `feature/infra-core` | All feature branches merged      | Release candidate with clean build and deploy sequence              |
| Search coverage tuning and edge-case sampling | Member 2 - Scraping Specialist / `feature/brightdata-pipeline` | Production-like fixtures         | Finalized discovery patterns with safe limits and tuned filters     |
| Prompt optimization and JSON validation sweep | Member 3 - AI Engineer / `feature/claude-orchestration`        | Realistic evidence samples       | Lower-failure-rate analysis prompt and validation guardrail set     |
| UI responsiveness and presentation polish     | Member 4 - Frontend UI/UX / `feature/dashboard-ui`             | Stable live feed and report flow | Demo-ready dashboard with mobile-safe layout and clear states       |
| Final QA, launch checklist, and handoff notes | Member 5 - QA & Strategy / `feature/qa-validation`             | Full integrated build            | Sign-off document, known risks log, and demo verification checklist |

### Phase Communication Protocol - Day 4

- Member 1 must provide Member 5 a release candidate build summary with any known limitations, open defects, and deployment requirements.
- Member 2 must provide Member 3 the final set of edge-case scraped examples so the model prompt can be tuned against real failures.
- Member 3 must provide Member 4 the final report schema and any UI labels that changed during validation so the interface stays consistent.
- Member 4 must provide Member 1 the final visual acceptance status and any blocked responsive issues before the release gate is opened.

## Operating Rules for the Whole Sprint

- Every branch merges forward only after its owner has posted a handoff payload.
- All API contracts are written before full implementation so parallel work stays aligned.
- Every day ends with one shared validation checkpoint.
- No member should wait for the entire system to finish before shipping their portion of the assembly line.
- The team should prioritize a working end-to-end happy path over broad feature breadth, then harden the rough edges after the pipeline is proven.

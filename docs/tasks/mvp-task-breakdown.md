# MVP Task Breakdown

## Cross-Cutting
- [ ] Project scaffolding (Codespring starter, Bun)
- [ ] Env config & secrets management
- [ ] Error handling + logging
- [ ] Minimal UI shell and navigation

## Smart Web Import
- [ ] Recipe schema.org extractor
- [ ] Heuristic fallback parser
- [ ] Import preview UI with edit + duplicate detection
- [ ] Source URL persistence

## AI Ingredient Normalization
- [ ] Parser for quantity/unit/modifiers
- [ ] Canonical ingredient dictionary + aisles mapping
- [ ] Normalization service + confidence scoring
- [ ] Manual override UI + audit log

## Search & Filters
- [ ] Index design for title/ingredients/tags
- [ ] Include/exclude ingredient filters
- [ ] Sort (relevance/newest/cook time) + pagination
- [ ] Performance budget (<300ms after index)

## Meal Planner + Shopping List
- [ ] Weekly planner data model + UI (drag & drop)
- [ ] Servings scaling logic
- [ ] List generator (dedupe + aisle grouping)
- [ ] Export to Notes/Reminders

## User Authentication
- [ ] Email/password + OAuth (Google/GitHub)
- [ ] Session management + CSRF protection
- [ ] Settings page (name, avatar) + logout
- [ ] Rate limiting / brute-force protection

## QA & Release
- [ ] E2E happy-path import -> save -> plan -> list
- [ ] Docs: overview + per-feature PRDs
- [ ] MVP readiness checklist

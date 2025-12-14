# Feature PRD – Search & Filters

## Problem
Users struggle to quickly find the right recipe from their collection.

## Solution
Full-text search across recipe fields with rich filtering and sorting.

## Acceptance Criteria
- Full-text search across title/ingredients
- Filters: include/exclude ingredients, cuisine, tags, cook time, difficulty
- Fast results (<300ms after index) with pagination
- Sort by relevance, newest, cook time

## Notes
- Index normalized ingredients for precise include/exclude
- Support saved searches later (post-MVP)

## Metrics
- Query latency p95
- Result satisfaction (click-through/save)

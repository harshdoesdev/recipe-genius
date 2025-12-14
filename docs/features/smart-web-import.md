# Feature PRD – Smart Web Import

## Problem
Copying recipes manually is time-consuming and error-prone.

## Solution
Auto-extract title, ingredients, steps, images (and optionally yield/time) from a recipe URL.

## Acceptance Criteria
- Import from popular recipe sites and generic pages
- Extract: title, ingredients, steps, images, yield, time
- Import completes < 5s with progress/error states
- Editable preview before saving; duplicate detection

## Notes
- Start with structured-data (schema.org/Recipe), fallback to heuristics
- Allow user edits before save; store source URL

## Metrics
- Import success rate
- Average import time
- Edit rate post-import

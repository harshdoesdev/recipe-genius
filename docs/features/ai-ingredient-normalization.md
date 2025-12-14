# Feature PRD – AI Ingredient Normalization

## Problem
Inconsistent units and naming reduce search quality and shopping list accuracy.

## Solution
Parse and standardize ingredients and units (e.g., 1 tbsp -> 15 ml); map to canonical ingredient names.

## Acceptance Criteria
- Standardize units (metric/US); canonical ingredient names
- Parse quantities, ranges, and fractions; preserve notes (e.g., "chopped")
- Map to grocery aisles/categories for shopping list
- Confidence score + manual override UI

## Notes
- Store original text + normalized struct to retain fidelity
- Maintain mapping dictionary; log low-confidence cases for review

## Metrics
- Normalization coverage and confidence
- Manual override frequency

# Feature PRD – User Authentication

## Problem
Recipes must remain private and synced across devices.

## Solution
Email/password + social login (Google/GitHub). Secure sessions and per-user data isolation.

## Acceptance Criteria
- Email/password + Google/GitHub OAuth
- Private per-user data; secure sessions
- Basic account settings (name, avatar); logout
- Rate limiting + brute-force protection

## Notes
- Session rotation on sensitive changes
- Clear data export/delete mechanism (post-MVP)

## Metrics
- Auth success/failure rates
- Password reset success rate

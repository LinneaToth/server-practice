# Node.js & Express Server Exercises

A collection of servers built with Node.js and Express.js for learning purposes.

## What I practiced

- Built an HTTP server from scratch using Node's native `http` module (no frameworks)
- Migrated to Express for cleaner routing with `app.get()` and route handlers
- Used middleware with `app.use()` for request logging across all routes
- Handled both route params (`:id`) and query strings (`?q=`) for flexible endpoints
- Built a JSON REST API with `res.json()` and structured routes under `/api`
- Filtered resources with query params on a dedicated `/search` route
- Wrote custom middleware to reject non-GET methods with a `405` status
- Used Express 5's wildcard catch-all `/{*path}` for a clean 404 fallback
- Validated user input and returned appropriate HTTP status codes (200, 404, 405)

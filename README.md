# sebastianavila.cloud

Personal website of **Sebastian Avila** — Middleware Administrator moving to Cloud Engineering (AWS).

🌐 https://sebastianavila.cloud *(coming soon)*

## Architecture

```
Visitor ──► Cloudflare DNS (DNS only) ──► Amazon CloudFront (HTTPS, ACM certificate in us-east-1)
                                              │
                                              ▼
                                   Amazon S3 (private bucket, access only via OAC)

GitHub (this repo) ──► GitHub Actions ──(IAM role via OIDC, no stored keys)──► aws s3 sync + CloudFront invalidation
```

- **Static site:** plain HTML, CSS and a few lines of JavaScript. No framework, no build step.
- **Hosting:** S3 + CloudFront, so the site stays up even if my home lab is offline.
- **Security:** private bucket with Origin Access Control, HTTPS only, and GitHub Actions authenticates to AWS with OIDC (short-lived credentials, no access keys in the repo).
- **DNS & email:** Cloudflare (DNS and Email Routing for the contact address).

## Run locally

Open `index.html` in a browser. That's it.

## Structure

```
index.html     single page
styles.css     palette, light/dark theme, responsive layout
script.js      theme toggle
favicon-32.png, apple-touch-icon.png, favicon.svg   SA monogram
assets/        downloadable CV and Open Graph preview image
```

# Archmatter Landing Page

This folder contains the site files deployed to GitHub Pages at [archmatter.io](https://archmatter.io).

## Structure

Single-page teaser: hero headline, lead copy, and email waitlist signup.

Waitlist submissions go to [nForms](https://nforms.eu/) via `waitlist.config.js` (generated at deploy from the `NFORMS_ACCESS_KEY` GitHub secret). For local testing, copy `waitlist.config.example.js` to `waitlist.config.js` and add your form access key.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080 --directory code
```

## Deployment

GitHub Actions publishes this `code/` folder on push to `main` (see `.github/workflows/deploy-pages.yml`).

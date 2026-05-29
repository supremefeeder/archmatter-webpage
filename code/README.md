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

## Search & discovery

| File | Role |
|------|------|
| `robots.txt` | Tells crawlers they may index the site; points to the sitemap |
| `sitemap.xml` | Lists URLs for Google/Bing |
| `index.html` meta + JSON-LD | Titles, descriptions, Open Graph/Twitter cards, structured data |
| `llms.txt` | Short summary for AI crawlers and assistants ([llms.txt](https://llmstxt.org/)) |

After deploy, register the site in [Google Search Console](https://search.google.com/search-console): add property `https://archmatter.io`, verify via DNS or GitHub, then submit `https://archmatter.io/sitemap.xml`. Indexing usually takes days to weeks for a new site.

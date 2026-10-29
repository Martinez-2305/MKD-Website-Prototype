# Moving martkamdigital.com from Vercel to Hostinger

The site is plain HTML, CSS and images with no build step, so Hostinger can
serve the repo exactly as it is. Do the steps in order: the site stays live on
Vercel until the DNS change in step 4, so nothing goes offline.

## What is already prepared in this repo

- **`.htaccess`**: one permanent redirect to `https://www.martkamdigital.com`
  from http and non-www; `/contact.html` redirects to the homepage form; a
  custom 404 page; compression and browser caching; and working files
  (`tools/`, `docs/`, `.claude/`, `.md` notes, `package.json`) return 404.
- **`404.html`**: branded "page not found" page. Hostinger uses it via
  `.htaccess`; Vercel picks it up automatically too.
- **Every local link checked**: all 1,829 links to pages, images, fonts, CSS
  and JS point at files that exist with exactly matching capitalisation.
  Hostinger's servers are case-sensitive, so this matters.
- **`.gitignore`**: personal tool settings and `node_modules` are never
  committed, so they never reach the server.
- **No Vercel-only features are used** (no `vercel.json`, serverless
  functions or image optimisation). Forms post to Formspree, which works from
  any host.

## 1. Connect the repo in hPanel

1. hPanel → **Websites** → **Manage** (martkamdigital.com, or add it as a new
   website first) → **Advanced** → **GIT**.
2. Repository: `https://github.com/Martinez-2305/MKD-Website-Prototype.git`,
   branch `main`, directory left **blank** (deploys into `public_html`).
3. `public_html` must be empty first. Delete Hostinger's default
   `default.php` / `index.php` if present.
4. **Create**, then **Deploy**.
5. Turn on **Auto Deployment** and add the webhook URL it shows to GitHub →
   repo → Settings → Webhooks.

## 2. Check the site on Hostinger's preview address

Before touching DNS, open the temporary Hostinger address and check:

- The homepage, pricing (pay monthly toggle), portfolio and a location page.
- An enquiry form submits (Formspree).
- A made-up address such as `/test-404` shows the branded 404 page.
- `/tools/build-location-pages.mjs` and `/docs/SEO-TODO.md` return 404.

The https/www redirect only matches the real domain, so it will not fire on
the preview address. That is expected.

## 3. SSL

hPanel → **Security** → **SSL**: install the free SSL for both
`martkamdigital.com` and `www.martkamdigital.com`. It may only issue after
the DNS change in step 4; if so, come back to this after propagation.

## 4. Point the domain at Hostinger

Find where the domain's DNS is managed today (the registrar or Vercel), then
either:

- **Change nameservers** to Hostinger's (shown in hPanel), or
- **Keep the current DNS** and change the records: `A` record for `@` to the
  Hostinger IP shown in hPanel, and `CNAME` for `www` to
  `martkamdigital.com` (or the target hPanel gives).

Before changing nameservers, copy any **MX, TXT and other records** across
first, including Google Search Console verification and any email records,
or they will stop working.

DNS usually updates within an hour, sometimes up to 24 hours.

## 5. After the domain is on Hostinger

1. Check these all land on `https://www.martkamdigital.com/` in **one** hop:
   `http://martkamdigital.com`, `https://martkamdigital.com`,
   `http://www.martkamdigital.com`.
2. Response headers should no longer say `server: Vercel`.
3. In Vercel: remove the domain from the project, then disconnect the Git
   repository (Project → Settings → Git) so pushes stop building there.
   Delete the Vercel project only once you are happy.
4. Google Search Console (Domain property, no re-verification needed if the
   DNS TXT record was kept): resubmit `sitemap.xml`, then work through the
   Request Indexing list in `docs/SEO-TODO.md`.

## Updating the site after the move

Edit, commit and push to `main` as now. Hostinger pulls the change through
the webhook. Location pages, the portfolio and the SEO page are generated:
run `npm run build:pages` (or `node tools/build-location-pages.mjs`) after
editing `tools/`, then commit the regenerated `.html` files.

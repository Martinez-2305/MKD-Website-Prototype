/* MartKam Digital: location page generator.
 *
 *   node tools/build-location-pages.mjs
 *
 * Reads per-town copy from location-content.mjs and writes one
 * web-design-<slug>.html per town. Styles are in css/location.css (the
 * "LOCATION PAGE LAYOUT" block); the enquiry form script is js/enquiry-form.js,
 * shared with the homepage.
 *
 * Page order: hero with enquiry form, real work, local introduction, what is
 * included (web design and SEO, tiers kept distinct), prices, how results are
 * measured, process, FAQs, related pages.
 *
 * Everything about prices, packages, the process and the shared FAQs is
 * written once, below, from pricing.html. If pricing.html changes, change it
 * here and rebuild; never per town.
 *
 * Sutton and Cheam are hand-written pages and are not built here yet.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TOWNS } from './location-content.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.martkamdigital.com';

/* Every area page that exists, with the label it is linked by. Related-area
   links only ever point at these, so no link lands on an unrelated page. */
const AREA_PAGES = {
  epsom: 'Web design in Epsom',
  sutton: 'Web design in Sutton',
  cheam: 'Web design in Cheam',
  kingston: 'Web design in Kingston',
  wimbledon: 'Web design in Wimbledon',
  guildford: 'Web design in Guildford',
  woking: 'Web design in Woking',
  richmond: 'Web design in Richmond',
  surbiton: 'Web design in Surbiton',
  reigate: 'Web design in Reigate',
  byfleet: 'Local SEO in Byfleet & West Byfleet',
};
const AREA_NOTES = {
  epsom: 'Where I am based',
  sutton: 'Sutton town centre and the borough',
  cheam: 'Cheam village and the surrounding area',
  kingston: 'Kingston, Surbiton, New Malden and the borough',
  wimbledon: 'Wimbledon and the rest of Merton',
  guildford: 'Guildford and west Surrey',
  woking: 'Woking and the surrounding villages',
  richmond: 'Richmond, Twickenham, Kew and Teddington',
  surbiton: 'Surbiton, Tolworth and the Dittons',
  reigate: 'Reigate, Redhill and the borough',
  byfleet: 'Local SEO first, plus web design',
};

const SERVICE_LINKS = {
  trades: { href: 'web-design-for-trades.html', label: 'Websites for trades and construction', note: 'Builders, electricians, plumbers and other trades' },
  cleaning: { href: 'web-design-for-cleaning-companies.html', label: 'Websites for cleaning companies', note: 'Domestic, commercial and communal cleaning' },
  ecommerce: { href: 'web-design-for-ecommerce.html', label: 'Bookings, ordering and payments', note: 'For sites that take bookings, orders or payments' },
  services: { href: 'services.html', label: 'All services', note: 'Web design, local SEO and Google Business Profile' },
  pricing: { href: 'pricing.html', label: 'Packages and prices', note: 'Everything in each package, the Care Plan and the SEO Retainer' },
  casestudy: { href: 'case-study-cs-cleaning.html', label: 'C&amp;S Cleaning Services case study', note: 'The first three months after launch, with the numbers' },
};

/* Real projects only. The location line says where the client actually is,
   whatever page the card appears on. Quotes are the clients' own words, as
   published on the homepage; do not edit them. */
const PROJECTS = {
  cs: {
    name: 'C&amp;S Cleaning Services',
    sector: 'Communal block cleaning',
    where: 'Based in Sutton, working across Surrey and South West London',
    img: 'work-cs',
    alt: 'Home page of the C&amp;S Cleaning Services website',
    brief: 'A communal-area cleaning contractor with no website and no Google presence, whose buyers are building managers and landlords. The brief was to be findable to those buyers, and credible once they arrived.',
    outcome: 'First three months after launch: <strong>over 5,000 search impressions</strong>, <strong>around 50 clicks</strong>, enquiries coming in, and <strong>one paid job</strong> won through the site.',
    links: [{ href: 'case-study-cs-cleaning.html', label: 'Read the full case study' }],
  },
  stpauls: {
    name: 'St Paul&rsquo;s Cleaning Services',
    sector: 'Domestic cleaning',
    where: 'Based in Epsom, serving the surrounding towns',
    img: 'work-stpauls',
    alt: 'Home page of the St Paul&rsquo;s Cleaning Services website',
    brief: 'A domestic cleaning business serving Epsom and the surrounding towns. The brief was a site that looked the part against bigger competitors and turned up when someone nearby searched for cleaning.',
    quote: '&ldquo;MartKam Digital completely transformed our online presence. Our website looks professional and we&rsquo;re now showing up on Google when local customers search for cleaning services.&rdquo;',
    attrib: 'Andreza &middot; Director',
    links: [{ href: 'https://www.stpaulscleaningservices.co.uk/', label: 'Visit the live site', ext: true }],
  },
  modernus: {
    name: 'Modernus Decoration Projects',
    sector: 'Painting &amp; decorating',
    where: 'Registered in Cheam, working across Central and South West London',
    img: 'work-modernus',
    alt: 'Home page of the Modernus Decoration Projects website',
    brief: 'A decorating firm running entirely on word of mouth. The brief was an online presence that matched the standard of the finished work.',
    quote: '&ldquo;We relied on word of mouth for years but never had a proper online presence. MartKam built us a website and got us ranking on Google. Within weeks we were getting enquiries from customers we&rsquo;d never have reached before.&rdquo;',
    attrib: 'Kamil &middot; Director',
    links: [{ href: 'https://modernusdecorationprojects.co.uk/', label: 'Visit the live site', ext: true }],
  },
};

/* Shared FAQs, answered from pricing.html. Town FAQs come first. */
const SHARED_FAQS = [
  {
    q: 'How much does a website cost?',
    a: 'Three packages, all published. <strong>£595</strong> for Starter, a proven template styled to your brand. <strong>£1,295</strong> for Growth, a custom design with location and service pages. <strong>£1,995</strong> for Bookings &amp; Ordering, which adds bookings or payments. Ongoing SEO is separate, at £199 a month. I am not VAT registered, so the price you see is the price you pay. <a href="pricing.html">See the full pricing</a>.',
  },
  {
    q: 'I already have a website. Can you redesign it?',
    a: 'Yes. A redesign is priced on the same three packages as a new site, because the work is the same: new design, new copy and the SEO groundwork. If some of your current pages already bring in visits, tell me on the first call and I will plan the new site so they are not lost.',
  },
  {
    q: 'Who hosts the site, and what does it cost after launch?',
    a: 'I do, on the Care Plan: £20 a month or £200 a year for hosting, SSL, daily backups, one business email inbox, software and security updates, and up to 30 minutes of content edits a month. It is free for the first 12 months with Growth and Bookings &amp; Ordering, and required for the first 6 months with Starter. Your domain is registered in your name and billed at cost, usually £12 to £15 a year.',
  },
  {
    q: 'What do I need to prepare?',
    a: 'Very little. I write the copy from one 30-minute call: you talk about the business, I write the pages. Send your photos and any logins I need around that call. If you do not have photos, I can use quality stock at no extra cost, and on Growth and Bookings &amp; Ordering I can take care of professional photography for you.',
  },
  {
    q: 'How long does it take?',
    a: 'Two to three weeks on Starter, three to four on Growth, four to six on Bookings &amp; Ordering. The site will be live within 30 days of the clock starting (45 on Bookings &amp; Ordering), or you do not pay the balance until it is. The clock starts once I have your deposit, the content call is done and I have your photos and logins, and it pauses while I am waiting on you.',
  },
  {
    q: 'What support do I get after launch?',
    a: 'Updates go through me, so you never need to learn any software, and I reply within one working day. You get a walkthrough call at handover and Search Console in your name. The Care Plan covers up to 30 minutes of edits a month, such as prices, opening hours or new photos. Changes outside that are £45 an hour. If you want the site to keep growing in search, the SEO Retainer adds a new or improved page every month.',
  },
];

const PROCESS = [
  ['Call', '20 minutes, no charge, with me rather than a salesperson. What the business does, who you want calling you, what is working now.'],
  ['Proposal', 'A fixed price and a fixed scope, in writing.'],
  ['Deposit', '50% books your build slot and is non-refundable. The balance is due on launch.'],
  ['Content call', '30 minutes on the phone. You talk about the business, I write the site. Send photos and any logins at this point.'],
  ['Build and review', 'A first draft, then the revision rounds included in your package.'],
  ['Launch and handover', 'The site goes live, Search Console is transferred to your name, and we do a walkthrough call.'],
];

const stripTags = s => String(s).replace(/<[^>]*>/g, '');
const decode = s => String(s)
  .replace(/&amp;/g, '&').replace(/&rsquo;/g, '’').replace(/&ldquo;/g, '“')
  .replace(/&rdquo;/g, '”').replace(/&middot;/g, '·');
const plain = s => decode(stripTags(s));

const projectCard = (key, i) => {
  const p = PROJECTS[key];
  return `      <article class="work-card">
        <div class="work-shot">
          <div class="work-bar"><span></span><span></span><span></span><em></em></div>
          <picture>
            <source type="image/avif" srcset="img/${p.img}-800.avif 800w, img/${p.img}-1200.avif 1200w" sizes="(max-width:700px) 92vw, (max-width:1060px) 46vw, 30vw">
            <source type="image/webp" srcset="img/${p.img}-800.webp 800w, img/${p.img}-1200.webp 1200w" sizes="(max-width:700px) 92vw, (max-width:1060px) 46vw, 30vw">
            <img loading="lazy" decoding="async" width="1200" height="532" src="img/${p.img}-1200.webp" alt="${p.alt}">
          </picture>
        </div>
        <div class="work-body">
          <h3 class="work-client">${p.name}</h3>
          <div class="work-sector">${p.sector}</div>
          <p class="work-where">${p.where}</p>
          <p class="work-brief">${p.brief}</p>
${p.outcome ? `          <p class="work-outcome">${p.outcome}</p>\n` : ''}${p.quote ? `          <blockquote class="work-quote">${p.quote}</blockquote>\n          <p class="work-attrib">${p.attrib}</p>\n` : ''}          <div class="work-links">
${p.links.map(l => `            <a href="${l.href}"${l.ext ? ' target="_blank" rel="noopener"' : ''}>${l.label}${l.ext ? '<span class="visually-hidden"> (opens in a new tab)</span>' : ''} &rarr;</a>`).join('\n')}
          </div>
        </div>
      </article>`;
};

const tierDesign = `      <div class="lp-inc-card">
        <h3>Web design</h3>
        <p>Every package includes the design, build, launch, the words on the page and the SEO groundwork. What changes is how much is designed from scratch and what the site has to do.</p>
        <div class="lp-tier">
          <h4>Starter <span>&middot; £595 &middot; template</span></h4>
          <p>A proven template styled to your brand: the layout is pre-set, and the colours, type, images and words are yours. Up to 5 pages, live in 2 to 3 weeks.</p>
        </div>
        <div class="lp-tier">
          <h4>Growth <span>&middot; £1,295 &middot; custom design</span></h4>
          <p>Designed around your business rather than templated. Up to 10 pages, including location and service pages aimed at the searches your customers make. Live in 3 to 4 weeks.</p>
        </div>
        <div class="lp-tier">
          <h4>Bookings &amp; Ordering <span>&middot; £1,995 &middot; custom design</span></h4>
          <p>Everything in Growth, plus a booking system or ordering, and Stripe payments. Live in 4 to 6 weeks.</p>
        </div>
      </div>`;

const tierSeo = `      <div class="lp-inc-card">
        <h3>Local SEO</h3>
        <p>Two separate things, priced separately so you can see what you are paying for.</p>
        <div class="lp-tier">
          <h4>SEO setup <span>&middot; included in every build</span></h4>
          <p>Page titles, meta descriptions, heading structure, schema markup, and a sitemap submitted to Google Search Console, with ownership transferred to you. Your Google Business Profile set up or cleaned up. Growth adds keyword research before a word is written.</p>
        </div>
        <div class="lp-tier">
          <h4>SEO Retainer <span>&middot; £199 a month, ongoing</span></h4>
          <p>After launch: a monthly review of your search data, one new page or a rewrite of an existing one, a technical pass, Google Business Profile posts and review management, and a plain-English report. Available with Growth and Bookings &amp; Ordering.</p>
        </div>
        <div class="lp-tier">
          <h4>What I promise, and what I do not</h4>
          <p>I do not promise rankings, or a position by a date. I promise the monthly work, and if a month passes without it, that month is free.</p>
        </div>
      </div>`;

function page(t) {
  const url = `${BASE}/web-design-${t.slug}.html`;
  const place = t.placeName || t.town;
  const faqs = [...t.faqs, ...SHARED_FAQS];

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: plain(t.crumb), item: url },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: plain(t.title),
        description: plain(t.description),
        inLanguage: 'en-GB',
        isPartOf: { '@id': `${BASE}/#website` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        publisher: { '@id': `${BASE}/#organization` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: plain(f.q),
          acceptedAnswer: { '@type': 'Answer', text: plain(f.a) },
        })),
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: t.focus === 'seo' ? `Local SEO and web design in ${t.fullName}` : `Web design in ${t.fullName}`,
        serviceType: t.focus === 'seo' ? 'Local SEO and web design' : 'Web design',
        description: plain(t.schemaDescription),
        url,
        areaServed: { '@type': 'Place', name: `${t.fullName}, ${t.region}` },
        provider: { '@id': `${BASE}/#organization` },
        offers: [
          { '@type': 'Offer', name: 'Starter Site', price: '595', priceCurrency: 'GBP' },
          { '@type': 'Offer', name: 'Growth Site', price: '1295', priceCurrency: 'GBP' },
          { '@type': 'Offer', name: 'Bookings & Ordering Site', price: '1995', priceCurrency: 'GBP' },
        ],
      },
    ],
  };

  const incCards = t.focus === 'seo' ? [tierSeo, tierDesign] : [tierDesign, tierSeo];
  const areaLinks = t.relatedAreas.filter(s => AREA_PAGES[s] && s !== t.slug);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="img/favicon-192.png">
<link rel="apple-touch-icon" href="img/apple-touch-icon.png">

<title>${t.title}</title>
<meta name="description" content="${t.description}">
<meta name="robots" content="index, follow">
<meta name="geo.region" content="${t.geoRegion}">
<meta name="geo.placename" content="${t.fullName}, ${t.region}">
<link rel="canonical" href="${url}">
<script type="application/ld+json">
${JSON.stringify(graph, null, 2)}
</script>

<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${plain(t.h1)} | MartKam Digital">
<meta property="og:description" content="${t.ogDescription}">
<meta property="og:image" content="${BASE}/img/og-image-2026.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="A laptop and phone showing a website built by MartKam Digital">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${BASE}/img/og-image-2026.jpg">

<link rel="preload" href="fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/dmsans-latin.woff2" as="font" type="font/woff2" crossorigin>
<style>
@font-face{font-family:'Fraunces';font-style:normal;font-weight:300 700;font-display:swap;src:url('fonts/fraunces-latin.woff2') format('woff2');}
@font-face{font-family:'Fraunces';font-style:italic;font-weight:300 700;font-display:swap;src:url('fonts/fraunces-italic-latin.woff2') format('woff2');}
@font-face{font-family:'DM Sans';font-style:normal;font-weight:300 600;font-display:swap;src:url('fonts/dmsans-latin.woff2') format('woff2');}
.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}
</style>

<link rel="stylesheet" href="css/location.css">
</head>
<body class="lp">

<!-- NAV -->
<nav>
  <div class="nav-logo"><a href="/"><img decoding="async" width="320" height="167" src="img/logo-320.webp" alt="MartKam Digital home"></a></div>
  <div class="tubelight-nav" id="tlNav">
    <div class="tl-bg-pill" id="tlBg"></div>
    <div class="tl-lamp-wrap" id="tlLamp"><div class="tl-lamp-bar"><div class="tl-lamp-glow3"></div></div></div>
    <a href="/" class="tl-item">Home</a>
    <a href="about.html" class="tl-item">About Me</a>
    <a href="services.html" class="tl-item">Services</a>
    <a href="reviews.html" class="tl-item">Reviews</a>
    <a href="pricing.html" class="tl-item">Pricing</a>
    <a href="contact.html" class="tl-item">Contact</a>
  </div>
  <a href="#enquire" class="nav-cta">Let's Talk</a>
  <button class="ham-btn" id="hamBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mobMenu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- MOBILE MENU -->
<div class="mob-menu" id="mobMenu">
  <div class="mob-menu-inner">
    <a href="/" class="mob-item">Home</a>
    <a href="about.html" class="mob-item">About Me</a>
    <a href="services.html" class="mob-item">Services</a>
    <a href="reviews.html" class="mob-item">Reviews</a>
    <a href="pricing.html" class="mob-item">Pricing</a>
    <a href="contact.html" class="mob-item">Contact</a>
    <a href="#enquire" class="mob-cta">Let's Talk</a>
  </div>
</div>

<main id="main">

<!-- HERO: copy left, enquiry form right; stacked on phones -->
<section class="hero">
  <div class="hero-grid">
    <div class="hero-intro">
      <p class="lp-crumbs"><a href="/">Home</a><span aria-hidden="true">&rsaquo;</span><a href="index.html#areas">Areas I cover</a><span aria-hidden="true">&rsaquo;</span>${t.crumb}</p>
      <h1>${t.h1}</h1>
      <p class="lp-benefit">${t.benefit}</p>
      <p class="hero-lede">${t.heroCopy}</p>
      <a href="#enquire" class="btn-hero-primary hero-jump">Enquire about your project</a>
      <div class="hero-trust">
        <div class="hero-by">
          <img decoding="async" width="224" height="224" src="img/faceofmkd-face-224.webp" alt="Martin Kaminski, founder of MartKam Digital" class="hero-by-photo">
          <span class="hero-by-text">
            <span class="hero-by-name">Martin Kaminski</span>
            <span class="hero-by-role">${t.role}</span>
          </span>
        </div>
        <p class="hero-proof">C&amp;S Cleaning Services, a communal cleaning contractor based in Sutton, received enquiries and won a paid job through their new website within three months of launch. <a href="case-study-cs-cleaning.html">Read the case study</a></p>
        <div class="hero-links">
          <a href="pricing.html">See packages &amp; prices</a>
          <a href="#work">View my work</a>
        </div>
      </div>
    </div>

    <div class="hf-card" id="enquire">
      <h2 id="hf-title">Tell me about your project</h2>
      <p class="hf-desc" id="hf-desc">Need a new website or help getting found on Google? Send me a few details and I&rsquo;ll reply personally with the next steps.</p>
      <form id="heroForm" class="js-enquiry" data-form-id="location_hero" action="https://formspree.io/f/meepbpqw" method="POST" aria-labelledby="hf-title" aria-describedby="hf-desc">
        <input type="hidden" name="_subject" value="New enquiry from the ${plain(place)} page">
        <input type="hidden" name="form_source" value="Location page: ${plain(place)}">
        <div class="hf-hp" aria-hidden="true">
          <label for="hf-gotcha">Leave this field empty</label>
          <input type="text" name="_gotcha" id="hf-gotcha" tabindex="-1" autocomplete="off">
        </div>
        <div class="hf-alert" id="hf-alert" role="alert" hidden></div>
        <div class="hf-field">
          <label for="hf-name">Your name</label>
          <input type="text" name="name" id="hf-name" autocomplete="name" autocapitalize="words" required aria-describedby="hf-name-error">
          <p class="hf-error" id="hf-name-error" hidden></p>
        </div>
        <div class="hf-field">
          <label for="hf-email">Email address</label>
          <input type="email" name="email" id="hf-email" autocomplete="email" spellcheck="false" required aria-describedby="hf-email-error">
          <p class="hf-error" id="hf-email-error" hidden></p>
        </div>
        <div class="hf-field">
          <label for="hf-service">What do you need help with?</label>
          <select name="service" id="hf-service" required aria-describedby="hf-service-error">
            <option value="" disabled selected>Please choose&hellip;</option>
            <option>New website</option>
            <option>Website redesign</option>
            <option>SEO / Google visibility</option>
            <option>Not sure yet</option>
          </select>
          <p class="hf-error" id="hf-service-error" hidden></p>
        </div>
        <div class="hf-field">
          <label for="hf-message">Tell me a little about your project <span class="hf-opt">(optional)</span></label>
          <textarea name="message" id="hf-message" rows="2" maxlength="2000"></textarea>
        </div>
        <button type="submit" class="hf-submit">Send my enquiry</button>
        <p class="hf-reassure">No obligation. Your message comes directly to Martin.</p>
        <p class="hf-privacy">How I use your details: <a href="privacy-policy.html">Privacy Policy</a></p>
      </form>
      <p class="hf-success" id="hf-success" tabindex="-1" hidden>Thanks, your enquiry has been sent. I&rsquo;ll reply personally to the email address you provided.</p>
    </div>
  </div>
</section>

<!-- REAL WORK -->
<section class="work" id="work">
  <div class="wrap">
    <div class="work-head">
      <span class="label">Recent work</span>
      <h2>Real sites, <em>for real businesses.</em></h2>
      <p>Three of the businesses I build and run websites for. Each card says where the client is actually based, so you can see exactly what the evidence covers.</p>
    </div>
    <div class="work-grid">
${t.projects.map(projectCard).join('\n')}
    </div>
  </div>
</section>

<!-- LOCAL INTRODUCTION -->
<section class="section" id="local">
  <div class="wrap">
    <span class="label">${t.introLabel}</span>
    <h2 class="section-title">${t.introHeading}</h2>
    <div class="lp-intro-grid">
      <div class="lp-prose">
${t.intro.map(p => `        <p>${p}</p>`).join('\n')}
      </div>
      <div class="lp-aside">
        <div class="lp-note">
          <h3>Who I usually build for</h3>
          <ul>
${t.whoFor.map(w => `            <li>${w}</li>`).join('\n')}
          </ul>
        </div>
        <div class="lp-note">
          <h3>Meeting and working together</h3>
          <p>${t.meeting}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT IS INCLUDED -->
<section class="section lp-inc" id="included">
  <div class="wrap">
    <span class="label">What is included</span>
    <h2 class="section-title">${t.focus === 'seo' ? 'Local SEO, <em>and the website behind it</em>' : 'Web design, <em>with the SEO groundwork built in</em>'}</h2>
    <div class="lp-inc-grid">
${incCards.join('\n')}
    </div>
  </div>
</section>

<!-- PRICES -->
<section class="section" id="prices">
  <div class="wrap">
    <span class="label">Prices</span>
    <h2 class="section-title">Three packages, <em>prices published</em></h2>
    <p class="section-intro">The same prices for every town I work in. Copywriting and the SEO groundwork are included in all three.</p>
    <div class="lp-plans">
      <div class="lp-plan">
        <h3>Starter Site</h3>
        <p class="lp-price">£595</p>
        <p>For new businesses that need somewhere credible to send people.</p>
        <ul>
          <li>Template, styled to your brand</li>
          <li>Up to 5 pages, copy written for you</li>
          <li>Basic SEO setup</li>
          <li>Care Plan required for 6 months</li>
          <li>Live in 2 to 3 weeks</li>
        </ul>
      </div>
      <div class="lp-plan is-pick">
        <p class="lp-plan-flag">Most businesses want this one</p>
        <h3>Growth Site</h3>
        <p class="lp-price">£1,295</p>
        <p>For established businesses who want the phone to ring.</p>
        <ul>
          <li>Custom design</li>
          <li>Up to 10 pages, including location and service pages</li>
          <li>Full SEO setup and keyword research</li>
          <li>Professional photography if you need it</li>
          <li>Care Plan free for 12 months</li>
          <li>Live in 3 to 4 weeks</li>
        </ul>
      </div>
      <div class="lp-plan">
        <h3>Bookings &amp; Ordering Site</h3>
        <p class="lp-price">£1,995</p>
        <p>For businesses taking orders, bookings or payments online.</p>
        <ul>
          <li>Custom design, plus booking or ordering system</li>
          <li>Stripe payments</li>
          <li>Professional photography if you need it</li>
          <li>Advanced SEO setup, first month of the SEO Retainer free</li>
          <li>Care Plan free for 12 months</li>
          <li>Live in 4 to 6 weeks</li>
        </ul>
      </div>
    </div>
    <p class="lp-small"><strong>After launch:</strong> the Care Plan is £20 a month or £200 a year for hosting, SSL, daily backups, updates and 30 minutes of edits a month. The SEO Retainer is £199 a month, with a 6-month minimum on Growth and 12 months on Bookings &amp; Ordering. I am not VAT registered. <a href="pricing.html">See everything in each package</a>.</p>
  </div>
</section>

<!-- HOW RESULTS ARE MEASURED -->
<section class="section lp-inc" id="results">
  <div class="wrap">
    <span class="label">Measuring results</span>
    <h2 class="section-title">How you will know <em>it is working</em></h2>
    <p class="section-intro">You should be able to see whether the site is doing its job without taking my word for it.</p>
    <div class="lp-cols3">
      <div class="lp-box">
        <h3>Search Console, in your name</h3>
        <p>Google Search Console shows which searches your site appears for, how often, and how many people click. I set it up and transfer ownership to you at handover, so the data is yours.</p>
      </div>
      <div class="lp-box">
        <h3>Enquiries you can count</h3>
        <p>Form enquiries arrive in your inbox, and each one says which page it was sent from. Keeping a note of calls and messages as well lets us compare months honestly.</p>
      </div>
      <div class="lp-box">
        <h3>A report you can read</h3>
        <p>On the SEO Retainer you get a plain-English report every month showing clicks, enquiries and what changes next. The Care Plan includes a quarterly performance summary.</p>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="section" id="process">
  <div class="wrap">
    <span class="label">How it works</span>
    <h2 class="section-title">From first call <em>to launch</em></h2>
    <ol class="lp-steps">
${PROCESS.map(([h, p]) => `      <li><h3>${h}</h3><p>${p}</p></li>`).join('\n')}
    </ol>
  </div>
</section>

<!-- FAQ -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-layout">
      <div class="faq-left">
        <span class="faq-eyebrow">FAQ</span>
        <h2 class="faq-title">Questions about<br><em>working with me</em></h2>
        <p class="faq-subtitle">Something else on your mind? Ask in the enquiry form and I&rsquo;ll reply personally.</p>
        <a href="#enquire" class="faq-contact-cta">Ask me a question &rarr;</a>
      </div>
      <div class="faq-list">
${faqs.map((f, i) => `        <div class="faq-item">
          <button class="faq-btn" aria-expanded="false" aria-controls="faq-${i}">
            <span class="faq-question">${f.q}</span>
            <span class="faq-icon" aria-hidden="true"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="6" y1="1" x2="6" y2="11"/><line x1="1" y1="6" x2="11" y2="6"/></svg></span>
          </button>
          <div class="faq-body" id="faq-${i}"><div class="faq-body-inner">
            <p class="faq-answer">${f.a}</p>
          </div></div>
        </div>`).join('\n')}
      </div>
    </div>
  </div>
</section>

<!-- RELATED PAGES -->
<section class="lp-related">
  <div class="wrap">
    <div class="lp-related-grid">
      <div>
        <h2>Related services</h2>
        <ul>
${t.relatedServices.map(k => SERVICE_LINKS[k]).map(l => `          <li><a href="${l.href}">${l.label}</a><span>${l.note}</span></li>`).join('\n')}
        </ul>
      </div>
      <div>
        <h2>Nearby areas</h2>
        <ul>
${areaLinks.map(s => `          <li><a href="web-design-${s}.html">${AREA_PAGES[s].replace(/&(?!amp;)/g, '&amp;')}</a><span>${AREA_NOTES[s]}</span></li>`).join('\n')}
          <li><a href="index.html#areas">Every area I cover</a><span>The full list, across Surrey and South West London</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <h2>Tell me about your<br><em>${plain(place).replace(/&/g, '&amp;')} project.</em></h2>
  <p>Prices published &middot; Copy written for you &middot; One person doing the work</p>
  <a href="#enquire" class="btn-cta">Go to the enquiry form</a>
</section>

</main>

<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <img loading="lazy" decoding="async" width="320" height="167" src="img/logo-320.webp" alt="MartKam Digital">
      <p>Web design and local SEO for businesses across Surrey and South West London.</p>
      <div class="footer-social">
        <a href="https://www.facebook.com/share/1HmyjG7r2K/" target="_blank" rel="noopener" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="https://www.instagram.com/martkam_digital" target="_blank" rel="noopener" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://share.google/xvQ0x2yGNj0gT0dC1" target="_blank" rel="noopener" aria-label="Google Business Profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        </a>
      </div>
    </div>
    <div class="footer-col">
      <h3>Services</h3>
      <ul>
        <li><a href="services.html">All services</a></li>
        <li><a href="pricing.html">Packages &amp; prices</a></li>
        <li><a href="web-design-for-trades.html">Trades &amp; construction</a></li>
        <li><a href="web-design-for-cleaning-companies.html">Cleaning companies</a></li>
        <li><a href="web-design-for-ecommerce.html">Bookings &amp; ordering</a></li>
        <li><a href="case-study-cs-cleaning.html">C&amp;S Cleaning case study</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h3>Areas I cover</h3>
      <ul>
${Object.keys(AREA_PAGES).map(s => `        <li><a href="web-design-${s}.html">${AREA_PAGES[s].replace(/&(?!amp;)/g, '&amp;')}</a></li>`).join('\n')}
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; <span class="yr">2026</span> MartKam Digital. Web design &amp; local SEO &middot; Surrey &amp; South West London.</span>
    <div class="footer-bottom-links">
      <a href="privacy-policy.html">Privacy Policy</a>
      <a href="terms.html">Terms &amp; Conditions</a>
      <a href="privacy-policy.html#cookies">Cookie Policy</a>
    </div>
  </div>
</footer>
<script>document.querySelectorAll(".yr").forEach(function(e){e.textContent=new Date().getFullYear();});</script>

<script>
const tlNav = document.getElementById('tlNav');
const tlBg  = document.getElementById('tlBg');
const tlLamp = document.getElementById('tlLamp');
const tlItems = document.querySelectorAll('.tl-item');
function movePill(el) {
  const nr = tlNav.getBoundingClientRect(), er = el.getBoundingClientRect();
  tlBg.style.cssText = \`left:\${er.left-nr.left}px;top:\${er.top-nr.top}px;width:\${er.width}px;height:\${er.height}px;\`;
  tlLamp.style.cssText = \`left:\${er.left-nr.left+er.width/2}px;top:\${er.top-nr.top}px;\`;
}
tlItems.forEach(item => {
  item.addEventListener('mouseenter', () => movePill(item));
});
const hamBtn = document.getElementById('hamBtn');
const mobMenu = document.getElementById('mobMenu');
function setMenu(open) {
  hamBtn.classList.toggle('open', open);
  mobMenu.classList.toggle('open', open);
  hamBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.style.overflow = open ? 'hidden' : '';
}
hamBtn.addEventListener('click', () => setMenu(!mobMenu.classList.contains('open')));
document.querySelectorAll('.mob-item, .mob-cta').forEach(item => item.addEventListener('click', () => setMenu(false)));
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item'), body = item.querySelector('.faq-body');
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.faq-btn.open').forEach(b => {
      b.classList.remove('open'); b.setAttribute('aria-expanded','false');
      b.closest('.faq-item').querySelector('.faq-body').classList.remove('open');
    });
    if (!isOpen) { btn.classList.add('open'); btn.setAttribute('aria-expanded','true'); body.classList.add('open'); }
  });
});
</script>
<script src="js/enquiry-form.js" defer></script>
</body>
</html>
`;
}

let written = 0;
for (const t of TOWNS) {
  const file = path.join(ROOT, `web-design-${t.slug}.html`);
  fs.writeFileSync(file, page(t), 'utf8');
  console.log(`  web-design-${t.slug}.html  ${(fs.statSync(file).size / 1024).toFixed(1)}KB`);
  written++;
}
console.log(`\n${written} location pages written.`);

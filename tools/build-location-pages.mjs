/* MartKam Digital — location page generator.
 *
 *   node tools/build-location-pages.mjs
 *
 * Reads hand-written per-town copy from location-content.mjs and emits one
 * web-design-<slug>.html per town. The skeleton below (nav, trust bar,
 * testimonial, footer, scripts) is deliberately identical across pages —
 * differentiation comes from the copy, not the chrome.
 *
 * Styles live in css/location.css. Only the @font-face block stays inline so
 * fonts start downloading without waiting on the stylesheet request.
 *
 * NO CASE STUDY SECTION BY DESIGN. Each real client story belongs to exactly
 * one page — St Paul's Cleaning to Epsom, Modernus to Cheam, C&S Cleaning to
 * Sutton. Repeating one client's story across every town page is duplicate
 * content and reads as filler. When a genuine local story exists for a town,
 * add it to that town only.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TOWNS } from './location-content.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.martkamdigital.com';

/* Towns that have their own page. Everything else points at the homepage
   coverage list, so we never emit a link to a file that does not exist. */
const HAS_PAGE = new Set(['epsom', 'sutton', 'cheam', ...TOWNS.map(t => t.slug)]);

/* Display names for cross-link targets that may not have their own page yet. */
const LABELS = {
  epsom: 'Epsom', sutton: 'Sutton', cheam: 'Cheam', kingston: 'Kingston',
  wimbledon: 'Wimbledon', guildford: 'Guildford', woking: 'Woking',
  richmond: 'Richmond', surbiton: 'Surbiton', reigate: 'Reigate',
  byfleet: 'Byfleet', 'hampton-court': 'Hampton Court', tolworth: 'Tolworth',
  'raynes-park': 'Raynes Park', putney: 'Putney', merton: 'Merton',
  morden: 'Morden', tooting: 'Tooting', chessington: 'Chessington',
  farnham: 'Farnham', dorking: 'Dorking', leatherhead: 'Leatherhead',
  redhill: 'Redhill', tadworth: 'Tadworth', weybridge: 'Weybridge',
  chertsey: 'Chertsey', bagshot: 'Bagshot', hersham: 'Hersham',
};

const esc = s => String(s).replace(/&(?!(?:[a-zA-Z]+|#\d+);)/g, '&amp;');
const stripTags = s => String(s).replace(/<[^>]*>/g, '');
const jsonEsc = s => JSON.stringify(stripTags(s));

const locLink = slug => {
  const label = LABELS[slug] || slug;
  const href = HAS_PAGE.has(slug) ? `web-design-${slug}.html` : 'index.html#areas';
  return `      <a href="${href}" class="loc-tag">Web Design ${esc(label)}</a>`;
};

function page(t) {
  const url = `${BASE}/web-design-${t.slug}.html`;

  /* Per-town hero image. Falls back to the shared hero until a town supplies
     its own, so nothing points at a file that does not exist yet. Paths are
     relative to the page (site root), not to css/. */
  const heroWide = t.heroImage?.wide || 'img/hero-slide-1536.webp';
  const heroNarrow = t.heroImage?.narrow || 'img/hero-slide-768.webp';
  const heroOverride = t.heroImage
    ? `<style>
.page-hero-bg{background-image:url('${heroWide}');}
@media (max-width:820px){.page-hero-bg{background-image:url('${heroNarrow}');}}
</style>
`
    : '';

  const faqSchema = {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: t.faqs.map(f => ({
      '@type': 'Question',
      name: stripTags(f.q),
      acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) },
    })),
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: `Web Design ${t.town}`, item: url },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: t.title,
        description: t.description,
        inLanguage: 'en-GB',
        isPartOf: { '@id': `${BASE}/#website` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        publisher: { '@id': `${BASE}/#organization` },
      },
      faqSchema,
    ],
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `Web Design & Local SEO in ${t.fullName}`,
    serviceType: 'Web design and local SEO',
    description: t.schemaDescription,
    url,
    areaServed: { '@type': 'Place', name: `${t.fullName}, ${t.region}` },
    provider: {
      '@type': 'ProfessionalService',
      '@id': `${BASE}/#organization`,
      name: 'MartKam Digital',
      url: `${BASE}/`,
      telephone: '+447456848388',
      email: 'contact@martkamdigital.com',
      address: { '@type': 'PostalAddress', addressRegion: 'Surrey', addressCountry: 'GB' },
      geo: { '@type': 'GeoCoordinates', latitude: 51.3685, longitude: -0.2642 },
      sameAs: [
        'https://www.facebook.com/share/1HmyjG7r2K/',
        'https://www.instagram.com/martkam_digital',
      ],
    },
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="img/favicon-192.png">
<link rel="apple-touch-icon" href="img/apple-touch-icon.png">

<title>${esc(t.title)}</title>
<meta name="description" content="${esc(t.description)}">
<meta name="robots" content="index, follow">
<meta name="geo.region" content="${t.geoRegion}">
<meta name="geo.placename" content="${esc(t.fullName)}, ${esc(t.region)}">
<link rel="canonical" href="${url}">
<script type="application/ld+json">
${JSON.stringify(graph, null, 2)}
</script>

<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="Web Design ${esc(t.town)} | MartKam Digital">
<meta property="og:description" content="${esc(t.ogDescription)}">
<meta property="og:image" content="${BASE}/img/og-image.jpg">

<script type="application/ld+json">
${JSON.stringify(service, null, 2)}
</script>
<link rel="preload" as="image" href="${heroWide}" media="(min-width:821px)" fetchpriority="high">
<link rel="preload" as="image" href="${heroNarrow}" media="(max-width:820px)" fetchpriority="high">
<link rel="preload" href="fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/dmsans-latin.woff2" as="font" type="font/woff2" crossorigin>
<style>
@font-face{font-family:'Fraunces';font-style:normal;font-weight:300 700;font-display:swap;src:url('fonts/fraunces-latin.woff2') format('woff2');}
@font-face{font-family:'Fraunces';font-style:italic;font-weight:300 700;font-display:swap;src:url('fonts/fraunces-italic-latin.woff2') format('woff2');}
@font-face{font-family:'DM Sans';font-style:normal;font-weight:300 600;font-display:swap;src:url('fonts/dmsans-latin.woff2') format('woff2');}
</style>

<link rel="stylesheet" href="css/location.css">
${heroOverride}</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo"><img  decoding="async" width="320" height="167" src="img/logo-320.webp" alt="MartKam Digital"></div>
  <div class="tubelight-nav" id="tlNav">
    <div class="tl-bg-pill" id="tlBg"></div>
    <div class="tl-lamp-wrap" id="tlLamp"><div class="tl-lamp-bar"><div class="tl-lamp-glow3"></div></div></div>
    <a href="/" class="tl-item">Home</a>
    <a href="about.html" class="tl-item">About Us</a>
    <a href="services.html" class="tl-item">Services</a>
    <a href="reviews.html" class="tl-item">Reviews</a>
    <a href="index.html#contact" class="tl-item">Contact</a>
  </div>
  <a href="index.html#contact" class="nav-cta">Let's Talk</a>
  <button class="ham-btn" id="hamBtn" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- MOBILE MENU -->
<div class="mob-menu" id="mobMenu">
  <div class="mob-menu-inner">
    <a href="/" class="mob-item">Home</a>
    <a href="about.html" class="mob-item">About Us</a>
    <a href="services.html" class="mob-item">Services</a>
    <a href="reviews.html" class="mob-item">Reviews</a>
    <a href="index.html#contact" class="mob-item">Contact</a>
    <a href="index.html#contact" class="mob-cta">Let's Talk</a>
  </div>
</div>

<main id="main">

<!-- HERO -->
<section class="page-hero">
  <div class="page-hero-bg"></div>
  <div class="page-hero-content">
    <div class="hero-breadcrumb">
      <a href="/">MartKam Digital</a>
      <span>&rsaquo;</span>
      <a href="services.html">Services</a>
      <span>&rsaquo;</span>
      Web Design ${esc(t.town)}
    </div>
    <span class="hero-tag">${esc(t.heroTag)}</span>
    <h1>${esc(t.h1)}</h1>
    <p>${esc(t.heroCopy)}</p>
    <div class="hero-btns">
      <a href="index.html#contact" class="btn-primary">Get a Free Quote</a>
      <a href="services.html" class="btn-outline">See What We Do</a>
    </div>
  </div>
</section>

<!-- TRUST BAR -->
<div class="trust-bar">
  <div class="trust-inner">
    <div class="trust-item"><span class="trust-num">5&#9733;</span><span class="trust-label">Google Rated</span></div>
    <div class="trust-div"></div>
    <div class="trust-item"><span class="trust-num">2&ndash;4</span><span class="trust-label">Weeks to Launch</span></div>
    <div class="trust-div"></div>
    <div class="trust-item"><span class="trust-num">100%</span><span class="trust-label">Client Satisfaction</span></div>
    <div class="trust-div"></div>
    <div class="trust-item"><span class="trust-num">Free</span><span class="trust-label">Consultation</span></div>
    <div class="trust-div"></div>
    <div class="trust-item"><span class="trust-num">Local</span><span class="trust-label">Surrey Based</span></div>
  </div>
</div>

<!-- LOCAL INTRO -->
<section class="section" id="local">
  <div class="wrap">
    <div class="fade-up">
      <span class="label">Web Design &middot; ${esc(t.town)}</span>
      <h2 class="section-title">${esc(t.introHeading)}</h2>
    </div>
    <div class="local-intro-grid">
      <div class="fade-up fade-up-d1">
${t.intro.map(p => `        <p>${esc(p)}</p>`).join('\n')}
      </div>
      <div class="fade-up fade-up-d2">
        <div class="local-checklist">
${t.checklist.map(c => `          <div class="local-check">${esc(c)}</div>`).join('\n')}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LOCAL INSIGHT -->
<section class="section" id="local-insight" style="background:var(--mist);">
  <div class="wrap">
    <div class="fade-up" style="max-width:720px;">
      <span class="label">${esc(t.insightLabel)}</span>
      <h2 class="section-title">${esc(t.insightHeading)}</h2>
      <p class="section-intro">${esc(t.insightIntro)}</p>
    </div>
    <div class="why-grid">
${t.insightCards.map((c, i) => `      <div class="why-card fade-up${i ? ` fade-up-d${i}` : ''}">
        <div class="why-icon">${c.icon}</div>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.body)}</p>
      </div>`).join('\n')}
    </div>
    <p class="section-intro fade-up" style="max-width:780px;margin-top:40px;">${esc(t.insightClose)}</p>
  </div>
</section>

<!-- SERVICES -->
<section class="section">
  <div class="wrap">
    <div style="text-align:center;max-width:600px;margin:0 auto;" class="fade-up">
      <span class="label">${esc(t.servicesLabel)}</span>
      <h2 class="section-title">${esc(t.servicesHeading)}</h2>
    </div>
    <div class="srv-grid">
${t.services.map((s, i) => `      <div class="srv-card fade-up${i ? ` fade-up-d${i}` : ''}">
        <div class="srv-badge">Core Service</div>
        <div class="srv-icon">${s.icon}</div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.body)}</p>
        <ul class="srv-feats">
${s.feats.map(f => `          <li>${esc(f)}</li>`).join('\n')}
        </ul>
      </div>`).join('\n')}
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-layout">
      <div class="faq-left fade-up">
        <span class="faq-eyebrow">FAQ</span>
        <h2 class="faq-title">${esc(t.faqHeading)}</h2>
        <p class="faq-subtitle">Something else on your mind? We love a straight-talking conversation &mdash; no obligation.</p>
        <a href="index.html#contact" class="faq-contact-cta">Ask us anything &rarr;</a>
      </div>
      <div class="faq-list fade-up fade-up-d2">
${t.faqs.map(f => `        <div class="faq-item">
          <button class="faq-btn" aria-expanded="false">
            <span class="faq-question">${esc(f.q)}</span>
            <span class="faq-icon"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="6" y1="1" x2="6" y2="11"/><line x1="1" y1="6" x2="11" y2="6"/></svg></span>
          </button>
          <div class="faq-body"><div class="faq-body-inner">
            <p class="faq-answer">${esc(f.a)}</p>
          </div></div>
        </div>`).join('\n')}
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-banner">
  <h2>${esc(t.ctaHeading)}</h2>
  <p>Free consultation &middot; No obligation &middot; Based in Surrey</p>
  <a href="index.html#contact" class="btn-cta">Get Your Free Quote Today</a>
</section>

<!-- LOCATION LINKS -->
<div class="location-links">
  <div class="location-links-inner">
    <p>We also provide web design services across:</p>
    <div class="loc-tags">
${t.nearby.map(locLink).join('\n')}
      <a href="index.html#areas" class="loc-tag">All Areas We Cover</a>
    </div>
  </div>
</div>

</main>

<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <img loading="lazy" decoding="async" width="320" height="167" src="img/logo-320.webp" alt="MartKam Digital">
      <p>Web design, SEO and digital services for local businesses across Surrey and South West London.</p>
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
        <li><a href="services.html">Website Design &amp; Build</a></li>
        <li><a href="services.html">SEO &amp; Google Rankings</a></li>
        <li><a href="services.html">Google Business Profile</a></li>
        <li><a href="services.html">IT Troubleshooting</a></li>
        <li><a href="services.html">Hosting &amp; Domains</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h3>Areas We Serve</h3>
      <ul>
        <li><a href="web-design-kingston.html">Web Design Kingston</a></li>
        <li><a href="web-design-wimbledon.html">Web Design Wimbledon</a></li>
        <li><a href="web-design-guildford.html">Web Design Guildford</a></li>
        <li><a href="web-design-epsom.html">Web Design Epsom</a></li>
        <li><a href="index.html#areas">All areas we cover</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; <span class="yr">2026</span> MartKam Digital. Web Design &amp; SEO &middot; Surrey &amp; South West London.</span>
    <div class="footer-bottom-links">
      <a href="privacy-policy.html">Privacy Policy</a>
      <a href="terms.html">Terms &amp; Conditions</a>
      <a href="privacy-policy.html#cookies">Cookie Policy</a>
    </div>
  </div>
</footer>
<script>document.querySelectorAll(".yr").forEach(function(e){e.textContent=new Date().getFullYear();});</script>

<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
// IntersectionObserver reports initial visibility on its first callback, so
// elements already in view are revealed without reading layout synchronously.
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
const tlNav = document.getElementById('tlNav');
const tlBg  = document.getElementById('tlBg');
const tlLamp = document.getElementById('tlLamp');
const tlItems = document.querySelectorAll('.tl-item');
function movePill(el) {
  const nr = tlNav.getBoundingClientRect(), er = el.getBoundingClientRect();
  tlBg.style.cssText = \`left:\${er.left-nr.left}px;top:\${er.top-nr.top}px;width:\${er.width}px;height:\${er.height}px;\`;
  tlLamp.style.cssText = \`left:\${er.left-nr.left+er.width/2}px;top:\${er.top-nr.top}px;\`;
}
const activeItem = tlNav.querySelector('.tl-item.active');
if (activeItem) requestAnimationFrame(() => movePill(activeItem));
tlItems.forEach(item => {
  item.addEventListener('mouseenter', () => movePill(item));
  item.addEventListener('mouseleave', () => { const a = tlNav.querySelector('.tl-item.active'); if (a) movePill(a); });
});
const hamBtn = document.getElementById('hamBtn');
const mobMenu = document.getElementById('mobMenu');
hamBtn.addEventListener('click', () => { hamBtn.classList.toggle('open'); mobMenu.classList.toggle('open'); });
document.querySelectorAll('.mob-item, .mob-cta').forEach(item => {
  item.addEventListener('click', () => { hamBtn.classList.remove('open'); mobMenu.classList.remove('open'); });
});
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

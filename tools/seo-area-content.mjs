/* MartKam Digital: content for the seo-<town>.html pages.
 *
 * These are the SEO lane: each targets "seo <town>" searches, links up to
 * seo-services.html (the hub) and across to the matching web-design page.
 * Byfleet's SEO page is web-design-byfleet.html (it already ranks, so it keeps
 * its URL) and is not listed here.
 *
 * Copy approved by Martin on 2026-11-07 (docs/SEO-POSITIONING-PROPOSALS.md).
 * Same fact policy as location-content.mjs: no invented clients or results,
 * no ranking promises, first person, no em dashes.
 */

export const SEO_AREAS = [
  {
    slug: 'epsom',
    town: 'Epsom',
    region: 'Surrey',
    geoRegion: 'GB-SRY',
    title: 'SEO Services in Epsom | Local SEO for Small Businesses | MartKam Digital',
    description:
      'Local SEO for Epsom and Ewell businesses, from an SEO consultant based in Epsom. Keyword research, a new page every month and plain-English reports. From £199 a month.',
    ogDescription:
      'Local SEO for Epsom and Ewell businesses, from a consultant based in Epsom. From £199 a month, with reports you can check.',
    schemaDescription:
      'Local SEO for small businesses in Epsom and Ewell, Surrey: keyword research, new and improved pages every month, Google Business Profile management and plain-English reporting.',
    h1: 'SEO services in Epsom',
    benefit: 'Be one of the businesses on the first page when someone in Epsom searches for what you do.',
    heroCopy:
      'When someone in Epsom or Ewell searches for what you do, the businesses on the first page get the calls. Local SEO is the work that puts you there. I am based in Epsom, so I know the area, the competition and the searches people here actually make.',
    role: 'Based in Epsom, running SEO for local businesses',
    searchExamples: 'from &ldquo;plumber Epsom&rdquo; to &ldquo;end of tenancy cleaning Ewell&rdquo;',
    heroProof:
      'St Paul&rsquo;s Cleaning Services, an Epsom cleaning business: 10 enquiries through their website in two months, and at least two have already become booked jobs.',
    heroProofLink: { href: '#results', label: 'See the results' },

    introHeading: 'Local SEO <em>for Epsom businesses</em>',
    intro: [
      'Local SEO is not a trick or a single setting. It is a site Google understands, pages for the services and areas you cover, a complete Google Business Profile, and steady improvement every month.',
      'Epsom, Ewell and Stoneleigh are searched for separately, and so are the villages around them. If you cover several, your site should say so plainly, on pages written for those searches, rather than one page with a list of place names at the bottom.',
      '<strong>I do not promise a ranking position</strong>, and nobody honest can. What I can show you is the work and the numbers, in your own Search Console: which searches you appear for, how many people click, and how many enquiries arrive.',
    ],
    whoFor: [
      'Trades and home services covering Epsom and Ewell',
      'Cleaning and property-services businesses',
      'Clinics, salons and studios in and around the town centre',
      'Businesses with a website that looks fine but brings in few enquiries',
    ],
    areas:
      'Epsom, Ewell, Stoneleigh, Tadworth, Ashtead, Leatherhead and the rest of Surrey and South West London. I am based here, so meeting in person is easy if you would like to.',

    resultsHeading: 'Results <em>from a local client</em>',
    resultsIntro: [
      'St Paul&rsquo;s Cleaning Services serve Epsom and the surrounding towns. Over two months their site brought in 10 enquiries through its form, and at least two have already become booked jobs. Their director&rsquo;s own words are on the card below.',
      'C&amp;S Cleaning Services, a Sutton contractor, went from no Google presence to over 5,000 search impressions and around 50 clicks within three months, and the site is generating enquiries.',
    ],
    projects: ['stpauls', 'cs'],

    webDesignPage: { href: 'web-design-epsom.html', label: 'Epsom case studies &amp; prices', note: 'Need a website too? Packages, prices and Epsom work' },

    faqs: [
      {
        q: 'How much does local SEO cost in Epsom?',
        a: 'The SEO Retainer is <strong>£199 a month</strong>, with a 3-month first term, then 30 days&rsquo; notice. I am not VAT registered, so that is the full price. The SEO setup is included in every website I build, and an audit of a site I did not build is free. <a href="pricing.html#seo-retainer">Full SEO Retainer terms</a>.',
      },
      { q: 'How long does SEO take to work?', a: 'SHARED_TIME' },
      {
        q: 'Do I need a new website for SEO?',
        a: 'Not always. If your current site can be worked with, the free audit will say so, and the retainer is the same £199 a month. A Starter site is built on a template, so it moves up to Growth first. If your site is holding you back, I will say so plainly and recommend a rebuild.',
      },
      {
        q: 'How do I choose an SEO consultant in Epsom?',
        a: 'Look for published prices, reports you can check yourself in your own Search Console, and someone who will not guarantee rankings, because nobody outside Google can. Ask who actually does the work and how often you will hear from them. With me it is one person, based in Epsom, and a plain-English report every month.',
      },
    ],
  },

  {
    slug: 'wimbledon',
    town: 'Wimbledon',
    region: 'South West London',
    geoRegion: 'GB-MRT',
    title: 'SEO Agency in Wimbledon | Local SEO Services | MartKam Digital',
    description:
      'Local SEO for Wimbledon and Merton businesses: keyword research, a new page every month, Google Business Profile and plain-English reports. From £199 a month.',
    ogDescription:
      'Local SEO for Wimbledon and Merton businesses. From £199 a month, with reports you can check yourself.',
    schemaDescription:
      'Local SEO for small businesses in Wimbledon and the London Borough of Merton: keyword research, new and improved pages every month, Google Business Profile management and plain-English reporting.',
    h1: 'SEO services in Wimbledon',
    benefit: 'Be one of the businesses on the first page when someone in Wimbledon searches for what you do.',
    heroCopy:
      'When someone in Wimbledon searches for what you do, the businesses on the first page get the calls. Local SEO is the work that puts you there: a site Google understands, pages for the services and areas you cover, a complete Google Business Profile, and steady improvement every month.',
    role: 'Based in Epsom, running SEO across South West London',
    searchExamples: 'from &ldquo;electrician Wimbledon&rdquo; to &ldquo;end of tenancy cleaning Raynes Park&rdquo;',
    heroProof:
      'C&amp;S Cleaning Services, who clean communal blocks across Wimbledon, went from no Google presence to over 5,000 search impressions and around 50 clicks within three months, and the site is generating enquiries.',
    heroProofLink: { href: 'case-study-cs-cleaning.html', label: 'Read the case study' },

    introHeading: 'Local SEO <em>for Wimbledon businesses</em>',
    intro: [
      'Local SEO is a list of specific jobs: making sure Google understands what you do and where, building pages that answer the searches people really make, keeping your Google Business Profile complete and active, and fixing the technical problems that stop pages being found.',
      'Wimbledon Village, the town centre, South Wimbledon and Raynes Park are searched for by name, and so are the neighbouring parts of Merton. If you cover several, your site should say so plainly, on pages written for those searches.',
      '<strong>I do not promise a ranking position</strong>, and nobody honest can. What I can show you is the work and the numbers, in your own Search Console: which searches you appear for, how many people click, and how many enquiries arrive.',
    ],
    whoFor: [
      'Trades and home services across Wimbledon and Merton',
      'Cleaning and property-services businesses',
      'Shops, cafés, clinics and salons in the Village and the town centre',
      'Businesses with a website that looks fine but brings in few enquiries',
    ],
    areas:
      'Wimbledon Village, Wimbledon town centre, South Wimbledon, Raynes Park, Merton Park, Morden, Colliers Wood, Southfields and the rest of South West London and Surrey. I am based in Epsom, so meeting in person is easy if you would like to. Most of the work runs over phone and video.',

    resultsHeading: 'Real numbers, <em>from real clients</em>',
    resultsIntro: [
      'C&amp;S Cleaning Services clean the communal areas of blocks across Wimbledon, Epsom, Sutton and Kingston. They went from no Google presence to over 5,000 search impressions and around 50 clicks within three months, and the site is generating enquiries.',
      'Modernus Decoration Projects work across Central and South West London. Their director&rsquo;s own words are on the card below.',
    ],
    projects: ['cs', 'modernus'],

    webDesignPage: { href: 'web-design-wimbledon.html', label: 'Web design in Wimbledon', note: 'Need a website too? Packages and prices for Wimbledon businesses' },

    faqs: [
      {
        q: 'How much does local SEO cost in Wimbledon?',
        a: 'The SEO Retainer is <strong>£199 a month</strong>, the same as everywhere I work, with a 3-month first term, then 30 days&rsquo; notice. I am not VAT registered, so that is the full price. The SEO setup is included in every website I build, and an audit of a site I did not build is free. <a href="pricing.html#seo-retainer">Full SEO Retainer terms</a>.',
      },
      { q: 'How long does SEO take to work?', a: 'SHARED_TIME' },
      {
        q: 'Do you have clients in Wimbledon?',
        a: 'C&amp;S Cleaning Services, one of my clients, clean communal blocks across Wimbledon, and their site is set up to be found for that work. They are based in Sutton, and I will not claim a Wimbledon-based client I do not have. I am based in Epsom and work with businesses across South West London and Surrey.',
      },
      {
        q: 'Do I need a new website for SEO?',
        a: 'Not always. If your current site can be worked with, the free audit will say so, and the retainer is the same £199 a month. A Starter site is built on a template, so it moves up to Growth first. If your site is holding you back, I will say so plainly and recommend a rebuild.',
      },
    ],
  },
];

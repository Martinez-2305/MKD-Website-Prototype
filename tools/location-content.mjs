/* MartKam Digital: per-town content for the location pages.
 *
 * Only what genuinely differs between towns lives here: the headline and
 * benefit, the introduction, the areas and business types, which projects
 * lead, the town's own FAQs and which pages it links to. Prices, package
 * inclusions, the process, measurement and the shared FAQs are in
 * build-location-pages.mjs, written once from pricing.html so they cannot
 * drift apart between pages.
 *
 * FACT POLICY
 * - No invented statistics, clients, offices or results. The only results
 *   quoted anywhere are the C&S case study figures and the clients' own words.
 * - No local-history filler and no "easy to rank here" claims. Local detail is
 *   limited to the places a business here would actually cover and the kind
 *   of businesses that operate there.
 * - Where I am based and how meetings work must match pricing.html: most
 *   work is remote, and I meet in person where that is practical.
 * - First person, and no em dashes.
 */

export const TOWNS = [
  /* ---------------------------------------------------------------- 1 */
  {
    slug: 'woking',
    town: 'Woking',
    fullName: 'Woking',
    region: 'Surrey',
    geoRegion: 'GB-SRY',
    focus: 'design',

    title: 'Web Design Woking | Websites with Local SEO | MartKam Digital',
    description:
      'Web design for Woking businesses, with local SEO groundwork in every build. Copy written for you, published prices from £595, and one person doing the work.',
    ogDescription:
      'Websites for Woking businesses, with the copy and local SEO groundwork included. Prices published up front.',
    schemaDescription:
      'Web design, with local SEO groundwork included, for businesses in Woking, Surrey.',

    crumb: 'Web design in Woking',
    h1: 'Web design for Woking businesses',
    benefit: 'A website that says clearly what you do, and brings in enquiries from people searching nearby.',
    heroCopy:
      'I design and build websites for businesses across Woking and the villages around it. Every site includes the words, the SEO groundwork and a contact form that reaches you, and the prices are published before you get in touch.',
    role: 'Based in Epsom, building websites for Woking businesses',

    projects: ['cs', 'stpauls', 'modernus'],

    introLabel: 'Web design in Woking',
    introHeading: 'What I build for <em>Woking businesses</em>',
    intro: [
      'Most of the businesses I work with sell a service: trades, cleaning, decorating, clinics and small professional firms. Their website has three jobs. Tell a visitor straight away what you do and where you work. Show enough proof to earn their trust. Make contacting you easy on a phone.',
      'For a Woking business that usually means a clear home page, a page for each main service, and pages for the areas you actually cover, whether that is the town centre, Horsell, Knaphill, Goldsworth Park or the Byfleets. Location and service pages come with the <a href="pricing.html">Growth package</a>, because they are the pages that match what people type into Google.',
      'I write the copy for you from one 30-minute call, so there is no blank page waiting for you. Then I set up the SEO groundwork: page titles, descriptions, headings, schema, a sitemap submitted to Google Search Console, and your Google Business Profile set up or tidied.',
    ],
    whoFor: [
      'Trades and home services taking calls and quote requests',
      'Cleaning companies, domestic and commercial',
      'Clinics, salons and studios that need online bookings',
      'Small professional practices that are mostly found by referral',
    ],
    meeting:
      'I am based in Epsom. Most projects run over phone and video, and the one call that has to happen is the 30-minute content call. If you would rather meet in person in Woking, tell me and I will arrange it.',

    faqs: [
      {
        q: 'Do you work with businesses across the Borough of Woking?',
        a: 'Yes, including Horsell, Knaphill, St Johns, Sheerwater, Byfleet and West Byfleet, and with firms in Guildford, Weybridge and further afield. Most of the work happens over phone and video, so where you are matters less than whether we can talk.',
      },
      {
        q: 'Should my site have a page for every area I cover?',
        a: 'Only for areas you genuinely serve and can say something useful about. A page per village with the name swapped is thin content, and Google treats it that way. On the Growth package I plan these pages from keyword research, so each one targets searches people actually make.',
      },
    ],

    relatedAreas: ['byfleet', 'guildford', 'kingston', 'epsom'],
    relatedServices: ['trades', 'cleaning', 'casestudy', 'pricing'],
  },

  /* ---------------------------------------------------------------- 2 */
  {
    slug: 'byfleet',
    town: 'Byfleet',
    placeName: 'Byfleet & West Byfleet',
    fullName: 'Byfleet and West Byfleet',
    region: 'Surrey',
    geoRegion: 'GB-SRY',
    // Search Console showed SEO-led demand here, so this page leads on SEO.
    focus: 'seo',

    title: 'Local SEO & Web Design Byfleet & West Byfleet | MartKam Digital',
    description:
      'Local SEO and web design for businesses in Byfleet and West Byfleet. The SEO setup in every build, an optional monthly plan, and reporting you can check yourself.',
    ogDescription:
      'Local SEO and web design for Byfleet and West Byfleet businesses, with the work and the numbers visible to you.',
    schemaDescription:
      'Local SEO and web design for businesses in Byfleet and West Byfleet, Surrey.',

    crumb: 'Local SEO in Byfleet & West Byfleet',
    h1: 'Local SEO and web design in Byfleet &amp; West Byfleet',
    benefit: 'Be visible when people nearby search for what you do, with a site that makes contacting you easy.',
    heroCopy:
      'I set up and run local SEO for businesses in Byfleet, West Byfleet and the surrounding area, and build the websites that work depends on. On the monthly plan, you get a plain-English report showing what was done and what it changed.',
    role: 'Based in Epsom, working with Byfleet and West Byfleet businesses',

    projects: ['cs', 'modernus', 'stpauls'],

    introLabel: 'Local SEO in Byfleet & West Byfleet',
    introHeading: 'What local SEO <em>actually involves</em>',
    intro: [
      'Local SEO is not a trick or a single setting. It is a list of specific jobs: making sure Google understands what you do and where, building pages that answer the searches people really make, keeping your Google Business Profile complete and active, and fixing the technical problems that stop pages being found.',
      'Byfleet and West Byfleet are separate villages with their own centres, and people search for each by name. If you serve both, along with places like Pyrford, New Haw or Weybridge, your site should say so plainly, on pages written for those searches rather than one page with a list of place names at the bottom.',
      '<strong>I do not promise a ranking position</strong>, and nobody honest can. What I can show you is the work and the numbers: which searches your site appears for, how many people click through, and how many enquiries arrive. The section on measurement below explains where each of those numbers comes from.',
    ],
    whoFor: [
      'Trades and callout services covering the Byfleets, Pyrford and Weybridge',
      'Cleaning and home-service businesses',
      'Local shops, cafés and salons with a Google Business Profile to look after',
      'Businesses with a website that looks fine but brings in nothing',
    ],
    meeting:
      'I am based in Epsom. Most of the work runs over phone and video, and monthly SEO reports are written to be read without a call. If you would rather meet in person, tell me and I will arrange it.',

    faqs: [
      {
        q: 'Is Byfleet big enough for SEO to be worth it?',
        a: 'That depends on your business more than the size of the village. If people search for what you do in Byfleet, West Byfleet or nearby, being visible for those searches is worth having. I look at real search data for your service before recommending anything, and if the monthly plan is not worth it for you, I will say so.',
      },
      {
        q: 'What is the difference between the SEO setup and the monthly SEO plan?',
        a: 'Every site I build includes the SEO setup: titles, descriptions, headings, schema, a sitemap and Search Console set up in your name, plus your Google Business Profile. Growth adds keyword research and location and service pages. The SEO Retainer is the ongoing work after launch, at £199 a month: a search data review, one new or rewritten page, a technical pass, Google Business Profile posts and review management, and a plain-English report.',
      },
      {
        q: 'Can you do SEO on a website someone else built?',
        a: 'The SEO Retainer runs on sites I have built on the Growth or Bookings &amp; Ordering package, because the monthly work means changing and adding pages. If your current site is holding you back, the first step is a rebuild, and I will tell you on the first call whether that is worth doing.',
      },
      {
        q: 'Do you cover West Byfleet as well as Byfleet?',
        a: 'Yes. They are distinct villages and people search for them separately, so if you serve both, the site should target both rather than blurring them into one.',
      },
    ],

    relatedAreas: ['woking', 'guildford', 'kingston', 'epsom'],
    relatedServices: ['trades', 'casestudy', 'services', 'pricing'],
  },

  /* ---------------------------------------------------------------- 3 */
  {
    slug: 'kingston',
    town: 'Kingston',
    fullName: 'Kingston upon Thames',
    region: 'South West London',
    geoRegion: 'GB-KTT',
    focus: 'design',

    title: 'Web Design Kingston upon Thames | Local SEO | MartKam Digital',
    description:
      'Web design for Kingston upon Thames businesses: shops, trades, clinics and service firms. Copy and local SEO groundwork included, prices published from £595.',
    ogDescription:
      'Websites for shops, trades and service businesses in Kingston upon Thames, with local SEO groundwork included.',
    schemaDescription:
      'Web design, with local SEO groundwork included, for businesses in Kingston upon Thames, South West London.',

    crumb: 'Web design in Kingston',
    h1: 'Web design for Kingston businesses',
    benefit: 'Clear, fast websites for shops, trades and service businesses across Kingston upon Thames.',
    heroCopy:
      'Whether you run a shop in the town centre, a van covering the borough, or a clinic or studio taking bookings, I build a site that explains what you do, shows your work and makes it easy to get in touch. The copy and SEO groundwork are included.',
    role: 'Based in Epsom, building websites for Kingston businesses',

    projects: ['modernus', 'cs', 'stpauls'],

    introLabel: 'Web design in Kingston',
    introHeading: 'Sites for shops, trades <em>and service businesses</em>',
    intro: [
      'Kingston businesses are not all shopfronts. Plenty of people searching here want a plumber in Surbiton, a cleaner in New Malden or a decorator in Tolworth, and the businesses that serve them run from a van or a small office rather than a high street unit.',
      'The website has a different job in each case. A trade needs quick calls and quote requests from a phone. A clinic, salon or studio usually needs bookings, which the <a href="web-design-for-ecommerce.html">Bookings &amp; Ordering package</a> covers. A shop or café needs its opening hours, location and Google Business Profile kept right as much as it needs a website.',
      'In every case I write the copy with you on a single call, build the site by hand rather than on a page builder, and set up the SEO groundwork so Google can understand what you do and where you do it.',
    ],
    whoFor: [
      'Trades and home services covering Kingston, Surbiton and New Malden',
      'Shops, cafés and restaurants in and around the town centre',
      'Clinics, salons and studios taking bookings',
      'Cleaning and property-services firms',
    ],
    meeting:
      'I am based in Epsom. Most projects run over phone and video. If you would rather meet in person in Kingston, tell me and I will arrange it.',

    faqs: [
      {
        q: 'Do you work with trades and service businesses, or only shops?',
        a: 'Mostly trades and service businesses, in fact. The three sites on this page are for two cleaning companies and a decorating firm. I also build for shops, cafés, salons and clinics, and the Bookings &amp; Ordering package covers taking bookings and payments online.',
      },
      {
        q: 'Do you cover Surbiton, New Malden and the rest of the borough?',
        a: 'Yes. I work across the Royal Borough of Kingston upon Thames, including Surbiton, New Malden, Tolworth and Chessington, and with businesses in Richmond and Wimbledon. Most of the work runs over phone and video.',
      },
    ],

    relatedAreas: ['surbiton', 'richmond', 'wimbledon', 'epsom'],
    relatedServices: ['trades', 'ecommerce', 'cleaning', 'pricing'],
  },

  /* ---------------------------------------------------------------- 4 */
  {
    slug: 'wimbledon',
    town: 'Wimbledon',
    fullName: 'Wimbledon',
    region: 'South West London',
    geoRegion: 'GB-MRT',
    focus: 'design',

    title: 'Web Design Wimbledon | Local SEO | MartKam Digital',
    description:
      'Web design for businesses in Wimbledon and across Merton, with copy and local SEO groundwork included. Published prices from £595.',
    ogDescription:
      'Websites for Wimbledon and Merton businesses, with copy and local SEO groundwork included.',
    schemaDescription:
      'Web design, with local SEO groundwork included, for businesses in Wimbledon, South West London.',

    crumb: 'Web design in Wimbledon',
    h1: 'Web design for Wimbledon businesses',
    benefit: 'A website that tells local customers what you do and where, and makes getting in touch simple.',
    heroCopy:
      'I build websites for businesses in Wimbledon Village, the town centre and the rest of Merton. The copy is written for you, the SEO groundwork is included, and the prices are published up front.',
    role: 'Based in Epsom, building websites for Wimbledon businesses',

    projects: ['modernus', 'stpauls', 'cs'],

    introLabel: 'Web design in Wimbledon',
    introHeading: 'Say where you are, <em>and who you serve</em>',
    intro: [
      'Wimbledon Village and the town centre around the station are different places with different customers, and people often search for them by name. A site that names the area you actually work in, and the neighbourhoods you cover such as Raynes Park, Morden or Merton Park, gives Google and your customers a clearer picture than one that just says "London".',
      'For a service business, the site needs a page for each main service and a simple way to call or send an enquiry. For a shop, café or salon, it needs accurate hours, location and a Google Business Profile that matches the site.',
    ],
    whoFor: [
      'Independent shops, cafés and salons',
      'Trades and home services across Merton',
      'Clinics and studios taking bookings',
    ],
    meeting:
      'I am based in Epsom. Most projects run over phone and video, and I can meet in person in Wimbledon if you prefer.',

    faqs: [
      {
        q: 'Do you cover Raynes Park, Morden and the rest of Merton?',
        a: 'Yes. I work with businesses across the London Borough of Merton, and in neighbouring Kingston and Richmond.',
      },
    ],

    relatedAreas: ['kingston', 'richmond', 'surbiton', 'sutton'],
    relatedServices: ['trades', 'ecommerce', 'pricing', 'casestudy'],
  },

  /* ---------------------------------------------------------------- 5 */
  {
    slug: 'guildford',
    town: 'Guildford',
    fullName: 'Guildford',
    region: 'Surrey',
    geoRegion: 'GB-SRY',
    focus: 'design',

    title: 'Web Design Guildford | Local SEO | MartKam Digital',
    description:
      'Web design for Guildford businesses, with copy and local SEO groundwork included. Published prices from £595, and one person doing the work.',
    ogDescription:
      'Websites for Guildford businesses, with copy and local SEO groundwork included.',
    schemaDescription:
      'Web design, with local SEO groundwork included, for businesses in Guildford, Surrey.',

    crumb: 'Web design in Guildford',
    h1: 'Web design for Guildford businesses',
    benefit: 'A clear, credible website that explains what you do and turns visits into enquiries.',
    heroCopy:
      'I build websites for businesses in Guildford and the villages around it, from trades and cleaning firms to clinics and professional practices. Copy and SEO groundwork are included in every package.',
    role: 'Based in Epsom, building websites for Guildford businesses',

    projects: ['cs', 'stpauls', 'modernus'],

    introLabel: 'Web design in Guildford',
    introHeading: 'Built for how your <em>customers decide</em>',
    intro: [
      'Many Guildford businesses sell to people who compare two or three firms before they pick up the phone, whether that is a homeowner choosing a trade or another business choosing a supplier. The site has to answer their questions before they ask: what you do, where you work, what it costs or how pricing works, and what past customers said.',
      'If you cover more than the town itself, such as Godalming, Cranleigh or the villages along the A3, the Growth package adds pages for those areas, planned from keyword research rather than guesswork.',
    ],
    whoFor: [
      'Trades and home services',
      'Professional practices and B2B suppliers',
      'Clinics, salons and studios taking bookings',
    ],
    meeting:
      'I am based in Epsom. Most projects run over phone and video, and I can meet in person in Guildford if you prefer.',

    faqs: [
      {
        q: 'Do you cover Woking, Godalming and the rest of west Surrey?',
        a: 'Yes. I work with businesses across Guildford borough and west Surrey, including Woking, Godalming and the Byfleets.',
      },
    ],

    relatedAreas: ['woking', 'byfleet', 'reigate', 'epsom'],
    relatedServices: ['trades', 'cleaning', 'pricing', 'casestudy'],
  },

  /* ---------------------------------------------------------------- 6 */
  {
    slug: 'richmond',
    town: 'Richmond',
    fullName: 'Richmond upon Thames',
    region: 'South West London',
    geoRegion: 'GB-RIC',
    focus: 'design',

    title: 'Web Design Richmond upon Thames | Local SEO | MartKam Digital',
    description:
      'Web design for businesses in Richmond, Twickenham and across the borough, with copy and local SEO groundwork included. Published prices from £595.',
    ogDescription:
      'Websites for Richmond upon Thames businesses, with copy and local SEO groundwork included.',
    schemaDescription:
      'Web design, with local SEO groundwork included, for businesses in Richmond upon Thames, South West London.',

    crumb: 'Web design in Richmond',
    h1: 'Web design for Richmond businesses',
    benefit: 'A website that works for regular customers and first-time visitors alike.',
    heroCopy:
      'I build websites for shops, hospitality and service businesses in Richmond, Twickenham, Kew and Teddington. The copy is written for you, the SEO groundwork is included, and the prices are published.',
    role: 'Based in Epsom, building websites for Richmond businesses',

    projects: ['modernus', 'stpauls', 'cs'],

    introLabel: 'Web design in Richmond',
    introHeading: 'For regulars <em>and first-time visitors</em>',
    intro: [
      'Richmond businesses often serve two groups: residents who already know them, and visitors who find them on a phone nearby. The first group needs up-to-date hours, prices and a quick way to book or order. The second needs to understand in seconds what you are and where to find you.',
      'For shops, cafés and restaurants, a complete Google Business Profile matters as much as the website, so I set it up or tidy it as part of every build and make sure the two agree.',
    ],
    whoFor: [
      'Shops, cafés and restaurants',
      'Salons, clinics and studios taking bookings',
      'Trades and home services across the borough',
    ],
    meeting:
      'I am based in Epsom. Most projects run over phone and video, and I can meet in person in Richmond if you prefer.',

    faqs: [
      {
        q: 'Is a Google Business Profile more important than a website?',
        a: 'For a café or shop, it is often where people find you first, so it has to be right. But the profile links to your website, and the website is where people check your menu, services or prices before deciding. I set up or tidy the profile as part of every build.',
      },
      {
        q: 'Do you cover Twickenham, Kew and the rest of the borough?',
        a: 'Yes. I work across the London Borough of Richmond upon Thames, and in neighbouring Kingston and Wimbledon.',
      },
    ],

    relatedAreas: ['kingston', 'wimbledon', 'surbiton', 'epsom'],
    relatedServices: ['ecommerce', 'trades', 'pricing', 'casestudy'],
  },

  /* ---------------------------------------------------------------- 7 */
  {
    slug: 'surbiton',
    town: 'Surbiton',
    fullName: 'Surbiton',
    region: 'South West London',
    geoRegion: 'GB-KTT',
    focus: 'design',

    title: 'Web Design Surbiton | Local SEO | MartKam Digital',
    description:
      'Web design for Surbiton businesses, with copy and local SEO groundwork included. Published prices from £595.',
    ogDescription:
      'Websites for Surbiton businesses, with copy and local SEO groundwork included.',
    schemaDescription:
      'Web design, with local SEO groundwork included, for businesses in Surbiton, South West London.',

    crumb: 'Web design in Surbiton',
    h1: 'Web design for Surbiton businesses',
    benefit: 'A fast, clear website that makes it easy for local customers to choose you.',
    heroCopy:
      'I build websites for independents and service businesses in Surbiton, Tolworth, Berrylands and the Dittons. The copy is written for you and the SEO groundwork is included.',
    role: 'Based in Epsom, building websites for Surbiton businesses',

    projects: ['modernus', 'cs', 'stpauls'],

    introLabel: 'Web design in Surbiton',
    introHeading: 'Where Surbiton <em>and Kingston overlap</em>',
    intro: [
      'Surbiton sits inside the Royal Borough of Kingston, and many customers search for both names. If you serve both, the site should say so plainly, with the areas you actually cover, rather than picking one and hoping.',
      'For independents on Victoria Road and Brighton Road, that means accurate hours, location and a Google Business Profile that matches the site. For trades and home services, it means a page for each service and a quick way to call or ask for a quote.',
    ],
    whoFor: [
      'Independent shops, cafés and salons',
      'Trades and home services across the borough',
      'Clinics and studios taking bookings',
    ],
    meeting:
      'I am based in Epsom. Most projects run over phone and video, and I can meet in person in Surbiton if you prefer.',

    faqs: [
      {
        q: 'Should my site target Surbiton or Kingston?',
        a: 'Target the areas you genuinely serve. If that is both, the site can cover both with separate pages on the Growth package, each written for the searches people make there.',
      },
    ],

    relatedAreas: ['kingston', 'richmond', 'wimbledon', 'epsom'],
    relatedServices: ['trades', 'ecommerce', 'pricing', 'casestudy'],
  },

  /* ---------------------------------------------------------------- 8 */
  {
    slug: 'reigate',
    town: 'Reigate',
    fullName: 'Reigate',
    region: 'Surrey',
    geoRegion: 'GB-SRY',
    focus: 'design',

    title: 'Web Design Reigate | Local SEO | MartKam Digital',
    description:
      'Web design for businesses in Reigate, Redhill and across the borough, with copy and local SEO groundwork included. Published prices from £595.',
    ogDescription:
      'Websites for Reigate and Redhill businesses, with copy and local SEO groundwork included.',
    schemaDescription:
      'Web design, with local SEO groundwork included, for businesses in Reigate, Surrey.',

    crumb: 'Web design in Reigate',
    h1: 'Web design for Reigate businesses',
    benefit: 'A website that turns your local reputation into enquiries from people who have not heard of you yet.',
    heroCopy:
      'I build websites for businesses in Reigate, Redhill and the surrounding area. The copy is written for you, the SEO groundwork is included, and the prices are published.',
    role: 'Based in Epsom, building websites for Reigate businesses',

    projects: ['stpauls', 'cs', 'modernus'],

    introLabel: 'Web design in Reigate',
    introHeading: 'When word of mouth <em>is not enough</em>',
    intro: [
      'Plenty of established Reigate businesses were built on referrals. That works until the referrals slow down, or a new resident compares three local firms on Google and picks the one with the clearer website. Two of the businesses shown on this page ran on word of mouth before their sites went live.',
      'If you cover Redhill, Merstham, Horley or Banstead as well as Reigate, the Growth package adds pages for those areas, planned from keyword research.',
    ],
    whoFor: [
      'Established trades and home services',
      'Professional practices',
      'Shops, cafés and salons in the town centre',
    ],
    meeting:
      'I am based in Epsom. Most projects run over phone and video, and I can meet in person in Reigate if you prefer.',

    faqs: [
      {
        q: 'My business runs on word of mouth. Is a website worth it?',
        a: 'Referrals often end with the person looking you up before they call. A clear website confirms they have found the right business, and it also brings in people outside your existing network. Modernus Decoration Projects and C&amp;S Cleaning Services both ran on word of mouth before their sites went live.',
      },
      {
        q: 'Do you cover Redhill, Horley and the rest of the borough?',
        a: 'Yes. I work across Reigate and Banstead, and nearby Epsom, Dorking and Leatherhead.',
      },
    ],

    relatedAreas: ['epsom', 'sutton', 'guildford', 'kingston'],
    relatedServices: ['trades', 'cleaning', 'pricing', 'casestudy'],
  },

  /* ------------------------------------------------------------ Epsom
     Reviewed separately. The homepage also targets Epsom, so this page keeps
     its own URL, canonical, title and description, and earns its place with
     what the homepage does not have: the local client, the nearby areas and
     in-person meetings. Do not merge it into the homepage without first
     checking which searches each page gets in Search Console. */
  {
    slug: 'epsom',
    town: 'Epsom',
    fullName: 'Epsom',
    region: 'Surrey',
    geoRegion: 'GB-SRY',
    focus: 'design',

    // Title and description kept exactly as they were live.
    title: 'Web Designer in Epsom & Ewell | Local SEO | MartKam',
    description:
      'A local web designer covering Epsom, Ewell, Stoneleigh and Tadworth. Websites, Google Business Profile and local SEO for businesses on your doorstep.',
    ogDescription:
      'Websites and local SEO for businesses in Epsom and Ewell, from a web designer based in the town.',
    schemaDescription:
      'Web design and local SEO for businesses in Epsom and Ewell, Surrey.',

    crumb: 'Web design in Epsom',
    h1: 'Web design for Epsom businesses',
    benefit: 'A website that brings in local enquiries, from a web designer based in the town.',
    heroCopy:
      'I build websites and handle local SEO for businesses in Epsom, Ewell, Stoneleigh and Tadworth. The copy is written for you, the SEO groundwork is included, and because I am based here, meeting in person is easy.',
    role: 'Based in Epsom, working with local businesses',

    projects: ['stpauls', 'cs', 'modernus'],

    introLabel: 'Web design in Epsom',
    introHeading: 'Local work, <em>from someone local</em>',
    intro: [
      'Epsom has a broad mix of businesses: trades and home services, cleaning companies, hospitality, healthcare and professional practices, from the town centre out to Ewell, Stoneleigh and the streets around the Downs.',
      'One of the sites on this page is for an Epsom business. St Paul&rsquo;s Cleaning Services serve Epsom and the surrounding towns. I built their website and set up their Google Business Profile, and their director&rsquo;s own words are on the card above.',
      'For most Epsom businesses the site needs a page for each main service, clear coverage of the areas you serve, such as Ewell, Stoneleigh, Tadworth or Ashtead, and a quick way to call or send an enquiry. Location and service pages come with the <a href="pricing.html">Growth package</a>.',
    ],
    whoFor: [
      'Trades and home services',
      'Cleaning companies, domestic and commercial',
      'Clinics, salons and studios taking bookings',
      'Professional practices and local shops',
    ],
    meeting:
      'I am based in Epsom, so meeting in person is straightforward if you would like to. Plenty of clients prefer phone and video, and that works just as well.',

    faqs: [
      {
        q: 'Do you also cover Ewell, Stoneleigh and areas near Epsom?',
        a: 'Yes. I work across Epsom and Ewell, including Stoneleigh and Tadworth, as well as Chessington, Surbiton and the rest of Surrey and South West London. I also work remotely with businesses anywhere in the UK.',
      },
      {
        q: 'Can you help my Epsom business rank on Google?',
        a: 'I build the site so Google understands what you do and where, set up your Google Business Profile, and on the SEO Retainer keep adding and improving pages every month. I do not promise a ranking position, because nobody outside Google controls that. You will see the searches, clicks and enquiries in your own Search Console.',
      },
    ],

    relatedAreas: ['sutton', 'cheam', 'kingston', 'reigate'],
    relatedServices: ['cleaning', 'trades', 'casestudy', 'pricing'],
  },
];

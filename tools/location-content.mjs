/* MartKam Digital — per-town content for the location pages.
 *
 * Every string in here is hand-written per town. Nothing is templated except
 * the page skeleton in build-location-pages.mjs (nav, trust bar, footer, JS).
 *
 * FACT POLICY: no invented statistics. Every factual claim below is drawn from
 * a public, verifiable source — see `sources` on each town. If you add a town,
 * either cite a real source or stick to descriptive detail (streets, landmarks,
 * transport, business mix). Do not make numbers up: they end up on a live
 * commercial site with your name on them.
 */

export const TOWNS = [
  {
    slug: 'kingston',
    town: 'Kingston',
    fullName: 'Kingston upon Thames',
    region: 'South West London',
    geoRegion: 'GB-KTT',
    heroTag: 'Kingston upon Thames',
    nearby: ['surbiton', 'richmond', 'wimbledon', 'chessington', 'tolworth', 'hampton-court'],
    sources: [
      'https://en.wikipedia.org/wiki/Bentall_Centre,_Kingston_upon_Thames',
      'https://en.wikipedia.org/wiki/Eden_Walk',
    ],

    title: 'Web Design & SEO Kingston | MartKam Digital',
    description:
      'Fast, mobile-friendly websites for businesses in Kingston upon Thames. Local SEO, Google Business Profile setup and web design that ranks.',
    ogDescription:
      'Custom websites and local SEO for businesses in Kingston upon Thames. Ranked websites, real enquiries — free consultation available.',
    schemaDescription:
      'Web design and local SEO services for small businesses in Kingston upon Thames, South West London.',

    h1: 'Your Kingston shopfront is only half the battle.<br><em>The other half happens on Google.</em>',
    heroCopy:
      'Kingston is one of South West London\'s biggest retail centres — which means local independents are competing for attention against national brands. We build websites that help Kingston businesses win the searches those chains can\'t buy.',

    introHeading: 'Helping Kingston businesses<br><em>stand out in a crowded town centre</em>',
    intro: [
      'Kingston upon Thames is a genuine retail heavyweight. The Bentall Centre alone runs to around 365,000 sq ft across four floors, and Eden Walk has been drawing shoppers into the town centre since 1968. Add the Ancient Market Place, the riverside and Kingston University, and you have a town where footfall is never the problem.',
      '<strong>Visibility is.</strong> When a Kingston independent sits a few doors from a national chain, it is not competing on marketing budget — it is competing on whether it shows up when someone nearby searches. The chains have entire teams for that. Most local businesses have nobody.',
      'That gap is the opportunity. Local search is one of the few channels where a well-built small business site genuinely outranks a national brand, because Google weights proximity and relevance heavily for local intent. We build Kingston websites specifically to take that ground.',
    ],
    checklist: [
      'Custom website built around your Kingston business and its customers',
      'Local SEO targeting Kingston, Surbiton, New Malden and the Royal Borough',
      'Google Business Profile setup so you appear in Maps and the local pack',
      'Mobile-first design — town-centre searches are overwhelmingly on phones',
      'Fast-loading pages that hold attention on a busy high street',
      'Clear calls-to-action that turn browsers into booked work',
      'Full training included — you stay in control of your own site',
      'Ongoing support after launch — we are in your corner',
    ],

    insightLabel: 'Local Insight · Kingston',
    insightHeading: 'What makes ranking in Kingston<br><em>different from anywhere else</em>',
    insightIntro:
      'Kingston is not a typical suburban high street, and the search landscape reflects that. Three things shape how local businesses get found here.',
    insightCards: [
      {
        icon: '🏬',
        title: 'You are bidding against national brands',
        body:
          'The Bentall Centre brings together roughly 75 stores of the kind you would normally find in the West End. Those retailers have national SEO budgets. For a local business, competing on generic terms like "shops in Kingston" is a losing game — the win is in specific, high-intent local searches where relevance beats spend.',
      },
      {
        icon: '🎓',
        title: 'A young, mobile-first audience',
        body:
          'Kingston University puts a large student population in the town centre, alongside commuters and weekend shoppers from across the Royal Borough. This is an audience that finds businesses on a phone, decides in seconds, and never sees a desktop site. If your pages are slow on mobile, you have already lost them.',
      },
      {
        icon: '🍽️',
        title: 'Hospitality lives and dies on local search',
        body:
          'The riverside restaurant strip and the streets around the Ancient Market Place are dense with food and drink businesses competing for the same evening trade. Google Business Profile, review volume and up-to-date opening hours do more for these businesses than almost anything else you could spend money on.',
      },
    ],
    insightClose:
      'The practical takeaway for a Kingston business: do not try to out-shout the chains. Get the local fundamentals right — a fast mobile site, a properly configured Google Business Profile, and pages that answer the specific thing someone is searching for — and you will consistently appear above competitors who have never bothered.',

    servicesLabel: 'What We Do in Kingston',
    servicesHeading: 'Everything your Kingston business<br><em>needs to compete online</em>',
    services: [
      {
        icon: '🎨',
        title: 'Website Design & Build',
        body:
          'A fully custom site built for your Kingston business — not a template with your logo dropped in. Designed to look credible next to the national brands you share a high street with.',
        feats: [
          '100% custom design — no templates',
          'Mobile-first, built for town-centre browsing',
          'Booking and enquiry forms that actually convert',
          'Full training included at handover',
        ],
      },
      {
        icon: '📍',
        title: 'Local SEO & Google Business',
        body:
          'Get found when someone in Kingston searches for what you offer. We set up your Google Business Profile and build the local SEO foundations that put you in the map pack.',
        feats: [
          'Google Business Profile setup & optimisation',
          'Local SEO targeting Kingston & the Royal Borough',
          'Google Maps and local pack visibility',
          'Monthly performance reporting',
        ],
      },
      {
        icon: '🌐',
        title: 'Hosting & Ongoing Support',
        body:
          'We handle hosting, domains, security, updates and maintenance so you can get on with running the business rather than babysitting a website.',
        feats: [
          'Managed hosting & domain setup',
          'Free SSL & fast UK-based servers',
          'Regular updates & maintenance',
          'Priority support whenever you need it',
        ],
      },
    ],

    faqHeading: 'Common questions<br><em>from Kingston businesses</em>',
    faqs: [
      {
        q: 'Can a small Kingston business really outrank the big chains?',
        a: 'On local searches, yes — routinely. Google treats "near me" and location-specific searches differently from national ones, weighting proximity and relevance heavily. A national retailer optimising for the whole UK is often beaten locally by a small business with a fast site, a complete Google Business Profile and genuine local reviews.',
      },
      {
        q: 'How much does a website cost for a Kingston business?',
        a: 'Every project is different, but we always provide a clear, fixed quote before any work begins — no hidden costs, no surprises. <a href="index.html#contact">Get in touch for a free, no-obligation quote.</a>',
      },
      {
        q: 'How long does it take to build and launch?',
        a: 'Most projects go from first conversation to live website within 2–4 weeks. We keep you involved throughout, so you always know where things stand — no disappearing acts.',
      },
      {
        q: 'Do you cover Surbiton, New Malden and the rest of the Royal Borough?',
        a: 'Yes — we work across Kingston upon Thames and the surrounding areas including Surbiton, Tolworth, Chessington, Hampton Court and Richmond, as well as the wider Surrey and South West London area. We also work remotely with businesses anywhere in the UK.',
      },
    ],

    ctaHeading: 'Ready to grow your<br><em>Kingston business online?</em>',
  },

  {
    slug: 'wimbledon',
    town: 'Wimbledon',
    fullName: 'Wimbledon',
    region: 'South West London',
    geoRegion: 'GB-MRT',
    heroTag: 'Wimbledon, SW London',
    nearby: ['raynes-park', 'kingston', 'morden', 'tooting', 'merton', 'putney'],
    sources: [
      'https://westlocals.com/blog/independent-guide-wimbledon',
      'https://www.visitrichmond.co.uk/shopping',
    ],

    title: 'Web Design & SEO Wimbledon | MartKam Digital',
    description:
      'Fast, mobile-friendly websites for businesses in Wimbledon, SW London. Local SEO, Google Business Profile setup and web design that ranks.',
    ogDescription:
      'Custom websites and local SEO for businesses in Wimbledon. Ranked websites, real enquiries — free consultation available.',
    schemaDescription:
      'Web design and local SEO services for small businesses in Wimbledon, South West London.',

    h1: 'SW19 has two high streets.<br><em>Make sure you rank on the right one.</em>',
    heroCopy:
      'Wimbledon is really two business districts with two different audiences. We build websites that understand the difference — and rank for the searches your actual customers are making.',

    introHeading: 'Helping Wimbledon businesses<br><em>get found all year round</em>',
    intro: [
      'Wimbledon is unusual: it has two distinct commercial centres. Up the hill, Wimbledon Village is boutique-led — independent fashion, delis, gift shops and restaurants with one of the richest independent scenes in South West London. Down in the town centre, it is chain-led, anchored by the Centre Court shopping centre and the high-street names inside it.',
      '<strong>Those two areas attract different searches.</strong> Someone looking for a Village deli and someone looking for a town-centre service are not typing the same thing, and they are not landing on the same results. A website that treats "Wimbledon" as one undifferentiated place misses half its audience.',
      'Then there is the summer. For two weeks a year the Championships bring an international audience into SW19, shopfronts get decorated, and search volume spikes hard. Businesses that have prepared for that surge capture it. The ones that have not, watch it pass.',
    ],
    checklist: [
      'Custom website built around your Wimbledon business and its customers',
      'Local SEO targeting Wimbledon Village, the town centre and SW19',
      'Google Business Profile setup for Maps and local searches',
      'Mobile-first design — essential for visitor and footfall traffic',
      'Fast-loading pages that cope with seasonal traffic spikes',
      'Clear calls-to-action that turn visitors into enquiries',
      'Full training included — you stay in control',
      'Ongoing support after launch — we are in your corner',
    ],

    insightLabel: 'Local Insight · Wimbledon',
    insightHeading: 'The Village, the Town<br><em>and the two weeks that change everything</em>',
    insightIntro:
      'Wimbledon rewards businesses that understand its geography and its calendar. Most local websites account for neither.',
    insightCards: [
      {
        icon: '🏘️',
        title: 'Two centres, two search intents',
        body:
          'Wimbledon Village and Wimbledon town centre function as separate markets. The Village skews independent, premium and destination-led; the town centre skews chain, convenience and commuter-led. Naming your actual area on your site — and in your Google Business Profile — is a small change that meaningfully improves who finds you.',
      },
      {
        icon: '🎾',
        title: 'A genuine seasonal spike',
        body:
          'The Championships bring visitors from around the world into SW19 each summer, and local businesses lean into it — shop windows get tennis-themed displays, and the streets fill with people who have never been here before. That is a large, short, high-intent audience searching on phones, and it is entirely predictable.',
      },
      {
        icon: '🛍️',
        title: 'A deep independent scene',
        body:
          'Wimbledon Village sustains a large concentration of independent businesses — boutiques, delis, salons, restaurants. That is good for the area and hard for any single business, because you are competing against neighbours who are just as distinctive as you are. Search visibility becomes the tiebreaker.',
      },
    ],
    insightClose:
      'The practical takeaway for a Wimbledon business: be specific about where you are. "Wimbledon Village" and "Wimbledon town centre" are not interchangeable to your customers, and they should not be interchangeable on your website. Then make sure your site and profile are ready before the summer, not during it.',

    servicesLabel: 'What We Do in Wimbledon',
    servicesHeading: 'Everything your Wimbledon business<br><em>needs to compete online</em>',
    services: [
      {
        icon: '🎨',
        title: 'Website Design & Build',
        body:
          'A fully custom site built for your Wimbledon business, designed to match the standard your customers already expect from the area — whether you are in the Village or the town centre.',
        feats: [
          '100% custom design — no templates',
          'Mobile-first, fast-loading pages',
          'Booking and enquiry forms that convert',
          'Full training included at handover',
        ],
      },
      {
        icon: '📍',
        title: 'Local SEO & Google Business',
        body:
          'Get found when someone in SW19 searches for what you offer. We set up your Google Business Profile and target the specific area you actually trade in.',
        feats: [
          'Google Business Profile setup & optimisation',
          'Local SEO targeting Wimbledon Village & town centre',
          'Google Maps and local pack visibility',
          'Monthly performance reporting',
        ],
      },
      {
        icon: '🌐',
        title: 'Hosting & Ongoing Support',
        body:
          'Managed hosting built to stay fast when your traffic spikes — plus domains, security, updates and maintenance handled entirely by us.',
        feats: [
          'Managed hosting & domain setup',
          'Free SSL & fast UK-based servers',
          'Regular updates & maintenance',
          'Priority support whenever you need it',
        ],
      },
    ],

    faqHeading: 'Common questions<br><em>from Wimbledon businesses</em>',
    faqs: [
      {
        q: 'Should my site target Wimbledon Village or Wimbledon town centre?',
        a: 'Whichever you actually trade in — and say so explicitly. They function as separate markets with different customers, and being specific helps Google match you to the right searches. If you serve both, we structure the site so it can rank for both without looking vague.',
      },
      {
        q: 'Can you help me prepare for the summer traffic spike?',
        a: 'Yes. The Championships bring a large, short, predictable surge of visitors searching locally on their phones. The work that matters — fast mobile pages, accurate opening hours, a complete Google Business Profile, clear location signals — needs to be in place beforehand, not scrambled together during it.',
      },
      {
        q: 'How much does a website cost for a Wimbledon business?',
        a: 'Every project is different, but we always provide a clear, fixed quote before any work begins — no hidden costs, no surprises. <a href="index.html#contact">Get in touch for a free, no-obligation quote.</a>',
      },
      {
        q: 'Do you also cover Raynes Park, Morden and the rest of Merton?',
        a: 'Yes — we work across Wimbledon and the surrounding areas including Raynes Park, Morden, Merton, Tooting and Putney, as well as the wider Surrey and South West London area. We also work remotely with businesses anywhere in the UK.',
      },
    ],

    ctaHeading: 'Ready to grow your<br><em>Wimbledon business online?</em>',
  },

  {
    slug: 'guildford',
    town: 'Guildford',
    fullName: 'Guildford',
    region: 'Surrey',
    geoRegion: 'GB-SRY',
    heroTag: 'Guildford, Surrey',
    nearby: ['woking', 'byfleet', 'farnham', 'dorking', 'leatherhead'],
    sources: [
      'https://mcvuk.com/business-news/regional-spotlight-how-guildford-became-the-hollywood-of-video-games/',
      'https://surrey-research-park.com/',
    ],

    title: 'Web Design & SEO Guildford | MartKam Digital',
    description:
      'Fast, mobile-friendly websites for businesses in Guildford, Surrey. Local SEO, Google Business Profile setup and web design that ranks on Google.',
    ogDescription:
      'Custom websites and local SEO for businesses in Guildford, Surrey. Ranked websites, real enquiries — free consultation available.',
    schemaDescription:
      'Web design and local SEO services for small businesses in Guildford, Surrey.',

    h1: 'In a town this full of software people,<br><em>your website has nowhere to hide.</em>',
    heroCopy:
      'Guildford has one of the highest concentrations of tech talent in the country. That raises the bar for what a local website should look like. We build sites for Guildford businesses that meet it.',

    introHeading: 'Helping Guildford businesses<br><em>meet a higher standard</em>',
    intro: [
      'Guildford is Surrey\'s largest town and one of its most demanding markets. The cobbled High Street and the Friary Centre serve a busy retail and hospitality trade, while the University of Surrey and the Surrey Research Park — home to a couple of hundred technology businesses — sit on the edge of town.',
      '<strong>Guildford is also the centre of the UK games industry.</strong> More than fifty studios are based here, a lineage that runs from Bullfrog in the 1980s through to names like Media Molecule, Criterion and EA. It has genuinely been called the "Hollywood of video games".',
      'That matters for every other business in town, because it shapes expectations. Your customers, staff and suppliers spend their working lives around well-made software. A slow, dated, awkward website reads differently in Guildford than it does elsewhere — and so does a good one.',
    ],
    checklist: [
      'Custom website built around your Guildford business and goals',
      'Local SEO targeting Guildford, Woking and the wider Surrey area',
      'Google Business Profile setup for Maps and local searches',
      'Mobile-first design — most local searches happen on phones',
      'Genuinely fast pages, not just pages that look fast',
      'Clear calls-to-action that turn visitors into enquiries',
      'Full training included — you stay in control',
      'Ongoing support after launch — we are in your corner',
    ],

    insightLabel: 'Local Insight · Guildford',
    insightHeading: 'Why the bar is higher<br><em>for a Guildford website</em>',
    insightIntro:
      'Guildford has an unusual local economy for a market town, and it changes what a website needs to do here.',
    insightCards: [
      {
        icon: '🎮',
        title: 'A genuine technology cluster',
        body:
          'Guildford hosts one of the largest games development clusters outside London — over fifty studios, with the University of Surrey and Surrey Research Park feeding talent and startups into it. The town is full of people who build digital products for a living, and they notice when something is badly made.',
      },
      {
        icon: '🏛️',
        title: 'Heritage retail with modern competition',
        body:
          'The cobbled High Street and the Friary Centre give Guildford a strong independent retail and hospitality scene. But it competes with a large surrounding catchment and with online alternatives, so local businesses need to be findable at the exact moment someone decides to come into town.',
      },
      {
        icon: '💼',
        title: 'A professional-services client base',
        body:
          'Between the research park, the university and the town\'s established professional sector, a lot of Guildford businesses sell to other businesses. That audience researches thoroughly before making contact — which means your site is doing the selling long before anyone calls you.',
      },
    ],
    insightClose:
      'The practical takeaway for a Guildford business: performance and credibility are not optional extras here. A site that loads instantly, works properly on a phone and clearly explains what you do will out-perform a prettier site that is slow — particularly in front of an audience this technically literate.',

    servicesLabel: 'What We Do in Guildford',
    servicesHeading: 'Everything your Guildford business<br><em>needs to compete online</em>',
    services: [
      {
        icon: '🎨',
        title: 'Website Design & Build',
        body:
          'A fully custom site built for your Guildford business — properly engineered, not assembled from a template. Built to stand up to an audience that knows the difference.',
        feats: [
          '100% custom design — no templates',
          'Mobile-first, genuinely fast pages',
          'Contact forms & booking integrations',
          'Full training included at handover',
        ],
      },
      {
        icon: '📍',
        title: 'Local SEO & Google Business',
        body:
          'Get found when someone in Guildford searches for what you offer. Google Business Profile setup plus the local SEO groundwork that drives real enquiries.',
        feats: [
          'Google Business Profile setup & optimisation',
          'Local SEO targeting Guildford & Surrey searches',
          'Google Maps and local pack visibility',
          'Monthly performance reporting',
        ],
      },
      {
        icon: '🌐',
        title: 'Hosting & Ongoing Support',
        body:
          'We handle hosting, domains, security, updates and maintenance completely, so the technical side never becomes your problem.',
        feats: [
          'Managed hosting & domain setup',
          'Free SSL & fast UK-based servers',
          'Regular updates & maintenance',
          'Priority support whenever you need it',
        ],
      },
    ],

    faqHeading: 'Common questions<br><em>from Guildford businesses</em>',
    faqs: [
      {
        q: 'Guildford is full of tech companies — why not just hire one of them?',
        a: 'You can, and for a software product you probably should. But a games studio or a research-park software firm is not set up to build and rank a small business website, and generally will not price for one. We do exactly that work, for local businesses, at a scale that makes sense.',
      },
      {
        q: 'Can you help my Guildford business rank on Google?',
        a: 'Yes — local SEO is built into every website we create. We target the search terms Guildford customers actually use, set up your Google Business Profile, and build the on-page foundations that help you rank. SEO takes time, but the groundwork is laid from day one.',
      },
      {
        q: 'How much does a website cost for a Guildford business?',
        a: 'Every project is different, but we always provide a clear, fixed quote before any work begins — no hidden costs, no surprises. <a href="index.html#contact">Get in touch for a free, no-obligation quote.</a>',
      },
      {
        q: 'Do you cover Woking, Farnham and the rest of west Surrey?',
        a: 'Yes — we work across Guildford and the surrounding areas including Woking, Byfleet, Farnham, Dorking and Leatherhead, as well as the wider Surrey and South West London area. We also work remotely with businesses anywhere in the UK.',
      },
    ],

    ctaHeading: 'Ready to grow your<br><em>Guildford business online?</em>',
  },

  {
    slug: 'woking',
    town: 'Woking',
    fullName: 'Woking',
    region: 'Surrey',
    geoRegion: 'GB-SRY',
    heroTag: 'Woking, Surrey',
    nearby: ['byfleet', 'guildford', 'weybridge', 'chertsey', 'bagshot'],
    sources: [
      'https://www.woking.gov.uk/news/sir-robert-mcalpine-%E2%80%98tops-out%E2%80%99-woking%E2%80%99s-%C2%A3540m-victoria-square',
      'https://curchodandco.com/news-deals/the-changing-face-of-woking',
    ],

    title: 'Web Design & SEO Woking | MartKam Digital',
    description:
      'Fast, mobile-friendly websites for businesses in Woking, Surrey. Local SEO, Google Business Profile setup and web design that ranks on Google.',
    ogDescription:
      'Custom websites and local SEO for businesses in Woking, Surrey. Ranked websites, real enquiries — free consultation available.',
    schemaDescription:
      'Web design and local SEO services for small businesses in Woking, Surrey.',

    h1: 'Woking is judged by a higher standard.<br><em>Your website should meet it.</em>',
    heroCopy:
      'Woking hosts some seriously well-known corporate names. Their presence raises what customers expect from every business in town. We build Woking websites that hold their own.',

    introHeading: 'Helping Woking businesses<br><em>look the part</em>',
    intro: [
      'Woking punches well above its weight commercially. McLaren has a major town-centre presence, WWF-UK is headquartered here, and Capgemini is among the other national and global names based in the borough. The £540m Victoria Square development has reshaped the town centre around new retail, a hotel and residential towers.',
      '<strong>All of that changes the baseline.</strong> When residents deal with organisations of that size week in, week out, a rough-looking local website stands out for the wrong reasons. Fair or not, businesses in Woking get compared against a higher standard than the size of the town would suggest.',
      'Woking is also a serious commuter town, roughly twenty-five minutes from Waterloo. That means a large share of your potential customers are researching local services from a train, on a phone, in short bursts. If your site is slow or awkward on mobile, that is where you lose them.',
    ],
    checklist: [
      'Custom website built around your Woking business and goals',
      'Local SEO targeting Woking, Byfleet, Guildford and west Surrey',
      'Google Business Profile setup for Maps and local searches',
      'Mobile-first design — built for commuters searching on the move',
      'Fast-loading pages that work on patchy mobile signal',
      'Clear calls-to-action that turn visitors into enquiries',
      'Full training included — you stay in control',
      'Ongoing support after launch — we are in your corner',
    ],

    insightLabel: 'Local Insight · Woking',
    insightHeading: 'What a Woking website<br><em>is actually competing with</em>',
    insightIntro:
      'Woking\'s local economy has an unusual shape for a Surrey town, and it affects how customers judge your business online.',
    insightCards: [
      {
        icon: '🏎️',
        title: 'Corporate neighbours set the standard',
        body:
          'McLaren, WWF-UK and Capgemini all have a significant presence in and around Woking. Their brand quality is what local residents see every day. Your website does not need that budget — but it does need to look like it belongs in the same town, because that is the comparison people make without realising it.',
      },
      {
        icon: '🚆',
        title: 'A commuter audience, searching on the move',
        body:
          'Woking sits around twenty-five minutes from London Waterloo, and a large part of the working population makes that trip. They research local trades and services in transit — brief, mobile, often on imperfect signal. Page speed is not a technical nicety here, it is whether the enquiry happens.',
      },
      {
        icon: '🏗️',
        title: 'A town centre still being rebuilt',
        body:
          'The £540m Victoria Square scheme brought new retail floorspace, a hotel and residential towers into the centre of Woking. Regeneration on that scale shifts footfall patterns and brings new residents who have no established habits — they find everything by searching, which is an opening for any business that ranks.',
      },
    ],
    insightClose:
      'The practical takeaway for a Woking business: assume your customer is on a phone, in a hurry, and unconsciously comparing you to far larger organisations. A fast, clean, credible site answers all three problems at once — and new residents arriving with the town-centre development have no loyalties yet.',

    servicesLabel: 'What We Do in Woking',
    servicesHeading: 'Everything your Woking business<br><em>needs to compete online</em>',
    services: [
      {
        icon: '🎨',
        title: 'Website Design & Build',
        body:
          'A fully custom site built for your Woking business — designed to look credible in a town where residents deal with major national brands daily.',
        feats: [
          '100% custom design — no templates',
          'Mobile-first, built for commuter browsing',
          'Contact forms & booking integrations',
          'Full training included at handover',
        ],
      },
      {
        icon: '📍',
        title: 'Local SEO & Google Business',
        body:
          'Get found when someone in Woking searches for what you offer. Google Business Profile setup plus the local SEO foundations that generate enquiries.',
        feats: [
          'Google Business Profile setup & optimisation',
          'Local SEO targeting Woking & west Surrey',
          'Google Maps and local pack visibility',
          'Monthly performance reporting',
        ],
      },
      {
        icon: '🌐',
        title: 'Hosting & Ongoing Support',
        body:
          'Hosting, domains, security, updates and maintenance all handled by us — so you can focus on the business rather than the website.',
        feats: [
          'Managed hosting & domain setup',
          'Free SSL & fast UK-based servers',
          'Regular updates & maintenance',
          'Priority support whenever you need it',
        ],
      },
    ],

    faqHeading: 'Common questions<br><em>from Woking businesses</em>',
    faqs: [
      {
        q: 'Do I really need my site to be fast, or is that just jargon?',
        a: 'In Woking specifically, it matters more than most places. A large share of your audience is searching from a train on a phone, where a slow site simply does not finish loading before they give up. Speed is one of the few website factors that directly and measurably costs you enquiries.',
      },
      {
        q: 'How much does a website cost for a Woking business?',
        a: 'Every project is different, but we always provide a clear, fixed quote before any work begins — no hidden costs, no surprises. <a href="index.html#contact">Get in touch for a free, no-obligation quote.</a>',
      },
      {
        q: 'How long does it take to build and launch?',
        a: 'Most projects go from first conversation to live website within 2–4 weeks. We keep you involved throughout, so you always know where things stand — no disappearing acts.',
      },
      {
        q: 'Do you cover Byfleet, Weybridge and the rest of the borough?',
        a: 'Yes — we work across Woking and the surrounding areas including Byfleet, West Byfleet, Weybridge, Chertsey, Bagshot and Guildford, as well as the wider Surrey and South West London area. We also work remotely with businesses anywhere in the UK.',
      },
    ],

    ctaHeading: 'Ready to grow your<br><em>Woking business online?</em>',
  },

  {
    slug: 'richmond',
    town: 'Richmond',
    fullName: 'Richmond upon Thames',
    region: 'South West London',
    geoRegion: 'GB-RIC',
    heroTag: 'Richmond upon Thames',
    nearby: ['kingston', 'surbiton', 'hampton-court', 'putney', 'wimbledon'],
    sources: [
      'https://www.visitrichmond.co.uk/shopping',
      'https://richmond.gov.uk/news/news_may_2025/richmond_offers_unique_growth_opportunity',
    ],

    title: 'Web Design & SEO Richmond | MartKam Digital',
    description:
      'Fast, mobile-friendly websites for businesses in Richmond upon Thames. Local SEO, Google Business Profile setup and web design that ranks.',
    ogDescription:
      'Custom websites and local SEO for businesses in Richmond upon Thames. Ranked websites, real enquiries — free consultation available.',
    schemaDescription:
      'Web design and local SEO services for small businesses in Richmond upon Thames, South West London.',

    h1: 'Most of Richmond\'s visitors<br><em>have never heard of you. Yet.</em>',
    heroCopy:
      'Richmond serves two audiences at once: residents who know the area and visitors discovering it. We build websites that capture both — and rank for the searches each one makes.',

    introHeading: 'Helping Richmond businesses<br><em>get found by both audiences</em>',
    intro: [
      'Richmond upon Thames is one of South West London\'s most distinctive commercial areas — a premium shopping destination with a high proportion of independent retailers, from antiques to bespoke jewellery, alongside a thriving riverside and night-time economy. Richmond Park and the Green pull in visitors all year.',
      '<strong>That visitor economy is the defining feature.</strong> A large share of the people who could become your customers are not local. They do not know your name, your street or your reputation. They find you the way any stranger finds anything: by searching on a phone, within a few hundred metres of your door.',
      'The borough also attracts serious employers — eBay and Not On The High Street among them — drawn by the transport links and the quality of life. So Richmond businesses are selling to a demanding mix of affluent residents, commuting professionals and short-stay visitors, each searching differently.',
    ],
    checklist: [
      'Custom website built around your Richmond business and its customers',
      'Local SEO targeting Richmond, Kew, Twickenham and the borough',
      'Google Business Profile setup — critical for visitor discovery',
      'Mobile-first design — visitors search almost entirely on phones',
      'Fast-loading pages that convert first-time discoverers',
      'Clear calls-to-action that turn visitors into bookings',
      'Full training included — you stay in control',
      'Ongoing support after launch — we are in your corner',
    ],

    insightLabel: 'Local Insight · Richmond',
    insightHeading: 'Selling to people<br><em>who have never heard of you</em>',
    insightIntro:
      'Richmond\'s visitor economy creates an opportunity most local businesses never properly exploit.',
    insightCards: [
      {
        icon: '🌳',
        title: 'A constant stream of first-time customers',
        body:
          'Richmond Park, the Green and the riverside bring people into the area who have no prior relationship with any business here. For them, the Google local pack is the entire shortlist. If you are not in it, you do not exist — regardless of how good your reputation is among residents.',
      },
      {
        icon: '💎',
        title: 'A high proportion of independents',
        body:
          'Richmond has an unusually strong independent retail scene, which gives the town its boutique character and makes it genuinely competitive. When every neighbour is distinctive, being findable at the right moment is what separates a busy week from a quiet one.',
      },
      {
        icon: '🌙',
        title: 'A real night-time economy',
        body:
          'The riverside and town centre support a substantial evening leisure trade. Evening searches are urgent and mobile — people deciding where to eat or drink in the next thirty minutes. Accurate opening hours and a fast mobile site convert that traffic; anything else loses it.',
      },
    ],
    insightClose:
      'The practical takeaway for a Richmond business: your Google Business Profile is doing more work than your website in many cases, because it is what visitors see first. Get both right — a complete, accurate profile feeding into a fast site that answers the obvious questions — and you capture an audience that word of mouth will never reach.',

    servicesLabel: 'What We Do in Richmond',
    servicesHeading: 'Everything your Richmond business<br><em>needs to compete online</em>',
    services: [
      {
        icon: '🎨',
        title: 'Website Design & Build',
        body:
          'A fully custom site built for your Richmond business, designed to convert visitors who have never heard of you into customers who walk through the door.',
        feats: [
          '100% custom design — no templates',
          'Mobile-first, built for on-the-spot decisions',
          'Booking and enquiry forms that convert',
          'Full training included at handover',
        ],
      },
      {
        icon: '📍',
        title: 'Local SEO & Google Business',
        body:
          'Get into the local pack, where Richmond\'s visitor traffic actually makes its decisions. Full Google Business Profile setup and local SEO groundwork.',
        feats: [
          'Google Business Profile setup & optimisation',
          'Local SEO targeting Richmond & the borough',
          'Google Maps and local pack visibility',
          'Monthly performance reporting',
        ],
      },
      {
        icon: '🌐',
        title: 'Hosting & Ongoing Support',
        body:
          'Hosting, domains, security, updates and maintenance handled entirely by us, so the technical side never distracts you from trading.',
        feats: [
          'Managed hosting & domain setup',
          'Free SSL & fast UK-based servers',
          'Regular updates & maintenance',
          'Priority support whenever you need it',
        ],
      },
    ],

    faqHeading: 'Common questions<br><em>from Richmond businesses</em>',
    faqs: [
      {
        q: 'Most of my trade is regulars — do I need to worry about visitors?',
        a: 'Regulars are the foundation, but Richmond\'s parks, Green and riverside deliver a steady stream of people who could become regulars and currently cannot find you. Capturing even a fraction of that discovery traffic is usually the cheapest growth available to a Richmond business.',
      },
      {
        q: 'Is a Google Business Profile more important than a website here?',
        a: 'They do different jobs, and in Richmond the profile often comes first — it is what appears in Maps and the local pack when a visitor searches nearby. But the profile sends people to your site to decide, so a strong profile pointing at a weak site wastes the traffic. You want both working together.',
      },
      {
        q: 'How much does a website cost for a Richmond business?',
        a: 'Every project is different, but we always provide a clear, fixed quote before any work begins — no hidden costs, no surprises. <a href="index.html#contact">Get in touch for a free, no-obligation quote.</a>',
      },
      {
        q: 'Do you cover Kingston, Twickenham and the rest of the borough?',
        a: 'Yes — we work across Richmond upon Thames and the surrounding areas including Kingston, Surbiton, Hampton Court, Putney and Wimbledon, as well as the wider Surrey and South West London area. We also work remotely with businesses anywhere in the UK.',
      },
    ],

    ctaHeading: 'Ready to grow your<br><em>Richmond business online?</em>',
  },

  {
    slug: 'surbiton',
    town: 'Surbiton',
    fullName: 'Surbiton',
    region: 'South West London',
    geoRegion: 'GB-KTT',
    heroTag: 'Surbiton, SW London',
    nearby: ['kingston', 'tolworth', 'chessington', 'wimbledon', 'hampton-court'],
    sources: [
      'https://c20society.org.uk/building-of-the-month/surbiton-station-surrey',
      'https://www.kingston.gov.uk/planning-and-building-control/heritage-and-conservation/conservation-areas/surbiton-town-centre',
    ],

    title: 'Web Design & SEO Surbiton | MartKam Digital',
    description:
      'Fast, mobile-friendly websites for businesses in Surbiton, SW London. Local SEO, Google Business Profile setup and web design that ranks.',
    ogDescription:
      'Custom websites and local SEO for businesses in Surbiton. Ranked websites, real enquiries — free consultation available.',
    schemaDescription:
      'Web design and local SEO services for small businesses in Surbiton, South West London.',

    h1: 'Victoria Road deserves better<br><em>than a template website.</em>',
    heroCopy:
      'Surbiton runs on independents and commuters. We build websites that get local businesses in front of both — fast, mobile, and ranking for the searches that actually convert.',

    introHeading: 'Helping Surbiton businesses<br><em>win their own high street</em>',
    intro: [
      'Surbiton has been a commuter town since the London and South Western Railway arrived in 1838, and it still is. Its 1937 station — a Grade II listed Art Deco building by James Robb Scott, the architect behind Waterloo\'s Victory Arch — is one of the finest pieces of architecture on the network and the anchor of the town centre.',
      '<strong>Victoria Road is where the trade happens.</strong> It carries an eclectic mix of independents alongside the national names — homeware, books, gifts, delis, flower stalls, cafés. It is a genuine local high street of the kind a lot of areas have lost, and the businesses on it compete hard for the same residents.',
      'The commuter pattern shapes everything. A large share of Surbiton\'s working population leaves in the morning and returns in the evening, doing their local research on a phone somewhere in between. Being findable in that window is what turns a Surbiton high street business from busy to full.',
    ],
    checklist: [
      'Custom website built around your Surbiton business and goals',
      'Local SEO targeting Surbiton, Tolworth, Kingston and the Royal Borough',
      'Google Business Profile setup for Maps and local searches',
      'Mobile-first design — built for commuters searching on the move',
      'Fast-loading pages that work in a short attention window',
      'Clear calls-to-action that turn visitors into enquiries',
      'Full training included — you stay in control',
      'Ongoing support after launch — we are in your corner',
    ],

    insightLabel: 'Local Insight · Surbiton',
    insightHeading: 'A commuter town<br><em>with a real high street to defend</em>',
    insightIntro:
      'Surbiton\'s independents have something worth protecting, and local search is a large part of how they protect it.',
    insightCards: [
      {
        icon: '🚉',
        title: 'The commuter rhythm shapes demand',
        body:
          'Surbiton grew around its station and still lives by it. Local businesses see distinct morning, evening and weekend patterns, and the research that leads to a purchase usually happens on a phone during the commute. Sites that load slowly on mobile miss the entire window.',
      },
      {
        icon: '🏪',
        title: 'Independents competing with each other',
        body:
          'Victoria Road sustains an unusually varied independent scene — art and crafts, homeware, books, gifts, delis and flower stalls. That variety is Surbiton\'s strength, but it means each business is competing against distinctive neighbours rather than interchangeable chains. Search visibility is often the tiebreaker.',
      },
      {
        icon: '🏛️',
        title: 'Character worth putting on your website',
        body:
          'The Art Deco station is Grade II listed and the town centre sits within a conservation area. Surbiton businesses trade partly on that character — and most local websites throw it away in favour of generic stock imagery that could belong to any town in England.',
      },
    ],
    insightClose:
      'The practical takeaway for a Surbiton business: lean into being local rather than hiding it. Name your street, show the actual place, and make sure the site loads instantly on a phone. Generic sites are easy to ignore; a site that is visibly, specifically Surbiton is not.',

    servicesLabel: 'What We Do in Surbiton',
    servicesHeading: 'Everything your Surbiton business<br><em>needs to compete online</em>',
    services: [
      {
        icon: '🎨',
        title: 'Website Design & Build',
        body:
          'A fully custom site built for your Surbiton business — one that looks like it belongs on Victoria Road rather than on a template gallery.',
        feats: [
          '100% custom design — no templates',
          'Mobile-first, built for commuter browsing',
          'Contact forms & booking integrations',
          'Full training included at handover',
        ],
      },
      {
        icon: '📍',
        title: 'Local SEO & Google Business',
        body:
          'Get found when someone in Surbiton searches for what you offer. Google Business Profile setup plus the local SEO foundations that drive enquiries.',
        feats: [
          'Google Business Profile setup & optimisation',
          'Local SEO targeting Surbiton & the Royal Borough',
          'Google Maps and local pack visibility',
          'Monthly performance reporting',
        ],
      },
      {
        icon: '🌐',
        title: 'Hosting & Ongoing Support',
        body:
          'We handle hosting, domains, security, updates and maintenance completely, so you can concentrate on the shop rather than the site.',
        feats: [
          'Managed hosting & domain setup',
          'Free SSL & fast UK-based servers',
          'Regular updates & maintenance',
          'Priority support whenever you need it',
        ],
      },
    ],

    faqHeading: 'Common questions<br><em>from Surbiton businesses</em>',
    faqs: [
      {
        q: 'Should I target Surbiton or Kingston in my SEO?',
        a: 'Usually Surbiton first. It is less competitive, and the people searching for it are closer to you and more likely to actually visit. Kingston is worth targeting as a secondary term, but leading with the bigger town when you trade in the smaller one tends to leave you invisible in both.',
      },
      {
        q: 'How much does a website cost for a Surbiton business?',
        a: 'Every project is different, but we always provide a clear, fixed quote before any work begins — no hidden costs, no surprises. <a href="index.html#contact">Get in touch for a free, no-obligation quote.</a>',
      },
      {
        q: 'How long does it take to build and launch?',
        a: 'Most projects go from first conversation to live website within 2–4 weeks. We keep you involved throughout, so you always know where things stand — no disappearing acts.',
      },
      {
        q: 'Do you cover Tolworth, Chessington and the surrounding areas?',
        a: 'Yes — we work across Surbiton and the surrounding areas including Kingston, Tolworth, Chessington, Hampton Court and Wimbledon, as well as the wider Surrey and South West London area. We also work remotely with businesses anywhere in the UK.',
      },
    ],

    ctaHeading: 'Ready to grow your<br><em>Surbiton business online?</em>',
  },

  {
    slug: 'reigate',
    town: 'Reigate',
    fullName: 'Reigate',
    region: 'Surrey',
    geoRegion: 'GB-SRY',
    heroTag: 'Reigate, Surrey',
    nearby: ['redhill', 'leatherhead', 'dorking', 'tadworth', 'epsom'],
    sources: [
      'https://en.wikipedia.org/wiki/Reigate_Tunnel',
      'https://www.reigatesociety.org.uk/history/Reigate_Tunnel.php',
    ],

    title: 'Web Design & SEO Reigate | MartKam Digital',
    description:
      'Fast, mobile-friendly websites for businesses in Reigate, Surrey. Local SEO, Google Business Profile setup and web design that ranks on Google.',
    ogDescription:
      'Custom websites and local SEO for businesses in Reigate, Surrey. Ranked websites, real enquiries — free consultation available.',
    schemaDescription:
      'Web design and local SEO services for small businesses in Reigate, Surrey.',

    h1: 'Years of reputation in Reigate,<br><em>and still invisible on Google?</em>',
    heroCopy:
      'Reigate trades on character and quality, but customers still find it through Google. We build websites that carry the town\'s standard and rank for the searches that bring in work.',

    introHeading: 'Helping Reigate businesses<br><em>turn local reputation into enquiries</em>',
    intro: [
      'Reigate has been a town of note for a very long time. Its castle dates to around 1100, and the road tunnel driven through the sandstone beneath the castle mound in 1823 is the oldest successful road tunnel in the UK — believed to be the first in Europe. Tolls were charged on it until 1856.',
      '<strong>Today it is an affluent commuter and professional-services town.</strong> The High Street supports a strong independent trade, and the M25 at Junction 8 puts Reigate within easy reach of Gatwick and London. Businesses here tend to compete on quality and reputation rather than price.',
      'Reputation, though, only travels so far. A new resident, or someone comparing three local firms, starts on Google. Reigate businesses with decades of goodwill routinely lose that first comparison to newer competitors who simply built a better website.',
    ],
    checklist: [
      'Custom website built around your Reigate business and goals',
      'Local SEO targeting Reigate, Redhill and the surrounding Surrey towns',
      'Google Business Profile setup for Maps and local searches',
      'Mobile-first design — most local searches happen on phones',
      'Fast-loading pages that keep visitors on your site',
      'Clear calls-to-action that turn visitors into enquiries',
      'Full training included — you stay in control',
      'Ongoing support after launch — we are in your corner',
    ],

    insightLabel: 'Local Insight · Reigate',
    insightHeading: 'When reputation is strong<br><em>but visibility is not</em>',
    insightIntro:
      'Reigate businesses tend to have the hardest part solved already. The gap is usually elsewhere.',
    insightCards: [
      {
        icon: '🏰',
        title: 'A town that trades on character',
        body:
          'Reigate\'s heritage is genuine — a castle site dating to around 1100 and an 1823 road tunnel that predates every other working road tunnel in the country. Local businesses benefit from that atmosphere, and the good ones reflect it rather than hiding behind stock photography that could be anywhere.',
      },
      {
        icon: '📈',
        title: 'Word of mouth has a ceiling',
        body:
          'In a town this established, most successful businesses were built on referral. That works until the referrals run out, or a new competitor arrives who is better at being found. Local search is how you keep growing once your existing network is fully tapped.',
      },
      {
        icon: '🛣️',
        title: 'A wide, connected catchment',
        body:
          'With the M25 at Junction 8 and fast rail links, Reigate businesses can realistically serve Redhill, Dorking, Leatherhead and beyond. Most never target those searches, which leaves an entire adjacent market to whoever bothers to claim it first.',
      },
    ],
    insightClose:
      'The practical takeaway for a Reigate business: your reputation is an asset your website is probably not reflecting. Get the reviews visible, the local pages built for the surrounding towns you already serve, and the Google Business Profile complete — and you convert goodwill you already have into enquiries you currently do not.',

    servicesLabel: 'What We Do in Reigate',
    servicesHeading: 'Everything your Reigate business<br><em>needs to compete online</em>',
    services: [
      {
        icon: '🎨',
        title: 'Website Design & Build',
        body:
          'A fully custom site built for your Reigate business — one that reflects the quality you already deliver rather than undercutting it.',
        feats: [
          '100% custom design — no templates',
          'Mobile-first, fast-loading pages',
          'Contact forms & booking integrations',
          'Full training included at handover',
        ],
      },
      {
        icon: '📍',
        title: 'Local SEO & Google Business',
        body:
          'Get found across Reigate and the surrounding towns you already serve. Google Business Profile setup plus the local SEO groundwork that drives enquiries.',
        feats: [
          'Google Business Profile setup & optimisation',
          'Local SEO targeting Reigate, Redhill & Surrey',
          'Google Maps and local pack visibility',
          'Monthly performance reporting',
        ],
      },
      {
        icon: '🌐',
        title: 'Hosting & Ongoing Support',
        body:
          'Hosting, domains, security, updates and maintenance handled by us, so the technical side never becomes something you have to think about.',
        feats: [
          'Managed hosting & domain setup',
          'Free SSL & fast UK-based servers',
          'Regular updates & maintenance',
          'Priority support whenever you need it',
        ],
      },
    ],

    faqHeading: 'Common questions<br><em>from Reigate businesses</em>',
    faqs: [
      {
        q: 'My business runs on word of mouth — is a website worth it?',
        a: 'Word of mouth is the best lead source there is, but it has a natural ceiling and it does not reach people who have just moved to the area. A website does not replace referrals; it catches the people your referral network never touches, and it reassures the ones who were referred and want to check you out first.',
      },
      {
        q: 'Can you help me reach Redhill and Dorking as well as Reigate?',
        a: 'Yes. If you genuinely serve those areas, we build the site so it can rank for them rather than only for Reigate. That is often the fastest available growth for an established Reigate business, because the neighbouring searches are usually less contested.',
      },
      {
        q: 'How much does a website cost for a Reigate business?',
        a: 'Every project is different, but we always provide a clear, fixed quote before any work begins — no hidden costs, no surprises. <a href="index.html#contact">Get in touch for a free, no-obligation quote.</a>',
      },
      {
        q: 'How long does it take to build and launch?',
        a: 'Most projects go from first conversation to live website within 2–4 weeks. We keep you involved throughout, so you always know where things stand — no disappearing acts.',
      },
    ],

    ctaHeading: 'Ready to grow your<br><em>Reigate business online?</em>',
  },

  {
    slug: 'byfleet',
    town: 'Byfleet',
    fullName: 'Byfleet',
    region: 'Surrey',
    geoRegion: 'GB-SRY',
    heroTag: 'Byfleet & West Byfleet',
    nearby: ['woking', 'weybridge', 'guildford', 'chertsey', 'hersham'],
    sources: [
      'https://www.brooklandsmuseum.com/discover/our-history/timeline/',
      'https://www.racingcircuits.info/europe/united-kingdom/brooklands.html',
    ],

    // GSC showed SEO-led search demand here, so the title leads on SEO.
    title: 'SEO & Web Design Byfleet | MartKam Digital',
    description:
      'Local SEO and fast, mobile-friendly websites for businesses in Byfleet and West Byfleet, Surrey. Google Business Profile setup and web design that ranks.',
    ogDescription:
      'Local SEO and custom websites for businesses in Byfleet and West Byfleet, Surrey. Free consultation, no obligation.',
    schemaDescription:
      'Local SEO and web design services for small businesses in Byfleet and West Byfleet, Surrey.',

    h1: 'Byfleet is small enough to own —<br><em>if you get there first.</em>',
    heroCopy:
      'Byfleet and West Byfleet are small enough that local search is genuinely competitive to win — and most businesses here have not tried. We build sites that take that ground before someone else does.',

    introHeading: 'Helping Byfleet businesses<br><em>get found before the competition does</em>',
    intro: [
      'Byfleet and West Byfleet are two distinct villages with their own centres, sitting between Woking and Weybridge. The Wey Navigation runs through, and the area is best known for Brooklands — the world\'s first purpose-built motor racing circuit, opened in 1907, whose famous Byfleet Banking carries the village\'s name.',
      '<strong>Commercially, this is a trades and services economy.</strong> Builders, electricians, plumbers, garages, groundworkers, cleaners, salons and small professional practices serving a settled residential population, with West Byfleet station putting London Waterloo within commuting reach.',
      'That size is an advantage. In Kingston or Guildford, ranking locally means fighting through dozens of established competitors. In Byfleet, the field is thin — and we know from search data that people here are actively looking for SEO help. Being early is worth a great deal in a market this size.',
    ],
    checklist: [
      'Custom website built around your Byfleet business and goals',
      'Local SEO targeting Byfleet, West Byfleet, Woking and Weybridge',
      'Google Business Profile setup for Maps and local searches',
      'Mobile-first design — essential for trades and callout work',
      'Fast-loading pages that convert an urgent enquiry',
      'Clear calls-to-action — click-to-call, quote forms, WhatsApp',
      'Full training included — you stay in control',
      'Ongoing support after launch — we are in your corner',
    ],

    insightLabel: 'Local Insight · Byfleet',
    insightHeading: 'Why a small village<br><em>is an SEO opportunity, not a limitation</em>',
    insightIntro:
      'Byfleet is exactly the kind of place where a modest amount of the right work produces outsized results.',
    insightCards: [
      {
        icon: '🏁',
        title: 'A village with a genuine name',
        body:
          'Brooklands opened in 1907 as the first purpose-built motor racing circuit in the world, and its Byfleet Banking made the village name known well beyond Surrey. Local businesses have real heritage to draw on — most default to generic copy that could describe anywhere instead.',
      },
      {
        icon: '🔧',
        title: 'A trades-led local economy',
        body:
          'Byfleet and West Byfleet run largely on trades and local services. That work is won on urgent, high-intent mobile searches — someone with a leak, a broken boiler or a job that needs quoting this week. Click-to-call, fast loading and a complete Google profile matter more here than elegant design.',
      },
      {
        icon: '🎯',
        title: 'A thin competitive field',
        body:
          'Small catchments have fewer businesses actively competing for search visibility. Ranking for "electrician Byfleet" is a fundamentally easier problem than ranking for the equivalent in Kingston — and the enquiries are just as real. First mover advantage here is substantial and durable.',
      },
    ],
    insightClose:
      'The practical takeaway for a Byfleet business: do not assume SEO is only for bigger towns. The economics are better here, not worse. A well-built site targeting Byfleet, West Byfleet and the neighbouring areas can realistically own the local results — and once established, that position is difficult for a latecomer to dislodge.',

    servicesLabel: 'What We Do in Byfleet',
    servicesHeading: 'Everything your Byfleet business<br><em>needs to get found locally</em>',
    services: [
      {
        icon: '📍',
        title: 'Local SEO & Google Business',
        body:
          'The priority for most Byfleet businesses. We set up and optimise your Google Business Profile and build the local SEO foundations to rank across both villages.',
        feats: [
          'Google Business Profile setup & optimisation',
          'Local SEO targeting Byfleet & West Byfleet',
          'Google Maps and local pack visibility',
          'Monthly performance reporting',
        ],
      },
      {
        icon: '🎨',
        title: 'Website Design & Build',
        body:
          'A fully custom site built for your Byfleet business — designed around getting a phone call, not around winning design awards.',
        feats: [
          '100% custom design — no templates',
          'Click-to-call and quote request forms',
          'Mobile-first, fast on any connection',
          'Full training included at handover',
        ],
      },
      {
        icon: '🌐',
        title: 'Hosting & Ongoing Support',
        body:
          'Hosting, domains, security, updates and maintenance handled by us, so you can be on site rather than fixing a website.',
        feats: [
          'Managed hosting & domain setup',
          'Free SSL & fast UK-based servers',
          'Regular updates & maintenance',
          'Priority support whenever you need it',
        ],
      },
    ],

    faqHeading: 'Common questions<br><em>from Byfleet businesses</em>',
    faqs: [
      {
        q: 'Is Byfleet too small for SEO to be worth doing?',
        a: 'The opposite, in practice. Fewer competing businesses means ranking is achievable with far less work than in a larger town, and the enquiries are just as valuable. Small catchments are usually where local SEO delivers its best return — the ceiling is lower, but so is the cost of reaching it.',
      },
      {
        q: 'Do you cover West Byfleet as well as Byfleet?',
        a: 'Yes, and it matters that they are treated as two places. Byfleet and West Byfleet are distinct villages with separate centres, and people search for them separately. We build the site so it ranks for both rather than blurring them into one.',
      },
      {
        q: 'I am a tradesperson — what should my website actually do?',
        a: 'Load instantly on a phone, make it obvious what you do and where you work, and make calling you a single tap. Most trade enquiries are urgent, so the site that gets the job is usually the one that answered the question fastest — not the one that looked the most impressive.',
      },
      {
        q: 'Do you cover Woking, Weybridge and the surrounding areas?',
        a: 'Yes — we work across Byfleet, West Byfleet, Woking, Weybridge, Chertsey and Hersham, as well as the wider Surrey and South West London area. We also work remotely with businesses anywhere in the UK.',
      },
    ],

    ctaHeading: 'Ready to get your<br><em>Byfleet business found?</em>',
  },
];

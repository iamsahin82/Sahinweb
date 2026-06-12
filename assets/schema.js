/* ============================================================
   SHAHIN WEB — Content Schema (v3)
   ONE source of truth. Every field renders on the site via
   data-bind="key" AND auto-appears in the Admin Panel editor.
   POLICY: Client names are never attached to performance data.
   Numbers shown are real; identities stay private.
   ============================================================ */
window.SW_SCHEMA = [
  {
    section: "Contact & WhatsApp",
    icon: "phone",
    hint: "Used by every WhatsApp button, phone link, and footer across the whole site.",
    fields: [
      { key: "whatsapp", label: "WhatsApp Number", def: "+91 74777 53500" },
      { key: "phone", label: "Phone", def: "+91 74777 53500" },
      { key: "email", label: "Email", def: "sahin@goodwordbooks.com" },
      { key: "address", label: "Serving Line", def: "Diamond Harbour · Kolkata · Delhi · Pan-India" },
      { key: "gst", label: "GST Line (footer)", def: "GSTIN: Coming soon" },
      { key: "ga_id", label: "Google Analytics ID (G-XXXXXXX, optional)", def: "" }
    ]
  },
  {
    section: "Social Links",
    icon: "globe",
    hint: "Profile URLs. Leave a field as # to show the icon without a link yet, or blank to hide it.",
    fields: [
      { key: "fb_url", label: "Facebook URL", def: "https://www.facebook.com/iamsahin82" },
      { key: "insta_url", label: "Instagram URL", def: "https://www.instagram.com/iamsahin82/" },
      { key: "li_url", label: "LinkedIn URL", def: "#" },
      { key: "reddit_url", label: "Reddit URL", def: "#" },
      { key: "yt_url", label: "YouTube URL", def: "#" }
    ]
  },
  {
    section: "Hero Section",
    icon: "star",
    hint: "The first 3 seconds. The whole game is won or lost here.",
    fields: [
      { key: "hero_badge", label: "Badge Text", def: "Kolkata · Delhi · Pan-India — Growth-First Agency" },
      { key: "hero_h1_a", label: "Headline Line 1", def: "We Turn Marketing Budgets" },
      { key: "hero_h1_b", label: "Headline Line 2 (gradient)", def: "Into Predictable Revenue" },
      { key: "hero_sub", label: "Subheadline", def: "Marketing, video editing, web development, design, AI automation, and e-commerce management — one team, end to end. We took a brand from near zero to 186K monthly sessions, and we would love to do it for you.", type: "textarea" },
      { key: "hero_cta1", label: "Primary Button", def: "Book Your Free 30-Min Strategy Call" },
      { key: "hero_cta2", label: "Secondary Button", def: "Get a Free Marketing Audit First" },
      { key: "trust1", label: "Trust Strip 1", def: "4.1x ROAS, Sustained" },
      { key: "trust2", label: "Trust Strip 2", def: "186K Monthly Sessions Built" },
      { key: "trust3", label: "Trust Strip 3", def: "20+ In-House Specialists" },
      { key: "trust4", label: "Trust Strip 4", def: "Kolkata · Delhi · Pan-India" }
    ]
  },
  {
    section: "Hero Dashboard Cards",
    icon: "chart",
    hint: "The 3D floating cards on the right of the hero.",
    fields: [
      { key: "fc1_label", label: "Card 1 Label", def: "Monthly Sessions" },
      { key: "fc1_value", label: "Card 1 Value", def: "186K" },
      { key: "fc1_delta", label: "Card 1 Delta", def: "+4000% in 7 months" },
      { key: "fc2_label", label: "Card 2 Label", def: "ROAS" },
      { key: "fc2_value", label: "Card 2 Value", def: "4.1x" },
      { key: "fc2_delta", label: "Card 2 Delta", def: "Profitable & scaling" },
      { key: "fc3_label", label: "Card 3 Label", def: "Products Live" },
      { key: "fc3_value", label: "Card 3 Value", def: "735+" },
      { key: "fc3_ring", label: "Card 3 Ring Text", def: "API" }
    ]
  },
  {
    section: "Clients Strip",
    icon: "users",
    hint: "Brands worked with. Format: Name or Name|img:path-to-logo. Comma separated.",
    fields: [
      { key: "clients_head", label: "Strip Title", def: "BRANDS WE'VE WORKED WITH" },
      { key: "clients_list", label: "Clients (comma separated)", def: "Goodword Books|img:assets/img/goodword.jpg, Goodword India, Goodword Bangla, Maulana Wahiduddin Khan — Official, Saniyasnain Khan, Maria Khan, Shoaib Ilyas, Medha Care, QuestX, Sky Blue Publication, CPS Bangla", type: "textarea" }
    ]
  },
  {
    section: "Ticker Marquee (the light one)",
    icon: "zap",
    hint: "The scrolling strip after the stats. Short, friendly, a little playful.",
    fields: [
      { key: "marq1", label: "Line 1", def: "4.1x ROAS. The calculator double-checked. Twice." },
      { key: "marq2", label: "Line 2", def: "186K monthly sessions. Started at basically zero." },
      { key: "marq3", label: "Line 3", def: "1000+ videos delivered. Our timeline scrubber needs a holiday." },
      { key: "marq4", label: "Line 4", def: "We reply on WhatsApp faster than your cousin" },
      { key: "marq5", label: "Line 5", def: "Client data stays private. Even our wins are discreet." },
      { key: "marq6", label: "Line 6", def: "Built with AI. Powered by chai." }
    ]
  },
  {
    section: "Trust Bar Stats",
    icon: "award",
    hint: "The four animated counters. Number animates; prefix/suffix wrap it.",
    fields: [
      { key: "stat1_pre", label: "Stat 1 Prefix", def: "", w: "xs" },
      { key: "stat1_num", label: "Stat 1 Number", def: "4.1", w: "s" },
      { key: "stat1_suffix", label: "Stat 1 Suffix", def: "x", w: "xs" },
      { key: "stat1_label", label: "Stat 1 Label", def: "Return on Ad Spend (ROAS)" },
      { key: "stat2_pre", label: "Stat 2 Prefix", def: "", w: "xs" },
      { key: "stat2_num", label: "Stat 2 Number", def: "186", w: "s" },
      { key: "stat2_suffix", label: "Stat 2 Suffix", def: "K+", w: "xs" },
      { key: "stat2_label", label: "Stat 2 Label", def: "Monthly Sessions Grown" },
      { key: "stat3_pre", label: "Stat 3 Prefix", def: "", w: "xs" },
      { key: "stat3_num", label: "Stat 3 Number", def: "4000", w: "s" },
      { key: "stat3_suffix", label: "Stat 3 Suffix", def: "%+", w: "xs" },
      { key: "stat3_label", label: "Stat 3 Label", def: "Traffic Growth in 7 Months" },
      { key: "stat4_pre", label: "Stat 4 Prefix", def: "", w: "xs" },
      { key: "stat4_num", label: "Stat 4 Number", def: "1000", w: "s" },
      { key: "stat4_suffix", label: "Stat 4 Suffix", def: "+", w: "xs" },
      { key: "stat4_label", label: "Stat 4 Label", def: "Videos Delivered & Counting" }
    ]
  },
  {
    section: "Growth Graph",
    icon: "chart",
    hint: "The scroll-drawn growth curve. The line draws itself as visitors scroll.",
    fields: [
      { key: "graph_kicker", label: "Kicker", def: "The Curve" },
      { key: "graph_h", label: "Headline", def: "This Is What Growth Looks Like" },
      { key: "graph_sub", label: "Subtext", def: "Keep scrolling — the line knows what to do. It's the same direction we send your traffic.", type: "textarea" },
      { key: "graph_start", label: "Start Label", def: "Month 1 · Near zero" },
      { key: "graph_end", label: "End Label", def: "Month 7 · 186K sessions" },
      { key: "graph_funny", label: "Light Caption", def: "Curve drawn to scale. Drama included free of charge." }
    ]
  },
  {
    section: "Portfolio — Real Work",
    icon: "briefcase",
    hint: "Project showcase. Performance data is never attributed to a named client.",
    fields: [
      { key: "pf_head", label: "Section Headline", def: "Don't Take Our Word. Take Our Work." },
      { key: "pf_sub", label: "Section Subtext", def: "Real projects. Real infrastructure. Real growth. Built end-to-end — strategy, code, ads, video, and everything in between. Client names stay private; the work speaks anyway.", type: "textarea" },

      { key: "pf1_tag", label: "Project 1 Tag", def: "E-COMMERCE · FULL REBUILD" },
      { key: "pf1_name", label: "Project 1 Name", def: "Heritage Books E-Commerce Platform" },
      { key: "pf1_url", label: "Project 1 Sub-line", def: "Client name kept private, with respect" },
      { key: "pf1_desc", label: "Project 1 Description", def: "We analysed an established publisher's entire digital infrastructure, then rebuilt it from scratch: custom REST API on Supabase, 735+ books & 125+ authors imported, Shopify theme coded in Liquid, WhatsApp API automation, and Meta + Google Ads — all managed by our in-house team.", type: "textarea" },
      { key: "pf1_s1n", label: "P1 Stat 1 Number", def: "4.1x", w: "s" },
      { key: "pf1_s1l", label: "P1 Stat 1 Label", def: "ROAS, sustained" },
      { key: "pf1_s2n", label: "P1 Stat 2 Number", def: "186K", w: "s" },
      { key: "pf1_s2l", label: "P1 Stat 2 Label", def: "Monthly sessions" },
      { key: "pf1_s3n", label: "P1 Stat 3 Number", def: "735+", w: "s" },
      { key: "pf1_s3l", label: "P1 Stat 3 Label", def: "Books on live API" },

      { key: "pf2_tag", label: "Project 2 Tag", def: "LEGACY · PRESTIGE PROJECT" },
      { key: "pf2_name", label: "Project 2 Name", def: "Maulana Wahiduddin Khan — Official Website" },
      { key: "pf2_url", label: "Project 2 Sub-line", def: "Official digital legacy" },
      { key: "pf2_desc", label: "Project 2 Description", def: "We manage the official website of Maulana Wahiduddin Khan — Padma Bhushan awardee, world-renowned scholar and peace activist. Full upkeep, content, and technical management of one of India's most respected digital legacies.", type: "textarea" },
      { key: "pf2_s1n", label: "P2 Stat 1 Number", def: "Padma", w: "s" },
      { key: "pf2_s1l", label: "P2 Stat 1 Label", def: "Bhushan laureate's official site" },
      { key: "pf2_s2n", label: "P2 Stat 2 Number", def: "24/7", w: "s" },
      { key: "pf2_s2l", label: "P2 Stat 2 Label", def: "Reliable global access" },
      { key: "pf2_s3n", label: "P2 Stat 3 Number", def: "100%", w: "s" },
      { key: "pf2_s3l", label: "P2 Stat 3 Label", def: "Trust. Zero compromise." },

      { key: "pf3_tag", label: "Project 3 Tag", def: "MEDIA · VIDEO PRODUCTION" },
      { key: "pf3_name", label: "Project 3 Name", def: "CPS Bangla" },
      { key: "pf3_url", label: "Project 3 Sub-line", def: "Media & education channel" },
      { key: "pf3_desc", label: "Project 3 Description", def: "Edited and produced video content in Premiere Pro for a Bengali media & education channel — cuts, transitions, colour grading, motion graphics, and a publishing schedule that never slipped.", type: "textarea" },
      { key: "pf3_s1n", label: "P3 Stat 1 Number", def: "2 yrs", w: "s" },
      { key: "pf3_s1l", label: "P3 Stat 1 Label", def: "Consistent production" },
      { key: "pf3_s2n", label: "P3 Stat 2 Number", def: "YT+", w: "s" },
      { key: "pf3_s2l", label: "P3 Stat 2 Label", def: "Platform-ready formats" },
      { key: "pf3_s3n", label: "P3 Stat 3 Number", def: "0", w: "s" },
      { key: "pf3_s3l", label: "P3 Stat 3 Label", def: "Missed deadlines" },

      { key: "pf4_tag", label: "Also-Building Heading", def: "ALSO BUILDING FOR" },
      { key: "ab1_name", label: "Mini Card 1 Name", def: "Medha Care" },
      { key: "ab1_tag", label: "Mini Card 1 Industry", def: "Healthcare" },
      { key: "ab1_desc", label: "Mini Card 1 Text", def: "Website, patient-first growth systems, and digital infrastructure for a healthcare brand." },
      { key: "ab2_name", label: "Mini Card 2 Name", def: "QuestX" },
      { key: "ab2_tag", label: "Mini Card 2 Industry", def: "Edtech" },
      { key: "ab2_desc", label: "Mini Card 2 Text", def: "Learning platform presence, admissions funnels, and growth marketing for an edtech venture." },
      { key: "ab3_name", label: "Mini Card 3 Name", def: "Sky Blue Publication" },
      { key: "ab3_tag", label: "Mini Card 3 Industry", def: "Publishing" },
      { key: "ab3_desc", label: "Mini Card 3 Text", def: "Catalogue, storefront, and reader-growth systems for an independent publishing house." }
    ]
  },
  {
    section: "Video Popup",
    icon: "film",
    hint: "Shows once per visit, 5 seconds after the page loads — if Ad-Duha.mp4 exists in the site folder (or assets/img/). Set 'Show Popup' to no to disable.",
    fields: [
      { key: "video_on", label: "Show Popup (yes/no)", def: "yes", w: "s" },
      { key: "video_title", label: "Popup Title", def: "30 Seconds of Our Editing" },
      { key: "video_sub", label: "Popup Subtext", def: "Shot, cut, and graded by our team. If you like what you see, imagine your brand in it." }
    ]
  },
  {
    section: "Lead Catcher Game",
    icon: "gamepad",
    hint: "The mini-game on the homepage. Ends with a friendly lead-capture form.",
    fields: [
      { key: "game_kicker", label: "Kicker", def: "A Little Fun" },
      { key: "game_h", label: "Headline", def: "Think Catching Leads Is Easy?" },
      { key: "game_sub", label: "Subtext", def: "You get 20 seconds. Click every lead before it slips away. We do this all day — with ads, funnels, and a lot more caffeine.", type: "textarea" },
      { key: "game_btn", label: "Start Button", def: "Start Catching" },
      { key: "game_end_h", label: "End Headline", def: "Not bad at all!" },
      { key: "game_end_p", label: "End Message", def: "Now imagine a 20+ person team catching leads for you every single day — minus the finger cramps. Leave your number and we'll show you how it works.", type: "textarea" },
      { key: "game_form_btn", label: "Form Button", def: "Catch Me Some Real Leads" }
    ]
  },
  {
    section: "Credentials & Trust",
    icon: "shield",
    hint: "Real certifications and promises that help visitors trust you.",
    fields: [
      { key: "cred_head", label: "Section Headline", def: "Certified, Accountable, and Easy to Reach" },
      { key: "cred1_t", label: "Credential 1", def: "Google Ads Certified" },
      { key: "cred1_s", label: "Credential 1 Sub", def: "Google Skillshop" },
      { key: "cred2_t", label: "Credential 2", def: "Meta Blueprint" },
      { key: "cred2_s", label: "Credential 2 Sub", def: "Ads Manager Certification" },
      { key: "cred3_t", label: "Credential 3", def: "IIT Madras — GenAI" },
      { key: "cred3_s", label: "Credential 3 Sub", def: "Advanced Software Dev. (Pursuing)" },
      { key: "cred4_t", label: "Credential 4", def: "2-Hour Response" },
      { key: "cred4_s", label: "Credential 4 Sub", def: "Mon–Sat, 9AM–7PM. WhatsApp is faster." },
      { key: "promise", label: "Honest-Advice Promise", def: "Our promise: if we don't believe we can genuinely help you on the strategy call, we'll say so — and point you somewhere better. Your time matters more than our pitch.", type: "textarea" }
    ]
  },
  {
    section: "Tools Marquee",
    icon: "code",
    hint: "The reverse-scrolling strip of tools with logos. Comma-separated list.",
    fields: [
      { key: "tools_head", label: "Strip Title", def: "OUR ARSENAL" },
      { key: "tools_list", label: "Tools (comma separated)", def: "Premiere Pro, After Effects, Video Editing, Script Writing, React, Next.js, Node.js, PostgreSQL, Supabase, Shopify, WordPress, SEO, Meta Ads, Google Ads, Claude AI, ChatGPT, Gemini, Canva, Figma, GitHub", type: "textarea" },
      { key: "tools_funny", label: "Light Caption", def: "We don't list these to show off. Okay — maybe a little." }
    ]
  },
  {
    section: "Case Studies",
    icon: "award",
    hint: "The three neon-number result cards. Real numbers, anonymous clients.",
    fields: [
      { key: "cs1_tag", label: "Case 1 Tag", def: "E-commerce · Performance Ads" },
      { key: "cs1_num", label: "Case 1 Big Number", def: "4.1", w: "s" },
      { key: "cs1_metric", label: "Case 1 Metric Line", def: "Return on Ad Spend, Sustained" },
      { key: "cs1_challenge", label: "Case 1 Challenge", def: "Ads burning budget with no system behind them" },
      { key: "cs1_how", label: "Case 1 Solution", def: "Meta + Google Ads rebuilt end-to-end with full-funnel tracking" },
      { key: "cs2_tag", label: "Case 2 Tag", def: "E-commerce · Organic Growth" },
      { key: "cs2_num", label: "Case 2 Big Number", def: "186", w: "s" },
      { key: "cs2_metric", label: "Case 2 Metric Line", def: "K Monthly Sessions — 4000%+ Growth" },
      { key: "cs2_challenge", label: "Case 2 Challenge", def: "Traffic was basically a rounding error" },
      { key: "cs2_how", label: "Case 2 Solution", def: "SEO + 700+ product listings + content & reels strategy" },
      { key: "cs3_tag", label: "Case 3 Tag", def: "E-commerce · Infrastructure" },
      { key: "cs3_num", label: "Case 3 Big Number", def: "735", w: "s" },
      { key: "cs3_metric", label: "Case 3 Metric Line", def: "Products on a Custom-Built Live API" },
      { key: "cs3_challenge", label: "Case 3 Challenge", def: "Catalogue chaos, manual everything" },
      { key: "cs3_how", label: "Case 3 Solution", def: "Supabase PostgreSQL + REST API + WhatsApp order automation" }
    ]
  },
  {
    section: "Testimonials",
    icon: "chat",
    hint: "Three quote cards. Clients stay anonymous unless they ask to be named.",
    fields: [
      { key: "ts1_text", label: "Quote 1", def: "Our entire digital side — store, ads, automation — was rebuilt from scratch. The growth curve since then speaks for itself.", type: "textarea" },
      { key: "ts1_name", label: "Quote 1 Name", def: "E-commerce Client" },
      { key: "ts1_biz", label: "Quote 1 Business", def: "Heritage Books Publisher" },
      { key: "ts2_text", label: "Quote 2", def: "Managing the digital legacy of a Padma Bhushan laureate needs absolute reliability. The site simply never lets us down.", type: "textarea" },
      { key: "ts2_name", label: "Quote 2 Name", def: "CPS Team" },
      { key: "ts2_biz", label: "Quote 2 Business", def: "Maulana Wahiduddin Khan — Official Website" },
      { key: "ts3_text", label: "Quote 3", def: "Consistent, platform-perfect video output for two years straight. Deadlines were never a conversation we had to have.", type: "textarea" },
      { key: "ts3_name", label: "Quote 3 Name", def: "CPS Bangla" },
      { key: "ts3_biz", label: "Quote 3 Business", def: "Media & Education Channel" }
    ]
  },
  {
    section: "Founder, Co-Founder & Team",
    icon: "users",
    hint: "Team list format: one per line, Name | Role. Add a photo by saving assets/img/team/firstname.jpg (lowercase).",
    fields: [
      { key: "founder_name", label: "Founder Name", def: "Sahin Molla" },
      { key: "founder_title", label: "Founder Title", def: "Founder · Full-Stack Developer & Growth Strategist" },
      { key: "founder_bio", label: "Founder Bio", def: "Self-taught full-stack developer (Next.js, React, Node.js, Supabase), performance marketer, video editor, and frontier AI operator. Built the complete digital stack and growth engine of a leading heritage books publisher. Manages the official website of Padma Bhushan laureate Maulana Wahiduddin Khan. Also building for Medha Care, QuestX, and Sky Blue Publication.", type: "textarea" },
      { key: "cofounder_name", label: "Co-Founder Name", def: "Ashif Akhon" },
      { key: "cofounder_title", label: "Co-Founder Title", def: "Co-Founder · Operations & Client Success" },
      { key: "cofounder_bio", label: "Co-Founder Bio", def: "Keeps every project on schedule and every client in the loop. The reason our 2-hour response promise is actually kept.", type: "textarea" },
      { key: "team_count", label: "Team Count", def: "20+", w: "s" },
      { key: "team_count_label", label: "Team Count Label", def: "specialists across marketing, video, dev, design & e-commerce" },
      { key: "team_list", label: "Team Members (Name | Role, one per line)", def: "Afruja Khatun | Content & Social Media\nAfsana Parvin | Design & Creatives\nAzizul | Web Development\nSuvendu | Video Editing\nGousul Azom | Performance Marketing\nMeer | E-commerce Operations", type: "textarea" },
      { key: "team_note", label: "Team Note", def: "You'll always work directly with the founders and senior specialists — never passed down the line." }
    ]
  },
  {
    section: "Final CTA",
    icon: "rocket",
    hint: "The last push. Warm, confident, zero pressure.",
    fields: [
      { key: "cta_h", label: "Headline", def: "Your Growth Deserves a Serious Plan. Let's Build It Together." },
      { key: "cta_p", label: "Subtext", def: "Book a free 30-minute strategy call — we'll review your current marketing, find the biggest opportunities, and give you a clear picture of where you could be in 90 days. Even if we never work together, you'll leave with real value.", type: "textarea" },
      { key: "cta_btn", label: "Button Text", def: "Book My Free Strategy Call" },
      { key: "cta_micro", label: "Micro-copy", def: "No commitment. No pressure. Yes, the button glows. Yes, you may click it." }
    ]
  },
  {
    section: "Footer",
    icon: "layout",
    hint: "Last impression. Still an impression.",
    fields: [
      { key: "footer_tagline", label: "Tagline", def: "India's Growth-First Agency — Kolkata · Delhi · Pan-India. We turn marketing budgets into measurable, predictable revenue." },
      { key: "footer_funny", label: "Light Sign-off", def: "Made with code, chai, and a healthy obsession with ROAS." }
    ]
  }
];

/* Flatten to DEFAULTS used by main.js + admin */
window.SW_DEFAULTS = {};
window.SW_SCHEMA.forEach(function (sec) {
  sec.fields.forEach(function (f) { window.SW_DEFAULTS[f.key] = f.def; });
});

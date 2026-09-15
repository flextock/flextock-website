export type JourneyIcon = "activity" | "shield" | "refresh";
export type Locale = "en" | "ar";
export type SolutionDetail = {
  title: string;
  intro: string;
  image: { src: string; alt: string };
  secondaryImages?: { src: string; alt: string }[];
  problem: { eyebrow: string; title: string; description: string };
  outcomes: { value: string; label: string }[];
  steps: { title: string; description: string }[];
};
export type SolutionSlug =
  | "end-to-end-fulfilment"
  | "delivery-aggregation"
  | "cross-border-trade"
  | "sales"
  | "flexcash";

export const siteConfig = {
  brand: "flextock",
  logoAlt: "Flextock",
  menuLabel: "Open navigation",
  closeMenuLabel: "Close navigation",
  mainNavLabel: "Main navigation",
  solutionsLabel: "Solutions",
  solutionsOverviewLabel: "View all solutions",
  playVideoLabel: "Play video",
  pauseVideoLabel: "Pause video",
  primaryCta: "Get Quote",
  secondaryCta: "Explore our System",
  contactHref: "/quote",
  contactEmail: "info@flextock.com",
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Flextock.eg/",
    icon: "/icons/facebook.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/flextock.co/?hl=en",
    icon: "/icons/instagram.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/flextock/posts/?feedView=all",
    icon: "/icons/linkedin.png",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@flextock.eg",
    icon: "/icons/tik-tok.png",
  },
] as const;

export const localeConfig = {
  en: { label: "EN", switchLabel: "العربية", direction: "ltr" },
  ar: { label: "عربي", switchLabel: "English", direction: "rtl" },
} satisfies Record<Locale, { label: string; switchLabel: string; direction: "ltr" | "rtl" }>;

export const navigation = {
  primary: [
    { label: "Technology", href: "/technology" },
    { label: "Resources", href: "/resources" },
    { label: "Company", href: "/company" },
  ],
  solutions: [
    {
      name: "End to End Fulfillment",
      slug: "end-to-end-fulfilment" as SolutionSlug,
      description: "Receiving, storage, packing, delivery, and returns.",
    },
    {
      name: "Flexship",
      slug: "delivery-aggregation" as SolutionSlug,
      description: "Choose and manage couriers from one workflow.",
    },
    {
      name: "Flexborders",
      slug: "cross-border-trade" as SolutionSlug,
      description: "Coordinate the work behind Egypt–Saudi expansion.",
    },
    {
      name: "Flexshops",
      slug: "sales" as SolutionSlug,
      description: "Select products, run campaigns, and outsource operations.",
    },
    {
      name: "Flexcash",
      slug: "flexcash" as SolutionSlug,
      description: "Connect collections, deductions, and available cash.",
    },
  ],
};

export const heroContent = {
  eyebrow: "Commerce infrastructure for growing brands",
  title: "The system built to help your business grow.",
  description:
    "Managing your operations has never been easier. Flextock manages your fulfillment, storage, delivery, and more with one inclusive system.",
  supportingText: "Built for growth with a grow-as-you-go mindset.",
};

export const heroSignals = [
  {
    label: "Orders",
    value: "Connected",
    detail: "Keep every order visible from source to return.",
  },
  {
    label: "Inventory",
    value: "Live",
    detail: "Know what is available before the next campaign starts.",
  },
  {
    label: "Delivery",
    value: "Orchestrated",
    detail: "Choose the service that fits the customer promise.",
  },
];

export const videoContent = {
  eyebrow: "Inside Flextock",
  title: "From order placed to order delivered and everything in between.",
  description:
    "Get to know the people, processes, and technology behind it all.",
  source: "/videos/Flextock v04.mp4",
  poster: "/pictures/2 copy 10.png",
  label: "Flextock explainer video",
};

export const brandAssets = {
  growth: {
    src: "/pictures/2 copy 5.png",
    alt: "Flextock campaign image showing a growing brand surrounded by parcels",
  },
  merchantGrowth: {
    src: "/pictures/2 copy 9.png",
    alt: "Merchant standing among Flextock inventory boxes",
  },
  warehouse: {
    src: "/pictures/2 copy 16.png",
    alt: "Flextock labels and shipping equipment on an operations desk",
  },
  fulfillment: {
    src: "/pictures/2 copy 10.png",
    alt: "Product selection workflow on a tablet",
  },
  fulfillmentSecondary: {
    src: "/pictures/2 copy 8.png",
    alt: "Flextock commerce operation shown in a city market",
  },
  omnichannel: {
    src: "/pictures/2 copy 15.png",
    alt: "Retail team using a connected inventory workflow",
  },
  productSelection: {
    src: "/pictures/2 copy 7.png",
    alt: "Merchant holding a Flextock parcel in a dropshipping-style operation",
  },
  delivery: {
    src: "/pictures/2 copy 13.png",
    alt: "Flextock delivery milestone shown from inside a vehicle",
  },
  market: {
    src: "/pictures/2 copy 6.png",
    alt: "Flextock operator standing in front of organized inventory",
  },
  technology: {
    src: "/pictures/2 copy 11.png",
    alt: "Operations dashboard showing sales and fulfillment activity",
  },
};

export const marketingVisuals = {
  heroPhotos: [
    {
      src: null as string | null,
      label: { en: "Warehouse interior", ar: "داخل المستودع" },
      note: { en: "Real-life photo pending", ar: "الصورة الحقيقية قيد التسليم" },
      alt: "Warehouse interior",
    },
    {
      src: null as string | null,
      label: { en: "Order being prepared", ar: "تجهيز الطلب" },
      note: { en: "Real-life photo pending", ar: "الصورة الحقيقية قيد التسليم" },
      alt: "Order being prepared",
    },
    {
      src: null as string | null,
      label: { en: "Employee", ar: "موظف" },
      note: { en: "Real-life photo pending", ar: "الصورة الحقيقية قيد التسليم" },
      alt: "Flextock employee",
    },
  ],
  egyptKsa: {
    src: null as string | null,
    label: { en: "Egypt–KSA graphic", ar: "رسم بين مصر والسعودية" },
    note: {
      en: "Graphic pending — a visual between Egypt and KSA",
      ar: "الرسم قيد التسليم — صورة بين مصر والسعودية",
    },
    alt: "Graphic between Egypt and Saudi Arabia",
  },
};

export const partnersContent = {
  en: {
    eyebrow: "Trusted by",
    title: "Brands that flow and grow every day with Flextock",
    meta: "Operating with us",
  },
  ar: {
    eyebrow: "نفتخر بثقتهم فينا",
    title: "علامات تجارية تنمو كل يوم مع فلكستوك",
    meta: "شركاء يعملون معنا",
  },
} as const;

export const showcaseContent = {
  eyebrow: "Tech-enabled operations: how does it work?",
  title: "The right signal at the right moment.",
  description:
    "Flextock's system notifies you and your team with every update to manage any issue easily and swiftly.",
  systemLabel: "Flextock OS",
  signalLabel: "Operating signal",
  visualPendingLabel: "Operating visual pending",
  visualPendingNote:
    "Replace with photography or motion so this panel does not look AI-generated.",
};

export const journeySteps = [
  {
    number: "01",
    icon: "activity" as JourneyIcon,
    label: "Operations Intelligence",
    title: "Beyond Fulfillment",
    description:
      "Fulfillment, delivery-only, and even cross-border growth all in one unified portal and system.",
    visualLabel: "One unified portal",
    visualValue: "1",
    visualUnit: "connected operations",
    visualBars: [38, 52, 46, 68, 58, 78, 72, 88],
  },
  {
    number: "02",
    icon: "activity" as JourneyIcon,
    label: "Inventory Intelligence",
    title: "Predictive Supply & Demand",
    description:
      "Intelligent system that calculates real-time SKU run rates and inventory to flag stock at risk in advance.",
    visualLabel: "Live updates",
    visualValue: "SKU",
    visualUnit: "run rate",
    visualBars: [82, 76, 68, 58, 50, 42, 34, 28],
  },
  {
    number: "03",
    icon: "shield" as JourneyIcon,
    label: "COD Risk Management",
    title: "Risk Management Before Dispatch.",
    description:
      "Screening systems for COD orders that detect customer patterns before dispatch to minimize risk before cost is incurred.",
    visualLabel: "Risk managed",
    visualValue: "COD",
    visualUnit: "screened orders",
    visualBars: [24, 30, 28, 44, 36, 62, 48, 70],
  },
  {
    number: "04",
    icon: "refresh" as JourneyIcon,
    label: "Reverse Logistics",
    title: "Transparent Reverse Logistics",
    description:
      "Returned orders are investigated and classified to distinguish sellable and non-sellable inventory transparently.",
    visualLabel: "RTM classifications",
    visualValue: "RTM",
    visualUnit: "for every return",
    visualBars: [72, 64, 58, 48, 42, 36, 30, 24],
  },
];

export const solutionCards = [
  {
    title: "End to End Fulfillment",
    slug: "end-to-end-fulfilment" as SolutionSlug,
    description:
      "Bring receiving, storage, picking, packing, dispatch, and returns into one managed workflow.",
  },
  {
    title: "Flexship",
    slug: "delivery-aggregation" as SolutionSlug,
    description:
      "Aggregate couriers and give every order the right delivery path.",
  },
  {
    title: "Flexborders",
    slug: "cross-border-trade" as SolutionSlug,
    description:
      "Coordinate the operational work behind moving proven products from Egypt into Saudi Arabia.",
  },
  {
    title: "Flexshops",
    slug: "sales" as SolutionSlug,
    description:
      "Select products, run campaigns, and outsource operations.",
  },
  {
    title: "Flexcash",
    slug: "flexcash" as SolutionSlug,
    description:
      "Connect collections, deductions, and available cash.",
  },
];

export const ecosystemContent = {
  en: {
    eyebrow: "The Flextock ecosystem",
    title: "Services that fit your needs.",
    description:
      "Start with what's stressing you out right now, and easily grow as you go.",
    linkLabel: "Learn more",
    interactionHint: "Select a service",
    cards: [
      {
        name: "Flexcash",
        label: "Liquidity",
        description:
          "Keep liquidity, deductions, and collections organized in one financial flow.",
        href: "/solutions/flexcash",
        visualSteps: ["Collections", "Deductions", "Available cash"],
      },
      {
        name: "Flexship",
        label: "Delivery orchestration",
        description:
          "Smooth delivery-only: an efficient shipping system that automatically matches orders with the best courier in the area.",
        href: "/solutions/delivery-aggregation",
        visualSteps: ["Order", "Courier", "Delivered"],
      },
      {
        name: "Flexborders",
        label: "Regional expansion",
        description:
          "Expand into KSA with ease: no hassle, no paperwork, and no need to open an office. We've got it all covered.",
        href: "/solutions/cross-border-trade",
        visualSteps: ["Egypt", "Border", "Saudi Arabia"],
      },
      {
        name: "Flexshops",
        label: "KSA commerce model",
        description:
          "Grow your sales by selling across different channels from the same platform.",
        href: "/solutions/sales",
        visualSteps: ["Product", "Campaign", "Order"],
      },
    ],
  },
  ar: {
    eyebrow: "نظام فلكستوك المتكامل",
    title: "خدمات تلائم احتياجاتك.",
    description:
      "ابدأ بحل أكثر ما يقلقك أولًا، وتمتع بسهولة النمو عند الاحتياج.",
    linkLabel: "اعرف المزيد",
    interactionHint: "اختر طبقة التشغيل",
    cards: [
      {
        name: "Flexcash",
        label: "السيولة",
        description:
          "حافظ على السيولة المالية والخصومات والتحصيل منظمة في نظام مالي موحد.",
        href: "/solutions/flexcash",
        visualSteps: ["التحصيل", "الخصومات", "السيولة المتاحة"],
      },
      {
        name: "Flexship",
        label: "تنسيق التوصيل",
        description:
          "خدمات للتوصيل فقط سلسة: نظام توصيل فعال يوافق طلبات عملائك مع أفضل شركة شحن في المنطقة تلقائيًا.",
        href: "/solutions/delivery-aggregation",
        visualSteps: ["الطلب", "المندوب", "تم التوصيل"],
      },
      {
        name: "Flexborders",
        label: "التوسع الإقليمي",
        description:
          "توسع في السعودية بسهولة: بدون توتر من الأوراق الرسمية أو الاحتياج لفتح مكتب، نحن نتولى العملية بأكملها.",
        href: "/solutions/cross-border-trade",
        visualSteps: ["مصر", "الحدود", "السعودية"],
      },
      {
        name: "Flexshops",
        label: "نموذج تجارة في السعودية",
        description:
          "كبر مبيعاتك عن طريق البيع في قنوات متنوعة من داخل نفس المنصة.",
        href: "/solutions/sales",
        visualSteps: ["المنتج", "الحملة", "الطلب"],
      },
    ],
  },
} as const;

export const solutionPageContent = {
  eyebrow: "A Flextock Solution",
  cta: "Talk to our team",
  howItWorks: "How it works",
};

export const solutionsOverviewContent = {
  eyebrow: "Solutions",
  title: "Choose the capability your operation needs next.",
  description:
    "Start with one service or combine the pieces that keep your customer promise, margins, and regional growth on track.",
  ctaTitle: "Tell us what the operation needs next.",
  cta: "Talk to our team",
};

export const solutionDetails: Record<string, SolutionDetail> = {
  "end-to-end-fulfillment": {
    title: "Operate every order from one control layer.",
    intro:
      "Give your team one reliable workflow for receiving, storing, picking, packing, dispatching, and managing returns.",
    image: brandAssets.fulfillment,
    secondaryImages: [brandAssets.fulfillmentSecondary],
    problem: {
      eyebrow: "The operational gap",
      title: "Growth should not create more places to lose control.",
      description:
        "When orders, inventory, and returns live in separate tools, every new channel adds friction. Flextock brings the full order lifecycle into one accountable operation.",
    },
    outcomes: [
      { value: "Full cycle", label: "from receive to return" },
      { value: "Live", label: "inventory movement" },
      { value: "One view", label: "for operational decisions" },
    ],
    steps: [
      { title: "Connect your channels", description: "Bring storefronts, marketplaces, and order sources into one queue." },
      { title: "Store with confidence", description: "Track every SKU, location, and movement in real time." },
      { title: "Pick and pack precisely", description: "Use a consistent workflow designed for speed without sacrificing accuracy." },
      { title: "Close the loop", description: "Keep delivery outcomes and returns visible after dispatch." },
    ],
  },
  flexship: {
    title: "Deliver on the promise your customer remembers.",
    intro:
      "Aggregate couriers, offer same-day service where it fits, and give customers the flexibility to choose what they keep at the door.",
    image: brandAssets.delivery,
    problem: {
      eyebrow: "The delivery gap",
      title: "A dispatched order is not a delivered order.",
      description:
        "Flextock brings courier choice, address quality, order confirmation, and delivery performance into one operating view—so your team can act before a failed delivery becomes lost revenue.",
    },
    outcomes: [
      { value: "Same day", label: "delivery capability" },
      { value: "Pick & choose", label: "at the door" },
      { value: "1 view", label: "across couriers" },
    ],
    steps: [
      { title: "Route by intent", description: "Match each order to the service level, destination, and promise that fits." },
      { title: "Track the handoff", description: "See delivery progress without switching between courier systems." },
      { title: "Resolve earlier", description: "Surface delivery risk while there is still time to protect the customer experience." },
      { title: "Learn from outcomes", description: "Use performance data to improve the next dispatch." },
    ],
  },
  flexborders: {
    title: "Take your best selling products across the MENA region.",
    intro:
      "Enter the Saudi market with confidence: coordinated operations for cross-border shipping, customs documentation, and customer expectations we live up to.",
    image: brandAssets.market,
    problem: {
      eyebrow: "The expansion gap",
      title: "Entering new markets now feels like growth and confidence.",
      description:
        "Flextock helps coordinate the operational and documentation requirements to help you expand smoothly.",
    },
    outcomes: [
      { value: "MENA", label: "expansion ready" },
      { value: "1 platform, 1 process", label: "for cross-border operations" },
      { value: "Clear", label: "landed-cost decisions" },
    ],
    steps: [
      { title: "Choose your next market", description: "Prioritize where you need to grow next." },
      { title: "Connect the demand", description: "Start the paperwork, connect everything you need." },
      { title: "Fulfill locally", description: "Start where you shine best and shine even more." },
      { title: "Scale comfortably", description: "Grow as you deserve with no stress." },
    ],
  },
  flexshops: {
    title: "Run the growth engine. We operate the commerce layer.",
    intro:
      "A KSA-focused model for media buyers and performance marketers: choose the products and run acquisition while Flextock manages the operation behind the sale.",
    image: brandAssets.productSelection,
    problem: {
      eyebrow: "The performance commerce model",
      title: "Move from campaign to collected order without building the backend.",
      description:
        "Flextock brings sourcing, warehousing, shipping, order confirmation, and cash collection into one workflow, with faster visibility into the profit your campaigns create.",
    },
    outcomes: [
      { value: "KSA", label: "focused operating model" },
      { value: "1 layer", label: "from product to collection" },
      { value: "Clearer", label: "profit visibility" },
    ],
    steps: [
      { title: "Choose the product", description: "Select the products with the clearest commercial potential." },
      { title: "Run acquisition", description: "Focus your media and performance campaigns on creating demand." },
      { title: "Let the operation run", description: "Flextock manages storage, confirmation, shipping, and collection." },
      { title: "Read the result", description: "Use collection and order signals to decide what to scale next." },
    ],
  },
  flexcash: {
    title: "Put working capital closer to the next opportunity.",
    intro:
      "A liquidity layer designed to help eligible merchants access funds from sales sooner, while deductions stay connected to collection and reconciliation.",
    image: brandAssets.technology,
    problem: {
      eyebrow: "The cash gap",
      title: "Growth slows when cash is trapped in the collection cycle.",
      description:
        "Flexcash helps eligible merchants bring sales activity, available liquidity, deductions, and collection visibility into a more organized financial flow.",
    },
    outcomes: [
      { value: "Sooner", label: "access to working capital" },
      { value: "Clearer", label: "collection reconciliation" },
      { value: "More", label: "room to reinvest" },
    ],
    steps: [
      { title: "Connect sales to cash", description: "See how order activity translates into collection events." },
      { title: "Access what is available", description: "Explore liquidity options based on eligible sales activity." },
      { title: "Reconcile automatically", description: "Keep deductions organized against the collections that follow." },
      { title: "Reinvest with clarity", description: "Put available capital toward inventory, acquisition, or the next market." },
    ],
  },
};

solutionDetails["end-to-end-fulfilment"] =
  solutionDetails["end-to-end-fulfillment"];
solutionDetails["delivery-aggregation"] = solutionDetails.flexship;
solutionDetails["cross-border-trade"] = solutionDetails.flexborders;
solutionDetails["cross-boarder-trade"] =
  solutionDetails["cross-border-trade"];
solutionDetails.sales = {
  ...solutionDetails.flexshops,
  title: "Run the growth engine. We operate the commerce layer.",
  intro:
    "A KSA-focused model for media buyers and performance marketers: choose the products and run acquisition while Flextock manages the operation behind the sale.",
  image: brandAssets.productSelection,
  problem: {
    eyebrow: "The performance commerce model",
    title: "Move from campaign to collected order without building the backend.",
    description:
      "Flextock brings sourcing, warehousing, shipping, order confirmation, and cash collection into one workflow, with faster visibility into the profit your campaigns create.",
  },
  outcomes: [
    { value: "KSA", label: "focused operating model" },
    { value: "1 layer", label: "from product to collection" },
    { value: "Clearer", label: "profit visibility" },
  ],
  steps: [
    { title: "Choose the product", description: "Select the products with the clearest commercial potential." },
    { title: "Run acquisition", description: "Focus your media and performance campaigns on creating demand." },
    { title: "Let the operation run", description: "Flextock manages storage, confirmation, shipping, and collection." },
    { title: "Read the result", description: "Use collection and order signals to decide what to scale next." },
  ],
};

export const technologyContent = {
  eyebrow: "Designed to connect",
  title: "Connect every tool in your kit in one platform.",
  description:
    "Everything connects smoothly, nothing is missed.",
  capabilities: ["Inventory control", "Delivery control", "Exception control"],
  capabilityDetails: [
    "Know what's available, what's moving, and what's at risk before your customer does.",
    "Know what's out for delivery, on route, delivered, or even returning in real time.",
    "Know every detail when it comes to finance, security, and IT directly from the dashboard.",
  ],
  integrations: ["Storefronts", "Marketplaces", "Couriers", "Warehouse workflows", "Finance workflows", "API access"],
  integrationsLabel: "Connect what already works",
  integrationsNote: "Available connections depend on market, service scope, and operating model.",
  cta: "Explore the platform",
};

export const networkContent = {
  eyebrow: "Delivery experiences",
  title: "Give customers the experience they deserve.",
  description:
    "Use the service level that fits your orders from same-day delivery to Pick & Choose at the door.",
  points: [
    { value: "One portal, one view", label: "Everything from orders to inventory, delivery, and returns." },
    { value: "Same-day delivery", label: "When your customers and demand need it most" },
    { value: "Pick & Choose", label: "A personalized shopping experience at the door" },
  ],
};

export const reviewsContent = {
  en: {
    eyebrow: "Customer Feedback",
    title: "What brands say about Flextock.",
    description:
      "Real feedback. Real experiences. Real impact.",
    sourceLabel: "Reviews from Flextock Egypt",
    sourceCta: "Read more customer reviews",
    sourceHref: "https://www.google.com/search?q=Flextock+Head+Office",
    reviews: [
      {
        name: "Reham Khaled",
        meta: "7 weeks ago",
        quote: "An excellent experience 🤍🤍",
        initial: "R",
      },
      {
        name: "Mohamed Sherif",
        meta: "7 weeks ago",
        quote: "The best experience.",
        initial: "M",
      },
      {
        name: "Ahmed El Wardany",
        meta: "15 weeks ago",
        quote: "Excellent service and a professional team.",
        initial: "A",
      },
    ],
  },
  ar: {
    eyebrow: "ردود العملاء",
    title: "ما تقوله الشركات عن تجربتها معنا",
    description:
      "ردود حقيقية من تجارب حقيقية آثارها حقيقية.",
    sourceLabel: "آراء من فلكستوك مصر",
    sourceCta: "اقرأ المزيد من آراء العملاء",
    sourceHref: "https://www.google.com/search?q=Flextock+Head+Office",
    reviews: [
      {
        name: "Reham Khaled",
        meta: "منذ 7 أسابيع",
        quote: "تجربة ممتازة جدًا 🤍🤍",
        initial: "R",
      },
      {
        name: "Mohamed Sherif",
        meta: "منذ 7 أسابيع",
        quote: "أفضل تجربة.",
        initial: "M",
      },
      {
        name: "Ahmed El Wardany",
        meta: "منذ 15 أسبوعًا",
        quote: "خدمة ممتازة وفريق محترف.",
        initial: "A",
      },
    ],
  },
} as const;

export const supportingPages = {
  resources: {
    eyebrow: "Resources",
    title: "Practical guidance for better operations.",
    description:
      "Short, useful guidance for teams managing inventory, delivery, returns, and customer expectations.",
    image: brandAssets.merchantGrowth,
    sections: [
      {
        eyebrow: "Merchant playbook",
        title: "Make inventory and delivery easier to manage.",
        description:
          "Simple checks that help teams reduce avoidable delays, failed deliveries, and stock surprises.",
        items: ["Inventory planning", "COD review", "Returns handling"],
      },
      {
        eyebrow: "From the operation",
        title: "Understand the cost of every handoff.",
        description:
          "A practical look at the operational moments that affect customer experience and margin.",
        items: ["Order status", "Delivery exceptions", "Cash reconciliation"],
      },
    ],
  },
  company: {
    eyebrow: "Company",
    title: "People and systems that keep commerce moving.",
    description:
      "Flextock combines experienced operators and useful technology for brands working across Egypt and Saudi Arabia.",
    image: brandAssets.warehouse,
    sections: [
      {
        eyebrow: "Our role",
        title: "Operations first. Technology where it helps.",
        description:
          "Our job is to make the daily work reliable, visible, and easier for merchants to improve.",
        items: ["Experienced operators", "Accountable systems", "Responsive support"],
      },
      {
        eyebrow: "Where we operate",
        title: "Operating across Egypt and Saudi Arabia.",
        description:
          "Our regional footprint gives merchants a clear operating path as they enter their next market.",
        items: ["Egypt", "Saudi Arabia"],
      },
    ],
  },
  technology: {
    ...technologyContent,
    title: "See the work. Connect the tools.",
    description:
      "Bring storefronts, warehouses, couriers, and finance workflows into one product view, with the detail your team needs to act.",
    capabilityDetails: [
      "Know what is available, moving, and at risk before it affects the customer.",
      "Compare courier performance and act on delivery exceptions from one view.",
      "Turn order, inventory, and return activity into decisions your team can act on.",
    ],
    sections: [
      {
        eyebrow: "Live control",
        title: "See the order from first scan to final settlement.",
        description:
          "Bring the main operational events together so teams can spot issues and act without switching between systems.",
        items: ["Inventory status", "Order and delivery events", "Cash and exception signals"],
      },
      {
        eyebrow: "Designed to connect",
        title: "Add visibility without replacing everything.",
        description:
          "Connect existing commerce channels, marketplaces, couriers, and finance workflows at the scope your operation needs.",
        items: ["Storefronts", "Marketplaces and couriers", "API and manual options"],
      },
    ],
  },
};

export const resourceEntries = {
  en: [
    {
      type: "Playbook",
      title: "The order-to-delivery checklist",
      description:
        "A practical starting point for mapping the handoffs that affect customer experience.",
      meta: "Operations / 06 min",
    },
    {
      type: "Guide",
      title: "A better way to review COD orders",
      description:
        "Questions teams can ask before dispatching an order with collection risk.",
      meta: "Delivery / 05 min",
    },
    {
      type: "Field note",
      title: "What a return should tell you",
      description:
        "How to turn return reasons into clearer inventory and product decisions.",
      meta: "Returns / 04 min",
    },
  ],
  ar: [
    {
      type: "دليل عملي",
      title: "قائمة مراجعة الطلب حتى التوصيل",
      description: "بداية عملية لرسم نقاط التسليم التي تؤثر في تجربة العميل.",
      meta: "العمليات / 06 دقائق",
    },
    {
      type: "إرشاد",
      title: "طريقة أفضل لمراجعة طلبات الدفع عند الاستلام",
      description: "أسئلة يمكن للفريق طرحها قبل شحن الطلبات المعرضة لمخاطر التحصيل.",
      meta: "التوصيل / 05 دقائق",
    },
    {
      type: "ملاحظة ميدانية",
      title: "ما الذي يخبرك به المرتجع؟",
      description: "حوّل أسباب المرتجعات إلى قرارات أوضح للمخزون والمنتجات.",
      meta: "المرتجعات / 04 دقائق",
    },
  ],
} as const;

export const companyTimeline = {
  en: [
    {
      year: "01",
      title: "Start with the hard part",
      description: "Build reliable fulfillment around the work merchants cannot afford to lose visibility on.",
    },
    {
      year: "02",
      title: "Connect the handoffs",
      description: "Bring inventory, delivery, returns, and cash signals closer to the teams making daily decisions.",
    },
    {
      year: "03",
      title: "Grow with the market",
      description: "Give brands an operating path across Egypt and Saudi Arabia as their customer promise expands.",
    },
  ],
  ar: [
    {
      year: "01",
      title: "نبدأ من الجزء الأصعب",
      description: "نبني تنفيذًا موثوقًا حول العمل الذي لا يستطيع التجار تحمل فقدان رؤيته.",
    },
    {
      year: "02",
      title: "نربط نقاط التسليم",
      description: "نقرّب إشارات المخزون والتوصيل والمرتجعات والنقد من الفرق التي تتخذ القرارات اليومية.",
    },
    {
      year: "03",
      title: "ننمو مع السوق",
      description: "نمنح العلامات طريقًا تشغيليًا في مصر والسعودية مع توسع وعدها للعميل.",
    },
  ],
} as const;

export const supportingVisualContent = {
  en: {
    resources: {
      kicker: "The operator’s desk",
      title: "Small signals make the next decision clearer.",
      note: "Field notes / 03 practical checks",
      imageAlt: "Flextock packages arranged across a workspace",
      labels: ["Plan", "Pack", "Dispatch"],
      statuses: ["Review stock", "Seal the order", "Confirm the handoff"],
    },
    company: {
      kicker: "Inside the network",
      title: "People, parcels, and decisions moving together.",
      note: "Operating footprint / Egypt + Saudi Arabia",
      imageAlt: "Flextock team member working among warehouse packages",
      labels: ["Receive", "Store", "Move"],
      statuses: ["Counted in", "Located", "On route"],
    },
    technology: {
      kicker: "Live system map",
      title: "Every handoff leaves a signal.",
      note: "Operating view / 04 connected streams",
      imageAlt: "Flextock operator preparing shipping labels at a work desk",
      labels: ["Orders", "Inventory", "Delivery", "Cash"],
      statuses: ["Connected", "Tracked", "Routed", "Reconciled"],
    },
  },
  ar: {
    resources: {
      kicker: "مكتب المشغل",
      title: "الإشارات الصغيرة تجعل القرار التالي أوضح.",
      note: "ملاحظات عملية / 03 فحوصات أساسية",
      imageAlt: "طرود فلكستوك مرتبة في مساحة العمل",
      labels: ["خطط", "جهز", "اشحن"],
      statuses: ["راجع المخزون", "أغلق الطلب", "أكد التسليم"],
    },
    company: {
      kicker: "داخل الشبكة",
      title: "الأشخاص والطرود والقرارات تتحرك معًا.",
      note: "نطاق التشغيل / مصر + السعودية",
      imageAlt: "عضو من فريق فلكستوك يعمل بين طرود المستودع",
      labels: ["استلم", "خزن", "حرك"],
      statuses: ["تم الاستلام", "تم تحديد الموقع", "في الطريق"],
    },
    technology: {
      kicker: "خريطة النظام المباشرة",
      title: "كل عملية تسليم تترك إشارة.",
      note: "رؤية التشغيل / 04 مسارات متصلة",
      imageAlt: "موظف فلكستوك يجهز ملصقات الشحن على مكتب العمل",
      labels: ["الطلبات", "المخزون", "التوصيل", "النقد"],
      statuses: ["متصل", "متتبع", "موجه", "تمت التسوية"],
    },
  },
} as const;

export const supportingVisualAssets = {
  resources: "/pictures/2 copy 12.png",
  company: null,
  technology: null,
} as const;

export const integrationLogos = [
  { name: "Shopify", src: "/icons/shopify.png" },
  { name: "WooCommerce", src: "/icons/woocommerce.png" },
  { name: "Salla", src: "/icons/salla.png" },
  { name: "Zid", src: "/icons/Zid-En-01.png" },
] as const;

export const ecosystemLogos = [
  {
    name: "Flexshops",
    src: "/logos/shops.png",
    href: "/solutions/sales",
  },
  {
    name: "Flexship",
    src: "/logos/ship.png",
    href: "/solutions/delivery-aggregation",
  },
  {
    name: "Flexborders",
    src: "/logos/boarders.png",
    href: "/solutions/cross-border-trade",
  },
  {
    name: "Flexcash",
    src: "/logos/cash.png",
    href: "/solutions/flexcash",
  },
] as const;

export const partnerLogos = [
  {
    name: "Cleo Laboratories",
    src: "/partners/cleo.webp",
  },
  {
    name: "Eva",
    src: "/partners/eva.svg",
  },
  {
    name: "Infinity",
    src: "/partners/infinity.avif",
  },
] as const;

export const supportingCtaContent = {
  en: {
    eyebrow: "Ready for the next step?",
    title: "Let’s talk about the operation you want to build.",
  },
  ar: {
    eyebrow: "جاهز للخطوة التالية؟",
    title: "لنتحدث عن العملية التي تريد بناءها.",
  },
} satisfies Record<Locale, { eyebrow: string; title: string }>;

export const ctaContent = {
  eyebrow: "Let's build for what's next.",
  title: "Turn the complex operations into a superpower.",
  description:
    "Tell us what your dreams are. We'll show you how Flextock will get you there.",
  cta: "Get Quote",
};

export const quotePage = {
  eyebrow: "Start your journey",
  title: "Start your journey.",
  formTitle: "Request a quote or demo",
  description: "",
  proofPoints: [
    "Increase your sales by 5x",
    "99.9% successful delivery rate",
    "10–15% faster delivery",
    "3 active operations in key MENA markets you can be a part of.",
  ],
  submitLabel: "Submit",
  submittingLabel: "Sending request...",
  backLabel: "Back to homepage",
  successTitle: "Your request is on its way.",
  successDescription:
    "A member of the Flextock team will be in touch shortly.",
  responseNote: "We usually respond during the next business day.",
  privacyLabel: "I agree to Flextock using these details to respond to my request.",
  businessNeedLabel: "Additional notes",
  businessNeedPlaceholder: "Anything else we should know",
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    brand: { label: "Company name", placeholder: "Your company" },
    phone: { label: "Phone", placeholder: "+20 000 000 0000" },
    industry: { label: "Industry", placeholder: "Select your industry" },
    volume: { label: "Order volume", placeholder: "Select your volume" },
    interest: { label: "I am interested in", placeholder: "Select a solution" },
    tax: { label: "Do you have a tax card and commercial registration?", placeholder: "Select an option" },
    businessType: { label: "Company type", placeholder: "Select your company type" },
    sellingMethod: { label: "How do you sell?", placeholder: "Select your main channel" },
    referral: { label: "How did you hear about us?", placeholder: "Select an option" },
    email: { label: "Email", placeholder: "you@company.com" },
    role: { label: "Job title", placeholder: "Your role" },
    website: { label: "Website or social link", placeholder: "If you don't have a website, leave a social link" },
    discountCode: { label: "Discount code (if any)", placeholder: "Optional code" },
  },
  taxOptions: ["Yes", "No"],
  industries: [
    "Beauty",
    "Perfume",
    "Clothing",
    "Home supplies",
    "Books",
    "Toys",
    "Electronics",
    "Furniture",
    "Food",
    "Famous products",
    "Other",
  ],
  volumes: ["0–50 orders", "51–250 orders", "251–1,000 orders", "1,000+ orders"],
  businessTypes: ["Brand", "Affiliate", "Store"],
  sellingMethods: ["Social media page", "Website", "Other"],
  referralSources: ["Google", "Snapchat", "Instagram / Facebook", "Referral", "Exhibition"],
  interests: [
    "Full operation (storage, shipping, collection)",
    "Delivery only",
    "Expand to KSA",
    "International shipping",
  ],
};

export const arabicCopy = {
  site: {
    logoAlt: "فلكستوك",
    primaryCta: "احصل على عرض اسعار",
    secondaryCta: "استكشف نظامنا",
    menuLabel: "افتح القائمة",
    closeMenuLabel: "أغلق القائمة",
    mainNavLabel: "القائمة الرئيسية",
    solutionsLabel: "الحلول",
    solutionsOverviewLabel: "عرض كل الحلول",
    playVideoLabel: "تشغيل الفيديو",
    pauseVideoLabel: "إيقاف الفيديو",
    capabilitiesLabel: "الإمكانيات",
    navigation: ["المنصة", "الإمكانيات", "الشركة"],
  },
  navigation: {
    primary: [
      { label: "التكنولوجيا", href: "/technology" },
      { label: "المصادر", href: "/resources" },
      { label: "الشركة", href: "/company" },
    ],
    solutions: [
      { name: "التنفيذ من البداية للنهاية", slug: "end-to-end-fulfilment", description: "الاستلام والتخزين والتجهيز والتوصيل والمرتجعات." },
      { name: "Flexship", slug: "delivery-aggregation", description: "اختر شركات الشحن وأدرها من سير عمل واحد." },
      { name: "التجارة العابرة للحدود", slug: "cross-border-trade", description: "نسّق العمل خلف التوسع بين مصر والسعودية." },
      { name: "Flexshops", slug: "sales", description: "اختر المنتجات وأدر الحملات واترك التشغيل لفلكستوك." },
      { name: "Flexcash", slug: "flexcash", description: "اربط التحصيلات والخصومات والنقد المتاح." },
    ],
  },
  hero: {
    eyebrow: "بنية التجارة للعلامات النامية",
    title: "نظام مبني ليساعد شركتك في النمو.",
    description: "إدارة التشغيل أصبحت أسهل مما تتخيل. فلكستوك تدير التخزين والشحن والتوصيل والتحصيل وأكثر بنظام واحد شامل.",
    supportingText: "مبني ليساعدك على النمو على مدار رحلتك.",
  },
  heroSignals: [
    {
      label: "الطلبات",
      value: "متصلة",
      detail: "تابع كل طلب من مصدره حتى المرتجع.",
    },
    {
      label: "المخزون",
      value: "مباشر",
      detail: "اعرف المتاح قبل بدء الحملة التالية.",
    },
    {
      label: "التوصيل",
      value: "منسق",
      detail: "اختر الخدمة التي تناسب وعد العميل.",
    },
  ],
  video: {
    eyebrow: "داخل فلكستوك",
    title: "كل ما يحدث بين انشاء الطلب واستلام العميل له.",
    description: "تعرف على الأشخاص والأنظمة والتكنولوجيا التي وراء نجاحنا.",
    source: "/videos/Flextock v04.mp4",
    poster: "/pictures/2 copy 10.png",
    label: "فيديو تعريفي عن فلكستوك",
  },
  showcase: {
    eyebrow: "كيف تعمل إدارة التشغيل المدعومة بالتكنولوجيا؟",
    title: "الإشارات المناسبة في الوقت المناسب.",
    description: "نظام فلكستوك يخبرك أنت وفريقك كل ما تحتاجه لإدارة أي تعطل بسرعة وبسهولة.",
    systemLabel: "نظام فلكستوك",
    signalLabel: "إشارة تشغيلية",
    visualPendingLabel: "الصورة التشغيلية قيد التجهيز",
    visualPendingNote: "استبدل هذا الإطار بتصوير حقيقي حتى لا يبدو القسم مولدًا بالذكاء الاصطناعي.",
  },
  journeySteps: [
    {
      label: "ذكاء إدارة التشغيل",
      title: "أكثر مما تحتاج",
      description: "سهولة التشغيل والتوصيل وحتى النمو عبر الحدود في منصة واحدة موحدة.",
      visualLabel: "بوابة موحدة",
      visualValue: "1",
      visualUnit: "إدارة مترابطة",
      visualBars: [38, 52, 46, 68, 58, 78, 72, 88],
    },
    {
      label: "ذكاء إدارة المخزون",
      title: "التنبؤ بالعرض والطلب",
      description: "نظام ذكي يحسب معدل أداء وحدة حفظ المخزون ليخبرك بأي مخزون يحتاج اهتمامك مسبقًا.",
      visualLabel: "تحديثات مباشرة",
      visualValue: "SKU",
      visualUnit: "معدل الأداء",
      visualBars: [82, 76, 68, 58, 50, 42, 34, 28],
    },
    {
      label: "إدارة مخاطر الدفع عند الاستلام",
      title: "إدارة المخاطر قبل إرسال الطلب",
      description: "أنظمة فحص شاملة لطلبات الدفع عند الاستلام تلاحظ أنماط العملاء السلوكية قبل إرسال أي طلبات لتقليل أي مخاطرة بدلًا من حلها مستقبلًا.",
      visualLabel: "مخاطرات مُدارة",
      visualValue: "COD",
      visualUnit: "طلبات مفحوصة",
      visualBars: [24, 30, 28, 44, 36, 62, 48, 70],
    },
    {
      label: "اللوجستيات العكسية",
      title: "لوجستيات عكسية شفافة",
      description: "تصنيف والتحقق من المنتجات المرتجعة للتفرقة بين الممكن إعادة بيعه أو التالف بشفافية.",
      visualLabel: "تصنيف المرتجعات",
      visualValue: "RTM",
      visualUnit: "لكل مرتجع",
      visualBars: [72, 64, 58, 48, 42, 36, 30, 24],
    },
  ],
  solutionPage: {
    eyebrow: "احد حلول فلكستوك",
    cta: "تحدث مع فريقنا اليوم",
    howItWorks: "كيف يعمل؟",
  },
  solutionsOverview: {
    eyebrow: "الحلول",
    title: "اختر القدرة التي تحتاجها عملياتك بعد ذلك.",
    description: "ابدأ بخدمة واحدة أو اجمع الأجزاء التي تحافظ على وعد العميل والهامش والنمو الإقليمي.",
    ctaTitle: "أخبرنا بما تحتاجه عملياتك بعد ذلك.",
    cta: "تحدث مع فريقنا",
  },
  solutionDetails: {
    "end-to-end-fulfillment": {
      title: "أدر كل طلب من طبقة تحكم واحدة.",
      intro: "امنح فريقك سير عمل موحدًا للاستلام والتخزين والتجهيز والتعبئة والشحن وإدارة المرتجعات.",
      problem: {
        eyebrow: "الفجوة التشغيلية",
        title: "النمو لا يجب أن يخلق أماكن أكثر لفقدان السيطرة.",
        description: "تجمع فلكستوك دورة الطلب كاملة في عملية واحدة واضحة ومسؤولة.",
      },
      outcomes: [
        { value: "دورة كاملة", label: "من الاستلام إلى المرتجع" },
        { value: "مباشر", label: "لحركة المخزون" },
        { value: "رؤية واحدة", label: "للقرارات التشغيلية" },
      ],
      steps: [
        { title: "اربط قنواتك", description: "اجمع المتاجر والأسواق ومصادر الطلب في قائمة واحدة." },
        { title: "خزّن بثقة", description: "تابع كل منتج وموقع وحركة لحظيًا." },
        { title: "جهّز بدقة", description: "استخدم سير عمل ثابتًا للسرعة والدقة." },
        { title: "أغلق الحلقة", description: "تابع نتائج التوصيل والمرتجعات بعد الشحن." },
      ],
    },
    flexship: {
      title: "نفّذ وعد التوصيل الذي يتذكره عميلك.",
      intro: "اجمع شركات الشحن، وقدم التوصيل في نفس اليوم حيث يناسب، وامنح العملاء مرونة اختيار ما يحتفظون به عند الباب.",
      problem: {
        eyebrow: "فجوة التوصيل",
        title: "الطلب المشحون ليس طلبًا تم توصيله.",
        description: "تساعدك فلكستوك على اختيار المسار المناسب والتدخل قبل أن يتحول فشل التوصيل إلى إيراد مفقود.",
      },
      outcomes: [
        { value: "نفس اليوم", label: "إمكانية التوصيل" },
        { value: "اختيار", label: "ما يحتفظ به العميل عند الباب" },
        { value: "عرض واحد", label: "لجميع شركات الشحن" },
      ],
      steps: [
        { title: "وجّه حسب الهدف", description: "طابق كل طلب مع مستوى الخدمة والوجهة المناسبين." },
        { title: "تابع التسليم", description: "راقب تقدم الطلب دون التنقل بين أنظمة متعددة." },
        { title: "تدخل مبكرًا", description: "اكتشف المخاطر بينما لا يزال بإمكانك حماية تجربة العميل." },
        { title: "تعلم من النتائج", description: "استخدم الأداء لتحسين الشحنة التالية." },
      ],
    },
    flexborders: {
      title: "ابدأ في بيع منتجاتك المفضلة في جميع أنحاء الشرق الأوسط.",
      intro: "ادخل السوق السعودي بثقة: إدارة تشغيل منظمة للشحن عبر الحدود وأوراق التخليص الجمركي وضمان تحقيق توقعات عملائك.",
      problem: {
        eyebrow: "فجوة التوسع",
        title: "اصبح التوسع لأسواق جديدة ملئ بالنمو والثقة.",
        description: "فلكستوك تساعدك في تنسيق عمليات التشغيل ومتطلبات الأوراق الرسمية لتساعدك في التوسع بسهولة.",
      },
      outcomes: [
        { value: "MENA", label: "استعداد تام للتوسع في الشرق الأوسط" },
        { value: "منصة واحدة", label: "وعملية واحدة للتوسع عبر الحدود." },
        { value: "قرارات تكلفة", label: "واضحة وشفافة" },
      ],
      steps: [
        { title: "اختر سوقك القادم للتوسع", description: "حدد أولوية السوق الذي تود التوسع إليه" },
        { title: "ربط الطلب", description: "ابدأ الأوراق وربط كل ما تحتاجه" },
        { title: "ابدأ التشغيل المحلي", description: "ابدأ في السوق الذي يعرفك لتظهر بقوة" },
        { title: "توسع بمرونة وراحة", description: "تمتع بالنمو الذي تستحقه بدون توتر" },
      ],
    },
    flexshops: {
      title: "شغّل محرك النمو. ونحن ندير طبقة التجارة.",
      intro: "نموذج يركز على السعودية لمسوقي الأداء: اختر المنتجات وأدر الحملات، بينما تتولى فلكستوك العملية خلف البيع.",
      problem: {
        eyebrow: "نموذج تجارة الأداء",
        title: "انتقل من الحملة إلى الطلب المحصل دون بناء البنية الخلفية.",
        description: "تجمع فلكستوك التوريد والتخزين والشحن وتأكيد الطلب والتحصيل في سير عمل واحد، مع رؤية أسرع للنتيجة التي تصنعها حملاتك.",
      },
      outcomes: [
        { value: "السعودية", label: "نموذج تشغيل مركز" },
        { value: "طبقة واحدة", label: "من المنتج إلى التحصيل" },
        { value: "أوضح", label: "رؤية للربح" },
      ],
      steps: [
        { title: "اختر المنتج", description: "اختر المنتجات ذات الإمكانات التجارية الأكثر وضوحًا." },
        { title: "أدر اكتساب العملاء", description: "ركز حملات الأداء والإعلانات على خلق الطلب." },
        { title: "دع العملية تعمل", description: "تتولى فلكستوك التخزين والتأكيد والشحن والتحصيل." },
        { title: "اقرأ النتيجة", description: "استخدم إشارات التحصيل والطلبات لتقرر ما الذي ستوسعه لاحقًا." },
      ],
    },
    flexcash: {
      title: "حوّل حركة النقد إلى إشارة للنمو.",
      intro: "اجمع رؤية الطلب والتوصيل والتحصيل والتسوية لتصبح قراراتك القادمة مبنية على الواقع.",
      problem: {
        eyebrow: "فجوة النقد",
        title: "الإيراد مفيد فقط عندما تراه وتثق به.",
        description: "تربط فلكستوك النشاط التشغيلي بالرؤية النقدية لتعرف ما تحرك وما يستحق المتابعة.",
      },
      outcomes: [
        { value: "لحظية", label: "رؤية النقد" },
        { value: "أقل", label: "مفاجآت التسوية" },
        { value: "أفضل", label: "قرارات رأس المال" },
      ],
      steps: [
        { title: "اتبع الطلب", description: "اربط نشاط الطلب بالأحداث المالية التي تليه." },
        { title: "اعرف المستحق", description: "اجعل حالة التحصيل والتسوية واضحة للفريق." },
        { title: "اكتشف الاستثناءات", description: "حدد الفروقات قبل أن تتحول إلى مفاجآت." },
        { title: "خطط للخطوة التالية", description: "اتخذ قرارات النمو برؤية أوضح للنقد المتاح." },
      ],
    },
  },
  capabilities: {
    eyebrow: "مصمم لطريقة تشغيلك الحقيقية",
    title: "التفوق يكمن في التفاصيل.",
    cards: [
      { title: "توصيل في نفس اليوم", description: "امنح العملاء وعدًا أسرع واجعل السرعة جزءًا من ميزتك." },
      { title: "اختيار الطلب عند الباب", description: "امنح العملاء حرية اختيار ما يريدون الاحتفاظ به عند وصول الطلب." },
      { title: "تحكم في مرتجعات RTM", description: "صنّف الطلبات المرتجعة إلى قابلة للبيع وغير قابلة للبيع قبل أن تصبح نقطة عمياء." },
      { title: "كل عمليات التكامل متصلة", description: "اربط منصات التجارة الإلكترونية والأسواق وموقعك المباشر." },
      { title: "تنفيذ فقط عند الحاجة", description: "استخدم طبقة التشغيل التي تحتاجها بدون إدارة عملية توصيل كاملة." },
    ],
  },
  technology: {
    eyebrow: "مصمم لسهولة الترابط",
    title: "اربط كل الأدوات التي تحتاجها بمنصة واحدة.",
    description: "ترابط سلس يضمن ألا يفوتك شئ.",
    capabilities: ["التحكم في المخزون", "التحكم في التوصيل", "التحكم في الاستثناءات"],
    capabilityDetails: [
      "تابع المخزون المتاح وما يتم توصيله وتنبأ بأية مشاكل قبل أن يلاحظها عملائك.",
      "تابع التوصيل والطلبات التي في التوصيل، والطلبات الموصلة، وحتى المرتجعات في وقت حصولها.",
      "تابع كل التفاصيل فيما يتعلق بالإدارة المالية والتكنولوجيا والآمان من نفس لوحة التحكم.",
    ],
    integrations: ["المتاجر", "الأسواق", "شركات الشحن", "عمليات المستودع", "العمليات المالية", "الوصول عبر API"],
    integrationsLabel: "اربط ما يعمل بالفعل",
    integrationsNote: "تختلف الاتصالات المتاحة حسب السوق ونطاق الخدمة ونموذج التشغيل.",
    cta: "استكشف المنصة",
  },
  network: {
    eyebrow: "تجارب التوصيل",
    title: "قدم لعملائك الخدمة التي يستحقونها.",
    description: "قدم مستوى الخدمة الذي يلائم طلباتك مثل التوصيل في نفس اليوم وحتى تجربة المشتريات عند التوصيل.",
    points: [
      { value: "منصة واحدة، رؤية موحدة", label: "كل ما تحتاج متابعته من الطلبات والمخزون حتى التوصيل والمرتجعات." },
      { value: "توصيل في نفس اليوم", label: "يوافق احتياجات عملائك والطلبات عندك." },
      { value: "تجربة المشتريات", label: "تجربة تسوق مخصصة تصل عملائك في بيوتهم." },
    ],
  },
  pages: {
    resources: {
      eyebrow: "المصادر",
      title: "إرشادات عملية لعمليات أفضل.",
      description: "إرشادات قصيرة ومفيدة للفرق التي تدير المخزون والتوصيل والمرتجعات وتوقعات العملاء.",
      sections: [
        {
          eyebrow: "دليل التاجر",
          title: "اجعل المخزون والتوصيل أسهل في الإدارة.",
          description: "فحوصات بسيطة تساعد الفرق على تقليل التأخيرات وفشل التوصيل ومفاجآت المخزون.",
          items: ["تخطيط المخزون", "مراجعة الدفع عند الاستلام", "إدارة المرتجعات"],
        },
        {
          eyebrow: "من قلب العمليات",
          title: "افهم تكلفة كل عملية تسليم.",
          description: "نظرة عملية على اللحظات التشغيلية التي تؤثر في تجربة العميل والهامش.",
          items: ["حالة الطلب", "استثناءات التوصيل", "تسوية النقد"],
        },
      ],
    },
    company: {
      eyebrow: "الشركة",
      title: "أشخاص وأنظمة تحافظ على حركة التجارة.",
      description: "تجمع فلكستوك بين المشغلين ذوي الخبرة والتكنولوجيا المفيدة للعلامات العاملة في مصر والسعودية.",
      sections: [
        {
          eyebrow: "دورنا",
          title: "العمليات أولًا. والتكنولوجيا حيث تساعد.",
          description: "مهمتنا أن نجعل العمل اليومي موثوقًا وواضحًا وأسهل للتحسين.",
          items: ["مشغلون ذوو خبرة", "أنظمة مسؤولة", "دعم سريع"],
        },
        {
          eyebrow: "مواقع التشغيل",
          title: "نعمل في مصر والسعودية.",
          description: "يمنح نطاقنا الإقليمي العلامات طريقًا واضحًا للتشغيل عند دخول سوقها التالي.",
          items: ["مصر", "السعودية"],
        },
      ],
    },
    technology: {
      eyebrow: "التكنولوجيا",
      title: "رؤية أوضح للعمل من البداية إلى النهاية.",
      description: "اربط متجرك ومستودعاتك وشركات الشحن والعمليات المالية في رؤية واحدة يمكن لفريقك استخدامها.",
      capabilities: ["رؤية المخزون", "تنسيق التوصيل", "الإشارات التشغيلية"],
      sections: [
        {
          eyebrow: "تحكم مباشر",
          title: "تابع الطلب من أول مسح حتى التسوية.",
          description: "اجمع الأحداث التشغيلية الأساسية لتكتشف المشكلات وتتصرف دون التنقل بين أنظمة متعددة.",
          items: ["حالة المخزون", "أحداث الطلب والتوصيل", "إشارات النقد والاستثناءات"],
        },
        {
          eyebrow: "مصمم للاتصال",
          title: "أضف الرؤية دون استبدال كل شيء.",
          description: "اربط قنوات التجارة والأسواق وشركات الشحن والعمليات المالية الحالية ضمن النطاق الذي تحتاجه.",
          items: ["المتاجر", "الأسواق وشركات الشحن", "خيارات API والرفع اليدوي"],
        },
      ],
    },
  },
  cta: {
    eyebrow: "استعد لتبني للمستقبل.",
    title: "حول تعقيد عمليات التشغيل لقوة خارقة.",
    description: "اخبرنا عن أحلامك، وسنريك كيف سنساعدك في تحقيقها.",
    cta: "احصل على عرض اسعار",
  },
  footer: {
    description: "نظام تشغيل التجارة الإلكترونية للعلامات الطموحة في منطقة الشرق الأوسط وشمال أفريقيا.",
    copyright: "© 2026 فلكستوك. جميع الحقوق محفوظة.",
  },
  quote: {
    eyebrow: "ابدأ رحلتك اليوم",
    title: "ابدأ رحلتك اليوم.",
    formTitle: "طلب عرض أسعار أو عرض توضيحي",
    description: "",
    proofPoints: [
      "زود مبيعاتك حتى خمسة أضعاف",
      "نسبة توصيل ناجحة ٩٩.٩٪",
      "توصيل أسرع بنسبة ١٠٪ إلى ١٥٪",
      "تواجد قوي في ٣ دول يمكنك التوسع إليهم في الشرق الأوسط",
    ],
    submitLabel: "تسجيل",
    submittingLabel: "جارٍ إرسال الطلب...",
    backLabel: "العودة إلى الصفحة الرئيسية",
    successTitle: "تم إرسال طلبك.",
    successDescription: "سيتواصل معك أحد أعضاء فريق فلكستوك قريبًا.",
    responseNote: "نرد عادة خلال يوم العمل التالي.",
    privacyLabel: "أوافق على استخدام فلكستوك لهذه البيانات للرد على طلبي.",
    businessNeedLabel: "أية ملحوظات إضافية",
    businessNeedPlaceholder: "أضف أي تفاصيل إضافية",
    fields: {
      name: { label: "الاسم", placeholder: "اسمك" },
      brand: { label: "اسم الشركة", placeholder: "شركتك" },
      phone: { label: "رقم الهاتف", placeholder: "+20 000 000 0000" },
      industry: { label: "المجال", placeholder: "اختر مجالك" },
      volume: { label: "كمية الطلبات", placeholder: "اختر حجم الطلبات" },
      interest: { label: "أنا مهتم بـ", placeholder: "اختر الحل" },
      tax: { label: "هل لديك بطاقة تجارية وسجل تجاري؟", placeholder: "اختر إجابة" },
      businessType: { label: "نوع الشركة", placeholder: "اختر نوع الشركة" },
      sellingMethod: { label: "طريقة البيع", placeholder: "اختر قناتك الرئيسية" },
      referral: { label: "كيف سمعت عننا؟", placeholder: "اختر إجابة" },
      email: { label: "البريد الإلكتروني", placeholder: "you@company.com" },
      role: { label: "وظيفة المسجل", placeholder: "وظيفتك" },
      website: { label: "رابط الموقع", placeholder: "إذا ليس لديك موقع، اترك رابطًا لأحد مواقع التواصل الإجتماعي" },
      discountCode: { label: "كود الخصم (إن وجد)", placeholder: "اختياري" },
    },
    taxOptions: ["نعم", "لا"],
    industries: [
      "التجميل",
      "العطور",
      "الملابس",
      "مستلزمات منزلية",
      "الكتب",
      "الألعاب",
      "الإلكترونيات",
      "الأثاث",
      "الأطعمة",
      "منتجات مشهورة",
      "مجال آخر",
    ],
    volumes: ["0–50 طلبًا", "51–250 طلبًا", "251–1,000 طلب", "أكثر من 1,000 طلب"],
    businessTypes: ["علامة تجارية", "شركة تابعة", "متجر"],
    sellingMethods: ["صفحة إلكترونية", "موقع", "غيرهم"],
    referralSources: ["جوجل", "سنابشات", "انستاجرام أو فيسبوك", "إحالة", "معرض"],
    interests: [
      "تشغيل كامل (تخزين وشحن وتحصيل)",
      "توصيل فقط",
      "توسع للسعودية",
      "شحن دولي",
    ],
  },
};

export const localizedSolutionDetails =
  arabicCopy.solutionDetails as unknown as Record<
    string,
    Omit<SolutionDetail, "image">
  >;

localizedSolutionDetails["end-to-end-fulfilment"] =
  localizedSolutionDetails["end-to-end-fulfillment"];
localizedSolutionDetails["delivery-aggregation"] =
  localizedSolutionDetails.flexship;
localizedSolutionDetails["cross-border-trade"] =
  localizedSolutionDetails.flexborders;
localizedSolutionDetails["cross-boarder-trade"] =
  localizedSolutionDetails["cross-border-trade"];
localizedSolutionDetails.sales = {
  ...localizedSolutionDetails.flexshops,
  title: "شغّل محرك النمو. ونحن ندير طبقة التجارة.",
  intro: "نموذج يركز على السعودية لمسوقي الأداء: اختر المنتجات وأدر اكتساب العملاء، بينما تتولى فلكستوك العملية خلف البيع.",
  problem: {
    eyebrow: "نموذج تجارة الأداء",
    title: "انتقل من الحملة إلى الطلب المحصل دون بناء البنية الخلفية.",
    description: "تجمع فلكستوك التوريد والتخزين والشحن وتأكيد الطلب والتحصيل في سير عمل واحد، مع رؤية أسرع للربح الذي تصنعه حملاتك.",
  },
  outcomes: [
    { value: "السعودية", label: "نموذج تشغيل مركز" },
    { value: "طبقة واحدة", label: "من المنتج إلى التحصيل" },
    { value: "وضوح أكبر", label: "للربح" },
  ],
  steps: [
    { title: "اختر المنتج", description: "اختر المنتجات ذات الإمكانات التجارية الأكثر وضوحًا." },
    { title: "أدر اكتساب العملاء", description: "ركز حملات الأداء والإعلانات على خلق الطلب." },
    { title: "دع العملية تعمل", description: "تتولى فلكستوك التخزين والتأكيد والشحن والتحصيل." },
    { title: "اقرأ النتيجة", description: "استخدم إشارات التحصيل والطلبات لتقرر ما الذي ستوسعه لاحقًا." },
  ],
};

export const footerContent = {
  description:
    "The E-commerce Operating System for ambitious brands across MENA.",
  copyright: "© 2025 Flextock. All rights reserved.",
};

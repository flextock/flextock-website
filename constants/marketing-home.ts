type Locale = "en" | "ar";

export const heroContent = {
  eyebrow: "E-Commerce Enablement for brands in Egypt and Saudi Arabia",
  title: "Your Brand, Greater than before!",
  description:
    "Flextock stores your stock, ships every order, collects your cash, and takes your brand to Saudi Arabia, all from one dashboard. You get your time back for the part only you can do.",
  trustStrip: [
    "Backed by TLcom Capital",
    "Trusted by 2500+ brands",
    "9M Orders Fulfilled",
  ],
};

export const heroContentAr = {
  eyebrow: "تمكين التجارة الإلكترونية للعلامات في مصر والسعودية",
  title: "علامتك التجارية، أكبر مما كانت!",
  description:
    "فلكستوك تخزّن مخزونك، وتشحن كل طلب، وتحصّل أموالك، وتنقل علامتك إلى السعودية، كل ذلك من لوحة تحكم واحدة. تستعيد وقتك للجزء الذي لا يستطيع أحد غيرك القيام به.",
  trustStrip: [
    "بدعم من TLcom Capital",
    "موثوق بها من أكثر من 2500 علامة",
    "9 ملايين طلب تم تنفيذه",
  ],
};

export const engineContent = {
  en: {
    eyebrow: "The Engine",
    title: "One partner behind every order.",
    description:
      "Switch on what you need, when you need it. Every service runs on the same account and the same dashboard, so nothing has to be stitched together.",
    cta: "Find the right setup for your brand",
    ctaHref: "/solutions",
    comingSoon: "Coming soon",
    cards: [
      {
        name: "Flextock",
        label: "Fulfilment",
        description:
          "We receive your stock, store it, pick and pack every order, deliver it, collect the cash, and handle the returns. You follow all of it from one dashboard.",
        href: "/solutions/end-to-end-fulfillment",
        comingSoon: false,
      },
      {
        name: "Flexship",
        label: "Delivery across Egypt",
        description:
          "The right courier for every order, through one contract and one account. Same-day delivery for customers who won't wait. [verify coverage]",
        href: "/solutions/delivery-aggregation",
        comingSoon: false,
      },
      {
        name: "Flexborders",
        label: "Selling into Saudi Arabia",
        description:
          "Sell to customers in KSA without opening a company there. We handle customs, paperwork, and local fulfilment, so an order from Riyadh runs as smoothly as one from Cairo.",
        href: "/solutions/cross-border-trade",
        comingSoon: false,
      },
      {
        name: "Flexshops",
        label: "Every sales channel",
        description:
          "List on marketplaces and social channels, then manage stock and orders from all of them in one place.",
        href: "/solutions/sales",
        comingSoon: true,
      },
      {
        name: "Flexmart",
        label: "Your own storefront",
        description:
          "Launch a store that's connected to your stock from the first day in KSA.",
        href: null,
        comingSoon: true,
      },
      {
        name: "Flexcash",
        label: "Working capital",
        description:
          "Turn sales you've already made into cash you can use now, so your next production run doesn't wait on settlement.",
        href: "/solutions/flexcash",
        comingSoon: false,
      },
    ],
  },
  ar: {
    eyebrow: "المحرك",
    title: "شريك واحد خلف كل طلب.",
    description:
      "فعّل ما تحتاجه حين تحتاجه. كل خدمة تعمل على نفس الحساب ونفس لوحة التحكم، فلا شيء يحتاج إلى الربط يدويًا.",
    cta: "اعثر على الإعداد المناسب لعلامتك",
    ctaHref: "/solutions",
    comingSoon: "قريبًا",
    cards: [
      {
        name: "Flextock",
        label: "التنفيذ",
        description:
          "نستلم مخزونك ونخزّنه ونجهّز كل طلب ونوصّله ونحصّل النقد وندير المرتجعات. وتتابع ذلك كله من لوحة تحكم واحدة.",
        href: "/solutions/end-to-end-fulfillment",
        comingSoon: false,
      },
      {
        name: "Flexship",
        label: "التوصيل في مصر",
        description:
          "شركة الشحن المناسبة لكل طلب، بعقد واحد وحساب واحد. توصيل في نفس اليوم للعملاء الذين لا ينتظرون. [للتأكيد: نطاق التغطية]",
        href: "/solutions/delivery-aggregation",
        comingSoon: false,
      },
      {
        name: "Flexborders",
        label: "البيع في السعودية",
        description:
          "بع لعملائك في السعودية دون فتح شركة هناك. نتولى الجمارك والأوراق والتنفيذ المحلي، فيصل طلب الرياض بسلاسة طلب القاهرة.",
        href: "/solutions/cross-border-trade",
        comingSoon: false,
      },
      {
        name: "Flexshops",
        label: "كل قنوات البيع",
        description:
          "اعرض منتجاتك على الأسواق وقنوات التواصل، ثم أدر المخزون والطلبات من مكان واحد.",
        href: "/solutions/sales",
        comingSoon: true,
      },
      {
        name: "Flexmart",
        label: "متجرك الخاص",
        description:
          "أطلق متجرًا متصلًا بمخزونك من اليوم الأول في السعودية.",
        href: null,
        comingSoon: true,
      },
      {
        name: "Flexcash",
        label: "رأس المال العامل",
        description:
          "حوّل مبيعاتك التي تمت بالفعل إلى نقد تستخدمه الآن، حتى لا تنتظر دورة الإنتاج التالية التسوية.",
        href: "/solutions/flexcash",
        comingSoon: false,
      },
    ],
  },
} as const;

export const systemContent = {
  en: {
    eyebrow: "Inside the system",
    title: "Every order protected, from our shelf to their door",
    description:
      "The details that decide whether a customer orders again are the ones we obsess over.",
    groups: [
      {
        title: "Before it ships",
        items: [
          {
            title: "Your stock, on camera",
            description:
              "Our warehouses are covered by CCTV, so every unit is accounted for from the moment it arrives to the moment it leaves.",
          },
          {
            title: "Stock alerts before the stockout",
            description:
              "We track how fast each product sells and warn you while there's still time to reorder your best seller.",
          },
          {
            title: "Know who cancels before you ship",
            description:
              "Our blacklist flags customers with a history of high cancellation rates, so you can decide before paying for a trip that ends in a refusal.",
          },
          {
            title: "Risky COD orders, handled early",
            description:
              "Every cash-on-delivery order is checked before dispatch. Doubtful ones get a confirmation call and a new date instead of a wasted delivery.",
          },
        ],
      },
      {
        title: "On the way",
        items: [
          {
            title: "The right courier for every address",
            description:
              "We work with 10+ courier companies and assign each order to the one with the best delivery success rate in that area.",
          },
          {
            title: "Same-day delivery",
            description:
              "For the customer who wants it today, it arrives today.",
          },
          {
            title: "Flexfit, the fitting room comes to them",
            description:
              "Send two sizes. Your customer tries both at the door, keeps the one that fits, and the other comes straight back. Fewer returns, and a customer who's sure of what they bought.",
          },
        ],
      },
      {
        title: "After delivery",
        items: [
          {
            title: "Returns you can count",
            description:
              "Every returned order is inspected and marked sellable or not, so you always know what's back on the shelf.",
          },
          {
            title: "Updates the moment they matter",
            description:
              "You and your team get notified as soon as an order needs a decision, not after the customer complains.",
          },
          {
            title: "Answers in under 2 hours",
            description:
              "Every ticket gets a response from your dedicated account manager in less than 2 hours. Someone who already knows your brand, not a queue.",
          },
        ],
      },
    ],
  },
  ar: {
    eyebrow: "داخل النظام",
    title: "كل طلب محمي، من رفنا إلى باب العميل",
    description:
      "التفاصيل التي تقرر هل سيطلب العميل مرة أخرى هي ما نهتم به أكثر.",
    groups: [
      {
        title: "قبل الشحن",
        items: [
          {
            title: "مخزونك تحت الكاميرا",
            description:
              "مستودعاتنا مغطاة بكاميرات مراقبة، فكل وحدة محسوبة من لحظة وصولها حتى مغادرتها.",
          },
          {
            title: "تنبيهات المخزون قبل النفاد",
            description:
              "نتابع سرعة بيع كل منتج وننبّهك بينما لا يزال لديك وقت لإعادة طلب أفضل مبيعاتك.",
          },
          {
            title: "اعرف من يلغي قبل أن تشحن",
            description:
              "قائمتنا السوداء ترصد العملاء ذوي معدلات الإلغاء المرتفعة، لتقرر قبل دفع تكلفة رحلة تنتهي بالرفض.",
          },
          {
            title: "طلبات الدفع عند الاستلام عالية المخاطر، تُعالج مبكرًا",
            description:
              "يُفحص كل طلب دفع عند الاستلام قبل الإرسال. الطلبات المشكوك فيها تحصل على مكالمة تأكيد وموعد جديد بدل توصيل ضائع.",
          },
        ],
      },
      {
        title: "في الطريق",
        items: [
          {
            title: "شركة الشحن المناسبة لكل عنوان",
            description:
              "نعمل مع أكثر من 10 شركات شحن ونوجّه كل طلب إلى الشركة ذات أعلى نسبة نجاح توصيل في تلك المنطقة.",
          },
          {
            title: "توصيل في نفس اليوم",
            description: "للعميل الذي يريده اليوم، يصل اليوم.",
          },
          {
            title: "Flexfit، غرفة القياس تأتي إليهم",
            description:
              "أرسل مقاسين. يجرّب العميل كلاهما عند الباب، ويحتفظ بما يناسبه، ويعود الآخر مباشرة. مرتجعات أقل، وعميل واثق بما اشتراه.",
          },
        ],
      },
      {
        title: "بعد التوصيل",
        items: [
          {
            title: "مرتجعات يمكنك الاعتماد عليها",
            description:
              "يُفحص كل مرتجع ويُصنَّف قابلًا للبيع أو غير قابل، فتعرف دائمًا ما عاد إلى الرف.",
          },
          {
            title: "تحديثات في اللحظة التي تهم",
            description:
              "تصلك أنت وفريقك إشعارات فور احتياج الطلب لقرار، لا بعد شكوى العميل.",
          },
          {
            title: "ردود في أقل من ساعتين",
            description:
              "كل تذكرة تحصل على رد من مدير حسابك المخصص في أقل من ساعتين. شخص يعرف علامتك بالفعل، لا طابور انتظار.",
          },
        ],
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    groups: { title: string; items: { title: string; description: string }[] }[];
  }
>;

export const proofContent = {
  en: {
    eyebrow: "Proof",
    title: "What growth looks like when operations stop holding you back",
    stats: [
      {
        value: "2x+",
        label: "average sales growth in a merchant's first year with Flextock",
      },
      {
        value: "99%+",
        label: "orders delivered accurately and on time",
      },
      {
        value: "Up to 15%",
        label: "lower direct and indirect costs",
      },
      {
        value: "2500+",
        label: "Brands Trust Flextock",
      },
      {
        value: "9 Million",
        label: "orders fulfilled over 5 years",
      },
    ],
    testimonials: [
      {
        name: "Alya Osman",
        brand: "Curlit",
        quote:
          "Flextock has been a lifesaver during the past couple of years for us. As founders, it gave us back time that we needed so much for developing our products. It was necessary with our sales growth.",
      },
      {
        name: "Seif Saleh",
        brand: "Ze Perfumes",
        quote:
          "Packing every order and tracking couriers was a nightmare that we gladly do not have to worry about any more. Now we can scale without renting a bigger warehouse or expanding our manpower.",
      },
      {
        name: "Sherif El Assiouty",
        brand: "Basic Look",
        quote:
          "Having flextock manage operations for us was vital for us to grow as an e-commerce brand. Same day delivery and COD management helped us gain the trust and satisfaction of our customers all over Egypt and KSA.",
      },
    ],
  },
  ar: {
    eyebrow: "الدليل",
    title: "هكذا يبدو النمو عندما تتوقف العمليات عن إعاقتك",
    stats: [
      {
        value: "+2x",
        label: "متوسط نمو المبيعات في السنة الأولى مع فلكستوك",
      },
      {
        value: "+99%",
        label: "طلبات تُوصَّل بدقة وفي الموعد",
      },
      {
        value: "حتى 15%",
        label: "انخفاض في التكاليف المباشرة وغير المباشرة",
      },
      {
        value: "+2500",
        label: "علامة تثق بفلكستوك",
      },
      {
        value: "9 ملايين",
        label: "طلب تم تنفيذه على مدار 5 سنوات",
      },
    ],
    testimonials: [
      {
        name: "عليا عثمان",
        brand: "Curlit",
        quote:
          "فلكستوك أنقذت لنا السنوات الماضية. كمؤسسين، أعادت لنا وقتًا كنا نحتاجه جدًا لتطوير منتجاتنا. وكان ذلك ضروريًا مع نمو مبيعاتنا.",
      },
      {
        name: "سيف صالح",
        brand: "Ze Perfumes",
        quote:
          "تجهيز كل طلب ومتابعة شركات الشحن كان كابوسًا سعدنا بالتخلص منه. الآن نستطيع التوسع دون استئجار مستودع أكبر أو زيادة العمالة.",
      },
      {
        name: "شريف الأسيوطي",
        brand: "Basic Look",
        quote:
          "إدارة فلكستوك لعملياتنا كانت أساسية لنمونا كعلامة تجارة إلكترونية. التوصيل في نفس اليوم وإدارة الدفع عند الاستلام ساعدانا على كسب ثقة ورضا عملائنا في مصر والسعودية.",
      },
    ],
  },
} as const;

export const brandMarkContent = {
  en: {
    eyebrow: "The X",
    title: "Look closely at our X",
    lead: "It's built from the greater-than sign: >",
    body: [
      "Every brand on Flextock started smaller than its ambition. A spare room. A phone full of DM orders. A founder doing everything alone.",
      "The X is what comes next. Your business, always greater than it was yesterday. You'll find that sign in every Flextock product, because every one of them exists for the same reason: to move you past where you are.",
    ],
  },
  ar: {
    eyebrow: "الـ X",
    title: "انظر جيدًا إلى الـ X لدينا",
    lead: "بُني من علامة أكبر من: >",
    body: [
      "كل علامة على فلكستوك بدأت أصغر من طموحها. غرفة إضافية. هاتف مليء بطلبات الرسائل. مؤسس يفعل كل شيء وحده.",
      "الـ X هو ما يأتي بعد ذلك. عملك، دائمًا أكبر مما كان بالأمس. ستجد هذه العلامة في كل منتج من فلكستوك، لأن كلًا منها موجود لسبب واحد: أن يدفعك أبعد مما أنت عليه.",
    ],
  },
} as const;

export const howToStartContent = {
  en: {
    eyebrow: "How to start",
    title: "3 steps from packing orders to growing a brand",
    steps: [
      {
        number: "1",
        title: "Tell us where you're headed.",
        description:
          "Share your order volume, your sales channels, and the market you want next.",
      },
      {
        number: "2",
        title: "Get a setup built around you.",
        description:
          "We plan your storage, inbound and outbound timelines, delivery, and cash flow, and connect to your online store.",
      },
      {
        number: "3",
        title: "Send your stock and keep selling",
        description:
          "Your products arrive at our warehouse. From then on, every order ships without you touching a box.",
      },
    ],
    assurance:
      "What you can count on: One account. One invoice. An account manager who knows your business by name.",
  },
  ar: {
    eyebrow: "كيف تبدأ",
    title: "3 خطوات من تجهيز الطلبات إلى تنمية علامة",
    steps: [
      {
        number: "1",
        title: "أخبرنا إلى أين تتجه.",
        description:
          "شاركنا حجم طلباتك وقنوات بيعك والسوق الذي تريده تاليًا.",
      },
      {
        number: "2",
        title: "احصل على إعداد مبني حولك.",
        description:
          "نخطط للتخزين ومواعيد الاستلام والشحن والتوصيل والتدفق النقدي، ونربط متجرك الإلكتروني.",
      },
      {
        number: "3",
        title: "أرسل مخزونك واستمر في البيع",
        description:
          "تصل منتجاتك إلى مستودعنا. ومن ثم يشحن كل طلب دون أن تلمس صندوقًا.",
      },
    ],
    assurance:
      "ما يمكنك الاعتماد عليه: حساب واحد. فاتورة واحدة. مدير حساب يعرف عملك بالاسم.",
  },
} as const;

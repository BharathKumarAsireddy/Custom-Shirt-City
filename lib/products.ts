export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  categorySlug: string;
  image: string;
  description: string;
  features: string[];
  sizes: string[];
  onSale: boolean;
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: "T-Shirts",
    slug: "t-shirts",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/tee-shirts-1-1.jpeg",
    description: "Classic tees for every occasion — from everyday comfort to custom events.",
  },
  {
    name: "Polos",
    slug: "polos",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/polos-4.jpeg",
    description: "Professional polos perfect for corporate uniforms and team apparel.",
  },
  {
    name: "Hoodies",
    slug: "hoodies",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/hoodies-4.jpeg",
    description: "Premium hoodies built for comfort, ready for your custom design.",
  },
  {
    name: "Jackets",
    slug: "jackets",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/jackets-4.jpeg",
    description: "Stylish jackets that protect and impress — branded or plain.",
  },
  {
    name: "Hats",
    slug: "hats",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/hats-4.jpeg",
    description: "Caps and beanies that top off any look and carry your brand forward.",
  },
  {
    name: "Long Sleeves",
    slug: "long-sleeves",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/long-sleeve-4.jpeg",
    description: "Long sleeve shirts with premium fabrics for year-round versatility.",
  },
  {
    name: "BIC Pens",
    slug: "bic-pens",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop",
    description: "Custom branded BIC pens — perfect for events, offices, and promotional giveaways.",
  },
];

export const products: Product[] = [
  // ── T-SHIRTS ────────────────────────────────────────────────────────────────
  {
    id: "tshirt-1",
    slug: "bella-canvas-tri-blend-tshirt",
    name: "Bella + Canvas Tri-Blend T-Shirt",
    price: 15.0,
    originalPrice: 17.0,
    category: "T-Shirts",
    categorySlug: "t-shirts",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/3413c_da_fr.jpg",
    description:
      "Ultra-soft tri-blend fabric combining cotton, polyester, and rayon for unmatched comfort. Perfect for custom screen printing or embroidery.",
    features: [
      "52% Airlume combed ring-spun cotton, 48% polyester",
      "Retail-inspired fit",
      "Tear-away label",
      "Side seams for shape",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    onSale: true,
  },
  {
    id: "tshirt-2",
    slug: "comfort-colors-heavyweight-tshirt",
    name: "Comfort Colors Heavyweight T-Shirt",
    price: 34.0,
    category: "T-Shirts",
    categorySlug: "t-shirts",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/c1717_b6_fr.jpg",
    description:
      "Garment-dyed heavyweight tee with a lived-in look and feel. Superior softness right out of the box.",
    features: [
      "100% ring-spun cotton",
      "Garment-dyed for a vintage look",
      "Heavyweight 6.1 oz fabric",
      "Relaxed fit",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    onSale: false,
  },
  {
    id: "tshirt-3",
    slug: "customshirtcity-classic-tee",
    name: "CustomShirtCity Classic Tee",
    price: 15.0,
    category: "T-Shirts",
    categorySlug: "t-shirts",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/your-logo-here-whtie-.jpeg",
    description:
      "Our signature classic tee — the perfect canvas for your custom design. Factory-direct pricing with premium quality guaranteed.",
    features: [
      "100% pre-shrunk cotton",
      "Tear-away label",
      "Double-needle collar and sleeves",
      "Classic fit for all body types",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    onSale: false,
  },
  {
    id: "tshirt-4",
    slug: "next-level-cotton-blend-tshirt",
    name: "Next Level Cotton Blend T-Shirt",
    price: 13.0,
    originalPrice: 15.0,
    category: "T-Shirts",
    categorySlug: "t-shirts",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/n6210_hcb1_fr.jpg",
    description:
      "CVC cotton blend delivering a premium feel at an affordable price. Ideal for bulk custom orders and events.",
    features: [
      "60% cotton, 40% polyester CVC",
      "Side seams for a modern fit",
      "Tear-away label",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    onSale: true,
  },

  // ── POLOS ───────────────────────────────────────────────────────────────────
  {
    id: "polo-1",
    slug: "adidas-performance-polo",
    name: "Adidas Performance Polo",
    price: 65.0,
    originalPrice: 70.0,
    category: "Polos",
    categorySlug: "polos",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/a230_67_fr.jpg",
    description:
      "Premium Adidas performance polo with moisture-wicking technology. Perfect for corporate events and team uniforms.",
    features: [
      "100% polyester",
      "Moisture-wicking technology",
      "UPF 50+ sun protection",
      "Self-fabric collar",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    onSale: true,
  },
  {
    id: "polo-2",
    slug: "gildan-dryblend-jersey-sport-polo",
    name: "Gildan DryBlend® Jersey Sport Polo",
    price: 24.24,
    category: "Polos",
    categorySlug: "polos",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/g880_26_fr.jpg",
    description:
      "DryBlend technology wicks moisture away from the body. Great value for team uniforms and corporate orders.",
    features: [
      "50% cotton, 50% polyester DryBlend",
      "Moisture-wicking fabric",
      "Three-button placket",
      "Side seams",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    onSale: false,
  },
  {
    id: "polo-3",
    slug: "nike-dri-fit-micro-pique-polo",
    name: "Nike Dri-FIT Micro Pique 2.0 Polo",
    price: 53.02,
    category: "Polos",
    categorySlug: "polos",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/nkdc1963_8bf3_fr.jpg",
    description:
      "Iconic Nike polo featuring Dri-FIT technology for superior comfort and performance all day long.",
    features: [
      "100% polyester micro pique",
      "Nike Dri-FIT technology",
      "Flat knit collar",
      "Two-button placket",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    onSale: false,
  },
  {
    id: "polo-4",
    slug: "team-365-zone-performance-polo",
    name: "Team 365 Men's Zone Performance Polo",
    price: 24.66,
    category: "Polos",
    categorySlug: "polos",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/tt51_9k_fr.jpg",
    description:
      "High-performance polo at an unbeatable price. Ideal for teams, events, and corporate branding.",
    features: [
      "100% polyester Zone Performance fabric",
      "Moisture-wicking",
      "Two-button placket",
      "Set-in sleeves",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    onSale: false,
  },

  // ── HOODIES ─────────────────────────────────────────────────────────────────
  {
    id: "hoodie-1",
    slug: "bella-canvas-sponge-fleece-hoodie",
    name: "Bella + Canvas Sponge Fleece Hoodie",
    price: 35.0,
    originalPrice: 38.0,
    category: "Hoodies",
    categorySlug: "hoodies",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/3719_h2s_fr.jpg",
    description:
      "Ultra-cozy sponge fleece with a modern retail fit. Reduced pilling, premium comfort — ready for your custom design.",
    features: [
      "52% Airlume combed cotton, 48% polyester fleece",
      "Reduced pilling",
      "Self-fabric hood",
      "Front kangaroo pocket",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    onSale: true,
  },
  {
    id: "hoodie-2",
    slug: "carhartt-midweight-hooded-sweatshirt",
    name: "Carhartt Midweight Hooded Sweatshirt",
    price: 82.0,
    category: "Hoodies",
    categorySlug: "hoodies",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/ctk121_c6cf_fr.jpg",
    description:
      "Built for tough conditions with legendary Carhartt durability. The ultimate workwear hoodie.",
    features: [
      "10.5 oz midweight sweatshirt fleece",
      "Attached hood with drawcord",
      "Front pocket with zipper closure",
      "Rib-knit cuffs and waistband",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    onSale: false,
  },
  {
    id: "hoodie-3",
    slug: "customshirtcity-standard-hoodie",
    name: "CustomShirtCity Standard Hoodie",
    price: 26.0,
    category: "Hoodies",
    categorySlug: "hoodies",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/rt185_CARB_fr.jpg",
    description:
      "Our house brand hoodie — quality you can count on at a price that makes bulk orders easy and affordable.",
    features: [
      "Heavyweight fleece construction",
      "Double-lined hood",
      "Front kangaroo pocket",
      "Ribbed cuffs and waistband",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    onSale: false,
  },
  {
    id: "hoodie-4",
    slug: "gildan-heavy-blend-zip-hoodie",
    name: "Gildan Heavy Blend Zip Up Hoodie",
    price: 35.0,
    originalPrice: 38.0,
    category: "Hoodies",
    categorySlug: "hoodies",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/g186_53_fr.jpg",
    description:
      "Classic zip-up hoodie with Gildan's signature Heavy Blend fabric for warmth, durability, and style.",
    features: [
      "50% cotton, 50% polyester Heavy Blend",
      "Full-length YKK zipper",
      "Cuffs and waistband with Lycra",
      "Double-lined hood",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    onSale: true,
  },

  // ── JACKETS ─────────────────────────────────────────────────────────────────
  {
    id: "jacket-1",
    slug: "champion-packable-anorak-jacket",
    name: "Champion Packable Anorak Quarter Zip",
    price: 46.97,
    category: "Jackets",
    categorySlug: "jackets",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/co200_56_fr.jpg",
    description:
      "Packable anorak that folds into its own pocket for easy travel and storage. Perfect for outdoor events.",
    features: [
      "100% nylon shell",
      "Packs into front chest pocket",
      "Quarter-zip pull",
      "Elastic cuffs and hem",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    onSale: false,
  },
  {
    id: "jacket-2",
    slug: "jerzees-cadet-collar-quarter-zip",
    name: "Jerzees Cadet Collar Quarter Zip Pullover",
    price: 36.63,
    category: "Jackets",
    categorySlug: "jackets",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/995m_43_fr.jpg",
    description:
      "NuBlend cadet collar pullover with a sharp, professional appearance — ideal for corporate branding.",
    features: [
      "50% cotton, 50% polyester NuBlend",
      "Cadet collar",
      "Quarter-zip",
      "Pilling-resistant fabric",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    onSale: false,
  },
  {
    id: "jacket-3",
    slug: "port-authority-core-soft-shell-jacket",
    name: "Port Authority Core Soft Shell Jacket",
    price: 19.99,
    originalPrice: 29.99,
    category: "Jackets",
    categorySlug: "jackets",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/port-co-.jpeg",
    description:
      "Wind and water-resistant soft shell jacket at an incredible price. Available in multiple colors and sizes.",
    features: [
      "Polyester soft shell",
      "Wind and water resistant",
      "Zippered side pockets",
      "Available in 6 colors",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    onSale: true,
  },
  {
    id: "jacket-4",
    slug: "team-365-zone-performance-quarter-zip",
    name: "Team 365 Zone Performance Quarter-Zip",
    price: 25.37,
    category: "Jackets",
    categorySlug: "jackets",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/tt31_9k_fr.jpg",
    description:
      "Performance quarter-zip built for active teams. Moisture-wicking and breathable for all-day wear.",
    features: [
      "100% polyester Zone Performance fabric",
      "Moisture-wicking",
      "Quarter-zip with chin guard",
      "Reflective elements",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    onSale: false,
  },

  // ── HATS ────────────────────────────────────────────────────────────────────
  {
    id: "hat-1",
    slug: "nike-snapback-mesh-trucker-cap",
    name: "Nike Snapback Mesh Trucker Cap",
    price: 47.23,
    category: "Hats",
    categorySlug: "hats",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/nkfn9893_9549_fr.jpg",
    description:
      "Iconic Nike trucker cap with breathable mesh back and snapback closure. Premium branding opportunity.",
    features: [
      "6-panel structured cap",
      "Mesh back panels for breathability",
      "Snapback closure",
      "Nike Swoosh embroidery",
    ],
    sizes: ["One Size"],
    onSale: false,
  },
  {
    id: "hat-2",
    slug: "port-co-knit-beanie",
    name: "Port & Co Knit Beanie",
    price: 14.31,
    category: "Hats",
    categorySlug: "hats",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/cp90_cc64_fr.jpg",
    description:
      "Classic knit beanie ready for embroidery customization. A cold-weather essential for any team or brand.",
    features: [
      "100% acrylic",
      "Ribbed knit for stretch",
      "Universal one-size fit",
      "Ideal for embroidery",
    ],
    sizes: ["One Size"],
    onSale: false,
  },
  {
    id: "hat-3",
    slug: "richardson-adjustable-snapback-trucker-cap",
    name: "Richardson Adjustable Snapback Trucker Cap",
    price: 22.9,
    category: "Hats",
    categorySlug: "hats",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/112_89_fr.jpg",
    description:
      "The Richardson 112 — a classic trucker cap trusted by teams and brands everywhere. Always in style.",
    features: [
      "R-Flex fit",
      "Polyester/nylon front panels",
      "Mesh back for ventilation",
      "Structured mid-profile",
    ],
    sizes: ["One Size"],
    onSale: false,
  },
  {
    id: "hat-4",
    slug: "yupoong-five-panel-retro-trucker-cap",
    name: "Yupoong Five-Panel Retro Trucker Cap",
    price: 15.64,
    category: "Hats",
    categorySlug: "hats",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/6506_50_fr.jpg",
    description:
      "Retro-style five-panel trucker cap with a flat brim and modern aesthetic. Great for custom embroidery.",
    features: [
      "Five-panel construction",
      "Flat bill",
      "Mesh back",
      "Snapback closure",
    ],
    sizes: ["One Size"],
    onSale: false,
  },

  // ── LONG SLEEVES ────────────────────────────────────────────────────────────
  {
    id: "longsleeve-1",
    slug: "port-company-long-sleeve-core-tee",
    name: "Port & Company Long Sleeve Core T-Shirt",
    price: 18.0,
    category: "Long Sleeves",
    categorySlug: "long-sleeves",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/long-sleeve-4.jpeg",
    description:
      "A long-sleeve staple in our lineup. Classic fit, reliable fabric — ready for your custom design.",
    features: [
      "100% cotton",
      "Classic fit",
      "Tear-away label",
      "Double-needle stitching throughout",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    onSale: false,
  },
  {
    id: "longsleeve-2",
    slug: "bella-canvas-unisex-long-sleeve-tee",
    name: "Bella + Canvas Unisex Long Sleeve Tee",
    price: 22.0,
    originalPrice: 26.0,
    category: "Long Sleeves",
    categorySlug: "long-sleeves",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/long-sleeve-4.jpeg",
    description:
      "Premium Airlume combed cotton long sleeve with a modern, retail-inspired fit for all-day comfort.",
    features: [
      "100% Airlume combed ring-spun cotton",
      "Retail-inspired fit",
      "Side seams",
      "Tear-away label",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    onSale: true,
  },
  {
    id: "longsleeve-3",
    slug: "gildan-ultra-cotton-long-sleeve",
    name: "Gildan Ultra Cotton Long Sleeve Shirt",
    price: 16.0,
    category: "Long Sleeves",
    categorySlug: "long-sleeves",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/long-sleeve-4.jpeg",
    description:
      "Gildan's Ultra Cotton long sleeve — the ideal canvas for screen printing at volume.",
    features: [
      "100% cotton Ultra Cotton fabric",
      "Quarter-turned to eliminate center crease",
      "Seamless double-needle collar",
      "Pre-shrunk fabric",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    onSale: false,
  },
  {
    id: "longsleeve-4",
    slug: "next-level-tri-blend-long-sleeve",
    name: "Next Level Tri-Blend Long Sleeve Crew",
    price: 28.0,
    originalPrice: 32.0,
    category: "Long Sleeves",
    categorySlug: "long-sleeves",
    image: "https://i0.wp.com/customshirtcity.com/wp-content/uploads/2026/04/long-sleeve-4.jpeg",
    description:
      "Supremely soft tri-blend fabric in a long sleeve cut. Premium feel for premium brands and events.",
    features: [
      "50% polyester, 25% cotton, 25% rayon",
      "Modern retail fit",
      "Shoulder-to-shoulder taping",
      "Heathered finish",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    onSale: true,
  },

  // ── BIC PENS ────────────────────────────────────────────────────────────────
  {
    id: "bic-1",
    slug: "bic-cristal-original-ballpoint-pen",
    name: "BIC Cristal Original Ballpoint Pen",
    price: 24.99,
    originalPrice: 34.99,
    category: "BIC Pens",
    categorySlug: "bic-pens",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&auto=format&fit=crop",
    description:
      "The iconic BIC Cristal — the world's most popular ballpoint pen, custom branded with your logo. Crystal-clear barrel shows ink level at a glance. Available in blue, black, or red ink.",
    features: [
      "Laser-engraved or pad-printed logo",
      "Crystal-clear barrel for ink visibility",
      "Smooth medium-point 1.0mm tip",
      "Available in blue, black, or red ink",
    ],
    sizes: ["10 Pack", "25 Pack", "50 Pack", "100 Pack"],
    onSale: true,
  },
  {
    id: "bic-2",
    slug: "bic-round-stic-ballpoint-pen",
    name: "BIC Round Stic Ballpoint Pen",
    price: 18.99,
    category: "BIC Pens",
    categorySlug: "bic-pens",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop",
    description:
      "The BIC Round Stic — a smooth-writing everyday pen with a comfortable round barrel. Ideal for high-volume promotional orders. Your brand on every desk, every day.",
    features: [
      "Comfortable round barrel design",
      "Tungsten carbide ball for smooth writing",
      "Custom pad printing up to 2 colors",
      "Available in 10+ barrel colors",
    ],
    sizes: ["25 Pack", "50 Pack", "100 Pack", "250 Pack"],
    onSale: false,
  },
  {
    id: "bic-3",
    slug: "bic-4-color-ballpoint-pen",
    name: "BIC 4-Color Ballpoint Pen",
    price: 39.99,
    originalPrice: 49.99,
    category: "BIC Pens",
    categorySlug: "bic-pens",
    image: "https://images.unsplash.com/photo-1583195764036-46277a307020?w=600&q=80&auto=format&fit=crop",
    description:
      "Four pens in one — blue, black, red, and green ink in a single barrel. A bold statement piece that keeps your brand top-of-mind in every meeting and classroom.",
    features: [
      "4 ink colors in one retractable pen",
      "Engraved branding on clip or barrel",
      "Twist mechanism selects color",
      "Premium gift-worthy presentation",
    ],
    sizes: ["10 Pack", "25 Pack", "50 Pack", "100 Pack"],
    onSale: true,
  },
  {
    id: "bic-4",
    slug: "bic-soft-feel-ballpoint-pen",
    name: "BIC Soft Feel Ballpoint Pen",
    price: 29.99,
    category: "BIC Pens",
    categorySlug: "bic-pens",
    image: "https://images.unsplash.com/photo-1527864234480-5a54f6d42e8f?w=600&q=80&auto=format&fit=crop",
    description:
      "The BIC Soft Feel — a rubberized comfort-grip pen that writes all day without fatigue. Perfect for trade shows, corporate gifts, and client appreciation packs.",
    features: [
      "Soft rubber grip for extended comfort",
      "Retractable stainless steel tip",
      "Vibrant full-color imprint area",
      "Smooth 1.0mm medium ballpoint",
    ],
    sizes: ["25 Pack", "50 Pack", "100 Pack", "250 Pack"],
    onSale: false,
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 8): Product[] {
  const onSale = products.filter((p) => p.onSale);
  return onSale.slice(0, limit);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

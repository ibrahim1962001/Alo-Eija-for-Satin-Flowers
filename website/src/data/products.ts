import type { Product } from "@/types";

const traysMirrorsProducts: Product[] = [
  {
    id: "tray-1",
    name: "طقم عروسة كامل — مراية وبوكيه",
    nameEn: "Full Bridal Set — Mirror & Bouquet",
    description:
      "طقم متكامل يشمل مراية مزودة شبكة مخصصة بالأسماء، بوكيه توليب ستان أبيض، و boutonniere مطابق. مثالي لحفلة كتب الكتاب.",
    price: 1200,
    image: "/images/sawani-wmarayat-shabaka/product-1.jpg",
    category: "sawani-wmarayat-shabaka",
    featured: true,
    badge: "الأكثر مبيعاً",
  },
  {
    id: "tray-2",
    name: "صينية خواتم مثمنة — لؤلؤ وورود",
    nameEn: "Octagonal Ring Tray — Pearls & Roses",
    description:
      "صينية خواتم أكريليك شفافة بإطار ذهبي ومقابض لؤلؤ، مع تخصيص بالأسماء وصندوق خواتم زجاجي وورود ستان بيضاء.",
    price: 850,
    image: "/images/sawani-wmarayat-shabaka/product-2.jpg",
    category: "sawani-wmarayat-shabaka",
    featured: true,
  },
  {
    id: "tray-3",
    name: "صينية خواتم رخامية مخصصة",
    nameEn: "Custom Marble Ring Tray",
    description:
      "صينية خواتم بتصميم مثمن بسطح رخامي، مزينة بأسماء العروسين وصندوق خواتم سداسي وورود جيبسوفيلا مجففة.",
    price: 780,
    image: "/images/sawani-wmarayat-shabaka/product-3.jpg",
    category: "sawani-wmarayat-shabaka",
  },
  {
    id: "tray-4",
    name: "مراية كتب الكتاب المزودة شبكة",
    nameEn: "Katb Kitab Mesh Mirror",
    description:
      "مراية دائرية مزودة شبكة كريستال مع إطار زجاج محطم، زهور مجففة وفراشات فضية، وفيونكة ستان كريمي — مع تخصيص بالأسماء والتاريخ.",
    price: 650,
    image: "/images/sawani-wmarayat-shabaka/product-4.jpg",
    category: "sawani-wmarayat-shabaka",
    featured: true,
    badge: "مخصص",
  },
  {
    id: "tray-5",
    name: "لوحة مراية ذهبية دائرية",
    nameEn: "Golden Circular Mirror Plaque",
    description:
      "لوحة مراية دائرية بإطار ذهبي لامع مزين بزجاج محطم وكريستال، مع أسماء عربية وتاريخ هجري محفور.",
    price: 720,
    image: "/images/sawani-wmarayat-shabaka/product-5.jpg",
    category: "sawani-wmarayat-shabaka",
  },
  {
    id: "tray-6",
    name: "صينية خواتم باللؤلؤ والبامباس",
    nameEn: "Pearl & Pampas Ring Tray",
    description:
      "صينية خواتم شفافة بمقابض لؤلؤ، مزينة بورود ستان بيضاء وبامباس مجفف وخرز لؤلؤي، مع تخصيص كامل بالأسماء.",
    price: 900,
    image: "/images/sawani-wmarayat-shabaka/product-6.jpg",
    category: "sawani-wmarayat-shabaka",
    badge: "حصري",
  },
  {
    id: "tray-7",
    name: "صينية مراية بالورود الحمراء",
    nameEn: "Red Rose Mirror Tray",
    description:
      "صينية مراية دائرية بإطار لؤلؤ وورود ستان حمراء فاخرة، مع صندوق خواتم زجاجي وعبارة مخصصة وتاريخ المناسبة.",
    price: 950,
    image: "/images/sawani-wmarayat-shabaka/product-7.jpg",
    category: "sawani-wmarayat-shabaka",
  },
];

const katbNapkinsProducts: Product[] = [
  {
    id: "napkin-1",
    name: "منديل مطرز — عصام وهند",
    nameEn: "Embroidered Napkin — Essam & Hind",
    description:
      "منديل ستان أبيض مطرز بأسماء العروسين وآية قرآنية وتواريخ الخطوبة وكتب الكتاب والفرح، مع ورود ستان ثلاثية الأبعاد.",
    price: 550,
    image: "/images/mandil-kotob-alkitab/product-1.jpg",
    category: "mandil-kotob-alkitab",
    featured: true,
    badge: "هاند ميد",
  },
  {
    id: "napkin-2",
    name: "منديل كتب الكتاب — رحاب ويوسف",
    nameEn: "Katb Kitab Napkin — Rehab & Youssef",
    description:
      "منديل مطرز بتصميم العروسين تحت قوس من ورود الستان الذهبية، مع أسماء وتواريخ الخطوبة والزواج وحدود دانتيل أنيقة.",
    price: 520,
    image: "/images/mandil-kotob-alkitab/product-2.jpg",
    category: "mandil-kotob-alkitab",
    featured: true,
  },
  {
    id: "napkin-3",
    name: "منديل مطرز — محمد وسهيلة",
    nameEn: "Embroidered Napkin — Mohamed & Suhaila",
    description:
      "منديل ستان بحدود دانتيل مع بيت شعر عربي وأسماء العروسين وأجنحة فراشة لامعة وفستان عروسة بتفاصيل جليتر ثلاثية الأبعاد.",
    price: 580,
    image: "/images/mandil-kotob-alkitab/product-3.jpg",
    category: "mandil-kotob-alkitab",
  },
  {
    id: "napkin-4",
    name: "منديل فاخر بالخرز الفضي",
    nameEn: "Luxury Silver Beaded Napkin",
    description:
      "منديل ستان أبيض فاخر مطرز بخرز فضي وورود ستان بكريستال في المنتصف، مع أسماء وتاريخ كتب الكتاب وشرابات خرز متدلية.",
    price: 620,
    image: "/images/mandil-kotob-alkitab/product-4.jpg",
    category: "mandil-kotob-alkitab",
    badge: "فاخر",
  },
];

const brideFanProducts: Product[] = [
  {
    id: "fan-1",
    name: "هواية عروسة بالريش المخصصة",
    nameEn: "Personalized Bridal Feather Fan",
    description:
      "هواية عروسة فاخرة من الريش الأبيض الناعم مع قاعدة مخصصة بالاسم وتاج ذهبي وإطار لؤلؤي — قطعة أنيقة لا تُنسى.",
    price: 380,
    image: "/images/hawyet-alaroosa/product-1.jpg",
    category: "hawyet-alaroosa",
    featured: true,
    badge: "مخصص",
  },
];

export const products: Product[] = [
  ...traysMirrorsProducts,
  ...katbNapkinsProducts,
  ...brideFanProducts,
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

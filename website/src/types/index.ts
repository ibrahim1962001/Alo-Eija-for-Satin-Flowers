export type Category =
  | "ward-satin"
  | "zohor"
  | "sawani-wmarayat-shabaka"
  | "mandil-kotob-alkitab"
  | "hawyet-alaroosa";

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  category: Category;
  featured?: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const categoryLabels: Record<
  Category,
  { ar: string; en: string; description: string; folder: string }
> = {
  "ward-satin": {
    ar: "الورد الستان",
    en: "Satin Flowers",
    description: "بوكيهات ورد ستان هاند ميد بألوان وتصاميم فاخرة مع إمكانية التخصيص",
    folder: "ward-satin",
  },
  zohor: {
    ar: "الزهور",
    en: "Flowers",
    description: "بوكيهات ورد صناعي وتنسيقات زهرية هاند ميد لكل المناسبات",
    folder: "zohor",
  },
  "sawani-wmarayat-shabaka": {
    ar: "صواني ومرايات شبكه",
    en: "Trays & Mesh Mirrors",
    description: "صواني خواتم ومرايات مزودة شبكة مخصصة للعرايس",
    folder: "sawani-wmarayat-shabaka",
  },
  "mandil-kotob-alkitab": {
    ar: "مناديل كتب الكتاب",
    en: "Katb Kitab Napkins",
    description: "مناديل مطرزة يدوياً لحفلات كتب الكتاب والخطوبة",
    folder: "mandil-kotob-alkitab",
  },
  "hawyet-alaroosa": {
    ar: "هواية العروسه",
    en: "Bride's Fan",
    description: "هوايات عروسة فاخرة بالريش مع تخصيص بالاسم",
    folder: "hawyet-alaroosa",
  },
};

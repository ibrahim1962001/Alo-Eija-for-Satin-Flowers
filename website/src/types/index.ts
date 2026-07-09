export type Category =
  | "sawani-wmarayat-shabaka"
  | "mandil-kotob-alkitab"
  | "hawyet-alaroosa";

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  price: number;
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

# Alo Eija for Satin Flowers

موقع بيع احترافي لبراند **Alo Eija for Satin Flowers** — متخصص في صواني ومرايات شبكه ومناديل كتب الكتاب وهوايات العروسة الهاند ميد.

## المميزات

- أنيميشن 3D تفاعلي في الصفحة الرئيسية (وردة ستان + بتلات عائمة)
- تصميم فاخر بألوان البراند (بورجوندي، ذهبي، وردي)
- دعم كامل للغة العربية (RTL)
- متجر إلكتروني مع سلة تسوق
- طلب عبر واتساب
- صور منتجاتك الحقيقية

## التشغيل

```bash
cd website
npm install
npm run dev
```

افتحي [http://localhost:3000](http://localhost:3000)

## التخصيص

1. **رقم الواتساب**: عدّلي `WHATSAPP_NUMBER` في `src/lib/utils.ts`
2. **الأسعار والمنتجات**: عدّلي `src/data/products.ts`
3. **مزامنة صور جديدة**: ضيفي صور في المجلدات الأصلية ثم شغّلي:
   ```bash
   npm run sync-images
   ```
4. **انستجرام**: عدّلي الروابط في `Footer.tsx` و `contact/page.tsx`

## التقنيات

- Next.js 15 + TypeScript
- React Three Fiber (3D)
- Framer Motion (أنيميشن)
- Tailwind CSS 4
- Zustand (سلة التسوق)

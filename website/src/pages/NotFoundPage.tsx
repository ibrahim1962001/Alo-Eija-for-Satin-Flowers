import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center">
        <h1 className="font-display text-6xl text-gold mb-4">404</h1>
        <p className="text-cream/60 text-lg mb-8">الصفحة غير موجودة</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gold text-burgundy font-medium hover:shadow-lg hover:shadow-gold/30 transition-all"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}

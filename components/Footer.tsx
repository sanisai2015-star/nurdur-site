import type { Locale } from "../app/i18n";

export default function Footer({ locale }:{ locale: Locale }) {
  const wa = "https://wa.me/4477777777";
  const fb = "https://facebook.com/nurduralfaisal";

  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="container-x grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" className="h-12 w-12 rounded-2xl object-cover" alt="Logo" />
            <div>
              <div className="text-lg font-semibold">NURDAR Al Faisal</div>
              <div className="text-sm text-slate-600">General Contracting</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            {locale === "ar" ? "مقاولات عامة — تنفيذ مشاريع بجودة والتزام." : "General contracting — quality and commitment."}
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">{locale === "ar" ? "روابط" : "Links"}</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-700">
            <a href={`/${locale}/projects`} className="hover:text-brand-blue">{locale === "ar" ? "المشاريع" : "Projects"}</a>
            <a href={`/${locale}/services`} className="hover:text-brand-blue">{locale === "ar" ? "الخدمات" : "Services"}</a>
            <a href={`/${locale}/contact`} className="hover:text-brand-blue">{locale === "ar" ? "التواصل" : "Contact"}</a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">{locale === "ar" ? "التواصل" : "Contact"}</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-700">
            <div>Domain: <span className="font-semibold">nurduralfaisal.com</span></div>
            <a className="hover:text-brand-blue" href={wa} target="_blank">WhatsApp: 00447777777</a>
            <a className="hover:text-brand-blue" href={fb} target="_blank">Facebook: nurduralfaisal</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NURDAR Al Faisal. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
      </div>
    </footer>
  );
}

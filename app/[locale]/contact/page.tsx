import Reveal from "../../../components/Reveal";
import type { Locale } from "../../i18n";

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const title = locale === "ar" ? "تواصل معنا" : "Contact";

  return (
    <section className="container-x mt-10">
      <Reveal>
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        <div className="mt-3 h-1 w-24 rounded-full bg-brand-gold" />
      </Reveal>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-700">
          {locale === "ar"
            ? "هذه صفحة مبدئية. سنملؤها تلقائياً من ملف الشركة (PDF) ونضيف الصور والمؤثرات بنفس أسلوب الصفحة الرئيسية."
            : "This is a starter page. We'll populate it from your company PDF and add the same animations and sections as the homepage."}
        </p>

        <div className="mt-6 grid gap-3 text-sm text-slate-700">
          <a className="font-semibold text-brand-blue hover:underline" href="https://wa.me/4477777777" target="_blank">WhatsApp: 00447777777</a>
          <a className="font-semibold text-brand-blue hover:underline" href="https://facebook.com/nurduralfaisal" target="_blank">Facebook: nurduralfaisal</a>
          <div className="text-slate-600">Domain: nurduralfaisal.com</div>
        </div>

      </div>
    </section>
  );
}

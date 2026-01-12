import Hero from "../../components/Hero";
import Reveal from "../../components/Reveal";
import type { Locale } from "../i18n";
import { t } from "../i18n";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const tx = t(locale);

  const counters = [
    { k: locale === "ar" ? "مشاريع" : "Projects", v: "25+" },
    { k: locale === "ar" ? "معدات" : "Equipment", v: "15+" },
    { k: locale === "ar" ? "تأسيس" : "Founded", v: "2022" },
  ];

  const services = [
    locale === "ar" ? "أعمال مدنية وبنى تحتية" : "Civil & infrastructure works",
    locale === "ar" ? "مشاريع إنشاءات عامة" : "General construction projects",
    locale === "ar" ? "أعمال كهرباء وخدمات" : "Electrical & services works",
    locale === "ar" ? "تأهيل وصيانة" : "Rehabilitation & maintenance",
  ];

  const featured = ["p01_001.png", "p01_002.png", "p02_003.png", "p02_004.png", "p02_005.png", "p02_006.png", "p02_007.png", "p03_008.png"];

  return (
    <>
      <Hero locale={locale} />

      <section className="container-x mt-14">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold">{tx.blocks.countersTitle}</h2>
            <div className="h-1 w-24 rounded-full bg-brand-gold" />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {counters.map((c, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-4xl font-semibold text-brand-blue">{c.v}</div>
                <div className="mt-2 text-sm font-semibold text-slate-700">{c.k}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-14">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold">{tx.blocks.servicesTitle}</h2>
            <div className="h-1 w-24 rounded-full bg-brand-gold" />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-brand-gold">{locale === "ar" ? "خدمة" : "Service"}</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{s}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-14">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold">{tx.blocks.projectsTitle}</h2>
            <a href={`/${locale}/projects`} className="text-sm font-semibold text-brand-blue hover:underline">
              {locale === "ar" ? "عرض الكل" : "View all"}
            </a>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {(featured.length ? featured : ["logo.jpg","logo.jpg","logo.jpg","logo.jpg"]).slice(0,8).map((img, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img src={img.startsWith("p") ? `/projects/${img}` : `/${img}`} className="h-44 w-full object-cover" alt="" />
                <div className="p-4">
                  <div className="text-sm font-semibold text-slate-900">{locale === "ar" ? `مشروع رقم ${i+1}` : `Project #${i+1}`}</div>
                  <div className="mt-1 text-xs text-slate-600">{locale === "ar" ? "تفاصيل المشروع وصور" : "Details & photos"}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

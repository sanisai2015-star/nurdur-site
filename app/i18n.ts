export type Locale = "ar" | "en";

export const dict: Record<Locale, any> = {
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", services: "خدماتنا", projects: "مشاريعنا", equipment: "المعدات", contact: "تواصل" },
    hero: { k1: "نوردار الفيصل", k2: "للمقاولات العامة", desc: "جودة، التزام، وشفافية في التنفيذ.", cta1: "مشاريعنا", cta2: "تواصل معنا" },
    blocks: { servicesTitle: "خدماتنا", projectsTitle: "مشاريع مختارة", countersTitle: "أرقامنا" }
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", projects: "Projects", equipment: "Equipment", contact: "Contact" },
    hero: { k1: "NURDAR Al Faisal", k2: "General Contracting", desc: "Quality, commitment, and transparency in delivery.", cta1: "Our Projects", cta2: "Contact Us" },
    blocks: { servicesTitle: "Services", projectsTitle: "Featured Projects", countersTitle: "Our Numbers" }
  }
};

export function t(locale: Locale) { return dict[locale]; }

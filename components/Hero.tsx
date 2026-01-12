"use client";
import { motion } from "framer-motion";
import LinkButton from "./LinkButton";
import type { Locale } from "../app/i18n";
import { t } from "../app/i18n";

export default function Hero({ locale }:{ locale: Locale }) {
  const tx = t(locale);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <img
        src="/projects/p14_001.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e)=>{(e.currentTarget as HTMLImageElement).src="/logo.jpg"}}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative pt-28">
        <div className="container-x">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            {tx.hero.k1} <span className="text-white/85">{tx.hero.k2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg text-white/90"
          >
            {tx.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <LinkButton href={`/${locale}/projects`} variant="solid">{tx.hero.cta1}</LinkButton>
            <LinkButton href={`/${locale}/contact`} variant="outline">{tx.hero.cta2}</LinkButton>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { k: locale === "ar" ? "الجودة" : "Quality", v: locale === "ar" ? "التزام بمعايير التنفيذ" : "Delivery standards" },
              { k: locale === "ar" ? "السلامة" : "Safety", v: locale === "ar" ? "أولوية صحة العاملين" : "People first" },
              { k: locale === "ar" ? "الشفافية" : "Transparency", v: locale === "ar" ? "وضوح في العقود والتقارير" : "Clear reporting" },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl bg-white/10 p-5 text-white backdrop-blur">
                <div className="text-sm font-semibold text-brand-gold">{c.k}</div>
                <div className="mt-2 text-white/85">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

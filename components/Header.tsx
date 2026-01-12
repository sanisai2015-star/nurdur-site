"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "../app/i18n";
import { t } from "../app/i18n";

export default function Header({ locale }:{ locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const tx = t(locale);
  const base = `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition ${scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"}`}>
      <div className="container-x flex items-center justify-between py-4">
        <Link href={base} className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-xl object-cover" />
          <div className="leading-tight">
            <div className={`text-sm font-semibold ${scrolled ? "text-slate-900" : "text-white"}`}>NURDAR</div>
            <div className={`text-xs ${scrolled ? "text-slate-600" : "text-white/80"}`}>Al Faisal</div>
          </div>
        </Link>

        <nav className={`hidden items-center gap-6 text-sm font-semibold md:flex ${scrolled ? "text-slate-800" : "text-white"}`}>
          <Link href={`${base}`}>{tx.nav.home}</Link>
          <Link href={`${base}/about`}>{tx.nav.about}</Link>
          <Link href={`${base}/services`}>{tx.nav.services}</Link>
          <Link href={`${base}/projects`}>{tx.nav.projects}</Link>
          <Link href={`${base}/equipment`}>{tx.nav.equipment}</Link>
          <Link href={`${base}/contact`}>{tx.nav.contact}</Link>
        </nav>

        <Link
          href={locale === "ar" ? "/en" : "/ar"}
          className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${scrolled ? "bg-slate-100 text-slate-900 hover:bg-slate-200" : "bg-white/15 text-white hover:bg-white/25"}`}
        >
          {locale === "ar" ? "EN" : "AR"}
        </Link>
      </div>
    </header>
  );
}

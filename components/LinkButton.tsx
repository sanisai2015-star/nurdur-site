import Link from "next/link";
import { ReactNode } from "react";

export default function LinkButton({ href, children, variant = "solid" }:{
  href: string; children: ReactNode; variant?: "solid" | "outline";
}) {
  const cls = variant === "solid"
    ? "rounded-2xl bg-brand-gold px-6 py-3 font-semibold text-white transition hover:bg-brand-blue"
    : "rounded-2xl border border-white/60 px-6 py-3 font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold";
  return <Link className={cls} href={href}>{children}</Link>;
}

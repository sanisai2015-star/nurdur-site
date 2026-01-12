import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { Locale } from "../i18n";

export const metadata = {
  title: "NURDAR Al Faisal",
  description: "General Contracting",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <Header locale={locale} />
        <main className="pt-16">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

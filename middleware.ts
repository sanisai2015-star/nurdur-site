import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ar", "en"] as const;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/favicon") || pathname.startsWith("/robots.txt") || pathname.startsWith("/sitemap.xml")) {
    return NextResponse.next();
  }

  const seg = pathname.split("/")[1];
  if (locales.includes(seg as any)) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/ar${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/((?!api).*)"] };

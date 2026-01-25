import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["it", "en"] as const;
const DEFAULT_LOCALE = "it";

function isPublicFile(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  );
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Non toccare asset/API
  if (isPublicFile(pathname)) return NextResponse.next();

  // BLOCCO TOTALE RO/BG: qualsiasi /ro/* o /bg/* -> /
  if (
    pathname === "/ro" ||
    pathname.startsWith("/ro/") ||
    pathname === "/bg" ||
    pathname.startsWith("/bg/")
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Se già in /it o /en, ok
  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  // Se NON c'è locale nel path, forza default /it (mantenendo path)
  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};

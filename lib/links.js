import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["it", "en"];
const DEFAULT_LOCALE = "it";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // file statici e next
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // se già ha locale valido → ok
  if (LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return NextResponse.next();
  }

  // altrimenti forza default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};

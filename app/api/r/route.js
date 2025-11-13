// app/api/r/route.js

import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const to = searchParams.get("to");

  // se manca il target → torna home
  if (!to) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    // accettiamo solo http/https
    const url = new URL(to);
    if (!/^https?:$/.test(url.protocol)) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // 302 → redirect all'URL esterno (Amazon/eBay/TikTok)
    return NextResponse.redirect(url.toString(), 302);
  } catch {
    // se 'to' non è un URL valido
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// acrossbay/lib/links.js

// Marketplace links (can be set via env vars in Vercel)
// If env vars are missing, they fallback to the homepage to avoid build/runtime crash.

export const AMAZON_URL =
  process.env.NEXT_PUBLIC_AMAZON_URL || "https://www.across-bay.com";
export const EBAY_URL =
  process.env.NEXT_PUBLIC_EBAY_URL || "https://www.across-bay.com";
export const TIKTOK_URL =
  process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.across-bay.com";

export function getAmazonLink() {
  return AMAZON_URL;
}

export function getEbayLink() {
  return EBAY_URL;
}

export function getTiktokLink() {
  return TIKTOK_URL;
}

// Locales: ONLY IT + EN
export const LOCALES = ["it", "en"];
export const DEFAULT_LOCALE = "it";

// lib/links.js
export function getEbayLink(rawUrl) {
  const url = new URL(rawUrl);
  url.searchParams.set("campid", process.env.NEXT_PUBLIC_EBAY_CAMPAIGN_ID || "");
  url.searchParams.set("customid", process.env.NEXT_PUBLIC_EBAY_CUSTOM_ID || "acrossbay");
  return url.toString();
}

export function getAmazonLink(rawUrl) {
  const url = new URL(rawUrl);
  url.searchParams.set("tag", process.env.NEXT_PUBLIC_AMAZON_TAG || "");
  return url.toString();
}

export function getTikTokLink(rawUrl) {
  if (!process.env.NEXT_PUBLIC_TIKTOK_REF) return rawUrl;
  const url = new URL(rawUrl);
  url.searchParams.set("ref", process.env.NEXT_PUBLIC_TIKTOK_REF);
  return url.toString();
}

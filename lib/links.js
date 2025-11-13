// app/lib/links.js
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.across-bay.com";

export function getAmazonLink(urlOrAsin) {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG || "";
  if (!urlOrAsin) return "#";
  let asin = "";
  if (/^https?:\/\//i.test(String(urlOrAsin))) {
    const m = String(urlOrAsin).match(/\/([A-Z0-9]{10})(?:[/?]|$)/i);
    asin = m ? m[1] : "";
  } else {
    asin = String(urlOrAsin);
  }
  const final = asin
    ? `https://www.amazon.co.uk/dp/${asin}?tag=${encodeURIComponent(tag)}`
    : `${urlOrAsin}${urlOrAsin.includes("?") ? "&" : "?"}tag=${encodeURIComponent(tag)}`;
  return `${SITE}/api/r?to=${encodeURIComponent(final)}`;
}

export function getEbayLink(itemUrl) {
  const campid = process.env.NEXT_PUBLIC_EPN_CAMPAIGNID || "";
  const customid = process.env.NEXT_PUBLIC_EPN_CUSTOMID || "acrossbay";
  if (!itemUrl) return "#";
  if (!campid) return itemUrl;
  return `https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=${encodeURIComponent(
    campid
  )}&customid=${encodeURIComponent(customid)}&toolid=10001&mpre=${encodeURIComponent(itemUrl)}`;
}

export function getTikTokLink(productUrl) {
  const aff = process.env.NEXT_PUBLIC_TIKTOK_AFFILIATE_ID || "";
  if (!productUrl) return "#";
  if (!aff) return productUrl;
  const u = new URL(productUrl);
  u.searchParams.set("aff_id", aff);
  return u.toString();
}

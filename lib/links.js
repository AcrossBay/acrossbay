// app/lib/links.js
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.across-bay.com";

// AMAZON – accetta ASIN (es. B08ABC1234) oppure URL Amazon
export function getAmazonLink(asinOrUrl) {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG || "";
  let asin = asinOrUrl || "";
  // Se è un URL, provo ad estrarre l'ASIN
  const m = String(asinOrUrl).match(/\/([A-Z0-9]{10})(?:[/?]|$)/i);
  if (m) asin = m[1];
  if (!asin) return "#";
  const url = `https://www.amazon.co.uk/dp/${asin}?tag=${encodeURIComponent(tag)}`;
  // Safe redirect (facoltativo, utile per analytics)
  return `${SITE}/api/r?to=${encodeURIComponent(url)}`;
}

// EBAY (EPN) – usa deep-link rover con mpre
// Passa un URL prodotto eBay (es. https://www.ebay.co.uk/itm/1234567890)
export function getEbayLink(itemUrl) {
  const campid = process.env.NEXT_PUBLIC_EPN_CAMPAIGNID || "";
  const customid = process.env.NEXT_PUBLIC_EPN_CUSTOMID || "acrossbay";
  if (!itemUrl || !campid) return itemUrl || "#";
  const rover = `https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=${encodeURIComponent(
    campid
  )}&customid=${encodeURIComponent(customid)}&toolid=10001&mpre=${encodeURIComponent(itemUrl)}`;
  return rover;
}

// TIKTOK – se hai un affiliate id, lo aggiunge; altrimenti torna l’URL diretto
export function getTikTokLink(productUrl) {
  const aff = process.env.NEXT_PUBLIC_TIKTOK_AFFILIATE_ID || "";
  if (!productUrl) return "#";
  if (!aff) return productUrl;
  const u = new URL(productUrl);
  u.searchParams.set("aff_id", aff);
  return u.toString();
}

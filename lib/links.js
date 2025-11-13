// /lib/links.js
export function getAmazonLink(url) {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG || "";
  const base = `/api?to=${encodeURIComponent(url)}`;
  return tag ? `${base}&tag=${encodeURIComponent(tag)}` : base;
}

export function getEbayLink(url) {
  const campid = process.env.NEXT_PUBLIC_EPN_CAMPAIGNID || "";
  const customid = process.env.NEXT_PUBLIC_EPN_CUSTOMID || "acrossbay";
  let link = `/api?to=${encodeURIComponent(url)}`;
  if (campid) link += `&campid=${encodeURIComponent(campid)}`;
  if (customid) link += `&customid=${encodeURIComponent(customid)}`;
  return link;
}

export function getTiktokLink(url) {
  const aff = process.env.NEXT_PUBLIC_TIKTOK_AFFILIATE_ID || "";
  const base = `/api?to=${encodeURIComponent(url)}`;
  return aff ? `${base}&tt_affid=${encodeURIComponent(aff)}` : base;
}

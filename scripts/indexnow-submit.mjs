// One-off IndexNow submission for ZUBR-2000.
// Submits every canonical URL (all locales × routes) to IndexNow,
// which distributes to Bing, Yandex, Seznam, Naver, etc. (NOT Google).
//
// Prerequisite: public/<KEY>.txt must be live on the domain first (deploy it).
// Run:  node scripts/indexnow-submit.mjs
//
// Docs: https://www.indexnow.org/documentation

const HOST = "www.zubr-2000.com.ua";
const SITE_URL = `https://${HOST}`;
const KEY = "f6701bcf7d04bd2ebd0610109d7ffe45";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

const LOCALES = ["uk", "en", "pl", "de", "ru", "fr", "it", "sv", "da"];
const ROUTES = [
  "",
  "/products",
  "/products/oak-lumber",
  "/products/ash-lumber",
  "/products/birch-lumber",
  "/products/modrina-lumber",
  "/aboutus",
  "/aboutus/certificates",
  "/aboutus/news",
  "/aboutus/quality-standarts",
  "/aboutus/manufacturing-process",
  "/aboutus/offers",
  "/contact",
];

const urlList = [];
for (const locale of LOCALES) {
  for (const path of ROUTES) {
    urlList.push(`${SITE_URL}/${locale}${path}`);
  }
}

const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`Submitted ${urlList.length} URLs to IndexNow`);
console.log(`HTTP ${res.status} ${res.statusText}`);
console.log(await res.text());
// 200 = accepted, 202 = accepted (key validation pending),
// 403 = key file not found/invalid, 422 = URLs don't match host.

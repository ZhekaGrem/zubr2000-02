export const SITE_URL = "https://www.zubr-2000.com.ua";
export const SITE_NAME = "ZUBR-2000";
export const LOCALES = ["uk", "en", "pl", "de", "ru", "fr", "it", "sv", "da"];
export const DEFAULT_LOCALE = "uk";

const OG_IMAGE = `${SITE_URL}/photo_tittl_%E2%84%961.1.webp`;

const OG_LOCALE = {
  uk: "uk_UA",
  en: "en_US",
  pl: "pl_PL",
  de: "de_DE",
  ru: "ru_RU",
  fr: "fr_FR",
  it: "it_IT",
  sv: "sv_SE",
  da: "da_DK",
};

// Per-page localized title + description. Falls back to EN if a locale is missing.
const PAGE_META = {
  home: {
    uk: {
      title: "ZUBR-2000— виробник пиломатеріалів з України: дуб, ясен, береза, модрина",
      description:
        "ZUBR-2000 з 2000 року виробляє пиломатеріали твердих порід — дуб, ясен, береза, модрина. Сушка, стругання, експорт у країни ЄС. Сертифікована якість.",
    },
    en: {
      title: "ZUBR-2000 — Ukrainian hardwood lumber: oak, ash, birch, larch",
      description:
        "ZUBR-2000 has manufactured hardwood lumber since 2000 — oak, ash, birch, larch. Kiln-dried, planed, exported across the EU. Certified quality, direct from the mill.",
    },
    pl: {
      title: "ZUBR-2000 — ukraiński producent tarcicy: dąb, jesion, brzoza, modrzew",
      description:
        "ZUBR-2000 od 2000 roku produkuje tarcicę liściastą: dąb, jesion, brzozę, modrzew. Suszenie komorowe, strugana, eksport do UE. Certyfikowana jakość.",
    },
    de: {
      title: "ZUBR-2000 — Schnittholzhersteller aus der Ukraine: Eiche, Esche, Birke, Lärche",
      description:
        "ZUBR-2000 produziert seit 2000 Hartholz-Schnittholz: Eiche, Esche, Birke, Lärche. Kammergetrocknet, gehobelt, EU-Export. Zertifizierte Qualität direkt vom Hersteller.",
    },
    ru: {
      title: "ZUBR-2000 — производитель пиломатериалов из Украины: дуб, ясень, берёза, лиственница",
      description:
        "ZUBR-2000 с 2000 года производит пиломатериалы твёрдых пород — дуб, ясень, берёза, лиственница. Сушка, строжка, экспорт в ЕС. Сертифицированное качество.",
    },
    fr: {
      title: "ZUBR-2000 — producteur ukrainien de bois d’œuvre : chêne, frêne, bouleau, mélèze",
      description:
        "ZUBR-2000 fabrique depuis 2000 du bois d’œuvre feuillu : chêne, frêne, bouleau, mélèze. Séchage en étuve, rabotage, export vers l’UE. Qualité certifiée.",
    },
    it: {
      title: "ZUBR-2000 — segheria ucraina: rovere, frassino, betulla, larice",
      description:
        "ZUBR-2000 produce dal 2000 legname di latifoglie: rovere, frassino, betulla, larice. Essiccazione, piallatura, export in UE. Qualità certificata dal produttore.",
    },
    sv: {
      title: "ZUBR-2000 — ukrainsk tillverkare av trävaror: ek, ask, björk, lärk",
      description:
        "ZUBR-2000 tillverkar sedan 2000 lövträvaror — ek, ask, björk, lärk. Kammartork, hyvlat, export till EU. Certifierad kvalitet direkt från sågverket.",
    },
    da: {
      title: "ZUBR-2000 — ukrainsk tømmerproducent: eg, ask, birk, lærk",
      description:
        "ZUBR-2000 har siden 2000 produceret løvtræ — eg, ask, birk, lærk. Kammertørret, høvlet, eksport til EU. Certificeret kvalitet direkte fra savværket.",
    },
  },
  products: {
    uk: { title: "Продукція — пиломатеріали дуб, ясен, береза, модрина | ZUBR-2000", description: "Каталог пиломатеріалів ZUBR-2000: дуб, ясен, береза, модрина. Різні сорти й типорозміри, камерна сушка, експорт." },
    en: { title: "Products — oak, ash, birch, larch lumber | ZUBR-2000", description: "ZUBR-2000 lumber catalogue: oak, ash, birch, larch. Multiple grades and sizes, kiln-dried, export-ready." },
    pl: { title: "Produkty — tarcica dębowa, jesionowa, brzozowa, modrzewiowa | ZUBR-2000", description: "Katalog tarcicy ZUBR-2000: dąb, jesion, brzoza, modrzew. Różne gatunki i wymiary, suszona komorowo, gotowa do eksportu." },
    de: { title: "Produkte — Eichen-, Eschen-, Birken-, Lärchen-Schnittholz | ZUBR-2000", description: "ZUBR-2000 Schnittholz-Katalog: Eiche, Esche, Birke, Lärche. Mehrere Sortierklassen und Abmessungen, kammergetrocknet, exportfertig." },
    ru: { title: "Продукция — пиломатериалы дуб, ясень, берёза, лиственница | ZUBR-2000", description: "Каталог пиломатериалов ZUBR-2000: дуб, ясень, берёза, лиственница. Различные сорта и типоразмеры, камерная сушка, экспорт." },
    fr: { title: "Produits — bois de chêne, frêne, bouleau, mélèze | ZUBR-2000", description: "Catalogue de bois d’œuvre ZUBR-2000 : chêne, frêne, bouleau, mélèze. Qualités et dimensions variées, séché en étuve, prêt à l’export." },
    it: { title: "Prodotti — legname di rovere, frassino, betulla, larice | ZUBR-2000", description: "Catalogo legname ZUBR-2000: rovere, frassino, betulla, larice. Diverse qualità e misure, essiccato in camera, pronto per l’export." },
    sv: { title: "Produkter — ek, ask, björk, lärk | ZUBR-2000", description: "ZUBR-2000 trävarukatalog: ek, ask, björk, lärk. Flera kvaliteter och dimensioner, kammartorkat, exportklart." },
    da: { title: "Produkter — eg, ask, birk, lærk | ZUBR-2000", description: "ZUBR-2000 tømmerkatalog: eg, ask, birk, lærk. Flere kvaliteter og dimensioner, kammertørret, klar til eksport." },
  },
  oak: {
    uk: { title: "Дубові пиломатеріали (Quercus robur) — брусок, дошка, гнуті елементи | ZUBR-2000", description: "Дубові пиломатеріали ZUBR-2000: брусок 22–54×54–315 мм, дошка 54×110 мм, гнуті елементи. Сорти A, AA/AB, B, C. Камерна сушка. Виробник з України." },
    en: { title: "Oak lumber (Quercus robur) — beams, boards, curved elements | ZUBR-2000", description: "European oak lumber from ZUBR-2000: beams 22–54×54–315 mm, boards 54×110 mm, curved elements. Grades A, AA/AB, B, C. Kiln-dried. Ukrainian manufacturer." },
    pl: { title: "Tarcica dębowa (Quercus robur) — belki, deski, elementy gięte | ZUBR-2000", description: "Tarcica dębowa ZUBR-2000: belki 22–54×54–315 mm, deski 54×110 mm, elementy gięte. Klasy A, AA/AB, B, C. Suszenie komorowe. Producent z Ukrainy." },
    de: { title: "Eichen-Schnittholz (Quercus robur) — Balken, Bretter, Biegeelemente | ZUBR-2000", description: "Eichenschnittholz von ZUBR-2000: Balken 22–54×54–315 mm, Bretter 54×110 mm, Biegeelemente. Sortierklassen A, AA/AB, B, C. Kammergetrocknet." },
    ru: { title: "Дубовые пиломатериалы (Quercus robur) — брус, доска, гнутые элементы | ZUBR-2000", description: "Дубовые пиломатериалы ZUBR-2000: брус 22–54×54–315 мм, доска 54×110 мм, гнутые элементы. Сорта A, AA/AB, B, C. Камерная сушка." },
    fr: { title: "Bois de chêne (Quercus robur) — poutres, planches, éléments cintrés | ZUBR-2000", description: "Bois de chêne européen ZUBR-2000 : poutres 22–54×54–315 mm, planches 54×110 mm, éléments cintrés. Qualités A, AA/AB, B, C. Séché en étuve." },
    it: { title: "Legname di rovere (Quercus robur) — travi, tavole, elementi curvi | ZUBR-2000", description: "Rovere europeo ZUBR-2000: travi 22–54×54–315 mm, tavole 54×110 mm, elementi curvi. Qualità A, AA/AB, B, C. Essiccato in camera." },
    sv: { title: "Ek-trävaror (Quercus robur) — balkar, brädor, böjda element | ZUBR-2000", description: "Europeisk ek från ZUBR-2000: balkar 22–54×54–315 mm, brädor 54×110 mm, böjda element. Kvaliteter A, AA/AB, B, C. Kammartorkat." },
    da: { title: "Eg-trævarer (Quercus robur) — bjælker, brædder, buede elementer | ZUBR-2000", description: "Europæisk eg fra ZUBR-2000: bjælker 22–54×54–315 mm, brædder 54×110 mm, buede elementer. Kvaliteter A, AA/AB, B, C. Kammertørret." },
  },
  ash: {
    uk: { title: "Ясеневі пиломатеріали (Fraxinus excelsior) | ZUBR-2000", description: "Ясеневі пиломатеріали ZUBR-2000: брусок, дошка, різні сорти. Виразна текстура, твердість. Камерна сушка, стругання під розмір клієнта." },
    en: { title: "Ash lumber (Fraxinus excelsior) | ZUBR-2000", description: "European ash lumber from ZUBR-2000: beams and boards, multiple grades. Distinctive grain, high hardness. Kiln-dried, planed to customer specs." },
    pl: { title: "Tarcica jesionowa (Fraxinus excelsior) | ZUBR-2000", description: "Tarcica jesionowa ZUBR-2000: belki, deski, różne klasy. Wyrazista struktura, wysoka twardość. Suszenie komorowe, strugana na wymiar." },
    de: { title: "Eschen-Schnittholz (Fraxinus excelsior) | ZUBR-2000", description: "Eschenschnittholz von ZUBR-2000: Balken und Bretter, verschiedene Sortierklassen. Ausgeprägte Maserung, hohe Härte. Kammergetrocknet, gehobelt." },
    ru: { title: "Ясеневые пиломатериалы (Fraxinus excelsior) | ZUBR-2000", description: "Ясеневые пиломатериалы ZUBR-2000: брус, доска, различные сорта. Выразительная текстура, твёрдость. Камерная сушка, строжка под размер." },
    fr: { title: "Bois de frêne (Fraxinus excelsior) | ZUBR-2000", description: "Frêne européen ZUBR-2000 : poutres et planches, plusieurs qualités. Veinage marqué, grande dureté. Séché en étuve, raboté sur mesure." },
    it: { title: "Legname di frassino (Fraxinus excelsior) | ZUBR-2000", description: "Frassino europeo ZUBR-2000: travi e tavole, diverse qualità. Venatura marcata, elevata durezza. Essiccato in camera, piallato su misura." },
    sv: { title: "Ask-trävaror (Fraxinus excelsior) | ZUBR-2000", description: "Europeisk ask från ZUBR-2000: balkar och brädor, flera kvaliteter. Markerad ådring, hög hårdhet. Kammartorkat, hyvlat på mått." },
    da: { title: "Ask-trævarer (Fraxinus excelsior) | ZUBR-2000", description: "Europæisk ask fra ZUBR-2000: bjælker og brædder, flere kvaliteter. Markeret åretegning, høj hårdhed. Kammertørret, høvlet på mål." },
  },
  birch: {
    uk: { title: "Березові пиломатеріали (Betula pendula) | ZUBR-2000", description: "Березові пиломатеріали ZUBR-2000 — для меблів, декору, сталого будівництва. Різні типорозміри, камерна сушка, експорт з України." },
    en: { title: "Birch lumber (Betula pendula) | ZUBR-2000", description: "Birch lumber from ZUBR-2000 — for furniture, joinery, sustainable construction. Multiple sizes, kiln-dried, exported from Ukraine." },
    pl: { title: "Tarcica brzozowa (Betula pendula) | ZUBR-2000", description: "Tarcica brzozowa ZUBR-2000 — do mebli, stolarki, zrównoważonego budownictwa. Różne wymiary, suszenie komorowe, eksport z Ukrainy." },
    de: { title: "Birken-Schnittholz (Betula pendula) | ZUBR-2000", description: "Birkenschnittholz von ZUBR-2000 — für Möbel, Tischlerei, nachhaltiges Bauen. Verschiedene Maße, kammergetrocknet, Export aus der Ukraine." },
    ru: { title: "Берёзовые пиломатериалы (Betula pendula) | ZUBR-2000", description: "Берёзовые пиломатериалы ZUBR-2000 — для мебели, столярки, устойчивого строительства. Различные типоразмеры, камерная сушка." },
    fr: { title: "Bois de bouleau (Betula pendula) | ZUBR-2000", description: "Bouleau ZUBR-2000 — pour meubles, menuiserie, construction durable. Dimensions variées, séché en étuve, exporté depuis l’Ukraine." },
    it: { title: "Legname di betulla (Betula pendula) | ZUBR-2000", description: "Betulla ZUBR-2000 — per mobili, falegnameria, edilizia sostenibile. Dimensioni varie, essiccata in camera, esportata dall’Ucraina." },
    sv: { title: "Björk-trävaror (Betula pendula) | ZUBR-2000", description: "Björk från ZUBR-2000 — för möbler, snickeri, hållbart byggande. Flera dimensioner, kammartorkat, export från Ukraina." },
    da: { title: "Birk-trævarer (Betula pendula) | ZUBR-2000", description: "Birk fra ZUBR-2000 — til møbler, snedkeri, bæredygtigt byggeri. Flere dimensioner, kammertørret, eksport fra Ukraine." },
  },
  modrina: {
    uk: { title: "Пиломатеріали модрина (Larix decidua) | ZUBR-2000", description: "Модрина від ZUBR-2000: щільність до 800 кг/м³, висока стійкість до вологи й гниття. Брус, дошка — для підлоги, фасадів, столярних виробів." },
    en: { title: "Larch lumber (Larix decidua) | ZUBR-2000", description: "European larch from ZUBR-2000: density up to 800 kg/m³, high resistance to moisture and decay. Beams and boards for flooring, cladding, joinery." },
    pl: { title: "Tarcica modrzewiowa (Larix decidua) | ZUBR-2000", description: "Modrzew europejski ZUBR-2000: gęstość do 800 kg/m³, wysoka odporność na wilgoć i gnicie. Belki i deski do podłóg, elewacji, stolarki." },
    de: { title: "Lärchen-Schnittholz (Larix decidua) | ZUBR-2000", description: "Europäische Lärche von ZUBR-2000: Dichte bis 800 kg/m³, hohe Feuchtigkeits- und Fäulnisbeständigkeit. Balken und Bretter für Böden, Fassaden, Tischlerei." },
    ru: { title: "Пиломатериалы лиственница (Larix decidua) | ZUBR-2000", description: "Лиственница ZUBR-2000: плотность до 800 кг/м³, высокая стойкость к влаге и гниению. Брус, доска — для пола, фасадов, столярки." },
    fr: { title: "Bois de mélèze (Larix decidua) | ZUBR-2000", description: "Mélèze européen ZUBR-2000 : densité jusqu’à 800 kg/m³, haute résistance à l’humidité et à la pourriture. Poutres et planches pour sols, bardages, menuiserie." },
    it: { title: "Legname di larice (Larix decidua) | ZUBR-2000", description: "Larice europeo ZUBR-2000: densità fino a 800 kg/m³, alta resistenza a umidità e marciume. Travi e tavole per pavimenti, facciate, falegnameria." },
    sv: { title: "Lärk-trävaror (Larix decidua) | ZUBR-2000", description: "Europeisk lärk från ZUBR-2000: densitet upp till 800 kg/m³, hög motståndskraft mot fukt och röta. Balkar och brädor för golv, fasader, snickeri." },
    da: { title: "Lærk-trævarer (Larix decidua) | ZUBR-2000", description: "Europæisk lærk fra ZUBR-2000: densitet op til 800 kg/m³, høj modstand mod fugt og råd. Bjælker og brædder til gulve, facader, snedkeri." },
  },
  aboutus: {
    uk: { title: "Про компанію ZUBR-2000 — виробник пиломатеріалів з України", description: "ZUBR-2000 — український виробник пиломатеріалів твердих порід з 2000 року. Експорт у Італію, Швецію, Словаччину, Польщу, Естонію, Данію." },
    en: { title: "About ZUBR-2000 — Ukrainian hardwood lumber manufacturer", description: "ZUBR-2000 has manufactured hardwood lumber in Ukraine since 2000. Exports to Italy, Sweden, Slovakia, Poland, Estonia, and Denmark." },
    pl: { title: "O firmie ZUBR-2000 — ukraiński producent tarcicy liściastej", description: "ZUBR-2000 produkuje tarcicę liściastą na Ukrainie od 2000 roku. Eksport do Włoch, Szwecji, Słowacji, Polski, Estonii i Danii." },
    de: { title: "Über ZUBR-2000 — ukrainischer Hartholz-Schnittholzhersteller", description: "ZUBR-2000 produziert seit 2000 Hartholz-Schnittholz in der Ukraine. Export nach Italien, Schweden, Slowakei, Polen, Estland und Dänemark." },
    ru: { title: "О компании ZUBR-2000 — производитель пиломатериалов из Украины", description: "ZUBR-2000 — украинский производитель пиломатериалов твёрдых пород с 2000 года. Экспорт в Италию, Швецию, Словакию, Польшу, Эстонию, Данию." },
    fr: { title: "À propos de ZUBR-2000 — producteur ukrainien de bois feuillu", description: "ZUBR-2000 fabrique du bois feuillu en Ukraine depuis 2000. Exports vers l’Italie, la Suède, la Slovaquie, la Pologne, l’Estonie et le Danemark." },
    it: { title: "Su ZUBR-2000 — segheria ucraina di latifoglie", description: "ZUBR-2000 produce legname di latifoglie in Ucraina dal 2000. Export verso Italia, Svezia, Slovacchia, Polonia, Estonia e Danimarca." },
    sv: { title: "Om ZUBR-2000 — ukrainsk lövträtillverkare", description: "ZUBR-2000 har tillverkat lövträvaror i Ukraina sedan 2000. Export till Italien, Sverige, Slovakien, Polen, Estland och Danmark." },
    da: { title: "Om ZUBR-2000 — ukrainsk løvtræproducent", description: "ZUBR-2000 har siden 2000 produceret løvtræ i Ukraine. Eksport til Italien, Sverige, Slovakiet, Polen, Estland og Danmark." },
  },
  certificates: {
    uk: { title: "Сертифікати якості — ZUBR-2000", description: "Сертифікати ZUBR-2000: відповідність стандартам Державного управління лісового господарства України та європейським вимогам." },
    en: { title: "Quality certificates — ZUBR-2000", description: "ZUBR-2000 certificates: compliance with the State Forest Management of Ukraine and European timber quality standards." },
    pl: { title: "Certyfikaty jakości — ZUBR-2000", description: "Certyfikaty ZUBR-2000: zgodność z wymaganiami Państwowej Służby Leśnej Ukrainy oraz europejskimi standardami." },
    de: { title: "Qualitätszertifikate — ZUBR-2000", description: "ZUBR-2000 Zertifikate: Übereinstimmung mit den Anforderungen der Staatlichen Forstverwaltung der Ukraine und europäischen Standards." },
    ru: { title: "Сертификаты качества — ZUBR-2000", description: "Сертификаты ZUBR-2000: соответствие стандартам Государственного управления лесного хозяйства Украины и европейским требованиям." },
    fr: { title: "Certificats qualité — ZUBR-2000", description: "Certificats ZUBR-2000 : conformité aux exigences du Service forestier d’État d’Ukraine et aux normes européennes." },
    it: { title: "Certificati di qualità — ZUBR-2000", description: "Certificati ZUBR-2000: conformità agli standard del Servizio forestale statale dell’Ucraina e alle norme europee." },
    sv: { title: "Kvalitetscertifikat — ZUBR-2000", description: "ZUBR-2000 certifikat: efterlevnad av Ukrainas statliga skogsförvaltning och europeiska kvalitetsstandarder." },
    da: { title: "Kvalitetscertifikater — ZUBR-2000", description: "ZUBR-2000 certifikater: overensstemmelse med Ukraines statslige skovforvaltning og europæiske kvalitetsstandarder." },
  },
  news: {
    uk: { title: "Новини компанії — ZUBR-2000", description: "Новини ZUBR-2000: оновлення асортименту, виставки, нові напрямки експорту, партнерства." },
    en: { title: "Company news — ZUBR-2000", description: "ZUBR-2000 news: product updates, trade shows, new export markets, partnerships." },
    pl: { title: "Aktualności firmy — ZUBR-2000", description: "Aktualności ZUBR-2000: nowości produktowe, targi, nowe rynki eksportowe, partnerstwa." },
    de: { title: "Unternehmensnachrichten — ZUBR-2000", description: "ZUBR-2000 News: Produktupdates, Messen, neue Exportmärkte, Partnerschaften." },
    ru: { title: "Новости компании — ZUBR-2000", description: "Новости ZUBR-2000: обновления ассортимента, выставки, новые направления экспорта, партнёрства." },
    fr: { title: "Actualités — ZUBR-2000", description: "Actualités ZUBR-2000 : nouveautés produits, salons professionnels, nouveaux marchés à l’export, partenariats." },
    it: { title: "Novità aziendali — ZUBR-2000", description: "Novità ZUBR-2000: aggiornamenti prodotto, fiere, nuovi mercati di export, partnership." },
    sv: { title: "Företagsnyheter — ZUBR-2000", description: "ZUBR-2000 nyheter: produktuppdateringar, mässor, nya exportmarknader, partnerskap." },
    da: { title: "Virksomhedsnyheder — ZUBR-2000", description: "ZUBR-2000 nyheder: produktopdateringer, messer, nye eksportmarkeder, partnerskaber." },
  },
  quality: {
    uk: { title: "Стандарти якості пиломатеріалів — ZUBR-2000", description: "Вимоги до сировини, технічні характеристики пиломатеріалів, специфікації для палетної упаковки — стандарти якості ZUBR-2000." },
    en: { title: "Lumber quality standards — ZUBR-2000", description: "Raw-material requirements, technical specifications for lumber, pallet-packaging specs — the ZUBR-2000 quality standards." },
    pl: { title: "Standardy jakości tarcicy — ZUBR-2000", description: "Wymagania wobec surowca, parametry techniczne tarcicy, specyfikacje palet — standardy jakości ZUBR-2000." },
    de: { title: "Schnittholz-Qualitätsstandards — ZUBR-2000", description: "Rohstoffanforderungen, technische Spezifikationen für Schnittholz, Paletten-Spezifikationen — die ZUBR-2000 Qualitätsstandards." },
    ru: { title: "Стандарты качества пиломатериалов — ZUBR-2000", description: "Требования к сырью, технические характеристики пиломатериалов, спецификации для паллетной упаковки — стандарты качества ZUBR-2000." },
    fr: { title: "Normes de qualité du bois — ZUBR-2000", description: "Exigences sur la matière première, caractéristiques techniques du bois, spécifications des palettes — les normes qualité ZUBR-2000." },
    it: { title: "Standard di qualità del legname — ZUBR-2000", description: "Requisiti della materia prima, specifiche tecniche del legname, specifiche pallet — gli standard di qualità ZUBR-2000." },
    sv: { title: "Kvalitetsstandarder för trävaror — ZUBR-2000", description: "Råvarukrav, tekniska specifikationer för trävaror, pallspecifikationer — ZUBR-2000 kvalitetsstandarder." },
    da: { title: "Kvalitetsstandarder for tømmer — ZUBR-2000", description: "Råmaterialekrav, tekniske specifikationer for tømmer, palle-specifikationer — ZUBR-2000 kvalitetsstandarder." },
  },
  manufacturing: {
    uk: { title: "Процес виробництва пиломатеріалів — ZUBR-2000", description: "Від відбору сировини до камерної сушки, пакування та складу готової продукції — повний цикл виробництва пиломатеріалів ZUBR-2000." },
    en: { title: "Lumber manufacturing process — ZUBR-2000", description: "From raw-material selection to kiln-drying, packaging and finished-goods warehouse — the full ZUBR-2000 production cycle." },
    pl: { title: "Proces produkcji tarcicy — ZUBR-2000", description: "Od selekcji surowca po suszenie komorowe, pakowanie i magazyn wyrobów gotowych — pełny cykl produkcji ZUBR-2000." },
    de: { title: "Herstellungsprozess für Schnittholz — ZUBR-2000", description: "Von der Rohstoffauswahl bis zur Kammertrocknung, Verpackung und zum Fertigwarenlager — der komplette ZUBR-2000 Produktionszyklus." },
    ru: { title: "Процесс производства пиломатериалов — ZUBR-2000", description: "От отбора сырья до камерной сушки, упаковки и склада готовой продукции — полный цикл производства ZUBR-2000." },
    fr: { title: "Processus de fabrication du bois — ZUBR-2000", description: "De la sélection de la matière première au séchage en étuve, à l’emballage et à l’entrepôt des produits finis — le cycle complet ZUBR-2000." },
    it: { title: "Processo produttivo del legname — ZUBR-2000", description: "Dalla selezione della materia prima all’essiccazione in camera, imballaggio e magazzino prodotti finiti — il ciclo produttivo completo ZUBR-2000." },
    sv: { title: "Trävarornas tillverkningsprocess — ZUBR-2000", description: "Från råvaruval till kammartork, emballering och färdigvarulager — hela ZUBR-2000 produktionscykeln." },
    da: { title: "Tømrerproduktionsprocessen — ZUBR-2000", description: "Fra råvarevalg til kammertørring, emballage og færdigvarelager — hele ZUBR-2000 produktionscyklussen." },
  },
  offers: {
    uk: { title: "Спеціальні пропозиції — ZUBR-2000", description: "Актуальні пропозиції на пиломатеріали дуба, ясена, берези та модрини від ZUBR-2000." },
    en: { title: "Special offers — ZUBR-2000", description: "Current offers on oak, ash, birch, and larch lumber from ZUBR-2000." },
    pl: { title: "Oferty specjalne — ZUBR-2000", description: "Aktualne oferty na tarcicę dębową, jesionową, brzozową i modrzewiową od ZUBR-2000." },
    de: { title: "Sonderangebote — ZUBR-2000", description: "Aktuelle Angebote für Eichen-, Eschen-, Birken- und Lärchen-Schnittholz von ZUBR-2000." },
    ru: { title: "Специальные предложения — ZUBR-2000", description: "Актуальные предложения на пиломатериалы дуба, ясеня, берёзы и лиственницы от ZUBR-2000." },
    fr: { title: "Offres spéciales — ZUBR-2000", description: "Offres en cours sur le chêne, le frêne, le bouleau et le mélèze ZUBR-2000." },
    it: { title: "Offerte speciali — ZUBR-2000", description: "Offerte attuali su rovere, frassino, betulla e larice ZUBR-2000." },
    sv: { title: "Specialerbjudanden — ZUBR-2000", description: "Aktuella erbjudanden på ek-, ask-, björk- och lärk-trävaror från ZUBR-2000." },
    da: { title: "Særtilbud — ZUBR-2000", description: "Aktuelle tilbud på eg, ask, birk og lærk fra ZUBR-2000." },
  },
  contact: {
    uk: { title: "Контакти — ZUBR-2000", description: "Зв'яжіться з ZUBR-2000 щодо постачання пиломатеріалів: форма запиту, пошта, розташування виробництва." },
    en: { title: "Contact — ZUBR-2000", description: "Reach ZUBR-2000 for hardwood-lumber supply: enquiry form, email, production location." },
    pl: { title: "Kontakt — ZUBR-2000", description: "Skontaktuj się z ZUBR-2000 w sprawie dostaw tarcicy: formularz zapytania, e-mail, lokalizacja zakładu." },
    de: { title: "Kontakt — ZUBR-2000", description: "Kontaktieren Sie ZUBR-2000 für Schnittholzlieferungen: Anfrageformular, E-Mail, Produktionsstandort." },
    ru: { title: "Контакты — ZUBR-2000", description: "Свяжитесь с ZUBR-2000 по вопросам поставки пиломатериалов: форма запроса, e-mail, адрес производства." },
    fr: { title: "Contact — ZUBR-2000", description: "Contactez ZUBR-2000 pour l’approvisionnement en bois d’œuvre : formulaire, e-mail, site de production." },
    it: { title: "Contatti — ZUBR-2000", description: "Contatta ZUBR-2000 per la fornitura di legname: modulo di richiesta, e-mail, sede produttiva." },
    sv: { title: "Kontakt — ZUBR-2000", description: "Kontakta ZUBR-2000 om trävaruleveranser: förfrågningsformulär, e-post, produktionsort." },
    da: { title: "Kontakt — ZUBR-2000", description: "Kontakt ZUBR-2000 om tømmerleverancer: forespørgselsformular, e-mail, produktionssted." },
  },
};

export function pageText(pageKey, locale) {
  const entry = PAGE_META[pageKey];
  if (!entry) return { title: SITE_NAME, description: "" };
  return entry[locale] || entry.en;
}

export function pickLocale(locale) {
  return LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
}

export function buildAlternates(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const languages = {
    "x-default": `${SITE_URL}/${DEFAULT_LOCALE}${normalized === "/" ? "" : normalized}`,
  };
  for (const loc of LOCALES) {
    languages[loc] = `${SITE_URL}/${loc}${normalized === "/" ? "" : normalized}`;
  }
  return languages;
}

export function buildMetadata({ locale, path, pageKey, noindex = false }) {
  const safeLocale = pickLocale(locale);
  const { title, description } = pageText(pageKey, safeLocale);
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const canonical = `${SITE_URL}/${safeLocale}${normalized === "/" ? "" : normalized}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: "ZUBR-2000 Lumber Company",
    authors: [{ name: "ZUBR-2000", url: SITE_URL }],
    publisher: "ZUBR-2000",
    creator: "ZUBR-2000",
    category: "business",
    robots: noindex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    alternates: {
      canonical,
      languages: buildAlternates(normalized),
    },
    openGraph: {
      type: "website",
      siteName: "ZUBR-2000 Lumber Company",
      url: canonical,
      locale: OG_LOCALE[safeLocale],
      alternateLocale: LOCALES.filter((l) => l !== safeLocale).map((l) => OG_LOCALE[l]),
      title,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico"],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: 'ZUBR-2000',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon-32x32.png`,
    image: OG_IMAGE,
    foundingDate: "2000-01-01",
    description:
      "Ukrainian manufacturer of hardwood lumber since 2000 — oak, ash, birch, larch. Kiln-dried, planed, exported across the EU.",
    areaServed: ["UA", "IT", "SE", "SK", "PL", "EE", "DK", "DE", "FR"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "UA",
    },
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: LOCALES,
  };
}

export function productJsonLd({ locale, slug, species, latin, path }) {
  const safeLocale = pickLocale(locale);
  const { title, description } = pageText(slug, safeLocale);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    category: "Lumber",
    material: species,
    additionalProperty: [{ "@type": "PropertyValue", name: "Latin name", value: latin }],
    image: OG_IMAGE,
    url: `${SITE_URL}/${safeLocale}${path}`,
  };
}

export function breadcrumbJsonLd({ locale, items }) {
  const safeLocale = pickLocale(locale);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: `${SITE_URL}/${safeLocale}${it.path}`,
    })),
  };
}

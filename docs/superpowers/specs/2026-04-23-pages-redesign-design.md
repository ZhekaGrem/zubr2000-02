# Редизайн 5 сторінок у єдиному стилі — Spec

**Дата:** 2026-04-23
**Статус:** Draft (потребує ревʼю перед переходом до writing-plans)

## Мета

Привести головну сторінку, `/aboutus`, `/aboutus/manufacturing-process`, `/products` та `/contact` до **єдиної візуальної мови** — стриманої, «застосункової», з редакторським сплітом як базовим композиційним модулем. Враження має бути не «сайт компанії», а «продуктовий B2B-застосунок з 2000 року».

## Обмеження (non-negotiable)

1. **Контент і логіка не змінюються.** Весь видимий текст — через існуючі `t("...")`-виклики з `messages/*.json`. Sanity-запити, EmailJS-форма, GoogleMaps-інтеграція, маршрутизація `next-intl` — залишаються як є.
2. **9 локалей** (`da, de, en, fr, it, pl, ru, sv, uk`) — якщо для нового візуального рядка реально потрібен новий i18n-ключ, він додається в усі 9 файлів. Без винятків.
3. **Існуючі активи:** фото з `public/` (`photo_product_*.webp`, `pack-product.webp`, `photo_tittl_*.webp`, `fordaq-logo-02.webp`) використовуються як є.
4. **Без FSC:** будь-які згадки FSC (зокрема `public/fsc__mini2.webp`, `public/mini-fsc.webp`) прибрати з UI.
5. **Не додавати зайвих абстракцій.** Редизайн — це переписування CSS-модулів і реструктуризація JSX-розмітки, не новий стейт-менеджмент чи бібліотеки.

## Токени дизайн-системи

Усі візуальні рішення консолідовані в **`DESIGN.md`** у корені репозиторію. Він — джерело правди для кольорів, типографіки, радіусів, тіней і компонентних токенів. Будь-яке `#hex` чи `Xpx` у CSS-модулях — порушення.

Ключові рішення:

- **Палітра:** `primary #8CA600`, `text #1A1A1E`, `surface #F4F4F2`, `border #E0E0E0`.
- **Шрифти:** Fraunces (заголовки, 500), Inter (UI/текст), JetBrains Mono (числа, коди).
- **Радіус:** базовий 8px (`rounded.md`), 9999px (`rounded.full`) для чіпів.
- **Тіні:** 2 сходинки — `card` і `lift`.
- **Ритм:** спліт 1.2:1 як базовий модуль, vertical rhythm `spacing.3xl` (10rem) між секціями.
- **CTA-футер** (контактний блок з телефонами, email, адресою, Fordaq і credit «Site by Galychyna Technologies») — на кінці **усіх 5 сторінок**, замінює поточний фрагментований `Footer.jsx`.

## Архітектура файлів

### Нові файли

- `DESIGN.md` — вже створено.
- `app/styles/tokens.css` — CSS-custom-properties, згенеровані з DESIGN.md (або написані вручну по ньому). Замінює поточні `:root`-змінні в `globals.css`.
- `app/components/CtaFooter/CtaFooter.jsx` + `CtaFooter.module.css` — повний контактний блок (телефони, email, офіс, Fordaq-картка, credit Galychyna). Рендериться перед `<Footer/>` у layout або вбудовується в кожну сторінку.
- `app/components/PageIntro/PageIntro.jsx` — редакторський спліт-хедер (left: label-caps + H1 + lead-параграф, right: editorial image). Використовується на всіх 5 сторінках.
- `app/components/EditorialRow/EditorialRow.jsx` — чергувальний спліт «фото + текст» для manufacturing-process і карток продуктів. Props: `index`, `reverse`, `images[]` (1 або декілька для галереї), `title`, `body`.
- `app/components/NewsList/NewsList.jsx` — табличний список новин без зображень. Замінює поточний `MiniBlog`. Отримує дані з Sanity, рендерить як changelog.

### Файли, що переписуються (верстка → токени, структура збережена)

- `app/styles/globals.css` — чистка, імпорт `tokens.css`, видалення FSC-залишків.
- `app/styles/page/page.module.css` — нова сітка для `Home.jsx`.
- `app/styles/page/aboutus.module.css`
- `app/styles/page/manufacturing-process.module.css`
- `app/styles/page/contact.module.css`
- `app/styles/page/products.module.css`
- `app/styles/page/lumber.module.css` — картки окремих порід у `/products/*`.
- `app/styles/component/minipost.module.css`, `offerpost.module.css`, `productCard.module.css`, `navbar.module.css`, `footer.module.css` — під токени.
- `app/styles/component/form.module.css` — інпути під `rounded.md`, focus-ring `primary`.
- `app/styles/UI/button.module.css` — варіанти primary/secondary з DESIGN.md.

### JSX-зміни (мінімальні, без зміни логіки)

**Home.jsx (`app/page/Home.jsx`):**
- Hero: editorial split, лівий блок — `t("aboutus")`, `t("title1..3")`, правий — існуюче `/photo_tittl_№1.1.webp`.
- Нова секція метрик (4 числа): потрібні нові i18n-ключі `metric1..4` (label + value) у 9 локалях.
- Нова секція «Гнучкість і спектр» — нові ключі (`flexibility.title`, `flexibility.intro`, `flexibility.item1..4`, `flexibility.tag1..N`) у 9 локалях.
- Секція новин — замість `MiniBlog` використовує `NewsList` (той самий Sanity-запит, інший UI).
- Контактний блок з nav-посиланнями прибирається — тепер це робота `CtaFooter`.

**AboutUs.jsx (`app/[locale]/aboutus/page.jsx`):**
- Hero (PageIntro): H1 `t("aboutus")` + lead `t("aboutus-message1")`, editorial image.
- Секція H2 `t("aboutus-message2")` + 5 пронумерованих пунктів (`message3..7`) у 2-колонковій сітці з моно-нумерацією 01–05.
- Параграфи `message8`, `message9`.
- Три картки-розділи: certificates (Trade Leaders), manufacturing (6 bullets `message11..16`), quality (bullets `message17..20`).
- Фінальний параграф `message10`.
- CtaFooter.

**ManufacturingProcess.jsx (`app/page/ManufacturingProcess.jsx`):**
- Hero: H1 `t("manufacturing")` + lead `t("manufacturing_process_01")`.
- 6 чергувальних editorial-рядків `EditorialRow` з індексами 01–06. Кожен отримує:
  - `01`: `photo_product_3.webp` · `t("aboutus-message11")` · `t("manufacturing_process_02")`
  - `02`: `photo_product_4.webp` · `t("aboutus-message12")` · `t("manufacturing_process_03")`
  - `03`: **галерея** `photo_product_5_1/2/3.webp` (1 велике + 2 менших на desktop, swipe на mobile) · `t("aboutus-message13")` · `t("manufacturing_process_04")`
  - `04`: `photo_product_7.webp` · `t("aboutus-message14")` · `t("manufacturing_process_05")`
  - `05`: `pack-product.webp` · `t("aboutus-message15")` · `t("manufacturing_process_06")`
  - `06`: `photo_product_6.webp` · `t("aboutus-message16")` · `t("manufacturing_process_07")`
- Desktop: висота фото 420px. Mobile: 240px, повна ширина.
- Фінальна секція: H2 `t("manufacturing_process_08")` + p `t("manufacturing_process_09")`.
- CtaFooter.

**Contact.jsx (`app/page/Contact.jsx`):**
- PageIntro: H1 `t("contactus")`.
- Секція форма 50/50: ліворуч — існуюча `<Form/>` (стилі переписуються під токени), праворуч — `<GoogleMaps/>`.
- Fordaq-картка (існуюче посилання + логотип з `/fordaq-logo-02.webp`) — переноситься всередину CtaFooter. На сторінці `/contact` лишається тільки form+map.
- CtaFooter (той самий компонент як на інших сторінках).

**Products (`app/[locale]/products/page.jsx` + 4 сторінки порід):**
- Список порід: редакторські editorial-картки 2-в-ряд (на desktop). Кожна — існуючі дані породи з `products/*/page.jsx`.
- Чіпи фільтрів зверху (опційно — якщо це швидко): «Усі», «Тверді», «Хвойні». Логіка — клієнтський фільтр за ключем.
- Сторінка окремої породи (`products/oak-lumber` etc.): PageIntro + existing content + CtaFooter.

### CtaFooter — детальна структура

Єдиний компонент на 5 сторінок. Верхня частина (query + CTA-кнопка), нижня — 4 колонки + bottom-bar.

Верх:
- Label-caps `01 · {t("contactus")}` або номер секції.
- H2 `{t("contactFooter.heading")}` (новий ключ — напр. «Потрібен розрахунок партії?»).
- Параграф `{t("contactFooter.lead")}`.
- Кнопка `{t("writeus")}` → `/contact#contact_name`.

4 колонки:
- **Телефони:** 2 рядки з міткою (`{t("manager")}`, `{t("director")}`) + номер у моно-шрифті.
- **Email:** 3 адреси з підкресленням.
- **Офіс:** адреса (нові ключі `address.street`, `address.city`, `address.region`) + посилання «Відкрити на мапі» (існуючий ключ `findus` + URL на Google Maps).
- **У мережі:** біла картка з логотипом Fordaq (`/fordaq-logo-02.webp`) + лейбл `{t("ourProfile")}` (новий ключ).

Bottom-bar:
- Ліворуч: робочі години `{t("workingHours")}` (новий ключ) + `© 2000–YYYY Zubr2000`.
- Праворуч: `{t("siteBy")} Galychyna Technologies` (новий ключ для «Site by») — текстовий лінк на `https://galychyna.online/`, без логотипа.

### Нові i18n-ключі (мінімальний список)

Додати у всі 9 файлів `messages/*.json` під namespace `Index`:

```
metric.years.value       · metric.years.label
metric.species.value     · metric.species.label
metric.moisture.value    · metric.moisture.label
metric.custom.value      · metric.custom.label
flexibility.caps         · flexibility.title
flexibility.intro
flexibility.item1.title  · flexibility.item1.spec
flexibility.item2.title  · flexibility.item2.spec
flexibility.item3.title  · flexibility.item3.spec
flexibility.item4.title  · flexibility.item4.spec
flexibility.tag1..5
contactFooter.heading
contactFooter.lead
contactFooter.caps
ourProfile
workingHours
siteBy
address.street · address.city · address.region · address.mapUrl
```

Тексти спочатку пишуться українською (`uk.json`), потім дзеркаляться у решту 8. Якщо перекладу немає — лишається UA-значення як fallback (це дозволяє `next-intl` при строгому режимі — або тимчасово зняти strict mode і залогувати TODO).

## Sequence реалізації (для writing-plans)

Етапи задумано послідовними, кожен залишає сайт у робочому стані:

1. **Tokens:** додати `DESIGN.md` (вже є), створити `tokens.css`, переписати `globals.css` з CSS-змінними з DESIGN.md. Тестувати: нічого не зламалося візуально (змінні ті самі по смислу).
2. **Fonts:** підключити Fraunces + Inter + JetBrains Mono через `next/font` (замість Google Fonts via @import). Перевірити FOUT і розміри.
3. **UI primitives:** `Button` і `Form` переписати під токени. Мутувати лише CSS, не JSX.
4. **CtaFooter:** створити компонент, додати нові i18n-ключі в 9 локалей (стаб-переклади ok), вставити на 5 сторінок.
5. **Home:** переверстати hero, додати метрики, додати «Гнучкість», замінити MiniBlog → NewsList, прибрати поточний контактний блок (його замінює CtaFooter).
6. **Products:** editorial-картки на `/products`, переверстати 4 сторінки порід.
7. **AboutUs:** ре-верстка у 2-колонкову секцію принципів + картки розділів.
8. **ManufacturingProcess:** 6 editorial-рядків з чергуванням, галерея у блоці 03.
9. **Contact:** інтро + 50/50 form/map.
10. **Responsive passes:** пройти кожну сторінку на 1024 / 768 / 375. Виправити overflow, спліт → стек, кнопки → full-width, swipe-галерея.
11. **Cleanup:** видалити невикористовувані CSS-модулі, FSC-зображення, старі компоненти.

## Тестування

- **Візуальне:** `next dev`, пройти 5 сторінок на desktop (1440), tablet (900), mobile (375). Перевірити всі 9 локалей на головній (хоча б візуально — без обрізань).
- **Функціональне:** форма `/contact` надсилає, Sanity-новини тягнуться, навігація `next-intl` між локалями працює, `/admin` (Sanity Studio) відкривається.
- **Contrast:** пройти `lighthouse --only-categories=accessibility` на головній і `/products/oak-lumber`. Цілимося ≥95.

## Вирішення відкритих запитань (2026-04-23)

- **Адреса офісу** — реальна буде надана замовником. Поки не отримано: у `uk.json` значення `TODO:ADDRESS` як плейсхолдер, у решті 8 локалей той самий рядок. Після отримання — замінити в усіх 9 файлах.
- **Google Maps URL** — реальний лінк буде надано замовником. До отримання: у `uk.json` значення `TODO:MAPURL`; у UI кнопка «Відкрити на мапі» в такому стані не-клікабельна (`pointer-events: none`) або прихована.
- **Галерея в блоці 03 manufacturing-process** — **з лайтбоксом**. Клік по мініатюрі відкриває модальне вікно на всю ширину вʼюпорта з затемненим overlay, клавіатурною навігацією (←/→/Esc), індикаторами 1/3 і закриттям по кліку поза зображенням. Компонент: `app/components/Lightbox/Lightbox.jsx` (мінімальна реалізація, без сторонніх бібліотек — звичайне портальне модальне вікно). На mobile — той самий лайтбокс, swipe-left/right для перегортання.
- **Тексти для `metric.*` і `flexibility.*`** — я пропоную **UA-драфти** у `uk.json`; замовник править після першої візуальної збірки. Решта 8 локалей отримують ті самі UA-рядки як fallback.

### UA-драфти нових ключів (під зміну)

```json
"metric.years.value": "24+",
"metric.years.label": "Років на ринку",
"metric.species.value": "4+",
"metric.species.label": "Порід деревини",
"metric.moisture.value": "8–10%",
"metric.moisture.label": "Вологість після KD",
"metric.custom.value": "Під замовлення",
"metric.custom.label": "Розміри й сорти",

"flexibility.caps": "02 · Гнучкість",
"flexibility.title": "Один постачальник — широкий спектр виробів",
"flexibility.intro": "Від стандартної обрізної дошки до індивідуальних заготовок під креслення замовника. Підлаштовуємось під ваші розміри, сортність, обсяг партії та строки.",

"flexibility.item1.title": "Дошка обрізна",
"flexibility.item1.spec": "20–50 мм",
"flexibility.item2.title": "Брус",
"flexibility.item2.spec": "100×100 — 200×200 мм",
"flexibility.item3.title": "Заготовки",
"flexibility.item3.spec": "під креслення",
"flexibility.item4.title": "Нестандарт",
"flexibility.item4.spec": "на запит",

"flexibility.tag1": "Індивідуальні розміри",
"flexibility.tag2": "Малі та великі партії",
"flexibility.tag3": "Камерне сушіння",
"flexibility.tag4": "Стругання, торцювання",
"flexibility.tag5": "Експорт у ЄС",

"contactFooter.caps": "04 · Звʼязок",
"contactFooter.heading": "Потрібен розрахунок партії?",
"contactFooter.lead": "Надішліть специфікацію — відповімо з прайсом і термінами протягом доби.",

"ourProfile": "Наш профіль",
"workingHours": "Пн–Пт · 08:00–18:00 · Сб за домовленістю",
"siteBy": "Сайт створено",

"address.street": "TODO:ADDRESS-STREET",
"address.city":   "TODO:ADDRESS-CITY",
"address.region": "TODO:ADDRESS-REGION",
"address.mapUrl": "TODO:MAPURL"
```

Усі ключі додаються у всі 9 файлів `messages/*.json` (у 8 не-UA — ідентичні UA-значення як fallback до професійного перекладу).

## Ризики

- **9 локалей × ~25 нових ключів = 225 нових рядків.** Якщо дзеркалити тільки UA — 8 інших мов покажуть український текст. Рішення: для цієї ітерації прийняти UA-fallback у неукраїнських мовах, додати TODO-таск на переклад.
- **CSS-модулі переписуються масово.** Ризик, що пропустимо якусь сторінку (зокрема admin чи Sanity Studio). Маркер: кожну сторінку після зміни відкрити в dev.
- **`next/font` vs поточний `@import`** — переключення може вимагати правок у `layout.jsx`. Протестувати FCP на головній після зміни.

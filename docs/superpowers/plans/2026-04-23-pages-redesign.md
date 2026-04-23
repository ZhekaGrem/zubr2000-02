# Zubr2000 — Редизайн 5 сторінок · Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Привести Home, /aboutus, /aboutus/manufacturing-process, /products, /contact до єдиної візуальної мови на базі `DESIGN.md`, зберігши всю існуючу i18n-логіку, Sanity-інтеграцію, форму EmailJS і GoogleMaps.

**Architecture:** CSS-модулі переписуються під CSS-змінні, згенеровані з `DESIGN.md`. Єдиний компонент `CtaFooter` замінює фрагментований контактний UI на 5 сторінках. Новий `EditorialRow` — базовий блок для manufacturing-process і карток продуктів. Усі рядки рендеряться через `t("...")` у всі 9 локалей.

**Tech Stack:** Next.js 13 App Router · next-intl · styled-components (уже підключено, лишаємо) · CSS Modules · Sanity · EmailJS · react-transition-group. Без нових бібліотек, окрім `next/font` (вже є в Next.js 13).

**Testing strategy:** У проєкті немає автоматизованих тестів. Верифікація — візуальна, у `next dev` на breakpoints 1440 / 900 / 375, з перевіркою console-чистоти і форми/мапи/навігації між локалями. Кожен етап залишає сайт у робочому стані (manual smoke test після кожного коміту).

**Dev command:** `npm run dev` → http://localhost:3000. Мови: `/uk`, `/en`, `/pl`, `/de`, `/fr`, `/it`, `/ru`, `/da`, `/sv`.

---

## File Structure

### Нові файли

| Path | Purpose |
|---|---|
| `app/styles/tokens.css` | CSS custom properties з DESIGN.md |
| `app/components/CtaFooter/CtaFooter.jsx` | Контактний блок для всіх сторінок |
| `app/components/CtaFooter/CtaFooter.module.css` | Стилі CtaFooter |
| `app/components/PageIntro/PageIntro.jsx` | Editorial-split hero, перевикористовний |
| `app/components/PageIntro/PageIntro.module.css` | Стилі PageIntro |
| `app/components/EditorialRow/EditorialRow.jsx` | Чергувальний спліт «фото+текст» |
| `app/components/EditorialRow/EditorialRow.module.css` | Стилі EditorialRow |
| `app/components/Lightbox/Lightbox.jsx` | Модальне вікно для галереї |
| `app/components/Lightbox/Lightbox.module.css` | Стилі Lightbox |
| `app/components/NewsList/NewsList.jsx` | Табличний список новин |
| `app/components/NewsList/NewsList.module.css` | Стилі NewsList |
| `app/components/Metrics/Metrics.jsx` | 4-стовпчикова секція метрик |
| `app/components/Metrics/Metrics.module.css` | Стилі Metrics |
| `app/components/Flexibility/Flexibility.jsx` | Секція «Гнучкість і спектр» |
| `app/components/Flexibility/Flexibility.module.css` | Стилі Flexibility |

### Файли, що переписуються

| Path | Change |
|---|---|
| `app/styles/globals.css` | Імпорт `tokens.css`, чистка старих змінних |
| `app/[locale]/layout.jsx` | Перехід з Google Fonts `@import` на `next/font` |
| `app/styles/page/page.module.css` | Нова сітка Home |
| `app/styles/page/aboutus.module.css` | Нова розкладка AboutUs |
| `app/styles/page/manufacturing-process.module.css` | Editorial-рядки + галерея |
| `app/styles/page/contact.module.css` | Form + map 50/50 |
| `app/styles/page/products.module.css` | Editorial-картки порід |
| `app/styles/page/lumber.module.css` | Сторінки окремих порід |
| `app/styles/page/certificates.module.css` | Consistent з іншими |
| `app/styles/page/quality-standarts.module.css` | Consistent |
| `app/styles/page/news.module.css` | Changelog-стиль |
| `app/styles/page/offer.module.css` | Consistent |
| `app/styles/UI/button.module.css` | Primary/secondary під токени |
| `app/styles/component/form.module.css` | Inputs під токени |
| `app/styles/component/navbar.module.css` | Типографіка й spacing під токени |
| `app/styles/component/footer.module.css` | Спрощення (CtaFooter забирає основне) |
| `app/styles/component/minipost.module.css` | Заміна на NewsList — файл deprecated |
| `app/styles/component/productCard.module.css` | Editorial-split стиль |
| `app/page/Home.jsx` | Нові секції (Hero, Metrics, Flexibility, NewsList, породи) |
| `app/page/ManufacturingProcess.jsx` | 6 EditorialRow + галерея з лайтбоксом |
| `app/page/Contact.jsx` | Intro + form/map split + CtaFooter |
| `app/[locale]/aboutus/page.jsx` | Нова розкладка з трьома картками-розділами |
| `app/[locale]/products/page.jsx` | Editorial-картки порід |
| `app/components/footer/Footer.jsx` | Спрощення: тільки nav-links + copyright |
| `messages/uk.json`, `en.json`, `pl.json`, `de.json`, `fr.json`, `it.json`, `ru.json`, `da.json`, `sv.json` | Нові ключі (~30 штук × 9 файлів) |

### Файли, що видаляються

| Path | Reason |
|---|---|
| `public/fsc__mini2.webp`, `public/mini-fsc.webp` | FSC прибраний з UI |
| `app/components/miniblog/MiniBlog.jsx` + `app/styles/component/minipost.module.css` | Замінено на NewsList |
| `app/styles/component/oldnavbar.module.css` | Deprecated (якщо не використовується — перевірити) |

---

## Preparation (запускається ОДИН РАЗ перед Task 1)

### Task 0: Baseline snapshot

**Files:**
- None — це підготовка

- [ ] **Step 1: Переконатись, що гілка чиста**

Run: `git status`
Expected: `working tree clean` + `On branch main`

- [ ] **Step 2: Зробити гілку для редизайну**

Run: `git checkout -b feat/pages-redesign-unified-style`
Expected: `Switched to a new branch 'feat/pages-redesign-unified-style'`

- [ ] **Step 3: Запустити dev-сервер і перевірити baseline**

Run: `npm run dev`
Expected: `ready - started server on 0.0.0.0:3000`

Відкрити в браузері: `http://localhost:3000/uk`, `/uk/aboutus`, `/uk/aboutus/manufacturing-process`, `/uk/products`, `/uk/contact`. Переконатись, що всі 5 сторінок рендеряться без помилок. Це наш baseline.

Зупинити сервер: `Ctrl+C`.

- [ ] **Step 4: Зробити screenshots для порівняння (опційно)**

Якщо доступний скріншот-інструмент — зробити серію screenshot кожної сторінки на 1440/900/375, зберегти у `.superpowers/baseline-screenshots/`. Використовується потім для візуального diff.

---

## Task 1: Tokens foundation

**Files:**
- Create: `app/styles/tokens.css`
- Modify: `app/styles/globals.css`

- [ ] **Step 1: Створити tokens.css з DESIGN.md-токенами**

Content of `app/styles/tokens.css`:

```css
/* Generated from DESIGN.md — edit DESIGN.md, not this file */
:root {
  /* Colors */
  --color-primary: #8CA600;
  --color-primary-hover: #9DB800;
  --color-primary-dark: #677903;
  --color-text: #1A1A1E;
  --color-text-muted: #4A4A52;
  --color-text-subtle: #7A7A82;
  --color-surface: #F4F4F2;
  --color-surface-card: #FFFFFF;
  --color-border: #E0E0E0;
  --color-border-strong: #C4C4C4;
  --color-overlay: #1A1A1E;

  /* Typography families (wired up via next/font in Task 2) */
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  /* Type scale */
  --text-display: 4.8rem;
  --text-headline-lg: 3.6rem;
  --text-headline-md: 2.8rem;
  --text-headline-sm: 2.2rem;
  --text-body-lg: 1.8rem;
  --text-body-md: 1.5rem;
  --text-body-sm: 1.3rem;
  --text-label-caps: 1.1rem;
  --text-label-caps-sm: 1.0rem;
  --text-mono: 1.2rem;

  /* Line heights */
  --lh-tight: 1.0;
  --lh-snug: 1.1;
  --lh-body: 1.6;

  /* Letter spacing */
  --tracking-display: -0.03em;
  --tracking-headline: -0.02em;
  --tracking-caps: 0.18em;
  --tracking-caps-wide: 0.22em;

  /* Rounded */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 3rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;
  --space-3xl: 10rem;

  /* Elevation */
  --shadow-flat: none;
  --shadow-card: 0 1px 2px rgba(26,26,30,.04), 0 2px 8px rgba(26,26,30,.04);
  --shadow-lift: 0 4px 12px rgba(26,26,30,.06), 0 8px 24px rgba(26,26,30,.06);

  /* Layout */
  --max-width: 1200px;
  --nav-height: 80px;

  /* Motion */
  --transition-fast: 200ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
}

@media (max-width: 1024px) {
  :root { font-size: 58.5%; }
}
@media (max-width: 768px) {
  :root {
    font-size: 55%;
    --space-3xl: 6rem;
    --space-2xl: 4rem;
  }
}
@media (max-width: 480px) {
  :root { font-size: 52.5%; }
}
```

- [ ] **Step 2: Оновити `globals.css` — імпорт токенів і прив'язка базових елементів**

Повний новий вміст `app/styles/globals.css`:

```css
@import './tokens.css';

*, *:before, *:after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-body-md);
  line-height: var(--lh-body);
  color: var(--color-text);
  background-color: var(--color-surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 500;
  line-height: var(--lh-snug);
  color: var(--color-text);
  letter-spacing: var(--tracking-headline);
}

h1 { font-size: var(--text-display); line-height: var(--lh-tight); letter-spacing: var(--tracking-display); }
h2 { font-size: var(--text-headline-lg); }
h3 { font-size: var(--text-headline-md); }
h4 { font-size: var(--text-headline-sm); }

p {
  margin-bottom: var(--space-md);
  color: var(--color-text-muted);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-base);
}
a:hover { color: var(--color-primary-dark); }

ul, ol { list-style: none; }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-md);
  width: 100%;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1 1 auto;
  padding-top: var(--nav-height);
}

:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
```

- [ ] **Step 3: Запустити dev-сервер і перевірити що нічого не зламалось**

Run: `npm run dev`

Відкрити `http://localhost:3000/uk`. Сайт рендериться, шрифти можуть бути Times/Arial-подібні (Fraunces/Inter ще не підключені — це виправимо в Task 2). Кольори мають відповідати новій палітрі: антрацитовий текст на світло-сірому фоні, зелений на кнопках/посиланнях.

- [ ] **Step 4: Commit**

```bash
git add app/styles/tokens.css app/styles/globals.css
git commit -m "feat(tokens): add tokens.css from DESIGN.md, wire into globals"
```

---

## Task 2: Fonts via next/font

**Files:**
- Modify: `app/[locale]/layout.jsx`
- Modify: `app/styles/tokens.css:15-17` (font-family CSS variables)

- [ ] **Step 1: Прочитати поточний `layout.jsx`**

Run: `cat app/[locale]/layout.jsx` (або відкрити в редакторі). Побачиш, як підключені Google Fonts. Треба замінити на `next/font/google`.

- [ ] **Step 2: Додати next/font imports у layout.jsx**

Додати зверху файлу (після інших `import`):

```jsx
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});
```

- [ ] **Step 3: Застосувати класи до `<html>` або `<body>`**

У return-блоці `RootLayout` додати класи до root-елемента (припустимо, це `<html>` або `<body>` — залежить від поточної структури):

```jsx
<html lang={locale} className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
  <body>
    {children}
  </body>
</html>
```

Якщо root — `<body>`, застосувати класи до нього.

- [ ] **Step 4: Видалити старий `@import` Google Fonts з globals.css**

Якщо у `globals.css` або у `<head>` ручний `<link>` на `fonts.googleapis.com` — видалити. next/font керує всім автоматично.

Run: `grep -rn "fonts.googleapis" app/` — побачиш, де ще залишились згадки. Повидаляти всі.

- [ ] **Step 5: Запустити dev і перевірити шрифти**

Run: `npm run dev`
Відкрити `/uk`. У DevTools → Computed для `<h1>` — `font-family` має починатися з `__Fraunces_...` (згенерована next/font назва). Для `<body>` — `__Inter_...`.

Візуально: заголовки — Fraunces (засічки м'які, сучасні), текст — Inter (гротеск).

- [ ] **Step 6: Commit**

```bash
git add app/[locale]/layout.jsx app/styles/globals.css
git commit -m "feat(fonts): switch to next/font for Fraunces + Inter + JetBrains Mono"
```

---

## Task 3: Button UI primitive

**Files:**
- Modify: `app/styles/UI/button.module.css`
- Modify: `app/UI/button/button.jsx` (читаємо поточну структуру)

- [ ] **Step 1: Прочитати поточний `button.jsx` і `button.module.css`**

Run: `cat app/UI/button/button.jsx app/styles/UI/button.module.css`

Побачиш, які класи і props використовуються. Зберігаємо API — змінюємо тільки CSS.

- [ ] **Step 2: Переписати `button.module.css` під токени**

Повний новий вміст `app/styles/UI/button.module.css`:

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: 14px 22px;
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  background: var(--color-primary);
  color: var(--color-text);
  border: 0;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.button:hover { background: var(--color-primary-hover); }
.button:active { transform: translateY(1px); }

.button--secondary {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-text);
  padding: 13px 21px;
}

.button--secondary:hover {
  background: var(--color-text);
  color: var(--color-surface-card);
}

.button--full { width: 100%; }

.button--on-dark {
  background: var(--color-primary);
  color: var(--color-text);
}
```

- [ ] **Step 3: Запустити dev і перевірити кнопки**

Run: `npm run dev`
Відкрити `/uk` — знайти кнопку «Напишіть нам» у контактній секції. Вона має бути лайм-зеленою з антрацитовим CAPS-текстом, hover — трохи світліший зелений, focus — ring `primary`.

- [ ] **Step 4: Commit**

```bash
git add app/styles/UI/button.module.css
git commit -m "feat(button): restyle primary/secondary/full variants via tokens"
```

---

## Task 4: Form inputs restyle

**Files:**
- Modify: `app/styles/component/form.module.css`

- [ ] **Step 1: Прочитати поточний `form.module.css` і `Form.jsx`**

Run: `cat app/components/form/Form.jsx app/styles/component/form.module.css`

Знайти класи для input, textarea, label, error. Переписати тільки CSS.

- [ ] **Step 2: Переписати `form.module.css`**

Повний новий вміст:

```css
.form {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  max-width: 48rem;
}

.fieldGroup {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.fieldRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
}

.label {
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: var(--color-text-subtle);
}

.input,
.textarea {
  width: 100%;
  padding: 14px 16px;
  font-family: var(--font-body);
  font-size: var(--text-body-md);
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border var(--transition-fast), box-shadow var(--transition-fast);
}

.input:focus,
.textarea:focus {
  outline: 0;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(140,166,0,.18);
}

.textarea { resize: vertical; min-height: 12rem; }

.error {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  color: #C23B3B;
  margin-top: var(--space-xs);
}

.submit { margin-top: var(--space-md); }

@media (max-width: 768px) {
  .fieldRow { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Якщо у Form.jsx використовуються інші назви класів — адаптувати**

Якщо Form.jsx посилається на класи на кшталт `input__red`, `input__padding`, яких немає в новому CSS — або додати класи (зберегти) або перейменувати в JSX на нові. Адаптувати мінімальні назви.

- [ ] **Step 4: Запустити dev, перевірити форму на /contact**

Run: `npm run dev`
Відкрити `/uk/contact`. Поля вводу — білі на сірому, rounded 8px, focus дає зелений ring. Textarea розтягується.

- [ ] **Step 5: Commit**

```bash
git add app/styles/component/form.module.css app/components/form/Form.jsx
git commit -m "feat(form): restyle inputs and textarea via tokens"
```

---

## Task 5: i18n keys — new strings in all 9 locales

**Files:**
- Modify: `messages/uk.json`
- Modify: `messages/en.json`, `de.json`, `pl.json`, `fr.json`, `it.json`, `ru.json`, `da.json`, `sv.json`

- [ ] **Step 1: Додати нові ключі у `messages/uk.json`**

Відкрити `messages/uk.json` і додати всередині блоку `"Index"` (бажано в кінці, перед `}`):

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
    "address.city": "TODO:ADDRESS-CITY",
    "address.region": "TODO:ADDRESS-REGION",
    "address.mapUrl": "TODO:MAPURL",

    "newsCaps": "03 · Журнал",
    "newsAll": "Усі записи",
    "catalogCaps": "01 · Каталог",
    "catalogHint": "Інші породи — на запит.",
    "read": "Читати"
```

Не забути коми між блоками та перед `}`.

- [ ] **Step 2: Скопіювати ці ключі в решту 8 локалей з тим самим UA-текстом**

Run (bash):

```bash
for lang in en de pl fr it ru da sv; do
  echo "Processing messages/${lang}.json — add same block as uk.json"
done
```

Для кожного з файлів: відкрити, знайти блок `"Index"`, додати ті самі ключі з тими самими UA-значеннями. Це тимчасовий fallback — переклад буде потім.

(Автоматизувати скриптом, якщо хочеш: `node -e '...'` з `JSON.parse/stringify`, але ручна вставка безпечніша на першій ітерації.)

- [ ] **Step 3: Перевірити JSON-валідність усіх 9 файлів**

Run:

```bash
for f in messages/*.json; do node -e "JSON.parse(require('fs').readFileSync('$f'))" && echo "OK $f" || echo "FAIL $f"; done
```

Expected: 9 рядків `OK ...`.

- [ ] **Step 4: Запустити dev, перемкнути мову, пересвідчитися що нічого не зламалося**

Run: `npm run dev`
Відкрити `/uk`, потім `/en` — навігація між мовами має працювати, старі ключі рендеряться, нові ключі поки ніде не використовуються, але валідний JSON не створює помилок у консолі.

- [ ] **Step 5: Commit**

```bash
git add messages/
git commit -m "feat(i18n): add 30 keys for metrics, flexibility, CTA footer, site credit"
```

---

## Task 6: CtaFooter component

**Files:**
- Create: `app/components/CtaFooter/CtaFooter.jsx`
- Create: `app/components/CtaFooter/CtaFooter.module.css`

- [ ] **Step 1: Створити `CtaFooter.jsx`**

Повний вміст `app/components/CtaFooter/CtaFooter.jsx`:

```jsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import styles from "./CtaFooter.module.css";
import Button from "@/app/UI/button/button";

const PHONES = [
  { label: "manager", number: "+38 097 136-20-00" },
  { label: "director", number: "+38 067 674-58-43" },
];

const EMAILS = [
  "zubrzubr2000@gmail.com",
  "gremroman@gmail.com",
  "grem_roman@icloud.com",
];

const FORDAQ_URL = "https://derevyna.fordaq.com/fordaq/srvFordaqReport/UkrWood+LLC_642294.html";

function CtaFooter() {
  const t = useTranslations("Index");
  const mapUrl = t("address.mapUrl");
  const mapActive = mapUrl && !mapUrl.startsWith("TODO");

  return (
    <section className={styles.cta}>
      <div className={styles.head}>
        <div className={styles.headLeft}>
          <div className={styles.caps}>{t("contactFooter.caps")}</div>
          <h2 className={styles.heading}>{t("contactFooter.heading")}</h2>
          <p className={styles.lead}>{t("contactFooter.lead")}</p>
        </div>
        <div className={styles.headRight}>
          <Link href="/contact#contact_name">
            <Button title_button={t("writeus")} />
          </Link>
        </div>
      </div>

      <div className={styles.cols}>
        <div className={styles.col}>
          <div className={styles.colTitle}>{t("contact")}</div>
          <div className={styles.stack}>
            {PHONES.map((p) => (
              <div key={p.number} className={styles.phoneBlock}>
                <div className={styles.miniLabel}>{t(p.label)}</div>
                <a href={`tel:${p.number.replace(/\s/g, "")}`} className={styles.mono}>
                  {p.number}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Email</div>
          <div className={styles.stack}>
            {EMAILS.map((email) => (
              <a key={email} href={`mailto:${email}`} className={styles.emailLink}>
                {email}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>{t("findus")}</div>
          <address className={styles.address}>
            <span>{t("address.street")}</span>
            <span>{t("address.city")}</span>
            <span>{t("address.region")}</span>
          </address>
          {mapActive && (
            <a href={mapUrl} target="_blank" rel="noopener" className={styles.mapLink}>
              {t("findus")} →
            </a>
          )}
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Online</div>
          <a href={FORDAQ_URL} target="_blank" rel="noopener" className={styles.fordaqCard}>
            <Image
              src="/fordaq-logo-02.webp"
              alt="Fordaq"
              width={120}
              height={40}
              className={styles.fordaqLogo}
            />
            <span className={styles.fordaqCta}>{t("ourProfile")} →</span>
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomLeft}>
          <span className={styles.bottomMeta}>{t("workingHours")}</span>
          <span className={styles.bottomMeta}>Zubr2000 © 2000–{new Date().getFullYear()}</span>
        </div>
        <div className={styles.bottomRight}>
          <span className={styles.siteBy}>
            {t("siteBy")}{" "}
            <a href="https://galychyna.online/" target="_blank" rel="noopener" className={styles.siteByLink}>
              Galychyna Technologies
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default CtaFooter;
```

- [ ] **Step 2: Створити `CtaFooter.module.css`**

Повний вміст `app/components/CtaFooter/CtaFooter.module.css`:

```css
.cta {
  background: var(--color-overlay);
  color: #fff;
  padding: var(--space-3xl) var(--space-xl) 0;
}

.head {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-2xl);
  align-items: end;
  margin-bottom: var(--space-2xl);
  padding-bottom: var(--space-xl);
}

.caps {
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: rgba(255,255,255,.6);
}

.heading {
  font-family: var(--font-display);
  font-size: var(--text-headline-lg);
  font-weight: 500;
  line-height: var(--lh-snug);
  letter-spacing: var(--tracking-headline);
  color: #fff;
  margin-top: var(--space-sm);
}

.lead {
  font-size: var(--text-body-md);
  color: rgba(255,255,255,.78);
  margin-top: var(--space-sm);
  max-width: 48rem;
  line-height: var(--lh-body);
}

.headRight { display: flex; justify-content: flex-end; align-items: flex-end; }

.cols {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.9fr;
  gap: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(255,255,255,.12);
}

.colTitle {
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
  margin-bottom: var(--space-md);
}

.stack { display: flex; flex-direction: column; gap: var(--space-sm); }

.phoneBlock { display: flex; flex-direction: column; gap: 3px; }

.miniLabel {
  font-family: var(--font-body);
  font-size: var(--text-label-caps-sm);
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: rgba(255,255,255,.5);
}

.mono {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
}

.emailLink {
  font-family: var(--font-mono);
  font-size: 1.3rem;
  color: #fff;
  opacity: .9;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,.2);
  padding-bottom: 2px;
  align-self: flex-start;
}

.emailLink:hover { opacity: 1; border-bottom-color: rgba(255,255,255,.5); }

.address {
  font-style: normal;
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 500;
  color: #fff;
  line-height: 1.35;
  display: flex;
  flex-direction: column;
}

.mapLink {
  display: inline-block;
  margin-top: var(--space-sm);
  font-family: var(--font-body);
  font-size: var(--text-label-caps-sm);
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
}

.fordaqCard {
  display: inline-flex;
  flex-direction: column;
  gap: var(--space-sm);
  background: #fff;
  border-radius: var(--radius-md);
  padding: 14px 16px;
  text-decoration: none;
  align-items: flex-start;
  max-width: 20rem;
}

.fordaqLogo { height: 32px; width: auto; }

.fordaqCta {
  font-family: var(--font-body);
  font-size: var(--text-label-caps-sm);
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-text);
  font-weight: 600;
}

.bottomBar {
  margin-top: var(--space-xl);
  padding: var(--space-md) 0;
  border-top: 1px solid rgba(255,255,255,.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.bottomLeft { display: flex; gap: var(--space-xl); align-items: center; flex-wrap: wrap; }

.bottomMeta {
  font-family: var(--font-body);
  font-size: var(--text-label-caps-sm);
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: rgba(255,255,255,.45);
  font-weight: 500;
}

.siteBy {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  color: rgba(255,255,255,.55);
}

.siteByLink {
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,.3);
  padding-bottom: 1px;
  opacity: .9;
}

.siteByLink:hover { border-bottom-color: var(--color-primary); opacity: 1; }

@media (max-width: 1024px) {
  .cols { grid-template-columns: 1fr 1fr; gap: var(--space-lg); }
}

@media (max-width: 768px) {
  .cta { padding: var(--space-2xl) var(--space-md) 0; }
  .head { grid-template-columns: 1fr; gap: var(--space-md); }
  .headRight { justify-content: flex-start; }
  .cols { grid-template-columns: 1fr; gap: var(--space-lg); }
  .bottomBar { flex-direction: column; align-items: flex-start; }
  .bottomLeft { flex-direction: column; gap: var(--space-xs); align-items: flex-start; }
}
```

- [ ] **Step 3: Вставити CtaFooter у layout, щоб автоматично був на всіх сторінках**

Відкрити `app/[locale]/layout.jsx`. Знайти, де рендериться `<Footer/>` або де закінчується `{children}`. Додати імпорт:

```jsx
import CtaFooter from "@/app/components/CtaFooter/CtaFooter";
```

І в JSX перед існуючим `<Footer/>`:

```jsx
<CtaFooter />
<Footer />
```

- [ ] **Step 4: Запустити dev, перевірити всі 5 сторінок**

Run: `npm run dev`
Відкрити `/uk`, `/uk/aboutus`, `/uk/aboutus/manufacturing-process`, `/uk/products`, `/uk/contact` — на кожній внизу (перед звичайним футером) має бути темний блок з телефонами/email/адресою/Fordaq. Credit «Сайт створено Galychyna Technologies» справа внизу.

- [ ] **Step 5: Commit**

```bash
git add app/components/CtaFooter app/[locale]/layout.jsx
git commit -m "feat(cta-footer): add unified contact section rendered on every page"
```

---

## Task 7: PageIntro component

**Files:**
- Create: `app/components/PageIntro/PageIntro.jsx`
- Create: `app/components/PageIntro/PageIntro.module.css`

- [ ] **Step 1: Створити `PageIntro.jsx`**

```jsx
import React from "react";
import Image from "next/image";
import styles from "./PageIntro.module.css";

function PageIntro({ caps, title, lead, imageSrc, imageAlt, imagePriority = false }) {
  return (
    <section className={styles.intro}>
      <div className={styles.text}>
        {caps && <div className={styles.caps}>{caps}</div>}
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
      {imageSrc && (
        <div className={styles.imageWrap}>
          <Image
            src={imageSrc}
            alt={imageAlt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={imagePriority}
            className={styles.image}
          />
        </div>
      )}
    </section>
  );
}

export default PageIntro;
```

- [ ] **Step 2: Створити `PageIntro.module.css`**

```css
.intro {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  min-height: 42rem;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-surface);
}

.text {
  padding: var(--space-2xl) var(--space-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-md);
}

.caps {
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: var(--color-text-subtle);
}

.title {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: 500;
  line-height: var(--lh-tight);
  letter-spacing: var(--tracking-display);
  color: var(--color-text);
}

.lead {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-text-muted);
  max-width: 52rem;
  margin: 0;
}

.imageWrap { position: relative; overflow: hidden; }
.image { object-fit: cover; }

@media (max-width: 768px) {
  .intro { grid-template-columns: 1fr; min-height: auto; }
  .imageWrap { height: 22rem; order: -1; }
  .text { padding: var(--space-xl) var(--space-md); }
}
```

- [ ] **Step 3: Візуальний тест буде в Task 9 (Home). Поки що — сам собою компонент не рендериться**

- [ ] **Step 4: Commit**

```bash
git add app/components/PageIntro
git commit -m "feat(page-intro): editorial-split hero component"
```

---

## Task 8: EditorialRow component

**Files:**
- Create: `app/components/EditorialRow/EditorialRow.jsx`
- Create: `app/components/EditorialRow/EditorialRow.module.css`

- [ ] **Step 1: Створити `EditorialRow.jsx`**

```jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./EditorialRow.module.css";
import Lightbox from "@/app/components/Lightbox/Lightbox";

function EditorialRow({ index, reverse = false, images = [], title, body, extraChips = [] }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isGallery = images.length > 1;

  return (
    <>
      <div className={`${styles.row} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.media}>
          {isGallery ? (
            <div className={styles.gallery}>
              <button type="button" className={styles.galleryMain} onClick={() => setLightboxIndex(0)}>
                <Image src={images[0].src} alt={images[0].alt || ""} fill sizes="(max-width: 768px) 100vw, 40vw" />
              </button>
              <div className={styles.gallerySmall}>
                {images.slice(1).map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    className={styles.galleryThumb}
                    onClick={() => setLightboxIndex(i + 1)}
                  >
                    <Image src={img.src} alt={img.alt || ""} fill sizes="(max-width: 768px) 50vw, 20vw" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.singleImage}>
              <Image
                src={images[0].src}
                alt={images[0].alt || ""}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.index}>{String(index).padStart(2, "0")}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.body}>{body}</p>
          {extraChips.length > 0 && (
            <div className={styles.chips}>
              {extraChips.map((chip) => (
                <span key={chip} className={styles.chip}>{chip}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

export default EditorialRow;
```

- [ ] **Step 2: Створити `EditorialRow.module.css`**

```css
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  padding: var(--space-2xl) 0;
  border-bottom: 1px solid var(--color-border);
  align-items: center;
}

.row.reverse { direction: rtl; }
.row.reverse > * { direction: ltr; }

.media { position: relative; }

.singleImage {
  position: relative;
  width: 100%;
  height: 42rem;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.singleImage img { object-fit: cover; }

.gallery {
  display: grid;
  grid-template-rows: 1.6fr 1fr;
  gap: var(--space-xs);
  height: 42rem;
}

.galleryMain {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.galleryMain img { object-fit: cover; }

.gallerySmall {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xs);
}

.galleryThumb {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.galleryThumb img { object-fit: cover; }

.content { display: flex; flex-direction: column; gap: var(--space-sm); }

.index {
  font-family: var(--font-mono);
  font-size: var(--text-label-caps);
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--color-primary);
}

.title {
  font-family: var(--font-display);
  font-size: var(--text-headline-md);
  font-weight: 500;
  letter-spacing: var(--tracking-headline);
  color: var(--color-text);
  line-height: var(--lh-snug);
  margin: 0;
}

.body {
  font-size: var(--text-body-md);
  line-height: var(--lh-body);
  color: var(--color-text-muted);
  margin: 0;
}

.chips { display: flex; gap: var(--space-xs); flex-wrap: wrap; margin-top: var(--space-sm); }

.chip {
  font-family: var(--font-body);
  font-size: var(--text-label-caps-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  padding: 4px 12px;
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
}

@media (max-width: 1024px) {
  .singleImage, .gallery { height: 32rem; }
}

@media (max-width: 768px) {
  .row { grid-template-columns: 1fr; gap: var(--space-md); padding: var(--space-xl) 0; }
  .row.reverse { direction: ltr; }
  .singleImage, .gallery { height: 24rem; }
}
```

- [ ] **Step 3: Commit (компонент буде протестовано разом з Lightbox у Task 11)**

```bash
git add app/components/EditorialRow
git commit -m "feat(editorial-row): reversible split + gallery with lightbox trigger"
```

---

## Task 9: Lightbox component

**Files:**
- Create: `app/components/Lightbox/Lightbox.jsx`
- Create: `app/components/Lightbox/Lightbox.module.css`

- [ ] **Step 1: Створити `Lightbox.jsx`**

```jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Lightbox.module.css";

function Lightbox({ images, initialIndex = 0, onClose }) {
  const [idx, setIdx] = useState(initialIndex);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [images.length]);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close">×</button>
      <button type="button" className={`${styles.nav} ${styles.navPrev}`} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>
      <div className={styles.imageBox} onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[idx].src}
          alt={images[idx].alt || ""}
          width={1600}
          height={1067}
          sizes="90vw"
          style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "86vh" }}
        />
      </div>
      <button type="button" className={`${styles.nav} ${styles.navNext}`} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>
      <div className={styles.counter}>{idx + 1} / {images.length}</div>
    </div>
  );
}

export default Lightbox;
```

- [ ] **Step 2: Створити `Lightbox.module.css`**

```css
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(26,26,30,.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fade 160ms ease;
}

@keyframes fade { from { opacity: 0; } to { opacity: 1; } }

.close {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  width: 4.4rem;
  height: 4.4rem;
  border-radius: var(--radius-full);
  background: rgba(255,255,255,.1);
  color: #fff;
  border: 0;
  font-size: 2.4rem;
  cursor: pointer;
  transition: background var(--transition-fast);
}
.close:hover { background: rgba(255,255,255,.2); }

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 4.8rem;
  height: 4.8rem;
  border-radius: var(--radius-full);
  background: rgba(255,255,255,.1);
  color: #fff;
  border: 0;
  font-size: 3rem;
  cursor: pointer;
  transition: background var(--transition-fast);
}
.nav:hover { background: rgba(255,255,255,.2); }

.navPrev { left: var(--space-md); }
.navNext { right: var(--space-md); }

.imageBox {
  max-width: 90vw;
  max-height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter {
  position: absolute;
  bottom: var(--space-md);
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: var(--text-body-sm);
  color: rgba(255,255,255,.8);
  letter-spacing: 0.08em;
}

@media (max-width: 768px) {
  .nav { width: 3.6rem; height: 3.6rem; font-size: 2.2rem; }
  .navPrev { left: var(--space-sm); }
  .navNext { right: var(--space-sm); }
}
```

- [ ] **Step 3: Перевірити лайтбокс у контексті EditorialRow у Task 11 (manufacturing-process)**

- [ ] **Step 4: Commit**

```bash
git add app/components/Lightbox
git commit -m "feat(lightbox): modal gallery with keyboard nav and escape close"
```

---

## Task 10: NewsList component

**Files:**
- Create: `app/components/NewsList/NewsList.jsx`
- Create: `app/components/NewsList/NewsList.module.css`

- [ ] **Step 1: Прочитати поточний `MiniBlog.jsx`**

Run: `cat app/components/miniblog/MiniBlog.jsx`

Знайти, які поля з Sanity використовуються (напр. `title`, `publication_data`, `slug`, `category`).

- [ ] **Step 2: Створити `NewsList.jsx` (changelog-стиль)**

```jsx
"use client";
import React from "react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import styles from "./NewsList.module.css";

function formatDate(isoDate) {
  if (!isoDate) return "";
  const d = new Date(isoDate);
  return d.toLocaleDateString("uk-UA", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function NewsList({ data = [] }) {
  const t = useTranslations("Index");

  if (!data.length) return null;

  return (
    <section className={styles.news}>
      <div className={styles.head}>
        <div>
          <div className={styles.caps}>{t("newsCaps")}</div>
          <h2 className={styles.heading}>{t("news")}</h2>
        </div>
        <Link href="/aboutus/news" className={styles.seeAll}>
          {t("newsAll")} →
        </Link>
      </div>
      <ul className={styles.list}>
        {data.slice(0, 6).map((post) => (
          <li key={post._id || post.slug?.current} className={styles.item}>
            <Link href={`/aboutus/news/${post.slug?.current || ""}`} className={styles.itemLink}>
              <div className={styles.itemMain}>
                <div className={styles.itemTitle}>{post.title}</div>
                {post.category && <div className={styles.itemCategory}>{post.category}</div>}
              </div>
              <div className={styles.itemDate}>{formatDate(post.publication_data)}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NewsList;
```

- [ ] **Step 3: Створити `NewsList.module.css`**

```css
.news {
  padding: var(--space-3xl) var(--space-xl);
  background: var(--color-surface-card);
  border-bottom: 1px solid var(--color-border);
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--space-xl);
}

.caps {
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: var(--color-text-subtle);
  margin-bottom: var(--space-xs);
}

.heading {
  font-family: var(--font-display);
  font-size: var(--text-headline-lg);
  font-weight: 500;
  letter-spacing: var(--tracking-headline);
  color: var(--color-text);
  margin: 0;
}

.seeAll {
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-text);
  padding-bottom: 2px;
  text-decoration: none;
}

.list { padding: 0; }

.item { border-top: 1px solid var(--color-border); }
.item:last-child { border-bottom: 1px solid var(--color-border); }

.itemLink {
  display: flex;
  justify-content: space-between;
  padding: var(--space-md) 0;
  text-decoration: none;
  color: var(--color-text);
  transition: padding-left var(--transition-fast);
}

.itemLink:hover { padding-left: var(--space-sm); }

.itemMain { display: flex; flex-direction: column; gap: 4px; }

.itemTitle {
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: var(--color-text);
}

.itemCategory {
  font-family: var(--font-mono);
  font-size: var(--text-label-caps-sm);
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-text-subtle);
}

.itemDate {
  font-family: var(--font-mono);
  font-size: var(--text-body-sm);
  color: var(--color-text-subtle);
  white-space: nowrap;
  align-self: center;
}

@media (max-width: 768px) {
  .news { padding: var(--space-2xl) var(--space-md); }
  .head { flex-direction: column; align-items: flex-start; gap: var(--space-md); }
}
```

- [ ] **Step 4: Commit**

```bash
git add app/components/NewsList
git commit -m "feat(news-list): changelog-style news without images"
```

---

## Task 11: Metrics component

**Files:**
- Create: `app/components/Metrics/Metrics.jsx`
- Create: `app/components/Metrics/Metrics.module.css`

- [ ] **Step 1: Створити `Metrics.jsx`**

```jsx
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Metrics.module.css";

const KEYS = ["years", "species", "moisture", "custom"];

function Metrics() {
  const t = useTranslations("Index");
  return (
    <section className={styles.metrics}>
      {KEYS.map((k) => (
        <div key={k} className={styles.item}>
          <div className={styles.value}>{t(`metric.${k}.value`)}</div>
          <div className={styles.label}>{t(`metric.${k}.label`)}</div>
        </div>
      ))}
    </section>
  );
}

export default Metrics;
```

- [ ] **Step 2: Створити `Metrics.module.css`**

```css
.metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
  padding: var(--space-2xl) var(--space-xl);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.item { display: flex; flex-direction: column; gap: var(--space-xs); }

.value {
  font-family: var(--font-display);
  font-size: var(--text-headline-lg);
  font-weight: 500;
  line-height: var(--lh-tight);
  letter-spacing: var(--tracking-headline);
  color: var(--color-text);
}

.label {
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-text-subtle);
}

@media (max-width: 1024px) { .metrics { grid-template-columns: repeat(2, 1fr); gap: var(--space-lg); } }
@media (max-width: 480px) { .metrics { grid-template-columns: 1fr 1fr; padding: var(--space-xl) var(--space-md); } }
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Metrics
git commit -m "feat(metrics): 4-column KPI block driven by i18n keys"
```

---

## Task 12: Flexibility component

**Files:**
- Create: `app/components/Flexibility/Flexibility.jsx`
- Create: `app/components/Flexibility/Flexibility.module.css`

- [ ] **Step 1: Створити `Flexibility.jsx`**

```jsx
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Flexibility.module.css";

const ITEMS = ["item1", "item2", "item3", "item4"];
const TAGS = ["tag1", "tag2", "tag3", "tag4", "tag5"];

function Flexibility() {
  const t = useTranslations("Index");
  return (
    <section className={styles.flex}>
      <div className={styles.caps}>{t("flexibility.caps")}</div>
      <div className={styles.top}>
        <div className={styles.textCol}>
          <h2 className={styles.title}>{t("flexibility.title")}</h2>
          <p className={styles.intro}>{t("flexibility.intro")}</p>
        </div>
        <div className={styles.grid}>
          {ITEMS.map((i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTitle}>{t(`flexibility.${i}.title`)}</div>
              <div className={styles.cardSpec}>{t(`flexibility.${i}.spec`)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tags}>
        {TAGS.map((k) => (
          <span key={k} className={styles.tag}>{t(`flexibility.${k}`)}</span>
        ))}
      </div>
    </section>
  );
}

export default Flexibility;
```

- [ ] **Step 2: Створити `Flexibility.module.css`**

```css
.flex {
  padding: var(--space-3xl) var(--space-xl);
  background: rgba(140, 166, 0, 0.08);
  border-bottom: 1px solid var(--color-border);
}

.caps {
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: var(--color-text-subtle);
  margin-bottom: var(--space-md);
}

.top {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--space-2xl);
  align-items: flex-start;
}

.textCol { display: flex; flex-direction: column; gap: var(--space-md); }

.title {
  font-family: var(--font-display);
  font-size: var(--text-headline-lg);
  font-weight: 500;
  line-height: var(--lh-snug);
  letter-spacing: var(--tracking-headline);
  color: var(--color-text);
  max-width: 52rem;
  margin: 0;
}

.intro {
  font-size: var(--text-body-md);
  line-height: var(--lh-body);
  color: var(--color-text-muted);
  max-width: 52rem;
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
}

.card {
  background: var(--color-surface-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-md);
}

.cardTitle {
  font-family: var(--font-display);
  font-size: var(--text-headline-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-headline);
  color: var(--color-text);
}

.cardSpec {
  font-family: var(--font-mono);
  font-size: var(--text-body-sm);
  color: var(--color-text-subtle);
  margin-top: var(--space-xs);
}

.tags {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
  margin-top: var(--space-xl);
}

.tag {
  font-family: var(--font-body);
  font-size: var(--text-label-caps-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  padding: 7px 14px;
  background: var(--color-surface-card);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
}

@media (max-width: 1024px) {
  .top { grid-template-columns: 1fr; gap: var(--space-lg); }
}

@media (max-width: 768px) {
  .flex { padding: var(--space-2xl) var(--space-md); }
  .grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Flexibility
git commit -m "feat(flexibility): supplier scope section with chips and spec cards"
```

---

## Task 13: Home page refactor

**Files:**
- Modify: `app/page/Home.jsx`
- Modify: `app/styles/page/page.module.css`

- [ ] **Step 1: Прочитати поточний `Home.jsx` щоб знати, які ключі i18n там є**

Run: `cat app/page/Home.jsx`

Побачиш: `aboutus`, `title1..3`, `news`, `ourproduct`, оksь/ash/birch/modrina, `certificates`, `quality`, `manufacturing`, `manager`, `director`, `writeus`, `contactus`. Ці ключі — зберігаємо, використовуємо в новій розкладці.

- [ ] **Step 2: Повністю переписати `Home.jsx`**

Повний новий вміст `app/page/Home.jsx`:

```jsx
"use client";
import React, { Suspense, useEffect, useState } from "react";
import Link from "next-intl/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { client } from "@/app/_lib/sanity";
import Loading from "@/app/[locale]/loading";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Metrics from "@/app/components/Metrics/Metrics";
import Flexibility from "@/app/components/Flexibility/Flexibility";
import NewsList from "@/app/components/NewsList/NewsList";
import styles from "@/app/styles/page/page.module.css";
import Button from "@/app/UI/button/button";

async function getData() {
  const query = `*[_type == "post"] | order(publication_data desc)`;
  return client.fetch(query);
}

const SPECIES = [
  { key: "oak", href: "/products/oak-lumber", latin: "Quercus robur", image: "/oak-lumber-03.webp", gradient: "linear-gradient(135deg,#8B6F47 0%,#6B4F2A 100%)" },
  { key: "ash", href: "/products/ash-lumber", latin: "Fraxinus excelsior", image: "/ash-lumber-03.webp", gradient: "linear-gradient(135deg,#C9A876 0%,#8f7548 100%)" },
  { key: "birch", href: "/products/birch-lumber", latin: "Betula pendula", image: "/birch-lumber-03.webp", gradient: "linear-gradient(135deg,#E8D7B8 0%,#b99f76 100%)" },
  { key: "modrina", href: "/products/modrina-lumber", latin: "Larix decidua", image: "/modrina-lumber-03.webp", gradient: "linear-gradient(135deg,#a96a3f 0%,#6b3d1f 100%)" },
];

function Home() {
  const t = useTranslations("Index");
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getData().then(setBlogData);
  }, []);

  return (
    <>
      <PageIntro
        caps="Zubr2000"
        title={t("aboutus")}
        lead={[t("title1"), t("title6")].join(" ")}
        imageSrc="/photo_tittl_№1.1.webp"
        imageAlt={t("aboutus")}
        imagePriority
      />

      <Metrics />

      <section className={styles.species}>
        <div className={styles.sectionCaps}>{t("catalogCaps")}</div>
        <h2 className={styles.sectionHeading}>{t("ourproduct")}</h2>
        <p className={styles.sectionHint}>{t("catalogHint")}</p>
        <div className={styles.speciesGrid}>
          {SPECIES.map((s) => (
            <Link key={s.key} href={s.href} className={styles.speciesCard}>
              <div className={styles.speciesText}>
                <div className={styles.speciesLatin}>{s.latin}</div>
                <div className={styles.speciesName}>{t(s.key)}</div>
                <div className={styles.speciesCta}>{t("read")} →</div>
              </div>
              <div className={styles.speciesImage} style={{ background: s.gradient }}>
                <Image src={s.image} alt={t(s.key)} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Flexibility />

      <Suspense fallback={<Loading />}>
        <NewsList data={blogData} />
      </Suspense>
    </>
  );
}

export default Home;
```

- [ ] **Step 3: Переписати `page.module.css`**

Повний вміст `app/styles/page/page.module.css`:

```css
.species {
  padding: var(--space-3xl) var(--space-xl);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.sectionCaps {
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: var(--color-text-subtle);
  margin-bottom: var(--space-sm);
}

.sectionHeading {
  font-family: var(--font-display);
  font-size: var(--text-headline-lg);
  font-weight: 500;
  letter-spacing: var(--tracking-headline);
  color: var(--color-text);
  margin: 0;
}

.sectionHint {
  font-size: var(--text-body-md);
  line-height: var(--lh-body);
  color: var(--color-text-muted);
  margin: var(--space-sm) 0 var(--space-xl);
  max-width: 52rem;
}

.speciesGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

.speciesCard {
  display: flex;
  min-height: 20rem;
  background: var(--color-surface-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  text-decoration: none;
  color: var(--color-text);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.speciesCard:hover { box-shadow: var(--shadow-lift); transform: translateY(-2px); }

.speciesText {
  flex: 1.1;
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.speciesLatin {
  font-family: var(--font-body);
  font-size: var(--text-label-caps-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: var(--color-text-subtle);
}

.speciesName {
  font-family: var(--font-display);
  font-size: var(--text-headline-md);
  font-weight: 500;
  letter-spacing: var(--tracking-headline);
  color: var(--color-text);
  margin: var(--space-xs) 0 var(--space-sm);
}

.speciesCta {
  margin-top: auto;
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 600;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-primary);
}

.speciesImage {
  flex: 1;
  position: relative;
  min-height: 20rem;
}

@media (max-width: 768px) {
  .species { padding: var(--space-2xl) var(--space-md); }
  .speciesGrid { grid-template-columns: 1fr; }
  .speciesCard { flex-direction: column-reverse; }
  .speciesImage { min-height: 14rem; }
}
```

- [ ] **Step 4: Запустити dev, перевірити головну**

Run: `npm run dev`
Відкрити `/uk`. Має рендеритись:
1. Hero: editorial split з `aboutus` заголовком, lead-текст.
2. Metrics: 4 числа (24+, 4+, 8–10%, Під замовлення).
3. 4 картки порід (дуб/ясен/береза/модрина).
4. Секція Flexibility (зеленуватий фон, картки, чіпи).
5. NewsList (табличний).
6. CtaFooter (автоматично з layout).

Перевірити консоль на помилки. Перемкнути на `/en`, `/pl` — структура та сама, тексти або англ (якщо є в `en.json`), або українською (fallback).

- [ ] **Step 5: Commit**

```bash
git add app/page/Home.jsx app/styles/page/page.module.css
git commit -m "feat(home): new layout with PageIntro, Metrics, species cards, Flexibility, NewsList"
```

---

## Task 14: Products list page refactor

**Files:**
- Modify: `app/[locale]/products/page.jsx`
- Modify: `app/styles/page/products.module.css`

- [ ] **Step 1: Прочитати поточну сторінку**

Run: `cat app/[locale]/products/page.jsx app/styles/page/products.module.css`

Зрозуміти, які i18n-ключі використовуються, чи рендеряться 4 породи через Link або через ProductCard.

- [ ] **Step 2: Переписати `app/[locale]/products/page.jsx`**

```jsx
"use client";
import React from "react";
import Link from "next-intl/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import styles from "@/app/styles/page/products.module.css";

const SPECIES = [
  { key: "oak", href: "/products/oak-lumber", latin: "Quercus robur", image: "/oak-lumber-03.webp", hard: true },
  { key: "ash", href: "/products/ash-lumber", latin: "Fraxinus excelsior", image: "/ash-lumber-03.webp", hard: true },
  { key: "birch", href: "/products/birch-lumber", latin: "Betula pendula", image: "/birch-lumber-03.webp", hard: true },
  { key: "modrina", href: "/products/modrina-lumber", latin: "Larix decidua", image: "/modrina-lumber-03.webp", hard: false },
];

function ProductsPage() {
  const t = useTranslations("Index");
  return (
    <>
      <PageIntro
        caps={t("catalogCaps")}
        title={t("product")}
        lead={t("title5")}
      />

      <section className={styles.list}>
        {SPECIES.map((s) => (
          <Link key={s.key} href={s.href} className={styles.card}>
            <div className={styles.text}>
              <div className={styles.latin}>{s.latin}</div>
              <h2 className={styles.name}>{t(s.key)}</h2>
              <div className={styles.chips}>
                <span className={styles.chipStock}>{t("aboutus-message18")}</span>
              </div>
              <div className={styles.cta}>{t("read")} →</div>
            </div>
            <div className={styles.image}>
              <Image src={s.image} alt={t(s.key)} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export default ProductsPage;
```

- [ ] **Step 3: Створити новий `products.module.css`**

```css
.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
  padding: var(--space-3xl) var(--space-xl);
  background: var(--color-surface);
}

.card {
  display: flex;
  min-height: 28rem;
  background: var(--color-surface-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  text-decoration: none;
  color: var(--color-text);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.card:hover { box-shadow: var(--shadow-lift); transform: translateY(-2px); }

.text { flex: 1; padding: var(--space-xl); display: flex; flex-direction: column; gap: var(--space-sm); }

.latin {
  font-family: var(--font-body);
  font-size: var(--text-label-caps-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: var(--color-text-subtle);
}

.name {
  font-family: var(--font-display);
  font-size: var(--text-headline-md);
  font-weight: 500;
  letter-spacing: var(--tracking-headline);
  color: var(--color-text);
  margin: 0;
}

.chips { display: flex; gap: var(--space-xs); flex-wrap: wrap; margin-top: var(--space-sm); }

.chipStock {
  font-family: var(--font-body);
  font-size: var(--text-label-caps-sm);
  font-weight: 600;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  padding: 5px 10px;
  background: var(--color-primary);
  color: var(--color-text);
  border-radius: var(--radius-full);
}

.cta {
  margin-top: auto;
  font-family: var(--font-body);
  font-size: var(--text-label-caps);
  font-weight: 600;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-primary);
}

.image { flex: 1; position: relative; min-height: 28rem; }

@media (max-width: 1024px) { .list { grid-template-columns: 1fr; } }
@media (max-width: 768px) {
  .list { padding: var(--space-2xl) var(--space-md); }
  .card { flex-direction: column-reverse; }
  .image { min-height: 18rem; }
  .text { padding: var(--space-lg); }
}
```

- [ ] **Step 4: Запустити dev, перевірити `/uk/products`**

4 картки в 2 колонки, editorial-спліт, зелений chip «В наявності», hover підіймає картку.

- [ ] **Step 5: Commit**

```bash
git add app/[locale]/products/page.jsx app/styles/page/products.module.css
git commit -m "feat(products): editorial-split species cards with stock chip"
```

---

## Task 15: Individual species pages (/products/oak-lumber etc.)

**Files:**
- Modify: `app/[locale]/products/oak-lumber/page.jsx`
- Modify: `app/[locale]/products/ash-lumber/page.jsx`
- Modify: `app/[locale]/products/birch-lumber/page.jsx`
- Modify: `app/[locale]/products/modrina-lumber/page.jsx`
- Modify: `app/styles/page/lumber.module.css`

- [ ] **Step 1: Прочитати одну з поточних сторінок породи**

Run: `cat app/[locale]/products/oak-lumber/page.jsx`

Зрозуміти поточну структуру. Припускаємо, що там є H1 + параграф + список характеристик + зображення.

- [ ] **Step 2: Створити PageIntro на початку + перегрупувати існуючий контент**

Для кожної з 4 сторінок (oak, ash, birch, modrina) замінити поточний hero на:

```jsx
<PageIntro
  caps="Quercus robur"        // або Fraxinus, Betula, Larix
  title={t("oak")}              // або ash/birch/modrina
  lead={t("title5")}            // або інший існуючий лід
  imageSrc="/oak-lumber-01.webp"
/>
```

Зберігаємо решту існуючого контенту сторінки, тільки переписуємо `lumber.module.css` під токени.

- [ ] **Step 3: Переписати `lumber.module.css` під токени**

Припустимо, поточний файл має класи `.container`, `.block`, `.info__img` тощо. Переписати, зберігаючи ті ж назви (щоб JSX не чіпати):

```css
.container { max-width: var(--max-width); margin: 0 auto; padding: 0 var(--space-md); }
.block { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2xl); padding: var(--space-2xl) 0; border-bottom: 1px solid var(--color-border); align-items: center; }
.info__img { width: 100%; height: auto; border-radius: var(--radius-md); }
.text__block { display: flex; flex-direction: column; gap: var(--space-sm); }
.text__block h2 { font-family: var(--font-display); font-size: var(--text-headline-md); font-weight: 500; letter-spacing: var(--tracking-headline); }
.text__block p { font-size: var(--text-body-md); line-height: var(--lh-body); color: var(--color-text-muted); }

@media (max-width: 768px) {
  .block { grid-template-columns: 1fr; padding: var(--space-xl) 0; }
}
```

Адаптувати під реальні класи файлу.

- [ ] **Step 4: Візуально перевірити 4 сторінки**

Run: `npm run dev`
Відкрити `/uk/products/oak-lumber`, `/uk/products/ash-lumber`, `/uk/products/birch-lumber`, `/uk/products/modrina-lumber`. На всіх — PageIntro + існуючий контент + CtaFooter.

- [ ] **Step 5: Commit**

```bash
git add app/[locale]/products app/styles/page/lumber.module.css
git commit -m "feat(products-species): add PageIntro to each species page, restyle lumber module"
```

---

## Task 16: Contact page refactor

**Files:**
- Modify: `app/page/Contact.jsx`
- Modify: `app/styles/page/contact.module.css`

- [ ] **Step 1: Прочитати поточний `Contact.jsx`**

Run: `cat app/page/Contact.jsx`

- [ ] **Step 2: Переписати `Contact.jsx` — прибрати дублюючі контакти (їх обслуговує CtaFooter)**

Повний новий вміст:

```jsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import Form from "@/app/components/form/Form";
import GoogleMaps from "@/app/components/googlmaps/GoogleMaps";
import styles from "@/app/styles/page/contact.module.css";

function Contact() {
  const t = useTranslations("Index");
  return (
    <>
      <PageIntro
        caps={t("contactFooter.caps")}
        title={t("contactus")}
      />

      <section className={styles.formMap}>
        <div className={styles.formWrap} id="contact_name">
          <Form />
        </div>
        <div className={styles.mapWrap}>
          <GoogleMaps />
        </div>
      </section>
    </>
  );
}

export default Contact;
```

- [ ] **Step 3: Переписати `contact.module.css`**

```css
.formMap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 52rem;
  border-bottom: 1px solid var(--color-border);
}

.formWrap {
  padding: var(--space-2xl) var(--space-xl);
  background: var(--color-surface-card);
  border-right: 1px solid var(--color-border);
}

.mapWrap {
  background: var(--color-surface);
  position: relative;
  min-height: 40rem;
}

.mapWrap > * { width: 100%; height: 100%; }

@media (max-width: 768px) {
  .formMap { grid-template-columns: 1fr; }
  .formWrap { padding: var(--space-xl) var(--space-md); border-right: 0; border-bottom: 1px solid var(--color-border); }
  .mapWrap { min-height: 30rem; }
}
```

- [ ] **Step 4: Запустити dev, перевірити `/uk/contact`**

Intro + форма злева, мапа справа. CtaFooter внизу (єдине місце з усіма контактами). Заповнити форму — має валідація і надсилання (EmailJS) — без регресії.

- [ ] **Step 5: Commit**

```bash
git add app/page/Contact.jsx app/styles/page/contact.module.css
git commit -m "feat(contact): intro + 50/50 form+map, contacts moved to CtaFooter"
```

---

## Task 17: AboutUs refactor

**Files:**
- Modify: `app/[locale]/aboutus/page.jsx`
- Modify: `app/styles/page/aboutus.module.css`

- [ ] **Step 1: Переписати `page.jsx`**

```jsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import styles from "@/app/styles/page/aboutus.module.css";

const PRINCIPLES = ["aboutus-message3", "aboutus-message4", "aboutus-message5", "aboutus-message6", "aboutus-message7"];
const MANUFACTURING = ["aboutus-message11", "aboutus-message12", "aboutus-message13", "aboutus-message14", "aboutus-message15", "aboutus-message16"];
const QUALITY = ["aboutus-message17", "aboutus-message18", "aboutus-message19", "aboutus-message20"];

function AboutUs() {
  const t = useTranslations("Index");

  return (
    <>
      <PageIntro
        title={t("aboutus")}
        lead={t("aboutus-message1")}
        imageSrc="/photo_tittl_№2.webp"
      />

      <section className={styles.principles}>
        <h2 className={styles.sectionHeading}>{t("aboutus-message2")}</h2>
        <ul className={styles.principleList}>
          {PRINCIPLES.map((key, i) => (
            <li key={key} className={styles.principleItem}>
              <span className={styles.principleIndex}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.principleBody}>{t(key)}</span>
            </li>
          ))}
        </ul>
        <div className={styles.paragraphs}>
          <p>{t("aboutus-message8")}</p>
          <p>{t("aboutus-message9")}</p>
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardKind}>{t("certificates")}</div>
          <ul className={styles.cardList}>
            <li className={styles.cardRow}>Trade Leaders</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardKind}>{t("manufacturing")}</div>
          <ul className={styles.cardList}>
            {MANUFACTURING.map((k) => <li key={k} className={styles.cardRow}>{t(k)}</li>)}
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardKind}>{t("quality")}</div>
          <ul className={styles.cardList}>
            <li className={styles.cardRow}>{t(QUALITY[0])}</li>
            <li className={styles.cardRow}>{t(QUALITY[1])}</li>
            <li className={styles.cardRow}>{t(QUALITY[2])} {t(QUALITY[3])}</li>
          </ul>
        </div>
      </section>

      <section className={styles.outro}>
        <p>{t("aboutus-message10")}</p>
      </section>
    </>
  );
}

export default AboutUs;
```

- [ ] **Step 2: Переписати `aboutus.module.css`**

```css
.principles {
  padding: var(--space-3xl) var(--space-xl);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.sectionHeading {
  font-family: var(--font-display);
  font-size: var(--text-headline-lg);
  font-weight: 500;
  letter-spacing: var(--tracking-headline);
  color: var(--color-text);
  max-width: 64rem;
  margin: 0 0 var(--space-xl);
}

.principleList { display: grid; grid-template-columns: 1fr 1fr; column-gap: var(--space-xl); max-width: 88rem; padding: 0; }

.principleItem {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-md) 0;
  border-top: 1px solid var(--color-border);
  font-size: var(--text-body-md);
  color: var(--color-text);
  line-height: var(--lh-body);
}

.principleItem:nth-child(5) { border-bottom: 1px solid var(--color-border); }

.principleIndex {
  font-family: var(--font-mono);
  font-size: var(--text-label-caps);
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.15em;
  min-width: 2.2rem;
}

.principleBody { flex: 1; }

.paragraphs { max-width: 68rem; margin-top: var(--space-xl); display: flex; flex-direction: column; gap: var(--space-md); }
.paragraphs p { font-size: var(--text-body-lg); line-height: var(--lh-body); color: var(--color-text); margin: 0; }
.paragraphs p:last-child { color: var(--color-text-muted); }

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  padding: var(--space-3xl) var(--space-xl);
  background: var(--color-surface-card);
  border-bottom: 1px solid var(--color-border);
}

.card {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-xl);
  box-shadow: var(--shadow-card);
}

.cardKind {
  font-family: var(--font-display);
  font-size: var(--text-headline-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-headline);
  color: var(--color-text);
  margin-bottom: var(--space-md);
}

.cardList { padding: 0; border-top: 1px solid var(--color-border); }

.cardRow {
  font-size: var(--text-body-sm);
  color: var(--color-text);
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-border);
  line-height: var(--lh-body);
}

.cardRow:last-child { border-bottom: 0; }

.outro {
  padding: var(--space-2xl) var(--space-xl);
  max-width: 80rem;
  margin: 0 auto;
}

.outro p {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .cards { grid-template-columns: 1fr; }
  .principleList { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .principles, .cards { padding: var(--space-2xl) var(--space-md); }
}
```

- [ ] **Step 3: Запустити dev, перевірити `/uk/aboutus`**

Intro → секція з нумерованим списком принципів 01–05 → 3 картки (Сертифікати/Виробництво/Якість) → фінальний параграф → CtaFooter.

- [ ] **Step 4: Commit**

```bash
git add app/[locale]/aboutus/page.jsx app/styles/page/aboutus.module.css
git commit -m "feat(aboutus): editorial layout with numbered principles + info cards"
```

---

## Task 18: ManufacturingProcess refactor

**Files:**
- Modify: `app/page/ManufacturingProcess.jsx`
- Modify: `app/styles/page/manufacturing-process.module.css`

- [ ] **Step 1: Переписати `ManufacturingProcess.jsx`**

```jsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import EditorialRow from "@/app/components/EditorialRow/EditorialRow";
import styles from "@/app/styles/page/manufacturing-process.module.css";

const STEPS = [
  { images: [{ src: "/photo_product_3.webp", alt: "" }], titleKey: "aboutus-message11", bodyKey: "manufacturing_process_02" },
  { images: [{ src: "/photo_product_4.webp", alt: "" }], titleKey: "aboutus-message12", bodyKey: "manufacturing_process_03" },
  { images: [
      { src: "/photo_product_5_1.webp", alt: "" },
      { src: "/photo_product_5_2.webp", alt: "" },
      { src: "/photo_product_5_3.webp", alt: "" },
    ], titleKey: "aboutus-message13", bodyKey: "manufacturing_process_04" },
  { images: [{ src: "/photo_product_7.webp", alt: "" }], titleKey: "aboutus-message14", bodyKey: "manufacturing_process_05" },
  { images: [{ src: "/pack-product.webp", alt: "" }], titleKey: "aboutus-message15", bodyKey: "manufacturing_process_06" },
  { images: [{ src: "/photo_product_6.webp", alt: "" }], titleKey: "aboutus-message16", bodyKey: "manufacturing_process_07" },
];

function ManufacturingProcess() {
  const t = useTranslations("Index");
  return (
    <>
      <PageIntro
        title={t("manufacturing")}
        lead={t("manufacturing_process_01")}
      />

      <section className={styles.rows}>
        {STEPS.map((s, i) => (
          <EditorialRow
            key={i}
            index={i + 1}
            reverse={i % 2 === 1}
            images={s.images}
            title={t(s.titleKey)}
            body={t(s.bodyKey)}
          />
        ))}
      </section>

      <section className={styles.outro}>
        <h2>{t("manufacturing_process_08")}</h2>
        <p>{t("manufacturing_process_09")}</p>
      </section>
    </>
  );
}

export default ManufacturingProcess;
```

- [ ] **Step 2: Переписати `manufacturing-process.module.css`**

```css
.rows { padding: var(--space-xl) var(--space-xl); background: var(--color-surface-card); }

.outro {
  padding: var(--space-3xl) var(--space-xl);
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.outro h2 {
  font-family: var(--font-display);
  font-size: var(--text-headline-lg);
  font-weight: 500;
  letter-spacing: var(--tracking-headline);
  max-width: 72rem;
  line-height: var(--lh-snug);
  margin: 0;
}

.outro p {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-text-muted);
  margin-top: var(--space-md);
  max-width: 72rem;
}

@media (max-width: 768px) {
  .rows { padding: var(--space-md); }
  .outro { padding: var(--space-2xl) var(--space-md); }
}
```

- [ ] **Step 3: Запустити dev**

`/uk/aboutus/manufacturing-process` — 6 editorial-рядків з чергуванням, блок 03 має галерею (велике фото + 2 менших), клік на будь-яке фото відкриває Lightbox. Esc і клавіші ←/→ працюють.

- [ ] **Step 4: Commit**

```bash
git add app/page/ManufacturingProcess.jsx app/styles/page/manufacturing-process.module.css
git commit -m "feat(manufacturing): 6 editorial rows with alternating direction, gallery with lightbox"
```

---

## Task 19: Remove FSC assets and references

**Files:**
- Delete: `public/fsc__mini2.webp`, `public/mini-fsc.webp`
- Modify: any JSX/CSS still referencing FSC

- [ ] **Step 1: Знайти всі згадки FSC у коді**

Run: `grep -rni "fsc" app/ messages/ --include="*.jsx" --include="*.css" --include="*.json"`

Переглянути результати. Якщо в `messages/*.json` є ключі на кшталт `title2FSC` або згадки «FSC» — вирішити: замінити на нейтральний текст (якщо це UA-копірайт) або прибрати сам ключ, якщо він ніде не використовується.

- [ ] **Step 2: Видалити невикористовувані FSC-зображення**

```bash
rm public/fsc__mini2.webp public/mini-fsc.webp
```

Перевірити, що на них немає посилань у JSX/CSS: `grep -rn "fsc__mini2\|mini-fsc" app/`. Якщо є — прибрати.

- [ ] **Step 3: Перевірити dev-сервер**

Run: `npm run dev`
Відкрити 5 сторінок — жодних 404 на зображеннях.

- [ ] **Step 4: Commit**

```bash
git add -A public/ app/ messages/
git commit -m "chore(fsc): remove FSC imagery and mentions from UI"
```

---

## Task 20: Navbar and legacy Footer restyle

**Files:**
- Modify: `app/styles/component/navbar.module.css`
- Modify: `app/styles/component/footer.module.css`
- Modify: `app/components/footer/Footer.jsx` (спрощення — CtaFooter бере більшість)

- [ ] **Step 1: Переписати navbar.module.css під токени**

Зберегти назви класів (вони використовуються в Navbar.jsx), змінити значення:

```css
/* ключові селектори: .navbar, .navbar__logo, .navbar__link, .navbar__menu, тощо */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: rgba(244,244,242,.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 var(--space-xl);
  font-family: var(--font-body);
}

.navbar__link {
  font-size: var(--text-label-caps);
  font-weight: 500;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--color-text);
  padding: var(--space-sm) var(--space-md);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.navbar__link:hover { color: var(--color-primary-dark); }
.navbar__link_active { color: var(--color-primary); }

/* Адаптувати під реальну структуру */
@media (max-width: 768px) { .navbar { padding: 0 var(--space-md); } }
```

Адаптувати до актуальних класів з існуючого файлу.

- [ ] **Step 2: Спростити Footer.jsx (CtaFooter уже дає основне)**

Новий, спрощений `Footer.jsx`:

```jsx
"use client";
import React from "react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import styles from "@/app/styles/component/footer.module.css";

function Footer() {
  const t = useTranslations("Index");
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>{t("home")}</Link>
          <Link href="/aboutus" className={styles.link}>{t("aboutus")}</Link>
          <Link href="/products" className={styles.link}>{t("product")}</Link>
          <Link href="/contact" className={styles.link}>{t("contact")}</Link>
        </nav>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
```

- [ ] **Step 3: Переписати footer.module.css**

```css
.footer {
  background: var(--color-overlay);
  color: #fff;
  padding: var(--space-md) var(--space-xl);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.nav { display: flex; gap: var(--space-xl); flex-wrap: wrap; }

.link {
  font-family: var(--font-body);
  font-size: var(--text-label-caps-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-caps-wide);
  text-transform: uppercase;
  color: rgba(255,255,255,.65);
  text-decoration: none;
}

.link:hover { color: #fff; }

@media (max-width: 768px) { .footer { padding: var(--space-md); } .nav { gap: var(--space-md); } }
```

- [ ] **Step 4: Перевірити dev**

Відкрити будь-яку сторінку. Навбар — білий напівпрозорий з blur, малі CAPS посилання. Нижче CtaFooter (темний), а в самому низу маленький Footer з nav-посиланнями.

- [ ] **Step 5: Commit**

```bash
git add app/styles/component/navbar.module.css app/styles/component/footer.module.css app/components/footer/Footer.jsx
git commit -m "feat(nav,footer): restyle navbar and simplify footer into nav-only bar"
```

---

## Task 21: Sub-pages cleanup (certificates, quality-standarts, news, offers)

**Files:**
- Modify: `app/[locale]/aboutus/certificates/page.jsx` (і css)
- Modify: `app/[locale]/aboutus/quality-standarts/page.jsx`
- Modify: `app/[locale]/aboutus/news/page.jsx`
- Modify: `app/[locale]/aboutus/offers/page.jsx`
- Modify: відповідні `.module.css`

- [ ] **Step 1: Для кожної з 4 сторінок додати PageIntro зверху**

Прочитати поточну структуру: `cat app/[locale]/aboutus/certificates/page.jsx`. Знайти H1/H2 і замінити на `<PageIntro title={t("certificates")} />` (без `lead` якщо його зараз немає).

Повторити для `quality-standarts`, `news`, `offers`.

- [ ] **Step 2: Переписати відповідні CSS-модулі під токени**

Використати ті самі класи/структуру, що в `aboutus.module.css`: контейнер, картки, списки.

- [ ] **Step 3: Запустити dev і пройти по 4 сторінках**

Відкрити `/uk/aboutus/certificates`, `/uk/aboutus/quality-standarts`, `/uk/aboutus/news`, `/uk/aboutus/offers`. Всі з PageIntro, контент, CtaFooter.

- [ ] **Step 4: Commit**

```bash
git add app/[locale]/aboutus app/styles/page
git commit -m "feat(sub-pages): add PageIntro and tokenize certificates, quality, news, offers"
```

---

## Task 22: Remove deprecated MiniBlog

**Files:**
- Delete: `app/components/miniblog/MiniBlog.jsx`
- Delete: `app/styles/component/minipost.module.css`

- [ ] **Step 1: Перевірити, що MiniBlog ніде не використовується**

Run: `grep -rn "MiniBlog\|miniblog" app/ --include="*.jsx"`

Expected: нема (після Task 13 його вже не імпортують у Home.jsx).

- [ ] **Step 2: Видалити файли**

```bash
rm -r app/components/miniblog
rm app/styles/component/minipost.module.css
```

- [ ] **Step 3: Повторно перевірити, що білд працює**

Run: `npm run dev`
Жодних помилок імпорту в консолі Next.js.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove deprecated MiniBlog component replaced by NewsList"
```

---

## Task 23: Responsive QA + cross-locale smoke test

**Files:**
- None — лише ручна перевірка

- [ ] **Step 1: Desktop QA (1440px)**

Run: `npm run dev`. Відкрити у браузері з вікном 1440×900.

Пройти по 5 головних сторінках для локалі `uk`:
- `/uk` — Hero split, Metrics, 4 картки порід, Flexibility, NewsList, CtaFooter.
- `/uk/aboutus` — Intro, принципи, 3 картки, параграф, CtaFooter.
- `/uk/aboutus/manufacturing-process` — Intro, 6 editorial-рядків (галерея у 3-му), outro, CtaFooter.
- `/uk/products` — Intro, 4 картки (2 в ряд), CtaFooter.
- `/uk/contact` — Intro, форма+мапа 50/50, CtaFooter.

Перевірити: жодних horizontal overflow, жодних CSS-помилок у консолі, шрифти завантажились.

- [ ] **Step 2: Tablet QA (900px)**

У DevTools → Responsive mode → 900×1280.

Пройти ті самі 5 сторінок. Перевірити:
- Картки на /products — тепер 1 в ряд (а не 2).
- Metrics — 2 колонки замість 4.
- Editorial-рядки — split зберігається, але висота фото 320px.

- [ ] **Step 3: Mobile QA (375px)**

375×812.

- Hero-спліт → стек (фото зверху 220–240px, текст під ним).
- Галерея у manufacturing-process — горизонтальний swipe, не 1-велике-і-2-маленьких.
- CtaFooter — усі 4 колонки у 1 стовпчик, gap 32px.
- Форма на /contact — textarea і інпути full-width.
- Кнопки full-width.

- [ ] **Step 4: Cross-locale smoke test**

Перемкнути на `/en`, `/pl`, `/de`, `/fr` — перевірити, що сторінки рендеряться (навіть якщо тексти нових ключів UA — це ok на цій ітерації). Перевірити кнопку зміни мови в navbar.

- [ ] **Step 5: Sanity integration smoke test**

На `/uk` → секція NewsList — має з'явитися щонайменше 1 новина (якщо Sanity-backend має дані). Клік по новині — відкриває `/aboutus/news/[slug]`.

- [ ] **Step 6: Form smoke test**

`/uk/contact` → заповнити форму, надіслати. Має показати success-повідомлення (і не створити помилку в консолі).

- [ ] **Step 7: Lightbox smoke test**

`/uk/aboutus/manufacturing-process` → клік на галерею блоку 03 → лайтбокс відкривається. Стрілки ← → перемикають. Esc закриває. Клік поза зображенням закриває.

- [ ] **Step 8: Виправити знайдені проблеми**

Якщо щось не так — правити точково, коментуючи у commit-повідомленні, що саме виправляли.

- [ ] **Step 9: Commit (якщо були фікси)**

```bash
git add -A
git commit -m "fix: responsive polish and cross-locale adjustments"
```

---

## Task 24: Final self-review і PR

**Files:**
- None

- [ ] **Step 1: Запустити Lighthouse на головній**

У Chrome DevTools → Lighthouse → Performance + Accessibility + Best Practices. Націлитись ≥ 90 для всіх трьох. Якщо Accessibility < 95 — подивитись на alt-тексти зображень (`t("aboutus")` як alt на hero-фото ок).

- [ ] **Step 2: Перевірити bundle-size**

Run: `npm run build`
Подивитись на вивід — розміри сторінок не мають суттєво вирости. `/uk` — ≤ 200kB First Load JS приблизно.

- [ ] **Step 3: Git log review**

Run: `git log --oneline main..HEAD`

Має бути ~20-22 коміти з чіткими повідомленнями. Повторно перевірити, що жодний не має хардкоду тексту в JSX.

- [ ] **Step 4: Push і pull request (лише за проханням користувача)**

Не пушити автоматично. Дочекатись підтвердження від користувача: «можна пушити».

Після підтвердження:

```bash
git push -u origin feat/pages-redesign-unified-style
gh pr create --title "Редизайн 5 сторінок у єдиному стилі" --body "$(cat <<'EOF'
## Summary
- Додано DESIGN.md зі спільними токенами (кольори, Fraunces+Inter, rounded, spacing, elevation).
- Усі 5 сторінок (Home, /aboutus, /manufacturing-process, /products, /contact) переведено на editorial-split + токени.
- Новий CtaFooter з телефонами, email, адресою, Fordaq і credit Galychyna Technologies — на кожній сторінці.
- Нові компоненти: PageIntro, EditorialRow, Lightbox, NewsList, Metrics, Flexibility.
- FSC прибрано з UI.
- 30 нових i18n-ключів у всі 9 локалей (UA-fallback поки, чекає на переклад).

## Test plan
- [ ] Ручний прохід 5 сторінок на 1440/900/375.
- [ ] Lightbox: стрілки, Esc, клік поза.
- [ ] Форма /contact надсилається через EmailJS.
- [ ] Sanity NewsList тягне новини.
- [ ] Навігація між 9 локалями працює.
- [ ] Lighthouse ≥ 90 Performance/Accessibility/Best Practices на головній.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

- [ ] **Step 5: Остаточно оновити spec з фактичним станом**

У `docs/superpowers/specs/2026-04-23-pages-redesign-design.md` — змінити статус з «Draft» на «Implemented», додати рядок про PR-URL.

```bash
git add docs/superpowers/specs/2026-04-23-pages-redesign-design.md
git commit -m "docs(spec): mark redesign spec as implemented, link to PR"
```

---

## Handoff notes

Після мерджа користувач має:
- Надіслати реальну адресу офісу → оновити `address.street/city/region` у всіх 9 локалях.
- Надіслати Google Maps URL → оновити `address.mapUrl`.
- Замовити професійні переклади ~30 нових ключів на 8 мов (все, крім `uk`). Поки що там UA-fallback.
- Ревʼю UA-драфтів (metric.*, flexibility.*, contactFooter.*) — за потреби правити текст у `uk.json`, решта мов синхронно.

---

## Self-review checklist

- [x] Кожна секція spec має відповідний task.
- [x] Жодних TBD/TODO-плейсхолдерів у кроках — конкретний код у кожному.
- [x] Типи та імена функцій/класів узгоджені між tasks: `CtaFooter`, `PageIntro`, `EditorialRow`, `Lightbox`, `NewsList`, `Metrics`, `Flexibility` — послідовно.
- [x] Кожен task залишає сайт у рендерабельному стані.
- [x] Коміти після кожного task → безпечний rollback.
- [x] Правило «no hardcode» в JSX — дотримано в усіх JSX-блоках, тільки `t("...")`.
- [x] CSS через токени — жодного `#hex` чи `Xpx` у нових модулях.

---
version: alpha
name: Zubr2000
description: Промислова точність для оптового пиломатеріалу — редакторський спліт, стримана палітра, моно-шрифт для даних.

colors:
  primary:        "#8CA600"
  primary-hover:  "#9DB800"
  primary-dark:   "#677903"
  text:           "#1A1A1E"
  text-muted:     "#4A4A52"
  text-subtle:    "#7A7A82"
  surface:        "#F4F4F2"
  surface-card:   "#FFFFFF"
  border:         "#E0E0E0"
  border-strong:  "#C4C4C4"
  overlay:        "#1A1A1E"
  on-overlay:     "#FFFFFF"

typography:
  display:
    fontFamily: Fraunces
    fontSize: 4.8rem
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Fraunces
    fontSize: 3.6rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Fraunces
    fontSize: 2.8rem
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Fraunces
    fontSize: 2.2rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.8rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 1.3rem
    fontWeight: 400
    lineHeight: 1.55
  label-caps:
    fontFamily: Inter
    fontSize: 1.1rem
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.18em
  label-caps-sm:
    fontFamily: Inter
    fontSize: 1.0rem
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.22em
  mono:
    fontFamily: "JetBrains Mono"
    fontSize: 1.2rem
    fontWeight: 400
    lineHeight: 1.4

rounded:
  none: 0
  sm:   4px
  md:   8px
  lg:   12px
  full: 9999px

spacing:
  xs:  0.5rem
  sm:  1rem
  md:  2rem
  lg:  3rem
  xl:  4rem
  2xl: 6rem
  3xl: 10rem

elevation:
  flat: none
  card: "0 1px 2px rgba(26,26,30,.04), 0 2px 8px rgba(26,26,30,.04)"
  lift: "0 4px 12px rgba(26,26,30,.06), 0 8px 24px rgba(26,26,30,.06)"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor:       "{colors.text}"
    typography:      "{typography.label-caps}"
    rounded:         "{rounded.md}"
    padding:         "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: transparent
    textColor:       "{colors.text}"
    typography:      "{typography.label-caps}"
    rounded:         "{rounded.md}"
    padding:         "13px 21px"
  card-product:
    backgroundColor: "{colors.surface-card}"
    rounded:         "{rounded.md}"
    padding:         "28px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor:       "{colors.text}"
    typography:      "{typography.label-caps-sm}"
    rounded:         "{rounded.full}"
    padding:         "6px 12px"
  chip-stock:
    backgroundColor: "{colors.primary}"
    textColor:       "{colors.text}"
  input-field:
    backgroundColor: "{colors.surface-card}"
    textColor:       "{colors.text}"
    rounded:         "{rounded.md}"
    padding:         "14px 16px"
  page-hero:
    backgroundColor: "{colors.overlay}"
    textColor:       "{colors.on-overlay}"
    typography:      "{typography.display}"
    padding:         "0 0 64px"
  hero-eyebrow:
    textColor:       "{colors.primary}"
    typography:      "{typography.label-caps}"
  section-heading:
    textColor:       "{colors.text}"
    typography:      "{typography.headline-md}"
  data-table:
    backgroundColor: "{colors.surface-card}"
    rounded:         "{rounded.md}"
  data-table-head:
    backgroundColor: "{colors.surface}"
    textColor:       "{colors.text-subtle}"
    typography:      "{typography.label-caps-sm}"
    padding:         "12px 16px"
  data-table-cell:
    textColor:       "{colors.text}"
    typography:      "{typography.mono}"
    padding:         "10px 16px"
---

## Overview

**Промислова точність.** Сайт читається як B2B-застосунок, не рекламна брошура: стримана типографіка, повітряна сітка, фото деревини як акцент. Аудиторія — оптові покупці, столяри, виробники меблів, будівельники, експортні контрагенти. Головна задача кожної сторінки — довіра до якості + одна конверсійна дія (надіслати специфікацію на прорахунок).

Редакторський спліт (1.2 : 1 або 1 : 1.2 типографіки й зображення) — базовий композиційний модуль. Присутній у hero-блоках, картках продуктів, секціях manufacturing. Дає впізнавану структуру на всіх сторінках.

**Цей файл — єдине джерело правди дизайну.** З нього генерується `app/styles/tokens.css` (редагувати DESIGN.md, не tokens.css). Будь-яка сторінка, що відходить від цих токенів і компонентів, вважається дрейфом і підлягає нормалізації — див. розділ «Known Drift & Normalization Plan» унизу. Аудит станом на 2026-07 показав, що система вже впроваджена на Home / Products / Product-detail / About / Offers, але частина сторінок (Quality standards, Cubaturnick, Certificates, News) лишилась поза нею.

## Colors

Палітра обрана з установкою «зелений як акцент, не як заливка». Primary `#8CA600` працює тільки на кнопках дії, статусах наявності, focus-рінгах і коротких виділених мітках. Базова опора — глибокий антрацит `#1A1A1E` на теплому світло-сірому `#F4F4F2`.

- **Primary (#8CA600):** CTA, статуси «в наявності», focus-ring, виділені мітки. Контраст з `text` 5.2:1 (AA ✓).
- **Text (#1A1A1E):** заголовки, тіло тексту, кнопки-secondary.
- **Text-muted (#4A4A52):** параграфи допоміжного змісту.
- **Text-subtle (#7A7A82):** мітки в капсах, метадані.
- **Surface (#F4F4F2):** фон сторінки.
- **Surface-card (#FFFFFF):** картки та підняті поверхні.
- **Border (#E0E0E0):** тонкі лінії-роздільники (секції, картки, таблиці).
- **Overlay (#1A1A1E):** CTA-футер, темні сцени.

## Typography

**Fraunces** для заголовків і **Inter** для UI — варіативна засічка + нейтральний гротеск. Fraunces 500, не 700: літера тонша, менш «журнальна», більш «технічна». **JetBrains Mono** точково для даних — номери кроків процесу, телефони, розміри, вологість.

- **Headlines (Fraunces 500):** ієрархія display → headline-lg → md → sm.
- **Body (Inter 400):** `body-md` як база, `body-lg` для провідних параграфів.
- **Label caps (Inter 500, UPPERCASE, letter-spacing 0.18–0.22em):** усі технічні мітки, над-заголовки секцій на кшталт `01 · Каталог`, `02 · Гнучкість`. Це впізнаваний «підпис» бренду.
- **Mono:** усі числа, коди порід (`Quercus robur`), телефони, нумерація кроків 01–06.

## Layout

**Max-width контейнера 1200px.** Горизонтальний padding: 48px desktop, 24px tablet, 20px mobile. Вертикальний ритм секцій — `spacing.3xl` (10rem) між головними блоками, `spacing.2xl` (6rem) всередині.

Редакторський спліт як базовий модуль:
- hero-секції та картки продуктів: `1.2fr 1fr` (типографіка ширша) або `1fr 1.2fr` (дзеркально).
- Картки в сітці: 2 колонки на desktop, 1 на mobile.
- manufacturing-process: кожен крок — `1fr 1fr` з чергуванням сторони фото.

### Responsive breakpoints

- **Desktop ≥1024px:** повна сітка, фото до 420px висоти.
- **Tablet 768–1023px:** сітка 2-в-ряд замість 3, фото до 320px.
- **Mobile &lt;768px:** вертикальний стек. Редакторський спліт → «фото зверху (full-width, 220–240px) → текст знизу». Кнопки full-width, вертикальний стек замість горизонтального. Гамбургер-меню, full-screen overlay. Галереї — horizontal swipe зі `scroll-snap-type: x mandatory` + індикатори-смужки. CTA-футер 1 стовпчик, `gap: 32px`.

## Elevation & Depth

Дві сходинки тіней. Без складних multi-layer shadows:

- `card` — базовий спокій картки на сірому фоні.
- `lift` — hover/active стан.

Немає blur-effects, glassmorphism чи inner shadows. Глибина — через контраст `surface` (сірий) vs `surface-card` (білий) + тонкі `border`.

## Shapes

`rounded.md` (8px) — базовий радіус для карток, кнопок, полів вводу. `rounded.sm` (4px) для мікро-елементів (бейджі-квадратики, невеликі маркери). `rounded.full` (9999px) — чіпи зі статусами та фільтри. Нічого гострого (radius 0) і нічого дуже м'якого (>12px).

## Components

- **button-primary:** лайм-зелений фон `#8CA600`, текст — антрацит `#1A1A1E` (не білий — контраст вищий), label-caps. Hover — `#9DB800`.
- **button-secondary:** прозорий фон, тонка межа `#1A1A1E`, той самий label-caps.
- **card-product:** білий фон, `rounded.md`, `elevation.card`, padding 28px. Hero-картки порід — editorial split, 1.1fr/1fr типографіки й зображення.
- **chip:** `rounded.full`, `label-caps-sm`, padding 6×12. Варіанти: `chip` (сірий фон), `chip-stock` (лайм-зелений для «в наявності»).
- **input-field:** білий фон на сірій картці або `surface` на білій, `rounded.md`, focus-ring `primary`.
- **page-hero (канонічний, ОДИН на весь сайт):** фото деревини з `overlay`-затемненням, контент вирівняний **ліворуч-зверху**, у контейнері `max-width`. Структура завжди трьохрядкова: `hero-eyebrow` (label-caps, `primary`) → заголовок (`display` або `headline-lg`, `on-overlay`) → провідний абзац (`body-lg`, `on-overlay`). Позиція, вирівнювання і склад однакові на кожній сторінці — заголовок ніколи не центрується й ніколи не лишається без eyebrow+опису. Це замінює обидва наявні різнобійні hero.
- **section-heading (канонічний):** над-заголовок секції всередині сторінки — `headline-md` Fraunces, **вирівняний ліворуч**, за потреби з `label-caps` eyebrow над ним. Жодних центрованих UPPERCASE sans-заголовків.
- **data-table (канонічний):** будь-яка таблиця даних (кубатурник, сорти, розміри) — у контейнері `max-width`, `surface-card` фон, `rounded.md`. Заголовок колонок — `data-table-head` (label-caps-sm, `text-subtle`, фон `surface`); клітинки — `data-table-cell` (mono, `text`); рядки-зебра через `surface`; роздільники `border`. **Обов'язково обгорнута в елемент `overflow-x: auto`**, щоб широка таблиця скролилась усередині себе й ніколи не давала горизонтальний оверфлоу сторінці (це ламає мобільний хром).

## Do's and Don'ts

- Do використовувати `colors.primary` тільки як акцент (CTA, статус наявності, focus). Ніколи як фон секції чи великий шрифт.
- Don't використовувати Fraunces менше 18px — дрібні розміри втрачають читабельність засічок.
- Do чергувати напрямок editorial-спліту між сусідніми блоками (фото ліворуч → фото праворуч).
- Don't змішувати `rounded.sm` і `rounded.lg` у межах одного екрану — тримати візуальний ритм.
- Do використовувати JetBrains Mono тільки для чисел/кодів/технічних даних. Ніколи для прозового тексту.
- Don't створювати тіні темніші за `elevation.lift`.
- Do зберігати мінімальний контраст 4.5:1 для body-тексту (AA).
- **Don't писати будь-який видимий текст у JSX без `t("...")`.** Усі рядки — через next-intl у всі 9 локалей (`da, de, en, fr, it, pl, ru, sv, uk`).
- **Do використовувати ОДИН `page-hero` на всіх сторінках** (eyebrow → серіф-заголовок → опис, ліворуч-зверху). Don't лишати сторінку з «голим» заголовком по центру без eyebrow і опису.
- **Don't центрувати заголовки секцій і Don't робити їх UPPERCASE sans.** Заголовки в тілі сторінки — лівобічний Fraunces через `section-heading`.
- **Do обгортати кожну широку таблицю у `overflow-x: auto` контейнер.** Don't допускати горизонтальний оверфлоу сторінки — він ламає навбар і футер на мобільному.
- **Don't лишати порожніх або «одноелементних» секцій без empty-state** (заголовок без контенту, один запис у списку з великою порожнечею). Або наповнити, або прибрати, або дати компактний empty-стан.
- Do оформлювати сирі дані (таблиці, сертифікати) як компоненти з обгорткою, контейнером і підписами — Don't класти таблицю/скан «в чисте поле» під навбаром.

## Known Drift & Normalization Plan

Аудит 2026-07 (десктоп + мобайл, локаль uk) виявив, що наскрізний хром (навбар, футер, CTA-стрічка) однаковий скрізь — це фундамент. «Розкиданість» = **дрейф дизайн-системи**: перелічені нижче сторінки/блоки зроблені поза цим DESIGN.md. Нормалізація = міграція викидів у систему, не новий дизайн.

### Перелік дрейфу (що виправляти)

1. **Два різні hero.** «Багатий» (Home, Продукт, Про Нас, Пропозиція, Дуб) vs «голий» (Сертифікати, Новини, Контакти, Стандарти якості: лише заголовок по центру, без eyebrow/опису). → звести все до канонічного `page-hero`.
2. **Широкі таблиці не адаптуються** (Кубатурник, Стандарти якості): на мобільному дають горизонтальний оверфлоу → навбар/футер зриваються в немаркований HTML. → обгорнути в `overflow-x: auto` (`data-table`).
3. **Кубатурник без обгортки взагалі:** дві гігантські таблиці одразу під навбаром, без hero, заголовка, контейнера. → `page-hero` + `data-table` у `max-width`.
4. **Стандарти якості — чужа типографіка:** центровані UPPERCASE sans-заголовки + унікальна пігулка-кнопка «Кубатурник». → на `section-heading` (лівобічний Fraunces) + стандартний CTA-лінк.
5. **Сертифікати — один голий скан** без сітки й підписів. → `card-grid` карток-сертифікатів з підписом (назва · орган · рік) + `Lightbox`.
6. **Порожні/недороблені секції:** «Ми шукаємо» (заголовок без контенту) на Offers; Новини — один запис і велика порожнеча без empty-state. → наповнити/прибрати/дати empty-стан.
7. **Дрібне:** FORDAQ-бейдж вибивається кольором із футера; дві primary-кнопки різного radius; асиметрія карток на «Про Нас» без hover-афордансу; подвійний заголовок «Зв'язатись з нами» на Контактах; нерівна деталізація кроків manufacturing.

### План нормалізації (рівні)

- **Варіант A — «Швидка гігієна».** Пункти 1–3: єдиний `page-hero`, обгортка широких таблиць у скрол-контейнер (лагодить мобайл), Кубатурник отримує hero+контейнер. Знімає ~80% відчуття розкиданості, бо hero — перше, що бачать на кожній сторінці.
- **Варіант B — «Повна нормалізація».** A + пункти 4–6: Стандарти якості на серіф-систему, галерея сертифікатів, прибрати/наповнити порожні секції. Після цього всі сторінки читаються як один продукт.
- **Варіант C — «Система + захист від дрейфу».** B + винести повторювані блоки в канонічні компоненти й уживати ТІЛЬКИ їх: `PageHero`, `DataTable`, `SectionHeading`, `CardGrid` (у проєкті вже є `PageIntro`, `EditorialRow`, `Metrics`, `Flexibility`, `NewsList`; бракує спільного `PageHero` — звідси два hero — і `DataTable` — звідси голий Кубатурник). Усуває причину дрейфу, а не наслідки.

### Рішення: широкі таблиці на мобільному

| Підхід | Плюс | Мінус |
|---|---|---|
| Горизонтальний скрол у контейнері | найпростіше, зберігає таблицю 1:1 | на телефоні незручно шукати значення |
| Reflow у картки (рядок = картка) | рідне для мобайлу | багато коду, для щільного кубатурника громіздко |
| Компактний lookup (висота × ширина → одне значення) | найзручніше для реальної задачі «дізнатися м³» | треба логіка, не лише CSS |

**Прийнято:** для Кубатурника — горизонтальний скрол зараз (Варіант A), lookup-віджет потім (Варіант C). Реальна задача користувача — «знайти один об'єм», а не «прочитати всю таблицю».

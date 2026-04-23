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
---

## Overview

**Промислова точність.** Сайт читається як B2B-застосунок, не рекламна брошура: стримана типографіка, повітряна сітка, фото деревини як акцент. Аудиторія — оптові покупці, столяри, виробники меблів, будівельники, експортні контрагенти.

Редакторський спліт (1.2 : 1 або 1 : 1.2 типографіки й зображення) — базовий композиційний модуль. Присутній у hero-блоках, картках продуктів, секціях manufacturing. Дає впізнавану структуру на всіх 5 сторінках.

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

## Do's and Don'ts

- Do використовувати `colors.primary` тільки як акцент (CTA, статус наявності, focus). Ніколи як фон секції чи великий шрифт.
- Don't використовувати Fraunces менше 18px — дрібні розміри втрачають читабельність засічок.
- Do чергувати напрямок editorial-спліту між сусідніми блоками (фото ліворуч → фото праворуч).
- Don't змішувати `rounded.sm` і `rounded.lg` у межах одного екрану — тримати візуальний ритм.
- Do використовувати JetBrains Mono тільки для чисел/кодів/технічних даних. Ніколи для прозового тексту.
- Don't створювати тіні темніші за `elevation.lift`.
- Do зберігати мінімальний контраст 4.5:1 для body-тексту (AA).
- **Don't писати будь-який видимий текст у JSX без `t("...")`.** Усі рядки — через next-intl у всі 9 локалей (`da, de, en, fr, it, pl, ru, sv, uk`).

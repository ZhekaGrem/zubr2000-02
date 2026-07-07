"use client";
import React, { useTransition, useCallback } from "react";
import Link from "next-intl/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import styles from "@/app/styles/component/footer.module.css";
import Button from "@/app/UI/button/button";

const PHONES = [
  { label: "manager", number: "+38 097 136-20-00" },
  { label: "director", number: "+38 067 674-58-43" },
];

const EMAILS = ["zubrzubr2000@gmail.com", "gremroman@gmail.com"];

const FORDAQ_URL =
  "https://derevyna.fordaq.com/fordaq/srvFordaqReport/UkrWood+LLC_642294.html";

const LOCALES = [
  { locale: "uk", code: "UA" },
  { locale: "en", code: "EN" },
  { locale: "pl", code: "PL" },
  { locale: "da", code: "DA" },
  { locale: "de", code: "DE" },
  { locale: "fr", code: "FR" },
  { locale: "it", code: "IT" },
  { locale: "sv", code: "SV" },
  { locale: "ru", code: "RU" },
];

function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const activeLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = useCallback(
    (nextLocale) => (event) => {
      event.preventDefault();
      if (nextLocale === activeLocale) return;
      startTransition(() => {
        router.replace(pathname, { locale: nextLocale });
      });
    },
    [pathname, activeLocale, router]
  );

  return (
    <nav
      className={styles.langRow}
      aria-label="Language"
      style={{ opacity: isPending ? 0.6 : 1 }}
    >
      {LOCALES.map(({ locale, code }) => (
        <a
          key={locale}
          href={`/${locale}${pathname}`}
          onClick={handleSwitch(locale)}
          aria-current={locale === activeLocale ? "true" : undefined}
          className={`${styles.langLink} ${
            locale === activeLocale ? styles.langActive : ""
          }`}
        >
          {code}
        </a>
      ))}
    </nav>
  );
}

function Footer() {
  const t = useTranslations("Index");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const companyLinks = [
    { href: "/aboutus/news", label: t("news") },
    { href: "/aboutus/certificates", label: t("certificates") },
    { href: "/aboutus/manufacturing-process", label: t("manufacturing") },
    ...(locale === "uk"
      ? [{ href: "/aboutus/offers", label: t("offers") }]
      : []),
  ];

  const productLinks = [
    { href: "/products/oak-lumber", label: t("oak") },
    { href: "/products/ash-lumber", label: t("ash") },
    { href: "/products/birch-lumber", label: t("birch") },
    { href: "/products/modrina-lumber", label: t("modrina") },
    { href: "/products", label: t("catalogCaps") },
  ];

  const qualityLinks = [
    { href: "/aboutus/quality-standarts", label: t("quality") },
    {
      href: "/aboutus/quality-standarts/cubaturnick",
      label: t("quality-title-51"),
    },
  ];

  const mapUrl = t("address.mapUrl");
  const mapActive = mapUrl && !mapUrl.startsWith("TODO");

  return (
    <div className={styles.footer}>
      {/* ── Region A — CTA band (dark) ── */}
      <section className={styles.cta}>
        <div className={styles.dots} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <div className={styles.caps}>{t("contactFooter.caps")}</div>
              <h2 className={styles.ctaHeading}>
                {t("contactFooter.heading")}
              </h2>
              <p className={styles.ctaLead}>{t("contactFooter.lead")}</p>
            </div>
            <div className={styles.ctaAction}>
              <Link
                href="/contact#contact_name"
                className={styles.ctaButtonLink}
              >
                <Button title_button={t("writeus")} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Region B — brand + photo split (dark) ── */}
      <section className={styles.brandBand}>
        <div className={styles.container}>
          <div className={styles.brandGrid}>
            <div className={styles.brandCol}>
              <Link href="/" className={styles.brandMark} aria-label="ZUBR-2000">
                ZUBR-2000
              </Link>
              <p className={styles.brandLine}>{t("home_h1")}</p>

              <a
                href={FORDAQ_URL}
                target="_blank"
                rel="noopener"
                className={styles.fordaqCard}
              >
                <Image
                  src="/fordaq-logo-02.webp"
                  alt="Fordaq"
                  width={120}
                  height={40}
                  className={styles.fordaqLogo}
                />
                <span className={styles.fordaqCta}>{t("ourProfile")} →</span>
              </a>

              <div className={styles.brandMeta}>
                <span>{t("workingHours")}</span>
                <span>© 2000–{year} ZUBR-2000</span>
              </div>
            </div>

            <div className={styles.brandPhoto}>
              <Image
                src="/photo_product_5_2.webp"
                alt={t("manufacturing")}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.brandPhotoImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Region C — columns (light) ── */}
      <section className={styles.colsBand}>
        <div className={styles.container}>
          <div className={styles.colsGrid}>
            <nav className={styles.col} aria-label={t("aboutus")}>
              <div className={styles.colTitle}>{t("aboutus")}</div>
              <ul className={styles.navList}>
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.navLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className={styles.col} aria-label={t("product")}>
              <div className={styles.colTitle}>{t("product")}</div>
              <ul className={styles.navList}>
                {productLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.navLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className={styles.col} aria-label={t("quality")}>
              <div className={styles.colTitle}>{t("quality")}</div>
              <ul className={styles.navList}>
                {qualityLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.navLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.col}>
              <div className={styles.colTitle}>{t("contact")}</div>
              <div className={styles.contactStack}>
                {PHONES.map((p) => (
                  <div key={p.number} className={styles.phoneBlock}>
                    <span className={styles.miniLabel}>{t(p.label)}</span>
                    <a
                      href={`tel:${p.number.replace(/\s/g, "")}`}
                      className={styles.mono}
                    >
                      {p.number}
                    </a>
                  </div>
                ))}
                {EMAILS.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className={styles.emailLink}
                  >
                    {email}
                  </a>
                ))}
              </div>
              <address className={styles.address}>
                <span>{t("address.street")}</span>
                <span>
                  {t("address.city")}, {t("address.region")}
                </span>
              </address>
              {mapActive && (
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener"
                  className={styles.mapLink}
                >
                  {t("findus")} →
                </a>
              )}
            </div>
          </div>

          <div className={styles.colsBottom}>
            <LangSwitcher />
            <span className={styles.siteBy}>
              {t("siteBy")}{" "}
              <a
                href="https://galychyna.online/"
                target="_blank"
                rel="noopener"
                className={styles.siteByLink}
              >
                Galychyna Technologies
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ── Region D — giant wordmark (dark, static) ── */}
      <section className={styles.wordmarkBand} aria-hidden="true">
        <span className={styles.giantMark}>ZUBR-2000</span>
      </section>
    </div>
  );
}

export default React.memo(Footer);

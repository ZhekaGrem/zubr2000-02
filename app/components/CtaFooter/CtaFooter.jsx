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
  const addressStreet = t("address.street");
  const addressCity = t("address.city");
  const addressRegion = t("address.region");
  const addressActive =
    addressStreet && !addressStreet.startsWith("TODO") &&
    addressCity && !addressCity.startsWith("TODO") &&
    addressRegion && !addressRegion.startsWith("TODO");

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
          <div className={styles.colTitle}>{t("emailLabel")}</div>
          <div className={styles.stack}>
            {EMAILS.map((email) => (
              <a key={email} href={`mailto:${email}`} className={styles.emailLink}>
                {email}
              </a>
            ))}
          </div>
        </div>

        {addressActive && (
          <div className={styles.col}>
            <div className={styles.colTitle}>{t("findus")}</div>
            <address className={styles.address}>
              <span>{addressStreet}</span>
              <span>{addressCity}</span>
              <span>{addressRegion}</span>
            </address>
            {mapActive && (
              <a href={mapUrl} target="_blank" rel="noopener" className={styles.mapLink}>
                {t("findus")} →
              </a>
            )}
          </div>
        )}

        <div className={styles.col}>
          <div className={styles.colTitle}>{t("onlineLabel")}</div>
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

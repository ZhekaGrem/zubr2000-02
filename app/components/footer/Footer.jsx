"use client";
import React from "react";
import styles from "@/app/styles/component/footer.module.css";
import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

const footerSections = [
  {
    titleKey: "ourproduct",
    links: [
      { href: "/products#oak", labelKey: "oak" },
      { href: "/products#ash", labelKey: "ash" },
      { href: "/products#birch", labelKey: "birch" },
      { href: "/products#modrina", labelKey: "modrina" },
    ],
  },
  {
    titleKey: "certificates",
    links: [
      { 
        href: "/aboutus/certificates", 
        labelKey: "certificates-name-1",
        isExternal: false
      },
    ],
  },
];

const contactInfo = {
  phones: [
    { label: "manager", number: "+38 097 136-20-00" },
    { label: "director", number: "+38 067 674-58-43" },
  ],
  emails: [
    "zubrzubr2000@gmail.com",
    "gremroman@gmail.com",
    "grem_roman@icloud.com",
  ],
  external: {
    href: "https://derevyna.fordaq.com/fordaq/srvFordaqReport/UkrWood+LLC_642294.html",
    logo: "/fordaq-logo-02.webp",
    alt: "Fordaq",
  },
};

const address = {
  postal: "79000",
  country: "ukrain",
  city: "lviv",
  street: "street",
};

function Footer() {
  const t = useTranslations("Index");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Products Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t(footerSections[0].titleKey)}</h4>
            <ul className={styles.linkList}>
              {footerSections[0].links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={styles.link}>
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificates Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t(footerSections[1].titleKey)}</h4>
            <ul className={styles.linkList}>
              {footerSections[1].links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={styles.link}>
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t("contactus")}</h4>
            <ul className={styles.contactList}>
              {contactInfo.phones.map((phone, index) => (
                <li key={index} className={styles.contactItem}>
                  <span className={styles.contactLabel}>{t(phone.label)}:</span>
                  <a href={`tel:${phone.number.replace(/\s/g, '')}`} className={styles.link}>
                    {phone.number}
                  </a>
                </li>
              ))}
              {contactInfo.emails.map((email, index) => (
                <li key={index} className={styles.contactItem}>
                  <a href={`mailto:${email}`} className={styles.link}>
                    {email}
                  </a>
                </li>
              ))}
              <li className={styles.externalLink}>
                <a 
                  href={contactInfo.external.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.logoLink}
                >
                  <Image
                    src={contactInfo.external.logo}
                    alt={contactInfo.external.alt}
                    width={120}
                    height={40}
                    className={styles.externalLogo}
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{t("findus")}</h4>
            <address className={styles.address}>
              <p>{address.postal}</p>
              <p>{t(address.country)}</p>
              <p>{t(address.city)}</p>
              <p>{t(address.street)}</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ZUBR-2000. {"All rights reserved."}
          </p>
          <Link href="/admin" className={styles.adminLink} aria-label="Admin">
            •
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
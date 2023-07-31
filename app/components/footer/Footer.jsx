'use client'
import React from "react";
import styles from "@/app/styles/footer.module.css";
import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";


function Footer() {
  const t = useTranslations("Index");

  return (
    <>
      <div role="img" aria-label="forest" className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.footer__col}>
              <ul>
                <h4>{t("ourproduct")}</h4>
                <li>
                  <Link    rel="preload" className={styles.footer__link} href="/ ">
                    {t("log")}
                  </Link>
                </li>
                <li>
                  <Link    rel="preload" className={styles.footer__link} href="/ ">
                  {t("lumber")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer__col}>
              <ul>
                <h4>{t("certificates")}</h4>
                <li>
                  <Link    rel="preload"
                    className={styles.footer__link}
                    href="/aboutus/certificates"
                  >
                    <Image
                      className={styles.logo}
                      src="/fsc__mini2.png"
                      alt="FSC"
                      width={121}
                      height={180}
                    />
                  </Link>
                </li>
               
              </ul>
            </div>
            <div className={styles.footer__col}>
              <ul>
                <h4>{t('contactus')}</h4>
                <li>
                  <p>{t('director')}: +38 067 674-58-43</p>
                </li>
                <li>
                  <p>{t('Manager')}: +38 097 136-20-00</p>
                </li>
                <li>
                  <a
                    className={styles.footer__link}
                    href="mailto:gremroman@gmail.com"
                  >
                    gremroman@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footer__link}
                    href="mailto:grem_roman@icloud.com"
                  >
                    grem_roman@icloud.com{" "}
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footer__link}
                    href="mailto:zubrzubr2000@gmail.com"
                  >
                    zubrzubr2000@gmail.com{" "}
                  </a>
                </li>
                <li>
                  <Link    rel="preload"
                    className={styles.footer__link}
                    href="https://derevyna.fordaq.com/fordaq/srvFordaqReport/UkrWood+LLC_642294.html"
                  >
                    {" "}
                    <Image
                      src="/fordaq-logo-02.webp"
                      alt="fordaq"
                      width={100}
                      height={30}
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer__col}>
              <ul>
                <h4>{t('findus')}</h4>
                <li>
                  <p>79024</p>
                </li>
                <li>
                  <p>Ukraine</p>
                </li>
                <li>
                  <p>m.Lviv</p>
                </li>
                <li>
                  <p>vul. Copernicus  20</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

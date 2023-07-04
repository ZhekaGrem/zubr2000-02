"use client";
import Link from "next-intl/link";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <div className={styles.link}>
        

        <div>
          <h1>{t("aboutus")}</h1>
          <div>
            <div></div>
            <h2>{t("certificates")}</h2>
          </div>
          <div>
            <div></div>
            <h2>{t("manufacturing")}</h2>
          </div>
          <div>
            {" "}
            <div></div>
            <h2>{t("quality")}</h2>
          </div>
        </div>
        <div>
          {" "}
          <div></div>
          <h1>{t("product")}</h1>
          <div>
            {" "}
            <div></div>
            <h2>{t("lumber")}</h2>
          </div>
          <div>
            {" "}
            <div></div>
            <h2>{t("log")}</h2>
          </div>
        </div>
        <div>
          {" "}
          <div></div>
          <h1>{t("contact")}</h1>
        </div>
      </div>
    </>
  );
}

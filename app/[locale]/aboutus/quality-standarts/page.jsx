"use client";
import React from "react";
import styles from "@/app/styles/quality-standarts.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

function QualityStandarts() {
  const t = useTranslations("Index");

  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.section__title} ${styles.big__title} `}>
              <span>{t("quality")} </span>
              <span>{t("quality-title-01")}</span>
            </div>
            <div className={`${styles.section__title}  ${styles.big__title}`}>
              <span>{t("quality-title-02")} </span>
            </div>
            <p>{t("quality-title-03")}</p>
          </div>
          <div className={styles.row}>
            <div className={`${styles.sub__section__title} `}>
              <span className={styles.mini__title}>
                {t("quality-title-05")} (grade A)
              </span>
              <p>{t("quality-title-04")}</p>
            </div>
            <div className={`${styles.sub__section__title} `}>
              <span className={styles.mini__title}>
                {t("quality-title-06")} (grade B)
              </span>
              <p>{t("quality-title-07")}</p>
            </div>
            <div className={`${styles.sub__section__title} `}>
              <span className={styles.mini__title}>
                {" "}
                {t("quality-title-08")}(grade C){" "}
              </span>
              <p>{t("quality-title-09")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.block__01}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.section__title}  ${styles.big__title}`}>
              <span>{t("quality-title-10")}</span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.row}>
                <div className={` ${styles.block__01__left} ${styles.row}`}>
                  <ul>
                    <li>А - {t("quality-title-12")} </li>
                    <li>h - {t("quality-title-13")}</li>
                    <span className={styles.bloc__title}>
                      {t("quality-title-14")}
                    </span>
                    <li>В - {t("quality-title-15")}</li>
                    <span className={styles.bloc__title}>
                      {t("quality-title-16")}
                    </span>
                    <li> {t("quality-title-17")}50%</li>
                    <li>Е1 - {t("quality-title-18")} 20 мм</li>
                    <li>Е3 - {t("quality-title-19")} 5мм</li>
                    <span className={styles.bloc__title}>
                      {t("quality-title-20")}
                    </span>
                    <li>Е2 - {t("quality-title-21")}</li>
                    <li>Е4 - {t("quality-title-22")}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <Image
                className={styles.adaptive__img}
                src="/brus.webp"
                width={450}
                height={300}
                alt="img4"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.block__01}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.section__title}  ${styles.big__title}`}>
              <span>{t("quality-title-23")}</span>
            </div>
            <div className={styles.row}>
              <Image
                src="/paleta.webp"
                className={styles.adaptive__img}
                width={550}
                height={300}
                alt="img4"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.row}>
                <div className={` ${styles.block__01__left} ${styles.row}`}>
                  <div className={styles.row}>
                    <div className={` ${styles.block__01__left} ${styles.row}`}>
                      <ul>
                        <span className={styles.bloc__title}>
                          1. {t("quality-title-25")}:
                        </span>
                        <li>{t("quality-title-26")}</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={` ${styles.block__01__left} ${styles.row}`}>
                      <ul>
                        <span className={styles.bloc__title}>
                          2. {t("quality-title-27")}:
                        </span>
                        <li>800*1200 мм</li>
                        <li>800*1200 мм</li>
                        <li>800*1200 мм</li>
                        <li>800*1200 мм</li>
                        <li>800*1200 мм</li>
                        <li>{t("quality-title-28")}</li>
                        <li>{t("quality-title-29")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={` ${styles.block__01__left} ${styles.row}`}>
                  <ul>
                    <span className={styles.bloc__title}>
                      3.{t("quality-title-30")}:
                    </span>
                    <li>{t("quality-title-31")}</li>
                    <li>{t("quality-title-32")}</li>
                    <li>{t("quality-title-33")}</li>
                  </ul>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.table}>
                  <span className={styles.bloc__title}>
                    4.{t("quality-title-34")}:{" "}
                  </span>

                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>
                      {" "}
                      {t("quality-title-35")}(мм)
                    </div>
                    <div className={styles.table__cell}>
                      {t("quality-title-36")} 800*... (мм)
                    </div>
                    <div className={styles.table__cell}>
                      {t("quality-title-37")}
                    </div>
                    <div className={styles.table__cell}>
                      {t("quality-title-38")}{" "}
                    </div>
                    <div className={styles.table__cell}>
                      {t("quality-title-39")}
                    </div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>420</div>
                    <div className={styles.table__cell}>1200</div>
                    <div className={styles.table__cell}>3 </div>
                    <div className={styles.table__cell}>2</div>
                    <div className={styles.table__cell}>
                      {t("quality-title-24")}
                    </div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>520-635</div>
                    <div className={styles.table__cell}>1200</div>
                    <div className={styles.table__cell}>2 </div>
                    <div className={styles.table__cell}>3</div>
                    <div className={styles.table__cell}>
                      {t("quality-title-24")}
                    </div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>710-970</div>
                    <div className={styles.table__cell}>1200</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>3</div>
                    <div className={styles.table__cell}>
                      {t("quality-title-24")}
                    </div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>1020-1260</div>
                    <div className={styles.table__cell}>1200</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>3</div>
                    <div className={styles.table__cell}>
                      {t("quality-title-24")}
                    </div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>1440-1500</div>
                    <div className={styles.table__cell}>1500</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>4</div>
                    <div className={styles.table__cell}>
                      {t("quality-title-24")}
                    </div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>1820</div>
                    <div className={styles.table__cell}>1800</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>5</div>
                    <div className={styles.table__cell}>
                      {t("quality-title-24")}
                    </div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>2120</div>
                    <div className={styles.table__cell}>2100</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>5</div>
                    <div className={styles.table__cell}>
                      {t("quality-title-24")}
                    </div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>2440</div>
                    <div className={styles.table__cell}>2400</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>6</div>
                    <div className={styles.table__cell}>
                      {t("quality-title-24")}
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${styles.block__01__left} ${styles.row}`}>
                <ul>
                  <span className={styles.bloc__title}>
                    5.{t("quality-title-40")} :
                  </span>
                  <li>{t("quality-title-41")}</li>
                  <li>{t("quality-title-42")}</li>
                  <li>{t("quality-title-43")}</li>
                  <li>{t("quality-title-44")}</li>
                  <li>{t("quality-title-45")}</li>
                </ul>
              </div>
              <div className={styles.row}>
                <div className={` ${styles.block__01__left} ${styles.row}`}>
                  <ul>
                    <span className={styles.bloc__title}>
                      6. {t("quality-title-46")}:
                    </span>
                    <li>{t("quality-title-47")}:</li>
                    <li>- {t("quality-title-48")}</li>
                    <li>- {t("quality-title-35")}</li>
                    <li>- {t("quality-title-49")}</li>
                    <li>- {t("quality-title-50")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <div className={styles.row}>
            <Link rel="preload" href="/aboutus/quality-standarts/cubaturnick">
              <div
                className={`${styles.section__title}  ${styles.section__title__cubaturnic} ${styles.big__title}`}
              >
                <span>{t("quality-title-51")}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default QualityStandarts;

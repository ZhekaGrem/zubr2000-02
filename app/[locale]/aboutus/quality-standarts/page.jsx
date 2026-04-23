'use client'
import React from "react";
import styles from "@/app/styles/page/quality-standarts.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import PageIntro from "@/app/components/PageIntro/PageIntro";


function QualityStandarts() {
  const t = useTranslations("Index");

  const palletSizes = [
    { w: "420", l: "1200", wc: "3", lc: "2" },
    { w: "520-635", l: "1200", wc: "2", lc: "3" },
    { w: "710-970", l: "1200", wc: "1", lc: "3" },
    { w: "1020-1260", l: "1200", wc: "1", lc: "3" },
    { w: "1440-1500", l: "1500", wc: "1", lc: "4" },
    { w: "1820", l: "1800", wc: "1", lc: "5" },
    { w: "2120", l: "2100", wc: "1", lc: "5" },
    { w: "2440", l: "2400", wc: "1", lc: "6" },
  ];

  const grades = [
    { letter: "A", title: t('quality-title-05'), body: t('quality-title-04') },
    { letter: "B", title: t('quality-title-06'), body: t('quality-title-07') },
    { letter: "C", title: t('quality-title-08'), body: t('quality-title-09') },
  ];

  return (
    <>
      <PageIntro
        title={t("quality")}
        imageSrc="/quality_hero.png"
        imageAlt={t("quality")}
      />

      {/* Intro + grades */}
      <section className={styles.section}>
        <div className={styles.container}>
          <header className={styles.sectionHead}>
            <span className={styles.kicker}>{t('quality-title-01')}</span>
            <h2 className={styles.sectionTitle}>{t('quality-title-02')}</h2>
            <p className={styles.sectionLead}>{t('quality-title-03')}</p>
          </header>

          <div className={styles.gradeGrid}>
            {grades.map((g) => (
              <article key={g.letter} className={styles.gradeCard}>
                <div className={styles.gradeBadge}>{g.letter}</div>
                <h3 className={styles.gradeTitle}>
                  {g.title} <span className={styles.gradeSub}>(grade {g.letter})</span>
                </h3>
                <p className={styles.gradeBody}>{g.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Acceptable defects */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <header className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{t('quality-title-10')}</h2>
          </header>

          <div className={styles.defectsGrid}>
            <figure className={styles.defectsMedia}>
              <Image
                src="/brus.webp"
                width={450}
                height={300}
                alt="img4"
                className={styles.defectsImg}
              />
            </figure>

            <div className={styles.defectsContent}>
              <ul className={styles.defList}>
                <li><span className={styles.defKey}>А</span><span className={styles.defVal}>{t('quality-title-12')}</span></li>
                <li><span className={styles.defKey}>h</span><span className={styles.defVal}>{t('quality-title-13')}</span></li>
              </ul>

              <h4 className={styles.groupLabel}>{t('quality-title-14')}</h4>
              <ul className={styles.defList}>
                <li><span className={styles.defKey}>В</span><span className={styles.defVal}>{t('quality-title-15')}</span></li>
              </ul>

              <h4 className={styles.groupLabel}>{t('quality-title-16')}</h4>
              <ul className={styles.defList}>
                <li><span className={styles.defKey}>—</span><span className={styles.defVal}>{t('quality-title-17')} 50%</span></li>
                <li><span className={styles.defKey}>Е1</span><span className={styles.defVal}>{t('quality-title-18')} 20 мм</span></li>
                <li><span className={styles.defKey}>Е3</span><span className={styles.defVal}>{t('quality-title-19')} 5мм</span></li>
              </ul>

              <h4 className={styles.groupLabel}>{t('quality-title-20')}</h4>
              <ul className={styles.defList}>
                <li><span className={styles.defKey}>Е2</span><span className={styles.defVal}>{t('quality-title-21')}</span></li>
                <li><span className={styles.defKey}>Е4</span><span className={styles.defVal}>{t('quality-title-22')}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pallet standards */}
      <section className={styles.section}>
        <div className={styles.container}>
          <header className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{t('quality-title-23')}</h2>
          </header>

          <figure className={styles.palletHero}>
            <Image
              src="/paleta.webp"
              width={550}
              height={300}
              alt="img4"
              className={styles.palletHeroImg}
            />
          </figure>

          <ol className={styles.specList}>
            <li className={styles.specItem}>
              <div className={styles.specIndex}>01</div>
              <div className={styles.specBody}>
                <h3 className={styles.specTitle}>{t('quality-title-25')}</h3>
                <ul className={styles.plainList}>
                  <li>{t('quality-title-26')}</li>
                </ul>
              </div>
            </li>

            <li className={styles.specItem}>
              <div className={styles.specIndex}>02</div>
              <div className={styles.specBody}>
                <h3 className={styles.specTitle}>{t('quality-title-27')}</h3>
                <ul className={styles.plainList}>
                  <li>800*1200 мм</li>
                  <li>800*1200 мм</li>
                  <li>800*1200 мм</li>
                  <li>800*1200 мм</li>
                  <li>800*1200 мм</li>
                  <li>{t('quality-title-28')}</li>
                  <li>{t('quality-title-29')}</li>
                </ul>
              </div>
            </li>

            <li className={styles.specItem}>
              <div className={styles.specIndex}>03</div>
              <div className={styles.specBody}>
                <h3 className={styles.specTitle}>{t('quality-title-30')}</h3>
                <ul className={styles.plainList}>
                  <li>{t('quality-title-31')}</li>
                  <li>{t('quality-title-32')}</li>
                  <li>{t('quality-title-33')}</li>
                </ul>
              </div>
            </li>

            <li className={styles.specItem}>
              <div className={styles.specIndex}>04</div>
              <div className={styles.specBody}>
                <h3 className={styles.specTitle}>{t('quality-title-34')}</h3>
                <div className={styles.tableWrap}>
                  <table className={styles.specTable}>
                    <thead>
                      <tr>
                        <th>{t('quality-title-35')} (мм)</th>
                        <th>{t('quality-title-36')} 800*... (мм)</th>
                        <th>{t('quality-title-37')}</th>
                        <th>{t('quality-title-38')}</th>
                        <th>{t('quality-title-39')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {palletSizes.map((r, i) => (
                        <tr key={i}>
                          <td>{r.w}</td>
                          <td>{r.l}</td>
                          <td>{r.wc}</td>
                          <td>{r.lc}</td>
                          <td>{t('quality-title-24')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </li>

            <li className={styles.specItem}>
              <div className={styles.specIndex}>05</div>
              <div className={styles.specBody}>
                <h3 className={styles.specTitle}>{t('quality-title-40')}</h3>
                <ul className={styles.plainList}>
                  <li>{t('quality-title-41')}</li>
                  <li>{t('quality-title-42')}</li>
                  <li>{t('quality-title-43')}</li>
                  <li>{t('quality-title-44')}</li>
                  <li>{t('quality-title-45')}</li>
                </ul>
              </div>
            </li>

            <li className={styles.specItem}>
              <div className={styles.specIndex}>06</div>
              <div className={styles.specBody}>
                <h3 className={styles.specTitle}>{t('quality-title-46')}</h3>
                <ul className={styles.plainList}>
                  <li>{t('quality-title-47')}:</li>
                  <li>— {t('quality-title-48')}</li>
                  <li>— {t('quality-title-35')}</li>
                  <li>— {t('quality-title-49')}</li>
                  <li>— {t('quality-title-50')}</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Cubaturnick CTA */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <Link href="/aboutus/quality-standarts/cubaturnick" className={styles.ctaCard} rel="preload">
            <span className={styles.ctaKicker}>→</span>
            <span className={styles.ctaTitle}>{t('quality-title-51')}</span>
            <span className={styles.ctaArrow} aria-hidden>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default QualityStandarts;

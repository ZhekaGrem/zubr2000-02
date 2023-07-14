"use client";
import Link from "next-intl/link";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const t = useTranslations("Index");
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    //start a interval that runs every 5srconds
    const interval = setInterval(() => {
      const radioElement = document.getElementById(`radio${counter}`);
      if (radioElement) {
        radioElement.checked = true;
        setCounter((prevCounter) => (prevCounter % 4) + 1);
      }
    }, 500000);
    //clean up the interval
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.slider}>
          <div className={styles.sliders}>
            <input
              type="radio"
              name="radio-btn"
              id="radio1"
              className={styles.radio1}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio2"
              className={styles.radio2}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio3"
              className={styles.radio3}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio4"
              className={styles.radio4}
            />
            <div className={`${styles.slide} ${styles.first} `}>
              <div className={` ${styles.row}`}>
                <div className={styles.kek}>
                  <div className={`${styles.pricing__plan}`}>
                    <div className={`${styles.plan__title}`}>OAK Board</div>
                    {/* <div className={`${styles.plan__price}`}>
                      $35.99 monthly
                    </div> */}
                    <ul className={`${styles.list}`}>
                    <Image
                  className={styles.info__img}
                  src="/test02.jpg"
                  width={270}
                  height={300}
                />
                    </ul>
                    <a href="" className={styles.btn}>
                      <span>SPECIFICATION</span>
                    </a>
                  </div>
                </div>
                <div className={`${styles.kek}`}>
                  <div className={`${styles.pricing__plan} `}>
                    <div className={`${styles.plan__title}`}>ASH Board</div>
                    
                    <ul className={`${styles.list}`}>
                    <Image
                  className={styles.info__img}
                  src="/test02.jpg"
                  width={270}
                  height={300}
                />
                    </ul>
                    <a href="" className={styles.btn}>
                      <span>SPECIFICATION</span>
                    </a>
                  </div>
                </div>
                <div className={styles.kek}>
                  <div className={`${styles.pricing__plan}`}>
                    <div className={`${styles.plan__title}`}>BIRCH board</div>
                    {/* <div className={`${styles.plan__price}`}>
                      $35.99 monthly
                    </div> */}
                    <ul className={`${styles.list}`}>
                    <Image
                  className={styles.info__img}
                  src="/test02.jpg"
                  width={270}
                  height={300}
                />
                    </ul>
                    <a href="" className={styles.btn}>
                      <span>SPECIFICATION</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.slide} `}>
              {" "}
              <Image src="/OAK-LOGS-02.webp" width={2000} height={600} />{" "}
            </div>
            <div className={`${styles.slide} `}>
              {" "}
              <Image src="/work-men-1.jpg" width={2000} height={600} />
            </div>
            <div className={`${styles.slide} `}>
              {" "}
              <Image src="/lumber-1.jpg" width={2000} height={600} />{" "}
            </div>
            <div className={styles.navigator__auto}>
              <div className={styles.navigator__auto__btn1}></div>
              <div className={styles.navigator__auto__btn2}></div>
              <div className={styles.navigator__auto__btn3}></div>
              <div className={styles.navigator__auto__btn4}></div>
            </div>
          </div>
          <div className={styles.navigator__manual}>
            <label
              htmlFor="radio1"
              className={styles.navigator__manual__btn}
            ></label>
            <label
              htmlFor="radio2"
              className={styles.navigator__manual__btn}
            ></label>
            <label
              htmlFor="radio3"
              className={styles.navigator__manual__btn}
            ></label>
            <label
              htmlFor="radio4"
              className={styles.navigator__manual__btn}
            ></label>
          </div>
        </div>

        <section className={`${styles.container} ${styles.test}`}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className={styles.row}>
                <Image
                  className={styles.info__img}
                  src="/test02.jpg"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className={`${styles.col} `}>
              <div className={`${styles.row} ${styles.test} `}>
                <div className={styles.section__title}>
                  <span>{t("aboutus")}</span>
                </div>
                <p>
                {t("title1")}
                </p>
                <p>
                {t("title2")}
                </p>
                <p>
                {t("title3")}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <div className={styles.section__title}>
              <div className={styles.row}>
                <span>{t("title4")}</span>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.test__02}>
                  <div className={styles.row}>
                    <ul className={styles.list}>
                      <li>{t("list1")}</li>
                      <li>{t("list2")}</li>
                      <li>{t("list3")}</li>
                      <li>{t("list4")}</li>
                      <li>
                      {t("list5")}
                      </li>
                    </ul>
                  </div>

                  <p>
                  {t("title5")}
                  </p>
                  <p>
                  {t("title6")}
                  </p>
                  <p>
                  {t("title7")}
                  </p>
                </div>
              </div>

              <div className={styles.col}>
                <Image
                  className={styles.info__img}
                  src="/test02.jpg"
                  width={555}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

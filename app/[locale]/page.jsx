"use client";
import Link from "next-intl/link";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const t = useTranslations("Index");
  // const [isActive, setIsActive] = useState(false);
  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    //start a interval that runs every 5srconds
    const interval = setInterval(() => {
      const radioElement = document.getElementById(`radio${counter}`);
      if (radioElement) {
        radioElement.checked = true;
        setCounter((prevCounter) => (prevCounter % 4) + 1);
      }
    }, 5000);
    //clean up the interval
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <>
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
          {/* <div className={`${styles.divkek} ${styles.otherClass} ${isActive ? styles.otherClass2 : ""}`} onClick={handleClick} > kek</div> */}
          <div className={`${styles.slide} ${styles.first}`}>
            {" "}
            <Image src="/wood-2.jpg" width={2000} height={600} />{" "}
          </div>
          <div className={`${styles.slide} `}>
            {" "}
            <Image src="/OAK-LOGS-02.webp" width={2000} height={600} />{" "}
          </div>
          <div className={`${styles.slide} `}>
            {" "}
            <Image src="/work-men-1.jpg" width={2000} height={600} />{" "}
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
<section className={styles.sec__01}>
  
<div className={styles.container}>
        <div className={styles.info__content}>
          <Image className={styles.info__img} src="/foto-director.jpeg"  width={400} height={400}/>
            <h3 className={styles.selction__title}>{t("aboutus")}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              impedit quos ut est, nisi nam necessitatibus itaque reprehenderit
              quod nulla fugiat maxime porro totam autem officia dolor.
              Pariatur, explicabo. Facilis sit dicta porro aspernatur tempore,
              aliquam aperiam itaque consequatur a sequi repellat aut? Quo
              facere odio dolorum corporis velit aut consequatur id culpa
              ducimus non, expedita quisquam praesentium deleniti possimus
              aspernatur sint quibusdam consectetur, atque nemo distinctio.
            </p>
          
        </div>
          <div className={styles.info}>
            <h4 className={styles.info__title}> </h4>
          </div>
        </div>
          <div>
            <h2>{t("certificates")}</h2>
          </div>
          <div>
            <div></div>
            <h2>{t("manufacturing")}</h2>
          </div>
          <div>
            <h2>{t("quality")}</h2>
          </div>
</section>
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
        
    </>
  );
}

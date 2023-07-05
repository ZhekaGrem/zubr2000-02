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
            <Image src="/wood-1.jpg" width={2000} height={600} />{" "}
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

      <div className={styles.container}>
        <div className={styles.info__content}>
          <div className={styles.info__img}> 
          <Image src="/foto-director.jpeg"  width={400} height={400}/></div>
          <div>
            <h3 className={styles.selction__title}>{t("aboutus")}</h3>
          </div>
          <div className={styles.info}>
            {" "}
            <h4 className={styles.info__title}></h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              impedit quos ut est, nisi nam necessitatibus itaque reprehenderit
              quod nulla fugiat maxime porro totam autem officia dolor.
              Pariatur, explicabo. Facilis sit dicta porro aspernatur tempore,
              aliquam aperiam itaque consequatur a sequi repellat aut? Quo
              facere odio dolorum corporis velit aut consequatur id culpa
              ducimus non, expedita quisquam praesentium deleniti possimus
              aspernatur sint quibusdam consectetur, atque nemo distinctio.
              Soluta iste, illum placeat saepe nulla doloribus minima itaque
              consectetur, voluptatem facere omnis nam dicta reprehenderit. Enim
              nam quod neque autem iure ipsa esse aspernatur eos repellat
              provident quibusdam corporis, nisi, vitae debitis reprehenderit
              voluptatem. Quam, nostrum! Praesentium dolorem expedita maiores
              qui hic reprehenderit iusto sequi? Blanditiis hic saepe itaque
              cumque ut? Blanditiis eum nesciunt fugit soluta omnis rerum
              consequatur consequuntur non, explicabo accusamus! Accusantium
              tenetur non voluptatum reiciendis quis minus esse consequuntur
              quidem, et in, quas excepturi facere. Mollitia inventore velit
              qui, minus rerum esse amet tempore sequi debitis obcaecati, totam
              voluptas possimus voluptates omnis? Facere dolor doloribus quidem
              explicabo. Sapiente laudantium repellendus fugiat distinctio
              placeat voluptatum? Explicabo reprehenderit aut suscipit quod quo
              sapiente! Eveniet officiis blanditiis, ratione eos soluta minus
              unde exercitationem odit, maxime placeat alias nemo molestias?
              Praesentium, explicabo voluptatum! Voluptates cupiditate velit
              tenetur architecto veniam repudiandae suscipit quos nesciunt,
              omnis nobis, ullam odio tempora, rem assumenda delectus quae
              similique ipsam amet? Optio possimus assumenda iusto omnis
              laboriosam eligendi libero expedita culpa quasi voluptas corporis
              incidunt est deleniti voluptatum nulla sit, quod magni aliquam
              totam ex dicta voluptatibus quo id. Impedit nobis similique
              placeat architecto voluptatibus consequatur magni exercitationem,
              accusamus necessitatibus quaerat, sapiente quisquam excepturi quis
              quidem cupiditate pariatur commodi eos praesentium incidunt libero
              dolore est? Esse id voluptates facilis minima consectetur,
              accusantium cumque, perferendis quis dolor nesciunt voluptatibus
              aliquam reprehenderit sed non repellendus quia odio distinctio et
              voluptatem consequuntur nihil possimus labore? Vel velit, sed vero
              ut illo, porro veritatis a autem ad magni cupiditate, obcaecati
              incidunt mollitia sapiente beatae voluptates nulla soluta
              laudantium iusto eaque! Perferendis inventore sint esse
              reprehenderit nulla ad quibusdam asperiores et nihil doloremque
              dolores, modi ut, id culpa nemo eaque consectetur. Perspiciatis, a
              odit aliquid earum nulla itaque atque voluptate consectetur nam
              tenetur illo, cupiditate aut veritatis cum, natus sapiente
              suscipit fugiat obcaecati eos. Debitis repellendus saepe nemo,
              temporibus accusamus porro tenetur, sunt deserunt a ex iste
              consequatur quaerat cumque minima. Est minima debitis quidem,
              officia sequi nam, nihil adipisci temporibus quo accusamus ex
              consequatur dolor repudiandae corporis modi distinctio dolore enim
              deleniti laborum numquam facere. Sint illo non iusto, illum,
              explicabo, quam at atque quae repellendus nemo aspernatur eveniet
              architecto blanditiis. Saepe obcaecati provident omnis, doloremque
              sit perferendis atque repellat accusantium vel possimus laboriosam
              sapiente ad voluptate fuga eius aspernatur vero voluptatibus in
              sed et sequi distinctio! Tenetur exercitationem ab ducimus eum
              impedit, dignissimos nihil harum laudantium vel cum incidunt.
              Atque tenetur necessitatibus cupiditate odio ut autem debitis
              aperiam deserunt totam quos nulla blanditiis, iste, ea delectus,
              vero voluptas. Possimus ducimus reiciendis quod sint, eum,
              temporibus beatae iure dolores non tenetur dolorum voluptatem!
            </p>
          </div>
          <div></div>
          <div>
            <div>
              {" "}
              <p>lorem200</p>
            </div>
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

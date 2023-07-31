import React from "react";
import styles from "@/app/styles/manufacturing-process.module.css";
import Image from "next/image";

function Certificates() {
  return (
    <>
      <div className={styles.manual__content}>
        <div className={styles.manual__title}>
          <ul className={styles.manual__title__mini}>
            <li>
              <div className={`${styles.big__title}`}>Виробничий процес</div>
              <p>
                У виробничому процесі ми використовуємо сучасне обладнання,
                передові технології обробки деревини та контролю якості.
                Контроль за якістю нашої продукції починається з моменту відбору
                дерева висококваліфікованими спеціалістами та триває протягом
                усього процесу обробки та сушіння.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <section>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className="row">
                <Image
                  src="/photo_product_3.jpg"
                  width={450}
                  height={300}
                  alt="imag3"
                />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text__block}>
                <div className={styles.section__title}>
                  <span>Відбір сировини</span>
                </div>
                <p>Вхідний контроль якості</p>
              
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className="row">
                <Image
                  alt="imag3"
                  src="/photo_product_4.jpg"
                  width={450}
                  height={300}
                />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text__block}>
                <div className={styles.section__title}>
                  <span>Склад сировини</span>
                </div>
                <p>
                  Після поступлення на склад, колоди розпилюють відповідно до
                  потрібних розмірів на сучаних деревообробних лініях,
                  зберігаючи оригінальну структуру самої деревини.
                </p>
               
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className="row">
                <Image
                  alt="imag3"
                  src="/photo_product_5.jpg"
                  width={450}
                  height={300}
                />
              </div>
            </div>
            <div className={styles.container}>
              <div cclassName={styles.text__block}>
                <div className={styles.section__title}>
                  <span>Деревообробна лінія
					 </span>
					 <span>SYC-520G</span>
                </div>
                <p>Контроль якості процесу обробки</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className={styles.text__block}>
                <Image
                  alt="img4"
                  src="/photo_product_7.jpg"
                  width={450}
                  height={300}
                />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text__block}>
                <div className={styles.section__title}>
                  <span>Сушка</span>
                </div>
                <p>
                  свіжорозпиляні пиломатеріали подаються в сушку, де
                  комп’ютеризована система контролює процес сушіння. Через
                  приблизно 50 днів пиломатеріали високої якості поступають на
                  склад та готові для відправки замовнику.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className="row">
                <Image
                  src="/pack-product.jpg"
                  width={450}
                  alt="imag3"
                  height={300}
                />
              </div>
            </div>
            <div className={styles.text__block}>
              <div className={styles.text__block}>
                <div className={styles.section__title}>
                  <span>Пакування</span>
                </div>
                <p>Контроль якості пакування</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className="row">
                <Image
                  src="/photo_product_6.jpg"
                  width={450}
                  alt="img4"
                  height={300}
                />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.text__block}>
                <div className={styles.section__title}>
                  <span>Склад готової </span>
				  <span>продукції</span>
                </div>
                <p>Контроль якості зберігання</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.container}>
        
         
          <div className={styles.section__title__2}>
            <span>
              Готові пиломатеріали пакуються на палєти за допомогою пластикових
              стяжок (стрічок) та фолій.
            </span>
          </div>
          <p>
            Ми суворо дотримуємось стандартів якості виробництва, зберігання та
            траспортування, зокрема ДСТУ EN 1315-2-2001 (ГОСТ-9462-88. "Вимоги
            до якості та розмірів лісоматеріалів") та інших технічних умов на
            пиломатеріали та сировину, забезпечуючи наших клієнтів високоякісною
            продукцією. Детальніше ознайомитись зі стандартами якості Ви можете
            завітавши в розділ стандарти якості.
          </p>
        </div>
      </section>
    </>
  );
}

export default Certificates;

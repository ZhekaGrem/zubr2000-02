import React from "react";
import styles from "./quality-standarts.module.css";
import Image from "next/image";
import Link from "next/link";

function qualityStandarts() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.section__title} ${styles.big__title} `}>
              <span>Стандарти якості </span>
              <span>ДСТУ EN 1315-2-2001 (ГОСТ-9462-88). ВИМОГИ ДО ЯКОСТІ ТА РОЗМІРІВ
              ЛІСОМАТЕРІАЛІВ</span>
            </div>

            
            <div className={`${styles.section__title}  ${styles.big__title}`}>
              <span>Фансировина </span>
            </div>
            <p>
              прямий стовбур свіжої рубки без косослою, запарювання, внутрішньої
              заболоні, гнилі, павукових та кільцевих тріщин, без роз та сучків,
              прострілів (морозних тріщин), подвійної серцевини, зміщення
              центра.
            </p>
          </div>

          <div className={styles.row}>
            <div className={`${styles.sub__section__title} `}>
              <span className={styles.mini__title}>1-й сорт (grade A)</span>
              <p>
                {" "}
                прямий стовбур, допускаються такі вади деревини: рози, тріщини
                розмірами до 1/20 діаметра відповідного торця, механічні
                пошкодження у вигляді зазубів, запилів, сколів та вирівів.{" "}
              </p>
            </div>
            <div className={`${styles.sub__section__title} `}>
              <span className={styles.mini__title}>2-й сорт (grade B)</span>
              <p>
                допускаються такі вади деревини: незначна кривизна стовбура,
                сучки здорові відкриті розмірами 4-7см, сучки порохняві
                розмірами до 3см, тріщини крім бокових та торцевих від всихання
                розмірами більше 1/5 до 1/3 діаметра відповідного торця.{" "}
              </p>
            </div>
            <div className={`${styles.sub__section__title} `}>
              <span className={styles.mini__title}>3-й сорт (grade C) </span>
              <p>
                допускаються такі вади деревини: кривизна проста розмірами –
                відношення стріли вигину в місці найбільшого викривлення до
                загальної довжини колоди більше 3% до 5%, сучки здорові відкриті
                розмірами 10-15см, тріщини крім бокових та торцевих від всихання
                розмірами більше 1/3 до ? діаметра відповідного торця.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.block__01}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.section__title}  ${styles.big__title}`}>
              <span>ТЕХНІЧНІ УМОВИ НА ПИЛОМАТЕРІАЛИ</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p> */}
              <div className={styles.row}>
                <div className={` ${styles.block__01__left} ${styles.row}`}>
                  <ul>
                    <li>А - широка лицьова сторона - повністю чиста.</li>
                    <li>h - висота бруска.</li>
                    <span className={styles.bloc__title}>
                      Чотири сторони, що прилягають до лицьової А повинні бути
                      не менш ніж наполовину (до 1/2 h) чистими.
                    </span>
                    <li>В - тильна сторона.</li>
                    <span className={styles.bloc__title}>
                      На тильній стороні В, а також на сторонах, що до неї
                      прилягають, допускаються наступні вади:
                    </span>
                    <li>білок - до 50%</li>
                    <li>Е1 - здорові сучки - до 20 мм</li>
                    <li>Е3 - чорні сучки - до 5мм</li>
                    <span className={styles.bloc__title}>Не допускаються:</span>
                    <li>Е2 - сучки сквозн</li>
                    <li>Е4 - серцевина.</li>
                  </ul>
                </div>
              </div>
              {/* 
              <div className={styles.row}>
                <div className={` ${styles.block__01__left} ${styles.row}`}>
                  <ul>
                    <span className={styles.bloc__title}>
                      customizable design
                    </span>
                    <li>branding</li>
                    <li>design &amp; copywriting</li>
                    <li>concept development</li>
                    <li>user experience</li>
                  </ul>
                </div>
              </div> */}
            </div>

            <div className={styles.col}>
              <Image src="/brus.jpg" width={555} height={415} />
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.block__01}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.section__title}  ${styles.big__title}`}>
              <span>ДУБ (КРУГЛЯК) СОРТ А.</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.row}>
                <div className={` ${styles.block__01__left} ${styles.row}`}>
                  <ul>
                    <span className={styles.bloc__title}>
                      ВИМОГИ ЩОДО ЯКОСТІ, РОЗМІРІВ, ІНСПЕКЦІЇ І ТРАНСПОРТУВАННЯ
                    </span>
                    <li>
                      Допускаються лише колоди зрізані з основи дерева (1-ий
                      кусок).
                    </li>
                    <li>
                      Колоди повинні бути прямі і циліндричні, річні кільця
                      рівномірні по всій площині, серцевина розміщена
                      максимальнопо середині.
                    </li>
                    <li>
                      Колоди сорту А меншої якості ніж колоди фанерної якості.
                    </li>
                    <li>Допускається небагато заболоні.</li>
                    <li>Не допускається гниль і вицвілі місця.</li>
                    <li>Не допускається подвійна серцевина.</li>
                    <li>Не допускаються щілини (тріщини) по кругу.</li>
                    <li>Допустима кривизна – 5 см для колоди довжиною 3 м.</li>
                    <span className={styles.bloc__title}>Сучки:</span>
                    <li>Допускаються тільки сучки на корі.</li>
                    <li>
                      На одну колоду допускається максимум 2 свіжі сучки (не
                      всохші) з максимальним діаметром 30 мм.
                    </li>
                    <li>Не допускаються гнилі сучки.</li>
                    <span className={styles.bloc__title}>Розміри:</span>
                    <li>
                      Діаметр: від 40см і більше (без кори) в меншому кінці
                      колоди
                    </li>
                    <li>Довжини: 50% партії від 2,6 до 3,9 м</li>
                    <li>Довжини: 50% партії від 4,0 до 4,5 м</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <Image src="/test02.jpg" width={555} height={365} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.block__01}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.section__title}  ${styles.big__title}`}>
              <span>ДУБ (КРУГЛЯК) ФАНЕРНОЇ ЯКОСТІ.</span>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.row}>
                <div className={` ${styles.block__01__left} ${styles.row}`}>
                  <ul>
                    <span className={styles.bloc__title}>
                      ВИМОГИ ЩОДО ЯКОСТІ, РОЗМІРІВ, ІНСПЕКЦІЇ І ТРАНСПОРТУВАННЯ
                    </span>
                    <li>
                      Допускаються лише колоди, що зрізані з основи дерева (1-ий
                      кусок).
                    </li>
                    <li>
                      Колоди прямі і циліндричні, річні кільця рівномірні по
                      всій площині, без видимих дефектів, серцевина розміщена
                      максимально посередині.
                    </li>
                    <li>Колоди без сучків або знаків на корі від сучків.</li>
                    <li>Допускається небагато заболоні.</li>
                    <li>Не допускається гниль і вицвілі місця.</li>
                    <li>Не допускається подвійна серцевина.</li>
                    <li>Не допускаються щілини (тріщини) по кругу.</li>
                    <span className={styles.bloc__title}>Розміри:</span>
                    <li>
                      Діаметр: від 40см і більше (без кори) в меншому кінці
                      колоди
                    </li>
                    <li>Довжини: від 2,5 до 3,0 м</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <Image src="/test02.jpg" width={555} height={365} />
            </div>
          </div>
        </div>
        
      </section> */}
      

      <section className={styles.block__01}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.section__title}  ${styles.big__title}`}>
              <span>ТЕХНІЧНІ УМОВИ НА ПАЛЄТИ ТА ПАЛЄТНЕ ПАКУВАННЯ.</span>
            </div>
          <div className={styles.col}>
              <Image src="/paleta.jpg" width={590} height={365} />
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
                          1. Загальна характеристика:
                        </span>
                        <li>
                          стійкий по 4-ох напрямках, технологічні отвори 100 мм.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={` ${styles.block__01__left} ${styles.row}`}>
                      <ul>
                        <span className={styles.bloc__title}>2. Розміри:</span>
                        <li>800*1200 мм</li>
                        <li>800*1200 мм</li>
                        <li>800*1200 мм</li>
                        <li>800*1200 мм</li>
                        <li>800*1200 мм</li>
                        <li>
                          Палєти 800*1800,  
                       800*2100, 800*2400 мм мають 2
                          перегородки посередині (75*75 мм),
                        </li>
                        <li>3 шт по довжині і 3 шт по
                          ширині.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.row}>
                  </div>
                </div>

              </div>
            </div>
            <div className={styles.row}>
                    <div className={` ${styles.block__01__left} ${styles.row}`}>
                      <ul>
                        <span className={styles.bloc__title}>3. Планки:</span>
                        <li>
                          Матеріал - дерева хвойних порід або береза. Вологість
                          до 20%, виготовлені з суцільного куска дерева.
                        </li>
                        <li>
                          Розміри планок: 20*25*800/1200 мм
                          (товщина*ширна*довжина).
                        </li>
                        <li>
                          Розміри планок на опорі: 20*35*800 мм (для елементів
                          420...635 мм).
                        </li>
                      </ul>
                    </div>
                <div className={styles.table}>
                  <span className={styles.bloc__title}>4. Склад:</span>

                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>Довжина (мм)</div>
                    <div className={styles.table__cell}>
                      розмір палєта 800*... (мм)
                    </div>
                    <div className={styles.table__cell}>
                      к-ть елементів в одному ряді
                    </div>
                    <div className={styles.table__cell}>к-ть прокладок </div>
                    <div className={styles.table__cell}>напрямок складання</div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>420</div>
                    <div className={styles.table__cell}>1200</div>
                    <div className={styles.table__cell}>3 </div>
                    <div className={styles.table__cell}>2</div>
                    <div className={styles.table__cell}>повздовж</div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>520-635</div>
                    <div className={styles.table__cell}>1200</div>
                    <div className={styles.table__cell}>2 </div>
                    <div className={styles.table__cell}>3</div>
                    <div className={styles.table__cell}>повздовж</div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>710-970</div>
                    <div className={styles.table__cell}>1200</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>3</div>
                    <div className={styles.table__cell}>повздовж</div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>1020-1260</div>
                    <div className={styles.table__cell}>1200</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>3</div>
                    <div className={styles.table__cell}>повздовж</div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>1440-1500</div>
                    <div className={styles.table__cell}>1500</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>4</div>
                    <div className={styles.table__cell}>повздовж</div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>1820</div>
                    <div className={styles.table__cell}>1800</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>5</div>
                    <div className={styles.table__cell}>повздовж</div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>2120</div>
                    <div className={styles.table__cell}>2100</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>5</div>
                    <div className={styles.table__cell}>повздовж</div>
                  </div>
                  <div className={styles.table__row}>
                    <div className={styles.table__cell}>2440</div>
                    <div className={styles.table__cell}>2400</div>
                    <div className={styles.table__cell}>1 </div>
                    <div className={styles.table__cell}>6</div>
                    <div className={styles.table__cell}>повздовж</div>
                  </div>
                </div>
              <div className={` ${styles.block__01__left} ${styles.row}`}>
                <ul>
                  <span className={styles.bloc__title}>5. Зв'язка:</span>
                  <li>
                    Палєт 800*1200 мм зв'язується 2+2 стрічками в кожному
                    напрямку.
                  </li>
                  <li>
                    Палєт 800*1500/1800 мм зв'язується мінімум 4 стрічками.
                  </li>
                  <li>
                    Палєт 800*2100/2400 мм зв'язується мінімум 5стрічками.
                  </li>
                  <li>
                    Не допускається зв'язування палєт за день до завантаження
                  </li>
                  <li>Суворо забороняється загортання в пластик.</li>
                </ul>
              </div>
            </div>
            <div className={styles.row}>
              <div className={` ${styles.block__01__left} ${styles.row}`}>
                <ul>
                  <span className={styles.bloc__title}>6. Маркування:</span>
                  <li>На картці, що прикріплюється до планки вказується:</li>
                  <li>- ширина</li>
                  <li>- довжина</li>
                  <li>- кількість елементів</li>
                  <li>- номер палєта.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.container}>
        <div className={styles.row}>
        <Link href="/aboutus/quality-standarts/cubaturnick">
         <div className={`${styles.section__title}   ${styles.big__title}`}>
              <span>КУБАТУРНИК</span>
            </div></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default qualityStandarts;

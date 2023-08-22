"use client";
import React,{  useState, useEffect,  } from "react";
import styles from "@/app/styles/offer.module.css";
import { client } from "@/app/lib/sanity";
import Link from "next-intl/link";
import OfferBlog from '@/app/components/offerblog/OfferBlog';

async function getData() {
  const query = `*[_type == "offer"] | order(publication_data_offer desc)`;
  const data = await client.fetch(query);
  return data;
}


export default  function Offers() {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setBlogData(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.contact__info}>
          <div className={styles.big__title}>
            <span>Запрошуємо до співпраці</span>
          </div>
          <div>
            <p>
              {" "}
              Ми, команда ZUBR-2000, відкриті до нових можливостей та важливих
              партнерств для створення високоякісних пиломатеріалів, які
              задовольнять найвищі стандарти якості та відповідають
              різноманітним потребам наших клієнтів.{" "}
            </p>
          </div>
          <div>
            <p>
              {" "}
              Ми хочемо розширити свої можливості та посилити наше виробництво
              пиломатеріалів обрізних та не обрізних. В цьому контексті ми
              шукаємо надійних та відданих партнерів, які поділяють нашу
              пристрасть до високоякісної продукції та бажання розвивати цю
              галузь разом з нами.
            </p>
          </div>
          <div>Чому варто обрати співпрацю з нами:</div>

          <div>
            <ul>
              <li>
                {" "}
                🌿 Багаторічний досвід: Ми маємо більше ніж 20 років досвіду у
                виробництві пиломатеріалів, що гарантує якість та надійність
                нашої продукції.
              </li>
              <li>
                🌳 Ресурсне забезпечення: Ми маємо доступ до різноманітних
                деревних ресурсів, що дає можливість виготовляти пиломатеріали з
                різних порід деревини.
              </li>

              <li>
                🌍 Екологічна відповідальність: Ми прагнемо до створення
                партнерств, які сприяють сталому лісовому господарству та
                збереженню навколишнього середовища.
              </li>
              <li>
                💡 Інновації: Ми завжди відкриті до нових ідей та підходів у
                виробництві та обробці деревини.
              </li>
              <li>
                🤝 Партнерство: Ми бачимо співпрацю як взаємовигідний обмін
                знань та ресурсів для досягнення спільних цілей.
              </li>
            </ul>
          </div>
          <p>
            Якщо ви прагнете знайти надійного та інноваційного партнера для
            спільного виробництва пиломатеріалів, ми готові почути вас!
            Запрошуємо вас до обговорення можливостей співпраці та створення
            вигідних партнерських зв'язків. З нетерпінням чекаємо на ваші ідеї
            та пропозиції. З найкращими побажаннями, Команда ZUBR-2000.
          </p>
          <div>
            <div className={styles.big__title}>

            Контактна інформація:
            </div>
            <div className={styles.col}>
            <p>Директор: +38 067 674-58-43</p>
            <p>Менеджер: +38 097 136-20-00</p>
            </div>
            <div className={styles.col}>
            <p>
              <a rel="preload" href="mailto:gremroman@gmail.com">
                gremroman@gmail.com
              </a>
            </p>
            <p>
              <a rel="preload" href="mailto:grem_roman@icloud.com">
                grem_roman@icloud.com{" "}
              </a>
            </p>
            <p>
              <a rel="preload" href="mailto:zubrzubr2000@gmail.com ">
                zubrzubr2000@gmail.com
              </a>
            </p>
          <Link    rel="preload"
                      href="/contact#contact"
                    >
                  <button className={styles.button__us}role="button">
                  <p>Написати нам</p>
                  </button>
                    </Link>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.big__title}>
            {" "}
            Ми шукаємо
          </div>
            <div>
            <OfferBlog data={blogData}/>

            </div>
        </div>
      </div>
    </>
  );
}

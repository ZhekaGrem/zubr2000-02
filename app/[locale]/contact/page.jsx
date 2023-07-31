"use client";
import React from "react";
import styles from "@/app/styles/contact.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Form from "@/app/components/form/Form";

function Contact() {
  const t = useTranslations("Index");
  return (
    <>
      <div className={styles.map__googl}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.65071898615327!2d24.026000169959726!3d49.83852247630111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6e2dfcebe5%3A0xeef81c2c400ff5b4!2z0LLRg9C70LjRhtGPINCa0L7Qv9C10YDQvdC40LrQsCwgMjAsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1690553981355!5m2!1sru!2sua"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    
      <div className={styles.contact}>
        <div className={styles.contact__info}>
          <ul>
            <div>
              <h1>CONTACT US</h1>
            </div>
            <p>Director:+38 067 674-58-43 </p>
            <p>Manager:+38 097 136-20-00 </p>
            <li>
              <Link    rel="preload" href="mailto:gremroman@gmail.com">gremroman@gmail.com</Link>
            </li>
            <li>
              <Link    rel="preload" href="mailto:grem_roman@icloud.com">
                grem_roman@icloud.com{" "}
              </Link>
            </li>
            <li>
              <Link    rel="preload" href="mailto:zubrzubr2000@gmail.com ">
                zubrzubr2000@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.contact__info}>
          <ul>
            <div>
              <h1>FIND US</h1>
            </div>
            <p>79000</p>
            <p>Ukraine</p>
            <p>m.Lviv</p>
            <p>vul. Copernicus  20</p>
          </ul>
        </div>
        <div className={styles.contact__info}>
          <Link    rel="preload" href="https://derevyna.fordaq.com/fordaq/srvFordaqReport/UkrWood+LLC_642294.html">
            <h1>FORDAQ.COM</h1>
            <Image
              src="/fordaq-logo-02.webp"
              width={190}
              height={100}
              alt="fordaq"
            />
          </Link>
        </div>
      </div>
      <div className={styles.contact__form}>
        <Form />
      </div>
    </>
  );
}

export default Contact;

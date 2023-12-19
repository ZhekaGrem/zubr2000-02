import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "@/app/styles/component/form.module.css";
import Input from "./Input";
import Button from "@/app/UI/button/button";
import emailjs from "@emailjs/browser";

const Form = () => {
  const t = useTranslations("Index");
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); // Стан для відстеження стану відправки форми
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zubr2000",
        "template_855qbjj",
        form.current,
        "mBp3HPR3Z6HamrQJZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Встановлюємо стан відправлення в true
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}> {t("contactus")} </div>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <Input typeValue="text" nameValue="name" span={t("name")} />

        <Input
          typeValue="tel"
          nameValue="tel"
          span={t("phone")}
        />
        <Input
          name="emails"
          typeValue="email"
          nameValue="email"
          span={t("email")}
        />
        <div className={styles.col__6}>
          <div className={styles.textarea_1}>
            <textarea name="message"></textarea>
          </div>
        </div>
        <div className={styles.btnblock}>
          <Button
            type="submit"
            value="Send"
            role="button"
            title_button={t("send")}
            title_button_sent_out={t("sentout")}
            isSubmitted={isSubmitted} // Передаємо стан відправлення до кнопки
          />
        </div>
      </form>
    </div>
  );
};

export default Form;

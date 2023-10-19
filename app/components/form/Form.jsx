"use client";
import React, { useState } from "react";
import styles from "@/app/styles/form.module.css";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import Input from "./Input";
import Button from "@/app/UI/button/button";

const Form = () => {
  const t = useTranslations("Index");

  const [isActive, setIsActive] = useState(false);


  const handleFocus = () => {
    setIsActive(true);
  };
 

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsActive(false);
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.text}> {t("contactus")} </div>
      <div className=""></div>
      <form className={styles.form}>
      <Input  span={t('name')}/>
      <Input span={t('company_name')}/>
      <Input span={t('phone')}/>
      <Input span={t('email')}/>

        

        <div className={styles.col__6}>
          <div className={styles.textarea_1}>
            <textarea
              type="text"
              name="message"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span className={` ${isActive ? styles.active : ""}`}>
              message
            </span>
          </div>
        </div>
     <div>
      
    <Button  title_button={t('send')}/>
     </div>
        
      </form>
    </div>
  );
};
//

export default Form;

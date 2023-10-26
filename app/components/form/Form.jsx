import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import styles from "@/app/styles/component/form.module.css";
import Input from "./Input";
import Button from "@/app/UI/button/button";
import emailjs from "@emailjs/browser";

const Form = () => {
  const t = useTranslations("Index");
  const { handleSubmit, control, setError, formState, reset } = useForm();
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      // Send email using emailjs
      const templateParams = {
        name: data.name,
        namecompany: data.namecompany,
        phone: data.phone,
        email: data.email,
        message: data.message,
      };

      await emailjs.send("zubr-2000", "template_og4evsg", templateParams, "-AlbKbVvCTP2xs6GJ");

      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}> {t("contactus")} </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          span={t("name")}
          name="name"
          control={control}
          rules={{
            required: t("enter_name_required"),
          }}
        />
        <Input
          span={t("company_name")}
          name="namecompany"
          control={control}
        />
        <Input
          span={t("phone")}
          name="telephone_name"
          control={control}
          rules={{
            required: t("enter_phone_required"),
            pattern: {
              value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: t("not_valid_phone"),
            },
          }}
        />
        <Input
          span={t("email")}
          name="firm_name"
          
          control={control}
          rules={{
            required: t("enter_email_required"),
            pattern: {
              value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: t("not_valid_email"),
            },
          }}
        />
        <div className={styles.col__6}>
          <div className={styles.textarea_1}>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  type="text"
                  
                  
                />
              )}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>
        </div>
        <div className={styles.btnblock}>
          <Button type="submit" value="Send" title_button={t("send")} />
        </div>
      </form>
    </div>
  );
};

export default Form;
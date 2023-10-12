'use client'
import React from "react";
import styles from "@/app/styles/form.module.css";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form"

const Form = () => {
  const t = useTranslations("Index");
  const { register,
     handleSubmit,
      formState: { errors }
     } = useForm();
  const onSubmit = data => console.log(data);
  console.log('form');
  
  return (
    <div className={styles.container}>
<div className={styles.text}> {t('contactus')} </div>
    
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    
      <input className={styles.input} type="text" placeholder="First name" {...register("Firstname", {required: true, maxLength: 80})} />
      <p>{errors.Firstname?.message}</p>
      <input className={styles.input} type="text" placeholder="Firm name" {...register("Firmname", {required: true, maxLength: 80})} />
      <p>{errors.Firmname?.message}</p>
      <input className={styles.input} type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <p>{errors.Email?.message}</p>
      <input className={styles.input} type="tel" placeholder="Mobile number" {...register("Mobilenumber", {required: true, minLength: 6, maxLength: 12})} />
      <p>{errors.Mobilenumber?.message}</p>
      <textarea {...register("writeyourmessage", {required: true})} />
      <p>{errors.writeyourmessage?.message}</p>

      <input type="submit" />
    </form>
    </div>
  );
}
//     <div className={styles.container }>
//     <div className={styles.form}>
//       <div className={styles.title}>
//         <h2 id="contact">{t('contactus')} </h2>
//       </div>
//       <form >
//       <div className={styles.form__row}>
//           <div className={`${styles["input__data"]} `}>
//             <input              />
//             <div className={styles.underline}></div>
//             <label htmlFor="name">{t('name')}</label>
//           </div>
//         </div>
//         <div className={styles.form__row}>

//           <div className={`${styles["input__data"]} `}>
//             <input name="namecompany" />
//             <div className={styles.underline}></div>
//             <label htmlFor="namecompany">{t('company_name')}</label>
//           </div>
//         </div>
// <section>
// <div className={styles.form__row}>
//           <div className={`${styles["input__data"]} `}>
//             <input
             
//               onBlur={(e) => blurHandler(e)}
             
//               name="phone"
//               type="text"
//             />
//             <div className={styles.underline}></div>
//             <label htmlFor="phone">{t('phone')}</label>
            
//           </div>     
// <div className={styles.form__row}>
// <div className={`${styles["input__data"]} `}>
//             <input   
//               onBlur={(e) => blurHandler(e)}
//               name="email"
//               type="text"
//             />
//             <div className={styles.underline}></div>
//             <label htmlFor="email">{t('email')}</label>
         
//           </div>
// </div>
//         </div>
// </section>


//         {/* Send button ->*/}
//         <div className={styles.form__row}>
//           <div
//             className={`
//           ${styles["input__data"]} 
//           ${styles["textarea"]}
//           `}
//           >
//             <textarea  name="message" rows="8" cols="80" required></textarea>
//             <br />
//             <div className={styles.underline}> </div>
//             <label htmlFor="message">{t('write_your_message')}</label>
//             <br />
//           </div>
//         </div>

//         <div
//           className={`
//         ${styles["form__row"]} 
//         ${styles["submit__btn"]}
//         `}
//         >
//           <button
//             // disabled={!formValid}
//             type="submit"
          
//             className={styles.button__send}
//             role="button"
//           >
//             {" "}
//             {t('send')}
//           </button>
//         </div>
//       </form>
//     </div>
//     </div>



export default Form;

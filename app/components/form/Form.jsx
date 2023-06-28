import React, { useRef } from 'react'
import styles from './form.module.css'
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"


const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zubr2000', 'template_855qbjj', form.current, 'mBp3HPR3Z6HamrQJZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    // const form = useRef();

    // const {
    //     register,
    //     errors,
    //     handleSubmit,
    //     reset,
    // } = useForm({
    //     mode: 'onBlur',
    //     defaultValues: {
    //         email: '',
    //         phone: '',
    //     }
    // });
    // const onSubmit = (data) => {
    //     reset();
    //     emailjs.sendForm('service_zubr2000', 'template_855qbjj', data, 'mBp3HPR3Z6HamrQJZ')
    //     .then((response) => {
    //         console.log('Email sent successfully!', response);
    //       })
    //       .catch((error) => {
    //         console.error('Error sending email:', error);
    //       });
    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };
    
   



    return (
    //     <div className={styles.form}>
    //         <div className={styles.title}>
    //             <h1>CONTACT US ONLINE</h1>
    //         </div>
    //         <form onSubmit={sendEmail} >
    //             <div className={styles.form__row}>
    //                 <div className={`${styles["input__data"]} `}>
    //                     <input name="name" 
                       
    //                     />
    //                     <div className={styles.underline}></div>
    //                     <label  htmlFor="name">
    //                         Name
    //                     </label>
    //                 </div>
    //                 <div className={`${styles["input__data"]} `}>
    //                     <input name='namecompany'
                     
    //                     />
    //                     <div className={styles.underline}></div>
    //                     <label htmlFor="namecompany">
    //                         Company  Name
    //                     </label>
    //                 </div>
    //             </div>
    //             <div className={styles.form__row}>
    //                 <div className={`${styles["input__data"]} `}>
    //                     <input name='phone'
    //                     //  {...register('phone', {
    //                     //     required: true,
    //                     //     pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    //                     // })}
    //                      />
    //                     <div className={styles.underline}></div>
    //                     <label htmlFor="phone">
    //                         Phone
    //                     </label>
    //                 </div>
    //                 <div className={`${styles["input__data"]} `}>
    //                     <input name='email' 
    //                     // {...register('email', {
    //                     //     required: true,
    //                     //     pattern: {
    //                     //         value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    //                     //         message: 'plz enter valid emaile ',
    //                     //     },
    //                     // })}
    //                      />
    //                     <div className={styles.underline}></div>
    //                     <label htmlFor="email">
    //                         Mail
    //                     </label>
    //                 </div>
    //             </div>

    //             <div className={styles.form__row}>
    //                 <div className={`${styles["input__data"]} ${styles["textarea"]}`}>
    //                     <textarea rows="8" cols="80" required></textarea>
    //                     <br />
    //                     <div className={styles.underline}></div>
    //                     <label htmlFor="message">Write your message</label>
    //                     <br />
    //                 </div>
    //             </div>
    //             <div className={`${styles["form__row"]} ${styles["submit__btn"]}`}>
    //                 <div className={styles.input__data}>
    //                     <div className={styles.inner} ></div>
    //                     <input type="submit" value="Send" />
    //                 </div>
    //             </div>
    //         </form>
    //     </div>
  

    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
    )
}

export default Form


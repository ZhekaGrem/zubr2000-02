import React, { useRef } from 'react'
import styles from './form.module.css'
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"


const Form = () => {

    const form =useRef();

    const {
        register,
        formState: {errors,},
        pattern,
        handleSubmit,
        reset,
    } = useForm({
        mode:'onBlur',
        defaultValues:{
email:'', 
phone:'',
        }
    });
    const onSubmit = (data, e) => {
        alert(JSON.stringify(data));
        reset();
        e.preventDefault();
    
        emailjs.sendForm('service_zubr2000', 'template_855qbjj', form.current, 'mBp3HPR3Z6HamrQJZ')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
          }, (error) => {
              console.log(error.text);
          });
    }

 

    return (
        <div className={styles.form}>
                <div className={styles.title}>
                <h1>CONTACT US ONLINE</h1>
                </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className={styles.form__row}>
                <div className={`${styles["input__data"]} `}>
                    <input {...register('name', {
                        required: false,
                    })} />
                    <div className={styles.underline}></div>
                    <label htmlFor="name">
                        Name
                    </label>
                </div>
                <div className={`${styles["input__data"]} `}>
                    <input {...register('name-company', {
                        required: false,
                    })} />
                    <div className={styles.underline}></div>
                    <label htmlFor="name-company">
                        Company  Name
                    </label>
                </div>
                    </div>
                    <div className={styles.form__row}>
                <div className={`${styles["input__data"]} `}>
                    <input {...register('phone', {
                        required: true,
                        pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, })} />
                    <div className={styles.underline}></div>
                    <label htmlFor="phone">
                        Phone
                    </label>
                </div>
                <div className={`${styles["input__data"]} `}>
                    <input {...register('email', {
                        required: true,
                        pattern:{
                            value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
message: 'plz enter valid emaile ',
                        },
                    })} />
                    <div className={styles.underline}></div>
                    <label  htmlFor="email">
                        Mail
                    </label>
                </div>
                        </div>

                <div className={styles.form__row}>
         <div className={`${styles["input__data"]} ${styles["textarea"]}`}>
            <textarea rows="8" cols="80" required></textarea>
            <br />
            <div className={styles.underline}></div>
            <label htmlFor="message">Write your message</label>
            <br />
            </div>
            </div>
               <div className={`${styles["form__row"]} ${styles["submit__btn"]}`}>
                <div className={styles.input__data}>
                    <div className={styles.inner} ></div>
                <input type='submit'  />
                </div>
               </div>
            </form>
        </div>)

}

export default Form
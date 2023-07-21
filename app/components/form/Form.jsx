import React, { useRef, useState, useEffect } from "react";
import styles from "@/app/styles/form.module.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  /* state for validate email */
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("ведіть емеіл");

  /* state for validate phone  */
  const [phone, setPhone] = useState("");
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState("ведіть телефон");

  //state for Name
  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  //state for NameFirm
  const [namecompany, setNamecompany] = useState("");
  const [namecompanyDirty, setNamecompanyDirty] = useState(false);
  //statr for massege
  const [message, setMessage] = useState("");
  const [messageDirty, setMessageDirty] = useState(false);

  /* for button active*/
  const [formValid, setFormValid] = useState(false);

  /* dont spam state*/
  const [canSubmit, setCanSubmit] = useState(true);

  /* this code for validarion for email no use library */
  const emailHandler = (e) => {
  setEmail(e.target.value);
    const regexpMeil =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regexpMeil.test(String(e.target.value).toLowerCase())) {
      setEmailError("not valide email");
    } else {
      setEmailError("");
    }
  };
  


  useEffect(() => {
    if (emailError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, phoneError]);

  /* this code for validarion for phone no use library */

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const regexpPhone =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!regexpPhone.test(String(e.target.value).toLowerCase())) {
      setPhoneError("not valide email");
    } else {
      setPhoneError("");
    }
  };
  const namecompanyHandler = (e) => {
    setNamecompany(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };

  /* this cod for emailjs send message -> zubrzubr2000@gmail.com */
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!canSubmit) {
      return; // Prevent multiple submissions within 5 seconds
    }

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
          setEmail(""); //reset email
          setPhone(""); //reset phone
          setName(""); //reset name
          setNamecompany(""); //reset  namecompany
          setMessage(""); //reset message
          
          setEmailDirty(false); //reset email
          setPhoneDirty(false); //reset phone
          setNamecompanyDirty(false); //reset namecompany
          setNameDirty(false); //reset name
          setMessageDirty(false); //reset message
        },
        (error) => {
          console.log(error.text);
        }
      );
    setCanSubmit(false);
    setTimeout(() => {
      setCanSubmit(true);
    }, 5000);
  };

  return (
    <div className={styles.form}>
      <div className={styles.title}>
        <h1>CONTACT US ONLINE</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        {/* Name Input ->*/}
        <div className={styles.form__row}>
          <div className={`${styles["input__data"]} `}>
            <input name="name"
            value={name} 
            onChange={(e) => nameHandler(e)}
            />
            <div className={styles.underline}></div>
            <label htmlFor="name">Name</label>
          </div>

          {/* CompanyName Input ->*/}
          <div className={`${styles["input__data"]} `}>
            <input onChange={namecompanyHandler} value={namecompany} name="namecompany" />
            <div className={styles.underline}></div>
            <label htmlFor="namecompany">Company Name</label>
          </div>
        </div>

        {/* Phone Input ->*/}
        <div className={styles.form__row}>
          <div className={`${styles["input__data"]} `}>
            <input
              value={phone}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => phoneHandler(e)}
              name="phone"
              type="text"
            />
            <div className={styles.underline}></div>
            <label htmlFor="phone">Phone</label>
            {phoneDirty && phoneError && <div>{phoneError} </div>}
          </div>

          {/* Email Input ->*/}
          <div className={`${styles["input__data"]} `}>
            <input
              value={email}
              onChange={(e) => emailHandler(e)}
              onBlur={(e) => blurHandler(e)}
              name="email"
              type="text"
            />
            <div className={styles.underline}></div>
            <label htmlFor="email">Mail</label>
            {/* {emailDirty && emailError && <div>{emailError} </div>} */}
          </div>
        </div>

        {/* Send button ->*/}
        <div className={styles.form__row}>
          <div
            className={`
          ${styles["input__data"]} 
          ${styles["textarea"]}
          `}
          >
            <textarea onChange={messageHandler} value={message}  name="message" rows="8" cols="80" required></textarea>
            <br />
            <div className={styles.underline}> </div>
            <label htmlFor="message">Write your message</label>
            <br />
          </div>
        </div>

        <div
          className={`
        ${styles["form__row"]} 
        ${styles["submit__btn"]}
        `}
        >
          <button
            disabled={!formValid}
            type="submit"
            value="Send"
            className={styles.button__send}
            role="button"
          >
            {" "}
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

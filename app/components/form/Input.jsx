import React,{useState} from 'react'
import styles from "@/app/styles/form.module.css";

export default function Input(props) {
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
    <div className={styles.input_1}>
    <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
    <span className={` ${isActive ? styles.active : ""}`}>
    {props.span}
    </span>
  </div>
  )
}


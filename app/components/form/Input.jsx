import React, { useState } from "react";
import styles from "@/app/styles/component/form.module.css";

export default function Input(props) {

  const { nameValue, typeValue, span } = props;
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
      <input
        name={nameValue}
        type={typeValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <span className={` ${isActive ? styles.active : ""}`}>{span}</span>
    </div>
  );
}

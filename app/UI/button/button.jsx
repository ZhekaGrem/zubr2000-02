import React from "react";
import styles from "@/app/styles/UI/button.module.css";

function Button(props) {
  return (
    <button
      disabled={props.disabledValue || props.isSubmitted} // Встановлюємо кнопку відключеною, якщо відправка вже була здійснена
      className={styles.btn}
      type="submit"
      onClick={props.onClickB}
    >
      {props.isSubmitted ? props.title_button_sent_out : props.title_button}
    </button>
  );
}

export default Button;
// Button.js
import React from 'react';
import styles from '@/app/styles/UI/button.module.css'; // Import your CSS module

 function Button(props) {

  return (
    <button className={styles.btn} type="submit">
     {props.title_button}
    </button>
  );
}


export default Button
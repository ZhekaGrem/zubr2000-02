import React,{useEffect,useState} from 'react'
import styles from '@/app/styles/slider.module.css'
import Image from 'next/image';


const Slider = () => {
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        //start a interval that runs every 5srconds
        const interval = setInterval(() => {
          const radioElement = document.getElementById(`radio${counter}`);
          if (radioElement) {
            radioElement.checked = true;
            setCounter((prevCounter) => (prevCounter % 4) + 1);
          }
        }, 8000);
        //clean up the interval
        return () => {
          clearInterval(interval);
        };
      }, [counter]);
  return (
    
    <div className={styles.slider}>
          <div className={styles.sliders}>
            <input
              type="radio"
              name="radio-btn"
              id="radio1"
              className={styles.radio1}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio2"
              className={styles.radio2}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio3"
              className={styles.radio3}
            />
            <input
              type="radio"
              name="radio-btn"
              id="radio4"
              className={styles.radio4}
            />
            <div className={`${styles.slide} ${styles.first} `}>
            <Image src="/work-men-1.jpg" width={2000} height={600} />
            </div>
            <div className={`${styles.slide} `}>
              {" "}
              <Image src="/work-men-1.jpg" width={2000} height={600} />{" "}
            </div>
            <div className={`${styles.slide} `}>
              {" "}
              <Image src="/work-men-1.jpg" width={2000} height={600} />
            </div>
            <div className={`${styles.slide} `}>
              {" "}
              <Image src="/work-men-1.jpg" width={2000} height={600} />{" "}
            </div>
            <div className={styles.navigator__auto}>
              <div className={styles.navigator__auto__btn1}></div>
              <div className={styles.navigator__auto__btn2}></div>
              <div className={styles.navigator__auto__btn3}></div>
              <div className={styles.navigator__auto__btn4}></div>
            </div>
          </div>
          <div className={styles.navigator__manual}>
            <label
              htmlFor="radio1"
              className={styles.navigator__manual__btn}
            ></label>
            <label
              htmlFor="radio2"
              className={styles.navigator__manual__btn}
            ></label>
            <label
              htmlFor="radio3"
              className={styles.navigator__manual__btn}
            ></label>
            <label
              htmlFor="radio4"
              className={styles.navigator__manual__btn}
            ></label>
          </div>
        </div>
  )
}

export default Slider
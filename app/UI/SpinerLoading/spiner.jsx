import styles from "@/app/styles/UI/spiner.module.css";

const Spiner = () => {
  return (
    <>
      <div className={styles.spinWrap}>
        <div className={`${styles.spin} ${styles.spin2}`}></div>
      </div>
    </>
  );
};

export default Spiner;

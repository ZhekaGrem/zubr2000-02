import React from "react";
import Image from "next/image";
import styles from "./PageIntro.module.css";

function PageIntro({ caps, title, lead, imageSrc, imageAlt, imagePriority = false }) {
  return (
    <section className={styles.intro}>
      <div className={styles.text}>
        {caps && <div className={styles.caps}>{caps}</div>}
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
      {imageSrc && (
        <div className={styles.imageWrap}>
          <Image
            src={imageSrc}
            alt={imageAlt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={imagePriority}
            className={styles.image}
          />
        </div>
      )}
    </section>
  );
}

export default PageIntro;

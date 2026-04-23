"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Lightbox.module.css";

function Lightbox({ images, initialIndex = 0, onClose }) {
  const [idx, setIdx] = useState(initialIndex);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [images.length]);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close">×</button>
      <button type="button" className={`${styles.nav} ${styles.navPrev}`} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>
      <div className={styles.imageBox} onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[idx].src}
          alt={images[idx].alt || ""}
          width={1600}
          height={1067}
          sizes="90vw"
          style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "86vh" }}
        />
      </div>
      <button type="button" className={`${styles.nav} ${styles.navNext}`} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>
      <div className={styles.counter}>{idx + 1} / {images.length}</div>
    </div>
  );
}

export default Lightbox;

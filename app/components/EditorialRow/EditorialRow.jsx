"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./EditorialRow.module.css";
import Lightbox from "@/app/components/Lightbox/Lightbox";

function EditorialRow({ index, reverse = false, images = [], title, body, extraChips = [] }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isGallery = images.length > 1;

  return (
    <>
      <div className={`${styles.row} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.media}>
          {isGallery ? (
            <div className={styles.gallery}>
              <button type="button" className={styles.galleryMain} onClick={() => setLightboxIndex(0)}>
                <Image src={images[0].src} alt={images[0].alt || ""} fill sizes="(max-width: 768px) 100vw, 40vw" />
              </button>
              <div className={styles.gallerySmall}>
                {images.slice(1).map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    className={styles.galleryThumb}
                    onClick={() => setLightboxIndex(i + 1)}
                  >
                    <Image src={img.src} alt={img.alt || ""} fill sizes="(max-width: 768px) 50vw, 20vw" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.singleImage}>
              <Image
                src={images[0].src}
                alt={images[0].alt || ""}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.index}>{String(index).padStart(2, "0")}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.body}>{body}</p>
          {extraChips.length > 0 && (
            <div className={styles.chips}>
              {extraChips.map((chip) => (
                <span key={chip} className={styles.chip}>{chip}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

export default EditorialRow;

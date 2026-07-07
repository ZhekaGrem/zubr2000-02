"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Lightbox from "@/app/components/Lightbox/Lightbox";
import Reveal from "@/app/components/Reveal/Reveal";
import styles from "@/app/styles/page/certificates.module.css";

const CERTS = [
  {
    id: "trade",
    cover: "/certificate-trade.webp",
    titleKey: "cert_trade_title",
    meta: "Trade Leaders' Club · 2006",
    images: ["/certificate-trade.webp"],
  },
  // FSC-сертифікат наразі відсутній (не чинний) — тимчасово прибрано з галереї.
  // Повернути, коли сертифікацію буде поновлено (файли ZUBR2000-1/2.webp на місці).
  // {
  //   id: "fsc",
  //   cover: "/ZUBR2000-1.webp",
  //   titleKey: "cert_fsc_title",
  //   meta: "FSC®",
  //   images: ["/ZUBR2000-1.webp", "/ZUBR2000-2.webp"],
  // },
];

function Certificates() {
  const t = useTranslations("Index");
  const [lightbox, setLightbox] = useState(null);

  const open = (cert) =>
    setLightbox({
      images: cert.images.map((src) => ({ src, alt: t(cert.titleKey) })),
    });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal as="ul" className={styles.grid}>
          {CERTS.map((c) => (
            <li key={c.id} className={styles.card}>
              <button
                type="button"
                className={styles.thumbBtn}
                onClick={() => open(c)}
                aria-label={t(c.titleKey)}
              >
                <span className={styles.thumb}>
                  <Image
                    src={c.cover}
                    alt={t(c.titleKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.thumbImg}
                  />
                  {c.images.length > 1 && (
                    <span className={styles.pages}>{c.images.length}</span>
                  )}
                  <span className={styles.zoom} aria-hidden>
                    ⤢
                  </span>
                </span>
                <span className={styles.caption}>
                  <span className={styles.cardTitle}>{t(c.titleKey)}</span>
                  <span className={styles.cardMeta}>{c.meta}</span>
                </span>
              </button>
            </li>
          ))}
        </Reveal>
      </div>

      {lightbox && (
        <Lightbox images={lightbox.images} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}

export default Certificates;

import React from 'react'
import styles from "@/app/styles/component/offerpost.module.css";
 

function OfferBlog({ data }) {
  return (
    <div className={styles.home__page}>
      {data.map((offer) => (
        <div key={offer._id} className={styles.mini__blog__post}>
          <h2>{offer.meta_title_offer}</h2>
          <p>{offer.body_text_offer}</p>
          <p className={styles.data}>{offer.publication_data_offer}</p>
        </div>
      ))}
    </div>
  );
}

export default OfferBlog;








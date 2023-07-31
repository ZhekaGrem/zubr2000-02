import React from 'react'
import styles from "@/app/styles/minipost.module.css";
 

function MiniBlog({ data }) {
  return (
    <div className={styles.home__page}>
      {data.map((post) => (
        <div key={post._id} className={styles.mini__blog__post}>
          <h2>{post.meta_title}</h2>
          <p>{post.publication_data}</p>
        </div>
      ))}
    </div>
  );
}

export default MiniBlog;








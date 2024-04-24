import React from 'react'
import styles from "@/app/styles/component/minipost.module.css";




function MiniBlog({ data }) {
  return (
    <ul className={styles.home__page}>
      {data.map((post) => (
        <li key={post._id} className={styles.mini__blog__post}>
          <span>{post.publication_data}</span>
          <p >{post.meta_title}</p>
        </li>
      ))}
    </ul>
  );
}


export default MiniBlog;








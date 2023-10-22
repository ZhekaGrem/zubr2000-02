import React from 'react'
import styles from '@/app/styles/news.module.css';
 

function NewsBlog({ data }) {
  return (
    <div className={styles.home__page}>
      {data.map((post) => (
        <div key={post._id} className={styles.blog}>
          <h2>{post.meta_title}</h2>
          <p>{post.body_text}</p>
          <p className={styles.data}>{post.publication_data}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsBlog;








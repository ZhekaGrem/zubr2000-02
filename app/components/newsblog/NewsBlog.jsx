import React from 'react'
import styles from "@/app/styles/page/news.module.css";
 

function NewsBlog({ data, emptyText }) {
  if (!data || data.length === 0) {
    return <div className={styles.empty}>{emptyText}</div>;
  }
  return (
    <div className={styles.list}>
      {data.map((post) => (
        <article key={post._id} className={styles.item}>
          <div className={styles.itemDate}>{post.publication_data}</div>
          <div className={styles.itemBody}>
            <h2 className={styles.itemTitle}>{post.meta_title}</h2>
            <p className={styles.itemText}>{post.body_text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default NewsBlog;








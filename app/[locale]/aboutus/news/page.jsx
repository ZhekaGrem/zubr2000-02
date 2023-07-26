import React from "react";
import styles from "@/app/styles/news.module.css";
import { client } from "@/app/lib/sanity";

async function getData() {
  const query = `*[_type == "post"] | order(publication_data desc)`;
  const data = await client.fetch(query);
  return data;
}

export default async function News() {
  const data = await getData();

  return (
    <>
      <section className={styles.body}>
        <div className={styles.App}>
          <div className={styles.blog__container}>
            {data.map((post) => (
              <div key={post._id} className={styles.blog}>
                <h2>{post.meta_title}</h2>
                <p>{post.body_text}</p>
                <p>{post.publication_data}</p>
              </div>
            ))}
           
          
          </div>
        </div>
      </section>
    </>
  );
}


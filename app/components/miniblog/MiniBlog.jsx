import React from 'react'
import styles from "@/app/styles/minipost.module.css";
import { client } from "@/app/lib/sanity";


async function getData() {
  const query = `*[_type == "post"] | order(publication_data desc)`;
  const data = await client.fetch(query);
  return data;
}


export default async function MiniBlog  ()  {
  const data = await getData();

  return (
    <div className={styles.home__page}>
      {/* Render the mini blog posts */}
      {data.map((post) => (
        <div key={post._id} className={styles.mini__blog__post}>
          <div>{post.meta_title}</div>
          <div>{post.publication_data}</div>
        </div>
      ))}
    </div>
  )
}


import React from 'react'
import styles from "@/app/styles/component/minipost.module.css";
import { Source_Sans_3 } from "next/font/google";

export const sans = Source_Sans_3({
  weight: "300",
  display: "swap",
  subsets: ["latin"],
  variable:"--font-source"
});

function MiniBlog({ data }) {
  return (
    <div className={styles.home__page}>
      {data.map((post) => (
        <div key={post._id} className={styles.mini__blog__post}>
          <span>{post.publication_data}</span>
          <p className={sans.className}>{post.meta_title}</p>
        </div>
      ))}
    </div>
  );
}

export default MiniBlog;








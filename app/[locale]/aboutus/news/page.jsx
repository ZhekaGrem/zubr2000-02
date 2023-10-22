'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/app/styles/news.module.css';
import { client } from '@/app/lib/sanity';
import NewsBlog from '@/app/components/newsblog/NewsBlog';

async function getData() {
  // eslint-disable-next-line quotes
  const query = `*[_type == 'post'] | order(publication_data desc)`;
  const data = await client.fetch(query);
  return data;
}

export default function News() {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setBlogData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <section className={styles.body}>
        <div className={styles.App}>
          <div className={styles.blog__container}>
            <NewsBlog data={blogData} />
          </div>
        </div>
      </section>
    </>
  );
}

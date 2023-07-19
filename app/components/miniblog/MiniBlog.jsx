import React from 'react'
import styles from "./minipost.module.css";

const blogPosts = [
    {
      title: 'Blog Post 1',
      timestamp: 'July 19, 2023',
    },
    {
      title: 'Blog Post 2',
      timestamp: 'July 20, 2023',
    },
    {
      title: 'Blog Post 2',
      timestamp: 'July 20, 2023',
    },
    {
      title: 'Blog Post 2',
      timestamp: 'July 20, 2023',
    },
    {
      title: 'Blog Post 2',
      timestamp: 'July 20, 2023',
    },
    {
      title: 'Blog Post 2',
      timestamp: 'July 20, 2023',
    },
    {
      title: 'Blog Post 2',
      timestamp: 'July 20, 2023',
    },
    {
      title: 'Blog Post 2',
      timestamp: 'July 20, 2023',
    },
    {
      title: 'Blog Post 2',
      timestamp: 'July 20, 2023',
    },
    {
      title: 'Blog Post 2',
      timestamp: 'July 20, 2023',
    },
    // Add more blog posts as needed
  ];
const MiniBlog = () => {
  return (
    <div className={styles.home__page}>
      {/* Render the mini blog posts */}
      {blogPosts.map((post, index) => (
        <div key={index} className={styles.mini__blog__post}>
          <h3>{post.title}</h3>
          <p>{post.timestamp}</p>
        </div>
      ))}
    </div>
  )
}

export default MiniBlog
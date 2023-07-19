import React from 'react'
import styles from './news.module.css'
import Image from "next/image";


const blogs = [
	{
	  id: 1,
	  title: 'Заголовок блога 1',
	  body: 'Текст блога 1...',
	  time: '2023-07-19 12:34',
	},
	{
	  id: 2,
	  title: 'Заголовок блога 2',
	  body: 'Текст блога 2   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi facilis vel adipisci ipsa optio incidunt nobis rerum sequi dignissimos, fuga amet unde dolore pariatur dolor recusandae nostrum! Mollitia iure qui molestias nobis soluta dolorum, excepturi voluptate cupiditate accusamus nisi pariatur, nostrum incidunt! Quas ducimus veritatis a quod sapiente voluptatibus autem. Sapiente voluptas alias possimus nostrum, ipsam voluptates odit, fugit eum temporibus quisquam eveniet ea doloribus eos maxime explicabo magni obcaecati quia assumenda beatae. Quaerat aspernatur ipsam reiciendis exercitationem optio. Nemo, nobis delectus maxime hic quos vero voluptatem distinctio porro amet ex debitis non explicabo pariatur cum, dignissimos perspiciatis nostrum ea nam dolorem magnam asperiores nihil? Ratione rerum et eos harum nihil natus quisquam temporibus perferendis cumque inventore similique, dolorum at sed, debitis vel qui? Repellendus tempore iusto dolore ducimus nam dolor soluta dolores exercitationem rerum, modi corporis sit voluptatibus magnam animi porro minima maxime omnis, eum quidem accusantium. Culpa sint blanditiis necessitatibus hic officia, magni dolorem maiores perferendis voluptatibus nemo rem repudiandae ab beatae aliquid sapiente, architecto molestiae quis, mollitia nihil iusto! Dolor beatae ad ex, eligendi ratione tenetur officia. Unde omnis nam voluptatum dicta laudantium quidem quis minima numquam eum vel. Aperiam placeat excepturi dolor. Accusamus, earum neque.sadfgsretfgtfeeeeeeere ',
	  time: '2023-07-19 13:45',
	},
	// Добавьте другие блоги по аналогии
  ]

function Lumber() {
    return (
        <>
        <section className={styles.body}>
		<div className={styles.App}>
      <div className={styles.blog__container}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.blog}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>{blog.time}</p>
          </div>
        ))}
      </div>
    </div>
                   </section>
        
       
        
        </>
    )
}

export default Lumber

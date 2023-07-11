"use client"
import React, { useState } from 'react'
import {useTranslations} from 'next-intl';
import styles from './aboutus.module.css'

function AboutUs() {
  const[add, setAdd]=useState();
  const t = useTranslations('Index');

  return (
    <>
    <section>
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.wi__41}>
					<div className={styles.section__title} >
						<span>about us</span>
						<p class="montserrat-text uppercase">we are awesome</p>
					</div>

					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
        <div class="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
					<div className={`${styles.pricing__plan}`}>
          <div className={`${styles.plan__title}`}>basic</div>
						<div className= {`${styles.plan__price}`}>$35.99 monthly</div>
						<ul className={`${styles.list}`}>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Consectetuer adipiscing elit</li>
							<li>Sed diam nonummy</li>
							<li>Nibh euismod tincidunt</li>
							<li>Ut laoreet dolore</li>
							<li>Magna aliquam erat volutpat</li>
						</ul>
						<a href="" className={styles.btn}><span>get started</span></a>
					</div>
				</div>
        <div class="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
					<div className={`${styles.pricing__plan}`}>
          <div className={`${styles.plan__title}`}>basic</div>
						<div className= {`${styles.plan__price}`}>$35.99 monthly</div>
						<ul className={`${styles.list}`}>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Consectetuer adipiscing elit</li>
							<li>Sed diam nonummy</li>
							<li>Nibh euismod tincidunt</li>
							<li>Ut laoreet dolore</li>
							<li>Magna aliquam erat volutpat</li>
						</ul>
						<a href="" className={styles.btn}><span>get started</span></a>
					</div>
				</div>
        <div class="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
					<div className={`${styles.pricing__plan}`}>
          <div className={`${styles.plan__title}`}>basic</div>
						<div className= {`${styles.plan__price}`}>$35.99 monthly</div>
						<ul className={`${styles.list}`}>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Consectetuer adipiscing elit</li>
							<li>Sed diam nonummy</li>
							<li>Nibh euismod tincidunt</li>
							<li>Ut laoreet dolore</li>
							<li>Magna aliquam erat volutpat</li>
						</ul>
						<a href="" className={styles.btn}><span>get started</span></a>
					</div>
				</div>
        <div class="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
					<div className={`${styles.pricing__plan}`}>
          <div className={`${styles.plan__title}`}>basic</div>
						<div className= {`${styles.plan__price}`}>$35.99 monthly</div>
						<ul className={`${styles.list}`}>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Consectetuer adipiscing elit</li>
							<li>Sed diam nonummy</li>
							<li>Nibh euismod tincidunt</li>
							<li>Ut laoreet dolore</li>
							<li>Magna aliquam erat volutpat</li>
						</ul>
						<a href="" className={styles.btn}><span>get started</span></a>
					</div>
				</div>
        
				<div className={styles.wi__41}>
					<div className={styles.section__title} >
						<span>what we do</span>
						<p class="montserrat-text uppercase">creative & digital</p>
					</div>

					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
        <div class="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
					<div className={`${styles.pricing__plan}`}>
          <div className={`${styles.plan__title}`}>basic</div>
						<div className= {`${styles.plan__price}`}>$35.99 monthly</div>
						<ul className={`${styles.list}`}>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Consectetuer adipiscing elit</li>
							<li>Sed diam nonummy</li>
							<li>Nibh euismod tincidunt</li>
							<li>Ut laoreet dolore</li>
							<li>Magna aliquam erat volutpat</li>
						</ul>
						<a href="" className={styles.btn}><span>get started</span></a>
					</div>
				</div>
			</div>
		</div>
	</section></>
  )
}

export default AboutUs
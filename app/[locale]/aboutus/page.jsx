"use client"
import React, { useState } from 'react'
import {useTranslations} from 'next-intl';
import styles from './aboutus.module.css'
import Image from "next/image";


function AboutUs() {
  const[add, setAdd]=useState();
  const t = useTranslations('Index');

  return (
    <>
	  <section>
		<div className={`${styles.container} ${styles.test}`}> 
          <div className={styles.block}>
            <div className={styles.col__5}>
              <div className={styles.row}>
                <Image
                  className={styles.info__img}
                  src="/test02.jpg"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className={`${styles.col} `}>
              <div className={`${styles.row} ${styles.test} `}>
                <div className={styles.section__title}>
                  <span>{t("aboutus")}</span>
                </div>
                <p>
                {t("title1")}
                </p>
                <p>
                {t("title2")}
                </p>
                <p>
                {t("title3")}
                </p>
              </div>
            </div>
          </div>
		  </div>
        </section>
    <section>
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.wi__41}>
					<div className={styles.section__title} >
						<span>{t("aboutus")}</span>
						<p class="montserrat-text uppercase">we are awesome</p>
					</div>

					<p>Компанія “ЗУБР-2000” була заснована у 2000 році і працює на ринку вже 23 роки. Ми спеціалізуємось на деревині твердих порід та можемо запропонувати як свіжопиляні, так і сухі пиломатеріали. Наша компанія ретельно підходить до відбору деревини, тому вона повністю відповідає всім вимогам Державного управління лісового господарства України та є еквівалентною до європейських стандартів.</p>
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
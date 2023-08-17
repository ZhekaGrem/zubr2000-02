"use client"

import React from 'react'
import styles from '@/app/styles/lumber.module.css'
import Image from "next/image";
import { useTranslations } from 'next-intl';

function Lumber() {
	const t = useTranslations("Index");
    return (
        <>
        <section id="oak__01">
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>{t('oak')} {t('beam')} 54 * 54 ММ</span>
					
				</div>
			</div>

			<div className={styles.row}>
				<div className={`${styles.col} `}>
					<h4>{t('sort')} А</h4>
					<p >
					{t('products-title-01')} 
					</p>
					<h4>{t('sort')} В</h4>
					<p >
					{t('products-title-02')} </p>
<div className={styles.table__cell__2}>{t('products-title-07')}</div>
<div className={styles.table}>
  <div className={styles.table__row}>
    <div className={styles.table__cell}>{t('products-title-07')}</div>
    <div className={styles.table__cell}>{t('quality-title-48')}</div>
    <div className={styles.table__cell}>{t('quality-title-35')}</div>
  </div>
  <div className={styles.table__row}>
    <div className={styles.table__cell}>54</div>
    <div className={styles.table__cell}>54</div>
    <div className={styles.table__cell}>220-750
	<p>220</p>
	<p>270</p>
	<p>320</p>
	<p>370</p>
	<p>420</p>
	<p>470</p>
	<p>520</p>
	<p>620</p>
	<p>820</p>
	<p>620</p>
	<p>3050</p>
	</div>
  </div>
</div>
				</div>

				<div className={styles.col}>
                <Image className={styles.adaptive__img} src="/oak-luimber-02.webp" alt="oak lumber 1" width={500} height={300} />

				</div>
			</div>
		</div>
                   </section>
        
        <section id="oak__02">
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>{t('oak')} {t('beam')} 54 * 110 ММ</span>
					
				</div>
			</div>

			<div className={styles.row}>
				<div className={`${styles.col} `}>
					<h4>{t('sort')} АA/AB</h4>
					<p >
					{t('products-title-03')}
					</p>
					<h4>{t('sort')} В</h4>
					<p >
					{t('products-title-04')}	</p>
					<h4>{t('sort')} С</h4>
					<p >
					{t('products-title-05')}	</p>
<div className={styles.table__cell__2}>{t('products-title-07')}</div>
<div className={styles.table}>
  <div className={styles.table__row}>
    <div className={styles.table__cell}>{t('products-title-07')}</div>
    <div className={styles.table__cell}>{t('quality-title-48')}</div>
    <div className={styles.table__cell}>{t('quality-title-35')}</div>
  </div>
  <div className={styles.table__row}>
    <div className={styles.table__cell}>54</div>
    <div className={styles.table__cell}>110</div>
    <div className={styles.table__cell}>220-750
	<p>222-2222</p>
	<p>222-2222</p>
	<p>222-2222</p>
	</div>
  </div>
</div>
				</div>

				<div className={styles.col}>
                <Image className={styles.adaptive__img} src="/oak-luimber-01.webp" alt="oak lumber 3" width={500} height={300} />

				</div>
			</div>
		</div>
                   </section>
        
       
        
        </>
    )
}

export default Lumber

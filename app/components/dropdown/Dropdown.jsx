'use client'
import React,{useState} from 'react'
import styles from './dropdowmn.module.css'
import Link from 'next-intl/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';





function Dropdown() {
  const t = useTranslations('Index');
 
return (


  
    <ul className={styles.menu__list}>
      <li className={styles.menu__link}>
        <p>{t('language')}</p>
        <ul className={styles.sub__menu__list}>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='uk'>
              <Image alt='language UA' src='/ua.webp' width={20} height={16} />UK</Link>{''}</li>
          <li className={styles.sub__menu__link}>
          <Link href="/" locale='en' >
          <Image alt='language En' src='/gb.webp' width={20} height={16} />
          EN </Link> </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='da'>
              <Image alt='language DA' src='/dk.webp' width={20} height={16} />
              DA </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='de'>
              <Image alt='language DE' src='/de.webp' width={20} height={16} />
              DE </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='ru'>
              <Image alt='language Ru' src='/ru.webp' width={20} height={16} />
              RU </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='fr'>
              <Image  alt='language FR' src='/fr.webp' width={20} height={16} />
              FR </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='it'>
              <Image alt='language IT' src='/it.webp' width={20} height={16} />
              IT </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='sv'>
              <Image alt='language SW' src='/se.webp' width={20} height={16} />
              SW </Link> </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='pl'>
              <Image alt='language PL' src='/pl.webp' width={20} height={16} />
              PL </Link>{''} </li>


        </ul>
      </li>
    </ul>



);
}

export default Dropdown;







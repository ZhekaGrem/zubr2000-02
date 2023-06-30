'use client'
import React,{useState} from 'react'
import styles from './dropdowmn.module.css'
import Link from 'next-intl/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';




function Dropdown() {


return (
  
    <ul className={styles.menu__list}>
      <li className={styles.menu__link}>
        <p>МОВА</p>
        <ul className={styles.sub__menu__list}>

          <li className={styles.sub__menu__link}>
            <Link href="/uk" locale='uk'>
              <Image src='/ua.png' width={20} height={16} />UK</Link>{''}</li>
          <li className={styles.sub__menu__link}>
          <Link href="/" locale='en' >
          <Image src='/gb.png' width={20} height={16} />
          EN </Link> </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='da'>
              <Image src='/dk.png' width={20} height={16} />
              DA </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='de'>
              <Image src='/de.png' width={20} height={16} />
              DE </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='ru'>
              <Image src='/ru.png' width={20} height={16} />
              RU </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='fr'>
              <Image src='/fr.png' width={20} height={16} />
              FR </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='it'>
              <Image src='/it.png' width={20} height={16} />
              IT </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='sv'>
              <Image src='/se.png' width={20} height={16} />
              SW </Link> </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='pl'>
              <Image src='/pl.png' width={20} height={16} />
              PL </Link>{''} </li>


        </ul>
      </li>
    </ul>

  /* <>
<ul className={styles.menu__list}>
    <li className={styles.menu__link}>
      {lang.label}
      <ul className={styles.sub__menu__list}>
        {lang.map((item, index) => (
          <li key={index} className={styles.sub__menu__link} onClick={() => handleClick(index)}>
            {item.label}
          </li>
        ))}
      </ul>
    </li>
  </ul>
  </> */

);
}

export default Dropdown;







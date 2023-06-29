'use client'
import React from 'react'
import styles from './dropdowmn.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';



function Dropdown() {


  return (
   
      <ul className={styles.menu__list}>

        <li>
          <Link href='/products' className={styles.menu__link}>'Lang'</Link>
          <ul className={styles.sub__menu__list}>
            <li className={styles.sub__menu__link}>
              <Link href="/en" locale='en'>
                <Image src='/gb.png' width={20} height={15} />
                English</Link>{''}</li>
            <li className={styles.sub__menu__link}>
              <Link href="/uk" locale='uk'>
                <Image src='/ua.png' width={20} height={15} /> Українська</Link>{''}</li>
            <li className={styles.sub__menu__link}>
              <Link href="/da" locale='da'>
                <Image src='/dk.png' width={20} height={15} />
                Dania </Link>{''} </li>
            <li className={styles.sub__menu__link}>
              <Link href="/de" locale='de'>
                <Image src='/de.png' width={20} height={15} />
                German </Link>{''} </li>
            <li className={styles.sub__menu__link}>
              <Link href="/ru" locale='ru'>
                <Image src='/ru.png' width={20} height={15} />
                Російська </Link>{''} </li>
            <li className={styles.sub__menu__link}>
              <Link href="/fr" locale='fr'>
                <Image src='/fr.png' width={20} height={15} />
                French </Link>{''} </li>
            <li className={styles.sub__menu__link}>
              <Link href="/it" locale='it'>
                <Image src='/it.png' width={20} height={15} />
                Italy </Link>{''} </li>
            <li className={styles.sub__menu__link}>
              <Link href="/sv" locale='sv'>
                <Image src='/se.png' width={20} height={15} />
                Sweden </Link> </li>
            <li className={styles.sub__menu__link}>
              <Link href="/pl" locale='pl'>
                <Image src='/pl.png' width={20} height={15} />
                Poland </Link>{''} </li>


          </ul>
        </li>
      </ul>
   
  )
}

export default Dropdown
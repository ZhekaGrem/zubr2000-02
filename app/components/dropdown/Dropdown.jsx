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
        <div className={styles.lang__list} ><Image className={styles.planet}  src='/palnet-icon.png' width={23} height={23}/>
        <p>{t('language')}</p>
         <Image className={styles.button__down} src='/icons8-drop-down-90.png' width={20} height={16}/></div>
        <ul className={styles.sub__menu__list}>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='uk'>
              <Image alt='language UA' src='/ua.webp' width={20} height={16} />Українська</Link>{''}</li>
          <li className={styles.sub__menu__link}>
          <Link href="/" locale='en' >
          <Image alt='language En' src='/gb.webp' width={20} height={16} />
          English </Link> </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='da'>
              <Image alt='language DA' src='/dk.webp' width={20} height={16} />
              Danmark </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='de'>
              <Image alt='language DE' src='/de.webp' width={20} height={16} />
               Deutsch</Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='ru'>
              <Image alt='language Ru' src='/ru.webp' width={20} height={16} />
              руский </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='fr'>
              <Image  alt='language FR' src='/fr.webp' width={20} height={16} />
              Français </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='it'>
              <Image alt='language IT' src='/it.webp' width={20} height={16} />
              Italiano </Link>{''} </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='sv'>
              <Image alt='language SW' src='/se.webp' width={20} height={16} />
              Sverige </Link> </li>
          <li className={styles.sub__menu__link}>
            <Link href="/" locale='pl'>
              <Image alt='language PL' src='/pl.webp' width={20} height={16} />
              Polski </Link>{''} </li>


        </ul>
      </li>
    </ul>



);
}

export default Dropdown;







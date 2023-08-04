'use client'
import React,{memo}  from 'react'
import styles from '@/app/styles/dropdown.module.css'
import Link from 'next-intl/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';







function Dropdown() {
  const t = useTranslations('Index');
  
return (


  
    <ul className={styles.menu__list}>
      <li >
        <div className={styles.lang__list} >
          <Image className={styles.planet} alt='planet logo change  language' src='/language__02.svg' width={20} height={15}/>
        <p className={styles.menu__link}>{t('language')}</p>
          <Image className={styles.planet} alt='drop down  logo change  language'  src='/down__02.svg' width={20} height={15}/>
         </div>
        <ul className={styles.sub__menu__list}>
          <li >
            <Link    rel="preload" to='' className={styles.sub__menu__link} href="/"  locale='uk'>
              <Image alt='language UA' src='/ua.webp' width={20} height={16} />Українська</Link>{''}</li>
          <li >
          <Link    rel="preload" to="" className={styles.sub__menu__link} href='/' locale='en' >
          <Image alt='language En' src='/gb.webp' width={20} height={16} />
          English </Link> </li>
          <li >
            <Link    rel="preload" to="" className={styles.sub__menu__link} href='/' locale='da'>
              <Image alt='language DA' src='/dk.webp' width={20} height={16} />
              Danmark </Link>{''} </li>
          <li >
            <Link    rel="preload" to="" className={styles.sub__menu__link} href='/' locale='de'>
              <Image alt='language DE' src='/de.webp' width={20} height={16} />
               Deutsch</Link>{''} </li>
          <li >
            <Link    rel="preload"  to="" className={styles.sub__menu__link} href='/' locale='ru'>
              <Image alt='language Ru' src='/ru.webp' width={20} height={16} />
              руский </Link>{''} </li>
          <li >
            <Link    rel="preload" to="" className={styles.sub__menu__link} href='/' locale='fr'>
              <Image  alt='language FR' src='/fr.webp' width={20} height={16} />
              Français </Link>{''} </li>
          <li >
            <Link    rel="preload" to="" className={styles.sub__menu__link} href='/' locale='it'>
              <Image alt='language IT' src='/it.webp' width={20} height={16} />
              Italiano </Link>{''} </li>
          <li >
            <Link    rel="preload" to="" className={styles.sub__menu__link} href='/' locale='sv'>
              <Image alt='language SW' src='/se.webp' width={20} height={16} />
              Sverige </Link> </li>
          <li >
            <Link    rel="preload" to="" className={styles.sub__menu__link} href='/' locale='pl'>
              <Image alt='language PL' src='/pl.webp' width={20} height={16} />
              Polski </Link>{''} </li>
          


        </ul>
      </li>
    </ul>



);
}

export default memo(Dropdown);







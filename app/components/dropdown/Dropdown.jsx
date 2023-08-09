'use client'
import React,{memo}  from 'react'
import styles from '@/app/styles/dropdown.module.css'
import Link from 'next-intl/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import {usePathname} from 'next-intl/client';







function Dropdown() {
  const t = useTranslations('Index');
  const pathname = usePathname();

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
            <Link    rel="preload" to='' className={styles.sub__menu__link} href={usePathname()}  locale='ua'>
              Українська <Image alt='language UA' src='/ua.webp' width={20} height={16} /></Link>{''}</li>
          <li >
          <Link   rel="preload" to="" className={styles.sub__menu__link} href={usePathname()}  locale='en' >
          English<Image alt='language En' src='/gb.webp' width={20} height={16} />
           </Link> </li>
           <li >
            <Link    rel="preload" to="" className={styles.sub__menu__link} href={usePathname()} locale='pl'>
            Polski  <Image alt='language PL' src='/pl.webp' width={20} height={16} />
               </Link>{''} </li>
          <li >
            <Link   rel="preload" to="" className={styles.sub__menu__link} href={usePathname()} locale='da'>
            Danmark <Image alt='language DA' src='/dk.webp' width={20} height={16} />
               </Link>{''} </li>
          <li >
            <Link   rel="preload" to="" className={styles.sub__menu__link} href={usePathname()} locale='de'>
            Deutsch <Image alt='language DE' src='/de.webp' width={20} height={16} />
               </Link>{''} </li>
        
          <li >
            <Link    rel="preload" to="" className={styles.sub__menu__link} href={usePathname()} locale='fr'>
            Français <Image  alt='language FR' src='/fr.webp' width={20} height={16} />
               </Link>{''} </li>
          <li >
            <Link   rel="preload" to="" className={styles.sub__menu__link} href={usePathname()} locale='it'>
            Italiano  <Image alt='language IT' src='/it.webp' width={20} height={16} />
               </Link>{''} </li>
          <li >
            <Link    rel="preload" to="" className={styles.sub__menu__link} href={usePathname()} locale='sv'>
            Sverige  <Image alt='language SW' src='/se.webp' width={20} height={16} />
               </Link> </li>
         
          
               <li >
            <Link    rel="preload"  to="" className={styles.sub__menu__link} href={usePathname()} locale='ru'>
            Руский<Image alt='language Ru' src='/ru.webp' width={20} height={16} />
               </Link>{''} </li>

        </ul>
      </li>
    </ul>



);
}

export default memo(Dropdown);







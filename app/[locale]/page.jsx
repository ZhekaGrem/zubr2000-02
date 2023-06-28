'use client'
import Link from 'next-intl/link';
import styles from './page.module.css'
import { useTranslations } from 'next-intl';
import Image from 'next/image';



export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
              

      <div className={styles.link}>

        <div >
          <div>    <Link href="/" locale='en'><Image src='/gb.png' width={20} height={15}/> English</Link>{''}</div>
          <div>    <Link href="/" locale='uk'><Image src='/ua.png' width={20} height={15}/> Українська</Link>{''}</div>
          <div>    <Link href="/" locale='da'><Image src='/dk.png' width={20} height={15}/>Dania </Link>{''} </div>
          <div>    <Link href="/" locale='de'><Image src='/de.png' width={20} height={15}/>German </Link>{''} </div>
          <div>    <Link href="/" locale='ru'><Image src='/ru.png' width={20} height={15}/>Російська </Link>{''} </div>
          <div>    <Link href="/" locale='fr'><Image src='/fr.png' width={20} height={15}/>French </Link>{''} </div>
          <div>    <Link href="/" locale='it'><Image src='/it.png' width={20} height={15}/>Italy </Link>{''} </div>
          <div>    <Link href="/" locale='sv'><Image src='/se.png' width={20} height={15}/>Sweden </Link> </div>
          <div>    <Link href="/" locale='pl'><Image src='/pl.png' width={20} height={15}/>Poland </Link>{''} </div>
        </div>

        <div>
          <p> {t('title')}</p>
        </div>
      </div>
              
    </>
  )
}

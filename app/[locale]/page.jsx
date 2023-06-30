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

        <div>
          <p> {t('title')}</p>
        </div>
      </div>
              
    </>
  )
}

"use client"
import React, { useState } from 'react'
import {useTranslations} from 'next-intl';
import styles from './aboutus.module.css'

function AboutUs() {
  const[add, setAdd]=useState();
  const t = useTranslations('Index');

  return (
    <div className={styles.test01}>{t('aboutus')}</div>
  )
}

export default AboutUs
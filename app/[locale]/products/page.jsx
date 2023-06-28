'use client'
import React from 'react'
import { useTranslations } from 'next-intl';
function Product() {
    const t = useTranslations('Index');

  return (
    <div>{t('product')}</div>
  )
}

export default Product
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/styles/navbar.module.css';
import { usePathname } from 'next-intl/client';


function Dropdownlang(props) {
    const pathname = usePathname();
  return (
    <li className={styles.navbar__link__open__03}>
          <p className={`${styles.navbar__link} `}>
            {' '}
            <Image
              className={styles.planet}
              alt='language PL'
              src='/language__02.svg'
              width={20}
              height={16}
            />{' '}
            {props.language}
            <Image
              className={`${styles.drop__down} ${styles.planet}`}
              alt='language PL'
              src='/down__02.svg'
              width={20}
              height={16}
            />
          </p>

          <ul className={styles.sub__menu__list}>
            <li>
              <Link
                prefetch={false}
                rel='preload'
                to=''
                className={styles.sub__menu__link}
                href={usePathname()}
                locale='uk'
              >
                Українська{' '}
                <Image
                  alt='language UA'
                  src='/ua.webp'
                  width={20}
                  height={16}
                />
              </Link>
              {''}
            </li>
            <li>
              <Link
                prefetch={false}
                rel='preload'
                to=''
                className={styles.sub__menu__link}
                href={usePathname()}
                locale='en'
              >
                English{' '}
                <Image
                  alt='language En'
                  src='/gb.webp'
                  width={20}
                  height={16}
                />
              </Link>{' '}
            </li>
            <li>
              <Link
                prefetch={false}
                rel='preload'
                to=''
                className={styles.sub__menu__link}
                href={usePathname()}
                locale='pl'
              >
                Polski{' '}
                <Image
                  alt='language PL'
                  src='/pl.webp'
                  width={20}
                  height={16}
                />
              </Link>
              {''}{' '}
            </li>
            <li>
              <Link
                prefetch={false}
                rel='preload'
                to=''
                className={styles.sub__menu__link}
                href={usePathname()}
                locale='da'
              >
                Danmark{' '}
                <Image
                  alt='language DA'
                  src='/dk.webp'
                  width={20}
                  height={16}
                />
              </Link>
              {''}{' '}
            </li>
            <li>
              <Link
                prefetch={false}
                rel='preload'
                to=''
                className={styles.sub__menu__link}
                href={usePathname()}
                locale='de'
              >
                Deutsch{' '}
                <Image
                  alt='language DE'
                  src='/de.webp'
                  width={20}
                  height={16}
                />
              </Link>
              {''}{' '}
            </li>
            <li>
              <Link
                prefetch={false}
                rel='preload'
                to=''
                className={styles.sub__menu__link}
                href={usePathname()}
                locale='fr'
              >
                Français{' '}
                <Image
                  alt='language FR'
                  src='/fr.webp'
                  width={20}
                  height={16}
                />
              </Link>
              {''}{' '}
            </li>
            <li>
              <Link
                prefetch={false}
                rel='preload'
                to=''
                className={styles.sub__menu__link}
                href={usePathname()}
                locale='it'
              >
                Italiano{' '}
                <Image
                  alt='language IT'
                  src='/it.webp'
                  width={20}
                  height={16}
                />
              </Link>
              {''}{' '}
            </li>
            <li>
              <Link
                prefetch={false}
                rel='preload'
                to=''
                className={styles.sub__menu__link}
                href={usePathname()}
                locale='sv'
              >
                Sverige{' '}
                <Image
                  alt='language SW'
                  src='/se.webp'
                  width={20}
                  height={16}
                />
              </Link>{' '}
            </li>

            <li>
              <Link
                prefetch={false}
                rel='preload'
                to=''
                className={styles.sub__menu__link}
                href={usePathname()}
                locale='ru'
              >
                Руский
                <Image
                  alt='language Ru'
                  src='/ru.webp'
                  width={20}
                  height={16}
                />
              </Link>
              {''}{' '}
            </li>
          </ul>
        </li>
  )
}


export default Dropdownlang;
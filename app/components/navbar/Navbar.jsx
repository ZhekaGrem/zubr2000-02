'use client'
import styles from './navbar.module.css'
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import Link from 'next-intl/link';
import Dropdown from '../dropdown/Dropdown';

function Navbar() {
    const t = useTranslations('Index');

    const [menuActive, setMenuActive] = useState(false);

    return (
        <>

            <div className={styles.container}>
                <div className={styles.navbar__body}>
                    <div className={styles.navbar__logo__text}>
                                
                                ZUBR-2000
                        <Link className={styles.navbar__logo} href="/">
                            <Image src="/zubr-2000-02.png" width={120} height={110} alt="" />
                        </Link>
                            </div>
                    <div className={styles.navbar__zubr}>
                    </div>

                    <nav
                        className={`${menuActive ? [styles.navbar__menu] : [styles.close__navbar__menu]}`}
                    // className={styles.close__navbar__menu}
                    >
                        <ul className={styles.navbar__list}>
                            <li>
                                <Link href='/' className={styles.navbar__link}>{t('home')}</Link>
                            </li>
                            <li>
                                <Link href='/aboutus' className={styles.navbar__link}>{t('aboutus')}</Link>
                                <ul className={styles.sub__navbar__list}>
                                    <li>
                                        <Link href='/certificates' className={styles.sub__navbar__link}>
                                        certificates
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/manufacturing-process' className={styles.sub__navbar__link}>
                                        manufacturing-process
                                        </Link>
                                    </li>
                                    <li className={styles.test}>
                                        <Link href='/quality-standarts' className={styles.sub__navbar__link}>
                                        quality-standarts
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href='/products' className={styles.navbar__link}>{t('product')}</Link>
                                <ul className={styles.sub__navbar__list}>
                                    <li>
                                        <Link href='/logs' className={styles.sub__navbar__link}>
                                            Logs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/lumber' className={styles.sub__navbar__link}>
                                            Lumber
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <Link href='/contact' className={styles.navbar__link}>{t('contact')}</Link>
                            </li>

                         <Dropdown/>
                        </ul>
                        
                    </nav>
                    <div

                        className={`${menuActive ? [styles.navbar__burger__exit] : [styles.navbar__burger]}`}
                        onClick={() => setMenuActive(!menuActive)}  >
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar 

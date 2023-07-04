'use client'
import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Form from '@/app/components/form/Form'



function Contact() {
    const t = useTranslations('Index');
    return (
        <>
            <div className={styles.map__googl}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2573.725140201867!2d24.03470707661818!3d49.82883097148013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDQ5JzQzLjgiTiAyNMKwMDInMTQuMiJF!5e0!3m2!1sru!2sua!4v1687104343859!5m2!1sru!2sua"
                    width="100%"
                    height="400"
                    style={{ border: "0" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={styles.contact}>

                <div className={styles.contact__info}>


                    <ul><div><h1>CONTACT US</h1></div>
                        <p>Manager:+38 097 136-20-00 </p>
                        <p>Director:+38 067 674-58-43 </p>

                        <li>
                            <p href="mailto:gremroman@gmail.com">gremroman@gmail.com</p>
                        </li>
                        <li>
                            <p href="mailto:grem_roman@icloud.com">grem_roman@icloud.com </p>
                        </li>
                        <li>
                            <p href="mailto:zubrzubr2000@gmail.com ">zubrzubr2000@gmail.com </p>
                        </li>
                    </ul>
                    <div>
                        <Link href="https://derevyna.fordaq.com/fordaq/srvFordaqReport/UkrWood+LLC_642294.html">
                             <h1>FORDAQ.COM</h1>
                              <Image src='/fordack-logo.gif' width={120} height={108} /></Link>
                    </div>
                </div>
                <div className={styles.contact__findus}>
                    <ul>
                        <div>
                            <h1>FIND US</h1></div>
                        <p>79024</p>
                        <p>Ukraine</p>
                        <p>m.Lviv</p>
                        <p>vul. Traktorystiv 44</p>
                    </ul>
                </div>
                <div className={styles.contact__form}>
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Contact  

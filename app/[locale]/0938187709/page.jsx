'use client'
import React from 'react'
import styles from '@/app/styles/offer.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Form from '@/app/components/form/Form'



function Contact() {
    const t = useTranslations('Index');
    return (
        <>
           
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
                              <Image src='/fordack-logo.webp' width={120} height={108} /></Link>
                    </div>
                </div>
              
              
            </div>
        </>
    )
}

export default Contact  

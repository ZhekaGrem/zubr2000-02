
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';
import Link from 'next/link';





function Footer() {
      return (
            <>
                  <div className={styles.footer}>
                        <div className={styles.container}>
                              <div className={styles.row}>
                                    <div className={styles.footer__col}>
                                          <ul>
                                          <h4>OUR PRODUCTS</h4>
                                                <li>
                                                      <Link className={styles.footer__link}href="/ " >LOGS</Link>
                                                </li>
                                                <li>
                                                      <Link className={styles.footer__link}href="/ " >LAMBER</Link>
                                                </li>
                                          </ul>
                                    </div>
                                    <div className={styles.footer__col}>
                                          <ul>
                                          <h4>CERTIFICATES</h4>
                                          <li>
                                                      <Link className={styles.footer__link} href="/contact/certificates"> <Image   className={styles.logo} src='/mini-fsc.webp' 
                                                      alt='FSC' width={111} height={150} /></Link>
                                                </li>
                                                <li>
                                                      <Link className={styles.footer__link}href="/ " >####</Link>
                                                </li>
                                          </ul>
                                    </div>
                                    <div className={styles.footer__col}>
                                          <ul>
                                          <h4>CONTACT US</h4>
                                                <li>

                                                      <p >Director: +38 067 674-58-43</p>
                                                </li>
                                                <li>
                                                      <p >Manager: +38 097 136-20-00</p>
                                                </li>
                                                <li>
                                                      <Link className={styles.footer__link}href="gremroman@gmail.com">gremroman@gmail.com</Link>
                                                </li>
                                                <li>
                                                      <Link className={styles.footer__link}href="grem_roman@icloud.com">grem_roman@icloud.com </Link>
                                                </li>
                                                <li>
                                                      <Link className={styles.footer__link}href="zubrzubr2000@gmail.com ">zubrzubr2000@gmail.com </Link>
                                                </li>
                                                <li>
                                                      <Link className={styles.footer__link} href="https://derevyna.fordaq.com/fordaq/srvFordaqReport/UkrWood+LLC_642294.html"> <Image src='/fordaq-logo-02.webp' 
                                                      alt='fordaq' width={100} height={30} /></Link>
                                                </li>
                                          </ul>
                                    </div>
                                    <div className={styles.footer__col}>
                                          <ul>
                                          <h4>FIND US</h4>
                                                <li>

                                                      <p>79024</p>
                                                </li>
                                                      <li>

                                                      <p>Ukraine</p>
                                                      </li>
                                                      <li>

                                                      <p>m.Lviv</p>
                                                      </li>
                                                      <li>

                                                      <p>vul. Traktorystiv 44</p>
                                                      </li>
                                                
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
                  </>
      )
}

export default Footer



import React from 'react'
import styles from '@/app/styles/page/certificates.module.css'
import Image from "next/image";



function Certificates() {
    return (
        <>
     
<div className={styles.container}>
    <div><Image src="/ZUBR2000-1.webp" alt="Certificates FSC  1page" width={1200} height={400}/></div>
    <div><Image src="/ZUBR2000-2.webp" alt="Certificates FSC  2page" width={1200} height={400}/></div>
    <div id="certificate-trade" ><Image src="/certificate-trade.webp" alt="Image 3" width={1200} height={400}/></div>
   
     </div>
        </>
    )
}

export default Certificates

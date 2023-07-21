import React from 'react'
import styles from '@/app/styles/certificates.module.css'
import Image from "next/image";



function Certificates() {
    return (
        <>
        {/* <div className={styles.container}>
  <Image src="/ZUBR2000-1.webp" alt="Image 1">
  <Image src="/ZUBR2000-2.webp" alt="Image 2">
  <Image src="/ZUBR2000-1.webp" alt="Image 3">
</div> */}
<div className={styles.container}>
    <div><Image src="/ZUBR2000-1.webp" alt="Image 1" width={1200} height={400}/></div>
    <div><Image src="/ZUBR2000-2.webp" alt="Image 2" width={1200} height={400}/></div>
    <div id="image" ><Image src="/certificate-trade.webp" alt="Image 3" width={1200} height={400}/></div>
   
     </div>
        </>
    )
}

export default Certificates

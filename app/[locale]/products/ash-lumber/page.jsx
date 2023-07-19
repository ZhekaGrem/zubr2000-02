import React from 'react'
import styles from './lumber.module.css'
import Image from "next/image";

function Lumber() {
    return (
        <>
        <section>
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>БРУСОК 54 * 54 ММ</span>
					
				</div>
			</div>

			<div className={styles.row}>
				<div className={`${styles.col} `}>
					<h4>Сорт А</h4>
					<p >
					Чотири сторони чисті, без заболоні.
					</p>
					<h4>Сорт В</h4>
					<p >
					Одна сторона чиста і 4 сторони, прилягаючі до неї на 50% чисті.
Використовується для виготовлення поверхонь столів, сходів, крісел тощо					</p>
<div className={styles.table__cell__2}>РОЗМІРИ</div>
<div className={styles.table}>
  <div className={styles.table__row}>
    <div className={styles.table__cell}>висота</div>
    <div className={styles.table__cell}>ширина</div>
    <div className={styles.table__cell}>довжина</div>
  </div>
  <div className={styles.table__row}>
    <div className={styles.table__cell}>54</div>
    <div className={styles.table__cell}>54</div>
    <div className={styles.table__cell}>220-750
	<p>222-2222</p>
	<p>222-2222</p>
	<p>222-2222</p>
	</div>
  </div>
</div>
				</div>

				<div className={styles.col}>
                <Image src="/ash-lumber-02.jpg" width={555} height={365} />

				</div>
			</div>
		</div>
                   </section>
        <section>
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>БРУСОК 54 * 110 ММ</span>
					
				</div>
			</div>

			<div className={styles.row}>
				<div className={`${styles.col} `}>
					<h4>Сорт АA/AB</h4>
					<p >
					Допускаются живые сучки диаметром до 12 мм в количестве одна штука на один погонный метр доски. Наличие двух стоевых 120*2200 мм.
					</p>
					<h4>Сорт В</h4>
					<p >
					Одопускаются живые сучки диаметром до 40 мм в количестве две штуки на один погонный метр, черные сучки до 10 мм до двух штук. Наличие стоевой размером 120*2200 мм.	</p>
					<h4>Сорт С</h4>
					<p >
					допускаются живые сучки до 60 мм до четырех штук на погонный метр, черные сучки до 30 мм до двух штук на погонный метр.	</p>
<div className={styles.table__cell__2}>РОЗМІРИ</div>
<div className={styles.table}>
  <div className={styles.table__row}>
    <div className={styles.table__cell}>висота</div>
    <div className={styles.table__cell}>ширина</div>
    <div className={styles.table__cell}>довжина</div>
    <div className={styles.table__cell}>влажность</div>
  </div>
  <div className={styles.table__row}>
    <div className={styles.table__cell}>54</div>
    <div className={styles.table__cell}>54</div>
    <div className={styles.table__cell}>220-750
	<p>222-2222</p>
	<p>222-2222</p>
	<p>222-2222</p>
	</div>
    <div className={styles.table__cell}>8%-10%</div>
  </div>
</div>
				</div>

				<div className={styles.col}>
                <Image src="/ash-lumber-01.jpg" width={555} height={365} />

				</div>
			</div>
		</div>
                   </section>
        
       
        
        </>
    )
}

export default Lumber

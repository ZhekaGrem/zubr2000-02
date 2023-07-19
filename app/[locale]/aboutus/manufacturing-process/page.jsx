import React from 'react'
import styles from './manufacturing-process.module.css'
import Image from "next/image";
import Link from 'next/link';

function Certificates() {
    return (
     <>
<div className={styles.manual__content}>
<div className={styles.manual__title}>
		<ul className={styles.manual__title__mini}>
			<li>
				<div className={`${styles.big__title}`}>Виробничий процес</div>
				<p>	
У виробничому процесі ми використовуємо сучасне обладнання, передові технології обробки деревини та контролю якості.
Контроль за якістю нашої продукції починається з моменту відбору дерева висококваліфікованими спеціалістами та триває протягом усього процесу обробки та сушіння.</p>
			</li>
			
		</ul>
	</div>

</div>

     <section >

<div className={styles.container}>
		<div className={styles.block}>
			<div className={styles.col__5}>
				<div className="row">
                <Image src="/test02.jpg" width={300} height={200}/>
				</div>
			</div>
			<div className="col-md-offset-1 col-md-6 col-sm-12">
				<div className="row">
					<div className="section-title">
						<span>Відбір сировини</span>
					</div>
					<p>
					Вхідний контроль якості
					</p>
					<a href="#" className="btn green" ><span>read more</span></a>
				</div>
			</div>
		</div>
	</div>
<div className={styles.container}>
		<div className={styles.block}>
			<div className={styles.col__5}>
				<div className="row">
                <Image src="/test02.jpg" width={300} height={200}/>
				</div>
			</div>
			<div className="col-md-offset-1 col-md-6 col-sm-12">
				<div className="row">
					<div className="section-title">
						<span>Склад сировини</span>
					</div>
					<p>
					Після поступлення на склад, колоди розпилюють відповідно до потрібних розмірів на сучаних деревообробних лініях, зберігаючи оригінальну структуру самої деревини.
					</p>
					<a href="#" className="btn green" ><span>read more</span></a>
				</div>
			</div>
		</div>
	</div>
<div className={styles.container}>
		<div className={styles.block}>
			<div className={styles.col__5}>
				<div className="row">
                <Image src="/test02.jpg" width={300} height={200}/>
				</div>
			</div>
			<div className="col-md-offset-1 col-md-6 col-sm-12">
				<div className="row">
					<div className="section-title">
						<span>Деревообробна
лінія
SYC-520G</span>
					</div>
					<p>
					Контроль якості
процесу обробки
					</p>
					<a href="#" className="btn green" ><span>read more</span></a>
				</div>
			</div>
		</div>
	</div>
<div className={styles.container}>
		<div className={styles.block}>
			<div className={styles.col__5}>
				<div className="row">
                <Image src="/test02.jpg" width={300} height={200}/>
				</div>
			</div>
			<div className="col-md-offset-1 col-md-6 col-sm-12">
				<div className="row">
					<div className="section-title">
						<span>Сушка</span>
					</div>
					<p>
					свіжорозпиляні пиломатеріали подаються в сушку, де комп’ютеризована система контролює процес сушіння.

Через приблизно 50 днів пиломатеріали високої якості поступають на склад та готові для відправки замовнику.
					</p>
					<a href="#" className="btn green" ><span>read more</span></a>
				</div>
			</div>
		</div>
	</div>
<div className={styles.container}>
		<div className={styles.block}>
			<div className={styles.col__5}>
				<div className="row">
                <Image src="/test02.jpg" width={300} height={200}/>
				</div>
			</div>
			<div className="col-md-offset-1 col-md-6 col-sm-12">
				<div className="row">
					<div className="section-title">
						<span>Пакування</span>
					</div>
					<p>
					Контроль якості
пакування
					</p>
					<a href="#" className="btn green" ><span>read more</span></a>
				</div>
			</div>
		</div>
	</div>
<div className={styles.container}>
		<div className={styles.block}>
			<div className={styles.col__5}>
				<div className="row">
                <Image src="/test02.jpg" width={300} height={200}/>
				</div>
			</div>
			<div className="col-md-offset-1 col-md-6 col-sm-12">
				<div className="row">
					<div className="section-title">
						<span>Склад
готової продукції</span>
					</div>
					<p>
					Контроль якості
зберігання
					</p>
					<a href="#" className="btn green" ><span>read more</span></a>
				</div>
			</div>
		</div>
	</div>
     </section>

     <section >
        <div className={styles.container}>
            
<div><h1>Ми використовуємо наступні породи дерев:</h1></div>
<ul  className={styles.Ol}>
<li >дуб</li>
<li >ясин</li>
<li >береза</li>
</ul>
<div><h1>Готові пиломатеріали пакуються на палєти за допомогою пластикових стяжок (стрічок) та фолій.</h1></div>
<p>Ми суворо дотримуємось стандартів якості виробництва, зберігання та траспортування, зокрема
ДСТУ EN 1315-2-2001 (ГОСТ-9462-88. "Вимоги до якості та розмірів лісоматеріалів") та інших технічних умов на пиломатеріали та сировину, забезпечуючи наших клієнтів високоякісною продукцією.

Детальніше ознайомитись зі стандартами якості Ви можете завітавши в розділ стандарти якості.</p>

        </div>
     </section>
     </>
    )
}

export default Certificates

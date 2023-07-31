"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from '@/app/styles/products.module.css';
import Link from "next/link";

function Product() {
  const t = useTranslations("Index");

  return (
    <>

<section>
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>Дуб</span>
					<p>Дубовая древесина имеет высокий коэффициент прочности и практически не подвергается влиянию времени. Плотность древесины дуба – 700 кг/ м3. Такой высокий показатель имеет большое значение. Чем плотнее древесина, тем она тверже и тяжелее и тем труднее в переработке и технической сушке древесины. Эти показатели утяжеляют процесс переработки доски дуба обрезной, но при этом дают колоссальные преимущества – существенно меньше подвержены истиранию в таких изделиях как лестницы, перила, пол и другие, что характеризует дубовую древесину как долговечную.</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/oak-luimber-01.jpg" width={400} alt='oak1' height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>БРУСОК 54 * 110 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/oak-lumber'>open</Link></div>
							</div>
						</div>
					</div>
				</div>
				
				<div className={styles.col} data-wow-delay=".1s">
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/oak-luimber-02.jpg" width={400}  alt='img4' height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>БРУСОК 54 * 54 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/oak-lumber'>open</Link></div>
							</div>
						</div>
					</div>				
						
				</div>

			</div>
		</div>
	</section>
<section>
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>Ясень</span>
					<p>Ясень является красивым и благородным отделочным материалом. Так как он имеет ярко выраженные годовые кольца, в текстуре преобладают необычайные, интересные рисунки с богатой гаммой оттенков. Красота этой древесины в большей степени актуальна при внутреннем оформлении интерьеров. Для решения сложных задач мебельного и других производств применяют разное сечение доски. Так сухая доска ясеня толщиной 30мм будет служить прекрасным материалом как технически, так и по достойному внешнему виду для отделки фасадов кухонь, предметов спален, комплектующих деталей столов и стульев, декоративных панелей, вагонки.</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/birch-lumber-01.jpg" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>БРУСОК 54 * 110 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/oak-lumber'>open</Link></div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.col} data-wow-delay=".1s">
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/birch-lumber-02.jpg" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>БРУСОК 54 * 54 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/oak-lumber'>open</Link></div>
							</div>
						</div>
					</div>				
				</div>

			</div>
		</div>
	</section>
<section>
		<div   className={styles.container}>
			<div className={styles.row}>
				<div id="birch" className={styles.section__title}>
					<span>Береза</span>
					<p>Березова деревина - ідеальний матеріал з безліччю переваг. Її приваблива природна краса та унікальна текстура надають особливого шарму, а міцність і стійкість забезпечують довгий термін служби виробам. Легкість обробки дозволяє створювати різноманітні меблі та декоративні вироби. Крім того, березова деревина - екологічно чистий і відновлюваний ресурс, що робить її привабливим вибором для сталого будівництва і дизайну. Завдяки всім цим перевагам, вона залишається популярним матеріалом у різних сферах творчості та господарства.</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/ash-lumber-01.jpg" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>БРУСОК 54 * 110 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/oak-lumber'>open</Link></div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.col} data-wow-delay=".1s">
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/ash-lumber-02.jpg" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>БРУСОК 54 * 54 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/oak-lumber'>open</Link></div>
							</div>
						</div>
					</div>				
				</div>

			</div>
		</div>
	</section>
        
    
    </>
  );
}

export default Product;

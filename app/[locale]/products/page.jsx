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
		<div id="oak" className={styles.container}>
			<div  className={styles.row}>
				<div   className={styles.section__title}>
					<span >  {t("oak")}</span>
					<p>   {t("product_oak")}</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/oak-lumber-01.webp" width={400} alt='oak1' height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 54 * 110 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/oak-lumber#oak__02'>{t('open')}</Link></div>
							</div>
						</div>
					</div>
				</div>
				
				<div className={styles.col} data-wow-delay=".1s">
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/oak-lumber-02.webp" width={400}  alt='img4' height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 22-54 * 54-315 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/oak-lumber#oak__01'>{t('open')}</Link></div>
							</div>
						</div>
					</div>				
				</div>
				<div className={styles.col} data-wow-delay=".1s">
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/oak-lumber-03.webp" width={400}  alt='img4' height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 22-54 * 54-315 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/oak-lumber#oak__03'>{t('open')}</Link></div>
							</div>
						</div>
					</div>				
				</div>
				

			</div>
		</div>
	</section>
<section>
		<div id="ash" className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span >  {t("ash")}</span>
					<p>  {t("product_ash")}</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} alt="ash lumber 2" src="/ash-lumber-03.webp" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 26-55 * 76-315 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/ash-lumber#ash__01'>{t('open')}</Link></div>
							</div>
						</div>
					</div>
				</div>

				{/* <div className={styles.col} data-wow-delay=".1s">
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/ash-lumber-02.webp" alt="birch lumber 1" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 54 * 54 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/ash-lumber#ash__02'>{t('open')}</Link></div>
							</div>
						</div>
					</div>				
				</div> */}

			</div>
		</div>
	</section>
<section >
		<div id="birch"  className={styles.container}>
			<div className={styles.row}>
				<div  className={styles.section__title}>
					<span >  {t("birch")}</span>
					<p>{t("product_birch")}</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/birch-lumber-03.webp" alt="ash lumber 2" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 36/52 * 52 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/birch-lumber#birch__01'>{t('open')}</Link></div>
							</div>
						</div>
					</div>
				</div>
				
				{/* <div className={styles.col} data-wow-delay=".1s">
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/birch-lumber-02.webp" alt="ash lumber 1" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 54 * 54 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/birch-lumber#birch__02'>{t('open')} </Link></div>
							</div>
						</div>
					</div>				
				</div> */}

			</div>
		</div>
	</section>
<section >
		<div id="modrina"  className={styles.container}>
			<div className={styles.row}>
				<div  className={styles.section__title}>
					<span >  {t("modrina")}</span>
					<p>{t("product_modrina")}</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/modrina-lumber-01.webp" alt="modrina lumber " width={400} height={400}/>
          <Image className={styles.info__img} src="/modrina-lumber-03.webp" alt="modrina lumber " width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 21-30 * 123-500ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/modrina-lumber#modrina__01'>{t('open')}</Link></div>
							</div>
						</div>
					</div>
				</div>
				
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/modrina-lumber-05.webp" alt="modrina lumber " width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 285-375 * 312-500 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/modrina-lumber#modrina__03'>{t('open')}</Link></div>
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

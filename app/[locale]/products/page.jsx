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
          <Image className={styles.info__img} src="/oak-luimber-01.webp" width={400} alt='oak1' height={400}/>
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
          <Image className={styles.info__img} src="/oak-luimber-02.webp" width={400}  alt='img4' height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 22-54 * 54 ММ</div>
								<div className={styles.team__member__job}><Link    rel="preload" href='/products/oak-lumber#oak__01'>{t('open')}</Link></div>
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
          <Image className={styles.info__img} alt="birch lumber 2" src="/ash-lumber-01.webp" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>{t('beam')} 30 * 255 ММ</div>
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
          <Image className={styles.info__img} src="/birch-lumber-01.webp" alt="ash lumber 2" width={400} height={400}/>
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
        
    
    </>
  );
}

export default Product;

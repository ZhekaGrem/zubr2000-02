"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from './products.module.css';
import Link from "next-intl/link";
function Product() {
  const t = useTranslations("Index");

  return (
    <>
<section>
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>the dream team</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/test02.jpg" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>kek </div>
								<div className={styles.team__member__job}><Link href='/products/logs'>CEO / co-founder </Link></div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.col} data-wow-delay=".1s">
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/test02.jpg" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>jennifer toms</div>
								<div className={styles.team__member__job}>project chied</div>
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
					<span>the dream team</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/test02.jpg" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>john doe</div>
								<div className={styles.team__member__job}>CEO / co-founder</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.col} data-wow-delay=".1s">
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/test02.jpg" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>jennifer toms</div>
								<div className={styles.team__member__job}>project chied</div>
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
					<span>the dream team</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/test02.jpg" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>john doe</div>
								<div className={styles.team__member__job}>CEO / co-founder</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.col} data-wow-delay=".1s">
					<div className={styles.team__member}>
          <Image className={styles.info__img} src="/test02.jpg" width={400} height={400}/>
						<div className={styles.team__member__hover}>
							<div className={styles.team__member__info}>
								<div className={styles.team__member__name}>jennifer toms</div>
								<div className={styles.team__member__job}>project chied</div>
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

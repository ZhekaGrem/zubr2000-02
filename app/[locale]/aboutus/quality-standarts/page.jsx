import React from 'react'
import styles from './quality-standarts.module.css'
import Image from 'next/image';

function qualityStandarts() {
    return (
        <>

<section>
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>some benefits</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={`${styles.sub__section__title} `}>
					{/* <i className=}icon ion-iphone}></i> */}
					<span className={styles.mini__title}>fully responsive</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation. </p>
				</div>

				<div className={`${styles.sub__section__title} `}>
					{/* <i className=}icon ion-ios-infinite-outline}></i> */}
					<span className={styles.mini__title}                    >unlimited options</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation. </p>
				</div>
				<div className={`${styles.sub__section__title} `}>
					{/* <i className=}icon ion-ios-infinite-outline}></i> */}
					<span className={styles.mini__title}                    >unlimited options</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation. </p>
				</div>

				
			</div>
		</div>
	</section>

	<section className={styles.block__01} >
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.section__title}>
					<span>what we do11TEST</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<p >
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</p>
			
				

					<div className={styles.row}>
						<div className={` ${styles.block__01__left} ${styles.row}`}>
							<ul>
							<span className={styles.bloc__title}>customizable design</span>
								<li>branding</li>
								<li>design &amp; copywriting</li>
								<li>concept development</li>
								<li>user experience</li>
							</ul>
						</div>
					</div>
					<div className={styles.row}>
						<div className={` ${styles.block__01__left} ${styles.row}`}>
							<ul>
							<span className={styles.bloc__title}>customizable design</span>
								<li>branding</li>
								<li>design &amp; copywriting</li>
								<li>concept development</li>
								<li>user experience</li>
							</ul>
						</div>
					</div>
					<div className={styles.row}>
						<div className={` ${styles.block__01__left} ${styles.row}`}>
							<ul>
							<span className={styles.bloc__title}>customizable design</span>
								<li>branding</li>
								<li>design &amp; copywriting</li>
								<li>concept development</li>
								<li>user experience</li>
							</ul>
						</div>
					</div>
					<div className={styles.row}>
						<div className={` ${styles.block__01__left} ${styles.row}`}>
							<ul>
							<span className={styles.bloc__title}>customizable design</span>
								<li>branding</li>
								<li>design &amp; copywriting</li>
								<li>concept development</li>
								<li>user experience</li>
							</ul>
						</div>
					</div>
					<div className={` ${styles.block__01__left} ${styles.row}`}>
						<div className={` ${styles.block__01__left} ${styles.row}`}>
							<ul>
							<span className={styles.bloc__title}>customizable design</span>
								<li>branding</li>
								<li>design &amp; copywriting</li>
								<li>concept development</li>
								<li>user experience</li>
							</ul>
						</div>
					</div>
					<div className={styles.row}>
						<div className={` ${styles.block__01__left} ${styles.row}`}>
							<ul>
							<span className={styles.bloc__title}>customizable design</span>
								<li>branding</li>
								<li>design &amp; copywriting</li>
								<li>concept development</li>
								<li>user experience</li>
							</ul>
						</div>
					</div>
					
					
				</div>
				

				<div className={styles.col}>
                <Image src="/test02.jpg" width={555} height={365} />

				</div>
			</div>
		</div>
                   </section>

        </>
    )
}

export default qualityStandarts

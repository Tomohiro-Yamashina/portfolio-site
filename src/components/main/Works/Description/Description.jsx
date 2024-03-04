// React
import { useRef } from 'react';
// Component
import { SubTitle } from '../../../Utility/Utility.jsx';
// SCSS
import styles from './Description.module.scss';
// JSON
import Data from './clientList.json';
// GSAP
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Description() {
	const container = useRef(null);
	const subTitle = useRef(null);

	useGSAP(
		() => {
			const subTitleMotion = (start, end) => {
				gsap.from(subTitle.current, {
					alpha: 0,
					xPercent: -50,
					duration: 0.4,
					ease: 'power3.out',
					scrollTrigger: {
						// markers: true,
						trigger: subTitle.current,
						scrub: 1,
						start: `top ${start}}%`,
						end: `bottom ${end}%`,
						invalidateOnRefresh: true,
					},
				});
			};

			const contentsMotion = (end) => {
				gsap.from(`.${styles.description}`, {
					scale: 0.95,
					alpha: 0,
					yPercent: 10,
					duration: 0.4,
					ease: 'power3.out',
					scrollTrigger: {
						// markers: true,
						trigger: `.${styles.description}`,
						scrub: 1,
						start: 'top 90%',
						end: `${end}% bottom`,
						invalidateOnRefresh: true,
					},
				});
			};

			subTitleMotion(80, 50);
			let mm = gsap.matchMedia();
			mm.add('(width > 768px)', () => {
				contentsMotion(25);
			});
			mm.add('(width <= 768px)', () => {
				contentsMotion(10);
			});
		},
		{ scope: container },
	);

	function List() {
		return (
			<>
				{Data.map((item) => {
					return (
						<div key={item.id} className={styles.details}>
							<h3 className={styles.subHeading}>{item.title}</h3>
							<div className={styles.listContainer}>
								<ul className={styles.list}>
									{item.list.map((i, index) => {
										return <li key={index}>{i}</li>;
									})}
								</ul>
							</div>
						</div>
					);
				})}
			</>
		);
	}

	return (
		<section className={styles.container} ref={container}>
			<SubTitle ref={subTitle}>CLIENT</SubTitle>
			<div className={styles.description}>
				<List />
			</div>
		</section>
	);
}

export default Description;

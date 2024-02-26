// React
import { useRef } from 'react';
// Component
import Graphic from './Graphic/Graphic.jsx';
import Website from './Website/Website.jsx';
import Description from './Description/Description.jsx';
import ScrollLottie from '@/components/Utility/ScrollLottie.jsx';
// SCSS
import styles from './Works.module.scss';
// GSAP
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Works({ id }) {
	const container = useRef(null);
	const title = useRef(null);

	useGSAP(
		() => {
			gsap.utils.toArray(`.${styles.char}`).forEach((target) =>
				gsap.from(target, {
					alpha: 0,
					y: '50%',
					// stagger: 0.04,
					// delay: i * 0.02,
					duration: 0.4,
					ease: 'power4.out',
					scrollTrigger: {
						trigger: container.current,
						start: 'top 25%',
						end: 'bottom bottom',
						scrub: 1,
						invalidateOnRefresh: true,
						toggleActions: 'play none none reverse ',
						// markers: true,
					},
				}),
			);
		},
		{ scope: container },
	);

	return (
		<>
			<article className={styles.container} id={id}>
				<div className={styles.titleWrapper} ref={container}>
					<h2 className={styles.title} ref={title}>
						<span className={styles.char}>W</span>
						<span className={styles.char}>O</span>
						<span className={styles.char}>R</span>
						<span className={styles.char}>K</span>
						<span className={styles.char}>S</span>
					</h2>
					<ScrollLottie />
				</div>
				<Graphic />
				<Website />
				<Description />
			</article>
		</>
	);
}

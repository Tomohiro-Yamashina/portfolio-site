// React
import { useRef, useEffect } from 'react';
// Component
import Graphic from './Graphic/Graphic.jsx';
import Website from './Website/Website.jsx';
import Description from './Description/Description.jsx';
// Lottie
import ScrollLottie from '@/components/Utility/ScrollLottie.jsx';
// SCSS
import styles from './Works.module.scss';
// GSAP
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Works({ id }) {
	const container = useRef(null);
	const title = useRef(null);
	const lottieRef = useRef(null);

	useEffect(() => {
		lottieRef.current.setSpeed(1.5);
	});

	useGSAP(
		() => {
			gsap.fromTo(
				container.current,
				{
					backgroundColor: 'hsl(0, 0%, 8%)',
				},
				{
					backgroundColor: 'transparent',
					ease: 'power4.out',
					scrollTrigger: {
						trigger: `.${styles.titleWrapper}`,
						start: 'top 35%',
						end: 'center center',
						scrub: 1,
						invalidateOnRefresh: true,
						toggleActions: 'play none none reverse ',
						// markers: true,
					},
				},
			);
			gsap.from(title.current, {
				alpha: 0,
				y: '50%',
				ease: 'power4.out',
				scrollTrigger: {
					trigger: `.${styles.titleWrapper}`,
					start: 'top 25%',
					end: 'center center',
					scrub: 1,
					invalidateOnRefresh: true,
					toggleActions: 'play none none reverse ',
					// markers: true,
				},
			});
		},
		{ scope: container },
	);

	return (
		<article className={styles.container} id={id} ref={container}>
			<div className={styles.titleWrapper}>
				<h2 className={styles.title} ref={title}>
					WORKS
				</h2>
				<ScrollLottie ref={lottieRef} />
			</div>

			<Graphic />
			{/* <hr /> */}
			<Website />
			{/* <hr /> */}
			<Description />
			{/* <hr /> */}
		</article>
	);
}

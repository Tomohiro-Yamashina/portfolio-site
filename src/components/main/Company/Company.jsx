// React
import { useRef } from 'react';
// Component
import Information from './Information.jsx';
import Access from './Access';
import ScrollLottie from '@/components/Utility/ScrollLottie.jsx';
// SCSS
import styles from './Company.module.scss';
// GSAP
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Company({ id }) {
	const container = useRef(null);
	const title = useRef(null);

	useGSAP(
		() => {
			gsap.set(`.${styles.title}`, {
				color: '#fff',
			});
			gsap.to(container.current, {
				backgroundColor: '#151515',
				duration: 0.4,
				ease: 'power4.Out',
				scrollTrigger: {
					trigger: container.current,
					start: 'top 25%',
					invalidateOnRefresh: true,
					toggleActions: 'play none none reverse ',
					// markers: true,
				},
			});
			gsap.from(`.${styles.title}`, {
				alpha: 0,
				y: '50%',
				duration: 0.4,
				ease: 'power4.Out',
				scrollTrigger: {
					trigger: `.${styles.titleWrapper}`,
					start: 'top 25%',
					scrub: 1,
					end: 'bottom bottom',
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
					COMPANY
				</h2>
				<ScrollLottie colorChange={'#fff'} />
			</div>
			<Information />
			<Access />
		</article>
	);
}

export default Company;

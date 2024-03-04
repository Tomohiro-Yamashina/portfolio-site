// React
import { useRef, useEffect } from 'react';
// Component
import Information from './Information.jsx';
import Access from './Access';
// Lottie
import ScrollLottie from '@/components/Utility/ScrollLottie.jsx';
// SCSS
import styles from './Company.module.scss';
// GSAP
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// image
// import company from '@/assets/img/company.jpg';
import malts from '@/assets/img/wheat_field.jpg';
import harajuku from '@/assets/img/harajuku.jpg';

function Company({ id }) {
	const container = useRef(null);
	const title = useRef(null);
	const lottieRef = useRef(null);

	useEffect(() => {
		lottieRef.current.setSpeed(1.5);
	});

	useGSAP(
		() => {
			gsap.set(`.${styles.title}`, {
				color: 'hsl(0, 0%, 100%)',
			});
			gsap.to(container.current, {
				backgroundColor: 'hsl(0, 0%, 8%)',
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
			<div className={styles.inner}>
				<div className={styles.titleWrapper}>
					<h2 className={styles.title} ref={title}>
						COMPANY
					</h2>
					<ScrollLottie ref={lottieRef} colorChange={'#fff'} />
				</div>
				<Information />
				<Access />
			</div>
			<img className={styles.img} src={harajuku} alt="company-image" />
		</article>
	);
}

export default Company;

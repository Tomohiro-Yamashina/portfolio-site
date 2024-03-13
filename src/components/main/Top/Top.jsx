// React
import { useRef } from 'react';
// Component
import LoadingAnimation from './LoadingAnimation/LoadingAnimation.jsx';
import HeroImage from './HeroImage/HeroImage.jsx';
// SCSS
import styles from './Top.module.scss';
// GSAP
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Top() {
	const container = useRef(null);
	const image = useRef(null);

	useGSAP(
		() => {
			gsap.to(image.current, {
				scale: 1.1,
				scrollTrigger: {
					// markers: true,
					trigger: container.current,
					scrub: 0.5,
					start: 'top top',
					end: 'bottom top',
					toggleActions: 'play none none reverse ',
					invalidateOnRefresh: true,
				},
			});
		},
		{ scope: container },
	);

	return (
		<div className={styles.container} ref={container}>
			<LoadingAnimation />
			<HeroImage ref={image} />
		</div>
	);
}

export default Top;

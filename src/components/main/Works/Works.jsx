// React
import { useRef } from 'react';
// Component
import Title from '@/components/Utility/Title/Title.jsx';
import Graphic from './Graphic/Graphic.jsx';
import Website from './Website/Website.jsx';
import Description from './Description/Description.jsx';
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
			const tl = gsap.timeline({
				scrollTrigger: {
					// markers: true,
					trigger: container.current,
					start: 'top center',
					end: 'top top',
					scrub: 1,
					invalidateOnRefresh: true,
				},
			});

			tl.fromTo(
				container.current,
				{
					backgroundColor: 'hsl(0, 0%, 8%)',
				},
				{
					backgroundColor: 'transparent',
					duration: 0.4,
					ease: 'power4.out',
				},
			).fromTo(
				title.current,
				{
					alpha: 0,
					y: '50%',
				},
				{
					alpha: 1,
					y: '0%',
					duration: 0.4,
					ease: 'power4.out',
				},
				'<',
			);
		},
		{ scope: container },
	);

	return (
		<article className={styles.container} id={id} ref={container}>
			<Title lottieType={'scroll'} lottieSetSpeed={1.6} ref={title}>
				WORKS
			</Title>
			<Graphic />
			{/* <hr /> */}
			<Website />
			{/* <hr /> */}
			<Description />
			{/* <hr /> */}
		</article>
	);
}

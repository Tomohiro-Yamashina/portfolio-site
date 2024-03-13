// React
import { useRef } from 'react';
// Component
import Explanation from './Explanation.jsx';
import Title from '@/components/Utility/Title/Title.jsx';
// SCSS
import styles from './AboutUs.module.scss';
// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function AboutUs({ id }) {
	// DOM要素を取得
	const container = useRef(null);
	const title = useRef(null);

	useGSAP(
		() => {
			const containerFadeIn = () => {
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
						alpha: 0,
					},
					{
						alpha: 1,
						duration: 0.4,
						ease: 'power4.out',
					},
					'<',
				);
			};

			const titleFadeIn = () => {
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
			};

			containerFadeIn();
			titleFadeIn();
		},
		{ scope: container },
	);

	return (
		<article className={styles.aboutUsContainer} id={id} ref={container}>
			<div className={styles.background}>
				<Title
					colorLight={true}
					lottieType={'scroll'}
					lottieSetSpeed={1.6}
					ref={title}
				>
					ABOUT US
				</Title>
				<Explanation />
			</div>
		</article>
	);
}

export default AboutUs;

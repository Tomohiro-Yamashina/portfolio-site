// React
import { useRef } from 'react';
// Component
import Title from '@/components/Utility/Title/Title.jsx';
import Information from './Information.jsx';
import Access from './Access';
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
					opacity: 0,
					y: '50%',
				},
				{
					opacity: 1,
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
			<div className={styles.background}>
				<div className={styles.inner}>
					<Title
						colorLight={true}
						lottieType={'scroll'}
						lottieSetSpeed={1.6}
						ref={title}
					>
						COMPANY
					</Title>
					<Information />
					<Access />
				</div>
			</div>
		</article>
	);
}

export default Company;

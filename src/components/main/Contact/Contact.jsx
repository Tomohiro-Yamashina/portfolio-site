// React
import { useRef } from 'react';
// Component
import Title from '@/components/Utility/Title/Title.jsx';
import From from './From/From.jsx';
// SCSS
import styles from './Contact.module.scss';
// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Contact({ id }) {
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
			<Title lottieType={'mail'} lottieSetSpeed={2} ref={title}>
				CONTACT
			</Title>
			<div className={styles.outer}>
				<div className={styles.inner}>
					<From />
				</div>
			</div>
		</article>
	);
}

export default Contact;

// React
import { useRef } from 'react';
// Component
import From from './From/From.jsx';
import MailLottie from '@/components/Utility/MailLottie.jsx';
// SCSS
import styles from './Contact.module.scss';
// GSAP
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Contact({ id }) {
	const container = useRef(null);
	const title = useRef(null);

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
			gsap.from(`.${styles.title}`, {
				alpha: 0,
				y: '50%',
				duration: 0.4,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: `.${styles.titleWrapper}`,
					start: 'top 25%',
					end: 'bottom bottom',
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
					CONTACT
				</h2>
				<MailLottie />
			</div>
			<div className={styles.outer}>
				<div className={styles.inner}>
					<From />
				</div>
			</div>
		</article>
	);
}

export default Contact;

// Component
import Explanation from './Explanation.jsx';
import Logo from './Logo.jsx';
// SCSS
import styles from './AboutUs.module.scss';
// React
import { useRef } from 'react';
// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function AboutUs({ id }) {
	// DOM要素を取得
	const container = useRef(null);
	const aboutUs = useRef(null);
	const aboutUsText = useRef(null);
	const image01 = useRef(null);
	const image02 = useRef(null);

	// Animation
	useGSAP(
		() => {
			const aboutUsTextScroll = () => {
				const containerHeight = aboutUs.current.offsetHeight;
				const aboutUsTextHeight = aboutUsText.current.offsetHeight;

				gsap.to(aboutUsText.current, {
					y: -aboutUsTextHeight + containerHeight,
					ease: 'none',
					scrollTrigger: {
						// markers: true,
						trigger: container.current,
						pin: true,
						anticipatePin: 1,
						end: `+=${aboutUsTextHeight}`,
						scrub: 0.5,
						invalidateOnRefresh: true,
					},
				});
			};

			const aboutUsLogoScrollAlpha = (target, num) =>
				gsap.to(target, {
					autoAlpha: 0,
					duration: 0.4,
					ease: 'power4.Out',
					scrollTrigger: {
						// markers: true,
						trigger: aboutUsText.current,
						toggleActions: 'play none none reverse ',
						start: `${num}% top`,
						invalidateOnRefresh: true,
						fastScrollEnd: true,
					},
				});

			let mm = gsap.matchMedia();
			mm.add('(1024px <= width)', () => {
				aboutUsTextScroll();
				aboutUsLogoScrollAlpha(image01.current, 5);
				aboutUsLogoScrollAlpha(image02.current, 35);
			});
		},
		{ scope: container },
	);

	return (
		<article className={styles.container} id={id} ref={container}>
			<div className={styles.outer}>
				<div className={styles.inner} ref={aboutUs}>
					<Explanation ref={aboutUsText} />
					<Logo image01Ref={image01} image02Ref={image02} />
				</div>
			</div>
		</article>
	);
}

export default AboutUs;

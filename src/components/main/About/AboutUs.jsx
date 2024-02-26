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
	const aboutUs = useRef(null);
	const container = useRef(null);
	const aboutUsText = useRef(null);
	const image01 = useRef(null);
	const image02 = useRef(null);

	// アニメーション
	useGSAP(
		() => {
			const target = aboutUs.current;
			const containerHeight = container.current.offsetHeight;
			const aboutUsTextHeight = aboutUsText.current.offsetHeight;

			const aboutUsTextScroll = () =>
				gsap.to(aboutUsText.current, {
					y: -aboutUsTextHeight + containerHeight,
					ease: 'none',
					scrollTrigger: {
						trigger: target,
						pin: true,
						scrub: true,
						start: 'top top',
						end: aboutUsTextHeight,
						anticipatePin: 1,
						invalidateOnRefresh: true,
					},
				});

			const aboutUsLogoScrollAlpha01 = () =>
				gsap.to(image01.current, {
					scrollTrigger: {
						trigger: aboutUsText.current,
						start: '5% top',
						anticipatePin: 1,
						invalidateOnRefresh: true,
						toggleActions: 'play none none reverse ',
					},
					autoAlpha: 0,
					duration: 0.4,
					ease: 'power4.Out',
				});

			const aboutUsLogoScrollAlpha02 = () =>
				gsap.to(image02.current, {
					scrollTrigger: {
						trigger: aboutUsText.current,
						start: '35% top',
						anticipatePin: 1,
						invalidateOnRefresh: true,
						toggleActions: 'play none none reverse ',
					},
					autoAlpha: 0,
					duration: 0.4,
					ease: 'power4.Out',
				});

			let mm = gsap.matchMedia();
			mm.add('(min-width: 1024px)', () => {
				aboutUsTextScroll();
				aboutUsLogoScrollAlpha01();
				aboutUsLogoScrollAlpha02();
			});
		},
		{ scope: aboutUs },
	);

	return (
		<article className={styles.container} id={id} ref={aboutUs}>
			<div className={styles.outer} ref={container}>
				<Explanation ref={aboutUsText} />
				<Logo image01Ref={image01} image02Ref={image02} />
			</div>
		</article>
	);
}

export default AboutUs;

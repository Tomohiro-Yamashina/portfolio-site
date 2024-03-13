// React
import { useRef, useEffect } from 'react';
// Component
import MaltsLogo from './MaltsLogo/MaltsLogo.jsx';
// SCSS
import styles from './LoadingAnimation.module.scss';
// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// Lenis
import { useLenis } from '@studio-freight/react-lenis';

function LoadingAnimation() {
	// DOM要素を取得
	const container = useRef(null);
	const maltsLogo = useRef(null);

	// Lenisインスタンスを作成
	const lenis = useLenis();

	// スクロール制御
	useEffect(() => {
		const scrollStop = () => {
			lenis.stop();
		};
		addEventListener('load', scrollStop);
		return () => {
			removeEventListener('load', scrollStop);
		};
	}, [lenis]);

	// Loading Animation
	useGSAP(
		() => {
			let mm = gsap.matchMedia();
			mm.add(
				{
					isDesktop: '(width > 768px)',
					isMobile: '(width <= 768px)',
				},
				(context) => {
					let { isDesktop, isMobile } = context.conditions;

					const tl = gsap.timeline({
						delay: 1,
					});

					tl.to(container.current, {
						ease: 'power2s.out',
						backgroundColor: 'transparent',
						duration: 1,
					})
						.to(
							maltsLogo.current,
							{
								ease: 'power3.out',
								borderColor: 'hsl(30, 25%, 95%)',
								duration: 1,
							},
							'-=100%',
						)
						.to(
							maltsLogo.current.firstElementChild,
							{
								ease: 'power3.out',
								filter:
									'invert(98%) sepia(2%) saturate(2879%) hue-rotate(288deg) brightness(119%) contrast(90%)',
								duration: 1,
							},
							'-=100%',
						);

					gsap.utils
						.toArray(`.${styles.flexItems}`)
						.forEach((target, index) => {
							const delay = index === 0 ? '-=25%' : '-=70%';
							tl.to(
								target,
								{
									ease: 'power3.out',
									xPercent: isMobile ? 100 : 0,
									yPercent: isDesktop ? -100 : 0,
									duration: 0.8,
									alpha: 0.65,
								},
								delay,
							);
						});

					tl.to(
						maltsLogo.current,
						{
							ease: 'power3.out',
							scale: 1.2,
							duration: 0.8,
						},
						'-=100%',
					).to(
						container.current,
						{
							duration: 0.8,
							zIndex: 1,
							onComplete: () => {
								lenis.start();
							},
						},
						'-=100%',
					);
				},
			);
		},
		{ dependencies: [lenis], scope: container },
	);

	return (
		<div className={styles.container} ref={container}>
			<div className={styles.flex}>
				<div className={`${styles.flexItems} ${styles.first}`}></div>
				<div className={`${styles.flexItems} ${styles.second}`}></div>
				<div className={`${styles.flexItems} ${styles.third}`}></div>
			</div>
			<MaltsLogo ref={maltsLogo} />
		</div>
	);
}

export default LoadingAnimation;

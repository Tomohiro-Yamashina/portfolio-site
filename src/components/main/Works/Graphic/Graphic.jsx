import { useRef } from 'react';
import styles from './Graphic.module.scss';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SubTitle } from '../../../Utility/Utility.jsx';

function Graphic() {
	// 画像を取得
	const images = Object.values(
		import.meta.glob('../../../../assets/img/works/graphic/*', {
			eager: true,
			as: 'url',
		}),
	);

	// 画像を仕分け
	const resultImages = images.reduce((accumulator, current, index, array) => {
		if (index % 2 === 0) {
			accumulator.push([current, array[index + 1]]);
		}
		return accumulator;
	}, []);

	const container = useRef(null);
	const imgContainer = useRef(null);
	const subTitle = useRef(null);

	useGSAP(
		() => {
			const subTitleMotion = (num) => {
				gsap.from(subTitle.current, {
					alpha: 0,
					xPercent: -100,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: container.current,
						start: `top ${num}%`,
						end: '90% bottom',
						scrub: 2,
						invalidateOnRefresh: true,
						toggleActions: 'play none none reverse',
						// markers: true,
					},
				});
			};

			const imgHorizontalMotion = () => {
				const imageContainerWidth = imgContainer.current.offsetWidth;
				const slides = gsap.utils.toArray(`.${styles.figure}`);
				gsap.to(
					slides,
					{
						xPercent: -100 * (slides.length - 1),
						scrollTrigger: {
							trigger: container.current,
							pin: true,
							scrub: 3,
							start: 'bottom bottom',
							end: `+=${imageContainerWidth}`,
							snap: 1 / (slides.length - 1),
							anticipatePin: 1,
							invalidateOnRefresh: true,
						},
					},
					container,
				);
			};

			const imgMotion = () => {
				gsap.utils.toArray(`.${styles.figure}`).forEach((target) => {
					gsap.from(target, {
						scale: 0.95,
						alpha: 0,
						yPercent: 20,
						duration: 0.4,
						ease: 'power4.out',
						scrollTrigger: {
							trigger: target,
							scrub: 1,
							start: 'top 80%',
							end: 'bottom bottom',
							invalidateOnRefresh: true,
							// markers: true,
						},
					});
				});
			};

			let mm = gsap.matchMedia();
			mm.add('(min-width: 769px)', () => {
				subTitleMotion(40);
				imgHorizontalMotion();
			});
			mm.add('(max-width: 768px)', () => {
				imgMotion();
			});
		},
		{ dependencies: [subTitle], scope: container },
	);

	return (
		<section className={styles.container} ref={container}>
			<div className={styles.wrapper}>
				<SubTitle ref={subTitle}>GRAPHIC</SubTitle>
				<div className={styles.imageContainer} ref={imgContainer}>
					<div className={styles.flex}>
						{resultImages.map((image, index) => (
							<figure className={styles.figure} key={index}>
								<picture className={styles.show}>
									<source />
									<img src={image[0]} alt="Graphic Work" />
								</picture>
								<picture className={styles.hidden}>
									<source />
									<img src={image[1]} alt="Graphic Work" />
								</picture>
							</figure>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Graphic;

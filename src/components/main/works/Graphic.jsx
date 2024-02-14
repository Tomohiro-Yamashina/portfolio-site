import { useRef } from 'react';
import styles from './Graphic.module.scss';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Graphic() {
	// 画像を取得
	const images = Object.values(
		import.meta.glob('../../../assets/img/works/graphic/*', {
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

	useGSAP(
		() => {
			const wrapperWidth = container.current.offsetWidth;
			const slides = gsap.utils.toArray(`.${styles.figure}`);

			let mm = gsap.matchMedia();
			mm.add('(min-width: 768px)', () => {
				gsap.to(slides, {
					xPercent: -100 * (slides.length - 1),
					ease: 'sine.out',
					scrollTrigger: {
						trigger: container.current,
						pin: true,
						scrub: 2,
						start: 'bottom bottom',
						end: `+=${wrapperWidth}`,
						snap: 1 / (slides.length - 1),
						anticipatePin: 1,
						invalidateOnRefresh: true,
					},
				});
			});
		},
		{ scope: container },
	);

	return (
		<>
			<section className={styles.container} ref={container}>
				<div className={styles.titleWrapper}>
					<div className={styles.titleWrapper}>
						<h2 className={styles.title}>WORKS</h2>
					</div>
					<div className={styles.wrapper}>
						<div className={styles.subTitleWrapper}>
							<h2 className={styles.subTitle}>GRAPHIC</h2>
						</div>

						<div className={styles.imageContainer}>
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
				</div>
			</section>
		</>
	);
}

export default Graphic;

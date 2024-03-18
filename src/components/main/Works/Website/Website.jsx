// React
import { useState, useRef } from 'react';
// Component
import { SubTitle } from '@/components/Utility/Utility.jsx';
import ImageDialog from '../ImageDialog/ImageDialog.jsx';
// SCSS
import styles from './Website.module.scss';
// GSAP
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// Lenis
import { useLenis } from '@studio-freight/react-lenis';

function Website() {
	const images = Object.values(
		import.meta.glob('../../../../assets/img/works/website/*', {
			eager: true,
			query: '?url',
			import: 'default',
		}),
	);

	const resultImages = images.reduce((accumulator, current, index, array) => {
		if (index % 2 === 0) {
			accumulator.push([current, array[index + 1]]);
		}
		return accumulator;
	}, []);

	const [dialogImages, setDialogImages] = useState([]);
	const dialog = useRef(null);
	const lenis = useLenis();

	const openHandler = (index) => {
		dialog.current.showModal();
		lenis.stop();
		setDialogImages(resultImages[index]);
	};

	const container = useRef(null);
	const imgContainer = useRef(null);
	const subTitle = useRef(null);

	useGSAP(
		() => {
			const subTitleMotion = (start, end) => {
				gsap.from(subTitle.current, {
					alpha: 0,
					xPercent: -50,
					duration: 0.4,
					ease: 'power3.out',
					scrollTrigger: {
						// markers: true,
						trigger: subTitle.current,
						scrub: 1,
						start: `top ${start}}%`,
						end: `bottom ${end}%`,
						invalidateOnRefresh: true,
					},
				});
			};

			const imgHorizontalMotion = () => {
				const imageContainerWidth = imgContainer.current.offsetWidth;
				const slides = gsap.utils.toArray(`.${styles.figure}`);
				gsap.to(slides, {
					xPercent: -100 * (slides.length - 1),
					ease: 'none',
					scrollTrigger: {
						// markers: true,
						trigger: container.current,
						pin: true,
						anticipatePin: 1,
						scrub: 0.5,
						end: `+=${imageContainerWidth}`,
						invalidateOnRefresh: true,
					},
				});
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
							// markers: true,
							trigger: target,
							scrub: 1,
							start: 'top 90%',
							invalidateOnRefresh: true,
						},
					});
				});
			};

			let mm = gsap.matchMedia();
			mm.add('(width > 768px)', () => {
				subTitleMotion(50, 20);
				imgHorizontalMotion();
			});
			mm.add('(width <= 768px)', () => {
				subTitleMotion(80, 50);
				imgMotion();
			});
		},
		{ scope: container },
	);

	return (
		<section className={styles.container} ref={container}>
			<div className={styles.wrapper}>
				<SubTitle ref={subTitle}>WEBSITE</SubTitle>
				<div className={styles.imageContainer} ref={imgContainer}>
					<div className={styles.flex}>
						<ImageDialog ref={dialog} images={dialogImages} />
						{resultImages.map((image, index) => (
							<figure
								className={styles.figure}
								key={index}
								onClick={() => openHandler(index)}
							>
								<picture className={styles.show}>
									<source />
									<img src={image[0]} alt="website Works" />
								</picture>
								<picture className={styles.hidden}>
									<source />
									<img src={image[1]} alt="website Works" />
								</picture>
							</figure>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Website;

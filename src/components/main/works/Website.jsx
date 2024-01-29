import { useRef } from 'react';
import styles from './Graphic.module.scss';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// 使用する gsapプラグイン を登録する
gsap.registerPlugin(ScrollTrigger);

function Website() {
	const images = Object.values(
		import.meta.glob('../../../assets/img/works/website/*', {
			eager: true,
			as: 'url',
		}),
	);

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
					xPercent: -100 * (slides.length - 1), // -X軸方向に移動
					// x: 32 * (slides.length - 1),
					ease: 'none', // アニメーションのイージング(noneは定速)
					scrollTrigger: {
						trigger: container.current, // アニメーション開始のトリガー要素
						pin: true, // 要素を固定
						scrub: 1, // スクロール量に合わせてアニメーション
						start: 'bottom bottom', // アニメーションが始まる位置
						end: `+=${wrapperWidth}`, // アニメーションが終わる位置
						anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
						invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
						// markers: true,
					},
				});
			});
		},
		{ scope: container },
	);

	return (
		<>
			<section className={styles.container} ref={container}>
				<div className={styles.wrapper}>
					<div className={styles.subTitleWrapper}>
						<h2 className={styles.subTitle}>WEBSITE</h2>
					</div>

					<div className={styles.imageContainer}>
						<div className={styles.flex}>
							{resultImages.map((image, index) => (
								<figure className={styles.figure} key={index}>
									<picture className={styles.show}>
										<source />
										<img src={image[0]} alt="" />
									</picture>
									<picture className={styles.hidden}>
										<source />
										<img src={image[1]} alt="" />
									</picture>
								</figure>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Website;

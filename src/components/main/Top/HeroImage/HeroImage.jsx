// React
import { useState, useEffect, forwardRef } from 'react';
// SCSS
import styles from './HeroImage.module.scss';

// eslint-disable-next-line react/display-name
const HeroImage = forwardRef((props, ref) => {
	const [heroImage, setHeroImage] = useState();

	// 時間帯によって画像の出力を変更する
	useEffect(() => {
		const currentDate = new Date();
		const currentHour = currentDate.getHours();

		let images;
		if (6 <= currentHour && currentHour < 16) {
			images = Object.values(
				import.meta.glob('../../../../assets/img/hero/daytime/*', {
					eager: true,
					query: '?url',
					import: 'default',
				}),
			);
		} else if (16 <= currentHour && currentHour < 18) {
			images = Object.values(
				import.meta.glob('../../../../assets/img/hero/evening/*', {
					eager: true,
					query: '?url',
					import: 'default',
				}),
			);
		} else {
			images = Object.values(
				import.meta.glob('../../../../assets/img/hero/nighttime/*', {
					eager: true,
					query: '?url',
					import: 'default',
				}),
			);
		}
		const randomNum = Math.floor(Math.random() * images.length);
		setHeroImage(images[randomNum]);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.heroImage}>
				<span>
					<img
						className={styles.image}
						src={heroImage}
						alt="hero-image"
						ref={ref}
					/>
				</span>
			</div>
		</div>
	);
});

export default HeroImage;

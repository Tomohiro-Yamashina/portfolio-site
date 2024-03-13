// React
import { useRef, useEffect, forwardRef } from 'react';
// SCSS
import styles from './Title.module.scss';
// Lottie
import ScrollLottie from '@/components/Utility/ScrollLottie.jsx';
import MailLottie from '@/components/Utility/MailLottie.jsx';

// eslint-disable-next-line react/display-name
const Title = forwardRef(
	({ colorLight, lottieType, lottieSetSpeed = 1, children }, ref) => {
		// DOM要素を取得
		const lottieRef = useRef(null);
		// 再生速度を設定
		useEffect(() => {
			lottieRef.current.setSpeed(lottieSetSpeed);
		});

		return (
			<div className={styles.titleWrapper} ref={ref}>
				{colorLight ? (
					<>
						<h2 className={styles.titleColorLight}>{children}</h2>
						{lottieType === 'scroll' && (
							<ScrollLottie ref={lottieRef} colorLight={true} />
						)}
						{lottieType === 'mail' && <MailLottie ref={lottieRef} />}
					</>
				) : (
					<>
						<h2 className={styles.titleColorDark}>{children}</h2>
						{lottieType === 'scroll' && <ScrollLottie ref={lottieRef} />}
						{lottieType === 'mail' && <MailLottie ref={lottieRef} />}
					</>
				)}
			</div>
		);
	},
);

export default Title;

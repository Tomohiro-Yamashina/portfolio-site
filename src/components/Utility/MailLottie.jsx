// React
import { useState, useEffect, forwardRef } from 'react';
// Lottie
import Lottie from 'lottie-react';
// JSON
import mailAnimation from '@/library/mailAnimation.json';

// eslint-disable-next-line react/display-name
const MailLottie = forwardRef((props, ref) => {
	const [style, setStyle] = useState({
		position: 'absolute',
		width: '500px',
		top: '50%',
	});

	useEffect(() => {
		const handleResize = () => {
			// 画面の幅に応じてスタイルを変更する
			if (window.innerWidth <= 576) {
				setStyle((prevStyle) => ({
					...prevStyle,
					width: '300px',
					top: '55%',
				}));
			} else if (window.innerWidth <= 768) {
				setStyle((prevStyle) => ({
					...prevStyle,
					width: '400px',
					top: '52%',
				}));
			} else {
				setStyle((prevStyle) => ({
					...prevStyle,
					width: '500px',
					top: '50%',
				}));
			}
		};
		window.addEventListener('load', handleResize);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return <Lottie animationData={mailAnimation} style={style} lottieRef={ref} />;
});

export default MailLottie;

import { useLottie } from 'lottie-react';
import mailAnimation from '@/library/mailAnimation.json';
import { useState, useEffect } from 'react';

const MailLottie = () => {
	const options = {
		animationData: mailAnimation,
		loop: true,
		autoplay: true,
	};
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
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const { View } = useLottie(options, style);

	return View;
};

export default MailLottie;

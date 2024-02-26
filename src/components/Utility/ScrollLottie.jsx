// React
import { useState, useEffect } from 'react';

import { useLottie } from 'lottie-react';
import scrollAnimation from '@/library/scrollAnimation.json';
import scrollAnimationWhite from '@/library/scrollAnimationWhite.json';

const ScrollLottie = ({ colorChange }) => {
	console.log(colorChange);

	const [options, setOptions] = useState({
		animationData: scrollAnimation,
		loop: true,
		autoplay: true,
	});
	const [style, setStyle] = useState({
		position: 'absolute',
		width: '200px',
		top: '80%',
	});

	useEffect(() => {
		if (colorChange === '#fff') {
			setOptions((prev) => ({
				...prev,
				animationData: scrollAnimationWhite,
			}));
		}

		const handleResize = () => {
			// 画面の幅に応じてスタイルを変更する
			if (window.innerWidth <= 576) {
				setStyle((prevStyle) => ({
					...prevStyle,
					width: '100px',
					top: '70%',
				}));
			} else if (window.innerWidth <= 768) {
				setStyle((prevStyle) => ({
					...prevStyle,
					width: '150px',
					top: '75%',
				}));
			} else {
				setStyle((prevStyle) => ({
					...prevStyle,
					width: '200px',
					top: '75%',
				}));
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [colorChange]);

	const { View } = useLottie(options, style);

	return View;
};

export default ScrollLottie;

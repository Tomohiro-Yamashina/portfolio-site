// React
import { useState, useEffect, forwardRef } from 'react';
// Lottie
import Lottie from 'lottie-react';
// JSON
import scrollAnimation from '@/library/scrollAnimation.json';
import scrollAnimationWhite from '@/library/scrollAnimationWhite.json';

// eslint-disable-next-line react/display-name
const ScrollLottie = forwardRef(({ colorChange }, ref) => {
	const [options, setOptions] = useState(null);

	const [style, setStyle] = useState({
		position: 'absolute',
		aspectRatio: '1/1',
		width: '200px',
		top: '80%',
	});

	useEffect(() => {
		colorChange
			? setOptions(scrollAnimationWhite)
			: setOptions(scrollAnimation);

		const handleResize = () => {
			if (window.innerWidth <= 576) {
				setStyle((prevStyle) => ({
					...prevStyle,
					width: '100px',
					top: '65%',
				}));
			} else if (window.innerWidth <= 768) {
				setStyle((prevStyle) => ({
					...prevStyle,
					width: '150px',
					top: '70%',
				}));
			} else {
				setStyle((prevStyle) => ({
					...prevStyle,
					width: '200px',
					top: '75%',
				}));
			}
		};

		window.addEventListener('load', handleResize);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [colorChange]);

	return <Lottie animationData={options} style={style} lottieRef={ref} />;
});

export default ScrollLottie;

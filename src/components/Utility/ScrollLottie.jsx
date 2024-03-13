// React
import { useState, useEffect, forwardRef } from 'react';
// Lottie
import Lottie from 'lottie-react';
// JSON
import scrollAnimation from '@/library/scrollAnimation.json';
import scrollAnimationWhite from '@/library/scrollAnimationWhite.json';

// eslint-disable-next-line react/display-name
const ScrollLottie = forwardRef(({ colorLight }, ref) => {
	const [options, setOptions] = useState(null);

	const [style, setStyle] = useState({
		position: 'absolute',
		aspectRatio: '1/1',
		width: '180px',
		top: '70%',
	});

	useEffect(() => {
		colorLight ? setOptions(scrollAnimationWhite) : setOptions(scrollAnimation);

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
					width: '140px',
					top: '70%',
				}));
			} else {
				setStyle((prevStyle) => ({
					...prevStyle,
					width: '180px',
					top: '70%',
				}));
			}
		};

		window.addEventListener('load', handleResize);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [colorLight]);

	return <Lottie animationData={options} style={style} lottieRef={ref} />;
});

export default ScrollLottie;

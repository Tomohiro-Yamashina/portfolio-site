// SCSS
import styles from './Loading.module.scss';
// React
import { useRef } from 'react';
// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Loading() {
	// DOM要素を取得
	const container = useRef(null);

	// Animation
	useGSAP(
		() => {
			let mm = gsap.matchMedia();
			mm.add('(1024px <= width)', () => {});
		},
		{ scope: container },
	);

	return <article className={styles.container} ref={container}></article>;
}

export default Loading;

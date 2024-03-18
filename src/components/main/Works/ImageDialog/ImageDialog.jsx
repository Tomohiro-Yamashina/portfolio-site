// React
import { forwardRef } from 'react';
// SCSS
import styles from './ImageDialog.module.scss';
// Lenis
import { useLenis } from '@studio-freight/react-lenis';

// eslint-disable-next-line react/display-name
const ImageDialog = forwardRef(({ images }, ref) => {
	const lenis = useLenis();
	const closeHandler = () => {
		ref.current.close();
		lenis.start();
	};

	window.addEventListener('resize', closeHandler);

	return (
		<dialog className={styles.container} ref={ref}>
			<button className={styles.button} onClick={closeHandler} type="button">
				✕
			</button>
			<div className={styles.inner}>
				<div className={styles.flex}>
					<img src={images[0]} alt="" />
					<img src={images[1]} alt="" />
				</div>
			</div>
		</dialog>
	);
});

export default ImageDialog;

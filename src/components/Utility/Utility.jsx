import styles from './Utility.module.scss';
import { forwardRef } from 'react';

const Title = forwardRef(function Title({ children }, ref) {
	return (
		<h2 className={styles.title} ref={ref}>
			{children}
		</h2>
	);
});

const SubTitle = forwardRef(function SubTitle({ children, colorChange }, ref) {
	return (
		<div className={styles.subTitleContainer}>
			<h2 className={styles.subTitle} ref={ref} style={{ color: colorChange }}>
				{children}
			</h2>
		</div>
	);
});

export { Title, SubTitle };

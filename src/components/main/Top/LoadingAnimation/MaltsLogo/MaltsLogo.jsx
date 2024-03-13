// React
import { forwardRef } from 'react';
// SCSS
import styles from './MaltsLogo.module.scss';
// Image
import logoImage from '@/assets/img/malts-logo.svg';

// eslint-disable-next-line react/display-name
const MaltsLogo = forwardRef((props, ref) => {
	return (
		<div className={styles.logoWrapper}>
			<div className={styles.logo} ref={ref}>
				<img src={logoImage} alt="malts-logo" />
			</div>
		</div>
	);
});

export default MaltsLogo;

import styles from '@/components/main/About/Logo.module.scss';
import logo from '@/assets/img/malts-logo.svg';
import aboutImg01 from '@/assets/img/about001.jpg';
import aboutImg02 from '@/assets/img/about002.jpg';

function Logo({ image01Ref, image02Ref }) {
	return (
		<div className={styles.container}>
			<div className={styles.logoMotion01} ref={image01Ref}>
				<div className={styles.outer}>
					<img className={styles.inner} src={logo} alt="malts-logo" />
				</div>
			</div>
			<div className={styles.logoMotion02} ref={image02Ref}>
				<div className={styles.outer}>
					<img className={styles.inner} src={aboutImg01} alt="about-image" />
				</div>
			</div>
			<div className={styles.logoMotion03}>
				<div className={styles.outer}>
					<img className={styles.inner} src={aboutImg02} alt="about-image" />
				</div>
			</div>
		</div>
	);
}

export default Logo;

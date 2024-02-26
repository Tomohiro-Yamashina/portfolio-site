import styles from './LoopText.module.scss';

export function LoopText({ position }) {
	// console.log(position === 'Top');

	if (position === 'Top') {
		return (
			<div className={styles[`loopText${position}`]}>
				<p className={styles.preText}>
					<span>GRAPHIC</span>
					&ensp;
					<span>FARM</span>
					&ensp;
					<span className={styles.malts}>MALTS</span>
					&ensp;
					<span className={styles.harajuku}>HARAJUKU</span>
				</p>
				<p className={styles.postText}>
					<span>GRAPHIC</span>
					&ensp;
					<span>FARM</span>
					&ensp;
					<span className={styles.malts}>MALTS</span>
					&ensp;
					<span className={styles.harajuku}>HARAJUKU</span>
				</p>
			</div>
		);
	}
	if (position === 'Bottom') {
		return (
			<div className={styles[`loopText${position}`]}>
				<p className={styles.preText}>
					<span className={styles.harajuku}>HARAJUKU</span>
					&ensp;
					<span className={styles.malts}>MALTS</span>
					&ensp;
					<span>GRAPHIC</span>
					&ensp;
					<span>FARM</span>
				</p>
				<p className={styles.postText}>
					<span className={styles.harajuku}>HARAJUKU</span>
					&ensp;
					<span className={styles.malts}>MALTS</span>
					&ensp;
					<span>GRAPHIC</span>
					&ensp;
					<span>FARM</span>
				</p>
			</div>
		);
	}
	return (
		<div className={styles[`loopText${position}`]}>
			<p className={styles.preText}>
				<span className={styles.malts}>MALTS</span>
				&ensp;
				<span>GRAPHIC</span>
				&ensp;
				<span>FARM</span>
				&ensp;
				{/* <span className={styles.harajuku}>HARAJUKU</span> */}
			</p>
			<p className={styles.postText}>
				<span className={styles.malts}>MALTS</span>
				&ensp;
				<span>GRAPHIC</span>
				&ensp;
				<span>FARM</span>
				&ensp;
				{/* <span className={styles.harajuku}>HARAJUKU</span> */}
			</p>
		</div>
	);
}

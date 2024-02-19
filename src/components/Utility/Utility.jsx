import styles from './Utility.module.scss';

export function Title({ children }) {
	return (
		<div className={styles.titleContainer}>
			<h2 className={styles.title}>{children}</h2>
		</div>
	);
}
export function SubTitle({ children }) {
	return (
		<div className={styles.subTitleContainer}>
			<h2 className={styles.subTitle}>{children}</h2>
		</div>
	);
}

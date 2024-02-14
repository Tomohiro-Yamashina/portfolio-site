import styles from './Description.module.scss';
import Data from './clientList.json';

function Description() {
	function List({ num }) {
		return (
			<div className={styles.details}>
				<h3 className={styles.subHeading}>{Data[num].title}</h3>
				<ul className={styles.list}>
					{Data[num].list.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		);
	}
	return (
		<>
			<section className={styles.container}>
				<div className={styles.subTitleWrapper}>
					<h2 className={styles.subTitle}>CLIENT LIST</h2>
				</div>
				<div className={styles.description}>
					<List num={0} />
					<List num={1} />
					<List num={2} />
					<List num={3} />
					<List num={4} />
					<List num={5} />
				</div>
			</section>
		</>
	);
}

export default Description;

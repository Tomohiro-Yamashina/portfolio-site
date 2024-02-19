import styles from './Description.module.scss';
import Data from './clientList.json';
import { SubTitle } from '../../../Utility/Utility.jsx';

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
				<SubTitle>CLIENT</SubTitle>

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

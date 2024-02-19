import Graphic from './Graphic/Graphic.jsx';
import Website from './Website/Website.jsx';
import Description from './Description/Description.jsx';
import styles from './Works.module.scss';

export default function Works() {
	return (
		<>
			<article className={styles.container} id="works">
				<Graphic />
				<Website />
				<Description />
			</article>
		</>
	);
}

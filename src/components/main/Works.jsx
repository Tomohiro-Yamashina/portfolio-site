import Graphic from './works/Graphic';
import Website from './works/Website';
import Description from './works/Description';
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

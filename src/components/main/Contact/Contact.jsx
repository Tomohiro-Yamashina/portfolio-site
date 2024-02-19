import styles from './Contact.module.scss';
import From from './From/From.jsx';
import { Title } from '../../Utility/Utility.jsx';

function Contact() {
	return (
		<article className={styles.container} id="contact">
			<div className={styles.outer}>
				<Title>CONTACT</Title>

				<div className={styles.inner}>
					<From />
				</div>
			</div>
		</article>
	);
}

export default Contact;

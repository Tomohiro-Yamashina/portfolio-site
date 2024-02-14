import styles from './Contact.module.scss';
import From from './from/From.jsx';

function Contact() {
	return (
		<>
			<article className={styles.container} id="contact">
				<div className={styles.outer}>
					<div className={styles.titleWrapper}>
						<h2 className={styles.title}>CONTACT</h2>
					</div>

					<div className={styles.inner}>
						<From />
					</div>
				</div>
			</article>
		</>
	);
}

export default Contact;

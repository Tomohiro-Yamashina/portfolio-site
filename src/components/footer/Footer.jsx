import styles from './Footer.module.scss';

function Footer() {
	const now = new Date();
	const year = now.getFullYear();
	return (
		<footer>
			<p>
				Copyright ©{year}
				<a href="#">Malts Corporation</a>
				All Rights Reserved.
			</p>
		</footer>
	);
}

export default Footer;

import styles from './Company.module.scss';
import { Title } from '../../Utility/Utility.jsx';
import Information from './Information.jsx';
import Access from './Access';

function Company() {
	return (
		<article className={styles.container} id="company">
			<Title>COMPANY</Title>
			<Information />
			<Access />
		</article>
	);
}

export default Company;

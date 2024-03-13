// Component
import Accordion from '@/components/main/Company/Accordion';
import { SubTitle } from '../../Utility/Utility.jsx';
// SCSS
import styles from './Information.module.scss';

export default function Information({ changeContainerHeight }) {
	return (
		<>
			<section className={styles.container}>
				<SubTitle colorChange={'#fff'}>INFORMATION</SubTitle>

				<div className={styles.wrapper}>
					<div className={styles.table}>
						<div className={styles.tableItem}>
							<h3>社名</h3>
							<p>株式会社 モルツ</p>
						</div>
						<div className={styles.tableItem}>
							<h3>設立</h3>
							<p>1990年10月1日</p>
						</div>
						<div className={styles.tableItem}>
							<h3>資本金</h3>
							<p>1,000,000円</p>
						</div>
						<div className={styles.tableItem}>
							<h3>代表者</h3>
							<p>代表取締役社長 ** **</p>
						</div>
						<div className={styles.tableItem}>
							<h3>取引銀行</h3>
							<p> さわやか信用金庫 青山渋谷支店 当座******</p>
						</div>
					</div>
					<Accordion changeContainerHeight={changeContainerHeight} />
				</div>
			</section>
		</>
	);
}

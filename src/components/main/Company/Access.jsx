// Component
import { SubTitle } from '../../Utility/Utility.jsx';
// SCSS
import styles from './Access.module.scss';
export default function Access() {
	return (
		<section className={styles.container}>
			<SubTitle colorChange={'#fff'}>ACCESS</SubTitle>
			<div className={styles.access}>
				<div className={styles.location}>
					<div className={styles.textarea}>
						<div className={styles.desc}>
							<h4>所在地</h4>
							<div className={styles.text}>
								〒150-0001
								<br aria-hidden="true" />
								東京都 渋谷区 神宮前 1-10-34
								<br aria-hidden="true" />
								原宿コーポ別館 707
							</div>
						</div>
					</div>
					<div className={styles.textarea}>
						<div className={styles.desc}>
							<h4>交通機関</h4>
							<div className={styles.text}>
								<span>
									<i className={styles['icon-JR']} aria-hidden="true"></i>
									山手線 原宿駅
								</span>
								<span>東口 徒歩5分</span>
								<span>
									<i className={styles['icon-TokyoMetro']} aria-hidden="true">
										<i className={styles['icon-background']}></i>
										<i className={styles['icon-logo']}></i>
									</i>
									千代田線 明治神宮前駅
								</span>
								<span>
									<i className={styles['icon-TokyoMetro']} aria-hidden="true">
										<i className={styles['icon-background']}></i>
										<i className={styles['icon-logo']}></i>
									</i>
									副都心線 明治神宮前駅
								</span>
								<span>2番出口 徒歩3分</span>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.map}>
					{/* <iframe
						src="https://snazzymaps.com/embed/493204"
						loading="lazy"
						aria-label="地図"
						title="map"
					></iframe> */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2805176856577!2d139.70200487623086!3d35.67009423058498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca4cfccf67d%3A0xcc90a94cf25f103!2z44CSMTUwLTAwMDEg5p2x5Lqs6YO95riL6LC35Yy656We5a6u5YmN77yR5LiB55uu77yR77yQ4oiS77yT77yUIOWOn-Wuv-OCs-ODvOODneWIpemkqA!5e0!3m2!1sja!2sjp!4v1708320151366!5m2!1sja!2sjp"
						title="map"
						loading="lazy"
					></iframe>
				</div>
			</div>
		</section>
	);
}

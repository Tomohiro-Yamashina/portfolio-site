import styles from './Company.module.scss';

function Company() {
	return (
		<>
			<article className={styles.module} id="company">
				<div className={styles.titleWrapper}>
					<h2 className={styles.title}>COMPANY</h2>
				</div>
				<section className={styles.outer}>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>INFORMATION</h3>
					</div>
					<table className={styles.info} aria-label="会社概要">
						<tbody>
							<tr>
								<th>社名</th>
								<td>株式会社 モルツ</td>
							</tr>
							<tr>
								<th>設立</th>
								<td>1990年10月1日</td>
							</tr>
							<tr>
								<th>資本金</th>
								<td>1,000,000円</td>
							</tr>
							<tr>
								<th>代表者</th>
								<td>代表取締役社長&ensp;&ensp;** **</td>
							</tr>
							<tr>
								<th>取引銀行</th>
								<td>さわやか信用金庫 青山渋谷支店 当座******</td>
							</tr>
							<tr>
								<th>主要取引先</th>
								<td>
									<ul>
										<li>合同会社ウェブレーン</li>
										<li>株式会社旺文社</li>
										<li>株式会社コムブリッジ</li>
										<li>株式会社コムブレインズ</li>
										<li>埼玉医科大学病院</li>
										<li>社会福祉法人埼玉医療福祉会</li>
										<li>仁愛大学</li>
										<li>株式会社ディスコ</li>
										<li>株式会社美松堂</li>
										<li>株式会社モメンタム ジャパン</li>
										<li>株式会社ライオン社 他</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th>スタッフ</th>
								<td>
									<ul>
										<li>クリエイティブディレクター1名</li>
										<li>ディレクター・デザイナー2名</li>
										<li>WEBディレクター・デザイナー2名</li>
										<li>コピーライター4名</li>
										<li>カメラマン5名</li>
										<li>イラストレーター2名</li>
										<li>デザイナー1名</li>
										<li>EBデザイナー1名</li>
										<li>動画クリエイター2名</li>
										<li>システムエンジニア1名</li>
										<li>ヘアメイク2名</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th>業務内容</th>
								<td>
									<ul>
										<li>企業・学校・病院案内パンフレット</li>
										<li>ホームページ制作</li>
										<li>
											イベント・キャンペーンSPツール（ポスター、チラシ等）
										</li>
										<li>製品カタログ</li>
										<li>企業PR誌</li>
										<li>新聞・雑誌広告</li>
										<li>書籍</li>
										<li>パッケージ</li>
										<li>ロゴマーク制定等</li>
										<li>グラフィックデザイン業務を中心に、企画から制作まで</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
					<div className={styles.subtitleWrapper}>
						<h3 className={styles.subtitle}>ACCESS</h3>
					</div>
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
											<i
												className={styles['icon-TokyoMetro']}
												aria-hidden="true"
											>
												<i className={styles['icon-background']}></i>
												<i className={styles['icon-logo']}></i>
											</i>
											千代田線 明治神宮前駅
										</span>
										<span>
											<i
												className={styles['icon-TokyoMetro']}
												aria-hidden="true"
											>
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
							<iframe
								src="https://snazzymaps.com/embed/493204"
								title="map"
								loading="lazy"
								aria-label="地図"
							></iframe>
						</div>
					</div>
				</section>
			</article>
		</>
	);
}

export default Company;

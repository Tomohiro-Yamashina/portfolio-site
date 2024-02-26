import styles from './Information.module.scss';
import { SubTitle } from '../../Utility/Utility.jsx';

export default function Information() {
	return (
		<section className={styles.container}>
			<SubTitle colorChange={'#fff'}>INFORMATION</SubTitle>
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
								<li>イベント・キャンペーンSPツール（ポスター、チラシ等）</li>
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
		</section>
	);
}

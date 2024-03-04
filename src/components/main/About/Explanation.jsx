import { forwardRef } from 'react';
import styles from './Explanation.module.scss';

// eslint-disable-next-line react/display-name
const Explanation = forwardRef((props, ref) => {
	return (
		<div className={styles.container}>
			<div className={styles.inner} ref={ref}>
				<div className={styles.titleWrapper}>
					<div>
						<h2 className={styles.title}>ABOUT US</h2>
						<h3 className={styles.subTitle}>モルツが大切にしていること</h3>
					</div>
				</div>

				<div className={styles.textWrapper}>
					<p className={styles.text}>
						まず、見た目の美しさだけでなく、
						<br />
						マーケティング的な視点からデザインを構築し、
						<br />
						メッセージとの融合を目指します。
						<br />
						効果的なコミュニケーションを提供し、
						<br />
						クライアントとの関係を築き上げます。
					</p>
					<p className={styles.text}>
						そしてもう一つ、デザインという
						<br />
						コミュニケーションを通じてクライアントと協力し、
						<br />
						共に喜びを分かち合える仕事をすること。
						<br />
						そのために私たちは、作品という成果が実るよう、
						<br />
						日々デザインという“畑”を耕し続けています。
					</p>
					<p className={styles.text}>
						“モルツ”は、企画から制作ディレクションまで、
						<br />
						トータルに手がけているデザイン会社です。
						<br />
						直接取引から大手代理店や出版社などを受注先として、
						<br />
						大手、中小企業、または各種団体など
						<br />
						さまざまな業種、 業態の広告を企画から参加しながら
						<br />
						グラフィックデザイン業務を中心に、
						<br />
						お手伝いさせていただきます。
					</p>
				</div>
			</div>
		</div>
	);
});

export default Explanation;

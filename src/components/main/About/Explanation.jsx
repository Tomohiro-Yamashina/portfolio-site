import { useEffect, forwardRef } from 'react';
import styles from './Explanation.module.scss';
// SplitType
// import SplitType from 'split-type';

const Explanation = forwardRef((props, ref) => {
	useEffect(() => {
		// const text = new SplitType(`.${styles.text}`, { types: 'chars' });
		// console.log(text);
	}, []);

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
						まず、見た目の美しさだけでなく、マーケティング的な視点からデザインを構築し、メッセージとの融合を目指します。効果的なコミュニケーションを提供し、クライアントとの関係を築き上げます。
					</p>
					<p className={styles.text}>
						そしてもう一つ、デザインというコミュニケーションを通じてクライアントと協力し、共に喜びを分かち合える仕事をすること。そのために私たちは、作品という成果が実るよう、日々デザインという“畑”を耕し続けています。
					</p>
					<p className={styles.text}>
						“モルツ”
						は、企画から制作ディレクションまで、トータルに手がけているデザイン会社です。直接取引から大手代理店や出版社などを受注先として、大手、中小企業、または各種団体などさまざまな業種、業態の広告を企画から参加しながらグラフィックデザイン業務を中心に、
						お手伝いさせていただきます。
					</p>
				</div>
			</div>
		</div>
	);
});

export default Explanation;

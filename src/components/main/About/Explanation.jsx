// React
import { useRef } from 'react';
// Custom Hook
import {
	mediaQuery,
	useMediaQuery,
} from '@/components/Utility/useMediaQuery.jsx';
// SCSS
import styles from './Explanation.module.scss';
// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// eslint-disable-next-line react/display-name
function Explanation() {
	const isTub = '';
	const container = useRef(null);
	const explanation = useRef(null);

	// Animation
	useGSAP(
		() => {
			const fadeInScroll = () => {
				gsap.fromTo(
					explanation.current,
					{
						alpha: 0,
						scale: 0.95,
					},
					{
						alpha: 1,
						scale: 1,
						duration: 0.4,
						ease: 'power4.out',
						scrollTrigger: {
							// markers: true,
							trigger: container.current,
							scrub: 0.5,
							start: 'top 75%',
							end: 'center center',
							invalidateOnRefresh: true,
						},
					},
				);
			};

			const explanationTextScroll = () => {
				const explanationHeight = explanation.current.offsetHeight;
				const explanationScrollHeight = explanation.current.scrollHeight;

				const tl = gsap.timeline({
					scrollTrigger: {
						// markers: true,
						trigger: container.current,
						pin: true,
						anticipatePin: 1,
						scrub: 0.5,
						start: 'top top',
						end: () => `+=${explanationScrollHeight}`,
						invalidateOnRefresh: true,
					},
				});
				tl.to(`.${styles.explanationText}`, {
					y: -(explanationScrollHeight - explanationHeight),
					ease: 'none',
				});
			};

			fadeInScroll();
			explanationTextScroll();
		},
		{ scope: container },
	);

	return (
		<div className={styles.container} ref={container}>
			<div className={styles.explanation} ref={explanation}>
				<div className={styles.explanationText}>
					<div className={styles.imageFirstWrapper}>
						<h3 className={styles.title}>
							<div>
								<span>WHAT IS</span>
								<span>MALTS</span>
								<span> ?</span>
							</div>
						</h3>
					</div>
					<div className={styles.textWrapper}>
						{isTub ? (
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
						) : (
							<p className={styles.text}>
								“モルツ”
								は、企画から制作ディレクションまで、トータルに手がけているデザイン会社です。
								{/* <br />
								<br /> */}
								直接取引から大手代理店や出版社などを受注先として、大手、中小企業、または各種団体などさまざまな業種、業態の広告を企画から参加しながらグラフィックデザイン業務を中心に、お手伝いさせていただきます。
							</p>
						)}

						<h3 className={styles.subtitle}>私たちの大切にしていること</h3>
						{isTub ? (
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
						) : (
							<p className={styles.text}>
								まず、見た目の美しさだけでなく、マーケティング的な視点からデザインを構築し、メッセージとの融合を目指します。効果的なコミュニケーションを提供し、クライアントとの関係を築き上げます。
							</p>
						)}

						{isTub ? (
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
						) : (
							<p className={styles.text}>
								そしてもう一つ、デザインというコミュニケーションを通じてクライアントと協力し、共に喜びを分かち合える仕事をすること。そのために私たちは、作品という成果が実るよう、日々デザインという“畑”を耕し続けています。
							</p>
						)}
					</div>
					<div className={styles.imageLastWrapper}>
						{/* <img src={malts} alt="malts logo" /> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Explanation;

import styles from './AboutUs.module.scss';
import logo from '../../../assets/img/malts-logo.svg';
import aboutImg01 from '../../../assets/img/about001.jpg';
import aboutImg02 from '../../../assets/img/about002.jpg';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function AboutUs() {
	const aboutUs = useRef(null);
	const image01 = useRef(null);
	const image02 = useRef(null);
	const aboutUsText = useRef(null);
	const container = useRef(null);

	useGSAP(
		() => {
			const aboutUsTextHeight = aboutUsText.current.offsetHeight;
			const containerHeight = container.current.offsetHeight;

			const aboutUsTextScroll = () =>
				gsap.to(aboutUsText.current, {
					y: -aboutUsTextHeight + containerHeight,
					ease: 'none',

					scrollTrigger: {
						trigger: aboutUs.current,
						pin: true,
						scrub: true,
						start: 'top top',
						end: aboutUsTextHeight,
						anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
						invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
					},
				});

			const aboutUsLogoScrollAlpha01 = () =>
				gsap.to(image01.current, {
					scrollTrigger: {
						trigger: aboutUsText.current,
						scrub: true,
						start: '15% top',
						end: '20% end',
						anticipatePin: 1,
						invalidateOnRefresh: true,
					},

					autoAlpha: 0,
					ease: 'none',
				});

			const aboutUsLogoScrollAlpha02 = () =>
				gsap.to(image02.current, {
					scrollTrigger: {
						trigger: aboutUsText.current,
						scrub: true,
						start: '30% top',
						end: `${aboutUsTextHeight}`,
						anticipatePin: 1,
						invalidateOnRefresh: true,
					},

					autoAlpha: 0,
					ease: 'none',
				});

			let mm = gsap.matchMedia();
			mm.add('(min-width: 1024px)', () => {
				aboutUsTextScroll();
				aboutUsLogoScrollAlpha01();
				aboutUsLogoScrollAlpha02();
			});
		},
		{ scope: aboutUs },
	);
	return (
		<>
			<div className={styles.container} id="about" ref={aboutUs}>
				<div className={styles.outer} ref={container}>
					<div className={styles.descWrapper}>
						<div className={styles.desc} ref={aboutUsText}>
							<div className={styles.titleWrapper}>
								<div className={styles.title.inner}>
									<h2 className={styles.title}>ABOUT US</h2>
									<h3 className={styles.subTitle}>
										モルツが大切にしていること
									</h3>
								</div>
							</div>

							<div className={styles.textWrapper}>
								<div className={styles.textInner}>
									<p className={styles.text}>
										まず、見た目の美しさだけでなく、
										マーケティング的な視点からデザインを構築し、
										メッセージとの融合を目指します。
										効果的なコミュニケーションを提供し、
										クライアントとの関係を築き上げます。
									</p>
									<p className={styles.text}>
										そしてもう一つ、デザインという
										コミュニケーションを通じてクライアントと協力し、
										共に喜びを分かち合える仕事をすること。
										そのために私たちは、作品という成果が実るよう、
										日々デザインという“畑”を耕し続けています。
									</p>
									<p className={styles.text}>
										“ モルツ ” は、企画から制作ディレクションまで、
										トータルに手がけているデザイン会社です。
										直接取引から大手代理店や出版社などを受注先として、
										大手、中小企業、または各種団体など
										さまざまな業種、業態の広告を企画から参加しながら
										グラフィックデザイン業務を中心に、
										お手伝いさせていただきます。
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.logoContainer}>
						<div className={styles.logoMotion01} ref={image01}>
							<div className={styles.outer}>
								<img className={styles.inner} src={logo} alt="malts-logo" />
							</div>
						</div>
						<div className={styles.logoMotion02} ref={image02}>
							<div className={styles.outer}>
								<img
									className={styles.inner}
									src={aboutImg01}
									alt="malts-logo"
								/>
							</div>
						</div>
						<div className={styles.logoMotion03}>
							<div className={styles.outer}>
								<img
									className={styles.inner}
									src={aboutImg02}
									alt="malts-logo"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutUs;

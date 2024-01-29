import styles from './AboutUs.module.scss';
import logo from '../../assets/img/malts-logo.svg';
import aboutImg01 from '../../assets/img/about001.jpg';
import aboutImg02 from '../../assets/img/about002.jpg';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
	const aboutUs = useRef(null);
	const aboutUsText = useRef(null);
	const container = useRef(null);

	useGSAP(
		() => {
			const aboutUsTextHeight = aboutUsText.current.offsetHeight;
			const containerHeight = container.current.offsetHeight;
			console.log(aboutUsTextHeight);
			// const aboutUsLogo01 = document.querySelector('.c-logo-motion');
			// const aboutUsLogo02 = document.querySelector('.c-logo-motion02');
			// const aboutUsLogo03 = document.querySelector('.c-logo-motion03');

			const aboutUsTextScroll = () =>
				gsap.to(aboutUsText.current, {
					y: -aboutUsTextHeight + containerHeight,
					ease: 'none',

					scrollTrigger: {
						trigger: aboutUs.current, // アニメーション開始のトリガー要素
						pin: true, // 要素を固定
						scrub: 1, // スクロール量に合わせてアニメーション
						start: 'top top', // アニメーションが始まる位置
						end: aboutUsTextHeight,
						anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
						invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
						// markers: true,
					},
				});

			// const aboutUsLogoScroll01 = (Selector) =>
			// 	gsap.to(Selector, {
			// 		scrollTrigger: {
			// 			trigger: aboutUsText, // アニメーション開始のトリガー要素
			// 			scrub: 1, // スクロール量に合わせてアニメーション
			// 			start: '15% top', // アニメーションが始まる位置
			// 			// end: `${aboutUsTextHeight}`,
			// 			end: '28% end',
			// 			anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
			// 			invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
			// 			// markers: true,
			// 		},

			// 		autoAlpha: 0,
			// 		ease: 'none',
			// 	});

			// const aboutUsLogoScroll02 = (Selector) =>
			// 	gsap.to(Selector, {
			// 		scrollTrigger: {
			// 			trigger: aboutUsText, // アニメーション開始のトリガー要素
			// 			scrub: 1, // スクロール量に合わせてアニメーション
			// 			start: '28% top', // アニメーションが始まる位置
			// 			end: `${aboutUsTextHeight}`,
			// 			// end: 'end',
			// 			anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
			// 			invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
			// 			// markers: true,
			// 		},

			// 		autoAlpha: 0,
			// 		ease: 'none',
			// 	});

			let mm = gsap.matchMedia();
			mm.add('(min-width: 1024px)', () => {
				aboutUsTextScroll();
				// aboutUsLogoScroll01(aboutUsLogo01);
				// aboutUsLogoScroll02(aboutUsLogo02);
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
										<br />
										マーケティング的な視点からデザインを構築し、メッセージとの融合を目指します。
										<br />
										効果的なコミュニケーションを提供し、クライアントとの関係を築き上げます。
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
										“ モルツ ” は、企画から制作ディレクションまで、
										<br />
										トータルに手がけているデザイン会社です。
										<br />
										直接取引から大手代理店や出版社などを受注先として、
										<br />
										大手、中小企業、または各種団体など
										<br />
										さまざまな業種、業態の広告を企画から参加しながら
										<br />
										グラフィックデザイン業務を中心に、
										<br />
										お手伝いさせていただきます。
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.logoContainer}>
						<div className={styles.logoMotion01}>
							<div className={styles.outer}>
								<img className={styles.inner} src={logo} alt="malts-logo" />
							</div>
						</div>
						<div className={styles.logoMotion02}>
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

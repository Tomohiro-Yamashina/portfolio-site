// React
import { useState, useRef } from 'react';
// SCSS
import styles from './Header.module.scss';
// GSAP
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// Lenis
import { useLenis } from '@studio-freight/react-lenis';
// SplitType
import SplitType from 'split-type';

function Header() {
	const [active, setActive] = useState(false);
	const [titleHover, setTitleHover] = useState(false);
	const menuItems = ['top', 'about', 'works', 'company', 'contact'];

	const refs = {
		logo: useRef(null),
		hamburger: useRef(null),
		firstLine: useRef(null),
		secondLine: useRef(null),
		thirdLine: useRef(null),
		nav: useRef(null),
	};

	// Lenisのインスタンス化
	const lenis = useLenis();
	// ナビ開閉時のスクロール挙動
	const handleHamburger = () => {
		setActive(!active);

		if (refs.nav.current.classList.contains('active')) {
			lenis.start();
		} else {
			lenis.stop();
		}
	};

	// GSAPから提供されているReact専用のHook
	useGSAP(
		() => {
			// アニメーション対象のテキストを文字毎に分割
			const text = new SplitType(`.${styles.title}`, { types: 'chars' });

			// 取得した配列にアニメーションを実装
			const hoverAnimation = () => {
				text.chars.forEach((target, i) => {
					gsap.to(target, {
						y: '-100%',
						delay: i * 0.02,
						duration: 0.4,
						ease: 'power4.out',
					});
				});
			};

			// 横幅768px以上での適用制限
			let mm = gsap.matchMedia();
			mm.add('(min-width: 768px)', () => {
				if (titleHover) {
					hoverAnimation();
				}
			});
		},
		{ dependencies: [titleHover], scope: refs.logo },
	);

	// document.querySelector('header').setAttribute('ontouchstart', ' ');

	return (
		<header>
			<div className={`${styles.header} ${active ? 'active' : ''}`}>
				<div className={styles.container}>
					<h1
						className={`${styles.logo} ${active ? 'active' : ''}`}
						ref={refs.logo}
						onMouseEnter={() => setTitleHover(true)}
						onMouseLeave={() => setTitleHover(false)}
					>
						<a href="./" className={styles.title}>
							MALTS
						</a>
						<a href="./" className={styles.title}>
							MALTS
						</a>
					</h1>
					<div
						className={`${styles.hamburger} ${active ? 'active' : ''}`}
						ref={refs.hamburger}
						onClick={handleHamburger}
					>
						{[...Array(3)].map((_, index) => (
							<span
								key={index}
								className={`${styles.line} ${active ? 'active' : ''}`}
								ref={
									refs[
										index === 0
											? 'firstLine'
											: index === 1
												? 'secondLine'
												: 'thirdLine'
									]
								}
							></span>
						))}
					</div>
				</div>
			</div>

			<nav className={`${styles.nav} ${active ? 'active' : ''}`} ref={refs.nav}>
				<ul className={styles.menu}>
					{menuItems.map((item, index) => (
						<li key={index} className={styles.item}>
							<a href={`#${item}`}>{item.toUpperCase()}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;

import { useState, useRef } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import styles from './Header.module.scss';

function Header() {
	const [active, setActive] = useState(false);
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

	return (
		<header>
			<div className={`${styles.header} ${active ? 'active' : ''}`}>
				<div className={styles.container}>
					<h1
						className={`${styles.logo} ${active ? 'active' : ''}`}
						ref={refs.logo}
					>
						<a href="*/">MALTS</a>
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
							<span className={styles.underLine}></span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;

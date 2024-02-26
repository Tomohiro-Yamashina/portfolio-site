import Header from '@/components/Header/Header.jsx';
import Main from '@/components/Main/Main.jsx';
import Footer from '@/components/Footer/Footer.jsx';
import './App.module.scss';
import { useRef, useEffect } from 'react';
// スムーススクロール
import { ReactLenis } from '@studio-freight/react-lenis';
// アニメーション
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import './library/adobefont.js';

// ****************************************************************
// GSAP 初期設定

// 使用する gsapプラグイン を登録する
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// ****************************************************************

function App() {
	// GSAPとLenisを統合
	const lenisRef = useRef();
	useEffect(() => {
		function update(time) {
			lenisRef.current?.lenis?.raf(time * 1000);
		}
		gsap.ticker.add(update);
		return () => {
			gsap.ticker.remove(update);
		};
	});

	return (
		<ReactLenis
			root
			options={{
				lerp: 0.1,
				duration: 1.2,
				smoothTouch: true,
				easing: 'easeOutQuart',
			}}
			ref={lenisRef}
			autoRaf={false}
		>
			<Header />
			<Main />
			<Footer />
		</ReactLenis>
	);
}

export default App;

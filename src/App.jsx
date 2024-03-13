// React
import { useRef, useEffect } from 'react';
// Component
import Header from '@/components/Header/Header.jsx';
import Main from '@/components/main/Main.jsx';
import Footer from '@/components/Footer/Footer.jsx';
// SCSS
import './App.module.scss';
// GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// Lenis
import { ReactLenis } from '@studio-freight/react-lenis';
// Font
import './library/adobefont.js';

// ****************************************************************
// GSAP 初期設定
gsap.registerPlugin(ScrollTrigger, useGSAP);
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

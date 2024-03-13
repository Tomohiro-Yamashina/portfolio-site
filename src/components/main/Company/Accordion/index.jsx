// React
import { useState, useEffect } from 'react';
// Component
import AccordionItem from './AccordionItem.jsx';
// GSAP
import { ScrollTrigger } from 'gsap/all'; //

export default function Accordion({ changeContainerHeight }) {
	// console.log(changeContainerHeight);

	// isOpenを各AccordionItemごとに管理するためのオブジェクト
	const [openItems, setOpenItems] = useState({
		panel1: false,
		panel2: false,
		panel3: false,
	});

	// changeContainerHeight();
	function handleClick(controls) {
		setOpenItems((prev) => {
			const newState = { ...prev };
			// クリックされたパネルをトグル
			newState[controls] = !newState[controls];
			// クリックされたパネル以外のすべてのパネルを閉じる
			Object.keys(newState).forEach((key) => {
				if (key !== controls) {
					newState[key] = false;
				}
			});
			return newState;
		});
	}

	useEffect(() => {
		// アコーディオンのアニメーションが完了するまで待機
		const timeoutId = setTimeout(() => {
			// changeContainerHeight();
			ScrollTrigger.refresh();
		}, 400);
		// cleanup functionでtimeoutをクリア
		return () => clearTimeout(timeoutId);
	}, [openItems, changeContainerHeight]);

	return (
		<>
			<AccordionItem
				title={'主要取引先 （五十音順）'}
				controls={'panel1'}
				isOpen={openItems['panel1']} // isOpenを各AccordionItemに渡す
				handleClick={() => handleClick('panel1')} // handleClickにcontrolsを渡す
			>
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
			</AccordionItem>

			<AccordionItem
				title={'主要スタッフ'}
				controls={'panel2'}
				isOpen={openItems['panel2']}
				handleClick={() => handleClick('panel2')}
			>
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
			</AccordionItem>

			<AccordionItem
				title={'業務内容'}
				controls={'panel3'}
				isOpen={openItems['panel3']}
				handleClick={() => handleClick('panel3')}
			>
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
			</AccordionItem>
		</>
	);
}

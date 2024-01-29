// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import Header from '@/components/header/Header.jsx';
import Main from '@/components/main/Main.jsx';
import Footer from '@/components/footer/Footer.jsx';

import styles from './App.module.scss';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

export default App;

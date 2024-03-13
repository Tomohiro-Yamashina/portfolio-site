// React
import { useEffect, useState } from 'react';

export const mediaQuery = {
	xs: '375px <= width',
	sm: '576px <= width',
	md: '768px <= width',
	lg: '1024px <= width',
	xl: '1280px <= width',
	xxl: '1536px <= width',
};

export const useMediaQuery = (query) => {
	const formattedQuery = `(${query})`;
	const [match, setMatch] = useState(matchMedia(formattedQuery).matches);

	useEffect(() => {
		const mql = matchMedia(formattedQuery);

		if (mql.media === 'not all' || mql.media === 'invalid') {
			console.error(`useMediaQuery Error: Invalid media query`);
		}

		mql.onchange = (e) => {
			setMatch(e.matches);
		};

		return () => {
			mql.onchange = null;
		};
	}, [formattedQuery, setMatch]);

	return match;
};

import {lazy} from 'react';

export const MainPageAsync = lazy(async () => new Promise(resolve => setTimeout(() => {
	resolve(
	// @ts-expect-error ignore
		import('./MainPage'));
}, 1500)));

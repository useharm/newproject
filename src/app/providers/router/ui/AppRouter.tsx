import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';
import {PageLoader} from 'widgets/PageLoader/ui/PageLoader';

function AppRouter() {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.entries(routeConfig).map(([key, value]) => (<Route
					key={value.path}
					path={value.path}
					element={(<div className='page-wrapper'>{value.element}</div>)} />))}
			</Routes>
		</Suspense>
	);
}

export default AppRouter;

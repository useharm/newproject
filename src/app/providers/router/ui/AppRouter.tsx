import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
  return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.entries(routeConfig).map(([key, value]) => (<Route 
                key={value.path} 
                path={value.path} 
                element={(<div className='page-wrapper'>{value.element}</div>)} />))}
            </Routes>
        </Suspense>
  )
}

export default AppRouter
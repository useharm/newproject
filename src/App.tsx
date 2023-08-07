import { Route, Routes } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';

function App() {
  return (
    <div className='app'>
        <Link to='/'>Main page</Link>
        <Link to='/about'>About page</Link>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<MainPageAsync />}></Route>
            <Route path='/about' element={<AboutPageAsync />}></Route>
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

function App() {
  const { theme, changeTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={() => changeTheme()}>toggle theme</button>
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
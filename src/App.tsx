import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense, useContext, useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

function App() {
  const { theme, changeTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
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
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

function App() {
  const { theme, changeTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={() => changeTheme()}>toggle theme</button>
        <Link to='/'>Main page</Link>
        <Link to='/about'>About page</Link>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
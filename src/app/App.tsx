import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className='content-page'>
          <SideBar />
          <AppRouter />
        </div>
    </div>
  )
}

export default App;
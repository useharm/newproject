import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/NavBar';

function App() {
  const { theme, changeTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
        <button onClick={() => changeTheme()}>toggle theme</button>
    </div>
  )
}

export default App;
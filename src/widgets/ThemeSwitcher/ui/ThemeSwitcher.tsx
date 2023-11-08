import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

type ThemeSwitcherProps = {
	className?: string;
};

export const ThemeSwitcher = ({className = ''}: ThemeSwitcherProps) => {
	const {theme, changeTheme} = useTheme();

	return (
		<Button
			onClick={() => {
				changeTheme();
			}}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			children={theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		/>
	);
};

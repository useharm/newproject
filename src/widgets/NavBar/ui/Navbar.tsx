import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';

type NavbarProps = {
	className?: string;
};

export function Navbar({className = ''}: NavbarProps) {
	const {t} = useTranslation('translation');
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>{t('linkMain')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>{t('linkAbout')}</AppLink>
			</div>
		</div>
	);
}

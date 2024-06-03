import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

type SideBarProps = {
	className?: string;
};

export const SideBar = ({ className = '' }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation('translation');
	const toggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div data-testid='sidebar'
			className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={toggle}>{t('toggleSideBar')}</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher className={cls.lang} />
			</div>
		</div>
	);
};

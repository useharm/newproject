import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import {type FC} from 'react';
import {Link, type LinkProps} from 'react-router-dom';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

type AppLinkProps = {
	className?: string;
	theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = props => {
	const {
		to,
		children,
		className = '',
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;
	return (
		<Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</Link>
	);
};

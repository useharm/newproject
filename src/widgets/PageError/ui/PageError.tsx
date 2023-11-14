import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';

type PageErrorProps = {
	className?: string;
};

export const PageError = ({className = ''}: PageErrorProps) => {
	const {t} = useTranslation('translation');
	function reloadPage() {
		location.reload();
	}

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<h1>{t('PageError')}</h1>
			<Button onClick={reloadPage}>{t('reloadPage')}</Button>
		</div>
	);
};

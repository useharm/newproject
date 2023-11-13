import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import {useTranslation} from 'react-i18next';

type NotFoundPageProps = {
	className?: string;
};

export const NotFoundPage = ({className = ''}: NotFoundPageProps) => {
	const {t} = useTranslation('notfound');

	return (<div className={classNames(cls.NotFoundPage, {}, [className])}>
		{t('Not Found')}
	</div>);
};

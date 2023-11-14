import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

// Компонент для тестирования
export const BugButton = () => {
	const [error, setError] = useState(false);
	const {t} = useTranslation('translation');

	function onThrow() {
		setError(true);
	}

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);
	return (<button onClick={onThrow}>
		{t('throwError')}
	</button>);
};

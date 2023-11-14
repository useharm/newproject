import {BugButton} from 'app/providers/ErrorBoundary/ui/BugButton';
import {useTranslation} from 'react-i18next';

function MainPage() {
	const {t} = useTranslation('main');
	return (
		<div>
			<BugButton />
			{t('Main page')}
		</div>
	);
}

export default MainPage;

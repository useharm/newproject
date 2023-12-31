import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

void i18n
	.use(Backend)
	.use(LanguageDetector)
// Вспомогательные либы весят в сборке ~40 кб, сохраняют выбранный язык в локалсторедже
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: Boolean(__IS_DEV__),

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;

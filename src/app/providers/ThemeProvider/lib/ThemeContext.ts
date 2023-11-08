/* eslint-disable @typescript-eslint/naming-convention */
import {createContext} from 'react';

export enum Theme {
	DARK = 'dark',
	LIGHT = 'light',
}

export type ThemeContextProps = {
	theme: Theme;
	setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({theme: Theme.LIGHT});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

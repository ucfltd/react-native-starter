import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const LightTheme = {
	dark: false,
    colors: {
		background: '#ededed',
		border: '#bdbdbd',
		backgroundAlt: '#eaeaeb',
		borderAlt: '#bdbdbd',
		text: '#171717',
		textPrimary: '#111',
		textSecondary: '#666',
	}
};
const DarkTheme = {
	dark: true,
	colors: {
		background: '#2E3440',
		border: '#575c66',
		backgroundAlt: '#575c66',
		borderAlt: '#2E3440',
		text: '#ECEFF4',
		textPrimary: '#fff',
		textSecondary: '#ddd',
	}
};

export const THEME = { LightTheme, DarkTheme };

export const SIZES = {

    radius: 10,
    padding: 10,

    // Font SIZES.
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,

    width,
    height,
};

export const FONTS = {
    largeTitle: {
        fontFamily: 'Helvetica',
        fontSize: SIZES.largeTitle,
    },
    h1: {
        fontFamily: 'Helvetica',
        fontSize: SIZES.h1,
        lineHeight: 36
    },
    h2: {
        fontFamily: 'Helvetica',
        fontSize: SIZES.h2,
        lineHeight: 30
    },
    h3: {
        fontFamily: 'Helvetica',
        fontSize: SIZES.h3,
        lineHeight: 22
    },
    h4: {
        fontFamily: 'Helvetica',
        fontSize: SIZES.h4,
        lineHeight: 22
    },
};

export default { THEME, SIZES, FONTS };
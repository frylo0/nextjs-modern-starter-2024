import { globalStyle } from '@vanilla-extract/css';

import { colors, fonts } from './bundle.css';

globalStyle('html', {
	fontSize: '12px',
	background: '#333',
	color: colors.black,
	fontFamily: fonts.gothamPro,
	fontWeight: 'normal',
});

globalStyle('*', {
	boxSizing: 'border-box',
});

globalStyle('a', {
	color: 'inherit',
	textDecoration: 'none',
});

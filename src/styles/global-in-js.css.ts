import { globalStyle } from '@vanilla-extract/css';

import { fonts } from './bundle.css';

globalStyle('html', {
	fontSize: '12px',
	background: '#222',
	fontFamily: fonts.gothamPro,
	fontWeight: 'normal',
});

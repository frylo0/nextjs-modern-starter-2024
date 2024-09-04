import { style } from '@vanilla-extract/css';

import { colors } from '@/styles/bundle.css';

export const sMain = style({
	color: colors.white,
	height: '100svh',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
});

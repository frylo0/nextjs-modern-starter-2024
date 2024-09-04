import { style, styleVariants } from '@vanilla-extract/css';

export const sButton = style({
	display: 'flex',
	padding: '1em',
	backdropFilter: 'blur(10px)',
	fontFamily: 'inherit',
});

export const svColor = styleVariants({
	primary: {
		background: 'blue',
		color: 'white',
	},
	secondary: {
		background: 'white',
		color: 'blue',
	},
});

export const svSize = styleVariants({
	large: {
		fontSize: '1.25em',
	},
	small: {
		fontSize: '1em',
	},
});

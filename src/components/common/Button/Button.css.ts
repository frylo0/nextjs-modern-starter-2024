import { style, styleVariants } from '@vanilla-extract/css';

const button = style({
	display: 'flex',
	padding: '1em',
	backdropFilter: 'blur(10px)',
});

const color = styleVariants({
	primary: {
		background: 'blue',
		color: 'white',
	},
	secondary: {
		background: 'white',
		color: 'blue',
	},
});

const size = styleVariants({
	large: {
		fontSize: '1.25em',
	},
	small: {
		fontSize: '1em',
	},
});

export const s = {
	button,
	size,
	color,
};

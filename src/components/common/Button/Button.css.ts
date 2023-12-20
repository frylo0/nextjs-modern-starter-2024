import { style } from '@vanilla-extract/css';

const button = style({
	display: 'flex',
	padding: '1em',
	backdropFilter: 'blur(10px)',
});

export const s = {
	button,
};
